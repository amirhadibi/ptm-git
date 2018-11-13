import {Component} from "@angular/core";

@Component({
    selector: 'app-red-component',
    templateUrl: './red-component.html',
    styleUrls: ['./red-component.css'],
})
export class RedComponent {
    public color='black';
    public account: string;
  
    private params: any;

    constructor() {}
    
    agInit(params: any): void {
        this.params = params;
        //this.account = params.value;
    }

    public getColor() {
        this.account = this.params.value;
        console.log('ACCOUNT: ') + this.account
        switch(this.account) { 
            case "'ASSETS'": {this.color = 'green'}
            case "'Non-current asset'": {this.color = 'red'}
            default: {this.color = 'orange'}
        }
        return this.color;
    }
}
