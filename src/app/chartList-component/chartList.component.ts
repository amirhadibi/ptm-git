import { Component, OnInit } from '@angular/core';

import {ChartListService} from './chartList.service';
import { documentDetailsService } from "../documentDetails-component/document-details.service";
//import { TreeController } from 'ng2-tree/src/tree-controller';
import { AppSettings } from '../appsettings';

declare const alertify: any;

@Component({
  selector: 'chart-list',
  templateUrl: './chartList.component.html',
})

export class ChartListComponent implements OnInit {

  public chartData: any[]; // Result set of the chart query
  public title: string;

  constructor(private _chartListService: ChartListService, 
    private _docDetailsService: documentDetailsService) {
  }

  public ngOnInit(): void {
    //console.log("i'm in chart ngOnInit !!!");
    this.getChartList(); // loads chart data in chartData
    this._docDetailsService.selectedTitle.subscribe((val: string) => {
      this.title = val.substr(val.indexOf('-')+1, val.length)
    });
  }

  // to load chart list:
  public getChartList() { 
      //console.log('I am in getChartList()!');
      this._chartListService.getChartAccountData(
          this._docDetailsService.getCompNumber(), 
          this._docDetailsService.selectedChartCode,
          //AppSettings.CHART_CODE, 
          this._docDetailsService.getReportTypeCode(), 
          this._docDetailsService.getFormID().getValue()
      ).subscribe(
        // the first argument is a function which runs on success
        data => { 
            this.chartData = data;
            //console.log("chart data length: " + this.chartData.length);
        },
        // the second argument is a function which runs on error
        err => console.error(err),
        // the third argument is a function which runs on completion
        //() => //console.log('DONE WITH getChartList() ... ' + this.chartData[0].LITERAL)
      );
  }

}

/*
  private determineLevel(rollupCode: string): number {
    let LEVEL_LENGTH: number=3;
    let vLevel: number;
    let vMaxLevel:number;

    vMaxLevel=(rollupCode.length / LEVEL_LENGTH)-1;
    for (vLevel=0; vLevel<vMaxLevel; vLevel++) {
      if (rollupCode.substr((vLevel*LEVEL_LENGTH+1), LEVEL_LENGTH) =='000') {
        break;
      }
    }
    return vLevel-1;  
  }

*/