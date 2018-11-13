import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
//import { Observable } from 'rxjs/Observable';
import { AppSettings } from '../appsettings';
import {documentDetailsService} from '../documentDetails-component/document-details.service';
import 'rxjs/add/operator/map'; // this is necessary
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class PropertiesService {
    public selectedExtractedText: BehaviorSubject<string> = new BehaviorSubject<string>("");
    public selectedType: BehaviorSubject<string> = new BehaviorSubject<string>("");
    public selectedAuditor: BehaviorSubject<string> = new BehaviorSubject<string>("");
    public selectedMultiplier: BehaviorSubject<string> = new BehaviorSubject<string>("");
    public selectedCurrency: BehaviorSubject<string> = new BehaviorSubject<string>("");
    public selectedReportDate: BehaviorSubject<string> = new BehaviorSubject<string>("");
    public selectedSourceDate: BehaviorSubject<string> = new BehaviorSubject<string>("");
    public selectedStartDate: BehaviorSubject<string> = new BehaviorSubject<string>("");

    public selectedHeaderReportDate: BehaviorSubject<string> = new BehaviorSubject<string>("");
    public selectedWellsReportDate: BehaviorSubject<string> = new BehaviorSubject<string>("");

    public selectedConsolidated: BehaviorSubject<string> = new BehaviorSubject<string>("");
    public selectedFYEChange: BehaviorSubject<string> = new BehaviorSubject<string>("");
    public selectedPeriodFY: BehaviorSubject<string> = new BehaviorSubject<string>("");
    public selectedSourceTypeID: BehaviorSubject<string> = new BehaviorSubject<string>("");
    public selectedPrincipleTypeID: BehaviorSubject<string> = new BehaviorSubject<string>("");
    public selectedPreviousReport: BehaviorSubject<string> = new BehaviorSubject<string>("");
    public selectedWellsPeriod: BehaviorSubject<string> = new BehaviorSubject<string>("");
    public selectedDocumentHeader: BehaviorSubject<string> = new BehaviorSubject<string>("");

    constructor(private _docDetailsService: documentDetailsService, public http:Http) {}

    getReportTypesList() {
        const endpoint = AppSettings.REPORT_TYPES_LIST_API_ENDPOINT;
        return this.http.get(endpoint).map((res:Response) => res.json());
    }

    getMultipliersList() {
        const endpoint = AppSettings.MULTIPLIERS_LIST_API_ENDPOINT;
        return this.http.get(endpoint).map((res:Response) => res.json());
    }

    getCurrencyList() {
        const endpoint = AppSettings.CURRENCY_LIST_API_ENDPOINT;
        return this.http.get(endpoint).map((res:Response) => res.json());
    }

    getSourceTypesList() {
        const endpoint = AppSettings.SOURCE_TYPES_LIST_API_ENDPOINT;
        return this.http.get(endpoint).map((res:Response) => res.json());
    }

    getAuditorsList() {
        const endpoint = AppSettings.AUDITORS_LIST_API_ENDPOINT;
        return this.http.get(endpoint).map((res:Response) => res.json());
    }

    getPrincipleTypesList() {
        const endpoint = AppSettings.PRINCIPLE_TYPE_LIST_API_ENDPOINT;
        return this.http.get(endpoint).map((res:Response) => res.json());
    }

    getPreviousReportsList() {
        const endpoint = AppSettings.PPREVIOUS_REPORTS_LIST_API_ENDPOINT + "?COMPNUMBER=" + 
                this._docDetailsService.selectedCompNumber;
        return this.http.get(endpoint).map((res:Response) => res.json());
    }

    getWellsPeriodsList() {
        const endpoint = AppSettings.WELLS_PERIODS_LIST_API_ENDPOINT 
                + "?COMPNUMBER=" + this._docDetailsService.selectedCompNumber
                + "&REPORTGROUPCODE=" + this._docDetailsService.selectedReportTypeCode
                + "&FORMCODE=" + this._docDetailsService.selectedFormCode.getValue();
        return this.http.get(endpoint).map((res:Response) => res.json());
    }

    getDocumentHeaderList() {
        ////console.log('Arrived in getDocumentHeaderList() !!! ');
        //console.log('propertiesService selectedDocumentID: ' + this._docDetailsService.selectedDocID);
        //console.log('propertiesService selectedFormCode: ' + this._docDetailsService.selectedFormCode.getValue());
        const endpoint = AppSettings.DOCUMENT_HEADER_LIST_API_ENDPOINT 
                + "?DOCUMENTID=" + this._docDetailsService.selectedDocID
                //+ "&FORM=" + this._docDetailsService.selectedFormCode.getValue(); //mySQL
                + "&FORMCODE=" + this._docDetailsService.selectedFormCode.getValue();
                ////console.log('getDocumentHeaderList endpoint: ' + endpoint);
                return this.http.get(endpoint).map((res:Response) => res.json());
    }

    public setSelectedExtractedText(newText: string) {
        //console.log("in properties.service.ts sets CAPTION to: " + newText);
        this.selectedExtractedText.next(newText);
    }

    public setSelectedType(newType: string) {
        this.selectedType.next(newType);
    }

    public setSelectedAuditor(newAuditor: string) {
        this.selectedAuditor.next(newAuditor);
    }

    public setSelectedMultiplier(newMultiplier: string) {
        //console.log("I'm in properties.service.ts setSelectedMultiplier: " + newMultiplier);
        this.selectedMultiplier.next(newMultiplier);
    }

    public setSelectedCurrency(newCurrency: string) {
        this.selectedCurrency.next(newCurrency);
    }

    public setSelectedReportDate(newDate: string) {
        //newDate = newDate.substr(0, 10);
        //console.log("I'm in properties.service.setSelectedReportDate: " + newDate);
        this.selectedReportDate.next(newDate);
    }

    public setSelectedSourceDate(newDate: string) {
        newDate = newDate.substr(0, 10);
        console.log("I'm in properties.service.setSelectedSourceDate: " + newDate);
        this.selectedSourceDate.next(newDate);
    }

    public setSelectedStartDate(newDate: string) {
        newDate = newDate.substr(0, 10);
        //console.log("I'm in properties.service.setSelectedStartDate: " + newDate);
        this.selectedStartDate.next(newDate);
    }

    public setSelectedWellsReportDate(newDate: string) {
        //console.log("I'm in properties.service.setSelectedWellsReportDate: " + newDate);
        this.selectedWellsReportDate.next(newDate);
    }

    public setSelectedHeaderReportDate(newDate: string) {
        //console.log("I'm in properties.service.setSelectedHeaderReportDate: " + newDate);
        this.selectedHeaderReportDate.next(newDate);
    }

    public setSelectedConsolidated(newChecked: string) {
        //console.log("I'm in properties.service.ts setSelectedConsolidated: " + newChecked);
        this.selectedConsolidated.next(newChecked);
    }

    public setSelectedFYEChange(newValue: string) {
        this.selectedFYEChange.next(newValue);
    }

    public setSelectedPeriodFY(newValue: string) {
        //console.log("I'm in properties.service.ts setSelectedPeriodFY: " + newValue);
        this.selectedPeriodFY.next(newValue);
    }

    public setSelectedSourceTypeID(newValue: string) {
        this.selectedSourceTypeID.next(newValue);
    }

    public setSelectedPrincipleTypeID(newValue: string) {
        this.selectedPrincipleTypeID.next(newValue);
    }

    public setSelectedPreviousReport(newValue: string) {
        //console.log("I'm in properties.service.ts setSelectedPreviousReport: " + newValue);
        this.selectedPreviousReport.next(newValue);
    }

    public setSelectedWellsPeriod(newValue: string) {
        //console.log("I'm in properties.service.ts setSelectedwellsPeriod: " + newValue);
        this.selectedWellsPeriod.next(newValue);
    }

    public setSelectedDocumentHeader(newValue: string) {
        //console.log("I'm in properties.service.ts setSelectedDocumentHeader: " + newValue);
        this.selectedDocumentHeader.next(newValue);
    }

    public getSelectedExtractedText() {
        ////console.log("I'm in properties.service.ts getSelectedExtractedText: " + this.selectedExtractedText.getValue());
        return this.selectedExtractedText.getValue();
    }

    public getSelectedType() {
        //console.log("I'm in properties.service.ts getSelectedType: " + this.selectedType.getValue());
        return this.selectedType.getValue();
    }

    public getSelectedAuditor() {
        //console.log("I'm in properties.service.ts getSelectedAuditor: " + this.selectedAuditor.getValue());
        return this.selectedAuditor.getValue();
    }

    public getSelectedMultiplier() {
        //console.log("I'm in properties.service.ts getSelectedMultiplier: " + this.selectedMultiplier.getValue());
        return this.selectedMultiplier.getValue();
    }

    public getSelectedCurrency() {
        //console.log("I'm in properties.service.ts getSelectedCurrency: " + this.getSelectedCurrency.getValue());
        return this.selectedCurrency.getValue();
    }

    public getSelectedReportDate() {
        //console.log("I'm in properties.service.ts getSelectedReportDate: " + this.selectedReportDate.getValue());
        return this.selectedReportDate.getValue();
    }
    
    public getSelectedStartDate() {
        //console.log("I'm in properties.service.ts getSelectedStartDate: " + this.selectedStartDate.getValue());
        return this.selectedStartDate.getValue();
    }
    
    public getSelectedSourceDate() {
        //console.log("I'm in properties.service.ts getSelectedSourceDate: " + this.selectedSourceDate.getValue());
        return this.selectedSourceDate.getValue();
    }
    
    public getSelectedWellsReportDate() {
        //console.log("I'm in properties.service.ts getSelectedWellsReportDate: " + this.selectedWellsReportDate.getValue());
        return this.selectedWellsReportDate.getValue();
    }

    public getSelectedHeaderReportDate() {
        //console.log("I'm in properties.service.ts getSelectedHeaderReportDate: " + this.selectedHeaderReportDate.getValue());
        return this.selectedHeaderReportDate.getValue();
    }

    public getSelectedConsolidated() {
        //console.log("I'm in properties.service.ts getSelectedConsolidated: " + this.selectedConsolidated.getValue());
        return this.selectedConsolidated.getValue();
    }

    public getSelectedFYEChange() {
        //console.log("I'm in properties.service.ts getSelectedFYEChange: " + this.selectedFYEChange.getValue());
        return this.selectedFYEChange.getValue();
    }

    public getSelectedPeriodFY() {
       //console.log("I'm in properties.service.ts getSelectedPeriodFY: " + this.selectedPeriodFY.getValue());
       return (this.selectedPeriodFY.getValue() !== 'undefined' ? this.selectedPeriodFY.getValue() : '');
       //return this.selectedPeriodFY.getValue();
    }

    public getSelectedSourceTypeID() {
        //console.log("I'm in properties.service.ts getSelectedSourceTypeID: " + this.selectedSourceTypeID.getValue());
        return this.selectedSourceTypeID.getValue();
    }

    public getSelectedPrincipleTypeID() {
        //console.log("I'm in properties.service.ts getSelectedPrincipleTypeID: " + this.selectedPrincipleTypeID.getValue());
        return this.selectedPrincipleTypeID.getValue();
    }

    public getSelectedPreviousReport() {
        //console.log("I'm in properties.service.ts getSelectedPreviousReport: " + this.selectedPreviousReport.getValue());
        return this.selectedPreviousReport.getValue();
    }

    public getSelectedWellsPeriod() {
        //console.log("I'm in properties.service.ts getSelectedWellsPeriod: " + this.selectedWellsPeriod.getValue());
        return this.selectedWellsPeriod.getValue();
    }

    public getSelectedDocumentHeader() {
        //console.log("I'm in properties.service.ts getSelectedDocumentHeader: " + this.selectedDocumentHeader.getValue());
        return this.selectedDocumentHeader.getValue();
    }

    //public getSelectedListName() {
    //    console.log("I'm in properties.service.ts getSelectedListName: " + this.selectedListName.getValue());
    //    return this.selectedListName.getValue();
    //}

    //public setSelectedListName(newValue: any) {
        //console.log("I'm in properties.service.ts setSelectedListName: " + newValue);
        //this.selectedListName.next(newValue);
    //}

    public saveDocumentHeader(documentHeader: any[]) {   
        console.log("Saving " + documentHeader.length + " records for Document ID: " + documentHeader[0].doc_id);
        const path = AppSettings.SAVE_HEADER_API_ENDPOINT; 
        //if (this.selectedDocID > 0) {
            console.log("URL: " + path);
            return this.http.post(path, documentHeader).map((res:Response) => res.json());
        //}
        //else return null;
    }
    
}