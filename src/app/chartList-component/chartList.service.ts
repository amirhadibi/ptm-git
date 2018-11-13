import {Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; // this is necessary
import { AppSettings } from '../appsettings';

@Injectable()
export class ChartListService {
    public chartData: BehaviorSubject<any> = new BehaviorSubject<any>([]);
    public selectedChartCode: string;
    public selectedMapCode: string;
    public selectedLiteral: string;
    public selectedOrderLink: number;
    public selectedAmount: number;
    
    constructor(public http:Http, ) {
    }

    
    public getChartAccountDlgData(chartCode, formCode: string) {
        //console.log('getChartAccountDlgData: ' + chartCode + formCode);
        const endpoint = AppSettings.CHARTACCOUNT_DLG_API_ENDPOINT + 
                "?CHARTCODE=" + chartCode + 
                "&FORMCODE="+formCode;     
        //console.log('Chart endpoint: ' + endpoint);
        return this.http.get(endpoint).map((res:Response) => res.json());
    }

    public getChartAccountData(cn: number, chartCode, type, formCode: string) {
        //console.log('Get chart list for: ' + cn + chartCode + type + formCode);
        const endpoint = AppSettings.CHART_ACCOUNT_API_ENDPOINT + 
                "?COMPNUMBER=" + cn + 
                "&CHARTCODE=" + chartCode + 
                //"&ACCOUNTTYPECODE="+ type + //mySQL
                "&TYPECODE="+ type +
                "&FORMCODE="+formCode;  
    
        //console.log('Chart endpoint: ' + endpoint);
        return this.http.get(endpoint).map((res:Response) => res.json());
    }

    public getCompanyAccountData(cn: number, chartCode, type, formCode: string) {
        //console.log('Get chart list for: ' + cn + chartCode + type + formCode);
        const endpoint = AppSettings.COMPANY_ACCOUNT_API_ENDPOINT + 
                "?COMPNUMBER=" + cn + 
                "&CHARTCODE=" + chartCode + 
                //"&ACCOUNTTYPECODE="+ type + //mySQL
                "&TYPECODE="+ type +
                "&FORMCODE="+formCode;  

        //console.log('Chart endpoint: ' + endpoint);
        return this.http.get(endpoint).map((res:Response) => res.json());
    }

    public getAnnualChartAccountData(cn: number, chartCode: string, orderLink: number) {
        //console.log('Get chart list for: ' + cn + chartCode + type + formCode);
        const endpoint = AppSettings.ANNUAL_CHARTACCOUNT_API_ENDPOINT + 
                "?COMPNUMBER=" + cn + 
                "&CHARTCODE=" + chartCode + 
                "&ORDERLINK="+ orderLink;  
    
        //console.log('Chart endpoint: ' + endpoint);
        return this.http.get(endpoint).map((res:Response) => res.json());
    }

    public getQuarterlyChartAccountData(cn: number, chartCode: string, orderLink: number) {
        //console.log('Get chart list for: ' + cn + chartCode + type + formCode);
        const endpoint = AppSettings.QUARTERLY_CHARTACCOUNT_API_ENDPOINT + 
                "?COMPNUMBER=" + cn + 
                "&CHARTCODE=" + chartCode + 
                "&ORDERLINK="+ orderLink;  
    
        //console.log('Chart endpoint: ' + endpoint);
        return this.http.get(endpoint).map((res:Response) => res.json());
    }

    public getChartIDs(cn: number, chartCode, type, formCode: string) {
        //console.log('cls.getChartIDs for: ' + cn + ", " + chartCode + ", " + type + ", " + formCode);
        if ((cn>0) && (chartCode) && (type) && (formCode)) {
            
            const endpoint = AppSettings.CHARTID_API_ENDPOINT + 
                "?COMPNUMBER=" + cn + 
                "&CHARTCODE=" + chartCode + 
                //"&ACCOUNTTYPECODE="+ type + //mySQL
                "&TYPECODE="+ type + 
                "&FORMCODE="+formCode;  
            //console.log('Chart endpoint: ' + endpoint);
            return this.http.get(endpoint).map((res:Response) => res.json());
            
        }
        else {
            console.log("WARNING: Parameter list of cls.getChartIDs is not complete !!!");
        } 
    }

    public getChartCodes() {
        //console.log('Get chart ID list for: ' + cn + chartCode + type + formCode);
        const endpoint = AppSettings.CHART_CODES_API_ENDPOINT;  
    
        //console.log('Chart endpoint: ' + endpoint);
        return this.http.get(endpoint).map((res:Response) => res.json());
    }

    public getChartCode(){
        return this.selectedChartCode;
    }

    public getMapCode(){
        return this.selectedMapCode;
    }

    public getLiteral(){
        return this.selectedLiteral;
    }

    public getAmountl(){
        return this.selectedAmount;
    }

    public setChartCode(code: string) {
        this.selectedChartCode = code;        
    }

    public setMapCode(code: string) {
        //console.log('setMapCode: ' + code);
        this.selectedMapCode = code;        
    }

    public setLiteral(text: string) {
        //console.log('setMapCode: ' + text);
        this.selectedLiteral = text;        
    }

    public setAmount(amount: number) {
        //console.log('setMapCode: ' + text);
        this.selectedAmount = amount;        
    }

    public getOrderLink(){
        return this.selectedOrderLink;
    }

    public setOrderLink(orderLink: number) {
        this.selectedOrderLink = orderLink;        
    }

}