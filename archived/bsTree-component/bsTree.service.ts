import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; // this is necessary
import { AppSettings } from '../appsettings';

@Injectable()
export class BalanceSheetChartService {

    constructor(public http:Http) {}

    getBalanceSheetChart(cn: number, chartCode: string, type: string) {
        console.log('getBalanceSheetChart: ' + cn + chartCode + type);
        const endpoint = AppSettings.BS_CHART_API_ENDPOINT + 
                "?COMPNUMBER=" + cn + 
                "&CHARTCODE=" + chartCode + 
                "&ACCOUNTTYPECODE="+ type +
                "&FORMCODE=01";        
        return this.http.get(endpoint).map((res:Response) => res.json());
    }

}