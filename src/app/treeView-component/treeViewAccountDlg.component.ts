import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { documentDetailsService } from "../documentDetails-component/document-details.service";
import { ChartListService } from '../chartList-component/chartList.service';

@Component({
    selector: 'dialog-treeViewAccount',
    templateUrl: './treeViewAccountDlg.component.html',
    styleUrls: ['../css/app.component.scss'],
})
  
export class TreeViewAccountDialog {

    public transactions_list: Array<any> = [];
    public selectedLiteral: string="";
    public selectedForm: string="";
    public selectedMapCode: string="";
    public selectedHierarchy: string="";
    public selectedAmount: number=0;
    public selectedDate: string="";
    public selectedOrderLink: number=0;

    constructor(private _docDetailsService: documentDetailsService, private _chartListService: ChartListService,
        public dialogRef: MatDialogRef<TreeViewAccountDialog>,@Inject(MAT_DIALOG_DATA) public data: any) {
            
        // the following statements are necessary in order to showing the selected values when dialog opens:
        this.selectedForm = this._docDetailsService.selectedFormDescription; 
        this.selectedMapCode = this._chartListService.selectedMapCode;
        this.selectedLiteral = this._chartListService.selectedLiteral;
        this.selectedOrderLink = this._chartListService.selectedOrderLink;

        //Clear list boxes:
    }  

    ngOnInit(): void {    
        if (this._docDetailsService.selectedReportTypeCode == "Q") {
            this.getQuarterlyChartAccountList();
        } else {
            this.getAnnualChartAccountList();
        }
    }

    // to load annual chart account list:
    public getAnnualChartAccountList() { 
        //console.log('I am in getAnnualChartAccountList()!');
        this._chartListService.getAnnualChartAccountData(
            this._docDetailsService.getCompNumber(), 
            this._docDetailsService.selectedChartCode,
            this.selectedOrderLink,
        ).subscribe(
        // the first argument is a function which runs on success
        data => { 
            this.transactions_list = data;
            //console.log("chart data length: " + this.chartData.length);
        },
        // the second argument is a function which runs on error
        err => console.error(err),
        // the third argument is a function which runs on completion
        () => {
            //console.log('DONE WITH getAnnualChartAccountList() ... ' + this.transactions_list[0].AMOUNT)
            this.selectedDate = this.transactions_list[0].REPORTDATE;
            this.selectedAmount = this.transactions_list[0].AMOUNT;
        }
    );
    }

    // to load annual chart account list:
    public getQuarterlyChartAccountList() { 
        //console.log('I am in getQuarterlyChartAccountList()!');
        this._chartListService.getQuarterlyChartAccountData(
            this._docDetailsService.getCompNumber(), 
            this._docDetailsService.selectedChartCode,
            this.selectedOrderLink,
        ).subscribe(
            // the first argument is a function which runs on success
            data => { 
                this.transactions_list = data;
                //console.log("chart data length: " + this.chartData.length);
            },
            // the second argument is a function which runs on error
            err => console.error(err),
            // the third argument is a function which runs on completion
            () => {
                //console.log('DONE WITH getAnnualChartAccountList() ... ' + this.transactions_list[0].AMOUNT)
                this.selectedDate = this.transactions_list[0].REPORTDATE;
                this.selectedAmount = this.transactions_list[0].AMOUNT;
            }
        );
    }


}