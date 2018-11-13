import {Component, EventEmitter, Output} from "@angular/core";
import {GridOptions} from "ag-grid";
//import {CommonModule}  from '@angular/common'; 

import {documentListService} from './document-list.service';
import { documentDetailsService } from "../documentDetails-component/document-details.service";
import { SpinnerService } from '../shared/spinner.service';

import 'rxjs/add/operator/map';
import { Router } from "@angular/router";

@Component({
    selector: 'documentList',
    templateUrl: './documentList.component.html',
})

export class DocumentListComponent {
    @Output() alertEvent = new EventEmitter();

    private gridOptions: GridOptions;
    private columnDefs: any[];
    private myOptions: string[] = ["contains", "notContains", "equals", "startsWith", "endsWith"];

    public rowData: any[];
    public selectedIndex: number=0;
    //public selectedDocumentid: number;
    //public selectedCompanyName: string;
    public doc_list; // For testing API Gateway on AWS
    public gMessage: string;
    

    private dataSource = {
        pageSize: 100,
        paginationOverflowSize: 100,     
                       
        getRows: (params: any) => {
            //console.log('I am in getRows()!');

            // Spinner on
            this._loaderService.display(true);
            //console.log('Spinner On');
                
        
            this.returnRows().subscribe(rowData => {

                // take a slice of the total rows
                let dataAfterSortingAndFiltering = this.sortAndFilter(rowData, params.sortModel, params.filterModel);
                let rowsThisPage = dataAfterSortingAndFiltering.slice(params.startRow, params.endRow);

                // if on or after the last page, work out the last row.
                let lastRow = -1;
                if (dataAfterSortingAndFiltering.length <= params.endRow) {
                    lastRow = dataAfterSortingAndFiltering.length;
                }

                this._loaderService.display(false);
                //console.log('Spinner Off');
        
                //call the success callback
                params.successCallback(rowsThisPage, lastRow);

                // set focus on the first row
                this.selectFirstRow();

            });
        }    
    }    

    constructor(private _doclistService: documentListService,  private _loaderService: SpinnerService,
            private _docDetailsService: documentDetailsService, private router: Router) {
        //console.log('I am in constructor()!');
        this.gridOptions = <GridOptions>{};        
        this.createColumnDefs();  
        // Clear localStorage:
        localStorage.clear(); 
        //console.log("localStorage cleared!!!");     
    }
        
    private createColumnDefs() {
        //console.log('I am in createColumnDefs()!');
        // It doesn't mater what percentage we assign to columns, but we need to make sure total is 100%, 
        //which is equal to the percentage in wrapper class (.panel-doclist) located in app.component.scss.
        this.columnDefs = [
            {headerName: "Doc ID", field: "DOCUMENTID", filter: 'number', minWidth: '5%',
                filterParams: { filterOptions: this.myOptions, applyButton: true, clearButton:true }},
            {headerName: "Comp #", field: "COMPNUMBER", filter: 'number', minWidth: '5%',
                filterParams: { filterOptions: this.myOptions, applyButton: true, clearButton:true }},
            {headerName: "Comp Name", field: "COMPANYNAME", minWidth: '30%',
                filter: "text", filterParams: { filterOptions: this.myOptions, applyButton: true, clearButton:true }},
            {headerName: "Date Processed", field: "DATEPROCESSED", filter: 'date', suppressMenu: true, minWidth: '20%'},
            {headerName: "Report Date", field: "REPORTDATE", filter: 'date', suppressMenu: true, minWidth: '20%'},
            {headerName: "Type", field: "REPORTTYPECODE", filter: "text", suppressMenu: true, minWidth: '10%'},
            {headerName: "Status", field: "MNEMONIC", minWidth: '10%', filter: "text", filterParams: { applyButton: true, clearButton:true }},
        ];
    }
        
    returnRows() {
        //console.log('I am in docList returnRows()!');        
        return this._doclistService.getDocumentList();        
    }    

    ngOnInit() {
        //console.log('I am in ngOnInit()!');
        //this.getDocist();

        // we pass an empty gridOptions in, so we can grab the api out
        this.gridOptions = <GridOptions>{};

        this.gridOptions.enableServerSideSorting = true;
        this.gridOptions.enableServerSideFilter = true;
        this.gridOptions.rowSelection = "single";
        
        // Retreive rows from database and display them in grid:
        this.gridOptions.datasource = this.dataSource; 

    }

    private onGridReady(params: any) {
        this.gridOptions.api.sizeColumnsToFit(); // This removes horizon scroll bar
    }        

    private selectFirstRow() {

        // scrolls to the first row
        this.gridOptions.api.ensureIndexVisible(this.selectedIndex);

        // scrolls to the first column
        let firstCol = this.gridOptions.columnApi.getAllDisplayedColumns()[this.selectedIndex];
        this. gridOptions.api.ensureColumnVisible(firstCol);

        // sets focus into the first grid cell
        this.gridOptions.api.setFocusedCell(this.selectedIndex, firstCol);

        let rowNode = this.gridOptions.api.getDisplayedRowAtIndex(this.selectedIndex);
        rowNode.setSelected(true);
        
    }

/* it shows horizon scroll bars in Windows
    private fitColumns() {
        this.gridOptions.api.sizeColumnsToFit();
    }
    */

    sortAndFilter(allOfTheData, sortModel, filterModel) {
        //console.log('I am in sortAndFilter()!');
        return this.sortData(sortModel, this.filterData(filterModel, allOfTheData));
    }

    sortData(sortModel, data) {
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

    filterData(filterModel, data) {
        //console.log('I am in filterData()!');
        var filterPresent = filterModel && Object.keys(filterModel).length > 0;
        if (!filterPresent) {
            //console.log('No filter!');
            return data;
        }

        let resultOfFilter = [];
        for (let item of data) {

            if (filterModel.COMPANYNAME) {
                var cn = item.COMPANYNAME;
                var cnFilter = filterModel.COMPANYNAME.filter;
                if (filterModel.COMPANYNAME.type.toLowerCase() === 'contains') {
                    if (cn.toLowerCase().indexOf((cnFilter).toLowerCase()) < 0) {
                        //COMPANYNAME didn't match, so skip this record
                        continue;
                    }
                } else if (filterModel.COMPANYNAME.type.toLowerCase() === 'notcontains') {
                    if (cn.toLowerCase().indexOf((cnFilter).toLowerCase()) >= 0) {
                        //COMPANYNAME didn't match, so skip this record
                        continue;
                    }
                } else if (filterModel.COMPANYNAME.type.toLowerCase() === 'equals') {
                    ////console.log(filterModel.COMPANYNAME.type);
                    if (cn.toLowerCase() != cnFilter.toLowerCase()) {
                        //COMPANYNAME didn't match, so skip this record
                        continue;
                    }
                } else if (filterModel.COMPANYNAME.type.toLowerCase() === 'notequal') {
                    ////console.log(filterModel.COMPANYNAME.type);
                    ////console.log(cnFilter.toLowerCase());
                    ////console.log(cn.toLowerCase());

                    if (cn.toLowerCase() === cnFilter.toLowerCase()) {
                        //COMPANYNAME did match, so skip this record
                        continue;
                    }
                } else if (filterModel.COMPANYNAME.type.toLowerCase() === 'startswith') {
                    if (cn.toLowerCase().substr(0,(cnFilter.length)) != cnFilter.toLowerCase()) {
                        //COMPANYNAME didn't match, so skip this record
                        continue;
                    }
                } else if (filterModel.COMPANYNAME.type.toLowerCase() ==='endswith') {
                    if (cn.substr(cn.length-cnFilter.length,(cnFilter.length)).toLowerCase() != cnFilter.toLowerCase()) {
                        //DOCUMENTID didn't match, so skip this record
                        continue;
                    }
                } else {
                }
            }

            if (filterModel.COMPNUMBER) {
                var doc = item.COMPNUMBER;
                var docFilter = filterModel.COMPNUMBER.filter;
                if (filterModel.COMPNUMBER.type.toLowerCase() == 'contains') {
                    if ((doc.toString()).toLowerCase().indexOf((docFilter.toString()).toLowerCase()) < 0) {
                        //DOCUMENTID didn't match, so skip this record
                        continue;
                    }
                } else if (filterModel.COMPNUMBER.type.toLowerCase() == 'notcontains') {
                    if (doc.toString().toLowerCase().indexOf((docFilter.toString()).toLowerCase()) >= 0) {
                        //DOCUMENTID didn't match, so skip this record
                        continue;
                    }
                } else if (filterModel.COMPNUMBER.type.toLowerCase() == 'equals') {
                    ////console.log(filterModel.COMPNUMBER.type);
                    ////console.log(docFilter);
                    ////console.log(doc);
                    if (doc != docFilter) {
                        //DOCUMENTID didn't match, so skip this record
                        continue;
                    }
                } else if (filterModel.COMPNUMBER.type.toLowerCase() == 'notequal') {
                    if (doc === docFilter) {
                        //DOCUMENTID did match, so skip this record
                        continue;
                    }
                } else if (filterModel.COMPNUMBER.type.toLowerCase() == 'startswith') {
                    if (doc.toString().substr(0,(docFilter.toString().length)) != docFilter.toString()) {
                        //DOCUMENTID didn't match, so skip this record
                        continue;
                    }
                } else if (filterModel.COMPNUMBER.type.toLowerCase() == 'endswith') {
                    ////console.log(filterModel.DOCUMENTID.type);
                    ////console.log(docFilter);
                    ////console.log(doc);
                    ////console.log(doc.toString().substr(doc.toString().length-docFilter.toString().length,(docFilter.toString().length)));
                    if (doc.toString().substr(doc.toString().length-docFilter.toString().length,(docFilter.toString().length)) != docFilter.toString()) {
                        //DOCUMENTID didn't match, so skip this record
                        continue;
                    }
                } else {
                }
            }

            if (filterModel.DOCUMENTID) {
                var doc = item.DOCUMENTID;
                var docFilter = filterModel.DOCUMENTID.filter;
                if (filterModel.DOCUMENTID.type.toLowerCase() == 'contains') {
                    if ((doc.toString()).toLowerCase().indexOf((docFilter.toString()).toLowerCase()) < 0) {
                        //DOCUMENTID didn't match, so skip this record
                        continue;
                    }
                } else if (filterModel.DOCUMENTID.type.toLowerCase() == 'notcontains') {
                    if (doc.toString().toLowerCase().indexOf((docFilter.toString()).toLowerCase()) >= 0) {
                        //DOCUMENTID didn't match, so skip this record
                        continue;
                    }
                } else if (filterModel.DOCUMENTID.type.toLowerCase() == 'equals') {
                    ////console.log(filterModel.DOCUMENTID.type);
                    ////console.log(docFilter);
                    ////console.log(doc);
                    if (doc != docFilter) {
                        //DOCUMENTID didn't match, so skip this record
                        continue;
                    }
                } else if (filterModel.DOCUMENTID.type.toLowerCase() == 'notequal') {
                    if (doc === docFilter) {
                        //DOCUMENTID did match, so skip this record
                        continue;
                    }
                } else if (filterModel.DOCUMENTID.type.toLowerCase() == 'startswith') {
                    if (doc.toString().substr(0,(docFilter.toString().length)) != docFilter.toString()) {
                        //DOCUMENTID didn't match, so skip this record
                        continue;
                    }
                } else if (filterModel.DOCUMENTID.type.toLowerCase() == 'endswith') {
                    ////console.log(filterModel.DOCUMENTID.type);
                    ////console.log(docFilter);
                    ////console.log(doc);
                    ////console.log(doc.toString().substr(doc.toString().length-docFilter.toString().length,(docFilter.toString().length)));
                    if (doc.toString().substr(doc.toString().length-docFilter.toString().length,(docFilter.toString().length)) != docFilter.toString()) {
                        //DOCUMENTID didn't match, so skip this record
                        continue;
                    }
                } else {
                }
            }

            if (filterModel.MNEMONIC) {
                //if (filterModel.DESCRIPTION.filterType.toLowerCase() == 'contains') && 
                if (item.MNEMONIC.toUpperCase().indexOf((filterModel.MNEMONIC.filter).toUpperCase()) < 0) {
                    //DESCRIPTION didn't match, so skip this record
                    continue;
                }
            }

            ////console.log(resultOfFilter);
            resultOfFilter.push(item);
        }

        return resultOfFilter;
    }

/*
    // to test api query on AWS:
    getDocist() { 
        //console.log('I am in getDocList()!');
        //this._demoService.getStatus().subscribe(
        this._doclistService.getDocumentList().subscribe(
            // the first argument is a function which runs on success
          data => { this.doc_list = data},
          // the second argument is a function which runs on error
          err => console.error(err),
          // the third argument is a function which runs on completion
          () => //console.log('done with getDocList()')
        );
    }
*/

    onRowClicked(event: any) { 
        //console.log('onRowClicked type: ' + event.node.data.REPORTTYPECODE);
        //this._docDetailsService.setDocumentDetails(event.node.data.DOCUMENTID, 
            //'01', event.node.data.COMPANYNAME, event.node.data.COMPNUMBER, 1, event.node.data.REPORTTYPECODE);
    }

    onRowDuobleClicked(event: any) { 
        //let rowNode = this.gridOptions.api.getDisplayedRowAtIndex(0);
        ////console.log('onRowClicked ' + rowNode.data.DESCRIPTION);
        //console.log('Double Clicked Company: ' + event.node.data.COMPANYNAME);
        //this._docDetailsService.setDocumentDetails(event.node.data.DOCUMENTID, 
            //'01', event.node.data.COMPANYNAME, event.node.data.COMPNUMBER, 1, event.node.data.REPORTTYPECODE);
        if (this._docDetailsService.selectedChartCode)
            this.router.navigate(['/details']);
        else {
            //console.log('No chart code found!')
            this.gMessage = "Couldn't find a chart code for this company!";
            this.alertEvent.emit(null);
        }
    }

    private onRowSelected(event: any) {
        // In rowSelected event, firts a row gets selected and then teh previous row gets deselected,
        // so we need to make sure we are working with the selected node or (event.node.selected = true)
        if (event.node.selected) {
            this._docDetailsService.setDocumentDetails(event.node.data.DOCUMENTID, 
                '01', event.node.data.COMPANYNAME, event.node.data.COMPNUMBER, 1, event.node.data.REPORTTYPECODE);
        }
        //console.log('onRowSelected type: ' + event.node.data.REPORTTYPECODE + ': ' + event.node.selected);
    }

    private onKeyPress(event: any) {
        //console.log('docList keyPress: : ' + event.keyCode);
        if (event.keyCode == 13) {
            this.router.navigate(['/details']);
        }
    }

    /*
    public sizeToFit() {
        this.gridOptions.api.sizeColumnsToFit();
    };
    
    public autoSizeAll() {
        let allColumnIds = [];
        this.columnDefs.forEach( function(columnDef) {
            allColumnIds.push(columnDef.field);
        });
        this.gridOptions.columnApi.autoSizeColumns(allColumnIds);
    }

    private onModelUpdated() {
        //console.log('I am in onModelUpdated()!');
        if (this.gridOptions.api && this.columnDefs) {
            //console.log('I am in onModelUpdated()!');
            this.gridOptions.columnApi.autoSizeColumns(this.columnDefs);
        }
    }
*/

}

        
