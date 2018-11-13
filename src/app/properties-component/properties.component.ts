import {Component, EventEmitter, Output} from "@angular/core";
//import {MatDialog, MatDialogConfig} from '@angular/material';
import {PropertiesService} from './properties.service';
import {MatDialogRef} from '@angular/material';

@Component({
    selector: 'propertiesDialog',
    templateUrl: './properties.component.html',
    styleUrls: ['../css/app.component.scss'],
})
  
  export class PropertiesDialog {

    public repType_list; 
    public multipliers_list;
    public currency_list;
    public sourceTypes_list;
    public auditors_list;
    public principleTypes_list;
    public previousRepotsList;
    public wellsPeriodsList;
    public documentHeaderList;

    //public selectedPeriod: string = "";
    public selectedExtractedText: string="";
    public selectedType: string="";
    public selectedAuditor: string="";
    public selectedMultiplier: string="";
    public selectedCurrency: string="";
    public startDate: string="";
    public selectedConsolidated: string="0";
    public selectedFYEChange: string="0";
    public selectedPeriodFY: string="";
    public selectedSourceTypeID: string="";
    public selectedPrincipleTypeID: string="";
    public selectedReportDate: string = "";
    public selectedWellsReportDate: string = "";
    public selectedHeaderReportDate: string = "";


    public consolidated: boolean=false;
    public fyeChange: boolean=false;

    constructor(public dialogRef: MatDialogRef<PropertiesDialog>,  public _propertiesService: PropertiesService) {
        //console.log('I am in properties.constructor()!');
        //dialogRef.disableClose = true; // Disable click outside of angular material dialog

        // the following statements are necessary in order to showing the selected values when dialog opens:   
        this.selectedExtractedText = this.getSelectedExtractedText(); 
        this.selectedType = this.getSelectedType(); 
        this.selectedAuditor = this.getSelectedAuditor(); 
        this.selectedMultiplier = this.getSelectedMultiplier(); 
        this.selectedCurrency = this.getSelectedCurrency(); 
        this.startDate = this.getSelectedReportDate();

        this.selectedConsolidated = this.getSelectedConsolidated();
        this.selectedFYEChange = this.getSelectedFYEChange();
        
        this.selectedPeriodFY = this.getSelectedPeriodFY();
        this.selectedSourceTypeID = this.getSelectedSourceTypeID();
        this.selectedPrincipleTypeID= this.getSelectedPrincipleTypeID();

        this.consolidated = (this.selectedConsolidated === "1");
        this.fyeChange = (this.selectedFYEChange === "1");

        //Clear list boxes:
        this._propertiesService.setSelectedPreviousReport("");
        this._propertiesService.setSelectedWellsPeriod("");
        this._propertiesService.setSelectedDocumentHeader("");

    }  
        
    ngOnInit() {
        //console.log('I am in properties.ngOnInit()!');
        // Retrieves data from database and makes it available for html to load it in dialog components:
        this.getRepTypesList();        
        this.getMultipliersList();
        this.getCurrencyList();
        this.getSourceTypesList();
        this.getAuditorsList();
        this.getPrincipleTypesList();
        this.getPreviousReportsList();
        this.getWellsPeriodsList();
        this.getDocumentHeaderList();

        this.getSelectedReportDate();
        this.getSelectedConsolidated();
        this.getSelectedFYEChange();
        this.getSelectedPeriodFY();
        this.getSelectedSourceTypeID();
        this.getSelectedPrincipleTypeID();

        //this.consolidated = (this.selectedConsolidated === "1");
        //this.fyeChange = (this.selectedFYEChange === "1");

        //console.log("properties.PERIODFY=  " + this.selectedPeriodFY);
        //console.log("propertirs.SOURCETYPEID=  " + this.selectedSourceTypeID);
        //console.log("properties.PRINCIPLETYPEID=  " + this.selectedPrincipleTypeID);
    }
    
    getRepTypesList() { 
        //console.log('I am in getRepTypeList()!');
        this._propertiesService.getReportTypesList().subscribe(
            // the first argument is a function which runs on success
            data => { this.repType_list = data},
            // the second argument is a function which runs on error
            err => console.error(err),
            // the third argument is a function which runs on completion
            //() => //console.log('done with getRepTypesList()')
            () => {
                let self = this;
                var newArr = self.repType_list.filter(function(item){
                    return item.FINANCIALREPORTTYPE === self.selectedType;
                });
                if (newArr.length > 0) {
                    self.selectedType =  newArr[0].FINANCIALREPORTTYPE + ": "  + newArr[0].DESCRIPTION; 
                    //console.log("SELECTEDTYPE = " + self.selectedType);
                }
            }
        );
    }

    getMultipliersList() { 
        //console.log('I am in getMultipliersList()!');
        this._propertiesService.getMultipliersList().subscribe(

            // the first argument is a function which runs on success
            data => { this.multipliers_list = data},
            // the second argument is a function which runs on error
            err => console.error(err),
            // the third argument is a function which runs on completion
            //() => {}//console.log('done with getMultipliersList()')
            () => {
                let self = this;
                //console.log("SELECTED-MULTIPLIER=  " + self.selectedMultiplier);
                var newArr = self.multipliers_list.filter(function(item){
                    return item.MULTIPLIERCODE === self.selectedMultiplier;
                });
                if (newArr.length > 0) {
                    self.selectedMultiplier =  newArr[0].MULTIPLIERCODE + ": "  + newArr[0].DESCRIPTION; 
                }
            }

        );
    }

    getCurrencyList() { 
        //console.log('I am in getCurrencyList()!');
        this._propertiesService.getCurrencyList().subscribe(
            // the first argument is a function which runs on success
          data => { this.currency_list = data},
          // the second argument is a function which runs on error
          err => console.error(err),
          // the third argument is a function which runs on completion
          () => {
            let self = this;
            //console.log("SELECTED-CURRENCY=  " + self.selectedCurrency);
            var newArr = self.currency_list.filter(function(item){
                return item.CURRENCYCODE === self.selectedCurrency;
            });
            if (newArr.length > 0) {
                self.selectedCurrency =  newArr[0].CURRENCYCODE + ": "  + newArr[0].ISODESCRIPTION; 
            }
      }
        );
    }

    getSourceTypesList() { 
        //console.log('I am in getSourceTypesList()!');
        this._propertiesService.getSourceTypesList().subscribe(
            // the first argument is a function which runs on success
            data => { this.sourceTypes_list = data},
            // the second argument is a function which runs on error
            err => console.error(err),
            // the third argument is a function which runs on completion
            //() => {}//console.log('done with getSourceTypesList()')
            () => {
                let self = this;
                    let newArr = self.sourceTypes_list.filter(function(item){
                    return item.SOURCETYPEID == self.selectedSourceTypeID;
                });
                if (newArr.length > 0) {
                    self.selectedSourceTypeID =  newArr[0].SOURCETYPEID + ": "  + newArr[0].DESCRIPTION; 
                   // console.log("SELECTED-SOURCE-TYPEID-2=  " + self.selectedSourceTypeID);
                }
            }
        );
    }

    getAuditorsList() { 
        //console.log('I am in getAuditorsList()!');
        this._propertiesService.getAuditorsList().subscribe(
            // the first argument is a function which runs on success
            data => { this.auditors_list = data},
            // the second argument is a function which runs on error
            err => console.error(err),
            // the third argument is a function which runs on completion
            //() => {}//console.log('done with getAuditorsList()')
            () => {
                let self = this;
                let newArr = self.auditors_list.filter(function(item){
                    return item.AUDITORCODE === self.selectedAuditor;
                });
                if (newArr.length > 0) {
                    self.selectedAuditor =  newArr[0].AUDITORCODE + ": "  + newArr[0].DESCRIPTION; 
                    //console.log("SELECTEDAUDITOR=  " + self.selectedAuditor);
                }
            }
        );
    }

    getPrincipleTypesList() { 
        //console.log('I am in getPrincipleTypesList()!');
        this._propertiesService.getPrincipleTypesList().subscribe(
            // the first argument is a function which runs on success
            data => { this.principleTypes_list = data},
            // the second argument is a function which runs on error
            err => console.error(err),
            // the third argument is a function which runs on completion
            //() => {}//console.log('done with getPrincipleTypesList()')
            () => {
                let self = this;
                //console.log("SELECTED-PRINCIPAL-TYPE-ID=  " + self.selectedPrincipleTypeID);
                let newArr = self.principleTypes_list.filter(function(item){
                    return item.PRINCIPLETYPEID == self.selectedPrincipleTypeID;
                });
                if (newArr.length > 0) {
                    self.selectedPrincipleTypeID =  newArr[0].PRINCIPLETYPEID + ": "  + newArr[0].DESCRIPTION; 
                    //console.log("SELECTEDPRINCIPALTYPEID=  " + self.selectedPrincipleTypeID);
                }
            }

        );
    }

    getPreviousReportsList() { 
        //console.log('I am in getPreviousReportsList()!');
        this._propertiesService.getPreviousReportsList().subscribe(
            // the first argument is a function which runs on success
          data => { this.previousRepotsList = data},
          // the second argument is a function which runs on error
          err => console.error(err),
          // the third argument is a function which runs on completion
          () => {}//console.log('done with getPreviousReportsList()')
        );
    }

    getWellsPeriodsList() { 
        //console.log('I am in getWellsPeriodsList()!');
        this._propertiesService.getWellsPeriodsList().subscribe(
            // the first argument is a function which runs on success
          data => { this.wellsPeriodsList = data},
          // the second argument is a function which runs on error
          err => console.error(err),
          // the third argument is a function which runs on completion
          () => {}//console.log('done with getWellsPeriodsList()')
        );
    }

    getDocumentHeaderList() { 
        //console.log('I am in getDocumentHeaderList()!');
        this._propertiesService.getDocumentHeaderList().subscribe(
            // the first argument is a function which runs on success
            data => { 
                this.documentHeaderList = data; 
                //this.setSavedReportsList(data);
            },
          // the second argument is a function which runs on error
          err => console.error(err),
          // the third argument is a function which runs on completion
          () => {}//console.log('done with getWellsPeriodsList()')
        );
    }

    public onAuditorsChange(newValue: string) {
        //console.log("PR.onAuditorsChange ... newValue **** " + newValue);
        let vString = newValue.split(":", 2);
        this.selectedAuditor = newValue;
        this._propertiesService.setSelectedAuditor(vString[0]); // this will be used in topPanel.component.ts for saving properties data
    }

    public onMultipliersChange(newValue: string) {
        //console.log("PR.onMultipliersChange ... newValue **** " + newValue);
        let vString = newValue.split(":", 2);
        this.selectedMultiplier = newValue;
        this._propertiesService.setSelectedMultiplier(vString[0]); // this will be used in topPanel.component.ts for saving properties data
    }

    public onReportTypeChange(newValue: string) {
        //console.log("PR.onReportTypeChange ... newValue **** " + newValue);
        let vString = newValue.split(":", 2);
        this.selectedType = newValue;
        this._propertiesService.setSelectedType(vString[0]); // this will be used in topPanel.component.ts for saving properties data
    }

    public onCurrencyChange(newValue: string) {
        //console.log("PR.onCurrencyChange ... newValue **** " + newValue);
        let vString = newValue.split(":", 2);
        this.selectedCurrency = newValue;
        this._propertiesService.setSelectedCurrency(vString[0]); // this will be used in topPanel.component.ts for saving properties data
    }

    public onPrincipleTypeChange(newValue: string) {
        //console.log("PR.onPrincipleTypeChange ... newValue **** " + newValue);
        let vString = newValue.split(":", 2);
        this.selectedPrincipleTypeID = newValue;
        this._propertiesService.setSelectedPrincipleTypeID(vString[0]); // this will be used in topPanel.component.ts for saving properties data
        //console.log("PR.onPrincipleTypeChange ... selectedPrincipleTypeID **** " + vString[0]);
    }

    public onSourceTypeChange(newValue: string) {
        //console.log("PR.onSourceTypeChange ... newValue **** " + newValue);
        let vString = newValue.split(":", 2);
        this.selectedSourceTypeID = newValue;
        this._propertiesService.setSelectedSourceTypeID(vString[0]); // this will be used in topPanel.component.ts for saving properties data
        //console.log("PR.onSourceTypeChange ... selectedPrincipleTypeID **** " + vString[0]);
    }

    public onConsolidatedChange(event) {
        //console.log("PR.onConsolidatedChange ... newValue **** " + event.checked);
        this.selectedConsolidated = (event.checked) ? "1" : "0";
        //this._propertiesService.setSelectedConsolidated(this.selectedConsolidated); // this will be used in topPanel.component.ts for saving properties data
        console.log("PR.onConsolidatedChange ... selectedConsolidated **** " + this.selectedConsolidated);
    }

    public onFYEChange(event) {
        //console.log("PR.onFYEChange ... newValue **** " + event.checked);
        this.selectedFYEChange = (event.checked) ? "1" : "0";
        //this._propertiesService.setSelectedFYEChange(this.selectedFYEChange); // this will be used in topPanel.component.ts for saving properties data
        console.log("PR.onFYEChange ... selectedFYEChange **** " + this.selectedFYEChange);
    }

    public onPeriodFYChange(newValue: string) {
        
        console.log("PR.onPeriodFYChange ... newValue **** " + newValue);
        this.selectedPeriodFY = newValue;
        this._propertiesService.setSelectedPeriodFY(newValue); // This will be used in topPanel.component.ts for saving properties data
        //console.log("PR.onPeriodFYChange ... selectedPeriodFY **** " + this.selectedPeriodFY);
        
    }

    public onReportDateChange(newValue: any) {
        console.log("PR.onReportDateChange ... New Date: " + newValue);
        this.selectedReportDate = (new Date(newValue)).toISOString();
        this._propertiesService.setSelectedReportDate(this.selectedReportDate); // his will be used in topPanel.component.ts for saving properties data
        console.log("PR.onReportDateChange ... selectedReportDate **** " + this.selectedReportDate);
    }

    public onWellsPeriodsChange(newValue: string) {
        //console.log("PR.onWellsPeriodsChange ... newValue **** " + newValue);
        let vString = newValue.split("::", 4);
        this.selectedWellsReportDate = vString[0];
        this._propertiesService.setSelectedWellsPeriod(newValue); // this will be used in mappedList.component.add()
        this._propertiesService.setSelectedWellsReportDate(this.selectedWellsReportDate); // this will be used in mappedList.component.add()
        //console.log("PR.onWellsPeriodsChange ... selectedWellsReportDate **** " + this.selectedWellsReportDate);
    }

    public onDocumentHeaderChange(newValue: string) {
        //console.log("PR.onDocumentHeaderChange ... newValue **** " + newValue);
        let vString = newValue.split("::", 4);
        this.selectedHeaderReportDate = vString[0];
        this._propertiesService.setSelectedDocumentHeader(newValue); // this will be used in mappedList.component.add()
        this._propertiesService.setSelectedHeaderReportDate(this.selectedHeaderReportDate); // this will be used in mappedList.component.add()
    }

    public onPreviousReportChange(newValue: string) {
        let vString = newValue.split("::", 4);

        //console.log("PR.onPreviousReportChange ... newValue **** " + newValue);
        //this._propertiesService.setSelectedListName("PreviousReports");
        this._propertiesService.setSelectedPreviousReport(newValue); // this will be used in ListComponent.add()

        this.selectedReportDate = vString[0];
        this.selectedType = vString[1];
        this.selectedCurrency = vString[2];
        this.selectedMultiplier = vString[3];

        this._propertiesService.setSelectedType(this.selectedType);
        this._propertiesService.setSelectedCurrency(this.selectedCurrency);
        this._propertiesService.setSelectedMultiplier(this.selectedMultiplier);

        console.log("selectedReportDate: " + this.selectedReportDate);
        if (this.selectedReportDate === '0000-00-00') {
            this.selectedReportDate = ((new Date()).toISOString());
        } else if (this.selectedReportDate !== 'null') {
            let re = /-/gi; 
            let newDateString = this.selectedReportDate.replace(re, '/');
            //console.log("New Date: " + newDateString);
            this.selectedReportDate = (new Date(newDateString)).toISOString();
            console.log("selectedReportDate: " + this.selectedReportDate);
            this._propertiesService.setSelectedReportDate(this.selectedReportDate);
            this.startDate = this.selectedReportDate;
        }
      
        //console.log('properties.onChange()- Type: ' + this.selectedType);
        //console.log('properties.onChange()- Multiplier: ' + this.selectedMultiplier);
        //console.log('properties.onChange()- Currency: ' + this.selectedCurrency);
        //console.log('properties.onChange()- ReportDate: ' + this.selectedReportDate);
    
        this.getRepTypesList();        
        this.getMultipliersList();
        this.getCurrencyList();
    }

    public getSelectedExtractedText() {
        ////console.log("I'm in properties.component.ts.getSelectedExtractedText: " + 
                //this._propertiesService.getSelectedExtractedText());
         return this._propertiesService.getSelectedExtractedText();
    }

    public getSelectedType() {
        return this._propertiesService.getSelectedType();
    }

   public getSelectedAuditor() {
    return this._propertiesService.getSelectedAuditor();
    }

    public getSelectedMultiplier() {
        return this._propertiesService.getSelectedMultiplier();
    }

    public getSelectedCurrency() {
        return this._propertiesService.getSelectedCurrency();
    }

    public getSelectedReportDate() {
        return this._propertiesService.getSelectedReportDate();
        //return new FormControl((new Date()).toISOString());
    }

    public getSelectedConsolidated() {
        return this._propertiesService.getSelectedConsolidated();
    }

    public getSelectedFYEChange() {
        return this._propertiesService.getSelectedFYEChange();
    }

    public getSelectedPeriodFY() {
        return this._propertiesService.getSelectedPeriodFY();
    }

    public getSelectedSourceTypeID() {
        return this._propertiesService.getSelectedSourceTypeID();
    }

    public getSelectedPrincipleTypeID() {
        return this._propertiesService.getSelectedPrincipleTypeID();
    }

    onCloseConfirm() {
        this.dialogRef.close('ok');
        this._propertiesService.setSelectedConsolidated(this.selectedConsolidated); // this will be used in topPanel.component.ts for saving properties data
        this._propertiesService.setSelectedFYEChange(this.selectedFYEChange); // this will be used in topPanel.component.ts for saving properties data
    }

    onCloseCancel() {
        this.dialogRef.close('Cancel');
    }
}