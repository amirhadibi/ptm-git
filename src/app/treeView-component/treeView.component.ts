import { Component, EventEmitter, Output, ViewChild, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { IntegralUISelectionMode } from 'integralui/components/integralui.core';
import { IntegralUITreeView } from 'integralui/components/integralui.treeview';
import { MatDialog, MatInput, MatDialogConfig } from '@angular/material';

import { ChartListService } from '../chartList-component/chartList.service';
import { documentDetailsService } from "../documentDetails-component/document-details.service";
import { TreeViewAccountDialog } from './treeViewAccountDlg.component';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
    selector: 'treeView',
    /*
    The ViewEncapsulation.None allows you to change the component appearance 
    by applying your own custom CSS styles within your app component. 
    This overrides the default CSS styles that are included in component css file. 
    As you may know, by default all Angular components are protected from outside changes of CSS. 
    The ViewEncapsulation.None allows you to override that within your app project, in code.    
    */
    encapsulation: ViewEncapsulation.None, 
    templateUrl: './treeView.component.html',
    styleUrls: ['../css/app.component.scss'],
    //styleUrls: [ './treeView-editing.scss' ],     
})

export class TreeViewComponent {
    //@ViewChild('application', {read: ViewContainerRef}) applicationRef: ViewContainerRef;
    @ViewChild('treeview') treeview: IntegralUITreeView;
    //@Output() findGridRowEvent = new EventEmitter();
    //@Output() alertEvent = new EventEmitter();

    public processedChartData: Array<any> = [];
    public gMessage: string='';
    public gToggle: string='1'
    public gSelectedChartCode: string = "";
    public title: string;
    public chartIDList: Array<any> = []; 
    public selMode: IntegralUISelectionMode = IntegralUISelectionMode.MultiExtended;
    public showLines: boolean=true;
    public selectedLiteral: string="";
    public selectedMapcode: string="";
    public selectedOrderlink: string="";
    
    public ctrlStyle: any = {
        general: {
            normal: 'leftDiv'
        }
    }

    public treeDataFields: any = {
        text: 'LITERAL',
        id: 'ID',
        pid: 'PID',
    }

    constructor(private dialog: MatDialog, private _chartListService: ChartListService,
             private _docDetailsService: documentDetailsService){
        this.gSelectedChartCode = this._docDetailsService.selectedChartCode;
        //console.log("code tv.constructor(): " + this.gSelectedChartCode);
    }
    
    private onItemClick(e: any, item: any){
        //console.log(item.id + ' - selectedID!');
        //console.log(item.pid + ' - selectedPID!');
        //console.log(item.MAPCODE + ' - selectedMapcode!');

        // Used in panel-documentDetails.html to call docDetails.scrollToRow():
        //this.selectedLiteral = item.LITERAL;
        //this.selectedMapcode = item.MAPCODE;
        //this.selectedOrderlink = item.ORDERLINK;

        // Used in other components:
        this._chartListService.setLiteral(item.LITERAL);
        this._chartListService.setOrderLink(item.ORDERLINK);
        this._chartListService.setMapCode(item.MAPCODE);

        //this.findGridRowEvent.emit(null); This feature is not in C++ version and makes things complicated
    }

    private getChartIDList(aToggle: string, aCode: string) { 
        //console.log('I am in getChartList()!');
        if (aCode) this.gSelectedChartCode = aCode;
        let compNum = this._docDetailsService.getCompNumber();
        let type = this._docDetailsService.getReportTypeCode(); 
        let formCode = this._docDetailsService.getFormID().getValue();
        let chartCode = this.gSelectedChartCode;

        if ((compNum>0) && (chartCode) && (type) && (formCode)) {
            this._chartListService.getChartIDs(compNum, chartCode, type, formCode).subscribe(
                // the first argument is a function which runs on success
                data => { 
                    this.chartIDList = data;
                },
                // the second argument is a function which runs on error
                err => console.error(err),
                // the third argument is a function which runs on completion
                () => {
                    //console.log('DONE WITH tv.getChartIDList() ... ' + this.chartIDList.length);
                    this.loadFromJSON(null, aToggle, this.gSelectedChartCode);
                }
            );
        }  
        else {
            console.log("WARNING: Parameter list is not complete in getChartIDList!!!");
        } 
    }

    private loadFromJSON(item: any, aToggle: string, aCode: string){
        //console.log("Toggle in loadFromJSON(): " + aToggle);
        //console.log("code in loadFromJSON(): " + aCode);

        let originalChartData: any[];
        //let processedChartData: any[];

        if (aToggle) {
            this.gToggle = aToggle;
        }

        if (aCode) {
            this.gSelectedChartCode = aCode;
        }

        if (this.gToggle == '1') {
            this._chartListService.getChartAccountData(
                this._docDetailsService.getCompNumber(), 
                //AppSettings.CHART_CODE, // Default is IFR, but chart code should be also retrieved from the user interface
                this.gSelectedChartCode,
                this._docDetailsService.getReportTypeCode(), 
                this._docDetailsService.getFormID().getValue()
            ).subscribe(
                originalChartData => { 
                        // assign the right pid for each account and more ...
                        //processedChartData = originalChartData;
                        this.processedChartData = this.processData(originalChartData);
                        // add processed data to the chart tree
                        this.addData(this.processedChartData, item, 1);
                },

                // the second argument is a function which runs on error
                error => console.log(error),

                // the third argument is a function which runs on completion
                () => {
                    //console.log('DONE WITH loadFromJSON() ... ' + this.chartIDList.length);
                }
            );
        } else {
            //this.gMessage = 'Company account order is under construction!';
            //this.alertEvent.emit(null);
            //console.log(" Toggle: " + aToggle);
            this._chartListService.getCompanyAccountData(
                this._docDetailsService.getCompNumber(), 
                //AppSettings.CHART_CODE, // Default is IFR, but chart code should be also retrieved from the user interface
                this.gSelectedChartCode,
                this._docDetailsService.getReportTypeCode(), 
                this._docDetailsService.getFormID().getValue()
                ).subscribe(
                    originalChartData => { 
                            // we don't need to assign the right pid for each account and more here. It should be flat.
                            this.processedChartData = originalChartData;
                            // add original data to the chart tree
                            this.addData(this.processedChartData, item, 2);
                    },
                    // the second argument is a function which runs on error
                    error => console.log(error),

                    // the third argument is a function which runs on completion
                    () => {
                        //console.log('DONE WITH loadFromJSON() ... ' + this.chartIDList.length);
                    }
                );                    
            }

    }

    private addData(data: any, item: any, toggle: number){
        
        // Load data from JSON into the TreeView as children for specified item
        if (toggle === 1) {
            //console.log(" addData.Toggle: " + toggle);
            this.treeview.loadData(data, item, this.treeDataFields);
        }
        else {
            //console.log(" addData.Toggle: " + toggle);
            this.treeview.loadData(data, item, this.treeDataFields, false);            
        }
        
        // Restore the expanding icon
        this.treeview.endLoad(item);
    
        // Update the appareance of the TreeView
        this.treeview.refresh();

        this.treeview.collapse();        
    }    

    private processData(data: any) {
        //console.log('inside processData!!!')
        let vFound: boolean=false;
        let vLength: number=0;
        let vElement: string;

        for (let i = 0; i < data.length; i++) {
            if (data[i].PID) {
                vLength = data[i].PID.length;
                vFound = false;

                while ((vFound === false) && (vLength > 0)) {
                    vElement = data[i].PID.substr(0, vLength);
                    let newArr = this.chartIDList.filter(function(item){
                        return item.id === vElement;
                    });

                    // assigning proper pid 
                    if (newArr.length > 0) {
                        for (let j=0; j<data.length; j++) {
                            if (data[j].REF=== vElement) {
                                data[i].PID = vElement + '-' + data[j].ORDERLINK;
                                vFound = true;
                                //console.log('new PID: '+ data[i].PID);
                                break;
                            }
                        }
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
    
/*
    private processData(data: any) {
        //console.log('inside processData!!!')
        let vFound: boolean=false;
        let vLength: number;
        let vElement: string;

        for (let i = 0; i < data.length; i++) {
            if (data[i].pid !== '') {

                vLength = data[i].pid.length;
                vFound = false;

                // assigning proper pid 
                while ((vFound === false) && (vLength > 0)) {
                    vElement = data[i].pid.substr(0, vLength);
                    //console.log('inside processData while loop ---> ' + vElement + ' ---> ' + data[i].LITERAL);

                    let newArr = this.chartIDList.filter(function(item){
                        return item.id === vElement;
                    });

                    //console.log("newArr.length = " + newArr.length);

                    if (newArr.length > 0) {
                        data[i].pid = vElement;
                        vFound = true;
                        //console.log('Found it !!! ---> ' + data[i].LITERAL + ' ---> ' + vElement + ' ---> ' + vLength);
                        break;
                    }
                    else {
                        //console.log('Not Found it !!! ---> ' + data[i].LITERAL + ' ---> ' + vElement + ' ---> ' + vLength);
                        vLength -= 3;
                    }
                    
                }    
                
            }
        }           

        return data;
    }
*/


    private onItemDblClick(e: any, item: any){
        //this.gMessage = 'Mapcode: ' + item.MAPCODE;
        //this.alertEvent.emit(null);
        this.openDialog();
    }

    // Opens TreeViewAccountDialog dialog:
    private openDialog() {
        const settings: MatDialogConfig = {
            disableClose: true    
        }
        const dialogRef = this.dialog.open(TreeViewAccountDialog, settings)
        //dialogRef.afterClosed().subscribe(result => {
        // save dialog in database
        //});
    }


    public scrollToAccount(){
        let vOrderlink = this._docDetailsService.getOrderlink();
        let vMapcode = this._docDetailsService.getMapcode();
        let vLiteral = this._docDetailsService.getSelectedLiteral();

        //let item: any = this.treeview.findItemById(item.itemID);
        //let item: any = this.treeview.findItemByText(aText);
        let item: any = this.getItem(vMapcode, vOrderlink, vLiteral);
        if (item){
            //console.log("item.MAPCODE found in scrollTo: " + item.MAPCODE);
            // Use scrollTo method to scroll the view so that the item is visible
            this.treeview.scrollTo(item);
    
            // Select the item once it is present in current view
            this.treeview.selectedItem = item;

            this._chartListService.setMapCode(item.MAPCODE);
            this._chartListService.setOrderLink(item.ORDERLINK);
            this._chartListService.setLiteral(item.LITERAL);
        }
    }   

    private getItem(aMapcode, aOrderlink: number, aLiteral: string) {
        let result = 0;
        for (let i = 0; i < this.processedChartData.length; i++) {    
            if (((this.processedChartData[i].MAPCODE === aMapcode) && (this.processedChartData[i].ORDERLINK === aOrderlink))
                    || (this.processedChartData[i].LITERAL.toLowerCase() === aLiteral.toLowerCase())) {
                result = this.processedChartData[i];
                //console.log("Found it: " + this.processedChartData[i].LITERAL);
                break;
            }
        }
        return result;
    }

}

