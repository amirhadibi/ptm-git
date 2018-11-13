//import './polyfills';
import { AppComponent } from "./app.component";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Router, Route, RouterModule, Routes } from '@angular/router';

//angular-tree:
/*
import { AppComponent } from './app.component';
import { BasicTreeComponent } from './basicTree-component/basicTree.component';
import { FullTreeComponent } from './fullTree-component/fullTree.component';
import { TemplatesComponent } from './templates/templates.component';
import { FilterComponent } from './filter/filter.component';
import { BalanceSheetTreeComponent } from './bsTree-component/bsTree.component';
import { TreeModel } from 'angular-tree-component';
import { TreeModule } from 'angular-tree-component';
*/

//ng2-tree:
//import { TreeModule } from 'ng2-tree';
//import { ngTreeComponent } from './ngTree-component/ngTree.component';


//ag-grid:
import "ag-grid-enterprise"; // only necessary if you're using ag-Grid-Enterprise features
import {AgGridModule} from "ag-grid-angular";
import { RedComponent } from "./red-component/red-component";

//integralUI:
import { IntegralUIModule } from 'integralui/integralui.module';

//cdk/material components:
import 'hammerjs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { MATERIAL_SANITY_CHECKS } from '@angular/material';
import { MaterialModule } from './material.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

//test components:
//import { ModalModule } from '../modal/index';
//import { DialogDataExample, DialogDataExampleDialog } from './dialog-component/dialog.component';
//import { ModalButton } from './modal-content-component/modal-button';
//import { TreeViewEditingSample } from "./treeView-component/treeView-editing"
//import { ContextMenuComponent } from "./contextMenu-component/contextMenu.component"
//import { ChartListComponent } from './chartList-component/chartList.component';
//import { TreeViewTestComponent } from "./treeView-component/treeViewTest.component"
//import { TreeGridFilterComponent } from "./treeGrid-component/treeGridFilter.component"
//import { TreeGridTestComponent } from "./treeGrid-component/treeGridTest.component"

//splitter components:
import { SplitContainerComponent } from './splitter-component/splitContainer.component';
import { SplitBehaviourDirective } from './splitter-component/splitBehaviour.directive';
import { SplitterComponent } from './splitter-component/splitter.component';

//ptm components:
import { NavbarComponent } from './navbar-component/navbar.component';
import { PTMComponent } from './ptm-component/ptm.component';
import { HomeComponent } from './home-component/home.component';
import { PanelDocumentListComponent } from './documentList-component/panel-documentList.component';
import { DocumentListComponent } from './documentList-component/documentList.component';
import { PanelDocumentDetailsComponent } from './documentDetails-component/panel-documentDetails.component';
import { DocumentDetailsComponent } from './documentDetails-component/documentDetails.component';
import { ToolbarComponent } from './toolBar-component/toolBar.component';
import { TopPanelComponent } from './topPanel-component/topPanel.component'
import { ListComponent } from "./list-component/list.component"
import { MappedListComponent } from "./list-component/mappedList.component"
import { SaveButtonComponent } from "./buttons-component/saveButton.component"
import { TreeViewComponent } from "./treeView-component/treeView.component"
import { TreeViewMatchedComponent } from "./treeView-component/treeViewMatch.component"


//Dialogs:
import { AlertDialog } from './alert-component/alert.component';
import { PropertiesDialog } from './properties-component/properties.component';
import { TreeViewAccountDialog } from './treeView-component/treeViewAccountDlg.component';
import { TreeViewMatchedDialog } from './treeView-component/treeViewMatchedDlg.component';
import { SaveDialog } from './dialogs/saveDlg';
import { ConfirmDialog } from './dialogs/confirmationDlg';


//Services:
import { SpinnerService } from './shared/spinner.service';
import { documentListService } from "./documentList-component/document-list.service";
import { documentDetailsService } from "./documentDetails-component/document-details.service";
import { ChartListService } from "./chartList-component/chartList.service";
import { PropertiesService } from "./properties-component/properties.service";
import { AlertService } from './alert-component/alert.service';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

export const ROUTES: Routes = [
  {path: '', component: HomeComponent },

  {path: 'home', component: HomeComponent},

  {path: 'documents', component: PanelDocumentListComponent},

  { 
    path: 'details', 
    component: PanelDocumentDetailsComponent,
    //canActivate: ["AuthenticationGuard"],
    //runGuardsAndResolvers: "always",
  }
  //{path: 'treeGrid', component: TreeGridTestComponent},
  //{path: 'treeView', component: TreeViewTestComponent},
  //{path: 'chart', component: TreeViewEditingSample},
  //{path: 'chart', component: ChartListComponent},
  //{path: 'modal', component: ModalButton},
  //{path: 'dialog', component: DialogDataExample},
  //{path: 'contextMenu', component: ContextMenuComponent},

];

@NgModule({
  // For any component loaded into a dialog, you must include your component class in the list of entryComponents 
  //in your NgModule definition so that the Angular compiler knows to create the ComponentFactory for it.
  entryComponents: [ AlertDialog, PropertiesDialog, TreeViewAccountDialog, TreeViewMatchedDialog, SaveDialog, ConfirmDialog, SplitterComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [
    AppComponent,
    RedComponent,
    NavbarComponent,
    PTMComponent,
    HomeComponent,
    PanelDocumentListComponent,
    DocumentListComponent,
    PanelDocumentDetailsComponent,
    DocumentDetailsComponent,
    ToolbarComponent,
    ListComponent,
    MappedListComponent,
    SaveButtonComponent,
    TreeViewComponent,
    TopPanelComponent,
    SplitBehaviourDirective,
    SplitterComponent,
    SplitContainerComponent,
    AlertDialog,
    PropertiesDialog,
    TreeViewAccountDialog,
    TreeViewMatchedDialog,
    SaveDialog,
    ConfirmDialog,
    TreeViewMatchedComponent,
    
    //TreeViewTestComponent,
    //Test Components:
    //ChartListComponent,
    //TreeViewEditingSample,
    //ContextMenuComponent,
    //TreeGridFilterComponent,
    //TreeGridTestComponent,
    //ModalModule,
    
  ],

  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES), 
    //RouterModule.forRoot(ROUTES, {onSameUrlNavigation: "reload"}),
    AgGridModule.withComponents(
      [RedComponent]),
    BrowserAnimationsModule,
    MaterialModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    IntegralUIModule,
  ],

  providers: [
    SpinnerService,
    documentListService, 
    documentDetailsService,
    ChartListService,
    PropertiesService,
    AlertService,
  ],

  bootstrap: [AppComponent],
})
export class AppModule { }
