import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map'; // this is necessary
import { Observable } from 'rxjs';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import { AppSettings } from '../appsettings'

@Injectable()
export class documentDetailsService {

    public selectedTitle: BehaviorSubject<string> = new BehaviorSubject<string>("");
    public selectedFormCode: BehaviorSubject<string> = new BehaviorSubject<string>("01");
    public selectedColumnID: BehaviorSubject<number> = new BehaviorSubject<number>(1);
    public selectedStatus: BehaviorSubject<string> = new BehaviorSubject<string>("");
    public selectedDocID: number=0;
    public selectedFormDescription: string;
    public selectedCompanyName: string;
    public selectedReportTypeCode: string;
    public selectedChartCode: string;
    public selectedLiteral: string;
    public selectedCompNumber: number;
    public selectedOrderlink: number;
    public selectedMapcode: number;
    
    constructor(public http:Http) {
    }

    private setFormDescription(description: string) {
        this.selectedFormDescription = description;        
    }

    public getDocumentDetails() {
        ////console.log('arrived in service getDocumentDetails !!!');
        ////console.log('docDetailsService selectedDocumentID: ' + this.selectedDocID);
        //console.log('dts.getDocumentDetails.selectedFormCode: ' + this.selectedFormCode.getValue());
        ////console.log('docDetailsService selectedColumnID: ' + this.selectedColumnID.getValue());

        const endpoint = AppSettings.DOC_DETAILS_API_ENDPOINT + 
            "?COMPNUMBER=" + this.selectedCompNumber + 
            "&CHARTCODE=" + this.selectedChartCode +
            //"&ACCOUNTTYPECODE="+ this.selectedReportTypeCode + //mySQL
            "&TYPECODE="+ this.selectedReportTypeCode +
            //"&DOCUMENTID=" + this.selectedDocID + //mySQL
            "&DOCID=" + this.selectedDocID +
            "&FORMCODE=" + this.selectedFormCode.getValue()

        if (this.selectedDocID > 0) {
            //console.log('DocDetails endpoint: ' + endpoint);
            return this.http.get(endpoint).map((res:Response) => res.json());
        }
        else {
            //console.log('docDetailsService selectedDocumentID <= 0 !!!');
            return null;
        }
    }

    public getColumnIDs() {
        //console.log('docDetailsService selectedDocumentID: ' + this.selectedDocID);
        //console.log('dts.getColumnIDs.selectedFormCode: ' + this.selectedFormCode.getValue());
        //console.log('docDetailsService selectedColumnID: ' + this.selectedColumnID.getValue());

        const endpoint = 
            //AppSettings.COLUMNID_API_ENDPOINT + "?DOCUMENTID=" + this.selectedDocID + "&FORM=" + this.selectedFormCode.getValue(); //mySQL
            AppSettings.COLUMNID_API_ENDPOINT + "?DOCID=" + this.selectedDocID + "&FORMCODE=" + this.selectedFormCode.getValue();
        
        if (this.selectedDocID > 0) {
            //console.log('endpoint: ' + endpoint);
            return this.http.get(endpoint).map((res:Response) => res.json());
        }
        else {
            return null;
        }
    }

    public getNumberOfPeriods(aFormCode: any) {
        //console.log('docDetailsService.aFormCode: ' + aFormCode);

        const endpoint = AppSettings.COLUMNID_API_ENDPOINT + "?DOCID=" + this.selectedDocID + "&FORMCODE=" + aFormCode;
        
        if (this.selectedDocID > 0) {
            return this.http.get(endpoint).map((res:Response) => res.json());
        }
        else {
            return null;
        }
    }
    
    public getDocumentValueOrder(aValueOrder: number) {
        //console.log('dt.getDocumentValueOrder.aValueOrder: ' + aValueOrder);

        const endpoint = AppSettings.VALUEORDER_API_ENDPOINT + "?DOCID=" + this.selectedDocID + "?VALUEORDER=" + aValueOrder;
        
        if (this.selectedDocID > 0) {
            return this.http.get(endpoint).map((res:Response) => res.json());
        }
        else {
            return null;
        }
    }

    public saveDocumentDetails(accountRecords: any[]) {   
        console.log("Saving " + accountRecords.length + " records for Document ID: " + accountRecords[0].doc_id);
        const path = AppSettings.SAVE_DETAILS_API_ENDPOINT; 
        if (this.selectedDocID > 0) {
            console.log("URL: " + path);
            return this.http.post(path, accountRecords).map((res:Response) => res.json());
        }
        else return null;
    }
    
    public deleteValue(accountRecords: any[]) {
           
        console.log("Delete " + accountRecords.length + " records for Document ID: " + accountRecords[0].doc_id);
                                     
        console.log(
            "docID: " + accountRecords[0].doc_id 
            + " status_code: " + accountRecords[0].status_code
            + " form_code: " + accountRecords[0].form_code
            + " comp_number: " + accountRecords[0].comp_number
            + " comp_name: " + accountRecords[0].comp_name            
            + " valueOrder: " + accountRecords[0].value_order
            + " columnID: " + accountRecords[0].column_id
            + " amount: " + accountRecords[0].amount
            + " doubleCounted: " + accountRecords[0].double_counted
            + " noprint: " + accountRecords[0].no_print
            + " literal: " + accountRecords[0].literal
            + " orderlink: " + accountRecords[0].orderlink
            + " mapdode: " + accountRecords[0].mapcode
            
        );

        const path = AppSettings.DELETE_VALUE_ENDPOINT; 

        if (this.selectedDocID > 0) {
            console.log("URL: " + path);
            return this.http.post(path, accountRecords).map((res:Response) => res.json());
        }
        else {
            return null;
        }
        
    }

    public insertValue(accountRecords: any[]) {
           
        console.log("Insert " + accountRecords.length + " records for Document ID: " + accountRecords[0].doc_id);
                                     
        console.log(
            "docID: " + accountRecords[0].doc_id 
            + " status_code: " + accountRecords[0].status_code
            + " form_code: " + accountRecords[0].form_code
            + " comp_number: " + accountRecords[0].comp_number
            + " comp_name: " + accountRecords[0].comp_name            
            + " valueOrder: " + accountRecords[0].value_order
            + " columnID: " + accountRecords[0].column_id
            + " amount: " + accountRecords[0].amount
            + " doubleCounted: " + accountRecords[0].double_counted
            + " noprint: " + accountRecords[0].no_print
            + " literal: " + accountRecords[0].literal
            + " orderlink: " + accountRecords[0].orderlink
            + " mapdode: " + accountRecords[0].mapcode
            
        );

        const path = AppSettings.INSERT_VALUE_ENDPOINT; 

        if (this.selectedDocID > 0) {
            console.log("URL: " + path);
            return this.http.post(path, accountRecords).map((res:Response) => res.json());
        }
        else {
            return null;
        }
        
    }

    public getDocumentID(){
        return this.selectedDocID;
    }

    public getColumnID(){
        return this.selectedColumnID;
    }

    public getFormID(){
        return this.selectedFormCode;
    }

    public getCompanyName(){
        return this.selectedCompanyName;
    }

    public getCompNumber(){
        return this.selectedCompNumber;
    }

    public getOrderlink(){
        //console.log("docDetailsService.getOrderlink: " + this.selectedOrderlink)
        return this.selectedOrderlink;
    }

    public getMapcode(){
        //console.log("docDetailsService.getMapcode: " + this.selectedMapcode)
        return this.selectedMapcode;
    }

    public getReportTypeCode(){
        return this.selectedReportTypeCode;
    }

    public getChartCode(): any{        
        const endpoint = AppSettings.CHARTCODE_API_ENDPOINT + "?COMPNUMBER=" + this.selectedCompNumber;        
        if (this.selectedCompNumber > 0) {
            //console.log('dd.getChartCode.endpoint: ' + endpoint);
            return this.http.get(endpoint).map((res:Response) => res.json());
        }
        else {
            return null;
        }        
    }

    public getStatusList(): any{
        const endpoint = AppSettings.STATUS_API_ENDPOINT;        
        //console.log('endpoint: ' + endpoint);
        return this.http.get(endpoint).map((res:Response) => res.json());
    }

    public getTitle() {
        return(this.selectedTitle);
    }

    public getSelectedStatus() {
        //console.log("In docDetails.service.ts getSelectedStatus: " + this.setSelectedStatus.getValue());
        return this.selectedStatus.getValue();
    }

    public getSelectedLiteral() {
        return this.selectedLiteral;
    }

    public setDocumentDetails(docID: number, formID: string, compName: string, 
            compNumber: number, columnID: number, type: string) {
        if (docID) this.setDocID(docID);
        if (formID) this.setFormID(formID); 
        if (compName) this.setCompName(compName);
        if (compNumber) this.setCompNumber(compNumber);
        if (columnID) this.setColumnID(columnID);
        if (type) this.setReportTypeCode(type); 

        if (compNumber) this.setChartCode();  
        if (formID) this.setTitle(formID);   
        //console.log('dts.setDocumentDetails--> docID: ' + docID + "Form: " + formID + "Type: " + type);
    }

    public setDocID(docID: number) {
        this.selectedDocID = docID;        
    }

    public setFormID(formID: string) {
        this.selectedFormCode.next(formID);        
    }

    public setColumnID(columnID: number) {
        this.selectedColumnID.next(columnID);        
    }

    public setCompName(compName: string) {
        this.selectedCompanyName = compName;        
    }

    public setCompNumber(compNumber: number) {
        this.selectedCompNumber = compNumber;        
    }

    public setOrderlink(orderlink: number) {
        //console.log("docDetailsService.setOrderlink: " + orderlink)
        this.selectedOrderlink = orderlink;        
    }

    public setMapcode(mapcode: number) {
        //console.log("docDetailsService.setMapcode: " + mapcode)
        this.selectedMapcode = mapcode;        
    }

    public setReportTypeCode(type: string) {
        this.selectedReportTypeCode = type;        
    }

    public setSelectedLiteral(literal: string) {
        this.selectedLiteral = literal;        
    }

    public setChartCode() {
        let result: any[];
        let data: any[];
        this.getChartCode().subscribe(
            // the first argument is a function which runs on success
            data => { result = data},
            // the second argument is a function which runs on error
            err => console.error(err),
            // the third argument is a function which runs on completion
            () => {
                if (result[0])
                    this.selectedChartCode = result[0].CHARTCODE;
                //console.log("dds.setChartCode: " + this.selectedChartCode);       
            }
        );
        
}

    public setTitle(formID: string) {
        //console.log("setTitle TypeCode:" + this.selectedReportTypeCode);
        switch (formID) {
            case "01":
                this.setFormDescription('Balance Sheet');
            break;
            case "02":
                this.setFormDescription('Income Statement');
                break;
            case "05":
            this.setFormDescription('Cash Flow');
                break;
            default:
                this.setFormDescription('Balance Sheet');
            }
        this.selectedTitle.next(this.selectedDocID + ' : [' + 
        this.selectedCompNumber + '] ' + 
        this.selectedCompanyName + ' - ' + 
        this.selectedFormDescription + ' (' +      
        this.selectedReportTypeCode + ')'); 
    }

    public setSelectedStatus(newStatus: any) {
        this.selectedStatus.next(newStatus);
    }

}