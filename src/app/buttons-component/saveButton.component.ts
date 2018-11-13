import { Component, EventEmitter, Output } from '@angular/core';
import { documentDetailsService } from '../documentDetails-component/document-details.service';

@Component({
    selector: 'saveButton',
    templateUrl: './saveButton.component.html',
})

export class SaveButtonComponent {
    @Output() alertEvent = new EventEmitter();
    @Output() closeEvent = new EventEmitter();

    public gMessage: string='';  

    constructor(private _docDetailsService: documentDetailsService) {}
        
    showAlert(aMessage: string) {
        this.gMessage = aMessage;
        this.alertEvent.emit(null);
    }

    onClick() {
        let vStatus = this._docDetailsService.getSelectedStatus();
        let vDocID = this._docDetailsService.selectedDocID;
        console.log("onClick in SaveButton,ts => " + vDocID + " => " + vStatus);
        
        switch(vStatus.trim()) { 
            case "": {
                this.showAlert('You need to choose a status!');
                break;
            }
            case "0": {
                console.log("0 => " + vDocID + " => " + vStatus);
                if (vDocID >= 15000000) 
                    this.showAlert('Cannot save a XBRL document as TOPROCESS!');
                else 
                    this.closeEvent.emit();
                break;
            }
            case "5": {
                if (vDocID >= 15000000) 
                    this.showAlert('Need to check if user has performed the Equalize Period function!');
                else 
                    this.closeEvent.emit();
                break;
            }
            default: {
                this.closeEvent.emit(null);
                break;            
            }
        }
        
    }

}

    
