import { Component, Input } from '@angular/core';
import { TreeNode, TREE_ACTIONS, KEYS, IActionMapping, TreeComponent } from 'angular-tree-component';
import {BalanceSheetChartService} from './bsTree.service';
import { documentDetailsService } from "../documentDetails-component/document-details.service";

const actionMapping:IActionMapping = {
  mouse: {
    contextMenu: (tree, node, $event) => {
      $event.preventDefault();
      alert(`context menu for ${node.data.name}`);
    },
    dblClick: (tree, node, $event) => {
      if (node.hasChildren) TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event);
    },
    click: (tree, node, $event) => {
      $event.shiftKey
        ? TREE_ACTIONS.TOGGLE_SELECTED_MULTI(tree, node, $event)
        : TREE_ACTIONS.TOGGLE_SELECTED(tree, node, $event)
    }
  },
  keys: {
    [KEYS.ENTER]: (tree, node, $event) => alert(`This is ${node.data.name}`)
  }
};

@Component({
  selector: 'balanceSheet-tree',
  styles: [
    `button: {
        line - height: 24px;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.5);
        border: none;
        border-radius: 2px;
        background: #A3D9F5;
        cursor: pointer;
        margin: 0 3px;
      }`
  ],
  templateUrl: './bsTree.component.html',
})

export class BalanceSheetTreeComponent {
  public chartData; // For testing API Gateway on AWS
  public show: boolean = true;
  //private tree: TreeComponent;

  public showLiteral(rollupCode: string): boolean {
    console.log('rollupCode: ' + rollupCode.substr(0, 3))
    if (rollupCode.substr(0, 3) == '001') {
      return true;
    } else {
      return false;
    }
  }

  private nodes: any[];
  private nodes2 = [{name: 'root'}, {name: 'root2'}];


  constructor(private _bsChartService: BalanceSheetChartService, private _docDetailsService: documentDetailsService) {

    let vIndex: number=0;
    let vCurrentLevel: number=0;
    let vLastLevel: number=-1;
    this._bsChartService.getBalanceSheetChart(this._docDetailsService.getCompNumber(), "IFR", 
        this._docDetailsService.getReportTypeCode()).subscribe(chartData => {

          console.log("chartData Length: " + chartData.length);

          this.nodes = [];
          for(let i = 0; i < chartData.length-1; i++) {
            vCurrentLevel = this.determineLevel(chartData[i].ROLLUPCODE);
            console.log(chartData[i].LITERAL + " level: " + vCurrentLevel);

            if (vCurrentLevel == 0) {
              console.log(" vRootIndex: " + vIndex);
              this.nodes.push({
                name: chartData[i].LITERAL,
                subTitle: chartData[i].ROLLUPCODE,
                children: new Array(0).fill(null).map((item, n) => ({
                  name: `childDynamic${i}.${n}`,
                  subTitle: `child created dynamically ${i}`,
                  hasChildren: true
                })),
              });
              vIndex = i;
            };

            if ((vCurrentLevel >= vLastLevel) && (vCurrentLevel != 0)){
              console.log(" vChildIndex: " + vIndex);
              //this.addNode(this.customTemplateStringOptions);              
              this.nodes[vIndex].children.push({
                name: chartData[i].LITERAL,
                subTitle: chartData[i].ROLLUPCODE,
                children: new Array(0).fill(null).map((item, n) => ({
                  name: `childDynamic${i}.${n}`,
                  subTitle: `child created dynamically ${i}`,
                  hasChildren: true
                })),
              });
              vIndex = i;              
            };

            if (vCurrentLevel < vLastLevel) {
              // go one level back
              //vIndex++;
              console.log(" vParentIndex: " + vIndex);
              this.nodes[vIndex].push({
                name: chartData[i].LITERAL,
                subTitle: chartData[i].ROLLUPCODE,
                children: new Array(0).fill(null).map((item, n) => ({
                  name: `childDynamic${i}.${n}`,
                  subTitle: `child created dynamically ${i}`,
                  hasChildren: true
                })),
              });
              vIndex = i;              
            }
            vLastLevel = vCurrentLevel;
          }
        });
  }


  // Retrieves the Chart of Accounts for the company and populates the
  // Chart of Accounts tree.
  private loadChartOfAccounts(_bsChartService: BalanceSheetChartService)
  {
    let vMapCode: number;
    let vLiteral,vSign,vRollupCode: string;
    let vExcluded,vUseMultiplier: boolean;
    let vLastItem: any;
    
    //Clear;
    vLastItem = null;
  
    let chartCode = 'IFR'; //getChartCode() ???
    if (chartCode != '') {
      this._bsChartService.getBalanceSheetChart(this._docDetailsService.getCompNumber(), chartCode, 
          this._docDetailsService.getReportTypeCode()).subscribe(chartData => {
            console.log("chartData.length: " + chartData.length);
            this.nodes = [];
            for(let i = 0; i < chartData.length-1; i++) {
              vMapCode = chartData[i].MAPCODE;
              vLiteral = chartData[i].LITERAL;
              vRollupCode = chartData[i].ROLLUPCODE;
              vSign = chartData[i].SIGN;
              vUseMultiplier = chartData[i].USEMULTIPLIER;
              vExcluded = (chartData[i].EXCLUDED != null);
              vLastItem = this.addChartAccount(vMapCode, vLiteral, vSign, vRollupCode, vUseMultiplier, vExcluded, vLastItem);
            }
          });
    };
  }  

  //private addChartAccount(aMapCode:number, aTitle,aSign,aRollupCode: string,
  //aUseMultiplier,aExcluded: Boolean, aLastItem: any): any 
  // Adds an account to the Chart of Accounts tree.  The account is added below
  // (as a child) or after (as a sibling) to AListItem, depending on the
  // ARollupCode of the account being added and the RollupCode of the account
  // stored in the ALastItem node.
  private addChartAccount(aMapCode:number, aTitle, aSign, aRollupCode: string, aUseMultiplier, aExcluded: boolean, aLastItem: any): any 
  {
    let vLevel: number;
    let vItem: any;
    let vParentItem:any;

      vLevel = this.determineLevel(aRollupCode);
  
      //vItem = this.getNodeByMapCode(aMapCode);
      if (vItem == null)
      {
        if ((aLastItem == null) || (vLevel == 0)) 
        {
          // Item is a "root" account:
          vItem = this.addChild(null)
        }
        else
        {
          if (vLevel > aLastItem.Level) 
          {
            // Item is a child of vLastItem
            vItem = this.addChild(aLastItem)
          }
          else
          {
            vParentItem = aLastItem;
            while ((vParentItem != null) && (vParentItem.Level >= vLevel)) {
              vParentItem = vParentItem.Parent
            };
            vItem = this.addChild(vParentItem);
          };
        };
      };
  
    vItem.HasChildren = false;
    vItem.EnteredValue = 0.0;
    vItem.Excluded = aExcluded;
    vItem.FormLevelError = false;
    vItem.FormLevelValue = 0.0;
    vItem.GeneratedError = false;
    vItem.GeneratedValue = 0.0;
    vItem.Level = vLevel;
    vItem.MapCode = aMapCode;
    vItem.RollupCode = aRollupCode;
    vItem.RollupError = false;
    vItem.RollupValue = 0.0;
    vItem.Sign = aSign;
    vItem.Title = aTitle;
    vItem.UseMultiplier = aUseMultiplier;

    return vItem;
  };


  private determineLevel(rollupCode: string): number {

    let LEVEL_LENGTH: number=3;
    let vLevel: number;
    let vMaxLevel:number;

    vMaxLevel=(rollupCode.length / LEVEL_LENGTH)-1;
    for (vLevel=0; vLevel<vMaxLevel; vLevel++) {
      if (rollupCode.substr((vLevel*LEVEL_LENGTH+1), LEVEL_LENGTH) =='000') {
        break;
      }
    }
    return vLevel-1;  
  }

  private addChild(aParent: any): any
  {
    let vNode: any;
    
    //New(vNode);
    //vNode.Parent:=AParent;
    //vNode.Level = 0;
    if (aParent != null)
    {
      //vNode.Level:=AParent.Level+1;
      //AParent.HasChildren:=True;
    };
    //FNodeList.Add(vNode);
    return vNode;
  };  

  ngOnInit() {
    //this.getChartList();
    //setTimeout(() => {
    //}, 1);
  }

  asyncChildren = [
    {
      name: 'child2.1',
      subTitle: 'new and improved'
    }, {
      name: 'child2.2',
      subTitle: 'new and improved2'
    }
  ];

  // to test api query on AWS:
  getChartList() { 
    console.log('I am in getChartList()!');
    this._bsChartService.getBalanceSheetChart(this._docDetailsService.getCompNumber(), "IFR", 
        this._docDetailsService.getReportTypeCode()).subscribe(
        // the first argument is a function which runs on success
      data => { this.chartData = data},
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done with getChartList()')
    );
  }

  getChildren(node: any) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(this.asyncChildren.map((c) => {
        return Object.assign({}, c, {
          hasChildren: node.level < 5
        });
      })), 1000);
    });
  }

  addNode(tree) {
    this.nodes[0].children.push({

      name: 'a new child'
    });
    tree.treeModel.update();
  }

  childrenCount(node: TreeNode): string {
    return node && node.children ? `(${node.children.length})` : '';
  }

  filterNodes(text, tree) {
    tree.treeModel.filterNodes(text);
  }

  activateSubSub(tree) {
    // tree.treeModel.getNodeBy((node) => node.data.name === 'subsub')
    tree.treeModel.getNodeById(1001)
      .setActiveAndVisible();
  }

  customTemplateStringOptions = {
    // displayField: 'subTitle',
    isExpandedField: 'expanded',
    idField: 'uuid',
    getChildren: this.getChildren.bind(this),
    actionMapping,
    nodeHeight: 23,
    allowDrag: true,
    useVirtualScroll: true
  }
  onEvent(event) {
    console.log(event);
  }

  go($event) {
    $event.stopPropagation();
    alert('this method is on the app component');
  }

  activeNodes(treeModel) {
    console.log(treeModel.activeNodes);
  }





}
