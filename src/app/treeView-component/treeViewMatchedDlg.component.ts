import { Component } from '@angular/core';
import { MatDialog, MatInput, MatDialogConfig, MatDialogRef } from '@angular/material';

@Component({
  selector: 'treeViewMatchedDlg',
  templateUrl: './treeViewMatchedDlg.component.html',
  styleUrls: [ './treeViewMatch.component.scss' ],     
})

export class TreeViewMatchedDialog {

  constructor(private dialogRef: MatDialogRef<MatDialog>) {
    //console.log("I'm in TreeViewMatchedDialog.constructor !!!")
  }

  onCloseConfirm() {
    this.dialogRef.close('ok');
  }

  onCloseCancel() {
    this.dialogRef.close('Cancel');
  }

}

