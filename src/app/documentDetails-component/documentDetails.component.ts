import {Component, EventEmitter, Output} from "@angular/core";
import {GridOptions} from "ag-grid";
//import {CommonModule}  from '@angular/common'; 
//import {AppSettings} from '../appsettings';
import {documentDetailsService} from './document-details.service';
import {ChartListService} from '../chartList-component/chartList.service';
import {SpinnerService} from '../shared/spinner.service';
import 'rxjs/add/operator/map';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { TreeViewMatchedDialog } from '../treeView-component/treeViewMatchedDlg.component'
import {ConfirmDialog} from '../dialogs/confirmationDlg';
//import { RedComponent } from "../red-component/red-component";

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
    @Output() findChartItemEvent = new EventEmitter();
    @Output() alertEvent = new EventEmitter();

    //public doc_list; // For testing API Gateway on AWS
    public gMessage: string='';
    public gAmountNames: string[] = [];
    public gRowClicked: number=0;
    public gColID: any[];
    public gSelectedChartCode: string = "";

    public rowData: any[];
    public selectedLiteral: string="";
    public selectedIndex: number=0;
    public selectedNoPrint: number=0;
    public selectedRowIndex: number=0;
    public selectedDoubleCounted: number=0;
    //public selectedOrderLink: string="";
    //public selectedMapcode: string="";

    private myOptions: string[] = ["contains", "notContains", "equals", "startsWith", "endsWith"];
    private gridColumnApi;
    private gridOptions: GridOptions;
    private columnDefs: any[];
    //private tempRowData: any[];
    //private doc_id = this.getDocID();
    //private comp_name = this.getCompName();
    //private column_id = 0; 
    //private form_id = ""; 

    constructor(public dialog: MatDialog, private _docDetailsService: documentDetailsService,  private _loaderService: SpinnerService,
            private _chartListService: ChartListService) {
        console.log('I am in docDetails constructor()!');
        // we pass an empty gridOptions in, so we can grab the api out
        this.gridOptions = <GridOptions>{};

        this.returnColumnIDs().subscribe((val: any) => {    
            this.gColID = val;
        });

        //this.createColumnDefs();        
    }
        
    public ngAfterViewInit() {
        this.getFinancials('01', 'US');
    }

    // Called in html
    private onGridReady(params: any) {
        this.gridColumnApi = params.columnApi;
        this.gridOptions.api.setColumnDefs(this.columnDefs);
        this.gridOptions.getRowStyle = this.getRowStyle;
        //setTimeout(function(){this.getRowStyle,0});
    }    
          
    private createColumnDefs() {
        console.log('I am in createColumnDefs()!');

        //this._loaderService.display(true);
        //console.log('Spinner On - columnDef');  

        if (this._docDetailsService.selectedDocID > 0) {
            //console.log('There is a numberOfColumns.DocID !');
            this.returnColumnIDs().subscribe(tempColumnIDsData => {

                this.gColID = tempColumnIDsData;
    
                let numOfCols = tempColumnIDsData.length;
                //console.log('Number Of Columns: ' + numOfCols);
                this.columnDefs = new Array();
                this.columnDefs.push({
                    headerName: '', 
                    field: 'selected',
                    hide: false,
                    suppressMenu: true,
                    width: 30,
                    cellStyle: this.selectedCellColor,
                    onCellClicked: e => {
                        this.refreshAll();
                        if (e.node.data.matched !== 'F') {
                            if ((e.node.data.amount) || (e.node.data.matched == 'T')) {
                                if ((e.node.data.compLiteral) || (e.node.data.matched == 'T')) {
                                    if (e.node.data.selected === "√") 
                                        e.node.data.selected = ' ';
                                    else {
                                        e.node.data.selected = '√';
                                    }
                                }
                            }
                            this.refreshAll();
                        }
                    },
                                    
                });
                this.columnDefs.push({
                    hide: true,
                    headerName: '', 
                    field: 'matched',
                    suppressMenu: true,
                    width: 30,
                    //cellStyle: this.changeCellColor,
                    //checkboxSelection: true,
                    /*
                    cellEditor: 'popupSelect',
                    cellEditorParams: {
                        cellRenderer: this.matchedCellRenderer,
                        values: ['!']
                    }
                    */
                                    
                });
                this.columnDefs.push({
                    headerName: '', 
                    field:'indicator', 
                    suppressMenu: true,
                    width: 30, 
                    hide: false,
                    /*
                    cellStyle: function(params) {
                        if (params.value === null) {
                            return {'color': 'Grey'};
                        }
                    }, 
                    */
                });
                this.columnDefs.push({
                    field:'literal', headerName: 'Literal', width: 400, editable: true, hide: false,
                    filter: "text", filterParams: {filterOptions: this.myOptions, applyButton: true, clearButton:true},
                    cellStyle: this.changeCellColor,
                    //cellRendererFramework: RedComponent,
                });

                this.columnDefs.push({
                    field:'doubleCounted', headerName: 'DoubleCounted', hide: true, //cellRenderer: 'dcCellRenderer'
                });

                this.columnDefs.push({
                    field:'noPrint', headerName: 'NoPrint', hide: true,
                });

                this.columnDefs.push({ 
                    suppressMenu: true,
                    field:'valueOrder', headerName: 'ValueOrder', hide: true,
                    //sort: { direction: 'asc', priority: 0 },
                });

                this.columnDefs.push({
                    field:'wellsLiteral', headerName: 'Wells Literal', hide: true,
                });

                this.columnDefs.push({
                    field:'wellsMapcode', headerName: 'Wells Mapcode', hide: true,
                });

                this.columnDefs.push({
                    field:'wellsOrderlink', headerName: 'Wells Orderlink', hide: true,
                });

                this.columnDefs.push({
                    field:'compLiteral', headerName: 'Company Literal', hide: true,
                });
                                        
                this.columnDefs.push({
                    field:'mapcode', headerName: 'Mapcode', hide: true,
                });
                                        
                this.columnDefs.push({
                    field:'orderlink', headerName: 'OrderLink', hide: true,
                });
                                        
                this.columnDefs.push({
                    field:'amount', headerName: 'amount', hide: true,
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
                        //colId: 'amount'+tempColumnIDsData[i].COLUMNID,
                        field: 'amount'+tempColumnIDsData[i].COLUMNID, 
                        headerName: 'Amount', 
                        editable: true,
                        cellStyle: this.changeCellColor,
                        
                        /*
                        cellStyle: function(params) {
                            if (params.value < '0') {
                                return {'color': 'red'};
                            }
                        },
                        */ 
                                              
                        filter: 'number', 
                        suppressMenu: true, width: 90,
                        //cellRenderer: this.percentCellRenderer,
                        //cellRendererFramework: RedComponent,
                    });
                    this.gAmountNames.push('amount'+tempColumnIDsData[i].COLUMNID);
                    //console.log('AMOUNTS: ' + this.gAmountNames[i]);

                }
                        
                //this._loaderService.display(false);
                //console.log('Spinner Off - columnDef-selectedDocID>0');
            
            });
        }
        else {
            //this._loaderService.display(false);
            //console.log('Spinner Off - columnDef-selectedDocID<=0');    
        }
    }       
    
    private changeCellColor(params) {
        if (params.node.data) {
            if(params.node.data.matched === "T") {
                return {'color': 'orange'};    
            }
            else if (params.node.data.matched === "F")  {
                return {'color': 'red'};    
            }     
            else if ((params.node.data.matched === "I") || (params.node.data.matched === "M"))  {
                return {'color': 'blue'};    
            }     
            else if (params.node.data.matched === "P")  {
                return {'color': 'purple'};    
            }     
        }
    }

    private selectedCellColor(params) {
        return {'color': 'grey'};    
    }

/*

    private matchedCellRenderer(params) {
        params.color = "Orange";
        return params.value;
    }

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

    public getRowStyle(params) {   
        let vSetGrey = 0;

        //console.log("inside getRowStyle --> Amount: " + params.data.amount);
        if (params.data) {
            if ((params.data.compLiteral === null) && (params.data.amount !== null)) { 
                return {'color': 'Red'};
            }
    
            //if ((params.data.amount === null)) { 
                //return {'color': 'Grey'}; // This needs to be reviewed!!!
            //}

            if (params.data.compLiteral && params.data.literal) {
                if ((params.data.compLiteral === params.data.literal)) {
                    if ((params.data.mapcode === params.data.wellsMapcode) && (params.data.orderlink === params.data.wellsOrderlink))  
                        return {'color': 'green'}
                    if ((params.data.mapcode !== params.data.wellsMapcode) || (params.data.orderlink !== params.data.wellsOrderlink))  
                        return {'color': 'purple'}
                }
        
                else {
                    if ((params.data.mapcode === params.data.wellsMapcode) && (params.data.orderlink === params.data.wellsOrderlink))  
                        return {'color': 'purple'}
                    if ((params.data.mapcode !== params.data.wellsMapcode) || (params.data.orderlink !== params.data.wellsOrderlink))  
                        return {'color': 'red'}
                }
            }
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

    private sortAndFilter(allOfTheData, sortModel, filterModel) {
        //console.log('I am in sortAndFilter()!');
        return this.sortData(sortModel, this.filterData(filterModel, allOfTheData))
    }

    private processData(allOfTheData: any, aFormatID: string) {
        let realRowData: any[] = [];
        let myIndex: number;
        let vIndicator: string="";

        for (let i = 0; i < allOfTheData.length; i++) {
            let colID = allOfTheData[i].COLUMNID;
            let vFieldName = "amount" + colID;

            // Remove dots from amounts only in European Format:
            if (aFormatID === 'EUR') {
                if (allOfTheData[i].AMOUNT) {
                    allOfTheData[i].AMOUNT = allOfTheData[i].AMOUNT.replace('.', '');
                    //console.log("Amount: " + allOfTheData[i].AMOUNT);
                }
            }

            if ((allOfTheData[i].DOUBLECOUNTED === 1) && (allOfTheData[i].NOPRINT === 1)) {
                vIndicator = "*#"
            }
            else if ((allOfTheData[i].DOUBLECOUNTED === 1) && (allOfTheData[i].NOPRINT === 0)) {
                    vIndicator = "*"
            }
            else if ((allOfTheData[i].DOUBLECOUNTED === 0) && (allOfTheData[i].NOPRINT === 1)) {
                vIndicator = "#"
            }
            else {
                vIndicator = ""
            }
            //vIndicator = (allOfTheData[i].DOUBLECOUNTED === 1) ? "*" : "";
            //vIndicator = (allOfTheData[i].NOPRINT === 1) ? "#" : "";

            //let vElement = allOfTheData[i].ITEMNAME;

            if (i>0) {


                /*
                let newArr = allOfTheData.filter(function(item){
                    return item.ITEMNAME === vElement;
                });
                    if (newArr.length > 0) {
                    console.log("item found: " + allOfTheData[i].ITEMNAME)
                    myIndex = realRowData.length-1;
                    realRowData[myIndex][vFieldName] = allOfTheData[i].AMOUNT;
                }
                */
    
                if (allOfTheData[i].ITEMNAME === allOfTheData[i-1].ITEMNAME) {
                    myIndex = realRowData.length-1;
                    realRowData[myIndex][vFieldName] = allOfTheData[i].AMOUNT;
                    realRowData[myIndex]['amount'] = realRowData[myIndex]['amount'] + allOfTheData[i].AMOUNT;
                }

                else {
                    realRowData.push({
                        wellsLiteral: allOfTheData[i].WELLSLITERAL,
                        noPrint: allOfTheData[i].NOPRINT,
                        indicator: vIndicator,
                        doubleCounted: allOfTheData[i].DOUBLECOUNTED,
                        matched: 'X',
                        compLiteral: allOfTheData[i].COMPLITERAL,
                        amount: allOfTheData[i].AMOUNT,
                        literal: allOfTheData[i].ITEMNAME,
                        mapcode: allOfTheData[i].MAPCODE,
                        orderlink: allOfTheData[i].ORDERLINK,
                        wellsMapcode: allOfTheData[i].WELLSMAPCODE,
                        wellsOrderlink: allOfTheData[i].WELLSORDERLINK,
                        [vFieldName] : allOfTheData[i].AMOUNT,
                        valueOrder: allOfTheData[i].VALUEORDER,
                    });               
                }
            }
            else {
                realRowData.push({
                    wellsLiteral: allOfTheData[i].WELLSLITERAL,
                    noPrint: allOfTheData[i].NOPRINT,
                    indicator: vIndicator,
                    doubleCounted: allOfTheData[i].DOUBLECOUNTED,
                    matched: 'X',
                    compLiteral: allOfTheData[i].COMPLITERAL,
                    amount: allOfTheData[i].AMOUNT,
                    literal: allOfTheData[i].ITEMNAME,
                    mapcode: allOfTheData[i].MAPCODE,
                    orderlink: allOfTheData[i].ORDERLINK,
                    wellsMapcode: allOfTheData[i].WELLSMAPCODE,
                    wellsOrderlink: allOfTheData[i].WELLSORDERLINK,
                    [vFieldName] : allOfTheData[i].AMOUNT,
                    valueOrder: allOfTheData[i].VALUEORDER,
                });               
            }            
        } // For loop
        //this.fitColumns(); this makes horizontal scroll bar visible in Windows
        
        realRowData.sort((a,b) => {
            if (a.valueOrder === b.valueOrder) return 0;
            //if (a.valueOrder < b.valueOrder) return 1;
            if (a.valueOrder > b.valueOrder) return 1;
            return -1;
        });
        
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
                if (valueA === valueB) {
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

    onRowClicked(event: any) { 
        //let rowNode = this.gridOptions.api.getDisplayedRowAtIndex(0);
        //console.log('Clicked Row: ' + event.node.data.literal);
        
        this.selectedRowIndex = event.rowIndex;
        this.selectedNoPrint = event.node.data.noPrint;
        this.selectedDoubleCounted = event.node.data.doubleCounted;
        this.selectedLiteral = event.node.data.literal;
        //this.selectedOrderLink = event.node.data.orderlink;
        //this.selectedMapcode = event.node.data.mapcode;
        
        this._docDetailsService.setOrderlink(event.node.data.orderlink);
        this._docDetailsService.setMapcode(event.node.data.mapcode);
        this._docDetailsService.setSelectedLiteral(event.node.data.literal);
        
        this.gRowClicked = 1;
        this.findChartItemEvent.emit(null);
    }

    private onRowSelected(event: any) {
        if (event.node.selected) {
            this.selectedRowIndex = event.rowIndex;
            this.selectedNoPrint = event.node.data.noPrint;
            this.selectedDoubleCounted = event.node.data.doubleCounted;
            this.selectedLiteral = event.node.data.literal;

            // gRowClicked determies how user selects a row: 1-RowClicked, 2-Space Bar, 0- treeView clicked.
            // 2 is the only case that findChartItemEvent gets called; because in other cases, we don't need to call it.
            // Side effect is that we cannot call findChartItemEvent using keyboard unless clicking on grid first. 
            if (this.gRowClicked === 2) {
                this._docDetailsService.setOrderlink(event.node.data.orderlink);
                this._docDetailsService.setMapcode(event.node.data.mapcode);
                this._docDetailsService.setSelectedLiteral(event.node.data.literal);
                this.findChartItemEvent.emit(null);
                //console.log('Selected Literal: ' + event.node.data.literal);
                //console.log('gRowClicked: ' + this.gRowClicked);
            } else if(this.gRowClicked === 1)
                this.gRowClicked = 2;
            
        }
    }
    
    public getFinancials(aformID, aFormatID: string) {
        console.log('I am in DOCDETAILS.getFinancials()!');
        //Clear the grid first
        this.clearGrid();

        this._docDetailsService.setTitle(aformID);
        this._docDetailsService.setFormID(aformID);

        this.gSelectedChartCode = this._docDetailsService.selectedChartCode;
        this.treeEvent.emit(null);
        
        this.createColumnDefs(); 
        this.populateGrid(aFormatID);
        
        //Calls getDocumentHeaderList() in topPanelComponent:
        this.documentHeaderEvent.emit(null);
    }

    private clearGrid(){
        let self = this;
        let emptyDataSource = {
            getRows(params:any) {
                params.successCallback([],0);
            }
        };
        this.gridOptions.api.setDatasource(emptyDataSource);
    }  
    
    private populateGrid(aFormatID: string) {
        let populatedDataSource = {
            pageSize: 500,
            //paginationOverflowSize: 100,     
                           
            getRows: (params: any) => {
                //console.log('I am in getRows()!');
    
                // Spinner on
                //this._loaderService.display(true);
                //console.log('Spinner On - getRows');
                    
            
                if (this._docDetailsService.selectedDocID > 0) {
                    //console.log('There is a DocID !');
                    this.returnRows().subscribe(tempRowData => {
    
                        // assign the right amounts for each columnID and more ...
                        this.rowData = this.processData(tempRowData, aFormatID);
    
                        // take a slice of the total rows
                        let dataAfterSortingAndFiltering = this.sortAndFilter(this.rowData, params.sortModel, params.filterModel);
                        let rowsThisPage = dataAfterSortingAndFiltering.slice(params.startRow, params.endRow);
    
                        // if on or after the last page, work out the last row.
                        let lastRow = -1;
                        if (dataAfterSortingAndFiltering.length <= params.endRow) {
                            lastRow = dataAfterSortingAndFiltering.length;
                        }
    
                        //this._loaderService.display(false);
                        //console.log('Spinner Off - getRows-selectedDocID>0');
                
                        //call the success callback
                        params.successCallback(rowsThisPage, lastRow);
    
                        // set focus on the first row
                        this.selectRow(0,0);
                    });
                }
                else {
                    //this._loaderService.display(false);
                    //console.log('Spinner Off - getRows-selectedDocID<=0');    
                }            
            }
        
        } 
        this.gridOptions.api.setDatasource(populatedDataSource);               
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
    
    private selectRow(rowIndex, colIndex) {
        //console.log("selectedRow: " + rowIndex);
        let selectedCol = this.gridOptions.columnApi.getAllDisplayedColumns()[colIndex];

        // sets focus into the selected grid cell
        this.gridOptions.api.setFocusedCell(rowIndex, selectedCol);

        // scrolls to the selected row
        //this.gridOptions.api.ensureIndexVisible(rowIndex);

        // scrolls to the selected column
        //this. gridOptions.api.ensureColumnVisible(selectedCol);

        //let rowNode = this.gridOptions.api.getDisplayedRowAtIndex(rowIndex);
        //rowNode.setSelected(true);        
    }

    /*
    public scrollToRow(aMapcode, aOrderlink: string, aRowClicked: number){
        let index = 0;
        this.gRowClicked = aRowClicked;
        if (aMapcode !== ""){
            index = this.getIndex(aMapcode, aOrderlink); // get the index of a row containg the aMapcode+aOrderlink in grid
            if (index !==0 ) {
                this.gridOptions.api.ensureIndexVisible(index); // makes grid scrolls
                let rowNode = this.gridOptions.api.getDisplayedRowAtIndex(index);
                rowNode.setSelected(true);

                // scrolls to the literal column
                let selectedCol = this.gridOptions.columnApi.getAllDisplayedColumns()[2]; 

                //change focus to selected row/column to make it possible for user to use keyboard to navigate
                this.gridOptions.api.setFocusedCell(rowNode.rowIndex, selectedCol);

                //console.log('docDetails scrollToItem: ' + rowNode.data.literal);
            }
        }

    } 
    
    private getIndex(aMapcode, aOrderlink: string) {
        let result = 0;
        for (let i = 0; i < this.rowData.length; i++) {    
            if ((this.rowData[i].mapcode === aMapcode) && (this.rowData[i].orderlink === aOrderlink)) {
                result = i;
                //console.log("Found it: " + this.rowData[i].literal);
                break;
            }
        }
        return result;
    }
    */

    getContextMenuItems = (params) => { // if you need to use "this" inside the function then you need to use arrow function
    //private getContextMenuItems(params) {
        let vSelectedDoubleCounted:number = 0;
        let vSelectedNoPrint:number = 0;
        if (params.node) {
            vSelectedNoPrint = params.node.data.noPrint;
            vSelectedDoubleCounted = params.node.data.doubleCounted;
        }
        let vTemp: RegExp;
        //let vMatched: string=params.node.data.matched;

        //let colID = allOfTheData[i].COLUMNID;
        //let vFieldName = "amount" + colID;

        let result = [
            {
                //name: "Alert " + params.value,
                name: "Match to Chart Account",
                //shortcut: "Alt + M",
                action: () => { // if you need to use "this" inside the function then you need to use arrow function
                    //console.log("MCA Selected");
                    this.openDialog(params);
                },
                //cssClasses: ["redFont", "bold"],
            },
            {
                name: "Insert after selected on left",
                //shortcut: "Alt + I",
                //disabled: !(params.node.data.matched === 'T'),
                //tooltip: "someToolTip"
                action: () => { // if you need to use "this" inside the function then you need to use arrow function
                    if (params.node) {
                        let vColumnName = "matched";
                        let newValue = 'I';
                        params.node.setDataValue(vColumnName, newValue);
                        params.node.setDataValue(params.node.disabled, (!(params.node.data.matched === 'T')));
                        this.refreshAll();
                    }
                }
            },
            {
                name: "Match with selected on left",
                //shortcut: "Alt + I",
                //disabled: (params.node.data.amount === null),
                action: () => { // if you need to use "this" inside the function then you need to use arrow function
                    //this.showAlert("Selected Orderlink: " + this._chartListService.selectedOrderLink);
                    let vFound: boolean=false;
                    let vLiteral: string;

                    for (let i = 0; i < this.rowData.length; i++) {  
                        if ((this.rowData[i].orderlink === this._chartListService.selectedOrderLink) &&
                                (this.rowData[i].mapcode === this._chartListService.selectedMapCode)) {
                            vFound = true;
                            vLiteral = this.rowData[i].literal;
                            //console.log("Found it: " + this.rowData[i].literal);
                            break;
                        }
                    }

                    if (vFound) {
                        this.showAlert("Orderlink already matched with: " + vLiteral);
                    }
                    else {
                        let vColumnName = "orderlink";
                        let newNumber = this._chartListService.selectedOrderLink;
                        params.node.setDataValue(vColumnName, newNumber);  
                            
                        vColumnName = "mapcode";
                        let newValue = this._chartListService.selectedMapCode;
                        params.node.setDataValue(vColumnName, newValue);  
                            
                        vColumnName = "matched";
                        newValue = 'M';
                        params.node.setDataValue(vColumnName, newValue);  
                            
                        this.refreshAll();
                    }
                }
            },
            {
                name: "Unmatch",
                //shortcut: "Alt + U",
                //disabled: ((params.node.data.matched === 'F') || (params.node.data.amount === null)),
                //disabled: (params.node.data.matched === 'F'),
                action: () => { // if you need to use "this" inside the function then you need to use arrow function
                    if (params.node) {
                        params.node.setDataValue(params.node.disabled, (params.node.data.matched === 'F'));

                        let vColumnName = "orderlink";
                        let newNumber = -1;
                        params.node.setDataValue(vColumnName, newNumber);  
                            
                        vColumnName = "mapcode";
                        let newValue = "";
                        params.node.setDataValue(vColumnName, newValue);  

                        vColumnName = "matched";
                        newValue = 'F';
                        params.node.setDataValue(vColumnName, newValue);

                        vColumnName = "selected";
                        newValue = ' ';
                        params.node.setDataValue(vColumnName, newValue); 
                                                        
                        this.refreshAll();
                    };
                },
                //icon: '<img src="../images/skills/windows.png"/>'
            },
            "separator",
            {
                name: "Double Counted",
                //shortcut: "Alt + t",
                checked: (vSelectedDoubleCounted == 1),
                action: () => { // if you need to use "this" inside the function then you need to use arrow function
                    if (params.node) {
                        if ((vSelectedDoubleCounted == 0) || (!vSelectedDoubleCounted)) {
                            params.node.data.doubleCounted= 1;
                            if (params.node.data.indicator)
                                params.node.data.indicator += '*'
                            else
                                params.node.data.indicator = '*';
                            //console.log("indicator: " + params.node.data.indicator);
                            //console.log("doubleCounted: " + params.node.data.doubleCounted);
                        } 
                        else {
                            params.node.data.doubleCounted = 0;
                            vTemp = /\*/gi;
                            let result = params.node.data.indicator.replace(vTemp, "");
                            params.node.data.indicator = result;
                            //console.log("indicator: " + result);
                            //console.log("doubleCounted: " + params.node.data.indicator);
                        } 
                        //console.log("indicator: " + params.node.data.indicator);
                        //console.log("doubleCounted: " + params.node.data.doubleCounted);
                        this.refreshAll();                            
                    }
                }
                //icon: '<img src="../images/skills/mac.png"/>'
            },
            {
                name: "No Print",
                //shortcut: "Alt + P",
                checked: (vSelectedNoPrint == 1),
                action: () => { // if you need to use "this" inside the function then you need to use arrow function
                if (params.node) {
                        if ((vSelectedNoPrint == 0) || (!vSelectedNoPrint)) {
                            params.node.data.noPrint = 1;
                            if (params.node.data.indicator) 
                                params.node.data.indicator += '#';
                            else 
                                params.node.data.indicator = '#';
                        } 
                        else {
                            params.node.data.noPrint = 0;
                            vTemp = /\#/gi;
                            let result = params.node.data.indicator.replace(vTemp, "");
                            params.node.data.indicator = result;
                        } 
                        this.refreshAll();                    
                    }
                }
                //icon: '<img src="../images/skills/mac.png"/>'
            },
            "separator",
            {
                name: "Edit Item",
                //checked: true,
                action: () => { // if you need to use "this" inside the function then you need to use arrow function
                    //console.log("Edit Item Selected");
                    // set focus on the first row
                    this.selectRow(this.selectedRowIndex, 2);
                },
                //icon: '<img src="../images/skills/mac.png"/>'
            },
            {
                name: "Edit Footnotes",
                //checked: true,
                disabled: true,
                action: () => { // if you need to use "this" inside the function then you need to use arrow function
                    //console.log("Edit Footnotes Selected");
                },
                //icon: '<img src="../images/skills/mac.png"/>'
            },
            "separator",
            {
                name: "Add New Account",
                //shortcut: "Alt + A",
                action: () => { // if you need to use "this" inside the function then you need to use arrow function
                    console.log("Number of rows: " + this.rowData.length);
                    let newItem = this.createNewRowData();
                    this.gridOptions.api.updateRowData({ // Infinitee Model only supports Add! No update or remove!
                        add: [newItem],
                        addIndex: this.selectedRowIndex+1,
                    });
                    console.log("Number of rows: " + this.rowData.length);
                    //console.log("ANC Selected");
                },
                //icon: '<img src="../images/skills/mac.png"/>'
            },
            "separator",
            {
                name: "Flip Row Value",
                //shortcut: "Alt + R",
                action: () => { // if you need to use "this" inside the function then you need to use arrow function
                    if (params.node) {
                        for (var id in this.gAmountNames) {    
                            const vColumnName = this.gAmountNames[id];
                            const newValue = -1 * (Number(params.node.data[vColumnName]))
                            params.node.setDataValue(vColumnName, newValue)
                        }
                    }

                },
                //icon: '<img src="../images/skills/mac.png"/>'
            },
            {
                name: "Convert Cent to Dollars",
                //shortcut: "Alt + D",
                action: () => { // if you need to use "this" inside the function then you need to use arrow function
                    if (params.node) {
                        for (var id in this.gAmountNames) {
                            const vColumnName = this.gAmountNames[id];
                            const newValue = (Number(params.node.data[vColumnName])) / 100;
                            params.node.setDataValue(vColumnName, newValue)
                        }  
                    }  
                }
                //icon: '<img src="../images/skills/mac.png"/>'
            },
            {
                name: "Convert Literal to Sentence Case",
                //shortcut: "Alt + S",
                action: () => { // if you need to use "this" inside the function then you need to use arrow function
                    if (params.node) {
                        params.node.data.literal = this.sentenceCase(params.value);
                        this.refreshAll();
                        //console.log(this.sentenceCase(params.value));
                    }                    
                },
                //icon: '<img src="../images/skills/mac.png"/>'
            },
            {
                name: "Copy Literal from Left",
                //shortcut: "Alt + S",
                action: () => { // if you need to use "this" inside the function then you need to use arrow function
                    if (params.node) {
                        let vColumnName = "literal";
                        let newValue = this._chartListService.selectedLiteral;
                        params.node.setDataValue(vColumnName, newValue);  

                        vColumnName = "matched";
                        newValue = 'M';
                        params.node.setDataValue(vColumnName, newValue);  
                    this.refreshAll();
                    }
                },
                //icon: '<img src="../images/skills/mac.png"/>'
            },
            //"copy"
        ];
        return result;
    };

    private sentenceCase (str) {
        let l: number=str.length;

        if ((str===null) || (str===''))
             return false;
        else
         str = str.toString();
        return str.substr(0, 1).toUpperCase() + str.substr(1, l-1).toLowerCase();
        //return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    }

    private refreshAll() {
        //console.log("Reffresh ALL!!!");
        var params = { force: true };
        this.gridOptions.api.refreshCells(params)
    }
          
    // Opens TreeViewMatchedDialog. HTML and TS files are in treeView-component:
    openDialog(params) {
        let vColumnName = "";
        let newValue = '';
        const settings: MatDialogConfig = {
            disableClose: true    
        }
        const dialogRef = this.dialog.open(TreeViewMatchedDialog, settings)

        dialogRef.afterClosed().subscribe(result => {
            //console.log(`Dialog result: ${result}`);
            //console.log("Dialog result:" + result);

            if (result === "ok") {
                let vFound: boolean=false;
                let vLiteral: string;

                vColumnName = "mapcode";
                let newValue = this._chartListService.selectedMapCode;
                params.node.setDataValue(vColumnName, newValue);  

                vColumnName = "matched";
                newValue = 'T';
                params.node.setDataValue(vColumnName, newValue); 
    
                vColumnName = "selected";
                newValue = '√';
                params.node.setDataValue(vColumnName, newValue);   

                //console.log("Selected Literal:" + this._chartListService.selectedLiteral);
                //this.showAlert("You matched it with: " + this._chartListService.selectedLiteral);
            }
            this.refreshAll();
        });
    }

    private createNewRowData() {
        var newData = {
            //selected: '',
            //matched: '',
            noPrint: '',
            doubleCounted: '',
            indicator: '',
            amount: '',
            literal: '',
            valueOrder: 0,
            //[vFieldName]: ''
        };
        return newData;
    }

    public changeToEuroFormat() {
        //console.log('in changeToEuroFormat()!');   
        /*
        for (let i = 0; i < this.rowData.length; i++) {  
            let colID = this.rowData[i].COLUMNID;
            let vFieldName = "amount" + colID;
            if (this.rowData[i].amount) {
                this.rowData[i][vFieldName] = this.rowData[i][vFieldName].replace('.', '');
                //this.rowData[i].amount.replace(/./g, '');
                console.log("Compare: " + this.rowData[i][vFieldName] + " vs " + this.rowData[i][vFieldName]);
            }
        }
        this.refreshAll();
        */
    }   

    public saveProcess() {
        //this.showAlert("This module is under costruction!");

        let vStatus = this._docDetailsService.getSelectedStatus();
        //console.log("dt.Status: " + vStatus.trim());
        switch(vStatus.trim()) { 
            case "SHIP2PROD": {
                this._docDetailsService.getNumberOfPeriods('01').subscribe(bColumnIDsData => {    
                    let bPeriods = bColumnIDsData.length;
                    //console.log("Number of Periods for BS: " + bPeriods);
                    if (bPeriods > 1) {
                        this._docDetailsService.getNumberOfPeriods('02').subscribe(iColumnIDsData => {    
                            let iPeriods = iColumnIDsData.length;
                            //console.log("Number of Periods for IS: " + iPeriods);
                            if (iPeriods > 1) {
                                this._docDetailsService.getNumberOfPeriods('05').subscribe(cColumnIDsData => {    
                                    let cPeriods = cColumnIDsData.length;
                                    //console.log("Number of Periods for CS: " + cPeriods);
                                    if (cPeriods > 1) {
                                        //this.showAlert("Saved as SHIPTOPROD!");
                                        this.saveFinancials();
                                    } else {this.openConfirmationDialog('Cash Flow')};
                                });
                            } else {this.openConfirmationDialog('Income Statement')};
                        });
                    } else {this.openConfirmationDialog('Balance Sheet')};
                });
                //let periods:number = this.checkNumberofColumns('01');
                break;
            }
            default: {
                this.saveFinancials();
                break;
            }
        }
    }
        
    private openConfirmationDialog(aForm: string) {
        const settings: MatDialogConfig = {
          disableClose: true    
        }
        const dialogRef = this.dialog.open(ConfirmDialog, settings);
        dialogRef.componentInstance.confirmMessage = "Number of Periods are less than two for " + aForm + ". Are you sure you want to save?"
        dialogRef.afterClosed().subscribe(result => {
          //console.log("Selected Stataus: " + this._docDetailsService.getSelectedStatus());
          //console.log("Result: " + result);
          if (result === 'ok') {
                this.saveFinancials();
            };
        });
    }

    private saveFinancials() {
        //this._loaderService.display(true);
        console.log('Spinner On - saveFinancials');  

        let vStatus = this._docDetailsService.getSelectedStatus();
        let vFormCode = this._docDetailsService.selectedFormCode.getValue();
        let vChartCode = this._docDetailsService.selectedChartCode;        
        let vMessage: string;
        let accountRecords: any[] = this.collectAccounts(vStatus, vFormCode);
    /*
        for (let i=0; i<accountRecords.length; i++) {            
            
            console.log(
                "docID: " + accountRecords[i].doc_id 
                + " status_code: " + accountRecords[i].status_code
                + " form_code: " + accountRecords[i].form_code
                + " comp_number: " + accountRecords[i].comp_number
                + " comp_name: " + accountRecords[i].comp_name            
                + " valueOrder: " + accountRecords[i].value_order
                + " columnID: " + accountRecords[i].column_id
                + " amount: " + accountRecords[i].amount
                + " doubleCounted: " + accountRecords[i].double_counted
                + " noprint: " + accountRecords[i].no_print
                + " literal: " + accountRecords[i].literal
                + " orderlink: " + accountRecords[i].orderlink
                + " mapdode: " + accountRecords[i].mapcode
                
            );        
        } 
    */                
        this._docDetailsService.saveDocumentDetails(accountRecords).subscribe(
            savedData => {
            //console.log('savedData: ' + savedData.message);
            if (savedData.message)
                vMessage = savedData.message;
            },
            // the second argument is a function which runs on error
            err => {
                console.log('Error in savedDFinancials! ' + err);
            },
            // the third argument is a function which runs on completion
            () => {
                console.log('DONE WITH saveFinancials() for chartCode: ' + vChartCode);
                if (!vMessage)
                    //console.log("result: no data");
                    vMessage = "Something went wrong and http.post request did not return any data!";
                this.getFinancials(vFormCode, vChartCode);  
                this.refreshAll();      
                this.showAlert(vMessage);
            }
        );
        
        //this._loaderService.display(false);
        console.log('Spinner Off - saveFinancials');  
    }

    private collectAccounts(aStatus, aFormCode: string) {
        this.refreshAll();
        let accountData: any[] = [];
        let vDocID = this._docDetailsService.selectedDocID;
        let vCompName = this._docDetailsService.selectedCompanyName;
        let vCompNumber = this._docDetailsService.selectedCompNumber;
        let columns = this.gColID;
        //let vCount = this.rowData.length;
        let vFieldName: string="";

        //console.log("Collecting " + vCount + " accounts for Document ID: " + vDocID + " vColID: " + this.gColID.length);
        
        let i=0;
        this.gridOptions.api.forEachNode(function(node) {
        //for (let i = 0; i < vCount; i++) {
            let vOrder = (parseInt(aFormCode) * 1500) + i;
            for (let j=0; j<columns.length; j++) {                        
                vFieldName = "amount" + columns[j].COLUMNID   
                //console.log("vFieldName: " + vFieldName);                 
                //console.log("Amount: " + this.rowData[i][vFieldName]);                 
                //console.log("literal: " + this.rowData[i].literal);   
                if (!node.data.noPrint) node.data.noPrint = 0;             
                if (!node.data.doubleCounted) node.data.doubleCounted = 0;             
                if (!node.data.mapcode) node.data.mapcode = -1;             
                if (!node.data.orderlink) node.data.orderlink = -1;             
                if (!node.data[vFieldName]) node.data[vFieldName] = "";             
                accountData.push({
                    doc_id: vDocID,
                    comp_name: vCompName,
                    comp_number: vCompNumber,
                    status_code: aStatus, 
                    form_code: aFormCode,                   
                    value_order: vOrder, //this.rowData[i].valueOrder,
                    column_id: columns[j].COLUMNID,
                    literal: node.data.literal, //this.rowData[i].literal,
                    amount: node.data[vFieldName], //this.rowData[i][vFieldName],
                    no_print: node.data.noPrint, //this.rowData[i].noPrint,
                    double_counted: node.data.doubleCounted, //this.rowData[i].doubleCounted,
                    mapcode: node.data.mapcode, //this.rowData[i].mapcode,
                    orderlink: node.data.orderlink, //this.rowData[i].orderlink,                   
                });   
            }
            i++;
        });
        return accountData;
    }
      
    showAlert(aMessage: string) {
        this.gMessage = aMessage;
        this.alertEvent.emit(null);
    }

    private printData() {
        let rowData = [];
        this.gridOptions.api.forEachNode(function(node) {
          rowData.push(node.data);
        });
        console.log("Row Data:");
        console.log(rowData);
    }    

}


        
