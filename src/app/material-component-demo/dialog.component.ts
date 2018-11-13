import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

/**
 * @title Injecting data when opening a dialog
 */
@Component({
  selector: 'dialog-component',
  templateUrl: 'dialog.component.html',
})
export class DialogDataExample {
    animal: string;
    name: string;
  
    constructor(public dialog: MatDialog) {}

    openDialog() {
        let dialogRef = this.dialog.open(DialogDataExampleDialog, {
            width: '500px',
            data: { name: this.name, animal: this.animal }
        });
        dialogRef.afterClosed().subscribe(result => {
            this.animal = result;
            console.log(`Dialog result: ${result}`); // Pizza!
        });
    }
      
}

@Component({
  selector: 'dialog-data-component',
  templateUrl: 'dialog.dataComponent.html',
})
export class DialogDataExampleDialog {
    constructor(public dialogRef: MatDialogRef<DialogDataExampleDialog>,@Inject(MAT_DIALOG_DATA) public data: any) {}  

    onNoClick(): void {
        this.dialogRef.close();
    }
                
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */