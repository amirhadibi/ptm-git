import { Component, EventEmitter, Output } from '@angular/core';
import { documentDetailsService } from '../documentDetails-component/document-details.service';
import {ChartListService} from '../chartList-component/chartList.service';
import {SaveDialog} from '../dialogs/saveDlg';
import { MatDialog, MatDialogConfig } from '@angular/material';
import {ConfirmDialog} from '../dialogs/confirmationDlg';

@Component({
  selector: 'toolbar',
  templateUrl: './toolBar.component.html',
  styleUrls: ['../css/app.component.scss'],
})

export class ToolbarComponent {
  @Output() financialsEvent = new EventEmitter();
  @Output() saveEvent = new EventEmitter();
  @Output() alertEvent = new EventEmitter();
  @Output() treeEvent = new EventEmitter();
  @Output() euroFormtEvent = new EventEmitter();

  public gFormID: string='01';
  public gFormatID: string='US';
  public gMessage: string='';
  public title: string='';
  public gToggle: string='1';
  //public gSelectedChartCode: string = AppSettings.CHART_CODE;
  public gSelectedChartCode: string = "";
  public selectedChart: string = "";
  public chartCodesList;

  constructor(public dialog: MatDialog, private _chartListService: ChartListService, private _docDetailsService: documentDetailsService) {
    //console.log('I am in toolbar.constructor()!');
    this.gSelectedChartCode = this._docDetailsService.selectedChartCode;
    //this.selectedChart = this._docDetailsService.selectedChartCode;
  }

  ngOnInit() {
    //console.log('I am in toolbar.ngOnInit()!');
    this._docDetailsService.selectedTitle.subscribe((val: string) => {
        this.title = val;
    });
    this.getChartCodesList();
  }

  public onChange(newValue: string) {
    let vString = newValue.split(":", 2);
    //console.log("newValue **** " + newValue);
    //console.log("vString **** " + vString);

    this.gSelectedChartCode = vString[0];
    //console.log("tb.SelectedChart: " + this.gSelectedChartCode);

    this._chartListService.setChartCode(this.gSelectedChartCode);

    this.treeEvent.emit(null);
  }

  private openConfirmationDialog(aFormID, aFormatID: string) {
    const settings: MatDialogConfig = {
      disableClose: true    
    }
    const dialogRef = this.dialog.open(ConfirmDialog, settings);
    dialogRef.componentInstance.confirmMessage = "Have you saved your changes?"
    dialogRef.afterClosed().subscribe(result => {
      //console.log("Selected Stataus: " + this._docDetailsService.getSelectedStatus());
      //console.log("Result: " + result);
      if (result === 'ok') {
            this.getFinancials(aFormID, aFormatID);
        };
    });
}

  // Calls getFinancials() in docDetails.component.ts. 
  // Check panel-documentDetails.component.html for more edetails.
  getFinancials(aFormID, aFormatID: string) {
    //console.log('In TOOLBAR.getFinancials()!');
    this.gFormID = aFormID;
    this.gFormatID = aFormatID;
    this.financialsEvent.emit(null);
  } 

  // to load chart list:
  public getChartCodesList() { 
    //console.log('I am in getChartList()!');
    this._chartListService.getChartCodes()
    .subscribe(
      // the first argument is a function which runs on success
      data => { 
          this.chartCodesList = data;
      },
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => {
        let self = this;
        let newArr = this.chartCodesList.filter(function(item){
            return item.CHARTCODE == self.gSelectedChartCode;
        });
        if (newArr.length > 0) {
            self.selectedChart =  newArr[0].CHARTCODE + ": "  + newArr[0].DESCRIPTION;
            //+ ': ' + this._docDetailsService.selectedReportTypeCode; 
        }
    }
);
  }

  showAlert(aMessage: string) {
    //console.log('I am in TOOLBAR.showAlert() ....' + aMessage);
    this.gMessage = aMessage;
    this.alertEvent.emit(null);
  }

  showTree() {
    //console.log('Started in TOOLBAR.showTree() ....' + this.gToggle);
    if (this.gToggle == '1') {
      this.gToggle = '2'
    } else {
      this.gToggle = '1'
    }
    //console.log('Changed to in TOOLBAR.showTree() ....' + this.gToggle);
    //this.gToggle = aToggle;
    this.treeEvent.emit(null);
  }

  saveData() {
    //console.log('in SaveData!!!');
    this.openDialog();
  }

  europeanFormat(aFormID: string) {
    console.log('in europeanFormat()!');  
    this.gFormID = aFormID;
    if (this.gFormatID === 'US') 
      this.gFormatID = 'EUR';
    else
      this.gFormatID = 'US';
    
    this.getFinancials(this.gFormID, this.gFormatID);
    //this.euroFormtEvent.emit(null);
  }

  open() {
    //console.log('in Open ...!!!');
  }

  openDialog() {
    const settings: MatDialogConfig = {
      disableClose: true    
    }
    const dialogRef = this.dialog.open(SaveDialog, settings)
    dialogRef.afterClosed().subscribe(result => {
      //console.log("Selected Stataus: " + this._docDetailsService.getSelectedStatus());
      //console.log("Result: " + result);
      if (result === 'ok') this.saveEvent.emit(null);
    });
  }

}


