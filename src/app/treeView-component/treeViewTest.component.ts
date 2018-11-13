import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { IntegralUISelectionMode } from 'integralui/components/integralui.core';
import { IntegralUITreeView } from 'integralui/components/integralui.treeview';

import { ChartListService } from '../chartList-component/chartList.service';
import { documentDetailsService } from "../documentDetails-component/document-details.service";
import { AppSettings } from '../appsettings';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
    selector: 'treeViewTest',
    /*
    The ViewEncapsulation.None allows you to change the component appearance 
    by applying your own custom CSS styles within your app component. 
    This overrides the default CSS styles that are included in component css file. 
    As you may know, by default all Angular components are protected from outside changes of CSS. 
    The ViewEncapsulation.None allows you to override that within your app project, in code.    
    */
    encapsulation: ViewEncapsulation.None, 
    templateUrl: './treeViewTest.component.html',
    //styleUrls: ['../css/app.component.scss'],
    styleUrls: [ './treeViewFilter.scss' ],     
})

export class TreeViewTestComponent {
    //@ViewChild('application', {read: ViewContainerRef}) applicationRef: ViewContainerRef;
    @ViewChild('treeviewTest') treeviewTest: IntegralUITreeView;

    public items: Array<any> = []; //Gets or Sets a collection of tree items that are assigned to the TreeView.
    public gMessage: string='';
    public gToggle: string='1'
    //public gSelectedChartCode: string = "AppSettings.CHART_CODE";
    public gSelectedChartCode: string = "";
    public title: string;
    public chartIDList: Array<any> = []; 
    public selMode: IntegralUISelectionMode = IntegralUISelectionMode.MultiExtended;
    public showLines: boolean=true;
    public selectedLiteral: string="";
    //Filter ...
    public combinations: Array<any> = [ 'Or', 'Or' ];
    public filterValue: string;
    public filterOptions: Array<any> = [];
    public selOptions: Array<any> = [];
    public filterValues: Array<any> = [ '', '', '' ];

    
    public ctrlStyle: any = {
        general: {
            normal: 'leftDiv'
        }
    }

    public treeDataFields: any = {
        text: 'LITERAL',
    }

    public comboStyle: any = {
        general: {
            normal: 'trw-ftr-cmb'
        }
    }

    constructor(private _chartListService: ChartListService,
             private _docDetailsService: documentDetailsService, private http: Http){
        this.gSelectedChartCode = this._docDetailsService.selectedChartCode;
        //console.log("code constructor(): " + this.gSelectedChartCode);
        // Options from Author Filter to choose from
        this.filterOptions = [
            { text: ' ' },
            { text: 'equals' },
            { text: 'does not equal' },
            { text: 'begins with' },
            { text: 'does not begin with' },
            { text: 'ends with' },
            { text: 'does not end with' },
            { text: 'contains' },
            { text: 'does not contain' }
          ];
  
          this.selOptions = [ this.filterOptions[0], this.filterOptions[0], this.filterOptions[0] ];
      }

    ngOnInit(): void {    
        //console.log("i'm in treeView ngOnInit !!!");
        this._docDetailsService.selectedTitle.subscribe((val: string) => {
            this.title = val.substr(val.indexOf('-')+1, val.length)
        }); 
        this.getChartIDList();
    }

    // to load chart list:
    private getChartIDList() { 
        //console.log('I am in getChartList()!');
        this._chartListService.getChartIDs(
            this._docDetailsService.getCompNumber(), 
            //AppSettings.CHART_CODE, // Default is IFR, but chart code should be also retrieved from the user interface
            this.gSelectedChartCode,
            this._docDetailsService.getReportTypeCode(), 
            this._docDetailsService.getFormID().getValue()
        ).subscribe(
            // the first argument is a function which runs on success
            data => { 
                this.chartIDList = data;
            },
            // the second argument is a function which runs on error
            err => console.error(err),
            // the third argument is a function which runs on completion
            //() => console.log('DONE WITH getChartIDList() ... ' + this.chartIDList.length)
        );
    }

    ngAfterViewInit(aToggle: string, aCode: string){
        //console.log("I''m in ngAfterViewInit() ... ")
        //console.log("code ngAfterViewInit(): " + aCode);
        this.loadFromJSON(null, aToggle, aCode);
    } 
    
    private onItemClick(e: any, item: any){
        //console.log(item.ORDERLINK + ' - selectedOrderLink!');
        this.selectedLiteral = item.LITERAL;
        this._chartListService.setMapCode(item.MAPCODE);
        this._chartListService.setLiteral(item.LITERAL);
        this._chartListService.setOrderLink(item.ORDERLINK);
    }
    
    private loadFromJSON(item: any, aToggle: string, aCode: string){
        //console.log("Toggle in loadFromJSON(): " + aToggle);
        //console.log("code in loadFromJSON(): " + aCode);

        let originalChartData: any[];
        let processedChartData: any[];

        if (aCode) {
            this.gSelectedChartCode = aCode;
        }

        this._chartListService.getChartAccountDlgData(
            this.gSelectedChartCode,
            this._docDetailsService.getFormID().getValue()
        ).subscribe(
            originalChartData => { 
                    // assign the right pid for each account and more ...
                    //processedChartData = originalChartData;
                    processedChartData = this.processData(originalChartData);
                    // add processed data to the chart tree
                    this.addData(processedChartData, item);
            },
        error => console.log(error));

    }

    private addData(data: any, item?: any){
        
        // Load data from JSON into the TreeView as children for specified item
        this.treeviewTest.loadData(data, item, this.treeDataFields);
        
        // Restore the expanding icon
        this.treeviewTest.endLoad(item);
    
        // Update the appareance of the TreeView
        this.treeviewTest.refresh();

        this.treeviewTest.collapse();
    }    

    private processData(data: any) {
        //console.log('inside processData!!!')
        let vFound: boolean=false;
        let vLength: number;
        let vElement: string;

        for (let i = 0; i < data.length; i++) {
            if (data[i].pid !== '') {

                vLength = data[i].pid.length;
                vFound = false;
                while ((vFound == false) && (vLength > 0)) {
                    vElement = data[i].pid.substr(0, vLength);
                    //console.log('inside processData while loop ---> ' + vElement + ' ---> ' + data[i].LITERAL);

                    let newArr = this.chartIDList.filter(function(item){
                        return item.id === vElement;
                    });
                    if (newArr.length > 0) {
                        data[i].pid = vElement;
                        vFound = true;
                        //console.log('Found it !!! ---> ' + data[i].LITERAL + ' ---> ' + vElement + ' ---> ' + vLength);
                        break;
                    }
                    else {
                        vLength -= 3;
                    }
                }    
                
            }
        }           

        return data;
    }
    
    public scrollToItem(aText: string){
        //let item: any = this.treeview.findItemById(item.itemID);
        let item: any = this.treeviewTest.findItemByText(aText);
        if (item){
            // Use scrollTo method to scroll the view so that the item is visible
            this.treeviewTest.scrollTo(item);
    
            // Select the item once it is present in current view
            this.treeviewTest.selectedItem = item;

            this.selectedLiteral = item.LITERAL;
            this._chartListService.setMapCode(item.MAPCODE);
            this._chartListService.setLiteral(item.LITERAL);
        }
    }   
    
    //applyFilter(){
        //console.log("filterValue: " + this.filterValue)
        //this.scrollToItem(this.filterValue);
    //}
    
    applyFilter(){
        let filterConditions = [];
        for (let i = 0; i < 3; i++){
            if (this.selOptions[i] != '' && this.filterValues[i] != ''){
                let currentOperation = this.getOperation(this.selOptions[i]);

                filterConditions.push({ 
                    value: this.filterValues[i],
                    operation: currentOperation,
                    negative: this.filterOptions.indexOf(this.selOptions[i]) % 2 == 0
                });
            }
        }

        if (filterConditions.length > 0){
            let params: any = {
                allowParent: true,
                caseSensitive: false
            }

            if (filterConditions.length == 1){
                params.conditions = filterConditions[0];
            }
            else {
                params.conditions = filterConditions;
                params.formula = this.getFormula(filterConditions);
            }

            this.treeviewTest.filter(params);
        }
        else
            this.resetFilter();
    }


    //resetFilter(){
        //this.filterValue = "";
    //}
    
    resetFilter(){
        this.filterValues = [ '', '', '' ];
        this.selOptions = [
            this.filterOptions[0],
            this.filterOptions[0],
            this.filterOptions[0]
        ];

        this.combinations = [ 'Or', 'Or' ];
        
        this.treeviewTest.filter();
    }

    private getOperation(option: any){
        let index = this.filterOptions.indexOf(option);
        switch (index){
            case 1: //equals
                return '=';

            case 2: //does not equal
                return '!=';

            case 3: //begins with
                return '->';

            case 4: //does not begin with
                return '->';

            case 5: //ends with
                return '<-';

            case 6: //does not end with
                return '<-';

            case 7: //contains
                return '[]';

            case 8: //does not contain
                return '[]';
        }

        return '';
    }

    filterOptionChanged(e: any, index: number){
        this.selOptions[index]= e.item;
    }
    onCombinatorChanged(index: number, flag?: boolean){
        if (flag)
            this.combinations[index] = 'Or';
        else
            this.combinations[index] = 'And';
    }
    getFormula(conditions: Array<any>){
        let formula: string = '';

        let firstCombination = this.combinations[0];
        let secondCombination = this.combinations[1];
        if (conditions.length == 2 && this.selOptions[0].text == '')
            firstCombination = this.combinations[1];

        let firstSymbol = conditions[0].negative ? '!a' : 'a';
        let secondSymbol = conditions[1].negative ? '!b' : 'b';

        if (firstCombination == 'And')
            formula = '(' + firstSymbol + ' & ' + secondSymbol + ')';
        else
            formula = '(' + firstSymbol + ' | ' + secondSymbol + ')';
        
        if (conditions.length == 3){
            let thirdSymbol = conditions[2].negative ? '!c' : 'c';

            if (secondCombination == 'And')
                formula += ' & ' + thirdSymbol;
            else
                formula += ' | ' + thirdSymbol;
        }

        return formula;
    }

}

