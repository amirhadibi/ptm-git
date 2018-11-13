import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; // this is necessary
import { AppSettings } from '../appsettings';

@Injectable()
export class documentListService {

    constructor(public http:Http) {}

    getDocumentList() {
        const endpoint = AppSettings.DOC_LIST_API_ENDPOINT;
        return this.http.get(endpoint).map((res:Response) => res.json());
    }

}