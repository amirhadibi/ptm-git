import {Component} from "@angular/core";
import { MatDialog, MatDialogConfig } from '@angular/material';
//import { AppSettings } from '../appsettings';
import { PropertiesDialog } from '../properties-component/properties.component'
import { PropertiesService } from '../properties-component/properties.service';
import {documentDetailsService} from '../documentDetails-component/document-details.service';
//import { FormControl } from '@angular/forms';

@Component({
  selector: 'topPanel',
  templateUrl: './topPanel.component.html',
  styleUrls: ['../css/app.component.scss'],
})

export class TopPanelComponent {
  public documentHeaderList;
  public selectedPeriod: string = "";
  public selectedExtractedText: string = "";
  public selectedType: string = "";
  public selectedAuditor: string = "";
  public selectedMultiplier: string = "";
  public selectedCurrency: string = "";
  public selectedReportDate: string = "";
  public selectedStartDate: string = "";
  public selectedSourceDate: string = "";
  public selectedConsolidated: string = "0";
  public selectedFYEChange: string = "0";
  public selectedPeriodFY: string = "";
  public selectedSourceTypeID: string = "";
  public selectedPrincipleTypeID: string = "";
  public selectedIndex = 0;
  public gColumns: any[];

  constructor(public dialog: MatDialog, private _propertiesService: PropertiesService, 
        private _docDetailsService: documentDetailsService,) {

        this.returnColumnIDs().subscribe((val: any) => {    
            this.gColumns = val;
        });
  }

  public onChange(newValue: string) {
    let vString = newValue.split("::", 14);
    this.selectedPeriod = newValue;
    this.selectedIndex= parseInt(vString[13]);
    this.getDocumentHeaderList(this.selectedIndex);
/*
    //console.log("newValue **** " + newValue);
    //console.log("vString **** " + vString);

    this.selectedExtractedText = vString[0];
    this.selectedType = vString[1];
    this.selectedAuditor = vString[2];
    this.selectedMultiplier = vString[3];
    this.selectedCurrency = vString[4];
    this.selectedReportDate = vString[5];
    this.selectedConsolidated = (vString[6] !== null) ? vString[6]: "0";
    this.selectedFYEChange = (vString[7] !== null) ? vString[7]: "0";
    this.selectedPeriodFY = vString[8];
    this.selectedSourceTypeID = vString[9];
    this.selectedPrincipleTypeID = vString[10];
    this.selectedStartDate = vString[11];
    this.selectedSourceDate = vString[12];


    //console.log('topPanel.onChange()- Type: ' + this.selectedType);
    //console.log('topPanel.onChange()- Auditor: ' + this.selectedAuditor);
    //console.log('topPanel.onChange()- Multiplier: ' + this.selectedMultiplier);
    //console.log('topPanel.onChange()- Currency: ' + this.selectedCurrency);
    //console.log('topPanel.onChange()- ReportDate: ' + this.selectedReportDate);
    //console.log('topPanel.onChange()- Consolidated: ' + this.selectedConsolidated);
    //console.log('topPanel.onChange()- FYEChange: ' + this.selectedFYEChange);
    //console.log('topPanel.onChange()- selectedPeriodFY: ' + this.selectedPeriodFY);
    //console.log('topPanel.onChange()- selectedSourceTypeID: ' + this.selectedSourceTypeID);
    //console.log('topPanel.onChange()- selectedPrincipleTypeID: ' + this.selectedPrincipleTypeID);

    //if (this.selectedReportDate !== '0000-00-00') { //mySQL
    if (this.selectedReportDate !== 'null') {
      let re = /-/gi; 
      let newDateString = this.selectedReportDate.replace(re, '/');
      //console.log("New Date: " + newDateString);
      if (newDateString !== 'null') {
        this.selectedReportDate = (new Date(newDateString)).toISOString();
      } else {
        this.selectedReportDate = ((new Date()).toISOString());
      }
    } else {
      this.selectedReportDate = ((new Date()).toISOString());
    }
    this._propertiesService.setSelectedReportDate(this.selectedReportDate);
    console.log("onchange.ReportDate: " + this.selectedReportDate);

    if (this.selectedSourceDate !== 'null') {
      let re = /-/gi; 
      let newDateString = this.selectedSourceDate.replace(re, '/');
      //console.log("New Date: " + newDateString);
      if (newDateString !== 'null') {
        this.selectedSourceDate = (new Date(newDateString)).toISOString();
      } else {
        this.selectedSourceDate = ((new Date()).toISOString());
      }
    } else {
      this.selectedSourceDate = ((new Date()).toISOString());
    }
    this._propertiesService.setSelectedSourceDate(this.selectedSourceDate);
    console.log("onchange.selectedSourceDate: " + this.selectedSourceDate);

    if (this.selectedStartDate !== 'null') {
      let re = /-/gi; 
      let newDateString = this.selectedStartDate.replace(re, '/');
      //console.log("New Date: " + newDateString);
      if (newDateString !== 'null') {
        this.selectedStartDate = (new Date(newDateString)).toISOString();
      } else {
        this.selectedStartDate = ((new Date()).toISOString());
      }
    } else {
      this.selectedStartDate = ((new Date()).toISOString());
    }
    this._propertiesService.setSelectedStartDate(this.selectedStartDate);
    console.log("onchange.selectedStartDate: " + this.selectedStartDate);

    this._propertiesService.setSelectedExtractedText(this.selectedExtractedText);
    this._propertiesService.setSelectedType(this.selectedType);
    this._propertiesService.setSelectedAuditor(this.selectedAuditor);
    this._propertiesService.setSelectedMultiplier(this.selectedMultiplier);
    this._propertiesService.setSelectedCurrency(this.selectedCurrency);
    this._propertiesService.setSelectedReportDate(this.selectedReportDate);
    this._propertiesService.setSelectedStartDate(this.selectedStartDate);
    this._propertiesService.setSelectedSourceDate(this.selectedSourceDate);
    this._propertiesService.setSelectedConsolidated(this.selectedConsolidated);
    this._propertiesService.setSelectedFYEChange(this.selectedFYEChange);
    this._propertiesService.setSelectedPeriodFY(this.selectedPeriodFY);
    this._propertiesService.setSelectedSourceTypeID(this.selectedSourceTypeID);
    this._propertiesService.setSelectedPrincipleTypeID(this.selectedPrincipleTypeID);
*/

  }

  // Opens Properties dialog. HTML and TS files are in properties-component:
  openDialog() {
    const settings: MatDialogConfig = {
      disableClose: true    
    }
    const dialogRef = this.dialog.open(PropertiesDialog, settings)
    dialogRef.afterClosed().subscribe(result => {
      console.log('*** *** *** '+ result);
      if (result === 'ok') {
        this.returnColumnIDs().subscribe((val: any) => {    
          console.log("Columns Length: " + val.length + " *** " + val[this.selectedIndex].COLUMNID); 
          let vCollectedHeader = this.collectDocumentHeader(val[this.selectedIndex].COLUMNID);
          this.saveDocumentHeader(vCollectedHeader);
        });
      };
    });
  }

  private collectDocumentHeader(aColID: number) {
    let documentHeader = [];

    //let vSelectedReportDate = this._propertiesService.getSelectedReportDate().substr(0, 10);
    //let vSelectedStartDate = this._propertiesService.getSelectedStartDate();
    //let vSelectedSourceDate = this._propertiesService.getSelectedSourceDate();

    //console.log("collect.ReportDate: " + vSelectedReportDate);
    //console.log("collect.StartDate: " + vSelectedStartDate);
    //console.log("collect.SourceDate: " + vSelectedSourceDate);

    //let re = /-/gi; 
    //vSelectedStartDate.substr(0,10).replace(re, '/');
    //vSelectedSourceDate.substr(0,10).replace(re, '/');
    //vSelectedReportDate.substr(0,10).replace(re, '/');

    //console.log("StartDate: " + vSelectedStartDate);
    //console.log("SourceDate: " + vSelectedSourceDate);
    //console.log("ReportDate: " + vSelectedReportDate);

    /*
    if (vSelectedStartDate) {
      vSelectedStartDate.substr(0,10).replace(re, '/')
    } else {
      vSelectedStartDate = null;
    }
    if (vSelectedSourceDate) {
      vSelectedSourceDate.substr(0,10).replace(re, '/')
    } else {
      vSelectedSourceDate = null;
    }
    */

    documentHeader.push({
      doc_id: this._docDetailsService.selectedDocID,
      column_id: aColID,

      auditor: this._propertiesService.getSelectedAuditor(),
      currency: this._propertiesService.getSelectedCurrency(),
      multiplier: this._propertiesService.getSelectedMultiplier(),
      report_type: this._propertiesService.getSelectedType(),
      principle_type: this._propertiesService.getSelectedPrincipleTypeID(),
      source_type: this._propertiesService.getSelectedSourceTypeID(),
      consolidated: this._propertiesService.getSelectedConsolidated(),
      fye_change: this._propertiesService.getSelectedFYEChange(),
      fiscal_year: this._propertiesService.getSelectedPeriodFY(),

      report_date: this._propertiesService.getSelectedReportDate().substr(0, 10),
      start_date: this.selectedStartDate,
      source_date: this.selectedSourceDate,
    });   

    console.log(
      'Collect this data =>' 
      + " DocID: " + documentHeader[0].doc_id
      + " Column ID: " + documentHeader[0].column_id

      + " Auditor: " + documentHeader[0].auditor
      + "  Currency: " + documentHeader[0].currency
      + "  Multiplier: " + documentHeader[0].multiplier
      + "  ReportType: " + documentHeader[0].report_type
      + "  PrincipleTypeID: " + documentHeader[0].principle_type
      + "  SourceTypeID: " + documentHeader[0].source_type
      + "  Consolidated: " + documentHeader[0].consolidated 
      + "  FYEChange: " + documentHeader[0].fye_change 
      + "  PeriodFY: " + documentHeader[0].fiscal_year
      + "  ReportDate: " + documentHeader[0].report_date
      + "  SourceDate: " + documentHeader[0].source_date
      + "  StartDate: " + documentHeader[0].start_date
      + "  Index: " + this.selectedIndex
    );

    return documentHeader;
  }

  private saveDocumentHeader(aCollectedheader: any) {
    let vMessage: string;

    console.log(
      'Save this data =>' 
      + " DocID: " + aCollectedheader[0].doc_id
      + " Column ID: " + aCollectedheader[0].column_id

      + " Auditor: " + aCollectedheader[0].auditor
      + "  Currency: " + aCollectedheader[0].currency
      + "  Multiplier: " + aCollectedheader[0].multiplier
      + "  ReportType: " + aCollectedheader[0].report_type
      + "  PrincipleTypeID: " + aCollectedheader[0].principle_type
      + "  SourceTypeID: " + aCollectedheader[0].source_type
      + "  Consolidated: " + aCollectedheader[0].consolidated 
      + "  FYEChange: " + aCollectedheader[0].fye_change 
      + "  PeriodFY: " + aCollectedheader[0].fiscal_year

      + "  ReportDate: " + aCollectedheader[0].report_date
      + "  SourceDate: " + aCollectedheader[0].source_date
      + "  StartDate: " + aCollectedheader[0].start_date

      + "  Index: " + this.selectedIndex
    );
  
    this._propertiesService.saveDocumentHeader(aCollectedheader).subscribe(
      savedData => {
      //console.log('savedData: ' + savedData.message);
      if (savedData.message)
          vMessage = savedData.message;
      },
      // the second argument is a function which runs on error
      err => {
          console.log('Error in saveDocumentHeader! ' + err);
      },
      // the third argument is a function which runs on completion
      () => {
          console.log('DONE WITH saveDocumentHeader() for ColumnID: ' + aCollectedheader[0].column_id);
          if (!vMessage)
              vMessage = "Something went wrong and http.post request did not return any data!";
          this.getDocumentHeaderList(this.selectedIndex);
          console.log("Saved message: " + vMessage);
      }
    );

  }

  private returnColumnIDs() {
    //console.log('I am in docDetails returnColumnIDs()!');       
    return this._docDetailsService.getColumnIDs();    
  }    

  public getDocumentHeaderList(aIndex) { 
    this.selectedIndex = aIndex; // It is necessary to reset index when change form ID.
    this._propertiesService.getDocumentHeaderList().subscribe(
        // the first argument is a function which runs on success
      data => { this.documentHeaderList = data;
      },
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => {
          if (this.documentHeaderList.length > 0) {
            this.selectedPeriod = this.documentHeaderList[aIndex].CAPTION + " "
              + this.documentHeaderList[aIndex].REPORTDATE_TEXT + "::"
              + this.documentHeaderList[aIndex].REPORTTYPE + "::"
              + this.documentHeaderList[aIndex].AUDITOR + "::"
              + this.documentHeaderList[aIndex].MULTIPLIER + "::"
              + this.documentHeaderList[aIndex].CURRENCYCODE + "::"
              + this.documentHeaderList[aIndex].REPORTDATE + "::"

              + this.documentHeaderList[aIndex].CONSOLIDATED + "::"
              + this.documentHeaderList[aIndex].FYECHANGE + "::"

              + this.documentHeaderList[aIndex].PERIODFISCALYEAR + "::"
              + this.documentHeaderList[aIndex].SOURCETYPEID + "::"
              + this.documentHeaderList[aIndex].PRINCIPLETYPEID + "::"
              + this.documentHeaderList[aIndex].PERIODSTARTDATE + "::"
              + this.documentHeaderList[aIndex].SOURCEDATE  + "::"
              + aIndex;
              
            this.selectedExtractedText = this.documentHeaderList[aIndex].CAPTION + " "
                + this.documentHeaderList[aIndex].REPORTDATE_TEXT;
            this._propertiesService.setSelectedExtractedText(this.selectedExtractedText);

            this.selectedType = this.documentHeaderList[aIndex].REPORTTYPE;
            //console.log("selected-type=  " + this.selectedType);
            this._propertiesService.setSelectedType(this.selectedType);

            this.selectedAuditor = this.documentHeaderList[aIndex].AUDITOR;
            //console.log("selected-auditor=  " + this.selectedAuditor);
            this._propertiesService.setSelectedAuditor(this.selectedAuditor);
            
            this.selectedMultiplier = this.documentHeaderList[aIndex].MULTIPLIER;
            //console.log("selected-multiplier=  " + this.selectedMultiplier);
            this._propertiesService.setSelectedMultiplier(this.selectedMultiplier);

            this.selectedCurrency = this.documentHeaderList[aIndex].CURRENCYCODE;
            //console.log("selected-curency=  " + this.selectedCurrency);
            this._propertiesService.setSelectedCurrency(this.selectedCurrency);
            
            this.selectedReportDate = this.documentHeaderList[aIndex].REPORTDATE;                        
            //console.log("selected-reportdate=  " + this.selectedReportDate);
            if (this.selectedReportDate) {
              let re = /-/gi; 
              let newDateString = this.selectedReportDate.replace(re, '/');
              this.selectedReportDate = (new Date(newDateString)).toISOString();
              this._propertiesService.setSelectedReportDate(this.selectedReportDate);
              console.log("selectedReportDate: " + this.selectedReportDate);
            } else {
              this._propertiesService.setSelectedReportDate((new Date()).toISOString());
            }

            this.selectedSourceDate = this.documentHeaderList[aIndex].SOURCEDATE;                        
            if (this.selectedSourceDate) {
              let re = /-/gi; 
              let newDateString = this.selectedSourceDate.replace(re, '/');
              this.selectedSourceDate = (new Date(newDateString)).toISOString();
              
              this._propertiesService.setSelectedSourceDate(this.selectedSourceDate);
              console.log("selectedSourceDate: " + this.selectedSourceDate);
            } else {
              //this._propertiesService.setSelectedSourceDate((new Date()).toISOString());
            }

            this.selectedStartDate = this.documentHeaderList[aIndex].PERIODSTARTDATE;                        
            if (this.selectedStartDate) {
              let re = /-/gi; 
              let newDateString = this.selectedStartDate.replace(re, '/');
              this.selectedStartDate = (new Date(newDateString)).toISOString();
              this._propertiesService.setSelectedStartDate(this.selectedStartDate);
              console.log("selectedStartDate: " + this.selectedStartDate);
            } else {
              //this._propertiesService.setSelectedStartDate((new Date()).toISOString());
            }

            this.selectedConsolidated = (this.documentHeaderList[aIndex].CONSOLIDATED) !== null 
                ? String(this.documentHeaderList[aIndex].CONSOLIDATED) : "0";
            this._propertiesService.setSelectedConsolidated(this.selectedConsolidated);
            
            this.selectedFYEChange = (this.documentHeaderList[aIndex].FYECHANGE) !== null 
                ? String(this.documentHeaderList[aIndex].FYECHANGE) : "0";
            this._propertiesService.setSelectedFYEChange(this.selectedFYEChange);
            
            this.selectedPeriodFY = this.documentHeaderList[aIndex].PERIODFISCALYEAR;
            this._propertiesService.setSelectedPeriodFY(this.selectedPeriodFY);
            
            this.selectedSourceTypeID = this.documentHeaderList[aIndex].SOURCETYPEID;
            this._propertiesService.setSelectedSourceTypeID(this.selectedSourceTypeID);
            
            this.selectedPrincipleTypeID = this.documentHeaderList[aIndex].PRINCIPLETYPEID;
            this._propertiesService.setSelectedPrincipleTypeID(this.selectedPrincipleTypeID);
            
          } else {
            this._propertiesService.setSelectedExtractedText("");
          }
          //console.log('done with topPanel.getDocumentHeaderList() ... selectedPeriod is: ' + this.selectedPeriod)
        }
    );
  }


}
