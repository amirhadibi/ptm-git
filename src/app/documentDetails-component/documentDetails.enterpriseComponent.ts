import {Component, OnInit, ViewEncapsulation} from "@angular/core";
import { EventEmitter, Input, Output } from '@angular/core';
import {GridOptions, IEnterpriseGetRowsParams} from "ag-grid";
import {CommonModule}  from '@angular/common'; 
import { AppSettings } from '../appsettings';

import {documentDetailsService} from './document-details.service';
import {ChartListService} from '../chartList-component/chartList.service';
import { SpinnerService } from '../shared/spinner.service';

//import { RedComponent } from "../red-component/red-component";

import 'rxjs/add/operator/map';

@Component({
    selector: 'documentDetails',
    templateUrl: './documentDetails.component.html',
    styleUrls: ['../css/app.component.scss'],
})

export class DocumentDetailsComponent {
    //Emits an event using an EventEmitter
    //@Output() chartEvent = new EventEmitter();
    @Output() treeEvent = new EventEmitter();
    @Output() documentHeaderEvent = new EventEmitter();
    @Output() findChartLiteralEvent = new EventEmitter();

    //public doc_list; // For testing API Gateway on AWS
    public rowData: any[];
    public gAmountNames: string[] = [];
    public selectedLiteral: string="";

    private myOptions: string[] = ["contains", "notContains", "equals", "startsWith", "endsWith"];
    private gridColumnApi;
    private gridOptions: GridOptions;
    private columnDefs: any[];
    private tempRowData: any[];
    private maxConcurrentDatasourceRequests;
    //private doc_id = this.getDocID();
    //private comp_name = this.getCompName();
    //private column_id = 0; 
    private form_id = ""; 
    //private title: string = "";
    private dataSource = {
        pageSize: 100,
       // paginationOverflowSize: 100,     
                       
        getRows: (params: IEnterpriseGetRowsParams) => {
            //console.log('I am in getRows()!');

            // Spinner on
            this._loaderService.display(true);
            //console.log('Spinner On - getRows');
                
        
            if (this._docDetailsService.selectedDocID > 0) {
                //console.log('There is a dataSource.DocID !');
                this.returnRows().subscribe(tempRowData => {

                    // assign the right amounts for each columnID and more ...
                    this.rowData = this.processData(tempRowData);

                    // take a slice of the total rows
                    let dataAfterSortingAndFiltering = this.sortAndFilter(this.rowData, params.request.sortModel, params.request.filterModel);
                    let rowsThisPage = dataAfterSortingAndFiltering.slice(params.request.startRow, params.request.endRow);

                    // if on or after the last page, work out the last row.
                    let lastRow = -1;
                    if (dataAfterSortingAndFiltering.length <= params.request.endRow) {
                        lastRow = dataAfterSortingAndFiltering.length;
                    }

                    this._loaderService.display(false);
                    //console.log('Spinner Off - getRows-selectedDocID>0');
            
                    //call the success callback
                    params.successCallback(rowsThisPage, lastRow);

                });
            }
            else {
                this._loaderService.display(false);
                //console.log('Spinner Off - getRows-selectedDocID<=0');    
            }            
        }
    
    }    

    constructor(private _docDetailsService: documentDetailsService,  private _loaderService: SpinnerService,
            private _chartListService: ChartListService) {
        //console.log('I am in docDetails constructor()!');
        // we pass an empty gridOptions in, so we can grab the api out
        this.maxConcurrentDatasourceRequests = 2;
        this.gridOptions = <GridOptions>{};
        this.createColumnDefs();        
            
        // Retreive rows from database and display them in grid:
        //this.gridOptions.datasource = this.dataSource; 
        
    }
        
    ngOnInit() {
        //console.log('I am in ngOnInit()!');

        // For testing API Gateway on AWS
        //this.getDetails(); 

        //this._docDetailsService.selectedTitle.subscribe((val: string) => {
            //this.title = val;
        //});

        this._docDetailsService.selectedFormCode.subscribe((val: string) => {
            this.form_id = val;
        });        
    }

    private onGridReady(params: any) {
        this.gridOptions.api.setEnterpriseDatasource(this.dataSource); 
        this.gridColumnApi = params.columnApi;
        this.gridOptions.api.setColumnDefs(this.columnDefs);
        this.gridOptions.getRowStyle = this.getRowStyle;
    }        
      
    private createColumnDefs() {
        console.log('I am in createColumnDefs()!');

        this._loaderService.display(true);
        //console.log('Spinner On - columnDef');  

        if (this._docDetailsService.selectedDocID > 0) {
            //console.log('There is a numberOfColumns.DocID !');
            this.returnColumnIDs().subscribe(tempColumnIDsData => {
    
                let numOfCols = tempColumnIDsData.length;
                //console.log('Number Of Columns: ' + numOfCols);
                this.columnDefs = new Array();
                this.columnDefs.push({
                    field:'literal', headerName: 'Literal', width: 400, editable: true, hide: false,
                    filter: "text", filterParams: {filterOptions: this.myOptions, applyButton: true, clearButton:true},
                    //cellRendererFramework: RedComponent,
                });

                this.columnDefs.push({
                    field:'wellsLiteral', headerName: 'Wells Literal', hide: true,
                });

                this.columnDefs.push({
                    field:'compLiteral', headerName: 'Company Literal', hide: true,
                });
                    
                this.columnDefs.push({
                    field:'amount', headerName: '', hide: true,
                    /*
                    cellStyle: function(params) {
                        if (params.value === null) {
                            return {'color': 'Grey'};
                        }
                    }, 
                    */
                });
                    
                for (let i=0; i<numOfCols; i++) {
                    //console.log('Inside the for loop - field: ' + tempColumnIDsData[i].COLUMNID);
                    this.columnDefs.push({ 
                        field:'amount'+tempColumnIDsData[i].COLUMNID, headerName: 'Amount', editable: true,
                        
                        /*
                        cellStyle: function(params) {
                            if (params.value < '0') {
                                return {'color': 'red'};
                            }
                        },
                        */ 
                                              
                        filter: 'number', suppressMenu: true, width: 90,
                        //cellRenderer: this.percentCellRenderer,
                        //cellRendererFramework: RedComponent,
                    });
                    this.gAmountNames.push('amount'+tempColumnIDsData[i].COLUMNID);
                    //console.log('AMOUNTS: ' + this.gAmountNames[i]);

                }
                        
                this._loaderService.display(false);
                //console.log('Spinner Off - columnDef-selectedDocID>0');
            
            });
        }
        else {
            this._loaderService.display(false);
            //console.log('Spinner Off - columnDef-selectedDocID<=0');    
        }
    }        

    /*
    private percentCellRenderer(params) {
        const value = params.value;
        //console.log('params.value' + value);
        
        const eDivPercentBar = document.createElement('div');
        eDivPercentBar.className = 'div-percent-bar';
        eDivPercentBar.style.width = value + '%';
        if (value < 20) {
            eDivPercentBar.style.backgroundColor = 'red';
        } else if (value < 60) {
            eDivPercentBar.style.backgroundColor = '#ff9900';
        } else {
            eDivPercentBar.style.backgroundColor = '#00A000';
        }
    
        const eValue = document.createElement('div');
        eValue.className = 'div-percent-value';
        eValue.innerHTML = value + '%';
    
        const eOuterDiv = document.createElement('div');
        eOuterDiv.className = 'div-outer-div';
        eOuterDiv.appendChild(eValue);
        eOuterDiv.appendChild(eDivPercentBar);
    
        return eOuterDiv;
    }
*/

    private getRowStyle(params) {
        ////console.log('Wells Literal: ' + params.data.wellsLiteral);
        if ((params.data.compLiteral === null) && (params.data.amount !== null)) { // not in company accounts
            return {'color': 'Red'};
        }
        if ((params.data.amount === null)) { // not in company accounts
            return {'color': 'Grey'};
        }
        if (params.data.compLiteral.toLowerCase === params.data.literal.toLowerCase) { // not in company accounts
            return {'color': 'green'};
        }
    };

    private returnRows() {
        //console.log('I am in docDetails returnRows()!');       
        return this._docDetailsService.getDocumentDetails();    
    }    

    private returnColumnIDs() {
        //console.log('I am in docDetails returnColumnIDs()!');       
        return this._docDetailsService.getColumnIDs();    
    }    

    private returnNumberOfColumnIDs(columnIDs) {
        //console.log('I am in docDetails returnNumberOfColumnIDs()!');       
        let array_values = new Array();

        for (var id in columnIDs) {            
            array_values.push(columnIDs[id].COLUMNID);
            //console.log('Values' + '[' + id + '] = ' + array_values[id]);
        }
        //console.log('Max: ' + Math.max(...array_values));
        return Math.max(...array_values);    
    }    

    private sortAndFilter(allOfTheData, sortModel, filterModel) {
        //console.log('I am in sortAndFilter()!');
        return this.sortData(sortModel, this.filterData(filterModel, allOfTheData))
    }

    private processData(allOfTheData) {
        let realRowData: any[] = [];
        let myIndex: number;

        for (let i = 0; i < allOfTheData.length; i++) {
            let colID = allOfTheData[i].COLUMNID;
            let vFieldName = "amount" + colID;
            if (i>0) {
                if (allOfTheData[i].ITEMNAME == allOfTheData[i-1].ITEMNAME) {
                    myIndex = realRowData.length-1;
                    realRowData[myIndex][vFieldName] = allOfTheData[i].AMOUNT;
                }
                else {
                    realRowData.push({
                        wellsLiteral: allOfTheData[i].WELLSLITERAL,
                        compLiteral: allOfTheData[i].COMPLITERAL,
                        amount: allOfTheData[i].AMOUNT,
                        literal: allOfTheData[i].ITEMNAME,
                        [vFieldName] : allOfTheData[i].AMOUNT
                    });               
                }
            }
            else {
                realRowData.push({
                    wellsLiteral: allOfTheData[i].WELLSLITERAL,
                    compLiteral: allOfTheData[i].COMPLITERAL,
                    amount: allOfTheData[i].AMOUNT,
                    literal: allOfTheData[i].ITEMNAME,
                    [vFieldName] : allOfTheData[i].AMOUNT
                });               
            }            
        } // For loop
        this.fitColumns();
        return realRowData;
    }

    private sortData(sortModel, data) {
        //console.log('I am in sortData()!');

        var sortPresent = sortModel && sortModel.length > 0;
        if (!sortPresent) {
            return data;
        }
        // do in memory sort of the data, across all the fields
        var resultOfSort = data.slice();
        resultOfSort.sort(function(a,b) {
            for (let model of sortModel) {
                //console.log('SortModel = ' + model.colId);
                let sortColModel = model;
                let valueA = a[sortColModel.colId];
                let valueB = b[sortColModel.colId];
                // this filter didn't find a difference, move onto the next one
                if (valueA==valueB) {
                    continue;
                }
                let sortDirection = sortColModel.sort === 'asc' ? 1 : -1;
                if (valueA > valueB) {
                    return sortDirection;
                } else {
                    return sortDirection * -1;
                }
            }
            // no filters found a difference
            return 0;
        });
        return resultOfSort;
    }

    private filterData(filterModel, data) {
        //console.log('I am in filterData()!');
        var filterPresent = filterModel && Object.keys(filterModel).length > 0;
        if (!filterPresent) {
            //console.log('No filter!');
            return data;
        }

        let resultOfFilter = [];
        for (let item of data) {

            if (filterModel.literal) {
                var cn = item.literal;
                var cnFilter = filterModel.literal.filter;
                if (filterModel.literal.type.toLowerCase() == 'contains') {
                    if (cn.toLowerCase().indexOf((cnFilter).toLowerCase()) < 0) {
                        //COMPANYNAME didn't match, so skip this record
                        continue;
                    }
                } else if (filterModel.literal.type.toLowerCase() == 'notcontains') {
                    if (cn.toLowerCase().indexOf((cnFilter).toLowerCase()) >= 0) {
                        //COMPANYNAME didn't match, so skip this record
                        continue;
                    }
                } else if (filterModel.literal.type.toLowerCase() == 'equals') {
                    //console.log(filterModel.literal.type);
                    if (cn.toLowerCase() != cnFilter.toLowerCase()) {
                        //COMPANYNAME didn't match, so skip this record
                        continue;
                    }
                } else if (filterModel.literal.type.toLowerCase() == 'notequal') {
                    //console.log(filterModel.literal.type);
                    //console.log(cnFilter.toLowerCase());
                    //console.log(cn.toLowerCase());

                    if (cn.toLowerCase() === cnFilter.toLowerCase()) {
                        //COMPANYNAME did match, so skip this record
                        continue;
                    }
                } else if (filterModel.literal.type.toLowerCase() == 'startswith') {
                    if (cn.toLowerCase().substr(0,(cnFilter.length)) != cnFilter.toLowerCase()) {
                        //COMPANYNAME didn't match, so skip this record
                        continue;
                    }
                } else if (filterModel.literal.type.toLowerCase() == 'endswith') {
                    if (cn.substr(cn.length-cnFilter.length,(cnFilter.length)).toLowerCase() != cnFilter.toLowerCase()) {
                        //DOCUMENTID didn't match, so skip this record
                        continue;
                    }
                } else {
                }
            }

            ////console.log(resultOfFilter);
            resultOfFilter.push(item);
        }

        return resultOfFilter;
    }

/*
    // to test api query on AWS:
    getDetails() { 
        //console.log('I am in getDocList()!');
        //this._demoService.getStatus().subscribe(
        this._docDetailsService.getDocumentDetails().subscribe(
        // the first argument is a function which runs on success
          data => { this.doc_list = data},
          // the second argument is a function which runs on error
          err => console.error(err),
          // the third argument is a function which runs on completion
          () => //console.log('done with getDocList()')
        );
    }
*/

    getDocID() { 
        ////console.log('I am in getDocID() and docID is: ' + this._docDetailsService.getDocumentID().valueOf());
        return this._docDetailsService.selectedDocID;
    }

    getFormID() { 
        ////console.log('I am in getFormID()!');
        return this._docDetailsService.selectedFormCode;
    }

    getColumnID() { 
        ////console.log('I am in getColumnID() and columnID is: ' + this._docDetailsService.getColumnID().valueOf());
        return this._docDetailsService.selectedColumnID;
    }

    getCompName() { 
        ////console.log('I am in getCompName()!');
        return this._docDetailsService.selectedCompanyName;
    }

    getTitle(formID: string) {
        ////console.log(this._docDetailsService.selectedTitle);
        return this._docDetailsService.selectedTitle;
    }

    onRowClicked(event: any) { 
        //let rowNode = this.gridOptions.api.getDisplayedRowAtIndex(0);
        //console.log('onRowClicked ' + rowNode.data.literal);
        //console.log('Clicked Row: ' + event.node.data.literal);
        this.selectedLiteral = event.node.data.literal;
        this.findChartLiteralEvent.emit(null);
    }

    private onRowSelected(event: any) {
        // taking out, as when we 'select all', it prints to0 much in the console!!
        ////console.log('Selected Doc ID: : ' + event.node.data.DOCUMENTID);
    }
    
    public getFinancials(formID: string) {
        console.log('I am in DOCDETAILS.getFinancials()!');

        this._docDetailsService.setTitle(formID);
        this._docDetailsService.setFormID(formID);
        console.log('title and id are done!');

        this.createColumnDefs();    
        console.log('columnDef is done!');

        //Calls getChartList() in ChartListComponent:
        this.treeEvent.emit(null);

        //Calls getDocumentHeaderList() in topPanelComponent:
        this.documentHeaderEvent.emit(null);
        console.log('events are done!');

        //Clear the grid first
        this.clearGrid();
        console.log('clearGrid is done!');

        this.populateGrid();
        console.log('populateGrid is done!');

    }

    private clearGrid(){
        let self = this;
        let emptyDataSource = {
            getRows(params: IEnterpriseGetRowsParams) {
                params.successCallback([],0);
            }
        };
        this.gridOptions.api.setEnterpriseDatasource(emptyDataSource);
    }  
    
    private populateGrid() {
        let populatedDataSource = {
            pageSize: 100,
            //paginationOverflowSize: 100,     
                           
            getRows: (params: IEnterpriseGetRowsParams) => {
                console.log('I am in getRows()!');
    
                // Spinner on
                this._loaderService.display(true);
                console.log('Spinner On - getRows');
                    
            
                if (this._docDetailsService.selectedDocID > 0) {
                    console.log('There is a dataSource.DocID !');
                    this.returnRows().subscribe(tempRowData => {
    
                        // assign the right amounts for each columnID and more ...
                        this.rowData = this.processData(tempRowData);
    
                        // take a slice of the total rows
                        let dataAfterSortingAndFiltering = this.sortAndFilter(this.rowData, params.request.sortModel, params.request.filterModel);
                        let rowsThisPage = dataAfterSortingAndFiltering.slice(params.request.startRow, params.request.endRow);
    
                        // if on or after the last page, work out the last row.
                        let lastRow = -1;
                        if (dataAfterSortingAndFiltering.length <= params.request.endRow) {
                            lastRow = dataAfterSortingAndFiltering.length;
                        }
    
                        this._loaderService.display(false);
                        console.log('Spinner Off - getRows-selectedDocID>0');
                
                        //call the success callback
                        params.successCallback(rowsThisPage, lastRow);
    
                    });
                }
                else {
                    this._loaderService.display(false);
                    console.log('Spinner Off - getRows-selectedDocID<=0');    
                }            
            }
        
        } 
        this.gridOptions.api.setEnterpriseDatasource(populatedDataSource);               
    }

    private showLiteral(show: boolean) {
        ////console.log("show: " + show);
        this.gridColumnApi.setColumnVisible("literal", show);
    }

    private fitColumns() {
        this.gridOptions.api.sizeColumnsToFit();
    }
    
    private resetColumns() {
        this.gridColumnApi.resetColumnState();
    }
    
    public scrollToItem(aText: string){
        console.log('inside scrollToItem: ' + aText);
        this.gridOptions.api.ensureIndexVisible(20, null);
    }   
    
}


/*        
        switch(formID) { 
            case "01": { 
               //console.log("Set ColumnID for Balance Sheet"); 
               this._docDetailsService.setColumnID(1);
               break; 
            } 
            case "02": { 
                //console.log("Set ColumnID for Income Statement"); 
                this._docDetailsService.setColumnID(4);
                break; 
            } 
            case "05": {
                //console.log("Set ColumnID for Cash Flow"); 
                this._docDetailsService.setColumnID(7);
                break;    
            } 
            default: { 
                //console.log("Set ColumnID for Default"); 
                this._docDetailsService.setColumnID(1);
                break;              
            } 
        }
*/

        
