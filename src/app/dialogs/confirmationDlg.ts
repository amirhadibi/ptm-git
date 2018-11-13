import { Component } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
    selector: 'dialog-confirmation',
    templateUrl: './confirmationDlg.html',
    styleUrls: ['../css/app.component.scss'],
})
  
export class ConfirmDialog {
    public confirmMessage: string;

    constructor(public dialogRef: MatDialogRef<ConfirmDialog>) {}  
    
    onCloseConfirm() {
        this.dialogRef.close('ok');
    }

    onCloseCancel() {
        this.dialogRef.close('Cancel');
    }

}