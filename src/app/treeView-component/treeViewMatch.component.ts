import { Component, ViewChild, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { IntegralUISelectionMode } from 'integralui/components/integralui.core';
import { IntegralUITreeView } from 'integralui/components/integralui.treeview';

import { ChartListService } from '../chartList-component/chartList.service';
import { documentDetailsService } from "../documentDetails-component/document-details.service";

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
    selector: 'treeViewMatched',
    /*
    The ViewEncapsulation.None allows you to change the component appearance 
    by applying your own custom CSS styles within your app component. 
    This overrides the default CSS styles that are included in component css file. 
    As you may know, by default all Angular components are protected from outside changes of CSS. 
    The ViewEncapsulation.None allows you to override that within your app project, in code.    
    */
    encapsulation: ViewEncapsulation.None, 
    templateUrl: './treeViewMatch.component.html',
    styleUrls: [ './treeViewMatch.component.scss' ],     
})

export class TreeViewMatchedComponent {
    //@ViewChild('application', {read: ViewContainerRef}) applicationRef: ViewContainerRef;
    @ViewChild('treeviewMatched') treeViewMatched: IntegralUITreeView;

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
    public selectedOption: string="";
    
    //Filter ...
    public filterValue: string="";
    public filterOptions: Array<any> = [];

    
    public ctrlStyle: any = {
        general: {
            normal: 'trv-matched-div'
        }
    }

    public treeDataFields: any = {
        text: 'LITERAL',
        //id: 'ID',
        //pid: 'PID',
    }

    public comboStyle: any = {
        general: {
            normal: 'trw-ftr-cmb'
        }
    }

    constructor(private cd: ChangeDetectorRef, private _chartListService: ChartListService,
        private _docDetailsService: documentDetailsService, private http: Http){
      //console.log("inside constructor()!!!");
        this.gSelectedChartCode = this._docDetailsService.selectedChartCode;
        this._docDetailsService.selectedTitle.subscribe((val: string) => {
            this.title = val.substr(val.indexOf('-')+1, val.length)
        }); 
    }
        
    public ngOnInit(){
        //console.log("code ngAfterViewInit(): ");
        //setTimeout(() => {
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
        //});
    } 

    public ngAfterViewInit() {
        //setTimeout(() => {
            this.selectedOption = this.filterOptions[1];
            this.getChartIDList();
            this.loadFromJSON(null);
        //});
        /*
            Hint: detectChanges() forces another change detection cycle for the parent component 
            between the first one and the verification phase. The best place to do it is 
            inside the ngAfterViewInit lifecycle hook as it’s triggered when change detection 
            for all child components have been performed and so they all had possibility to 
            update parent components property        
        */
        this.cd.detectChanges(); 
    }

    // to load chart list:
    private getChartIDList() { 
        //console.log('inside getChartIDList()!');
        
        let compNum = this._docDetailsService.getCompNumber();
        let chartCode = this.gSelectedChartCode;
        let type = this._docDetailsService.getReportTypeCode(); 
        let formCode = this._docDetailsService.getFormID().getValue();
        if ((compNum>0) && (chartCode) && (type) && (formCode)) {
            this._chartListService.getChartIDs(compNum, chartCode,type, formCode).subscribe(
                // the first argument is a function which runs on success
                data => { 
                    this.chartIDList = data;
                },
                // the second argument is a function which runs on error
                err => {
                    console.error(err)
                }
                // the third argument is a function which runs on completion
                //() => console.log('DONE WITH getChartIDList() ... ' + this.chartIDList.length)
            );
        }  
        else {
            console.log("WARNING: Parameter list is not complete in getChartIDList!!!");
        } 
    }

    private loadFromJSON(item: any){
        //console.log("inside loadFromJSON()!!");
        
        let originalChartData: any[];
        let processedChartData: any[];

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

                    // save expanded state for TreeView items:
                    this.saveTreeStatus();
            },
        error => console.log("error in loadFromJSON: " + error));

    }

    private processData(data: any) {
        //console.log('inside processData!!!')

        let vFound: boolean=false;
        let vLength: number;
        let vElement: string;

        for (let i = 0; i < data.length; i++) {
            if (data[i].pid) {

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
    
    
    private addData(data: any, item?: any){                
        //console.log("inside addData()!!");
        // Load data from JSON into the TreeView as children for specified item
        this.treeViewMatched.loadData(data, item, this.treeDataFields);
        
        // Restore the expanding icon
        this.treeViewMatched.endLoad(item);
    
        // Update the appareance of the TreeView
        this.treeViewMatched.refresh();

        this.treeViewMatched.collapse();        
    }    

    private saveTreeStatus() {
        //console.log("inside saveTreeStatus()!!");
        if (localStorage){
            //console.log("localStorage created!!!");
            // Suspend the TreeView layout to increase performance
            this.treeViewMatched.suspendLayout();
           
            // Use JSON parse method to extract the data from local storage
            let storedItems = JSON.parse(localStorage.getItem("TREE_EXPAND_STATE"));
            if (storedItems){
                // Update the item expanded state from the saved data
                for (let i = 0; i < storedItems.length; i++){
                        let item = this.treeViewMatched.findItemById(storedItems[i].id); // id is case sensitive in this line and must keep it lowercase
                        if (item)
                            item.expanded = storedItems[i].expanded;
                }
            }
               
            // Resume and update the layout of TreeView
            this.treeViewMatched.resumeLayout();
        }        
            
    }

    private onItemClick(e: any, item: any){
        //console.log("Mapcode: " + item.MAPCODE);
        this.selectedLiteral = item.LITERAL;
        this._chartListService.setMapCode(item.MAPCODE);
        this._chartListService.setLiteral(item.LITERAL);

        // Save expanded state for treeViewMatched items:
        let savedList: Array<any> = [];
        let list = this.treeViewMatched.getFullList();
        for (let i = 0; i < list.length; i++){
            savedList.push({
                id: list[i].id,
                expanded: list[i].expanded
            });            
        }
        if (localStorage)
            localStorage.setItem("TREE_EXPAND_STATE", JSON.stringify(savedList));
    }

    applyFilter(){
        let filterConditions = [];
        if (this.selectedOption != '' && this.filterValue != ''){
            let currentOperation = this.getOption(this.selectedOption);

            filterConditions.push({ 
                value: this.filterValue,
                operation: currentOperation,
                negative: this.filterOptions.indexOf(this.selectedOption) % 2 == 0
            });
        }
        
        if (filterConditions.length > 0){
            let params: any = {
                allowParent: true,
                caseSensitive: false
            }

            params.conditions = filterConditions[0];
            this.treeViewMatched.filter(params);

            if (filterConditions[0].operation === "=") {
                //console.log("condition is: " + filterConditions[0].operation);
                this.treeViewMatched.expand();
                this.scrollToItem(this.selectedLiteral);
            }
        }
        else
            this.resetFilter();

    }
    
    public scrollToItem(aText: string){
        //console.log("scroll to Item: " + aText);
        //let item: any = this.treeview.findItemById(item.itemID);
        let item: any = this.treeViewMatched.findItemByText(aText);
        if (item){
            // Use scrollTo method to scroll the view so that the item is visible
            this.treeViewMatched.scrollTo(item);
    
            // Select the item once it is present in current view
            this.treeViewMatched.selectedItem = item;

            this.selectedLiteral = item.LITERAL;
            this._chartListService.setMapCode(item.MAPCODE);
            this._chartListService.setLiteral(item.LITERAL);
        }
    }   
    
    resetFilter(){    
        this.filterValue = '';
        this.selectedOption = this.filterOptions[0];
        this.treeViewMatched.filter();
    }

    private getOption(option: any){
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
    
    filterOptionChanged(e: any){
        this.selectedOption = e.item;
    }
    

}

