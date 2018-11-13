import { Component, Input } from '@angular/core';
import { MatDialog, MatInput, MatDialogConfig } from '@angular/material';
import { AlertService } from './alert.service';

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
})
export class AlertDialog {
  constructor(private _alertService: AlertService, private dialog: MatDialog) {
    //console.log("I'm in alarm.constructor !!!")
    this.alertMessage = this._alertService.getSelectedMessageText();
  }

  public alertMessage:string;

  private openDialog() {
    const settings: MatDialogConfig = {
      //width: '25vw',
      //height: '13vh',
      role: 'alertdialog'
    }
    const dialogRef = this.dialog.open(AlertDialog, settings)
/*
    let dialogRef = this.dialog.open(AlertDialog, {
      width: '350px',
      height: '100px',
      data: {},
    });  
*/
  }

  public showAlert(aMessage: string) {
    //console.log("I'm in alert.componen.showAlert and here is the alert messasge: "+aMessage);
    this._alertService.setSelectedMessageText(aMessage);
    this.openDialog();
  }

}

