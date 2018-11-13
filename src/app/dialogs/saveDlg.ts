import { Component, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
//import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { documentDetailsService } from "../documentDetails-component/document-details.service";

@Component({
    selector: 'dialog-saveOptions',
    templateUrl: './saveDlg.html',
    styleUrls: ['../css/app.component.scss'],
})
  
export class SaveDialog {
    public status_list: Array<any> = [];
    public selectedStatus: string;

    constructor(private _docDetailsService: documentDetailsService, 
        public dialogRef: MatDialogRef<SaveDialog>) {

        this.selectedStatus = "";
        this._docDetailsService.setSelectedStatus("");
            
    }  

    public ngAfterViewInit(aToggle: string, aCode: string){
        this.getStatusList();
    } 

    // to load annual chart account list:
    public getStatusList() { 
        //let vSelectedStatus: string="";
        //console.log('I am in getStatusList()!');
        this._docDetailsService.getStatusList().subscribe(
            // the first argument is a function which runs on success
            data => { 
                this.status_list = data;
                //console.log("status_list length: " + this.status_list.length);
            },
            // the second argument is a function which runs on error
            err => console.error(err),
            // the third argument is a function which runs on completion
            () => {}
        );
    }

  
    public onChange(newValue: string) {
        //console.log("newValue **** " + newValue);
        if (newValue) {
            let vString = newValue.split(":", 3);
            //console.log("vString **** " + vString);
        
            let vSelectedStatus = vString[0];
            //console.log('saveDlg.onChange()- Status: ' + vSelectedStatus);
        
            this._docDetailsService.setSelectedStatus(vSelectedStatus);     
        
        }
    }
    
    onCloseConfirm() {
        this.dialogRef.close('ok');
    }

    onCloseCancel() {
        this.dialogRef.close('Cancel');
    }

}