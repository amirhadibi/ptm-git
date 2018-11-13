//import { IntegralUIModule } from 'integralui/integralui.module';
import { Component, EventEmitter, Output, ViewContainerRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { IntegralUIListBox } from 'integralui/components/integralui.listbox';
import { IntegralUISelectionMode } from 'integralui/components/integralui.core';
import { PropertiesService } from '../properties-component/properties.service';

@Component({
    selector: 'mappedList',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './mappedList.component.html',
    styleUrls: [ './mappedList.component.scss' ]      
})
export class MappedListComponent {
    @ViewChild('application', {read: ViewContainerRef}) applicationRef: ViewContainerRef;
    @ViewChild('lbMapped') lbMapped: IntegralUIListBox;
    @Output() alertEvent = new EventEmitter();

    public items: any=[];
    public gMessage: string='';
    public selectedItem: any;
    public scrollType: string = 'vertical'; 
    public selMode: IntegralUISelectionMode = IntegralUISelectionMode.One;
    public listStyle: any = {
        general: {
            normal: 'listbox-mapped-normal',
            bordered: 'listbox-mapped-bordered'
        }
    }
    
    public selectedItemText: string="";
    public numItems: number = 3;
    public visible = false; // Hides save button. Just in case if we want to show it in certain scenarios.

    constructor(private _propertiesService: PropertiesService){
        this.items = [];
    } 
    
    ngAfterViewInit(){
        //this.add();
    }

    addItems(aItem: string){
        let item: any = {
            text : aItem,
            //id: i
        };

        this.items.push(item);
        /*
        for (let i = 1; i <= this.numItems; i++){
            let item: any = {
                text : 'Item ' + i.toString(),
                id: i
            };

            this.items.push(item);
        }
        */
    }

    add(){
        let vSelectedWellsPeriod: string = this._propertiesService.getSelectedWellsPeriod();
        let vSelectedDocumentHeader: string = this._propertiesService.getSelectedDocumentHeader();
        let vSelectedReport: string = vSelectedWellsPeriod + " => " + vSelectedDocumentHeader;
        let vSelectedWellsReportDate: string = this._propertiesService.getSelectedWellsReportDate();
        let vSelectedHeaderReportDate: string = this._propertiesService.getSelectedHeaderReportDate();

        if ((vSelectedWellsPeriod !== "") && (vSelectedDocumentHeader !== "")) {
            if (vSelectedWellsReportDate === vSelectedHeaderReportDate) {
                //console.log(vSelectedWellsReportDate + vSelectedHeaderReportDate + " will be added to mapped list!");
                this.addItems(vSelectedReport);
            } else {
                this.showAlert("Wells Period date must be the same as Destination Period date!")                
                this.listStyle.general = 'normal'; 
            }

        } else {
            this.showAlert("Please select a period from Wells and Destination Period to continue!");
        }
        this.lbMapped.updateLayout();
    }

    delete(){
        console.log(this.selectedItem.text + " was deleted!")
        this.lbMapped.removeItem(this.selectedItem);

        this.lbMapped.updateLayout();
    }

    clear(){
        this.lbMapped.clearItems();
        this.lbMapped.updateLayout();
    }

    onClick(aItem: any) {
        //console.log('Clicked ...' + aItem.text);
        this.selectedItem = aItem;
        this.selectedItemText = aItem.text;
    }
    
    showAlert(aMessage: string) {
        this.gMessage = aMessage;
        this.alertEvent.emit(null);
    }
}

    
