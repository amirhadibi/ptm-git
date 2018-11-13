import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; // this is necessary
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AlertService {

    public selectedMessageText: BehaviorSubject<string> = new BehaviorSubject<string>("");


    public setSelectedMessageText(newText: string) {
        //console.log("I'm in alert.service.ts setSelectedExtractedText: " + newText);
        this.selectedMessageText.next(newText);
    }

    public getSelectedMessageText() {
        //console.log("I'm in alert.service.ts getSelectedMessageText: " + this.selectedMessageText.getValue());
        return this.selectedMessageText.getValue();
    }
    
}
