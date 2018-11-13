//import { IntegralUIModule } from 'integralui/integralui.module';
import { Component, ViewContainerRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { IntegralUIListBox } from 'integralui/components/integralui.listbox';
import { IntegralUISelectionMode } from 'integralui/components/integralui.core';
import { PropertiesService } from '../properties-component/properties.service';
import { EventEmitter, Output, Inject } from '@angular/core';

@Component({
    selector: 'reportList',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './list.component.html',
    styleUrls: [ './list.component.css' ]      
})

export class ListComponent {
    @ViewChild('application', {read: ViewContainerRef}) applicationRef: ViewContainerRef;
    @ViewChild('lbReports') lbReports: IntegralUIListBox;
    @Output() previousReportsEvent = new EventEmitter();
    @Output() alertEvent = new EventEmitter();

    public items: any=[];
    public gMessage: string='';
    public scrollType: string = 'vertical'; 
    public selMode: IntegralUISelectionMode = IntegralUISelectionMode.One;
    public listStyle: any = {
        general: {
            normal: 'listbox-reports'
        }
    }
    public selectedItem: any;
    public selectedItemText: string="";

    constructor(private _propertiesService: PropertiesService){
        this.items = [];
    } 
    
    ngAfterViewInit(){
        this.getDocumentHeaderList();
    }

    getDocumentHeaderList() { 
        //console.log('I am in getDocumentHeaderList()!');
        this._propertiesService.getDocumentHeaderList().subscribe(
            // the first argument is a function which runs on success
            data => { 
                this.setSavedReportsList(data);
            },
          // the second argument is a function which runs on error
          err => console.error(err),
          // the third argument is a function which runs on completion
          () => {}//console.log('done with getWellsPeriodsList()')
        );
    }

    private setSavedReportsList(savedReportList) { 
        for (let i = 0; i < savedReportList.length; i++) {
            let vString = savedReportList[i].REPORTDATE + '::' + savedReportList[i].REPORTTYPE + '::' 
                + savedReportList[i].CURRENCYCODE + '::' + savedReportList[i].MULTIPLIER
            //console.log('setSavedReportsList => ' + vString);
            this._propertiesService.setSelectedPreviousReport(vString);

            // add reports to the list of saved reports
            this.add();
        }           
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

    public add(){
        let vSelectedReport = this._propertiesService.getSelectedPreviousReport();
        //console.log(vSelectedReport + " will be added!");
        //this.clear();
        if (vSelectedReport !== "") {
            //console.log(vSelectedReport + " will be added!");
            this.addItems(vSelectedReport);
        }
        this.lbReports.updateLayout();
    }

    delete(){
        //console.log(this.selectedItem.text + " will be deleted!")
        this.lbReports.removeItem(this.selectedItem);

        this.lbReports.updateLayout();
    }

    clear(){
        this.lbReports.clearItems();
        this.lbReports.updateLayout();
    }

    onClick(aItem: any) {
        console.log('Clicked ...' + aItem.text);
        this.selectedItem = aItem;
        this.selectedItemText = aItem.text;
        this.previousReportsEvent.emit(null);
    }

    showAlert(aMessage: string) {
        this.gMessage = aMessage;
        this.alertEvent.emit(null);
    }
    
}

    
