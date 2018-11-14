webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/alert-component/alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div md-dialog-content  [style.fontSize.px]=\"15\">\n  <mat-label> {{alertMessage}} </mat-label>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/alert-component/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alert_service__ = __webpack_require__("../../../../../src/app/alert-component/alert.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertDialog = /** @class */ (function () {
    function AlertDialog(_alertService, dialog) {
        this._alertService = _alertService;
        this.dialog = dialog;
        //console.log("I'm in alarm.constructor !!!")
        this.alertMessage = this._alertService.getSelectedMessageText();
    }
    AlertDialog_1 = AlertDialog;
    AlertDialog.prototype.openDialog = function () {
        var settings = {
            //width: '25vw',
            //height: '13vh',
            role: 'alertdialog'
        };
        var dialogRef = this.dialog.open(AlertDialog_1, settings);
        /*
            let dialogRef = this.dialog.open(AlertDialog, {
              width: '350px',
              height: '100px',
              data: {},
            });
        */
    };
    AlertDialog.prototype.showAlert = function (aMessage) {
        //console.log("I'm in alert.componen.showAlert and here is the alert messasge: "+aMessage);
        this._alertService.setSelectedMessageText(aMessage);
        this.openDialog();
    };
    AlertDialog = AlertDialog_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'alert',
            template: __webpack_require__("../../../../../src/app/alert-component/alert.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__alert_service__["a" /* AlertService */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialog */]])
    ], AlertDialog);
    return AlertDialog;
    var AlertDialog_1;
}());



/***/ }),

/***/ "../../../../../src/app/alert-component/alert.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

 // this is necessary

var AlertService = /** @class */ (function () {
    function AlertService() {
        this.selectedMessageText = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]("");
    }
    AlertService.prototype.setSelectedMessageText = function (newText) {
        //console.log("I'm in alert.service.ts setSelectedExtractedText: " + newText);
        this.selectedMessageText.next(newText);
    };
    AlertService.prototype.getSelectedMessageText = function () {
        //console.log("I'm in alert.service.ts getSelectedMessageText: " + this.selectedMessageText.getValue());
        return this.selectedMessageText.getValue();
    };
    AlertService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet>\n  <span *ngIf=\"showLoader\" class=\"loading\"></span>\n</router-outlet>\n\n<ptm-frontend></ptm-frontend>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_spinner_service__ = __webpack_require__("../../../../../src/app/shared/spinner.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(spinnerService) {
        this.spinnerService = spinnerService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Inject loader service inside app.component.ts to show or hide loader
        this.spinnerService.status.subscribe(function (val) {
            _this.showLoader = val;
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/css/app.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_spinner_service__["a" /* SpinnerService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ROUTES */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ag_grid_enterprise__ = __webpack_require__("../../../../ag-grid-enterprise/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ag_grid_enterprise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ag_grid_enterprise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ag_grid_angular__ = __webpack_require__("../../../../ag-grid-angular/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ag_grid_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ag_grid_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__red_component_red_component__ = __webpack_require__("../../../../../src/app/red-component/red-component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_integralui_integralui_module__ = __webpack_require__("../../../../integralui/integralui.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_integralui_integralui_module___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_integralui_integralui_module__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__material_module__ = __webpack_require__("../../../../../src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__splitter_component_splitContainer_component__ = __webpack_require__("../../../../../src/app/splitter-component/splitContainer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__splitter_component_splitBehaviour_directive__ = __webpack_require__("../../../../../src/app/splitter-component/splitBehaviour.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__splitter_component_splitter_component__ = __webpack_require__("../../../../../src/app/splitter-component/splitter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__navbar_component_navbar_component__ = __webpack_require__("../../../../../src/app/navbar-component/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ptm_component_ptm_component__ = __webpack_require__("../../../../../src/app/ptm-component/ptm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__home_component_home_component__ = __webpack_require__("../../../../../src/app/home-component/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__documentList_component_panel_documentList_component__ = __webpack_require__("../../../../../src/app/documentList-component/panel-documentList.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__documentList_component_documentList_component__ = __webpack_require__("../../../../../src/app/documentList-component/documentList.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__documentDetails_component_panel_documentDetails_component__ = __webpack_require__("../../../../../src/app/documentDetails-component/panel-documentDetails.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__documentDetails_component_documentDetails_component__ = __webpack_require__("../../../../../src/app/documentDetails-component/documentDetails.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__toolBar_component_toolBar_component__ = __webpack_require__("../../../../../src/app/toolBar-component/toolBar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__topPanel_component_topPanel_component__ = __webpack_require__("../../../../../src/app/topPanel-component/topPanel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__list_component_list_component__ = __webpack_require__("../../../../../src/app/list-component/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__list_component_mappedList_component__ = __webpack_require__("../../../../../src/app/list-component/mappedList.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__buttons_component_saveButton_component__ = __webpack_require__("../../../../../src/app/buttons-component/saveButton.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__treeView_component_treeView_component__ = __webpack_require__("../../../../../src/app/treeView-component/treeView.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__treeView_component_treeViewMatch_component__ = __webpack_require__("../../../../../src/app/treeView-component/treeViewMatch.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__alert_component_alert_component__ = __webpack_require__("../../../../../src/app/alert-component/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__properties_component_properties_component__ = __webpack_require__("../../../../../src/app/properties-component/properties.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__treeView_component_treeViewAccountDlg_component__ = __webpack_require__("../../../../../src/app/treeView-component/treeViewAccountDlg.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__treeView_component_treeViewMatchedDlg_component__ = __webpack_require__("../../../../../src/app/treeView-component/treeViewMatchedDlg.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__dialogs_saveDlg__ = __webpack_require__("../../../../../src/app/dialogs/saveDlg.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__dialogs_confirmationDlg__ = __webpack_require__("../../../../../src/app/dialogs/confirmationDlg.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__shared_spinner_service__ = __webpack_require__("../../../../../src/app/shared/spinner.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__documentList_component_document_list_service__ = __webpack_require__("../../../../../src/app/documentList-component/document-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__documentDetails_component_document_details_service__ = __webpack_require__("../../../../../src/app/documentDetails-component/document-details.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__chartList_component_chartList_service__ = __webpack_require__("../../../../../src/app/chartList-component/chartList.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__properties_component_properties_service__ = __webpack_require__("../../../../../src/app/properties-component/properties.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__alert_component_alert_service__ = __webpack_require__("../../../../../src/app/alert-component/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__angular_service_worker__ = __webpack_require__("../../../service-worker/esm5/service-worker.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//import './polyfills';






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
 // only necessary if you're using ag-Grid-Enterprise features


//integralUI:

//cdk/material components:




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



//ptm components:














//Dialogs:






//Services:








var ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_18__home_component_home_component__["a" /* HomeComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_18__home_component_home_component__["a" /* HomeComponent */] },
    { path: 'documents', component: __WEBPACK_IMPORTED_MODULE_19__documentList_component_panel_documentList_component__["a" /* PanelDocumentListComponent */] },
    {
        path: 'details',
        component: __WEBPACK_IMPORTED_MODULE_21__documentDetails_component_panel_documentDetails_component__["a" /* PanelDocumentDetailsComponent */],
    }
    //{path: 'treeGrid', component: TreeGridTestComponent},
    //{path: 'treeView', component: TreeViewTestComponent},
    //{path: 'chart', component: TreeViewEditingSample},
    //{path: 'chart', component: ChartListComponent},
    //{path: 'modal', component: ModalButton},
    //{path: 'dialog', component: DialogDataExample},
    //{path: 'contextMenu', component: ContextMenuComponent},
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            // For any component loaded into a dialog, you must include your component class in the list of entryComponents 
            //in your NgModule definition so that the Angular compiler knows to create the ComponentFactory for it.
            entryComponents: [__WEBPACK_IMPORTED_MODULE_30__alert_component_alert_component__["a" /* AlertDialog */], __WEBPACK_IMPORTED_MODULE_31__properties_component_properties_component__["a" /* PropertiesDialog */], __WEBPACK_IMPORTED_MODULE_32__treeView_component_treeViewAccountDlg_component__["a" /* TreeViewAccountDialog */], __WEBPACK_IMPORTED_MODULE_33__treeView_component_treeViewMatchedDlg_component__["a" /* TreeViewMatchedDialog */], __WEBPACK_IMPORTED_MODULE_34__dialogs_saveDlg__["a" /* SaveDialog */], __WEBPACK_IMPORTED_MODULE_35__dialogs_confirmationDlg__["a" /* ConfirmDialog */], __WEBPACK_IMPORTED_MODULE_15__splitter_component_splitter_component__["a" /* SplitterComponent */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_2__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__red_component_red_component__["a" /* RedComponent */],
                __WEBPACK_IMPORTED_MODULE_16__navbar_component_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_17__ptm_component_ptm_component__["a" /* PTMComponent */],
                __WEBPACK_IMPORTED_MODULE_18__home_component_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_19__documentList_component_panel_documentList_component__["a" /* PanelDocumentListComponent */],
                __WEBPACK_IMPORTED_MODULE_20__documentList_component_documentList_component__["a" /* DocumentListComponent */],
                __WEBPACK_IMPORTED_MODULE_21__documentDetails_component_panel_documentDetails_component__["a" /* PanelDocumentDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_22__documentDetails_component_documentDetails_component__["a" /* DocumentDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_23__toolBar_component_toolBar_component__["a" /* ToolbarComponent */],
                __WEBPACK_IMPORTED_MODULE_25__list_component_list_component__["a" /* ListComponent */],
                __WEBPACK_IMPORTED_MODULE_26__list_component_mappedList_component__["a" /* MappedListComponent */],
                __WEBPACK_IMPORTED_MODULE_27__buttons_component_saveButton_component__["a" /* SaveButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_28__treeView_component_treeView_component__["a" /* TreeViewComponent */],
                __WEBPACK_IMPORTED_MODULE_24__topPanel_component_topPanel_component__["a" /* TopPanelComponent */],
                __WEBPACK_IMPORTED_MODULE_14__splitter_component_splitBehaviour_directive__["c" /* SplitBehaviourDirective */],
                __WEBPACK_IMPORTED_MODULE_15__splitter_component_splitter_component__["a" /* SplitterComponent */],
                __WEBPACK_IMPORTED_MODULE_13__splitter_component_splitContainer_component__["a" /* SplitContainerComponent */],
                __WEBPACK_IMPORTED_MODULE_30__alert_component_alert_component__["a" /* AlertDialog */],
                __WEBPACK_IMPORTED_MODULE_31__properties_component_properties_component__["a" /* PropertiesDialog */],
                __WEBPACK_IMPORTED_MODULE_32__treeView_component_treeViewAccountDlg_component__["a" /* TreeViewAccountDialog */],
                __WEBPACK_IMPORTED_MODULE_33__treeView_component_treeViewMatchedDlg_component__["a" /* TreeViewMatchedDialog */],
                __WEBPACK_IMPORTED_MODULE_34__dialogs_saveDlg__["a" /* SaveDialog */],
                __WEBPACK_IMPORTED_MODULE_35__dialogs_confirmationDlg__["a" /* ConfirmDialog */],
                __WEBPACK_IMPORTED_MODULE_29__treeView_component_treeViewMatch_component__["a" /* TreeViewMatchedComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* RouterModule */].forRoot(ROUTES),
                //RouterModule.forRoot(ROUTES, {onSameUrlNavigation: "reload"}),
                __WEBPACK_IMPORTED_MODULE_7_ag_grid_angular__["AgGridModule"].withComponents([__WEBPACK_IMPORTED_MODULE_8__red_component_red_component__["a" /* RedComponent */]]),
                __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_12__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_42__angular_service_worker__["a" /* ServiceWorkerModule */].register('/ngsw-worker.js', { enabled: __WEBPACK_IMPORTED_MODULE_43__environments_environment__["a" /* environment */].production }),
                __WEBPACK_IMPORTED_MODULE_9_integralui_integralui_module__["IntegralUIModule"],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_36__shared_spinner_service__["a" /* SpinnerService */],
                __WEBPACK_IMPORTED_MODULE_37__documentList_component_document_list_service__["a" /* documentListService */],
                __WEBPACK_IMPORTED_MODULE_38__documentDetails_component_document_details_service__["a" /* documentDetailsService */],
                __WEBPACK_IMPORTED_MODULE_39__chartList_component_chartList_service__["a" /* ChartListService */],
                __WEBPACK_IMPORTED_MODULE_40__properties_component_properties_service__["a" /* PropertiesService */],
                __WEBPACK_IMPORTED_MODULE_41__alert_component_alert_service__["a" /* AlertService */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_0__app_component__["a" /* AppComponent */]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/appsettings.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettings; });
var AppSettings = /** @class */ (function () {
    function AppSettings() {
    }
    // *******************************************************************************************************************
    // *******************************************************  MySQL API Endpoints: *************************************
    // *******************************************************************************************************************
    //public static DOC_LIST_API_ENDPOINT='https://31l9udm7i6.execute-api.us-east-1.amazonaws.com/prod/documents';
    //DocDetails:
    //public static DOC_DETAILS_API_ENDPOINT='https://31l9udm7i6.execute-api.us-east-1.amazonaws.com/prod/details';
    //public static COLUMNID_API_ENDPOINT = 'https://31l9udm7i6.execute-api.us-east-1.amazonaws.com/prod/columnid';
    //Properties:
    //public static AUDITORS_LIST_API_ENDPOINT = "https://31l9udm7i6.execute-api.us-east-1.amazonaws.com/prod/auditors";
    //public static CURRENCY_LIST_API_ENDPOINT = "https://31l9udm7i6.execute-api.us-east-1.amazonaws.com/prod/currency";
    //public static REPORT_TYPES_LIST_API_ENDPOINT = 'https://31l9udm7i6.execute-api.us-east-1.amazonaws.com/prod/reportTypes';
    //public static MULTIPLIERS_LIST_API_ENDPOINT = 'https://31l9udm7i6.execute-api.us-east-1.amazonaws.com/prod/multipliers';
    //public static SOURCE_TYPES_LIST_API_ENDPOINT = "https://31l9udm7i6.execute-api.us-east-1.amazonaws.com/prod/sourcetypes";
    //public static PRINCIPLE_TYPE_LIST_API_ENDPOINT = "https://31l9udm7i6.execute-api.us-east-1.amazonaws.com/prod/principletypes";
    //public static PPREVIOUS_REPORTS_LIST_API_ENDPOINT = "https://31l9udm7i6.execute-api.us-east-1.amazonaws.com/prod/previousReports";
    //public static WELLS_PERIODS_LIST_API_ENDPOINT = "https://31l9udm7i6.execute-api.us-east-1.amazonaws.com/prod/wellsPeriods";
    //public static DOCUMENT_HEADER_LIST_API_ENDPOINT = "https://31l9udm7i6.execute-api.us-east-1.amazonaws.com/prod/documentHeader";
    //Chart Tree:
    //public static COMPANY_ACCOUNT_API_ENDPOINT = "https://31l9udm7i6.execute-api.us-east-1.amazonaws.com/prod/companyaccountorder";
    //public static CHART_ACCOUNT_API_ENDPOINT = "https://31l9udm7i6.execute-api.us-east-1.amazonaws.com/prod/chartaccountorder";
    //public static CHARTID_API_ENDPOINT = "https://31l9udm7i6.execute-api.us-east-1.amazonaws.com/prod/charttree";
    //public static CHART_CODES_API_ENDPOINT = "https://31l9udm7i6.execute-api.us-east-1.amazonaws.com/prod/chartcodes";
    //public static CHARTCODE_API_ENDPOINT = "https://31l9udm7i6.execute-api.us-east-1.amazonaws.com/prod/chartcode";
    //public static QUARTERLY_CHARTACCOUNT_API_ENDPOINT = "https://31l9udm7i6.execute-api.us-east-1.amazonaws.com/prod/quarterlychartaccountinfo";
    //public static ANNUAL_CHARTACCOUNT_API_ENDPOINT = "https://31l9udm7i6.execute-api.us-east-1.amazonaws.com/prod/annualchartaccountinfo";
    //public static CHARTACCOUNT_DLG_API_ENDPOINT = "https://31l9udm7i6.execute-api.us-east-1.amazonaws.com/prod/chartaccountdlg";
    //Save Button:
    //public static STATUS_API_ENDPOINT = "https://31l9udm7i6.execute-api.us-east-1.amazonaws.com/prod/status";
    // *******************************************************************************************************************
    // *******************************************************  Oracle API Endpoints: ************************************
    // *******************************************************************************************************************
    //ptmAPI-lookup:
    AppSettings.STATUS_API_ENDPOINT = "https://hwx6j9uei8.execute-api.us-east-1.amazonaws.com/beta/getDocumentStatus";
    AppSettings.AUDITORS_LIST_API_ENDPOINT = "https://hwx6j9uei8.execute-api.us-east-1.amazonaws.com/beta/getAuditors";
    AppSettings.CURRENCY_LIST_API_ENDPOINT = "https://hwx6j9uei8.execute-api.us-east-1.amazonaws.com/beta/getCurrencies";
    AppSettings.MULTIPLIERS_LIST_API_ENDPOINT = "https://hwx6j9uei8.execute-api.us-east-1.amazonaws.com/beta/getMultipliers";
    AppSettings.REPORT_TYPES_LIST_API_ENDPOINT = "https://hwx6j9uei8.execute-api.us-east-1.amazonaws.com/beta/getReportTypes";
    AppSettings.SOURCE_TYPES_LIST_API_ENDPOINT = "https://hwx6j9uei8.execute-api.us-east-1.amazonaws.com/beta/getSourceTypes";
    AppSettings.PRINCIPLE_TYPE_LIST_API_ENDPOINT = "https://hwx6j9uei8.execute-api.us-east-1.amazonaws.com/beta/getPrincipalTypes";
    AppSettings.PPREVIOUS_REPORTS_LIST_API_ENDPOINT = "https://hwx6j9uei8.execute-api.us-east-1.amazonaws.com/beta/getPreviousReports";
    AppSettings.WELLS_PERIODS_LIST_API_ENDPOINT = "https://hwx6j9uei8.execute-api.us-east-1.amazonaws.com/beta/getWellsReports";
    AppSettings.DOCUMENT_HEADER_LIST_API_ENDPOINT = "https://hwx6j9uei8.execute-api.us-east-1.amazonaws.com/beta/getDocumentHeader";
    //ptmAPI-document:
    AppSettings.DOC_LIST_API_ENDPOINT = 'https://hwx6j9uei8.execute-api.us-east-1.amazonaws.com/beta/getDocumentList';
    AppSettings.DOC_DETAILS_API_ENDPOINT = 'https://hwx6j9uei8.execute-api.us-east-1.amazonaws.com/beta/getDocumentDetails';
    AppSettings.COLUMNID_API_ENDPOINT = 'https://hwx6j9uei8.execute-api.us-east-1.amazonaws.com/beta/getColumnID';
    //ptmAPI-chart:
    AppSettings.COMPANY_ACCOUNT_API_ENDPOINT = "https://hwx6j9uei8.execute-api.us-east-1.amazonaws.com/beta/getCompanyAccountOrder";
    AppSettings.CHART_ACCOUNT_API_ENDPOINT = "https://hwx6j9uei8.execute-api.us-east-1.amazonaws.com/beta/getChartAccountOrder";
    AppSettings.CHARTID_API_ENDPOINT = "https://hwx6j9uei8.execute-api.us-east-1.amazonaws.com/beta/getChartIDList";
    AppSettings.CHARTACCOUNT_DLG_API_ENDPOINT = "https://hwx6j9uei8.execute-api.us-east-1.amazonaws.com/beta/getChartAccountDlg";
    AppSettings.CHART_CODES_API_ENDPOINT = "https://hwx6j9uei8.execute-api.us-east-1.amazonaws.com/beta/getChartCodes";
    AppSettings.CHARTCODE_API_ENDPOINT = "https://hwx6j9uei8.execute-api.us-east-1.amazonaws.com/beta/getChartCode";
    AppSettings.QUARTERLY_CHARTACCOUNT_API_ENDPOINT = "https://hwx6j9uei8.execute-api.us-east-1.amazonaws.com/beta/getQuarterlyChartAccount";
    AppSettings.ANNUAL_CHARTACCOUNT_API_ENDPOINT = "https://hwx6j9uei8.execute-api.us-east-1.amazonaws.com/beta/getAnnualChartAccount";
    //ptmAPI-save:
    AppSettings.VALUEORDER_API_ENDPOINT = "https://hwx6j9uei8.execute-api.us-east-1.amazonaws.com/beta/getDocumentValueOrder";
    AppSettings.SAVE_DETAILS_API_ENDPOINT = "https://hwx6j9uei8.execute-api.us-east-1.amazonaws.com/beta/saveDocumentDetails";
    AppSettings.SAVE_HEADER_API_ENDPOINT = "https://hwx6j9uei8.execute-api.us-east-1.amazonaws.com/beta/saveDocumentHeader";
    AppSettings.DELETE_VALUE_ENDPOINT = "https://hwx6j9uei8.execute-api.us-east-1.amazonaws.com/beta/deleteValue";
    AppSettings.INSERT_VALUE_ENDPOINT = "https://hwx6j9uei8.execute-api.us-east-1.amazonaws.com/beta/insertValue";
    return AppSettings;
}());



/***/ }),

/***/ "../../../../../src/app/buttons-component/saveButton.component.html":
/***/ (function(module, exports) {

module.exports = "<button \n    mat-raised-button color=\"primary\" \n    (click)=\"onClick()\" cdkFocusInitial \n>OK</button>  \n    "

/***/ }),

/***/ "../../../../../src/app/buttons-component/saveButton.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaveButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__documentDetails_component_document_details_service__ = __webpack_require__("../../../../../src/app/documentDetails-component/document-details.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SaveButtonComponent = /** @class */ (function () {
    function SaveButtonComponent(_docDetailsService) {
        this._docDetailsService = _docDetailsService;
        this.alertEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.closeEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.gMessage = '';
    }
    SaveButtonComponent.prototype.showAlert = function (aMessage) {
        this.gMessage = aMessage;
        this.alertEvent.emit(null);
    };
    SaveButtonComponent.prototype.onClick = function () {
        var vStatus = this._docDetailsService.getSelectedStatus();
        var vDocID = this._docDetailsService.selectedDocID;
        console.log("onClick in SaveButton,ts => " + vDocID + " => " + vStatus);
        switch (vStatus.trim()) {
            case "": {
                this.showAlert('You need to choose a status!');
                break;
            }
            case "0": {
                console.log("0 => " + vDocID + " => " + vStatus);
                if (vDocID >= 15000000)
                    this.showAlert('Cannot save a XBRL document as TOPROCESS!');
                else
                    this.closeEvent.emit();
                break;
            }
            case "5": {
                if (vDocID >= 15000000)
                    this.showAlert('Need to check if user has performed the Equalize Period function!');
                else
                    this.closeEvent.emit();
                break;
            }
            default: {
                this.closeEvent.emit(null);
                break;
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SaveButtonComponent.prototype, "alertEvent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SaveButtonComponent.prototype, "closeEvent", void 0);
    SaveButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'saveButton',
            template: __webpack_require__("../../../../../src/app/buttons-component/saveButton.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__documentDetails_component_document_details_service__["a" /* documentDetailsService */]])
    ], SaveButtonComponent);
    return SaveButtonComponent;
}());



/***/ }),

/***/ "../../../../../src/app/chartList-component/chartList.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__appsettings__ = __webpack_require__("../../../../../src/app/appsettings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



 // this is necessary

var ChartListService = /** @class */ (function () {
    function ChartListService(http) {
        this.http = http;
        this.chartData = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
    }
    ChartListService.prototype.getChartAccountDlgData = function (chartCode, formCode) {
        //console.log('getChartAccountDlgData: ' + chartCode + formCode);
        var endpoint = __WEBPACK_IMPORTED_MODULE_4__appsettings__["a" /* AppSettings */].CHARTACCOUNT_DLG_API_ENDPOINT +
            "?CHARTCODE=" + chartCode +
            "&FORMCODE=" + formCode;
        //console.log('Chart endpoint: ' + endpoint);
        return this.http.get(endpoint).map(function (res) { return res.json(); });
    };
    ChartListService.prototype.getChartAccountData = function (cn, chartCode, type, formCode) {
        //console.log('Get chart list for: ' + cn + chartCode + type + formCode);
        var endpoint = __WEBPACK_IMPORTED_MODULE_4__appsettings__["a" /* AppSettings */].CHART_ACCOUNT_API_ENDPOINT +
            "?COMPNUMBER=" + cn +
            "&CHARTCODE=" + chartCode +
            //"&ACCOUNTTYPECODE="+ type + //mySQL
            "&TYPECODE=" + type +
            "&FORMCODE=" + formCode;
        //console.log('Chart endpoint: ' + endpoint);
        return this.http.get(endpoint).map(function (res) { return res.json(); });
    };
    ChartListService.prototype.getCompanyAccountData = function (cn, chartCode, type, formCode) {
        //console.log('Get chart list for: ' + cn + chartCode + type + formCode);
        var endpoint = __WEBPACK_IMPORTED_MODULE_4__appsettings__["a" /* AppSettings */].COMPANY_ACCOUNT_API_ENDPOINT +
            "?COMPNUMBER=" + cn +
            "&CHARTCODE=" + chartCode +
            //"&ACCOUNTTYPECODE="+ type + //mySQL
            "&TYPECODE=" + type +
            "&FORMCODE=" + formCode;
        //console.log('Chart endpoint: ' + endpoint);
        return this.http.get(endpoint).map(function (res) { return res.json(); });
    };
    ChartListService.prototype.getAnnualChartAccountData = function (cn, chartCode, orderLink) {
        //console.log('Get chart list for: ' + cn + chartCode + type + formCode);
        var endpoint = __WEBPACK_IMPORTED_MODULE_4__appsettings__["a" /* AppSettings */].ANNUAL_CHARTACCOUNT_API_ENDPOINT +
            "?COMPNUMBER=" + cn +
            "&CHARTCODE=" + chartCode +
            "&ORDERLINK=" + orderLink;
        //console.log('Chart endpoint: ' + endpoint);
        return this.http.get(endpoint).map(function (res) { return res.json(); });
    };
    ChartListService.prototype.getQuarterlyChartAccountData = function (cn, chartCode, orderLink) {
        //console.log('Get chart list for: ' + cn + chartCode + type + formCode);
        var endpoint = __WEBPACK_IMPORTED_MODULE_4__appsettings__["a" /* AppSettings */].QUARTERLY_CHARTACCOUNT_API_ENDPOINT +
            "?COMPNUMBER=" + cn +
            "&CHARTCODE=" + chartCode +
            "&ORDERLINK=" + orderLink;
        //console.log('Chart endpoint: ' + endpoint);
        return this.http.get(endpoint).map(function (res) { return res.json(); });
    };
    ChartListService.prototype.getChartIDs = function (cn, chartCode, type, formCode) {
        //console.log('cls.getChartIDs for: ' + cn + ", " + chartCode + ", " + type + ", " + formCode);
        if ((cn > 0) && (chartCode) && (type) && (formCode)) {
            var endpoint = __WEBPACK_IMPORTED_MODULE_4__appsettings__["a" /* AppSettings */].CHARTID_API_ENDPOINT +
                "?COMPNUMBER=" + cn +
                "&CHARTCODE=" + chartCode +
                //"&ACCOUNTTYPECODE="+ type + //mySQL
                "&TYPECODE=" + type +
                "&FORMCODE=" + formCode;
            //console.log('Chart endpoint: ' + endpoint);
            return this.http.get(endpoint).map(function (res) { return res.json(); });
        }
        else {
            console.log("WARNING: Parameter list of cls.getChartIDs is not complete !!!");
        }
    };
    ChartListService.prototype.getChartCodes = function () {
        //console.log('Get chart ID list for: ' + cn + chartCode + type + formCode);
        var endpoint = __WEBPACK_IMPORTED_MODULE_4__appsettings__["a" /* AppSettings */].CHART_CODES_API_ENDPOINT;
        //console.log('Chart endpoint: ' + endpoint);
        return this.http.get(endpoint).map(function (res) { return res.json(); });
    };
    ChartListService.prototype.getChartCode = function () {
        return this.selectedChartCode;
    };
    ChartListService.prototype.getMapCode = function () {
        return this.selectedMapCode;
    };
    ChartListService.prototype.getLiteral = function () {
        return this.selectedLiteral;
    };
    ChartListService.prototype.getAmountl = function () {
        return this.selectedAmount;
    };
    ChartListService.prototype.setChartCode = function (code) {
        this.selectedChartCode = code;
    };
    ChartListService.prototype.setMapCode = function (code) {
        //console.log('setMapCode: ' + code);
        this.selectedMapCode = code;
    };
    ChartListService.prototype.setLiteral = function (text) {
        //console.log('setMapCode: ' + text);
        this.selectedLiteral = text;
    };
    ChartListService.prototype.setAmount = function (amount) {
        //console.log('setMapCode: ' + text);
        this.selectedAmount = amount;
    };
    ChartListService.prototype.getOrderLink = function () {
        return this.selectedOrderLink;
    };
    ChartListService.prototype.setOrderLink = function (orderLink) {
        this.selectedOrderLink = orderLink;
    };
    ChartListService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], ChartListService);
    return ChartListService;
}());



/***/ }),

/***/ "../../../../../src/app/css/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@import url(\"https://fonts.googleapis.com/css?family=Montserrat|Open+Sans\");\n/**************************************************************************/\n/***************************** Home Screen ********************************/\n/**************************************************************************/\ndiv.container {\n  width: 100%;\n  /*border: 1px solid gray;*/ }\nheader, footer {\n  padding: 1em;\n  color: white;\n  background-color: #4b4747;\n  clear: left;\n  text-align: center;\n  border-radius: 5px; }\narticle {\n  /*margin-left: 170px;\n  border-left: 1px solid gray;*/\n  margin-right: 50px;\n  margin-left: 50px;\n  padding: 1em;\n  font-weight: 600;\n  font-size: 14px;\n  /*overflow: hidden;*/ }\n/**************************************************************************/\n/************ cell style ***************/\n/**************************************************************************/\n.ag-theme-fresh .classGreen {\n  color: green; }\n.ag-theme-fresh .classRed {\n  color: red; }\n.classPink {\n  color: #f124b4; }\n.classGrey {\n  color: grey; }\n.classOrange {\n  color: Orange; }\n.classBlue {\n  color: blue; }\n.rag-red {\n  background-color: lightcoral; }\n.rag-green {\n  background-color: lightgreen; }\n.rag-amber {\n  background-color: lightsalmon; }\n.rag-red-outer .rag-element {\n  background-color: lightcoral; }\n.rag-green-outer .rag-element {\n  background-color: lightgreen; }\n.rag-amber-outer .rag-element {\n  background-color: lightsalmon; }\n.actual {\n  background-color: rgba(0, 255, 0, 0.1); }\n.budget {\n  background-color: rgba(255, 0, 0, 0.1); }\n.negative {\n  color: red; }\n.rightAlign {\n  text-align: right; }\n/**************************************************************************/\n/************ Modal ***************/\n/**************************************************************************/\n/* Specific Modal Styles */\n.modal-dialog {\n  color: #424141;\n  background-color: #c2bdbd;\n  padding: 25px; }\n.modal.in {\n  display: initial; }\n.modal-header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-bottom: 14px; }\n.modal-header > h2 {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1; }\n.modal-header .close {\n    background-color: #fff;\n    font-weight: 100;\n    font-size: 2.5rem;\n    border: 0;\n    border-radius: 999px;\n    padding: 0;\n    margin: 0;\n    line-height: 1rem;\n    height: 4rem;\n    width: 4rem; }\n.modal-header .close:hover {\n      background-color: #ccc; }\n/* /Specific Modal Styles */\nhtml, body {\n  font-family: 'Open Sans', sans-serif;\n  font-size: 12px;\n  color: #444;\n  background: #f0f5f7;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%; }\nbutton {\n  cursor: pointer;\n  font-family: 'Open Sans', sans-serif;\n  -webkit-transition: .2s all;\n  transition: .2s all; }\nbutton:focus {\n    outline: none; }\nbutton.big {\n  color: #333131;\n  border: 0;\n  border-radius: 4px;\n  font-size: 16px;\n  width: 10%;\n  height: 0px;\n  padding: 1rem 1rem 2rem 1rem;\n  background-color: silver; }\nbutton.big + button.big {\n    margin-left: 10px; }\nbutton.big:hover {\n    background-color: #e4e4e4; }\nbutton.small {\n  color: #333131;\n  border: 0;\n  border-radius: 4px;\n  font-size: 12px;\n  width: 5%;\n  height: 0px;\n  padding: 0.25rem 0.25rem 1.2rem 0.25rem;\n  background-color: silver; }\nbutton.small + button.small {\n    margin-left: 10px; }\nbutton.small:hover {\n    background-color: #e4e4e4; }\nh1, h2 {\n  font-family: 'Ariel', sans-serif;\n  font-weight: 200; }\nh1 {\n  padding: 30px;\n  margin: 0; }\n#content {\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n#actions {\n  margin-top: -100px;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n/**************************************************************************/\n/************  Spinner ************/\n/**************************************************************************/\n/* Absolute Center Spinner */\n.loading {\n  position: fixed;\n  z-index: 999;\n  height: 2em;\n  width: 2em;\n  overflow: show;\n  margin: auto;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0; }\n/* Transparent Overlay */\n.loading:before {\n  content: '';\n  display: block;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.3); }\n/* :not(:required) hides these rules from IE9 and below */\n.loading:not(:required) {\n  /* hide \"loading...\" text */\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0; }\n.loading:not(:required):after {\n  content: '';\n  display: block;\n  font-size: 10px;\n  width: 1em;\n  height: 1em;\n  margin-top: -0.5em;\n  -webkit-animation: spinner 1500ms infinite linear;\n  animation: spinner 1500ms infinite linear;\n  border-radius: 0.5em;\n  -webkit-box-shadow: rgba(0, 0, 0, 0.75) 1.5em 0 0 0, rgba(0, 0, 0, 0.75) 1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) 0 1.5em 0 0, rgba(0, 0, 0, 0.75) -1.1em 1.1em 0 0, rgba(0, 0, 0, 0.5) -1.5em 0 0 0, rgba(0, 0, 0, 0.5) -1.1em -1.1em 0 0, rgba(0, 0, 0, 0.75) 0 -1.5em 0 0, rgba(0, 0, 0, 0.75) 1.1em -1.1em 0 0;\n  box-shadow: rgba(0, 0, 0, 0.75) 1.5em 0 0 0, rgba(0, 0, 0, 0.75) 1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) 0 1.5em 0 0, rgba(0, 0, 0, 0.75) -1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) -1.5em 0 0 0, rgba(0, 0, 0, 0.75) -1.1em -1.1em 0 0, rgba(0, 0, 0, 0.75) 0 -1.5em 0 0, rgba(0, 0, 0, 0.75) 1.1em -1.1em 0 0; }\n/* Animation */\n@-webkit-keyframes spinner {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n@keyframes spinner {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg); } }\n/**************************************************************************/\n/************  Top Navigator  *******************/\n/**************************************************************************/\n/* Add a black background color to the top navigation */\n.topnav {\n  background-color: black; }\n/* Style the links inside the navigation bar */\n.topnav a {\n  float: left;\n  display: block;\n  color: #f2f2f2;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n  font-size: 17px; }\n/* Change the color of links on hover */\n.topnav a:hover {\n  color: grey; }\n/* Add a color to the active/current link */\n.topnav a.active {\n  background-color: grey;\n  color: white; }\n.navbar {\n  margin-bottom: 0; }\n/**************************************************************************/\n/************  Hoverable Dropdown  *******************/\n/**************************************************************************/\n#props {\n  width: 50%;\n  height: 35px;\n  margin-top: 15px;\n  outline: none;\n  font-size: 13px; }\n.dropbtn {\n  background-color: rgba(128, 128, 128, 0);\n  color: rgba(255, 255, 255, 0.56);\n  padding: 16px;\n  font-size: 16px;\n  border: none;\n  cursor: pointer; }\n.dropdown {\n  position: relative;\n  display: inline-block; }\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  -webkit-box-shadow: 0px 8px 16px 0px grey;\n          box-shadow: 0px 8px 16px 0px grey;\n  z-index: 1;\n  font-size: 13px; }\n.dropdown-content a {\n  color: black;\n  padding: 6px 16px;\n  text-decoration: none;\n  display: block; }\n.dropdown-content a:hover {\n  background-color: #C5C2C2; }\n.dropdown:hover .dropdown-content {\n  display: block;\n  color: white; }\n.dropdown:hover .dropbtn {\n  background-color: black;\n  color: white; }\n/**************************************************************************/\n/****************************** Panels ************************************/\n/**************************************************************************/\n.headerContainer {\n  float: left;\n  margin-top: 1px;\n  margin-left: 15px;\n  font-size: 14px; }\n.cellContainer {\n  width: 33%;\n  float: left;\n  margin-top: 1px;\n  margin-left: 15px; }\n.topPanel {\n  color: black;\n  height: 10%;\n  margin-top: 5px;\n  margin-left: 5px;\n  background-color: #c0c2ce;\n  border-radius: 5px;\n  min-width: 60%; }\n.panel-body {\n  height: 100%;\n  width: 100%; }\n.panel-doclist {\n  border-radius: 15px;\n  height: 550px;\n  width: 100%;\n  resize: both;\n  overflow-y: hidden; }\n.panel-docdetails {\n  border-radius: 15px;\n  height: 600px;\n  width: 90%;\n  resize: both;\n  overflow-y: hidden;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  padding-top: 70px; }\n/**************************************************************************/\n/****************************** Splitter ************************************/\n/**************************************************************************/\n.leftDiv {\n  height: 100%;\n  color: black;\n  padding: 4px; }\n.rightDiv {\n  height: 100%;\n  background-color: #cdcdd4; }\n/**************************************************************************/\n/****************************** ag-grid ************************************/\n/**************************************************************************/\n/*\n.ag-cell-focus,.ag-cell-no-focus{\n    border:none !important;\n  }\n\n.ag-cell:focus{\n  border:none !important;\n  outline: none;\n}\n*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dialogs/confirmationDlg.html":
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/css?family=Roboto:300,400,500\" rel=\"stylesheet\">\n\n<div mat-dialog-content class=\"dialog-container\"  [style.fontSize.px]=\"14\">\n    <!-- <h1 mat-dialog-title>Confirm</h1> -->\n    <br>\n    <div md-dialog-content>{{confirmMessage}}</div>\n</div>\n<br>\n<div mat-dialog-actions align=\"top\">\n    <button mat-raised-button color=\"primary\" (click)=\"onCloseConfirm()\" >Yes</button>  \n    <button mat-raised-button color=\"primary\" (click)=\"onCloseCancel()\">No</button>  \n</div>\n    \n    \n"

/***/ }),

/***/ "../../../../../src/app/dialogs/confirmationDlg.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmDialog = /** @class */ (function () {
    function ConfirmDialog(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ConfirmDialog.prototype.onCloseConfirm = function () {
        this.dialogRef.close('ok');
    };
    ConfirmDialog.prototype.onCloseCancel = function () {
        this.dialogRef.close('Cancel');
    };
    ConfirmDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dialog-confirmation',
            template: __webpack_require__("../../../../../src/app/dialogs/confirmationDlg.html"),
            styles: [__webpack_require__("../../../../../src/app/css/app.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialogRef */]])
    ], ConfirmDialog);
    return ConfirmDialog;
}());



/***/ }),

/***/ "../../../../../src/app/dialogs/saveDlg.html":
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/css?family=Roboto:300,400,500\" rel=\"stylesheet\">\n\n<div >\n\n    <div mat-dialog-content class=\"dialog-container\"  [style.fontSize.px]=\"12\">\n        <mat-form-field style=\"width: 400px\">\n            <mat-select placeholder=\"Select status\" (change)=\"onChange($event.value)\" [(ngModel)]=\"selectedStatus\">\n                <mat-option>None</mat-option>\n                <mat-option \n                    style=\"width: 400px; font-size: 12px;\"\n                    *ngFor=\"let s of status_list\" \n                    [value]=\"s.STATUS + ': ' + s.DESCRIPTION + ': ' + s.MNEMONIC\">\n                    {{ s.STATUS }}: {{ s.DESCRIPTION}}: {{ s.MNEMONIC }}\n                </mat-option>\n            </mat-select>\n        </mat-form-field>\n\n    </div>\n\n    <br><br><br><br>\n\n</div>\n\n<div>\n    <alert #alert hidden></alert>\n    <saveButton #saveButton \n        (alertEvent)=\"alert.showAlert(saveButton.gMessage)\"\n        (closeEvent)=\"onCloseConfirm()\"\n    ></saveButton>\n    <button mat-raised-button color=\"primary\" (click)=\"onCloseCancel()\">Cancel</button>  \n</div>\n\n<!--\n<div mat-dialog-actions align=\"top\">\n    <button mat-raised-button color=\"primary\" (click)=\"onCloseConfirm()\" cdkFocusInitial >OK</button>  \n    <button mat-raised-button color=\"primary\" (click)=\"onCloseCancel()\">Cancel</button>  \n</div>\n-->\n    \n    \n"

/***/ }),

/***/ "../../../../../src/app/dialogs/saveDlg.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaveDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__documentDetails_component_document_details_service__ = __webpack_require__("../../../../../src/app/documentDetails-component/document-details.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

var SaveDialog = /** @class */ (function () {
    function SaveDialog(_docDetailsService, dialogRef) {
        this._docDetailsService = _docDetailsService;
        this.dialogRef = dialogRef;
        this.status_list = [];
        this.selectedStatus = "";
        this._docDetailsService.setSelectedStatus("");
    }
    SaveDialog.prototype.ngAfterViewInit = function (aToggle, aCode) {
        this.getStatusList();
    };
    // to load annual chart account list:
    SaveDialog.prototype.getStatusList = function () {
        var _this = this;
        //let vSelectedStatus: string="";
        //console.log('I am in getStatusList()!');
        this._docDetailsService.getStatusList().subscribe(
        // the first argument is a function which runs on success
        function (data) {
            _this.status_list = data;
            //console.log("status_list length: " + this.status_list.length);
        }, 
        // the second argument is a function which runs on error
        function (err) { return console.error(err); }, 
        // the third argument is a function which runs on completion
        function () { });
    };
    SaveDialog.prototype.onChange = function (newValue) {
        //console.log("newValue **** " + newValue);
        if (newValue) {
            var vString = newValue.split(":", 3);
            //console.log("vString **** " + vString);
            var vSelectedStatus = vString[0];
            //console.log('saveDlg.onChange()- Status: ' + vSelectedStatus);
            this._docDetailsService.setSelectedStatus(vSelectedStatus);
        }
    };
    SaveDialog.prototype.onCloseConfirm = function () {
        this.dialogRef.close('ok');
    };
    SaveDialog.prototype.onCloseCancel = function () {
        this.dialogRef.close('Cancel');
    };
    SaveDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dialog-saveOptions',
            template: __webpack_require__("../../../../../src/app/dialogs/saveDlg.html"),
            styles: [__webpack_require__("../../../../../src/app/css/app.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__documentDetails_component_document_details_service__["a" /* documentDetailsService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialogRef */]])
    ], SaveDialog);
    return SaveDialog;
}());



/***/ }),

/***/ "../../../../../src/app/documentDetails-component/document-details.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return documentDetailsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__appsettings__ = __webpack_require__("../../../../../src/app/appsettings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 // this is necessary


var documentDetailsService = /** @class */ (function () {
    function documentDetailsService(http) {
        this.http = http;
        this.selectedTitle = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]("");
        this.selectedFormCode = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]("01");
        this.selectedColumnID = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](1);
        this.selectedStatus = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]("");
        this.selectedDocID = 0;
    }
    documentDetailsService.prototype.setFormDescription = function (description) {
        this.selectedFormDescription = description;
    };
    documentDetailsService.prototype.getDocumentDetails = function () {
        ////console.log('arrived in service getDocumentDetails !!!');
        ////console.log('docDetailsService selectedDocumentID: ' + this.selectedDocID);
        //console.log('dts.getDocumentDetails.selectedFormCode: ' + this.selectedFormCode.getValue());
        ////console.log('docDetailsService selectedColumnID: ' + this.selectedColumnID.getValue());
        var endpoint = __WEBPACK_IMPORTED_MODULE_4__appsettings__["a" /* AppSettings */].DOC_DETAILS_API_ENDPOINT +
            "?COMPNUMBER=" + this.selectedCompNumber +
            "&CHARTCODE=" + this.selectedChartCode +
            //"&ACCOUNTTYPECODE="+ this.selectedReportTypeCode + //mySQL
            "&TYPECODE=" + this.selectedReportTypeCode +
            //"&DOCUMENTID=" + this.selectedDocID + //mySQL
            "&DOCID=" + this.selectedDocID +
            "&FORMCODE=" + this.selectedFormCode.getValue();
        if (this.selectedDocID > 0) {
            //console.log('DocDetails endpoint: ' + endpoint);
            return this.http.get(endpoint).map(function (res) { return res.json(); });
        }
        else {
            //console.log('docDetailsService selectedDocumentID <= 0 !!!');
            return null;
        }
    };
    documentDetailsService.prototype.getColumnIDs = function () {
        //console.log('docDetailsService selectedDocumentID: ' + this.selectedDocID);
        //console.log('dts.getColumnIDs.selectedFormCode: ' + this.selectedFormCode.getValue());
        //console.log('docDetailsService selectedColumnID: ' + this.selectedColumnID.getValue());
        var endpoint = 
        //AppSettings.COLUMNID_API_ENDPOINT + "?DOCUMENTID=" + this.selectedDocID + "&FORM=" + this.selectedFormCode.getValue(); //mySQL
        __WEBPACK_IMPORTED_MODULE_4__appsettings__["a" /* AppSettings */].COLUMNID_API_ENDPOINT + "?DOCID=" + this.selectedDocID + "&FORMCODE=" + this.selectedFormCode.getValue();
        if (this.selectedDocID > 0) {
            //console.log('endpoint: ' + endpoint);
            return this.http.get(endpoint).map(function (res) { return res.json(); });
        }
        else {
            return null;
        }
    };
    documentDetailsService.prototype.getNumberOfPeriods = function (aFormCode) {
        //console.log('docDetailsService.aFormCode: ' + aFormCode);
        var endpoint = __WEBPACK_IMPORTED_MODULE_4__appsettings__["a" /* AppSettings */].COLUMNID_API_ENDPOINT + "?DOCID=" + this.selectedDocID + "&FORMCODE=" + aFormCode;
        if (this.selectedDocID > 0) {
            return this.http.get(endpoint).map(function (res) { return res.json(); });
        }
        else {
            return null;
        }
    };
    documentDetailsService.prototype.getDocumentValueOrder = function (aValueOrder) {
        //console.log('dt.getDocumentValueOrder.aValueOrder: ' + aValueOrder);
        var endpoint = __WEBPACK_IMPORTED_MODULE_4__appsettings__["a" /* AppSettings */].VALUEORDER_API_ENDPOINT + "?DOCID=" + this.selectedDocID + "?VALUEORDER=" + aValueOrder;
        if (this.selectedDocID > 0) {
            return this.http.get(endpoint).map(function (res) { return res.json(); });
        }
        else {
            return null;
        }
    };
    documentDetailsService.prototype.saveDocumentDetails = function (accountRecords) {
        console.log("Saving " + accountRecords.length + " records for Document ID: " + accountRecords[0].doc_id);
        var path = __WEBPACK_IMPORTED_MODULE_4__appsettings__["a" /* AppSettings */].SAVE_DETAILS_API_ENDPOINT;
        if (this.selectedDocID > 0) {
            console.log("URL: " + path);
            return this.http.post(path, accountRecords).map(function (res) { return res.json(); });
        }
        else
            return null;
    };
    documentDetailsService.prototype.deleteValue = function (accountRecords) {
        console.log("Delete " + accountRecords.length + " records for Document ID: " + accountRecords[0].doc_id);
        console.log("docID: " + accountRecords[0].doc_id
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
            + " mapdode: " + accountRecords[0].mapcode);
        var path = __WEBPACK_IMPORTED_MODULE_4__appsettings__["a" /* AppSettings */].DELETE_VALUE_ENDPOINT;
        if (this.selectedDocID > 0) {
            console.log("URL: " + path);
            return this.http.post(path, accountRecords).map(function (res) { return res.json(); });
        }
        else {
            return null;
        }
    };
    documentDetailsService.prototype.insertValue = function (accountRecords) {
        console.log("Insert " + accountRecords.length + " records for Document ID: " + accountRecords[0].doc_id);
        console.log("docID: " + accountRecords[0].doc_id
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
            + " mapdode: " + accountRecords[0].mapcode);
        var path = __WEBPACK_IMPORTED_MODULE_4__appsettings__["a" /* AppSettings */].INSERT_VALUE_ENDPOINT;
        if (this.selectedDocID > 0) {
            console.log("URL: " + path);
            return this.http.post(path, accountRecords).map(function (res) { return res.json(); });
        }
        else {
            return null;
        }
    };
    documentDetailsService.prototype.getDocumentID = function () {
        return this.selectedDocID;
    };
    documentDetailsService.prototype.getColumnID = function () {
        return this.selectedColumnID;
    };
    documentDetailsService.prototype.getFormID = function () {
        return this.selectedFormCode;
    };
    documentDetailsService.prototype.getCompanyName = function () {
        return this.selectedCompanyName;
    };
    documentDetailsService.prototype.getCompNumber = function () {
        return this.selectedCompNumber;
    };
    documentDetailsService.prototype.getOrderlink = function () {
        //console.log("docDetailsService.getOrderlink: " + this.selectedOrderlink)
        return this.selectedOrderlink;
    };
    documentDetailsService.prototype.getMapcode = function () {
        //console.log("docDetailsService.getMapcode: " + this.selectedMapcode)
        return this.selectedMapcode;
    };
    documentDetailsService.prototype.getReportTypeCode = function () {
        return this.selectedReportTypeCode;
    };
    documentDetailsService.prototype.getChartCode = function () {
        var endpoint = __WEBPACK_IMPORTED_MODULE_4__appsettings__["a" /* AppSettings */].CHARTCODE_API_ENDPOINT + "?COMPNUMBER=" + this.selectedCompNumber;
        if (this.selectedCompNumber > 0) {
            //console.log('dd.getChartCode.endpoint: ' + endpoint);
            return this.http.get(endpoint).map(function (res) { return res.json(); });
        }
        else {
            return null;
        }
    };
    documentDetailsService.prototype.getStatusList = function () {
        var endpoint = __WEBPACK_IMPORTED_MODULE_4__appsettings__["a" /* AppSettings */].STATUS_API_ENDPOINT;
        //console.log('endpoint: ' + endpoint);
        return this.http.get(endpoint).map(function (res) { return res.json(); });
    };
    documentDetailsService.prototype.getTitle = function () {
        return (this.selectedTitle);
    };
    documentDetailsService.prototype.getSelectedStatus = function () {
        //console.log("In docDetails.service.ts getSelectedStatus: " + this.setSelectedStatus.getValue());
        return this.selectedStatus.getValue();
    };
    documentDetailsService.prototype.getSelectedLiteral = function () {
        return this.selectedLiteral;
    };
    documentDetailsService.prototype.setDocumentDetails = function (docID, formID, compName, compNumber, columnID, type) {
        if (docID)
            this.setDocID(docID);
        if (formID)
            this.setFormID(formID);
        if (compName)
            this.setCompName(compName);
        if (compNumber)
            this.setCompNumber(compNumber);
        if (columnID)
            this.setColumnID(columnID);
        if (type)
            this.setReportTypeCode(type);
        if (compNumber)
            this.setChartCode();
        if (formID)
            this.setTitle(formID);
        //console.log('dts.setDocumentDetails--> docID: ' + docID + "Form: " + formID + "Type: " + type);
    };
    documentDetailsService.prototype.setDocID = function (docID) {
        this.selectedDocID = docID;
    };
    documentDetailsService.prototype.setFormID = function (formID) {
        this.selectedFormCode.next(formID);
    };
    documentDetailsService.prototype.setColumnID = function (columnID) {
        this.selectedColumnID.next(columnID);
    };
    documentDetailsService.prototype.setCompName = function (compName) {
        this.selectedCompanyName = compName;
    };
    documentDetailsService.prototype.setCompNumber = function (compNumber) {
        this.selectedCompNumber = compNumber;
    };
    documentDetailsService.prototype.setOrderlink = function (orderlink) {
        //console.log("docDetailsService.setOrderlink: " + orderlink)
        this.selectedOrderlink = orderlink;
    };
    documentDetailsService.prototype.setMapcode = function (mapcode) {
        //console.log("docDetailsService.setMapcode: " + mapcode)
        this.selectedMapcode = mapcode;
    };
    documentDetailsService.prototype.setReportTypeCode = function (type) {
        this.selectedReportTypeCode = type;
    };
    documentDetailsService.prototype.setSelectedLiteral = function (literal) {
        this.selectedLiteral = literal;
    };
    documentDetailsService.prototype.setChartCode = function () {
        var _this = this;
        var result;
        var data;
        this.getChartCode().subscribe(
        // the first argument is a function which runs on success
        function (data) { result = data; }, 
        // the second argument is a function which runs on error
        function (err) { return console.error(err); }, 
        // the third argument is a function which runs on completion
        function () {
            if (result[0])
                _this.selectedChartCode = result[0].CHARTCODE;
            //console.log("dds.setChartCode: " + this.selectedChartCode);       
        });
    };
    documentDetailsService.prototype.setTitle = function (formID) {
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
    };
    documentDetailsService.prototype.setSelectedStatus = function (newStatus) {
        this.selectedStatus.next(newStatus);
    };
    documentDetailsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
    ], documentDetailsService);
    return documentDetailsService;
}());



/***/ }),

/***/ "../../../../../src/app/documentDetails-component/documentDetails.component.html":
/***/ (function(module, exports) {

module.exports = "<div calss=\"topPanel\">\n    <div style=\"margin-left:5px; margin-top:2px\" class=\"btn-group\" data-toggle=\"buttons\">\n        <button (click)=\"fitColumns()\" class=\"btn btn-primary btn-sm\">Size Columns to Fit</button>\n        <button (click)=\"resetColumns()\" class=\"btn btn-secondary btn-sm\">Reset Columns Size</button>\n<!--\n        <button (click)=\"showLiteral(true)\" class=\"btn btn-primary btn-sm\">Show Literal</button>\n        <button (click)=\"showLiteral(false)\" class=\"btn btn-secondary btn-sm\">Hide Literal</button>\n        <button (click)=\"refreshAll()\" class=\"btn btn-primary btn-sm\">Refresh All</button>\n-->\n    </div>\n\n<!---\n    <label>\n        <input type=\"checkbox\" (change)=\"showToolPanel=$event.target.checked\"/>\n        Show Tool Panel\n    </label>\n-->\n</div>\n\n\n<!---<h1>Simple ag-Grid Angular Example</h1>-->\n<ag-grid-angular style=\"margin-left:5px; margin-top:2px; border-radius: 5px; width: 99%; height: 77%;\"\n    class=\"ag-theme-fresh\"\n    rowModelType = \"infinite\"\n    rowSelection=\"single\"\n\n    [gridOptions]=\"gridOptions\"\n    [showToolPanel]=\"showToolPanel\"\n    [domLayout]=\"autoheight\"\n    [enableColResize]=\"true\"\n    [getContextMenuItems]=\"getContextMenuItems\"\n    [rowData]=\"rowData\"   \n    [columnDefs]=\"columnDefs\"\n    [suppressCellSelection]=\"false\"\n    [enableServerSideFilter]=\"true\"\n    [enableServerSideSorting]=\"false\"\n    \n    (rowClicked)=\"onRowClicked($event)\"\n    (rowSelected)=\"onRowSelected($event)\"\n    (gridReady)=\"onGridReady($event)\"\n    \n    >\n</ag-grid-angular>\n"

/***/ }),

/***/ "../../../../../src/app/documentDetails-component/documentDetails.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__document_details_service__ = __webpack_require__("../../../../../src/app/documentDetails-component/document-details.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chartList_component_chartList_service__ = __webpack_require__("../../../../../src/app/chartList-component/chartList.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_spinner_service__ = __webpack_require__("../../../../../src/app/shared/spinner.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__treeView_component_treeViewMatchedDlg_component__ = __webpack_require__("../../../../../src/app/treeView-component/treeViewMatchedDlg.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dialogs_confirmationDlg__ = __webpack_require__("../../../../../src/app/dialogs/confirmationDlg.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import {CommonModule}  from '@angular/common'; 
//import {AppSettings} from '../appsettings';







//import { RedComponent } from "../red-component/red-component";
var DocumentDetailsComponent = /** @class */ (function () {
    //private tempRowData: any[];
    //private doc_id = this.getDocID();
    //private comp_name = this.getCompName();
    //private column_id = 0; 
    //private form_id = ""; 
    function DocumentDetailsComponent(dialog, _docDetailsService, _loaderService, _chartListService) {
        var _this = this;
        this.dialog = dialog;
        this._docDetailsService = _docDetailsService;
        this._loaderService = _loaderService;
        this._chartListService = _chartListService;
        //Emits an event using an EventEmitter
        //@Output() chartEvent = new EventEmitter();
        this.treeEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.documentHeaderEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.findChartItemEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.alertEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        //public doc_list; // For testing API Gateway on AWS
        this.gMessage = '';
        this.gAmountNames = [];
        this.gRowClicked = 0;
        this.gSelectedChartCode = "";
        this.selectedLiteral = "";
        this.selectedIndex = 0;
        this.selectedNoPrint = 0;
        this.selectedRowIndex = 0;
        this.selectedDoubleCounted = 0;
        //public selectedOrderLink: string="";
        //public selectedMapcode: string="";
        this.myOptions = ["contains", "notContains", "equals", "startsWith", "endsWith"];
        /*
        public scrollToRow(aMapcode, aOrderlink: string, aRowClicked: number){
            let index = 0;
            this.gRowClicked = aRowClicked;
            if (aMapcode !== ""){
                index = this.getIndex(aMapcode, aOrderlink); // get the index of a row containg the aMapcode+aOrderlink in grid
                if (index !==0 ) {
                    this.gridOptions.api.ensureIndexVisible(index); // makes grid scrolls
                    let rowNode = this.gridOptions.api.getDisplayedRowAtIndex(index);
                    rowNode.setSelected(true);
    
                    // scrolls to the literal column
                    let selectedCol = this.gridOptions.columnApi.getAllDisplayedColumns()[2];
    
                    //change focus to selected row/column to make it possible for user to use keyboard to navigate
                    this.gridOptions.api.setFocusedCell(rowNode.rowIndex, selectedCol);
    
                    //console.log('docDetails scrollToItem: ' + rowNode.data.literal);
                }
            }
    
        }
        
        private getIndex(aMapcode, aOrderlink: string) {
            let result = 0;
            for (let i = 0; i < this.rowData.length; i++) {
                if ((this.rowData[i].mapcode === aMapcode) && (this.rowData[i].orderlink === aOrderlink)) {
                    result = i;
                    //console.log("Found it: " + this.rowData[i].literal);
                    break;
                }
            }
            return result;
        }
        */
        this.getContextMenuItems = function (params) {
            //private getContextMenuItems(params) {
            var vSelectedDoubleCounted = 0;
            var vSelectedNoPrint = 0;
            if (params.node) {
                vSelectedNoPrint = params.node.data.noPrint;
                vSelectedDoubleCounted = params.node.data.doubleCounted;
            }
            var vTemp;
            //let vMatched: string=params.node.data.matched;
            //let colID = allOfTheData[i].COLUMNID;
            //let vFieldName = "amount" + colID;
            var result = [
                {
                    //name: "Alert " + params.value,
                    name: "Match to Chart Account",
                    //shortcut: "Alt + M",
                    action: function () {
                        //console.log("MCA Selected");
                        _this.openDialog(params);
                    },
                },
                {
                    name: "Insert after selected on left",
                    //shortcut: "Alt + I",
                    //disabled: !(params.node.data.matched === 'T'),
                    //tooltip: "someToolTip"
                    action: function () {
                        if (params.node) {
                            var vColumnName = "matched";
                            var newValue = 'I';
                            params.node.setDataValue(vColumnName, newValue);
                            params.node.setDataValue(params.node.disabled, (!(params.node.data.matched === 'T')));
                            _this.refreshAll();
                        }
                    }
                },
                {
                    name: "Match with selected on left",
                    //shortcut: "Alt + I",
                    //disabled: (params.node.data.amount === null),
                    action: function () {
                        //this.showAlert("Selected Orderlink: " + this._chartListService.selectedOrderLink);
                        var vFound = false;
                        var vLiteral;
                        for (var i = 0; i < _this.rowData.length; i++) {
                            if ((_this.rowData[i].orderlink === _this._chartListService.selectedOrderLink) &&
                                (_this.rowData[i].mapcode === _this._chartListService.selectedMapCode)) {
                                vFound = true;
                                vLiteral = _this.rowData[i].literal;
                                //console.log("Found it: " + this.rowData[i].literal);
                                break;
                            }
                        }
                        if (vFound) {
                            _this.showAlert("Orderlink already matched with: " + vLiteral);
                        }
                        else {
                            var vColumnName = "orderlink";
                            var newNumber = _this._chartListService.selectedOrderLink;
                            params.node.setDataValue(vColumnName, newNumber);
                            vColumnName = "mapcode";
                            var newValue = _this._chartListService.selectedMapCode;
                            params.node.setDataValue(vColumnName, newValue);
                            vColumnName = "matched";
                            newValue = 'M';
                            params.node.setDataValue(vColumnName, newValue);
                            _this.refreshAll();
                        }
                    }
                },
                {
                    name: "Unmatch",
                    //shortcut: "Alt + U",
                    //disabled: ((params.node.data.matched === 'F') || (params.node.data.amount === null)),
                    //disabled: (params.node.data.matched === 'F'),
                    action: function () {
                        if (params.node) {
                            params.node.setDataValue(params.node.disabled, (params.node.data.matched === 'F'));
                            var vColumnName = "orderlink";
                            var newNumber = -1;
                            params.node.setDataValue(vColumnName, newNumber);
                            vColumnName = "mapcode";
                            var newValue = "";
                            params.node.setDataValue(vColumnName, newValue);
                            vColumnName = "matched";
                            newValue = 'F';
                            params.node.setDataValue(vColumnName, newValue);
                            vColumnName = "selected";
                            newValue = ' ';
                            params.node.setDataValue(vColumnName, newValue);
                            _this.refreshAll();
                        }
                        ;
                    },
                },
                "separator",
                {
                    name: "Double Counted",
                    //shortcut: "Alt + t",
                    checked: (vSelectedDoubleCounted == 1),
                    action: function () {
                        if (params.node) {
                            if ((vSelectedDoubleCounted == 0) || (!vSelectedDoubleCounted)) {
                                params.node.data.doubleCounted = 1;
                                if (params.node.data.indicator)
                                    params.node.data.indicator += '*';
                                else
                                    params.node.data.indicator = '*';
                                //console.log("indicator: " + params.node.data.indicator);
                                //console.log("doubleCounted: " + params.node.data.doubleCounted);
                            }
                            else {
                                params.node.data.doubleCounted = 0;
                                vTemp = /\*/gi;
                                var result_1 = params.node.data.indicator.replace(vTemp, "");
                                params.node.data.indicator = result_1;
                                //console.log("indicator: " + result);
                                //console.log("doubleCounted: " + params.node.data.indicator);
                            }
                            //console.log("indicator: " + params.node.data.indicator);
                            //console.log("doubleCounted: " + params.node.data.doubleCounted);
                            _this.refreshAll();
                        }
                    }
                    //icon: '<img src="../images/skills/mac.png"/>'
                },
                {
                    name: "No Print",
                    //shortcut: "Alt + P",
                    checked: (vSelectedNoPrint == 1),
                    action: function () {
                        if (params.node) {
                            if ((vSelectedNoPrint == 0) || (!vSelectedNoPrint)) {
                                params.node.data.noPrint = 1;
                                if (params.node.data.indicator)
                                    params.node.data.indicator += '#';
                                else
                                    params.node.data.indicator = '#';
                            }
                            else {
                                params.node.data.noPrint = 0;
                                vTemp = /\#/gi;
                                var result_2 = params.node.data.indicator.replace(vTemp, "");
                                params.node.data.indicator = result_2;
                            }
                            _this.refreshAll();
                        }
                    }
                    //icon: '<img src="../images/skills/mac.png"/>'
                },
                "separator",
                {
                    name: "Edit Item",
                    //checked: true,
                    action: function () {
                        //console.log("Edit Item Selected");
                        // set focus on the first row
                        _this.selectRow(_this.selectedRowIndex, 2);
                    },
                },
                {
                    name: "Edit Footnotes",
                    //checked: true,
                    disabled: true,
                    action: function () {
                        //console.log("Edit Footnotes Selected");
                    },
                },
                "separator",
                {
                    name: "Add New Account",
                    //shortcut: "Alt + A",
                    action: function () {
                        console.log("Number of rows: " + _this.rowData.length);
                        var newItem = _this.createNewRowData();
                        _this.gridOptions.api.updateRowData({
                            add: [newItem],
                            addIndex: _this.selectedRowIndex + 1,
                        });
                        console.log("Number of rows: " + _this.rowData.length);
                        //console.log("ANC Selected");
                    },
                },
                "separator",
                {
                    name: "Flip Row Value",
                    //shortcut: "Alt + R",
                    action: function () {
                        if (params.node) {
                            for (var id in _this.gAmountNames) {
                                var vColumnName = _this.gAmountNames[id];
                                var newValue = -1 * (Number(params.node.data[vColumnName]));
                                params.node.setDataValue(vColumnName, newValue);
                            }
                        }
                    },
                },
                {
                    name: "Convert Cent to Dollars",
                    //shortcut: "Alt + D",
                    action: function () {
                        if (params.node) {
                            for (var id in _this.gAmountNames) {
                                var vColumnName = _this.gAmountNames[id];
                                var newValue = (Number(params.node.data[vColumnName])) / 100;
                                params.node.setDataValue(vColumnName, newValue);
                            }
                        }
                    }
                    //icon: '<img src="../images/skills/mac.png"/>'
                },
                {
                    name: "Convert Literal to Sentence Case",
                    //shortcut: "Alt + S",
                    action: function () {
                        if (params.node) {
                            params.node.data.literal = _this.sentenceCase(params.value);
                            _this.refreshAll();
                            //console.log(this.sentenceCase(params.value));
                        }
                    },
                },
                {
                    name: "Copy Literal from Left",
                    //shortcut: "Alt + S",
                    action: function () {
                        if (params.node) {
                            var vColumnName = "literal";
                            var newValue = _this._chartListService.selectedLiteral;
                            params.node.setDataValue(vColumnName, newValue);
                            vColumnName = "matched";
                            newValue = 'M';
                            params.node.setDataValue(vColumnName, newValue);
                            _this.refreshAll();
                        }
                    },
                },
            ];
            return result;
        };
        console.log('I am in docDetails constructor()!');
        // we pass an empty gridOptions in, so we can grab the api out
        this.gridOptions = {};
        this.returnColumnIDs().subscribe(function (val) {
            _this.gColID = val;
        });
        //this.createColumnDefs();        
    }
    DocumentDetailsComponent.prototype.ngAfterViewInit = function () {
        this.getFinancials('01', 'US');
    };
    // Called in html
    DocumentDetailsComponent.prototype.onGridReady = function (params) {
        this.gridColumnApi = params.columnApi;
        this.gridOptions.api.setColumnDefs(this.columnDefs);
        this.gridOptions.getRowStyle = this.getRowStyle;
        //setTimeout(function(){this.getRowStyle,0});
    };
    DocumentDetailsComponent.prototype.createColumnDefs = function () {
        var _this = this;
        console.log('I am in createColumnDefs()!');
        //this._loaderService.display(true);
        //console.log('Spinner On - columnDef');  
        if (this._docDetailsService.selectedDocID > 0) {
            //console.log('There is a numberOfColumns.DocID !');
            this.returnColumnIDs().subscribe(function (tempColumnIDsData) {
                _this.gColID = tempColumnIDsData;
                var numOfCols = tempColumnIDsData.length;
                //console.log('Number Of Columns: ' + numOfCols);
                _this.columnDefs = new Array();
                _this.columnDefs.push({
                    headerName: '',
                    field: 'selected',
                    hide: false,
                    suppressMenu: true,
                    width: 30,
                    cellStyle: _this.selectedCellColor,
                    onCellClicked: function (e) {
                        _this.refreshAll();
                        if (e.node.data.matched !== 'F') {
                            if ((e.node.data.amount) || (e.node.data.matched == 'T')) {
                                if ((e.node.data.compLiteral) || (e.node.data.matched == 'T')) {
                                    if (e.node.data.selected === "√")
                                        e.node.data.selected = ' ';
                                    else {
                                        e.node.data.selected = '√';
                                    }
                                }
                            }
                            _this.refreshAll();
                        }
                    },
                });
                _this.columnDefs.push({
                    hide: true,
                    headerName: '',
                    field: 'matched',
                    suppressMenu: true,
                    width: 30,
                });
                _this.columnDefs.push({
                    headerName: '',
                    field: 'indicator',
                    suppressMenu: true,
                    width: 30,
                    hide: false,
                });
                _this.columnDefs.push({
                    field: 'literal', headerName: 'Literal', width: 400, editable: true, hide: false,
                    filter: "text", filterParams: { filterOptions: _this.myOptions, applyButton: true, clearButton: true },
                    cellStyle: _this.changeCellColor,
                });
                _this.columnDefs.push({
                    field: 'doubleCounted', headerName: 'DoubleCounted', hide: true,
                });
                _this.columnDefs.push({
                    field: 'noPrint', headerName: 'NoPrint', hide: true,
                });
                _this.columnDefs.push({
                    suppressMenu: true,
                    field: 'valueOrder', headerName: 'ValueOrder', hide: true,
                });
                _this.columnDefs.push({
                    field: 'wellsLiteral', headerName: 'Wells Literal', hide: true,
                });
                _this.columnDefs.push({
                    field: 'wellsMapcode', headerName: 'Wells Mapcode', hide: true,
                });
                _this.columnDefs.push({
                    field: 'wellsOrderlink', headerName: 'Wells Orderlink', hide: true,
                });
                _this.columnDefs.push({
                    field: 'compLiteral', headerName: 'Company Literal', hide: true,
                });
                _this.columnDefs.push({
                    field: 'mapcode', headerName: 'Mapcode', hide: true,
                });
                _this.columnDefs.push({
                    field: 'orderlink', headerName: 'OrderLink', hide: true,
                });
                _this.columnDefs.push({
                    field: 'amount', headerName: 'amount', hide: true,
                });
                for (var i = 0; i < numOfCols; i++) {
                    //console.log('Inside the for loop - field: ' + tempColumnIDsData[i].COLUMNID);
                    _this.columnDefs.push({
                        //colId: 'amount'+tempColumnIDsData[i].COLUMNID,
                        field: 'amount' + tempColumnIDsData[i].COLUMNID,
                        headerName: 'Amount',
                        editable: true,
                        cellStyle: _this.changeCellColor,
                        /*
                        cellStyle: function(params) {
                            if (params.value < '0') {
                                return {'color': 'red'};
                            }
                        },
                        */
                        filter: 'number',
                        suppressMenu: true, width: 90,
                    });
                    _this.gAmountNames.push('amount' + tempColumnIDsData[i].COLUMNID);
                    //console.log('AMOUNTS: ' + this.gAmountNames[i]);
                }
                //this._loaderService.display(false);
                //console.log('Spinner Off - columnDef-selectedDocID>0');
            });
        }
        else {
            //this._loaderService.display(false);
            //console.log('Spinner Off - columnDef-selectedDocID<=0');    
        }
    };
    DocumentDetailsComponent.prototype.changeCellColor = function (params) {
        if (params.node.data) {
            if (params.node.data.matched === "T") {
                return { 'color': 'orange' };
            }
            else if (params.node.data.matched === "F") {
                return { 'color': 'red' };
            }
            else if ((params.node.data.matched === "I") || (params.node.data.matched === "M")) {
                return { 'color': 'blue' };
            }
            else if (params.node.data.matched === "P") {
                return { 'color': 'purple' };
            }
        }
    };
    DocumentDetailsComponent.prototype.selectedCellColor = function (params) {
        return { 'color': 'grey' };
    };
    /*
    
        private matchedCellRenderer(params) {
            params.color = "Orange";
            return params.value;
        }
    
        private percentCellRenderer(params) {
            const value = params.value;
            //console.log('params.value' + value);
            
            const eDivPercentBar = document.createElement('div');
            eDivPercentBar.className = 'div-percent-bar';
            eDivPercentBar.style.width = value + '%';
            if (value < 20) {
                eDivPercentBar.style.backgroundColor = 'red';
            } else if (value < 60) {
                eDivPercentBar.style.backgroundColor = '#ff9900';
            } else {
                eDivPercentBar.style.backgroundColor = '#00A000';
            }
        
            const eValue = document.createElement('div');
            eValue.className = 'div-percent-value';
            eValue.innerHTML = value + '%';
        
            const eOuterDiv = document.createElement('div');
            eOuterDiv.className = 'div-outer-div';
            eOuterDiv.appendChild(eValue);
            eOuterDiv.appendChild(eDivPercentBar);
        
            return eOuterDiv;
        }
    */
    DocumentDetailsComponent.prototype.getRowStyle = function (params) {
        var vSetGrey = 0;
        //console.log("inside getRowStyle --> Amount: " + params.data.amount);
        if (params.data) {
            if ((params.data.compLiteral === null) && (params.data.amount !== null)) {
                return { 'color': 'Red' };
            }
            //if ((params.data.amount === null)) { 
            //return {'color': 'Grey'}; // This needs to be reviewed!!!
            //}
            if (params.data.compLiteral && params.data.literal) {
                if ((params.data.compLiteral === params.data.literal)) {
                    if ((params.data.mapcode === params.data.wellsMapcode) && (params.data.orderlink === params.data.wellsOrderlink))
                        return { 'color': 'green' };
                    if ((params.data.mapcode !== params.data.wellsMapcode) || (params.data.orderlink !== params.data.wellsOrderlink))
                        return { 'color': 'purple' };
                }
                else {
                    if ((params.data.mapcode === params.data.wellsMapcode) && (params.data.orderlink === params.data.wellsOrderlink))
                        return { 'color': 'purple' };
                    if ((params.data.mapcode !== params.data.wellsMapcode) || (params.data.orderlink !== params.data.wellsOrderlink))
                        return { 'color': 'red' };
                }
            }
        }
    };
    ;
    DocumentDetailsComponent.prototype.returnRows = function () {
        //console.log('I am in docDetails returnRows()!');       
        return this._docDetailsService.getDocumentDetails();
    };
    DocumentDetailsComponent.prototype.returnColumnIDs = function () {
        //console.log('I am in docDetails returnColumnIDs()!');       
        return this._docDetailsService.getColumnIDs();
    };
    DocumentDetailsComponent.prototype.sortAndFilter = function (allOfTheData, sortModel, filterModel) {
        //console.log('I am in sortAndFilter()!');
        return this.sortData(sortModel, this.filterData(filterModel, allOfTheData));
    };
    DocumentDetailsComponent.prototype.processData = function (allOfTheData, aFormatID) {
        var realRowData = [];
        var myIndex;
        var vIndicator = "";
        for (var i = 0; i < allOfTheData.length; i++) {
            var colID = allOfTheData[i].COLUMNID;
            var vFieldName = "amount" + colID;
            // Remove dots from amounts only in European Format:
            if (aFormatID === 'EUR') {
                if (allOfTheData[i].AMOUNT) {
                    allOfTheData[i].AMOUNT = allOfTheData[i].AMOUNT.replace('.', '');
                    //console.log("Amount: " + allOfTheData[i].AMOUNT);
                }
            }
            if ((allOfTheData[i].DOUBLECOUNTED === 1) && (allOfTheData[i].NOPRINT === 1)) {
                vIndicator = "*#";
            }
            else if ((allOfTheData[i].DOUBLECOUNTED === 1) && (allOfTheData[i].NOPRINT === 0)) {
                vIndicator = "*";
            }
            else if ((allOfTheData[i].DOUBLECOUNTED === 0) && (allOfTheData[i].NOPRINT === 1)) {
                vIndicator = "#";
            }
            else {
                vIndicator = "";
            }
            //vIndicator = (allOfTheData[i].DOUBLECOUNTED === 1) ? "*" : "";
            //vIndicator = (allOfTheData[i].NOPRINT === 1) ? "#" : "";
            //let vElement = allOfTheData[i].ITEMNAME;
            if (i > 0) {
                /*
                let newArr = allOfTheData.filter(function(item){
                    return item.ITEMNAME === vElement;
                });
                    if (newArr.length > 0) {
                    console.log("item found: " + allOfTheData[i].ITEMNAME)
                    myIndex = realRowData.length-1;
                    realRowData[myIndex][vFieldName] = allOfTheData[i].AMOUNT;
                }
                */
                if (allOfTheData[i].ITEMNAME === allOfTheData[i - 1].ITEMNAME) {
                    myIndex = realRowData.length - 1;
                    realRowData[myIndex][vFieldName] = allOfTheData[i].AMOUNT;
                    realRowData[myIndex]['amount'] = realRowData[myIndex]['amount'] + allOfTheData[i].AMOUNT;
                }
                else {
                    realRowData.push((_a = {
                            wellsLiteral: allOfTheData[i].WELLSLITERAL,
                            noPrint: allOfTheData[i].NOPRINT,
                            indicator: vIndicator,
                            doubleCounted: allOfTheData[i].DOUBLECOUNTED,
                            matched: 'X',
                            compLiteral: allOfTheData[i].COMPLITERAL,
                            amount: allOfTheData[i].AMOUNT,
                            literal: allOfTheData[i].ITEMNAME,
                            mapcode: allOfTheData[i].MAPCODE,
                            orderlink: allOfTheData[i].ORDERLINK,
                            wellsMapcode: allOfTheData[i].WELLSMAPCODE,
                            wellsOrderlink: allOfTheData[i].WELLSORDERLINK
                        },
                        _a[vFieldName] = allOfTheData[i].AMOUNT,
                        _a.valueOrder = allOfTheData[i].VALUEORDER,
                        _a));
                }
            }
            else {
                realRowData.push((_b = {
                        wellsLiteral: allOfTheData[i].WELLSLITERAL,
                        noPrint: allOfTheData[i].NOPRINT,
                        indicator: vIndicator,
                        doubleCounted: allOfTheData[i].DOUBLECOUNTED,
                        matched: 'X',
                        compLiteral: allOfTheData[i].COMPLITERAL,
                        amount: allOfTheData[i].AMOUNT,
                        literal: allOfTheData[i].ITEMNAME,
                        mapcode: allOfTheData[i].MAPCODE,
                        orderlink: allOfTheData[i].ORDERLINK,
                        wellsMapcode: allOfTheData[i].WELLSMAPCODE,
                        wellsOrderlink: allOfTheData[i].WELLSORDERLINK
                    },
                    _b[vFieldName] = allOfTheData[i].AMOUNT,
                    _b.valueOrder = allOfTheData[i].VALUEORDER,
                    _b));
            }
        } // For loop
        //this.fitColumns(); this makes horizontal scroll bar visible in Windows
        realRowData.sort(function (a, b) {
            if (a.valueOrder === b.valueOrder)
                return 0;
            //if (a.valueOrder < b.valueOrder) return 1;
            if (a.valueOrder > b.valueOrder)
                return 1;
            return -1;
        });
        return realRowData;
        var _a, _b;
    };
    DocumentDetailsComponent.prototype.sortData = function (sortModel, data) {
        //console.log('I am in sortData()!');
        var sortPresent = sortModel && sortModel.length > 0;
        if (!sortPresent) {
            return data;
        }
        // do in memory sort of the data, across all the fields
        var resultOfSort = data.slice();
        resultOfSort.sort(function (a, b) {
            for (var _i = 0, sortModel_1 = sortModel; _i < sortModel_1.length; _i++) {
                var model = sortModel_1[_i];
                //console.log('SortModel = ' + model.colId);
                var sortColModel = model;
                var valueA = a[sortColModel.colId];
                var valueB = b[sortColModel.colId];
                // this filter didn't find a difference, move onto the next one
                if (valueA === valueB) {
                    continue;
                }
                var sortDirection = sortColModel.sort === 'asc' ? 1 : -1;
                if (valueA > valueB) {
                    return sortDirection;
                }
                else {
                    return sortDirection * -1;
                }
            }
            // no filters found a difference
            return 0;
        });
        return resultOfSort;
    };
    DocumentDetailsComponent.prototype.filterData = function (filterModel, data) {
        //console.log('I am in filterData()!');
        var filterPresent = filterModel && Object.keys(filterModel).length > 0;
        if (!filterPresent) {
            //console.log('No filter!');
            return data;
        }
        var resultOfFilter = [];
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var item = data_1[_i];
            if (filterModel.literal) {
                var cn = item.literal;
                var cnFilter = filterModel.literal.filter;
                if (filterModel.literal.type.toLowerCase() == 'contains') {
                    if (cn.toLowerCase().indexOf((cnFilter).toLowerCase()) < 0) {
                        //COMPANYNAME didn't match, so skip this record
                        continue;
                    }
                }
                else if (filterModel.literal.type.toLowerCase() == 'notcontains') {
                    if (cn.toLowerCase().indexOf((cnFilter).toLowerCase()) >= 0) {
                        //COMPANYNAME didn't match, so skip this record
                        continue;
                    }
                }
                else if (filterModel.literal.type.toLowerCase() == 'equals') {
                    //console.log(filterModel.literal.type);
                    if (cn.toLowerCase() != cnFilter.toLowerCase()) {
                        //COMPANYNAME didn't match, so skip this record
                        continue;
                    }
                }
                else if (filterModel.literal.type.toLowerCase() == 'notequal') {
                    //console.log(filterModel.literal.type);
                    //console.log(cnFilter.toLowerCase());
                    //console.log(cn.toLowerCase());
                    if (cn.toLowerCase() === cnFilter.toLowerCase()) {
                        //COMPANYNAME did match, so skip this record
                        continue;
                    }
                }
                else if (filterModel.literal.type.toLowerCase() == 'startswith') {
                    if (cn.toLowerCase().substr(0, (cnFilter.length)) != cnFilter.toLowerCase()) {
                        //COMPANYNAME didn't match, so skip this record
                        continue;
                    }
                }
                else if (filterModel.literal.type.toLowerCase() == 'endswith') {
                    if (cn.substr(cn.length - cnFilter.length, (cnFilter.length)).toLowerCase() != cnFilter.toLowerCase()) {
                        //DOCUMENTID didn't match, so skip this record
                        continue;
                    }
                }
                else {
                }
            }
            ////console.log(resultOfFilter);
            resultOfFilter.push(item);
        }
        return resultOfFilter;
    };
    /*
        // to test api query on AWS:
        getDetails() {
            //console.log('I am in getDocList()!');
            //this._demoService.getStatus().subscribe(
            this._docDetailsService.getDocumentDetails().subscribe(
            // the first argument is a function which runs on success
              data => { this.doc_list = data},
              // the second argument is a function which runs on error
              err => console.error(err),
              // the third argument is a function which runs on completion
              () => //console.log('done with getDocList()')
            );
        }
    */
    DocumentDetailsComponent.prototype.getDocID = function () {
        ////console.log('I am in getDocID() and docID is: ' + this._docDetailsService.getDocumentID().valueOf());
        return this._docDetailsService.selectedDocID;
    };
    DocumentDetailsComponent.prototype.getFormID = function () {
        ////console.log('I am in getFormID()!');
        return this._docDetailsService.selectedFormCode;
    };
    DocumentDetailsComponent.prototype.getColumnID = function () {
        ////console.log('I am in getColumnID() and columnID is: ' + this._docDetailsService.getColumnID().valueOf());
        return this._docDetailsService.selectedColumnID;
    };
    DocumentDetailsComponent.prototype.getCompName = function () {
        ////console.log('I am in getCompName()!');
        return this._docDetailsService.selectedCompanyName;
    };
    DocumentDetailsComponent.prototype.onRowClicked = function (event) {
        //let rowNode = this.gridOptions.api.getDisplayedRowAtIndex(0);
        //console.log('Clicked Row: ' + event.node.data.literal);
        this.selectedRowIndex = event.rowIndex;
        this.selectedNoPrint = event.node.data.noPrint;
        this.selectedDoubleCounted = event.node.data.doubleCounted;
        this.selectedLiteral = event.node.data.literal;
        //this.selectedOrderLink = event.node.data.orderlink;
        //this.selectedMapcode = event.node.data.mapcode;
        this._docDetailsService.setOrderlink(event.node.data.orderlink);
        this._docDetailsService.setMapcode(event.node.data.mapcode);
        this._docDetailsService.setSelectedLiteral(event.node.data.literal);
        this.gRowClicked = 1;
        this.findChartItemEvent.emit(null);
    };
    DocumentDetailsComponent.prototype.onRowSelected = function (event) {
        if (event.node.selected) {
            this.selectedRowIndex = event.rowIndex;
            this.selectedNoPrint = event.node.data.noPrint;
            this.selectedDoubleCounted = event.node.data.doubleCounted;
            this.selectedLiteral = event.node.data.literal;
            // gRowClicked determies how user selects a row: 1-RowClicked, 2-Space Bar, 0- treeView clicked.
            // 2 is the only case that findChartItemEvent gets called; because in other cases, we don't need to call it.
            // Side effect is that we cannot call findChartItemEvent using keyboard unless clicking on grid first. 
            if (this.gRowClicked === 2) {
                this._docDetailsService.setOrderlink(event.node.data.orderlink);
                this._docDetailsService.setMapcode(event.node.data.mapcode);
                this._docDetailsService.setSelectedLiteral(event.node.data.literal);
                this.findChartItemEvent.emit(null);
                //console.log('Selected Literal: ' + event.node.data.literal);
                //console.log('gRowClicked: ' + this.gRowClicked);
            }
            else if (this.gRowClicked === 1)
                this.gRowClicked = 2;
        }
    };
    DocumentDetailsComponent.prototype.getFinancials = function (aformID, aFormatID) {
        console.log('I am in DOCDETAILS.getFinancials()!');
        //Clear the grid first
        this.clearGrid();
        this._docDetailsService.setTitle(aformID);
        this._docDetailsService.setFormID(aformID);
        this.gSelectedChartCode = this._docDetailsService.selectedChartCode;
        this.treeEvent.emit(null);
        this.createColumnDefs();
        this.populateGrid(aFormatID);
        //Calls getDocumentHeaderList() in topPanelComponent:
        this.documentHeaderEvent.emit(null);
    };
    DocumentDetailsComponent.prototype.clearGrid = function () {
        var self = this;
        var emptyDataSource = {
            getRows: function (params) {
                params.successCallback([], 0);
            }
        };
        this.gridOptions.api.setDatasource(emptyDataSource);
    };
    DocumentDetailsComponent.prototype.populateGrid = function (aFormatID) {
        var _this = this;
        var populatedDataSource = {
            pageSize: 500,
            //paginationOverflowSize: 100,     
            getRows: function (params) {
                //console.log('I am in getRows()!');
                // Spinner on
                //this._loaderService.display(true);
                //console.log('Spinner On - getRows');
                if (_this._docDetailsService.selectedDocID > 0) {
                    //console.log('There is a DocID !');
                    _this.returnRows().subscribe(function (tempRowData) {
                        // assign the right amounts for each columnID and more ...
                        _this.rowData = _this.processData(tempRowData, aFormatID);
                        // take a slice of the total rows
                        var dataAfterSortingAndFiltering = _this.sortAndFilter(_this.rowData, params.sortModel, params.filterModel);
                        var rowsThisPage = dataAfterSortingAndFiltering.slice(params.startRow, params.endRow);
                        // if on or after the last page, work out the last row.
                        var lastRow = -1;
                        if (dataAfterSortingAndFiltering.length <= params.endRow) {
                            lastRow = dataAfterSortingAndFiltering.length;
                        }
                        //this._loaderService.display(false);
                        //console.log('Spinner Off - getRows-selectedDocID>0');
                        //call the success callback
                        params.successCallback(rowsThisPage, lastRow);
                        // set focus on the first row
                        _this.selectRow(0, 0);
                    });
                }
                else {
                    //this._loaderService.display(false);
                    //console.log('Spinner Off - getRows-selectedDocID<=0');    
                }
            }
        };
        this.gridOptions.api.setDatasource(populatedDataSource);
    };
    DocumentDetailsComponent.prototype.showLiteral = function (show) {
        ////console.log("show: " + show);
        this.gridColumnApi.setColumnVisible("literal", show);
    };
    DocumentDetailsComponent.prototype.fitColumns = function () {
        this.gridOptions.api.sizeColumnsToFit();
    };
    DocumentDetailsComponent.prototype.resetColumns = function () {
        this.gridColumnApi.resetColumnState();
    };
    DocumentDetailsComponent.prototype.selectRow = function (rowIndex, colIndex) {
        //console.log("selectedRow: " + rowIndex);
        var selectedCol = this.gridOptions.columnApi.getAllDisplayedColumns()[colIndex];
        // sets focus into the selected grid cell
        this.gridOptions.api.setFocusedCell(rowIndex, selectedCol);
        // scrolls to the selected row
        //this.gridOptions.api.ensureIndexVisible(rowIndex);
        // scrolls to the selected column
        //this. gridOptions.api.ensureColumnVisible(selectedCol);
        //let rowNode = this.gridOptions.api.getDisplayedRowAtIndex(rowIndex);
        //rowNode.setSelected(true);        
    };
    DocumentDetailsComponent.prototype.sentenceCase = function (str) {
        var l = str.length;
        if ((str === null) || (str === ''))
            return false;
        else
            str = str.toString();
        return str.substr(0, 1).toUpperCase() + str.substr(1, l - 1).toLowerCase();
        //return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    };
    DocumentDetailsComponent.prototype.refreshAll = function () {
        //console.log("Reffresh ALL!!!");
        var params = { force: true };
        this.gridOptions.api.refreshCells(params);
    };
    // Opens TreeViewMatchedDialog. HTML and TS files are in treeView-component:
    DocumentDetailsComponent.prototype.openDialog = function (params) {
        var _this = this;
        var vColumnName = "";
        var newValue = '';
        var settings = {
            disableClose: true
        };
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__treeView_component_treeViewMatchedDlg_component__["a" /* TreeViewMatchedDialog */], settings);
        dialogRef.afterClosed().subscribe(function (result) {
            //console.log(`Dialog result: ${result}`);
            //console.log("Dialog result:" + result);
            if (result === "ok") {
                var vFound = false;
                var vLiteral = void 0;
                vColumnName = "mapcode";
                var newValue_1 = _this._chartListService.selectedMapCode;
                params.node.setDataValue(vColumnName, newValue_1);
                vColumnName = "matched";
                newValue_1 = 'T';
                params.node.setDataValue(vColumnName, newValue_1);
                vColumnName = "selected";
                newValue_1 = '√';
                params.node.setDataValue(vColumnName, newValue_1);
                //console.log("Selected Literal:" + this._chartListService.selectedLiteral);
                //this.showAlert("You matched it with: " + this._chartListService.selectedLiteral);
            }
            _this.refreshAll();
        });
    };
    DocumentDetailsComponent.prototype.createNewRowData = function () {
        var newData = {
            //selected: '',
            //matched: '',
            noPrint: '',
            doubleCounted: '',
            indicator: '',
            amount: '',
            literal: '',
            valueOrder: 0,
        };
        return newData;
    };
    DocumentDetailsComponent.prototype.changeToEuroFormat = function () {
        //console.log('in changeToEuroFormat()!');   
        /*
        for (let i = 0; i < this.rowData.length; i++) {
            let colID = this.rowData[i].COLUMNID;
            let vFieldName = "amount" + colID;
            if (this.rowData[i].amount) {
                this.rowData[i][vFieldName] = this.rowData[i][vFieldName].replace('.', '');
                //this.rowData[i].amount.replace(/./g, '');
                console.log("Compare: " + this.rowData[i][vFieldName] + " vs " + this.rowData[i][vFieldName]);
            }
        }
        this.refreshAll();
        */
    };
    DocumentDetailsComponent.prototype.saveProcess = function () {
        //this.showAlert("This module is under costruction!");
        var _this = this;
        var vStatus = this._docDetailsService.getSelectedStatus();
        //console.log("dt.Status: " + vStatus.trim());
        switch (vStatus.trim()) {
            case "SHIP2PROD": {
                this._docDetailsService.getNumberOfPeriods('01').subscribe(function (bColumnIDsData) {
                    var bPeriods = bColumnIDsData.length;
                    //console.log("Number of Periods for BS: " + bPeriods);
                    if (bPeriods > 1) {
                        _this._docDetailsService.getNumberOfPeriods('02').subscribe(function (iColumnIDsData) {
                            var iPeriods = iColumnIDsData.length;
                            //console.log("Number of Periods for IS: " + iPeriods);
                            if (iPeriods > 1) {
                                _this._docDetailsService.getNumberOfPeriods('05').subscribe(function (cColumnIDsData) {
                                    var cPeriods = cColumnIDsData.length;
                                    //console.log("Number of Periods for CS: " + cPeriods);
                                    if (cPeriods > 1) {
                                        //this.showAlert("Saved as SHIPTOPROD!");
                                        _this.saveFinancials();
                                    }
                                    else {
                                        _this.openConfirmationDialog('Cash Flow');
                                    }
                                    ;
                                });
                            }
                            else {
                                _this.openConfirmationDialog('Income Statement');
                            }
                            ;
                        });
                    }
                    else {
                        _this.openConfirmationDialog('Balance Sheet');
                    }
                    ;
                });
                //let periods:number = this.checkNumberofColumns('01');
                break;
            }
            default: {
                this.saveFinancials();
                break;
            }
        }
    };
    DocumentDetailsComponent.prototype.openConfirmationDialog = function (aForm) {
        var _this = this;
        var settings = {
            disableClose: true
        };
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__dialogs_confirmationDlg__["a" /* ConfirmDialog */], settings);
        dialogRef.componentInstance.confirmMessage = "Number of Periods are less than two for " + aForm + ". Are you sure you want to save?";
        dialogRef.afterClosed().subscribe(function (result) {
            //console.log("Selected Stataus: " + this._docDetailsService.getSelectedStatus());
            //console.log("Result: " + result);
            if (result === 'ok') {
                _this.saveFinancials();
            }
            ;
        });
    };
    DocumentDetailsComponent.prototype.saveFinancials = function () {
        var _this = this;
        //this._loaderService.display(true);
        console.log('Spinner On - saveFinancials');
        var vStatus = this._docDetailsService.getSelectedStatus();
        var vFormCode = this._docDetailsService.selectedFormCode.getValue();
        var vChartCode = this._docDetailsService.selectedChartCode;
        var vMessage;
        var accountRecords = this.collectAccounts(vStatus, vFormCode);
        /*
            for (let i=0; i<accountRecords.length; i++) {
                
                console.log(
                    "docID: " + accountRecords[i].doc_id
                    + " status_code: " + accountRecords[i].status_code
                    + " form_code: " + accountRecords[i].form_code
                    + " comp_number: " + accountRecords[i].comp_number
                    + " comp_name: " + accountRecords[i].comp_name
                    + " valueOrder: " + accountRecords[i].value_order
                    + " columnID: " + accountRecords[i].column_id
                    + " amount: " + accountRecords[i].amount
                    + " doubleCounted: " + accountRecords[i].double_counted
                    + " noprint: " + accountRecords[i].no_print
                    + " literal: " + accountRecords[i].literal
                    + " orderlink: " + accountRecords[i].orderlink
                    + " mapdode: " + accountRecords[i].mapcode
                    
                );
            }
        */
        this._docDetailsService.saveDocumentDetails(accountRecords).subscribe(function (savedData) {
            //console.log('savedData: ' + savedData.message);
            if (savedData.message)
                vMessage = savedData.message;
        }, 
        // the second argument is a function which runs on error
        function (err) {
            console.log('Error in savedDFinancials! ' + err);
        }, 
        // the third argument is a function which runs on completion
        function () {
            console.log('DONE WITH saveFinancials() for chartCode: ' + vChartCode);
            if (!vMessage)
                //console.log("result: no data");
                vMessage = "Something went wrong and http.post request did not return any data!";
            _this.getFinancials(vFormCode, vChartCode);
            _this.refreshAll();
            _this.showAlert(vMessage);
        });
        //this._loaderService.display(false);
        console.log('Spinner Off - saveFinancials');
    };
    DocumentDetailsComponent.prototype.collectAccounts = function (aStatus, aFormCode) {
        this.refreshAll();
        var accountData = [];
        var vDocID = this._docDetailsService.selectedDocID;
        var vCompName = this._docDetailsService.selectedCompanyName;
        var vCompNumber = this._docDetailsService.selectedCompNumber;
        var columns = this.gColID;
        //let vCount = this.rowData.length;
        var vFieldName = "";
        //console.log("Collecting " + vCount + " accounts for Document ID: " + vDocID + " vColID: " + this.gColID.length);
        var i = 0;
        this.gridOptions.api.forEachNode(function (node) {
            //for (let i = 0; i < vCount; i++) {
            var vOrder = (parseInt(aFormCode) * 1500) + i;
            for (var j = 0; j < columns.length; j++) {
                vFieldName = "amount" + columns[j].COLUMNID;
                //console.log("vFieldName: " + vFieldName);                 
                //console.log("Amount: " + this.rowData[i][vFieldName]);                 
                //console.log("literal: " + this.rowData[i].literal);   
                if (!node.data.noPrint)
                    node.data.noPrint = 0;
                if (!node.data.doubleCounted)
                    node.data.doubleCounted = 0;
                if (!node.data.mapcode)
                    node.data.mapcode = -1;
                if (!node.data.orderlink)
                    node.data.orderlink = -1;
                if (!node.data[vFieldName])
                    node.data[vFieldName] = "";
                accountData.push({
                    doc_id: vDocID,
                    comp_name: vCompName,
                    comp_number: vCompNumber,
                    status_code: aStatus,
                    form_code: aFormCode,
                    value_order: vOrder,
                    column_id: columns[j].COLUMNID,
                    literal: node.data.literal,
                    amount: node.data[vFieldName],
                    no_print: node.data.noPrint,
                    double_counted: node.data.doubleCounted,
                    mapcode: node.data.mapcode,
                    orderlink: node.data.orderlink,
                });
            }
            i++;
        });
        return accountData;
    };
    DocumentDetailsComponent.prototype.showAlert = function (aMessage) {
        this.gMessage = aMessage;
        this.alertEvent.emit(null);
    };
    DocumentDetailsComponent.prototype.printData = function () {
        var rowData = [];
        this.gridOptions.api.forEachNode(function (node) {
            rowData.push(node.data);
        });
        console.log("Row Data:");
        console.log(rowData);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], DocumentDetailsComponent.prototype, "treeEvent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], DocumentDetailsComponent.prototype, "documentHeaderEvent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], DocumentDetailsComponent.prototype, "findChartItemEvent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], DocumentDetailsComponent.prototype, "alertEvent", void 0);
    DocumentDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'documentDetails',
            template: __webpack_require__("../../../../../src/app/documentDetails-component/documentDetails.component.html"),
            styles: [__webpack_require__("../../../../../src/app/css/app.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_1__document_details_service__["a" /* documentDetailsService */], __WEBPACK_IMPORTED_MODULE_3__shared_spinner_service__["a" /* SpinnerService */],
            __WEBPACK_IMPORTED_MODULE_2__chartList_component_chartList_service__["a" /* ChartListService */]])
    ], DocumentDetailsComponent);
    return DocumentDetailsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/documentDetails-component/panel-documentDetails.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-docdetails\">\n\n  <toolbar #toolbar \n    (financialsEvent)=\"docDetails.getFinancials(toolbar.gFormID, toolbar.gFormatID)\"\n    (saveEvent)=\"docDetails.saveProcess()\"\n    (euroFormtEvent)=\"docDetails.changeToEuroFormat()\"\n    (alertEvent)=\"alert.showAlert(toolbar.gMessage)\"\n    (treeEvent)=\"treeView.getChartIDList(toolbar.gToggle, toolbar.gSelectedChartCode)\" \n  ></toolbar>\n  <!-- (saveDataEvent)=\"COMPONENT_NAME.saveData()\" in case if you need to implement saveData in another component-->\n  \n  <alert #alert hidden></alert>\n      \n  <split-container>\n    <div class=\"leftDiv\" split-behaviour=\"fixed\" style=\"width: 30%; height: 100%;\">\n        <!--\n          should be used below in <treeView> in case of adding a feature to find a row by clicking on an item in treeView\n          (findGridRowEvent)=\"docDetails.scrollToRow(treeView.selectedMapcode, treeView.selectedOrderlink, 0)\" \n        -->\n        <treeView #treeView \n          (alertEvent)=\"alert.showAlert(treeView.gMessage)\"\n        ></treeView>\n    </div>\n\n    <div class=\"rightDiv\" split-behaviour=\"dynamic\" style=\"width: 70%; height: 100%; float: left\">\n        <topPanel #topPanel></topPanel>\n        <documentDetails #docDetails \n          (treeEvent)=\"treeView.getChartIDList(treeView.gToggle, docDetails.gSelectedChartCode)\" \n          (alertEvent)=\"alert.showAlert(docDetails.gMessage)\"\n          (documentHeaderEvent)=\"topPanel.getDocumentHeaderList(0)\"\n          (findChartItemEvent)=\"treeView.scrollToAccount()\" \n          ></documentDetails>   \n    </div>\n  </split-container>\n</div>\n\n                        \n"

/***/ }),

/***/ "../../../../../src/app/documentDetails-component/panel-documentDetails.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanelDocumentDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PanelDocumentDetailsComponent = /** @class */ (function () {
    function PanelDocumentDetailsComponent() {
    }
    PanelDocumentDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'panelDocDetails',
            template: __webpack_require__("../../../../../src/app/documentDetails-component/panel-documentDetails.component.html"),
            styles: [__webpack_require__("../../../../../src/app/css/app.component.scss")],
        })
    ], PanelDocumentDetailsComponent);
    return PanelDocumentDetailsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/documentList-component/document-list.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return documentListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__appsettings__ = __webpack_require__("../../../../../src/app/appsettings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 // this is necessary

var documentListService = /** @class */ (function () {
    function documentListService(http) {
        this.http = http;
    }
    documentListService.prototype.getDocumentList = function () {
        var endpoint = __WEBPACK_IMPORTED_MODULE_3__appsettings__["a" /* AppSettings */].DOC_LIST_API_ENDPOINT;
        return this.http.get(endpoint).map(function (res) { return res.json(); });
    };
    documentListService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], documentListService);
    return documentListService;
}());



/***/ }),

/***/ "../../../../../src/app/documentList-component/documentList.component.html":
/***/ (function(module, exports) {

module.exports = "<!--    \n<h4>Document list retreived from Aurora database located on AWS using an endpoint</h4>\n<ul>\n    <li *ngFor=\"let doc of doc_list\">\n        <input type=\"text\" name=\"cnBox\" [(ngModel)]=\"doc.COMPANYNAME\" size=\"50\">\n    </li>\n</ul>\n\n\n<div *ngFor=\"let doc of doc_list; let i=index\">  \n    {{i + 1}} - {{doc.COMPANYNAME}}\n</div>  \n-->\n\n<!---<h1>Simple ag-Grid Angular Example</h1>-->\n<ag-grid-angular style=\"width: 100%; height: 100%;\"\n    class=\"ag-theme-fresh\"\n    [gridOptions]=\"gridOptions\"\n    [domLayout]=\"autoheight\"\n    [enableColResize]=\"true\"\n    [rowData]=\"rowData\"\n    [columnDefs]=\"columnDefs\"\n    rowModelType = \"infinite\"\n    [suppressCellSelection]=\"false\"\n    \n    (gridReady)=\"onGridReady($event)\"\n    (rowClicked)=\"onRowClicked($event)\"\n    (rowDoubleClicked)=\"onRowDuobleClicked($event)\"\n    (rowSelected)=\"onRowSelected($event)\"\n    (keypress)=\"onKeyPress($event)\"    \n    >\n</ag-grid-angular>\n"

/***/ }),

/***/ "../../../../../src/app/documentList-component/documentList.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__document_list_service__ = __webpack_require__("../../../../../src/app/documentList-component/document-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__documentDetails_component_document_details_service__ = __webpack_require__("../../../../../src/app/documentDetails-component/document-details.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_spinner_service__ = __webpack_require__("../../../../../src/app/shared/spinner.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import {CommonModule}  from '@angular/common'; 





var DocumentListComponent = /** @class */ (function () {
    function DocumentListComponent(_doclistService, _loaderService, _docDetailsService, router) {
        var _this = this;
        this._doclistService = _doclistService;
        this._loaderService = _loaderService;
        this._docDetailsService = _docDetailsService;
        this.router = router;
        this.alertEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.myOptions = ["contains", "notContains", "equals", "startsWith", "endsWith"];
        this.selectedIndex = 0;
        this.dataSource = {
            pageSize: 100,
            paginationOverflowSize: 100,
            getRows: function (params) {
                //console.log('I am in getRows()!');
                // Spinner on
                _this._loaderService.display(true);
                //console.log('Spinner On');
                _this.returnRows().subscribe(function (rowData) {
                    // take a slice of the total rows
                    var dataAfterSortingAndFiltering = _this.sortAndFilter(rowData, params.sortModel, params.filterModel);
                    var rowsThisPage = dataAfterSortingAndFiltering.slice(params.startRow, params.endRow);
                    // if on or after the last page, work out the last row.
                    var lastRow = -1;
                    if (dataAfterSortingAndFiltering.length <= params.endRow) {
                        lastRow = dataAfterSortingAndFiltering.length;
                    }
                    _this._loaderService.display(false);
                    //console.log('Spinner Off');
                    //call the success callback
                    params.successCallback(rowsThisPage, lastRow);
                    // set focus on the first row
                    _this.selectFirstRow();
                });
            }
        };
        //console.log('I am in constructor()!');
        this.gridOptions = {};
        this.createColumnDefs();
        // Clear localStorage:
        localStorage.clear();
        //console.log("localStorage cleared!!!");     
    }
    DocumentListComponent.prototype.createColumnDefs = function () {
        //console.log('I am in createColumnDefs()!');
        // It doesn't mater what percentage we assign to columns, but we need to make sure total is 100%, 
        //which is equal to the percentage in wrapper class (.panel-doclist) located in app.component.scss.
        this.columnDefs = [
            { headerName: "Doc ID", field: "DOCUMENTID", filter: 'number', minWidth: '5%',
                filterParams: { filterOptions: this.myOptions, applyButton: true, clearButton: true } },
            { headerName: "Comp #", field: "COMPNUMBER", filter: 'number', minWidth: '5%',
                filterParams: { filterOptions: this.myOptions, applyButton: true, clearButton: true } },
            { headerName: "Comp Name", field: "COMPANYNAME", minWidth: '30%',
                filter: "text", filterParams: { filterOptions: this.myOptions, applyButton: true, clearButton: true } },
            { headerName: "Date Processed", field: "DATEPROCESSED", filter: 'date', suppressMenu: true, minWidth: '20%' },
            { headerName: "Report Date", field: "REPORTDATE", filter: 'date', suppressMenu: true, minWidth: '20%' },
            { headerName: "Type", field: "REPORTTYPECODE", filter: "text", suppressMenu: true, minWidth: '10%' },
            { headerName: "Status", field: "MNEMONIC", minWidth: '10%', filter: "text", filterParams: { applyButton: true, clearButton: true } },
        ];
    };
    DocumentListComponent.prototype.returnRows = function () {
        //console.log('I am in docList returnRows()!');        
        return this._doclistService.getDocumentList();
    };
    DocumentListComponent.prototype.ngOnInit = function () {
        //console.log('I am in ngOnInit()!');
        //this.getDocist();
        // we pass an empty gridOptions in, so we can grab the api out
        this.gridOptions = {};
        this.gridOptions.enableServerSideSorting = true;
        this.gridOptions.enableServerSideFilter = true;
        this.gridOptions.rowSelection = "single";
        // Retreive rows from database and display them in grid:
        this.gridOptions.datasource = this.dataSource;
    };
    DocumentListComponent.prototype.onGridReady = function (params) {
        this.gridOptions.api.sizeColumnsToFit(); // This removes horizon scroll bar
    };
    DocumentListComponent.prototype.selectFirstRow = function () {
        // scrolls to the first row
        this.gridOptions.api.ensureIndexVisible(this.selectedIndex);
        // scrolls to the first column
        var firstCol = this.gridOptions.columnApi.getAllDisplayedColumns()[this.selectedIndex];
        this.gridOptions.api.ensureColumnVisible(firstCol);
        // sets focus into the first grid cell
        this.gridOptions.api.setFocusedCell(this.selectedIndex, firstCol);
        var rowNode = this.gridOptions.api.getDisplayedRowAtIndex(this.selectedIndex);
        rowNode.setSelected(true);
    };
    /* it shows horizon scroll bars in Windows
        private fitColumns() {
            this.gridOptions.api.sizeColumnsToFit();
        }
        */
    DocumentListComponent.prototype.sortAndFilter = function (allOfTheData, sortModel, filterModel) {
        //console.log('I am in sortAndFilter()!');
        return this.sortData(sortModel, this.filterData(filterModel, allOfTheData));
    };
    DocumentListComponent.prototype.sortData = function (sortModel, data) {
        //console.log('I am in sortData()!');
        var sortPresent = sortModel && sortModel.length > 0;
        if (!sortPresent) {
            return data;
        }
        // do in memory sort of the data, across all the fields
        var resultOfSort = data.slice();
        resultOfSort.sort(function (a, b) {
            for (var _i = 0, sortModel_1 = sortModel; _i < sortModel_1.length; _i++) {
                var model = sortModel_1[_i];
                //console.log('SortModel = ' + model.colId);
                var sortColModel = model;
                var valueA = a[sortColModel.colId];
                var valueB = b[sortColModel.colId];
                // this filter didn't find a difference, move onto the next one
                if (valueA == valueB) {
                    continue;
                }
                var sortDirection = sortColModel.sort === 'asc' ? 1 : -1;
                if (valueA > valueB) {
                    return sortDirection;
                }
                else {
                    return sortDirection * -1;
                }
            }
            // no filters found a difference
            return 0;
        });
        return resultOfSort;
    };
    DocumentListComponent.prototype.filterData = function (filterModel, data) {
        //console.log('I am in filterData()!');
        var filterPresent = filterModel && Object.keys(filterModel).length > 0;
        if (!filterPresent) {
            //console.log('No filter!');
            return data;
        }
        var resultOfFilter = [];
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var item = data_1[_i];
            if (filterModel.COMPANYNAME) {
                var cn = item.COMPANYNAME;
                var cnFilter = filterModel.COMPANYNAME.filter;
                if (filterModel.COMPANYNAME.type.toLowerCase() === 'contains') {
                    if (cn.toLowerCase().indexOf((cnFilter).toLowerCase()) < 0) {
                        //COMPANYNAME didn't match, so skip this record
                        continue;
                    }
                }
                else if (filterModel.COMPANYNAME.type.toLowerCase() === 'notcontains') {
                    if (cn.toLowerCase().indexOf((cnFilter).toLowerCase()) >= 0) {
                        //COMPANYNAME didn't match, so skip this record
                        continue;
                    }
                }
                else if (filterModel.COMPANYNAME.type.toLowerCase() === 'equals') {
                    ////console.log(filterModel.COMPANYNAME.type);
                    if (cn.toLowerCase() != cnFilter.toLowerCase()) {
                        //COMPANYNAME didn't match, so skip this record
                        continue;
                    }
                }
                else if (filterModel.COMPANYNAME.type.toLowerCase() === 'notequal') {
                    ////console.log(filterModel.COMPANYNAME.type);
                    ////console.log(cnFilter.toLowerCase());
                    ////console.log(cn.toLowerCase());
                    if (cn.toLowerCase() === cnFilter.toLowerCase()) {
                        //COMPANYNAME did match, so skip this record
                        continue;
                    }
                }
                else if (filterModel.COMPANYNAME.type.toLowerCase() === 'startswith') {
                    if (cn.toLowerCase().substr(0, (cnFilter.length)) != cnFilter.toLowerCase()) {
                        //COMPANYNAME didn't match, so skip this record
                        continue;
                    }
                }
                else if (filterModel.COMPANYNAME.type.toLowerCase() === 'endswith') {
                    if (cn.substr(cn.length - cnFilter.length, (cnFilter.length)).toLowerCase() != cnFilter.toLowerCase()) {
                        //DOCUMENTID didn't match, so skip this record
                        continue;
                    }
                }
                else {
                }
            }
            if (filterModel.COMPNUMBER) {
                var doc = item.COMPNUMBER;
                var docFilter = filterModel.COMPNUMBER.filter;
                if (filterModel.COMPNUMBER.type.toLowerCase() == 'contains') {
                    if ((doc.toString()).toLowerCase().indexOf((docFilter.toString()).toLowerCase()) < 0) {
                        //DOCUMENTID didn't match, so skip this record
                        continue;
                    }
                }
                else if (filterModel.COMPNUMBER.type.toLowerCase() == 'notcontains') {
                    if (doc.toString().toLowerCase().indexOf((docFilter.toString()).toLowerCase()) >= 0) {
                        //DOCUMENTID didn't match, so skip this record
                        continue;
                    }
                }
                else if (filterModel.COMPNUMBER.type.toLowerCase() == 'equals') {
                    ////console.log(filterModel.COMPNUMBER.type);
                    ////console.log(docFilter);
                    ////console.log(doc);
                    if (doc != docFilter) {
                        //DOCUMENTID didn't match, so skip this record
                        continue;
                    }
                }
                else if (filterModel.COMPNUMBER.type.toLowerCase() == 'notequal') {
                    if (doc === docFilter) {
                        //DOCUMENTID did match, so skip this record
                        continue;
                    }
                }
                else if (filterModel.COMPNUMBER.type.toLowerCase() == 'startswith') {
                    if (doc.toString().substr(0, (docFilter.toString().length)) != docFilter.toString()) {
                        //DOCUMENTID didn't match, so skip this record
                        continue;
                    }
                }
                else if (filterModel.COMPNUMBER.type.toLowerCase() == 'endswith') {
                    ////console.log(filterModel.DOCUMENTID.type);
                    ////console.log(docFilter);
                    ////console.log(doc);
                    ////console.log(doc.toString().substr(doc.toString().length-docFilter.toString().length,(docFilter.toString().length)));
                    if (doc.toString().substr(doc.toString().length - docFilter.toString().length, (docFilter.toString().length)) != docFilter.toString()) {
                        //DOCUMENTID didn't match, so skip this record
                        continue;
                    }
                }
                else {
                }
            }
            if (filterModel.DOCUMENTID) {
                var doc = item.DOCUMENTID;
                var docFilter = filterModel.DOCUMENTID.filter;
                if (filterModel.DOCUMENTID.type.toLowerCase() == 'contains') {
                    if ((doc.toString()).toLowerCase().indexOf((docFilter.toString()).toLowerCase()) < 0) {
                        //DOCUMENTID didn't match, so skip this record
                        continue;
                    }
                }
                else if (filterModel.DOCUMENTID.type.toLowerCase() == 'notcontains') {
                    if (doc.toString().toLowerCase().indexOf((docFilter.toString()).toLowerCase()) >= 0) {
                        //DOCUMENTID didn't match, so skip this record
                        continue;
                    }
                }
                else if (filterModel.DOCUMENTID.type.toLowerCase() == 'equals') {
                    ////console.log(filterModel.DOCUMENTID.type);
                    ////console.log(docFilter);
                    ////console.log(doc);
                    if (doc != docFilter) {
                        //DOCUMENTID didn't match, so skip this record
                        continue;
                    }
                }
                else if (filterModel.DOCUMENTID.type.toLowerCase() == 'notequal') {
                    if (doc === docFilter) {
                        //DOCUMENTID did match, so skip this record
                        continue;
                    }
                }
                else if (filterModel.DOCUMENTID.type.toLowerCase() == 'startswith') {
                    if (doc.toString().substr(0, (docFilter.toString().length)) != docFilter.toString()) {
                        //DOCUMENTID didn't match, so skip this record
                        continue;
                    }
                }
                else if (filterModel.DOCUMENTID.type.toLowerCase() == 'endswith') {
                    ////console.log(filterModel.DOCUMENTID.type);
                    ////console.log(docFilter);
                    ////console.log(doc);
                    ////console.log(doc.toString().substr(doc.toString().length-docFilter.toString().length,(docFilter.toString().length)));
                    if (doc.toString().substr(doc.toString().length - docFilter.toString().length, (docFilter.toString().length)) != docFilter.toString()) {
                        //DOCUMENTID didn't match, so skip this record
                        continue;
                    }
                }
                else {
                }
            }
            if (filterModel.MNEMONIC) {
                //if (filterModel.DESCRIPTION.filterType.toLowerCase() == 'contains') && 
                if (item.MNEMONIC.toUpperCase().indexOf((filterModel.MNEMONIC.filter).toUpperCase()) < 0) {
                    //DESCRIPTION didn't match, so skip this record
                    continue;
                }
            }
            ////console.log(resultOfFilter);
            resultOfFilter.push(item);
        }
        return resultOfFilter;
    };
    /*
        // to test api query on AWS:
        getDocist() {
            //console.log('I am in getDocList()!');
            //this._demoService.getStatus().subscribe(
            this._doclistService.getDocumentList().subscribe(
                // the first argument is a function which runs on success
              data => { this.doc_list = data},
              // the second argument is a function which runs on error
              err => console.error(err),
              // the third argument is a function which runs on completion
              () => //console.log('done with getDocList()')
            );
        }
    */
    DocumentListComponent.prototype.onRowClicked = function (event) {
        //console.log('onRowClicked type: ' + event.node.data.REPORTTYPECODE);
        //this._docDetailsService.setDocumentDetails(event.node.data.DOCUMENTID, 
        //'01', event.node.data.COMPANYNAME, event.node.data.COMPNUMBER, 1, event.node.data.REPORTTYPECODE);
    };
    DocumentListComponent.prototype.onRowDuobleClicked = function (event) {
        //let rowNode = this.gridOptions.api.getDisplayedRowAtIndex(0);
        ////console.log('onRowClicked ' + rowNode.data.DESCRIPTION);
        //console.log('Double Clicked Company: ' + event.node.data.COMPANYNAME);
        //this._docDetailsService.setDocumentDetails(event.node.data.DOCUMENTID, 
        //'01', event.node.data.COMPANYNAME, event.node.data.COMPNUMBER, 1, event.node.data.REPORTTYPECODE);
        if (this._docDetailsService.selectedChartCode)
            this.router.navigate(['/details']);
        else {
            //console.log('No chart code found!')
            this.gMessage = "Couldn't find a chart code for this company!";
            this.alertEvent.emit(null);
        }
    };
    DocumentListComponent.prototype.onRowSelected = function (event) {
        // In rowSelected event, firts a row gets selected and then teh previous row gets deselected,
        // so we need to make sure we are working with the selected node or (event.node.selected = true)
        if (event.node.selected) {
            this._docDetailsService.setDocumentDetails(event.node.data.DOCUMENTID, '01', event.node.data.COMPANYNAME, event.node.data.COMPNUMBER, 1, event.node.data.REPORTTYPECODE);
        }
        //console.log('onRowSelected type: ' + event.node.data.REPORTTYPECODE + ': ' + event.node.selected);
    };
    DocumentListComponent.prototype.onKeyPress = function (event) {
        //console.log('docList keyPress: : ' + event.keyCode);
        if (event.keyCode == 13) {
            this.router.navigate(['/details']);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], DocumentListComponent.prototype, "alertEvent", void 0);
    DocumentListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'documentList',
            template: __webpack_require__("../../../../../src/app/documentList-component/documentList.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__document_list_service__["a" /* documentListService */], __WEBPACK_IMPORTED_MODULE_3__shared_spinner_service__["a" /* SpinnerService */],
            __WEBPACK_IMPORTED_MODULE_2__documentDetails_component_document_details_service__["a" /* documentDetailsService */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* Router */]])
    ], DocumentListComponent);
    return DocumentListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/documentList-component/panel-documentList.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-doclist\">\n     <div class=\"panel-body\">\n        <!--<div class=\"cellContainer\" style=\"width: 100%; height: 100%;\" >-->\n            <documentList #docList\n                (alertEvent)=\"alert.showAlert(docList.gMessage)\"\n            ></documentList>\n            \n            <alert #alert hidden></alert>\n\n        <!--</div>-->\n     </div>\n</div>\n\n    \n"

/***/ }),

/***/ "../../../../../src/app/documentList-component/panel-documentList.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanelDocumentListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PanelDocumentListComponent = /** @class */ (function () {
    function PanelDocumentListComponent() {
    }
    PanelDocumentListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'panelDocList',
            template: __webpack_require__("../../../../../src/app/documentList-component/panel-documentList.component.html"),
            styles: [__webpack_require__("../../../../../src/app/css/app.component.scss")],
        })
    ], PanelDocumentListComponent);
    return PanelDocumentListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home-component/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n<head>\n</head>\n<body>\n\n    <div class=\"container\">\n\n        <header>\n            <h2>PTM Front-end</h2>\n        </header>\n                        \n              \n        <article>\n            <p>\n                The purpose of PTM is to match tabular financial data that \n                comes from Praedea to existing accounts in Wells. PTM first \n                matches the accounts programmatically based on the literal. \n                Then the user matches the remaining unmatched accounts or adds \n                new accounts. There are also various functions to allow the \n                user to manipulate the data to conform to Wells standards.\n            </p>\n            <h3>Documents:</h3>\n            <p> Shows a list of documents with their status in a grid. \n                In this page, you can sort and search data by clicking on column headers.\n            </p>\n            <h3>Details:</h3>\n            <p> You can select a document and then see the details of that document by selecting \n                Details in the menu bar. Details page shows a list of accounts for the selected \n                document with their amounts in a grid. \n            </p>\n        </article>\n\n         \n        <footer>Copyright &copy; mergent.com</footer>\n\n    </div>\n</body>\n\n\n</html>\n"

/***/ }),

/***/ "../../../../../src/app/home-component/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'home-page',
            template: __webpack_require__("../../../../../src/app/home-component/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/css/app.component.scss")],
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/list-component/list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".listbox-reports\n{\n    width: 200px;\n    height: 80px;\n    font-size: 12px;\n    line-height: 0.7;\n}\n   ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/list-component/list.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <button type=\"button\" \n        (click)=\"add()\"\n        class=\"btn btn-small\" \n        data-toggle=\"tooltip\" \n        title=\"Add\">\n        <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\" hint=\"Open\"></span>\n    </button>\n    <button type=\"button\" \n        (click)=\"delete()\"\n        class=\"btn btn-small\" \n        data-toggle=\"tooltip\" \n        title=\"Delete\">\n        <span class=\"glyphicon glyphicon-minus\" aria-hidden=\"true\" hint=\"Open\"></span>\n    </button>\n    <button type=\"button\" \n        (click)=\"showAlert('This module will be implemented soon!')\"\n        class=\"btn btn-small\" \n        data-toggle=\"tooltip\" \n        title=\"Save\">\n        <span class=\"glyphicon glyphicon-floppy-disk\" aria-hidden=\"true\"></span>\n    </button>\n    <button type=\"button\" \n        (click)=\"clear()\"\n        class=\"btn btn-small\" \n        data-toggle=\"tooltip\" \n        title=\"Clear\">\n        <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span>\n    </button>\n    <iui-listbox #lbReports [appRef]=\"applicationRef\"\n        [items]=\"items\" [allowDrag]=\"false\" [allowFocus]=\"true\"\n        [controlStyle]=\"listStyle\" [selectionMode]=\"selMode\" [virtualMode]=\"true\">\n        <ng-template let-item>\n            <span (click)=\"onClick(item)\">{{item.text}}</span>\n        </ng-template>\n    </iui-listbox>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/list-component/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_integralui_components_integralui_listbox__ = __webpack_require__("../../../../integralui/components/integralui.listbox.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_integralui_components_integralui_listbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_integralui_components_integralui_listbox__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_integralui_components_integralui_core__ = __webpack_require__("../../../../integralui/components/integralui.core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_integralui_components_integralui_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_integralui_components_integralui_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__properties_component_properties_service__ = __webpack_require__("../../../../../src/app/properties-component/properties.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { IntegralUIModule } from 'integralui/integralui.module';





var ListComponent = /** @class */ (function () {
    function ListComponent(_propertiesService) {
        this._propertiesService = _propertiesService;
        this.previousReportsEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.alertEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.items = [];
        this.gMessage = '';
        this.scrollType = 'vertical';
        this.selMode = __WEBPACK_IMPORTED_MODULE_2_integralui_components_integralui_core__["IntegralUISelectionMode"].One;
        this.listStyle = {
            general: {
                normal: 'listbox-reports'
            }
        };
        this.selectedItemText = "";
        this.items = [];
    }
    ListComponent.prototype.ngAfterViewInit = function () {
        this.getDocumentHeaderList();
    };
    ListComponent.prototype.getDocumentHeaderList = function () {
        var _this = this;
        //console.log('I am in getDocumentHeaderList()!');
        this._propertiesService.getDocumentHeaderList().subscribe(
        // the first argument is a function which runs on success
        function (data) {
            _this.setSavedReportsList(data);
        }, 
        // the second argument is a function which runs on error
        function (err) { return console.error(err); }, 
        // the third argument is a function which runs on completion
        function () { } //console.log('done with getWellsPeriodsList()')
        );
    };
    ListComponent.prototype.setSavedReportsList = function (savedReportList) {
        for (var i = 0; i < savedReportList.length; i++) {
            var vString = savedReportList[i].REPORTDATE + '::' + savedReportList[i].REPORTTYPE + '::'
                + savedReportList[i].CURRENCYCODE + '::' + savedReportList[i].MULTIPLIER;
            //console.log('setSavedReportsList => ' + vString);
            this._propertiesService.setSelectedPreviousReport(vString);
            // add reports to the list of saved reports
            this.add();
        }
    };
    ListComponent.prototype.addItems = function (aItem) {
        var item = {
            text: aItem,
        };
        this.items.push(item);
        /*
        for (let i = 1; i <= this.numItems; i++){
            let item: any = {
                text : 'Item ' + i.toString(),
                id: i
            };

            this.items.push(item);
        }
        */
    };
    ListComponent.prototype.add = function () {
        var vSelectedReport = this._propertiesService.getSelectedPreviousReport();
        //console.log(vSelectedReport + " will be added!");
        //this.clear();
        if (vSelectedReport !== "") {
            //console.log(vSelectedReport + " will be added!");
            this.addItems(vSelectedReport);
        }
        this.lbReports.updateLayout();
    };
    ListComponent.prototype.delete = function () {
        //console.log(this.selectedItem.text + " will be deleted!")
        this.lbReports.removeItem(this.selectedItem);
        this.lbReports.updateLayout();
    };
    ListComponent.prototype.clear = function () {
        this.lbReports.clearItems();
        this.lbReports.updateLayout();
    };
    ListComponent.prototype.onClick = function (aItem) {
        console.log('Clicked ...' + aItem.text);
        this.selectedItem = aItem;
        this.selectedItemText = aItem.text;
        this.previousReportsEvent.emit(null);
    };
    ListComponent.prototype.showAlert = function (aMessage) {
        this.gMessage = aMessage;
        this.alertEvent.emit(null);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('application', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"])
    ], ListComponent.prototype, "applicationRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('lbReports'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_integralui_components_integralui_listbox__["IntegralUIListBox"])
    ], ListComponent.prototype, "lbReports", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ListComponent.prototype, "previousReportsEvent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ListComponent.prototype, "alertEvent", void 0);
    ListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'reportList',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            template: __webpack_require__("../../../../../src/app/list-component/list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/list-component/list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__properties_component_properties_service__["a" /* PropertiesService */]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/list-component/mappedList.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n        <button type=\"button\" \n            (click)=\"add()\"\n            class=\"btn btn-small\" \n            data-toggle=\"tooltip\" \n            title=\"Add\">\n            <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\" hint=\"Open\"></span>\n        </button>\n        <button type=\"button\" \n            (click)=\"delete()\"\n            class=\"btn btn-small\" \n            data-toggle=\"tooltip\" \n            title=\"Delete\">\n            <span class=\"glyphicon glyphicon-minus\" aria-hidden=\"true\" hint=\"Open\"></span>\n        </button>\n        <button type=\"button\" \n            (click)=\"showAlert('This module will be implemented soon!')\"\n            class=\"btn btn-small\" \n            data-toggle=\"tooltip\" \n            title=\"Save\"\n            *ngIf=\"visible\"\n        >\n            <span class=\"glyphicon glyphicon-floppy-disk\" aria-hidden=\"true\"></span>\n        </button>\n        <button type=\"button\" \n            (click)=\"clear()\"\n            class=\"btn btn-small\" \n            data-toggle=\"tooltip\" \n            title=\"Clear\">\n            <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span>\n        </button>\n        <iui-listbox #lbMapped [appRef]=\"applicationRef\"\n            [items]=\"items\" [allowDrag]=\"false\" [allowFocus]=\"true\"\n            [controlStyle]=\"listStyle\" [selectionMode]=\"selMode\" [virtualMode]=\"true\">\n            <ng-template let-item>\n                <span (click)=\"onClick(item)\">{{item.text}}</span>\n            </ng-template>\n        </iui-listbox>\n    \n    </div>"

/***/ }),

/***/ "../../../../../src/app/list-component/mappedList.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".listbox-mapped-normal {\n  width: 350px;\n  height: 80px;\n  font-size: 12px;\n  line-height: 0.7; }\n\n.listbox-mapped-bordered {\n  width: 350px;\n  height: 80px;\n  font-size: 12px;\n  line-height: 0.7;\n  border-color: rebeccapurple; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/list-component/mappedList.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MappedListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_integralui_components_integralui_listbox__ = __webpack_require__("../../../../integralui/components/integralui.listbox.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_integralui_components_integralui_listbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_integralui_components_integralui_listbox__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_integralui_components_integralui_core__ = __webpack_require__("../../../../integralui/components/integralui.core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_integralui_components_integralui_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_integralui_components_integralui_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__properties_component_properties_service__ = __webpack_require__("../../../../../src/app/properties-component/properties.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { IntegralUIModule } from 'integralui/integralui.module';




var MappedListComponent = /** @class */ (function () {
    function MappedListComponent(_propertiesService) {
        this._propertiesService = _propertiesService;
        this.alertEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.items = [];
        this.gMessage = '';
        this.scrollType = 'vertical';
        this.selMode = __WEBPACK_IMPORTED_MODULE_2_integralui_components_integralui_core__["IntegralUISelectionMode"].One;
        this.listStyle = {
            general: {
                normal: 'listbox-mapped-normal',
                bordered: 'listbox-mapped-bordered'
            }
        };
        this.selectedItemText = "";
        this.numItems = 3;
        this.visible = false; // Hides save button. Just in case if we want to show it in certain scenarios.
        this.items = [];
    }
    MappedListComponent.prototype.ngAfterViewInit = function () {
        //this.add();
    };
    MappedListComponent.prototype.addItems = function (aItem) {
        var item = {
            text: aItem,
        };
        this.items.push(item);
        /*
        for (let i = 1; i <= this.numItems; i++){
            let item: any = {
                text : 'Item ' + i.toString(),
                id: i
            };

            this.items.push(item);
        }
        */
    };
    MappedListComponent.prototype.add = function () {
        var vSelectedWellsPeriod = this._propertiesService.getSelectedWellsPeriod();
        var vSelectedDocumentHeader = this._propertiesService.getSelectedDocumentHeader();
        var vSelectedReport = vSelectedWellsPeriod + " => " + vSelectedDocumentHeader;
        var vSelectedWellsReportDate = this._propertiesService.getSelectedWellsReportDate();
        var vSelectedHeaderReportDate = this._propertiesService.getSelectedHeaderReportDate();
        if ((vSelectedWellsPeriod !== "") && (vSelectedDocumentHeader !== "")) {
            if (vSelectedWellsReportDate === vSelectedHeaderReportDate) {
                //console.log(vSelectedWellsReportDate + vSelectedHeaderReportDate + " will be added to mapped list!");
                this.addItems(vSelectedReport);
            }
            else {
                this.showAlert("Wells Period date must be the same as Destination Period date!");
                this.listStyle.general = 'normal';
            }
        }
        else {
            this.showAlert("Please select a period from Wells and Destination Period to continue!");
        }
        this.lbMapped.updateLayout();
    };
    MappedListComponent.prototype.delete = function () {
        console.log(this.selectedItem.text + " was deleted!");
        this.lbMapped.removeItem(this.selectedItem);
        this.lbMapped.updateLayout();
    };
    MappedListComponent.prototype.clear = function () {
        this.lbMapped.clearItems();
        this.lbMapped.updateLayout();
    };
    MappedListComponent.prototype.onClick = function (aItem) {
        //console.log('Clicked ...' + aItem.text);
        this.selectedItem = aItem;
        this.selectedItemText = aItem.text;
    };
    MappedListComponent.prototype.showAlert = function (aMessage) {
        this.gMessage = aMessage;
        this.alertEvent.emit(null);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('application', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"])
    ], MappedListComponent.prototype, "applicationRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('lbMapped'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_integralui_components_integralui_listbox__["IntegralUIListBox"])
    ], MappedListComponent.prototype, "lbMapped", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], MappedListComponent.prototype, "alertEvent", void 0);
    MappedListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'mappedList',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            template: __webpack_require__("../../../../../src/app/list-component/mappedList.component.html"),
            styles: [__webpack_require__("../../../../../src/app/list-component/mappedList.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__properties_component_properties_service__["a" /* PropertiesService */]])
    ], MappedListComponent);
    return MappedListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["D" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["F" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["G" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["H" /* MatTooltipModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["D" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["F" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["G" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["H" /* MatTooltipModule */],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "../../../../../src/app/navbar-component/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "      <nav class=\"topnav\">\n        <div class=\"container-fluid\">\n          <div class=\"navbar-header\">\n              <a class=\"topnav a\" routerLink=\"/home\">Home</a>\n              <a class=\"navbar-brand\" routerLink=\"/documents\">Documents</a>\n              <a class=\"navbar-brand\" routerLink=\"/details\">Details</a>\n              <!-- Testing menue items ...\n              <a class=\"navbar-brand\" routerLink=\"/modal\">Modal</a>\n              <a class=\"navbar-brand\" routerLink=\"/dialog\">Dialog</a>\n              <a class=\"navbar-brand\" routerLink=\"/chart\">Chart</a>\n              <a class=\"navbar-brand\" routerLink=\"/contextMenu\">Context Menu</a>\n              <a class=\"navbar-brand\" routerLink=\"/treeView\">TreeView</a>\n              <a class=\"navbar-brand\" routerLink=\"/treeGrid\">TreeGrid</a>\n              -->\n          </div>          \n        </div>\n      </nav>\n\n      "

/***/ }),

/***/ "../../../../../src/app/navbar-component/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'navbar',
            template: __webpack_require__("../../../../../src/app/navbar-component/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/css/app.component.scss")],
        })
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/properties-component/properties.component.html":
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/css?family=Roboto:300,400,500\" rel=\"stylesheet\">\n\n<div >\n  <h1 mat-dialog-title>Report Properties</h1> \n  <!--<div mat-dialog-content class=\"dialog-container\"  [style.fontSize.px]=\"12\">-->\n  <div mat-dialog-content style=\"width: 505px; font-size: 12px;\">\n    <mat-form-field>\n      <mat-select placeholder=\"Report Type\" (change)=\"onReportTypeChange($event.value)\" [(ngModel)]=\"selectedType\">\n        <mat-option *ngFor=\"let r of repType_list\" [value]=\"r.FINANCIALREPORTTYPE + ': ' + r.DESCRIPTION\">\n          {{ r.FINANCIALREPORTTYPE }}: {{ r.DESCRIPTION }}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>  \n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n    <mat-form-field>\n      <mat-select placeholder=\"Auditor\" (change)=\"onAuditorsChange($event.value)\" [(ngModel)]=\"selectedAuditor\">\n        <mat-option *ngFor=\"let a of auditors_list\" [value]=\"a.AUDITORCODE + ': ' + a.DESCRIPTION\">\n          {{ a.AUDITORCODE }}: {{ a.DESCRIPTION }}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <br>\n\n    <mat-form-field>\n      <input \n        matInput [matDatepicker]=\"picker\" \n        placeholder=\"Report Date\" \n        (ngModelChange)=\"onReportDateChange($event)\" \n        [ngModel]=\"startDate\"\n      >\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n      <mat-datepicker #picker></mat-datepicker>\n    </mat-form-field>\n      \n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n    <mat-checkbox (change)=\"onConsolidatedChange($event)\" [(ngModel)]=\"consolidated\">Consolidated </mat-checkbox>\n\n    <br>\n    \n    <mat-form-field>\n      <mat-select placeholder=\"Multiplier\" (change)=\"onMultipliersChange($event.value)\" [(ngModel)]=\"selectedMultiplier\">\n          <mat-option *ngFor=\"let m of multipliers_list\" [value]=\"m.MULTIPLIERCODE + ': ' + m.DESCRIPTION\">\n              {{ m.MULTIPLIERCODE }}: {{ m.DESCRIPTION }}\n          </mat-option>\n        </mat-select>\n    </mat-form-field>\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n    <mat-checkbox (change)=\"onFYEChange($event)\" [(ngModel)]=\"fyeChange\">Fiscal Year End Change</mat-checkbox>\n\n    <br>\n    \n    <mat-form-field>\n      <mat-select placeholder=\"Currency\" (change)=\"onCurrencyChange($event.value)\" [(ngModel)]=\"selectedCurrency\">\n          <mat-option *ngFor=\"let c of currency_list\" [value]=\"c.CURRENCYCODE + ': ' + c.ISODESCRIPTION\">\n              {{ c.CURRENCYCODE }}: {{ c.ISODESCRIPTION }}\n          </mat-option>\n      </mat-select>\n    </mat-form-field>\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n    <mat-form-field>\n      <mat-select placeholder=\"Accounting Principle\" (change)=\"onPrincipleTypeChange($event.value)\" [(ngModel)]=\"selectedPrincipleTypeID\">\n        <mat-option *ngFor=\"let p of principleTypes_list\" [value]=\"p.PRINCIPLETYPEID + ': ' + p.DESCRIPTION\">\n          {{p.PRINCIPLETYPEID }}: {{ p.DESCRIPTION }}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <br>\n    \n    <mat-form-field>\n      <mat-select placeholder=\"Source Document\" (change)=\"onSourceTypeChange($event.value)\" [(ngModel)]=\"selectedSourceTypeID\">\n        <mat-option *ngFor=\"let s of sourceTypes_list\" [value]=\"s.SOURCETYPEID + ': ' + s.DESCRIPTION\">\n          {{ s.SOURCETYPEID }}: {{ s.DESCRIPTION }}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n    <mat-form-field>\n        <input matInput placeholder=\"Period Fiscal Year\"  (ngModelChange)=\"onPeriodFYChange($event)\" [(ngModel)]=\"selectedPeriodFY\">\n    </mat-form-field>\n\n    <br>\n    \n    <mat-form-field>\n      <mat-select placeholder=\"List of Previous Reports\" (change)=onPreviousReportChange($event.value)>\n        <mat-option \n          *ngFor=\"let pr of previousRepotsList\" \n          [value]=\"pr.REPORTDATE + '::' + pr.FINANCIALREPORTTYPE + '::' + pr.CURRENCYCODE + '::' + pr.MULTIPLIERCODE\">\n          {{ pr.REPORTDATE }}: {{ pr.FINANCIALREPORTTYPE}}: {{ pr.CURRENCYCODE }}: {{ pr.MULTIPLIERCODE }}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n    <mat-form-field>    \n        <input matInput placeholder=\"Text extracted from header table\" disabled>\n        <div>\n          <label> {{selectedExtractedText}} </label>\n        </div>    \n    </mat-form-field>\n\n    <br>\n    <mat-label>List of report properties saved</mat-label>\n    <reportList #reportList \n      (previousReportsEvent)=\"onPreviousReportChange(reportList.selectedItemText)\"\n      (alertEvent)=\"alert.showAlert(reportList.gMessage)\"\n    ></reportList>\n      \n    <br>\n    <mat-form-field>\n      <mat-select placeholder=\"Wells Period\" (change)=\"onWellsPeriodsChange($event.value)\">\n          <mat-option>None</mat-option>\n          <mat-option \n          *ngFor=\"let wp of wellsPeriodsList\"\n          [value]=\"wp.REPORTDATE + '::' + wp.FINANCIALREPORTTYPE + '::' + wp.CURRENCYCODE + '::' + wp.MULTIPLIERCODE\">\n          {{ wp.REPORTDATE }}: {{ wp.FINANCIALREPORTTYPE }}: {{ wp.CURRENCYCODE }}: {{ wp.MULTIPLIERCODE }}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>  \n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n    <mat-form-field>\n      <mat-select placeholder=\"Destination Period\" (change)=\"onDocumentHeaderChange($event.value)\">\n        <mat-option>None</mat-option>\n        <mat-option *ngFor=\"let h of documentHeaderList\" \n        [value]=\"h.REPORTDATE + '::' + h.REPORTTYPE + '::' + h.CURRENCYCODE + '::' + h.MULTIPLIER\">\n        {{ h.REPORTDATE }}: {{ h.REPORTTYPE }}: {{ h.CURRENCYCODE }}: {{ h.MULTIPLIER }}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>  \n\n    <br>\n    <alert #alert hidden></alert>\n    <mat-label>Mapped Wells Period</mat-label>\n    <mappedList #mappedList \n      (alertEvent)=\"alert.showAlert(mappedList.gMessage)\" \n    ></mappedList>\n\n  </div>\n\n  <br>\n\n</div>\n<div mat-dialog-actions align=\"bottom\">\n    <!--<button mat-button [mat-dialog-close]=\"\" cdkFocusInitial>OK</button>-->\n    <button mat-raised-button color=\"primary\" (click)=\"onCloseConfirm()\" cdkFocusInitial>OK</button>  \n    <button mat-raised-button color=\"primary\" (click)=\"onCloseCancel()\">Cancel</button>  \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/properties-component/properties.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertiesDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__properties_service__ = __webpack_require__("../../../../../src/app/properties-component/properties.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import {MatDialog, MatDialogConfig} from '@angular/material';


var PropertiesDialog = /** @class */ (function () {
    function PropertiesDialog(dialogRef, _propertiesService) {
        //console.log('I am in properties.constructor()!');
        //dialogRef.disableClose = true; // Disable click outside of angular material dialog
        this.dialogRef = dialogRef;
        this._propertiesService = _propertiesService;
        //public selectedPeriod: string = "";
        this.selectedExtractedText = "";
        this.selectedType = "";
        this.selectedAuditor = "";
        this.selectedMultiplier = "";
        this.selectedCurrency = "";
        this.startDate = "";
        this.selectedConsolidated = "0";
        this.selectedFYEChange = "0";
        this.selectedPeriodFY = "";
        this.selectedSourceTypeID = "";
        this.selectedPrincipleTypeID = "";
        this.selectedReportDate = "";
        this.selectedWellsReportDate = "";
        this.selectedHeaderReportDate = "";
        this.consolidated = false;
        this.fyeChange = false;
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
        this.selectedPrincipleTypeID = this.getSelectedPrincipleTypeID();
        this.consolidated = (this.selectedConsolidated === "1");
        this.fyeChange = (this.selectedFYEChange === "1");
        //Clear list boxes:
        this._propertiesService.setSelectedPreviousReport("");
        this._propertiesService.setSelectedWellsPeriod("");
        this._propertiesService.setSelectedDocumentHeader("");
    }
    PropertiesDialog.prototype.ngOnInit = function () {
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
    };
    PropertiesDialog.prototype.getRepTypesList = function () {
        var _this = this;
        //console.log('I am in getRepTypeList()!');
        this._propertiesService.getReportTypesList().subscribe(
        // the first argument is a function which runs on success
        function (data) { _this.repType_list = data; }, 
        // the second argument is a function which runs on error
        function (err) { return console.error(err); }, 
        // the third argument is a function which runs on completion
        //() => //console.log('done with getRepTypesList()')
        function () {
            var self = _this;
            var newArr = self.repType_list.filter(function (item) {
                return item.FINANCIALREPORTTYPE === self.selectedType;
            });
            if (newArr.length > 0) {
                self.selectedType = newArr[0].FINANCIALREPORTTYPE + ": " + newArr[0].DESCRIPTION;
                //console.log("SELECTEDTYPE = " + self.selectedType);
            }
        });
    };
    PropertiesDialog.prototype.getMultipliersList = function () {
        var _this = this;
        //console.log('I am in getMultipliersList()!');
        this._propertiesService.getMultipliersList().subscribe(
        // the first argument is a function which runs on success
        function (data) { _this.multipliers_list = data; }, 
        // the second argument is a function which runs on error
        function (err) { return console.error(err); }, 
        // the third argument is a function which runs on completion
        //() => {}//console.log('done with getMultipliersList()')
        function () {
            var self = _this;
            //console.log("SELECTED-MULTIPLIER=  " + self.selectedMultiplier);
            var newArr = self.multipliers_list.filter(function (item) {
                return item.MULTIPLIERCODE === self.selectedMultiplier;
            });
            if (newArr.length > 0) {
                self.selectedMultiplier = newArr[0].MULTIPLIERCODE + ": " + newArr[0].DESCRIPTION;
            }
        });
    };
    PropertiesDialog.prototype.getCurrencyList = function () {
        var _this = this;
        //console.log('I am in getCurrencyList()!');
        this._propertiesService.getCurrencyList().subscribe(
        // the first argument is a function which runs on success
        function (data) { _this.currency_list = data; }, 
        // the second argument is a function which runs on error
        function (err) { return console.error(err); }, 
        // the third argument is a function which runs on completion
        function () {
            var self = _this;
            //console.log("SELECTED-CURRENCY=  " + self.selectedCurrency);
            var newArr = self.currency_list.filter(function (item) {
                return item.CURRENCYCODE === self.selectedCurrency;
            });
            if (newArr.length > 0) {
                self.selectedCurrency = newArr[0].CURRENCYCODE + ": " + newArr[0].ISODESCRIPTION;
            }
        });
    };
    PropertiesDialog.prototype.getSourceTypesList = function () {
        var _this = this;
        //console.log('I am in getSourceTypesList()!');
        this._propertiesService.getSourceTypesList().subscribe(
        // the first argument is a function which runs on success
        function (data) { _this.sourceTypes_list = data; }, 
        // the second argument is a function which runs on error
        function (err) { return console.error(err); }, 
        // the third argument is a function which runs on completion
        //() => {}//console.log('done with getSourceTypesList()')
        function () {
            var self = _this;
            var newArr = self.sourceTypes_list.filter(function (item) {
                return item.SOURCETYPEID == self.selectedSourceTypeID;
            });
            if (newArr.length > 0) {
                self.selectedSourceTypeID = newArr[0].SOURCETYPEID + ": " + newArr[0].DESCRIPTION;
                // console.log("SELECTED-SOURCE-TYPEID-2=  " + self.selectedSourceTypeID);
            }
        });
    };
    PropertiesDialog.prototype.getAuditorsList = function () {
        var _this = this;
        //console.log('I am in getAuditorsList()!');
        this._propertiesService.getAuditorsList().subscribe(
        // the first argument is a function which runs on success
        function (data) { _this.auditors_list = data; }, 
        // the second argument is a function which runs on error
        function (err) { return console.error(err); }, 
        // the third argument is a function which runs on completion
        //() => {}//console.log('done with getAuditorsList()')
        function () {
            var self = _this;
            var newArr = self.auditors_list.filter(function (item) {
                return item.AUDITORCODE === self.selectedAuditor;
            });
            if (newArr.length > 0) {
                self.selectedAuditor = newArr[0].AUDITORCODE + ": " + newArr[0].DESCRIPTION;
                //console.log("SELECTEDAUDITOR=  " + self.selectedAuditor);
            }
        });
    };
    PropertiesDialog.prototype.getPrincipleTypesList = function () {
        var _this = this;
        //console.log('I am in getPrincipleTypesList()!');
        this._propertiesService.getPrincipleTypesList().subscribe(
        // the first argument is a function which runs on success
        function (data) { _this.principleTypes_list = data; }, 
        // the second argument is a function which runs on error
        function (err) { return console.error(err); }, 
        // the third argument is a function which runs on completion
        //() => {}//console.log('done with getPrincipleTypesList()')
        function () {
            var self = _this;
            //console.log("SELECTED-PRINCIPAL-TYPE-ID=  " + self.selectedPrincipleTypeID);
            var newArr = self.principleTypes_list.filter(function (item) {
                return item.PRINCIPLETYPEID == self.selectedPrincipleTypeID;
            });
            if (newArr.length > 0) {
                self.selectedPrincipleTypeID = newArr[0].PRINCIPLETYPEID + ": " + newArr[0].DESCRIPTION;
                //console.log("SELECTEDPRINCIPALTYPEID=  " + self.selectedPrincipleTypeID);
            }
        });
    };
    PropertiesDialog.prototype.getPreviousReportsList = function () {
        var _this = this;
        //console.log('I am in getPreviousReportsList()!');
        this._propertiesService.getPreviousReportsList().subscribe(
        // the first argument is a function which runs on success
        function (data) { _this.previousRepotsList = data; }, 
        // the second argument is a function which runs on error
        function (err) { return console.error(err); }, 
        // the third argument is a function which runs on completion
        function () { } //console.log('done with getPreviousReportsList()')
        );
    };
    PropertiesDialog.prototype.getWellsPeriodsList = function () {
        var _this = this;
        //console.log('I am in getWellsPeriodsList()!');
        this._propertiesService.getWellsPeriodsList().subscribe(
        // the first argument is a function which runs on success
        function (data) { _this.wellsPeriodsList = data; }, 
        // the second argument is a function which runs on error
        function (err) { return console.error(err); }, 
        // the third argument is a function which runs on completion
        function () { } //console.log('done with getWellsPeriodsList()')
        );
    };
    PropertiesDialog.prototype.getDocumentHeaderList = function () {
        var _this = this;
        //console.log('I am in getDocumentHeaderList()!');
        this._propertiesService.getDocumentHeaderList().subscribe(
        // the first argument is a function which runs on success
        function (data) {
            _this.documentHeaderList = data;
            //this.setSavedReportsList(data);
        }, 
        // the second argument is a function which runs on error
        function (err) { return console.error(err); }, 
        // the third argument is a function which runs on completion
        function () { } //console.log('done with getWellsPeriodsList()')
        );
    };
    PropertiesDialog.prototype.onAuditorsChange = function (newValue) {
        //console.log("PR.onAuditorsChange ... newValue **** " + newValue);
        var vString = newValue.split(":", 2);
        this.selectedAuditor = newValue;
        this._propertiesService.setSelectedAuditor(vString[0]); // this will be used in topPanel.component.ts for saving properties data
    };
    PropertiesDialog.prototype.onMultipliersChange = function (newValue) {
        //console.log("PR.onMultipliersChange ... newValue **** " + newValue);
        var vString = newValue.split(":", 2);
        this.selectedMultiplier = newValue;
        this._propertiesService.setSelectedMultiplier(vString[0]); // this will be used in topPanel.component.ts for saving properties data
    };
    PropertiesDialog.prototype.onReportTypeChange = function (newValue) {
        //console.log("PR.onReportTypeChange ... newValue **** " + newValue);
        var vString = newValue.split(":", 2);
        this.selectedType = newValue;
        this._propertiesService.setSelectedType(vString[0]); // this will be used in topPanel.component.ts for saving properties data
    };
    PropertiesDialog.prototype.onCurrencyChange = function (newValue) {
        //console.log("PR.onCurrencyChange ... newValue **** " + newValue);
        var vString = newValue.split(":", 2);
        this.selectedCurrency = newValue;
        this._propertiesService.setSelectedCurrency(vString[0]); // this will be used in topPanel.component.ts for saving properties data
    };
    PropertiesDialog.prototype.onPrincipleTypeChange = function (newValue) {
        //console.log("PR.onPrincipleTypeChange ... newValue **** " + newValue);
        var vString = newValue.split(":", 2);
        this.selectedPrincipleTypeID = newValue;
        this._propertiesService.setSelectedPrincipleTypeID(vString[0]); // this will be used in topPanel.component.ts for saving properties data
        //console.log("PR.onPrincipleTypeChange ... selectedPrincipleTypeID **** " + vString[0]);
    };
    PropertiesDialog.prototype.onSourceTypeChange = function (newValue) {
        //console.log("PR.onSourceTypeChange ... newValue **** " + newValue);
        var vString = newValue.split(":", 2);
        this.selectedSourceTypeID = newValue;
        this._propertiesService.setSelectedSourceTypeID(vString[0]); // this will be used in topPanel.component.ts for saving properties data
        //console.log("PR.onSourceTypeChange ... selectedPrincipleTypeID **** " + vString[0]);
    };
    PropertiesDialog.prototype.onConsolidatedChange = function (event) {
        //console.log("PR.onConsolidatedChange ... newValue **** " + event.checked);
        this.selectedConsolidated = (event.checked) ? "1" : "0";
        //this._propertiesService.setSelectedConsolidated(this.selectedConsolidated); // this will be used in topPanel.component.ts for saving properties data
        console.log("PR.onConsolidatedChange ... selectedConsolidated **** " + this.selectedConsolidated);
    };
    PropertiesDialog.prototype.onFYEChange = function (event) {
        //console.log("PR.onFYEChange ... newValue **** " + event.checked);
        this.selectedFYEChange = (event.checked) ? "1" : "0";
        //this._propertiesService.setSelectedFYEChange(this.selectedFYEChange); // this will be used in topPanel.component.ts for saving properties data
        console.log("PR.onFYEChange ... selectedFYEChange **** " + this.selectedFYEChange);
    };
    PropertiesDialog.prototype.onPeriodFYChange = function (newValue) {
        console.log("PR.onPeriodFYChange ... newValue **** " + newValue);
        this.selectedPeriodFY = newValue;
        this._propertiesService.setSelectedPeriodFY(newValue); // This will be used in topPanel.component.ts for saving properties data
        //console.log("PR.onPeriodFYChange ... selectedPeriodFY **** " + this.selectedPeriodFY);
    };
    PropertiesDialog.prototype.onReportDateChange = function (newValue) {
        console.log("PR.onReportDateChange ... New Date: " + newValue);
        this.selectedReportDate = (new Date(newValue)).toISOString();
        this._propertiesService.setSelectedReportDate(this.selectedReportDate); // his will be used in topPanel.component.ts for saving properties data
        console.log("PR.onReportDateChange ... selectedReportDate **** " + this.selectedReportDate);
    };
    PropertiesDialog.prototype.onWellsPeriodsChange = function (newValue) {
        //console.log("PR.onWellsPeriodsChange ... newValue **** " + newValue);
        var vString = newValue.split("::", 4);
        this.selectedWellsReportDate = vString[0];
        this._propertiesService.setSelectedWellsPeriod(newValue); // this will be used in mappedList.component.add()
        this._propertiesService.setSelectedWellsReportDate(this.selectedWellsReportDate); // this will be used in mappedList.component.add()
        //console.log("PR.onWellsPeriodsChange ... selectedWellsReportDate **** " + this.selectedWellsReportDate);
    };
    PropertiesDialog.prototype.onDocumentHeaderChange = function (newValue) {
        //console.log("PR.onDocumentHeaderChange ... newValue **** " + newValue);
        var vString = newValue.split("::", 4);
        this.selectedHeaderReportDate = vString[0];
        this._propertiesService.setSelectedDocumentHeader(newValue); // this will be used in mappedList.component.add()
        this._propertiesService.setSelectedHeaderReportDate(this.selectedHeaderReportDate); // this will be used in mappedList.component.add()
    };
    PropertiesDialog.prototype.onPreviousReportChange = function (newValue) {
        var vString = newValue.split("::", 4);
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
        }
        else if (this.selectedReportDate !== 'null') {
            var re = /-/gi;
            var newDateString = this.selectedReportDate.replace(re, '/');
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
    };
    PropertiesDialog.prototype.getSelectedExtractedText = function () {
        ////console.log("I'm in properties.component.ts.getSelectedExtractedText: " + 
        //this._propertiesService.getSelectedExtractedText());
        return this._propertiesService.getSelectedExtractedText();
    };
    PropertiesDialog.prototype.getSelectedType = function () {
        return this._propertiesService.getSelectedType();
    };
    PropertiesDialog.prototype.getSelectedAuditor = function () {
        return this._propertiesService.getSelectedAuditor();
    };
    PropertiesDialog.prototype.getSelectedMultiplier = function () {
        return this._propertiesService.getSelectedMultiplier();
    };
    PropertiesDialog.prototype.getSelectedCurrency = function () {
        return this._propertiesService.getSelectedCurrency();
    };
    PropertiesDialog.prototype.getSelectedReportDate = function () {
        return this._propertiesService.getSelectedReportDate();
        //return new FormControl((new Date()).toISOString());
    };
    PropertiesDialog.prototype.getSelectedConsolidated = function () {
        return this._propertiesService.getSelectedConsolidated();
    };
    PropertiesDialog.prototype.getSelectedFYEChange = function () {
        return this._propertiesService.getSelectedFYEChange();
    };
    PropertiesDialog.prototype.getSelectedPeriodFY = function () {
        return this._propertiesService.getSelectedPeriodFY();
    };
    PropertiesDialog.prototype.getSelectedSourceTypeID = function () {
        return this._propertiesService.getSelectedSourceTypeID();
    };
    PropertiesDialog.prototype.getSelectedPrincipleTypeID = function () {
        return this._propertiesService.getSelectedPrincipleTypeID();
    };
    PropertiesDialog.prototype.onCloseConfirm = function () {
        this.dialogRef.close('ok');
        this._propertiesService.setSelectedConsolidated(this.selectedConsolidated); // this will be used in topPanel.component.ts for saving properties data
        this._propertiesService.setSelectedFYEChange(this.selectedFYEChange); // this will be used in topPanel.component.ts for saving properties data
    };
    PropertiesDialog.prototype.onCloseCancel = function () {
        this.dialogRef.close('Cancel');
    };
    PropertiesDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'propertiesDialog',
            template: __webpack_require__("../../../../../src/app/properties-component/properties.component.html"),
            styles: [__webpack_require__("../../../../../src/app/css/app.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatDialogRef */], __WEBPACK_IMPORTED_MODULE_1__properties_service__["a" /* PropertiesService */]])
    ], PropertiesDialog);
    return PropertiesDialog;
}());



/***/ }),

/***/ "../../../../../src/app/properties-component/properties.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertiesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appsettings__ = __webpack_require__("../../../../../src/app/appsettings.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__documentDetails_component_document_details_service__ = __webpack_require__("../../../../../src/app/documentDetails-component/document-details.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { Observable } from 'rxjs/Observable';


 // this is necessary

var PropertiesService = /** @class */ (function () {
    function PropertiesService(_docDetailsService, http) {
        this._docDetailsService = _docDetailsService;
        this.http = http;
        this.selectedExtractedText = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]("");
        this.selectedType = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]("");
        this.selectedAuditor = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]("");
        this.selectedMultiplier = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]("");
        this.selectedCurrency = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]("");
        this.selectedReportDate = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]("");
        this.selectedSourceDate = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]("");
        this.selectedStartDate = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]("");
        this.selectedHeaderReportDate = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]("");
        this.selectedWellsReportDate = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]("");
        this.selectedConsolidated = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]("");
        this.selectedFYEChange = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]("");
        this.selectedPeriodFY = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]("");
        this.selectedSourceTypeID = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]("");
        this.selectedPrincipleTypeID = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]("");
        this.selectedPreviousReport = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]("");
        this.selectedWellsPeriod = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]("");
        this.selectedDocumentHeader = new __WEBPACK_IMPORTED_MODULE_5_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]("");
    }
    PropertiesService.prototype.getReportTypesList = function () {
        var endpoint = __WEBPACK_IMPORTED_MODULE_2__appsettings__["a" /* AppSettings */].REPORT_TYPES_LIST_API_ENDPOINT;
        return this.http.get(endpoint).map(function (res) { return res.json(); });
    };
    PropertiesService.prototype.getMultipliersList = function () {
        var endpoint = __WEBPACK_IMPORTED_MODULE_2__appsettings__["a" /* AppSettings */].MULTIPLIERS_LIST_API_ENDPOINT;
        return this.http.get(endpoint).map(function (res) { return res.json(); });
    };
    PropertiesService.prototype.getCurrencyList = function () {
        var endpoint = __WEBPACK_IMPORTED_MODULE_2__appsettings__["a" /* AppSettings */].CURRENCY_LIST_API_ENDPOINT;
        return this.http.get(endpoint).map(function (res) { return res.json(); });
    };
    PropertiesService.prototype.getSourceTypesList = function () {
        var endpoint = __WEBPACK_IMPORTED_MODULE_2__appsettings__["a" /* AppSettings */].SOURCE_TYPES_LIST_API_ENDPOINT;
        return this.http.get(endpoint).map(function (res) { return res.json(); });
    };
    PropertiesService.prototype.getAuditorsList = function () {
        var endpoint = __WEBPACK_IMPORTED_MODULE_2__appsettings__["a" /* AppSettings */].AUDITORS_LIST_API_ENDPOINT;
        return this.http.get(endpoint).map(function (res) { return res.json(); });
    };
    PropertiesService.prototype.getPrincipleTypesList = function () {
        var endpoint = __WEBPACK_IMPORTED_MODULE_2__appsettings__["a" /* AppSettings */].PRINCIPLE_TYPE_LIST_API_ENDPOINT;
        return this.http.get(endpoint).map(function (res) { return res.json(); });
    };
    PropertiesService.prototype.getPreviousReportsList = function () {
        var endpoint = __WEBPACK_IMPORTED_MODULE_2__appsettings__["a" /* AppSettings */].PPREVIOUS_REPORTS_LIST_API_ENDPOINT + "?COMPNUMBER=" +
            this._docDetailsService.selectedCompNumber;
        return this.http.get(endpoint).map(function (res) { return res.json(); });
    };
    PropertiesService.prototype.getWellsPeriodsList = function () {
        var endpoint = __WEBPACK_IMPORTED_MODULE_2__appsettings__["a" /* AppSettings */].WELLS_PERIODS_LIST_API_ENDPOINT
            + "?COMPNUMBER=" + this._docDetailsService.selectedCompNumber
            + "&REPORTGROUPCODE=" + this._docDetailsService.selectedReportTypeCode
            + "&FORMCODE=" + this._docDetailsService.selectedFormCode.getValue();
        return this.http.get(endpoint).map(function (res) { return res.json(); });
    };
    PropertiesService.prototype.getDocumentHeaderList = function () {
        ////console.log('Arrived in getDocumentHeaderList() !!! ');
        //console.log('propertiesService selectedDocumentID: ' + this._docDetailsService.selectedDocID);
        //console.log('propertiesService selectedFormCode: ' + this._docDetailsService.selectedFormCode.getValue());
        var endpoint = __WEBPACK_IMPORTED_MODULE_2__appsettings__["a" /* AppSettings */].DOCUMENT_HEADER_LIST_API_ENDPOINT
            + "?DOCUMENTID=" + this._docDetailsService.selectedDocID
            //+ "&FORM=" + this._docDetailsService.selectedFormCode.getValue(); //mySQL
            + "&FORMCODE=" + this._docDetailsService.selectedFormCode.getValue();
        ////console.log('getDocumentHeaderList endpoint: ' + endpoint);
        return this.http.get(endpoint).map(function (res) { return res.json(); });
    };
    PropertiesService.prototype.setSelectedExtractedText = function (newText) {
        //console.log("in properties.service.ts sets CAPTION to: " + newText);
        this.selectedExtractedText.next(newText);
    };
    PropertiesService.prototype.setSelectedType = function (newType) {
        this.selectedType.next(newType);
    };
    PropertiesService.prototype.setSelectedAuditor = function (newAuditor) {
        this.selectedAuditor.next(newAuditor);
    };
    PropertiesService.prototype.setSelectedMultiplier = function (newMultiplier) {
        //console.log("I'm in properties.service.ts setSelectedMultiplier: " + newMultiplier);
        this.selectedMultiplier.next(newMultiplier);
    };
    PropertiesService.prototype.setSelectedCurrency = function (newCurrency) {
        this.selectedCurrency.next(newCurrency);
    };
    PropertiesService.prototype.setSelectedReportDate = function (newDate) {
        //newDate = newDate.substr(0, 10);
        //console.log("I'm in properties.service.setSelectedReportDate: " + newDate);
        this.selectedReportDate.next(newDate);
    };
    PropertiesService.prototype.setSelectedSourceDate = function (newDate) {
        newDate = newDate.substr(0, 10);
        console.log("I'm in properties.service.setSelectedSourceDate: " + newDate);
        this.selectedSourceDate.next(newDate);
    };
    PropertiesService.prototype.setSelectedStartDate = function (newDate) {
        newDate = newDate.substr(0, 10);
        //console.log("I'm in properties.service.setSelectedStartDate: " + newDate);
        this.selectedStartDate.next(newDate);
    };
    PropertiesService.prototype.setSelectedWellsReportDate = function (newDate) {
        //console.log("I'm in properties.service.setSelectedWellsReportDate: " + newDate);
        this.selectedWellsReportDate.next(newDate);
    };
    PropertiesService.prototype.setSelectedHeaderReportDate = function (newDate) {
        //console.log("I'm in properties.service.setSelectedHeaderReportDate: " + newDate);
        this.selectedHeaderReportDate.next(newDate);
    };
    PropertiesService.prototype.setSelectedConsolidated = function (newChecked) {
        //console.log("I'm in properties.service.ts setSelectedConsolidated: " + newChecked);
        this.selectedConsolidated.next(newChecked);
    };
    PropertiesService.prototype.setSelectedFYEChange = function (newValue) {
        this.selectedFYEChange.next(newValue);
    };
    PropertiesService.prototype.setSelectedPeriodFY = function (newValue) {
        //console.log("I'm in properties.service.ts setSelectedPeriodFY: " + newValue);
        this.selectedPeriodFY.next(newValue);
    };
    PropertiesService.prototype.setSelectedSourceTypeID = function (newValue) {
        this.selectedSourceTypeID.next(newValue);
    };
    PropertiesService.prototype.setSelectedPrincipleTypeID = function (newValue) {
        this.selectedPrincipleTypeID.next(newValue);
    };
    PropertiesService.prototype.setSelectedPreviousReport = function (newValue) {
        //console.log("I'm in properties.service.ts setSelectedPreviousReport: " + newValue);
        this.selectedPreviousReport.next(newValue);
    };
    PropertiesService.prototype.setSelectedWellsPeriod = function (newValue) {
        //console.log("I'm in properties.service.ts setSelectedwellsPeriod: " + newValue);
        this.selectedWellsPeriod.next(newValue);
    };
    PropertiesService.prototype.setSelectedDocumentHeader = function (newValue) {
        //console.log("I'm in properties.service.ts setSelectedDocumentHeader: " + newValue);
        this.selectedDocumentHeader.next(newValue);
    };
    PropertiesService.prototype.getSelectedExtractedText = function () {
        ////console.log("I'm in properties.service.ts getSelectedExtractedText: " + this.selectedExtractedText.getValue());
        return this.selectedExtractedText.getValue();
    };
    PropertiesService.prototype.getSelectedType = function () {
        //console.log("I'm in properties.service.ts getSelectedType: " + this.selectedType.getValue());
        return this.selectedType.getValue();
    };
    PropertiesService.prototype.getSelectedAuditor = function () {
        //console.log("I'm in properties.service.ts getSelectedAuditor: " + this.selectedAuditor.getValue());
        return this.selectedAuditor.getValue();
    };
    PropertiesService.prototype.getSelectedMultiplier = function () {
        //console.log("I'm in properties.service.ts getSelectedMultiplier: " + this.selectedMultiplier.getValue());
        return this.selectedMultiplier.getValue();
    };
    PropertiesService.prototype.getSelectedCurrency = function () {
        //console.log("I'm in properties.service.ts getSelectedCurrency: " + this.getSelectedCurrency.getValue());
        return this.selectedCurrency.getValue();
    };
    PropertiesService.prototype.getSelectedReportDate = function () {
        //console.log("I'm in properties.service.ts getSelectedReportDate: " + this.selectedReportDate.getValue());
        return this.selectedReportDate.getValue();
    };
    PropertiesService.prototype.getSelectedStartDate = function () {
        //console.log("I'm in properties.service.ts getSelectedStartDate: " + this.selectedStartDate.getValue());
        return this.selectedStartDate.getValue();
    };
    PropertiesService.prototype.getSelectedSourceDate = function () {
        //console.log("I'm in properties.service.ts getSelectedSourceDate: " + this.selectedSourceDate.getValue());
        return this.selectedSourceDate.getValue();
    };
    PropertiesService.prototype.getSelectedWellsReportDate = function () {
        //console.log("I'm in properties.service.ts getSelectedWellsReportDate: " + this.selectedWellsReportDate.getValue());
        return this.selectedWellsReportDate.getValue();
    };
    PropertiesService.prototype.getSelectedHeaderReportDate = function () {
        //console.log("I'm in properties.service.ts getSelectedHeaderReportDate: " + this.selectedHeaderReportDate.getValue());
        return this.selectedHeaderReportDate.getValue();
    };
    PropertiesService.prototype.getSelectedConsolidated = function () {
        //console.log("I'm in properties.service.ts getSelectedConsolidated: " + this.selectedConsolidated.getValue());
        return this.selectedConsolidated.getValue();
    };
    PropertiesService.prototype.getSelectedFYEChange = function () {
        //console.log("I'm in properties.service.ts getSelectedFYEChange: " + this.selectedFYEChange.getValue());
        return this.selectedFYEChange.getValue();
    };
    PropertiesService.prototype.getSelectedPeriodFY = function () {
        //console.log("I'm in properties.service.ts getSelectedPeriodFY: " + this.selectedPeriodFY.getValue());
        return (this.selectedPeriodFY.getValue() !== 'undefined' ? this.selectedPeriodFY.getValue() : '');
        //return this.selectedPeriodFY.getValue();
    };
    PropertiesService.prototype.getSelectedSourceTypeID = function () {
        //console.log("I'm in properties.service.ts getSelectedSourceTypeID: " + this.selectedSourceTypeID.getValue());
        return this.selectedSourceTypeID.getValue();
    };
    PropertiesService.prototype.getSelectedPrincipleTypeID = function () {
        //console.log("I'm in properties.service.ts getSelectedPrincipleTypeID: " + this.selectedPrincipleTypeID.getValue());
        return this.selectedPrincipleTypeID.getValue();
    };
    PropertiesService.prototype.getSelectedPreviousReport = function () {
        //console.log("I'm in properties.service.ts getSelectedPreviousReport: " + this.selectedPreviousReport.getValue());
        return this.selectedPreviousReport.getValue();
    };
    PropertiesService.prototype.getSelectedWellsPeriod = function () {
        //console.log("I'm in properties.service.ts getSelectedWellsPeriod: " + this.selectedWellsPeriod.getValue());
        return this.selectedWellsPeriod.getValue();
    };
    PropertiesService.prototype.getSelectedDocumentHeader = function () {
        //console.log("I'm in properties.service.ts getSelectedDocumentHeader: " + this.selectedDocumentHeader.getValue());
        return this.selectedDocumentHeader.getValue();
    };
    //public getSelectedListName() {
    //    console.log("I'm in properties.service.ts getSelectedListName: " + this.selectedListName.getValue());
    //    return this.selectedListName.getValue();
    //}
    //public setSelectedListName(newValue: any) {
    //console.log("I'm in properties.service.ts setSelectedListName: " + newValue);
    //this.selectedListName.next(newValue);
    //}
    PropertiesService.prototype.saveDocumentHeader = function (documentHeader) {
        console.log("Saving " + documentHeader.length + " records for Document ID: " + documentHeader[0].doc_id);
        var path = __WEBPACK_IMPORTED_MODULE_2__appsettings__["a" /* AppSettings */].SAVE_HEADER_API_ENDPOINT;
        //if (this.selectedDocID > 0) {
        console.log("URL: " + path);
        return this.http.post(path, documentHeader).map(function (res) { return res.json(); });
        //}
        //else return null;
    };
    PropertiesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__documentDetails_component_document_details_service__["a" /* documentDetailsService */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], PropertiesService);
    return PropertiesService;
}());



/***/ }),

/***/ "../../../../../src/app/ptm-component/ptm.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n  <head>\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\n    <!-- jQuery library -->\n    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n    \n    <!-- Latest compiled JavaScript -->\n    <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script> \n  </head>\n    \n    <!-- Latest compiled and minified CSS \n    <link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\n    -->\n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n    \n  <body>\n    <div class=\"body\">\n      <navbar></navbar>    \n      <router-outlet></router-outlet>    \n    </div>  <!-- End of class body  -->              \n  </body>\n  \n</html>\n\n"

/***/ }),

/***/ "../../../../../src/app/ptm-component/ptm.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PTMComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PTMComponent = /** @class */ (function () {
    function PTMComponent() {
    }
    PTMComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ptm-frontend',
            template: __webpack_require__("../../../../../src/app/ptm-component/ptm.component.html"),
            styles: [__webpack_require__("../../../../../src/app/css/app.component.scss")],
        })
    ], PTMComponent);
    return PTMComponent;
}());



/***/ }),

/***/ "../../../../../src/app/red-component/red-component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".classGreen {\n    color: green;\n}\n\n.classRed {\n    color: red;\n}\n\n.classPink {\n    color: rgb(241, 36, 180);\n}\n\n.classGrey {\n    color: grey;\n}\n\n.classOrange {\n    color: Orange;\n}\n\n.classBlue {\n    color: blue;\n}\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/red-component/red-component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <span  [ngClass]=\"{classGreen:findAccount()}\">{{  params.value }}</span> -->\n<!-- style=\"color: red\">{{ params.value }} -->\n<span [ngSwitch]=getColor()>\n    <span *ngSwitchCase=\"'green'\" [ngClass]=\"{clasGreen:true}\" >{{params.value}}</span>\n    <span *ngSwitchCase=\"'red'\" [ngClass]=\"{classRed:true}\" >{{params.value}}</span>\n    <span *ngSwitchCase=\"'pink'\" [ngClass]=\"{classPink:true}\" >{{params.value}}</span>\n    <span *ngSwitchCase=\"'grey'\" [ngClass]=\"{classGrey:true}\" >{{params.value}}</span>\n    <span *ngSwitchCase=\"'orange'\" [ngClass]=\"{classOrange:true}\" >{{params.value}}</span>\n    <span *ngSwitchCase=\"'blue'\" [ngClass]=\"{classBlue:true}\" >{{params.value}}</span>\n    <span *ngSwitchDefault> {{ params.value}}</span>\n</span>\n"

/***/ }),

/***/ "../../../../../src/app/red-component/red-component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RedComponent = /** @class */ (function () {
    function RedComponent() {
        this.color = 'black';
    }
    RedComponent.prototype.agInit = function (params) {
        this.params = params;
        //this.account = params.value;
    };
    RedComponent.prototype.getColor = function () {
        this.account = this.params.value;
        console.log('ACCOUNT: ') + this.account;
        switch (this.account) {
            case "'ASSETS'": {
                this.color = 'green';
            }
            case "'Non-current asset'": {
                this.color = 'red';
            }
            default: {
                this.color = 'orange';
            }
        }
        return this.color;
    };
    RedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-red-component',
            template: __webpack_require__("../../../../../src/app/red-component/red-component.html"),
            styles: [__webpack_require__("../../../../../src/app/red-component/red-component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], RedComponent);
    return RedComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/spinner.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SpinnerService = /** @class */ (function () {
    function SpinnerService() {
        this.status = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](false);
    }
    SpinnerService.prototype.display = function (value) {
        this.status.next(value);
    };
    SpinnerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], SpinnerService);
    return SpinnerService;
}());



/***/ }),

/***/ "../../../../../src/app/splitter-component/splitBehaviour.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Position; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SplitBehaviour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SplitBehaviourDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Position = /** @class */ (function () {
    function Position(x, y) {
        this.x = x;
        this.y = y;
    }
    return Position;
}());

var SplitBehaviour;
(function (SplitBehaviour) {
    SplitBehaviour[SplitBehaviour["fixed"] = 0] = "fixed";
    SplitBehaviour[SplitBehaviour["dynamic"] = 1] = "dynamic";
})(SplitBehaviour || (SplitBehaviour = {}));
/**
 * Marks an element as content area inside a resizable split container.
 * The input value of the directive can either be 'fixed' or 'dynamic' and describes the way
 * the content area is expected to resize within the split container space.
 * - A fixed element is expected to have an explicitly defined size, which can be resized by the user through a split element
 * - A dynamic elment is expected to fill up the space next to fixed elements.
 *
 * Initially, the directive will set CSS flexbox attributes to stack them horizontally.
 * It also serves as a data provider to expose the element width of the hosting content area, which is most likely a div.
 * Last but not least, the directive takes care of resizing the host element.
 *
 * @example
 * <div style="width:100px" split-behaviour="fixed">
 * </div>
 **/
var SplitBehaviourDirective = /** @class */ (function () {
    function SplitBehaviourDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    Object.defineProperty(SplitBehaviourDirective.prototype, "behaviour", {
        get: function () {
            return SplitBehaviour[this._behaviour];
        },
        set: function (value) {
            this._behaviour = SplitBehaviour[value];
        },
        enumerable: true,
        configurable: true
    });
    SplitBehaviourDirective.prototype.resize = function (vector) {
        this.renderer.setElementStyle(this.el.nativeElement, 'width', vector.x + "px");
    };
    SplitBehaviourDirective.prototype.getElementWidth = function () {
        var paddingL = parseInt(window.getComputedStyle(this.el.nativeElement, null).getPropertyValue("padding-left"));
        var paddingR = parseInt(window.getComputedStyle(this.el.nativeElement, null).getPropertyValue("padding-right"));
        return this.el.nativeElement.offsetWidth - paddingL - paddingR;
    };
    SplitBehaviourDirective.prototype.ngOnInit = function () {
        if (this._behaviour.valueOf() == SplitBehaviour.fixed.valueOf()) {
            this.renderer.setElementStyle(this.el.nativeElement, 'flex', '0 0 auto');
        }
        else if (this._behaviour.valueOf() == SplitBehaviour.dynamic.valueOf()) {
            this.renderer.setElementStyle(this.el.nativeElement, 'flex', '1 1 auto');
        }
        this.renderer.setElementStyle(this.el.nativeElement, 'overflow', 'auto');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('split-behaviour'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], SplitBehaviourDirective.prototype, "behaviour", null);
    SplitBehaviourDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[split-behaviour]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
    ], SplitBehaviourDirective);
    return SplitBehaviourDirective;
}());



/***/ }),

/***/ "../../../../../src/app/splitter-component/splitContainer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplitContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__splitter_component__ = __webpack_require__("../../../../../src/app/splitter-component/splitter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__splitBehaviour_directive__ = __webpack_require__("../../../../../src/app/splitter-component/splitBehaviour.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Hosts resizable content areas divided by a draggable border (splitter).
 *
 * The split container defined flex attributes to allow the horizontal arrangement of child content areas.
 * On initialization, it will query all child elements in the light DOM annotated by the split-behaviour directive
 * and separate them by splitters.
 * As the splitBehaviour directive manages concrete content area resizing, dragging events of the splitter (positionChanged) are subscribed
 * and propagated to the directive.
 **/
var SplitContainerComponent = /** @class */ (function () {
    function SplitContainerComponent(resolver) {
        this.resolver = resolver;
    }
    SplitContainerComponent.prototype.ngAfterContentInit = function () {
        var splitterFactory = this.resolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_1__splitter_component__["a" /* SplitterComponent */]);
        var paneDirectives = this.panes.toArray();
        this.panesVcr.map(function (vcr, idx) {
            if (paneDirectives[idx].behaviour == __WEBPACK_IMPORTED_MODULE_2__splitBehaviour_directive__["b" /* SplitBehaviour */][__WEBPACK_IMPORTED_MODULE_2__splitBehaviour_directive__["b" /* SplitBehaviour */].fixed]) {
                var splitter = vcr.createComponent(splitterFactory);
                splitter.instance.splitBehaviour = paneDirectives[idx];
                splitter.instance.positionChanged.subscribe(function (pos) {
                    paneDirectives[idx].resize(pos);
                });
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChildren"])(__WEBPACK_IMPORTED_MODULE_2__splitBehaviour_directive__["c" /* SplitBehaviourDirective */], { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
    ], SplitContainerComponent.prototype, "panesVcr", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChildren"])(__WEBPACK_IMPORTED_MODULE_2__splitBehaviour_directive__["c" /* SplitBehaviourDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
    ], SplitContainerComponent.prototype, "panes", void 0);
    SplitContainerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'split-container',
            template: "\n        <div class=\"split-container\">\n            <ng-content></ng-content>\n        </div>\n    ",
            styles: ["\n        .split-container {\n            display: flex;\n            flex-direction: row;\n            flex-wrap: no-wrap;\n            flex-grow: 1;\n            height:100%;\n        }\n    "]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]])
    ], SplitContainerComponent);
    return SplitContainerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/splitter-component/splitter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplitterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__splitBehaviour_directive__ = __webpack_require__("../../../../../src/app/splitter-component/splitBehaviour.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * A horizontal, draggable divider element between resizable content areas within a split container.
 * This component and its creation is managed by a split container.
 **/
var SplitterComponent = /** @class */ (function () {
    function SplitterComponent() {
        this.positionChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.dragging = false;
    }
    Object.defineProperty(SplitterComponent.prototype, "splitBehaviour", {
        get: function () {
            return this._splitBehaviour;
        },
        set: function (value) {
            this._splitBehaviour = value;
        },
        enumerable: true,
        configurable: true
    });
    SplitterComponent.prototype.onMouseDown = function (e) {
        this.dragging = true;
        this.startX = e.clientX;
        this.startWidth = this.splitBehaviour.getElementWidth();
    };
    SplitterComponent.prototype.onMouseUp = function (e) {
        this.dragging = false;
    };
    SplitterComponent.prototype.onMouseMove = function (e) {
        if (this.dragging) {
            this.positionChanged.emit(new __WEBPACK_IMPORTED_MODULE_1__splitBehaviour_directive__["a" /* Position */](this.startWidth + e.clientX - this.startX, e.pageY));
        }
    };
    SplitterComponent.prototype.onMouseLeave = function (e) {
        this.dragging = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('splitter'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], SplitterComponent.prototype, "element", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], SplitterComponent.prototype, "positionChanged", void 0);
    SplitterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'splitter',
            template: "\n        <div #splitter class=\"splitter\" \n            (mousedown)=\"onMouseDown($event)\" \n            (document:mouseup)=\"onMouseUp($event)\" \n            (document:mousemove)=\"onMouseMove($event)\">\n        </div>\n    ",
            host: { 'style': 'position:relative' },
            styles: ["\n        .splitter {\n            flex: 0 0 auto;\n            width: 10px;\n            height:100%;\n            cursor: col-resize;\n\n\n            background-position:50% 50%;\n            background-repeat:no-repeat;\n\n            /* Needed for height:100% without having an explicit height given to the parent */\n            position:absolute;\n        }\n    "]
        }),
        __metadata("design:paramtypes", [])
    ], SplitterComponent);
    return SplitterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/toolBar-component/toolBar.component.html":
/***/ (function(module, exports) {

module.exports = " \n<h4 style=\"margin-left:5px; margin-top: -70px;\" > {{title}} </h4>\n\n<mat-form-field style=\"margin-left:5px\">\n  <mat-select placeholder=\"Chart Codes\" (change)=\"onChange($event.value)\" [(ngModel)]=\"selectedChart\">\n    <mat-option *ngFor=\"let c of chartCodesList\" \n      [value]=\"c.CHARTCODE + ': ' + c.DESCRIPTION\" >\n      {{ c.CHARTCODE }}: {{ c.DESCRIPTION}}\n    </mat-option>\n  </mat-select>\n</mat-form-field>  \n\n<div style=\"margin-left:5px;\" class=\"btn-group\">  \n\n  <button type=\"button\" \n    (click)=\"saveData()\"\n    class=\"btn btn-default\" \n    data-toggle=\"tooltip\" \n    title=\"Save\">\n    <span class=\"glyphicon glyphicon-floppy-disk\" aria-hidden=\"true\"></span>\n  </button>\n  <button type=\"button\" \n    (click)=\"showAlert('This module will be implemented soon!')\"\n    class=\"btn btn-default\" \n    data-toggle=\"tooltip\" \n    title=\"Error\">\n    <span class=\"glyphicon glyphicon-saved\" aria-hidden=\"true\"></span>\n  </button>\n  <button type=\"button\" \n    (click)=\"openConfirmationDialog('01', gFormatID)\"\n    class=\"btn btn-default\" \n    data-toggle=\"tooltip\" \n    title=\"Balance Sheet\">\n    <span class=\"glyphicon glyphicon-scale\" aria-hidden=\"true\"></span>\n  </button>\n  <button type=\"button\" \n    (click)=\"openConfirmationDialog('02', gFormatID)\"\n    class=\"btn btn-default\" \n    data-toggle=\"tooltip\" \n    title=\"Income Statement\">\n    <span class=\"glyphicon glyphicon-list-alt\" aria-hidden=\"true\"></span>\n  </button>\n  <button type=\"button\" \n    (click)=\"openConfirmationDialog('05', gFormatID)\"\n    class=\"btn btn-default\" \n    data-toggle=\"tooltip\" \n    title=\"Cash Flow\">\n    <span class=\"glyphicon glyphicon-usd\" aria-hidden=\"true\"></span>\n  </button>\n  <button type=\"button\" \n    (click)=europeanFormat(gFormID);\n    class=\"btn btn-default\" \n    data-toggle=\"tooltip\" \n    title=\"European Format\">\n    <span class=\"glyphicon glyphicon-eur\" aria-hidden=\"true\"></span>\n  </button>\n  <button type=\"button\" \n    (click)=\"showAlert('This module will be implemented soon!')\"\n    class=\"btn btn-default\" \n    data-toggle=\"tooltip\" \n    title=\"Adding Minus Sign\">\n    <span class=\"glyphicon glyphicon-minus\" aria-hidden=\"true\"></span>\n  </button>\n  <button type=\"button\" \n    (click)=\"showAlert('This module will be implemented soon!')\"\n    class=\"btn btn-default\" \n    data-toggle=\"tooltip\" \n    title=\"Merge Literal\">\n    <span class=\"glyphicon glyphicon-link\" aria-hidden=\"true\"></span>\n  </button>\n  <button type=\"button\" \n    (click)=\"showAlert('This module will be implemented soon!')\"\n    class=\"btn btn-default\" \n    data-toggle=\"tooltip\" \n    title=\"Reset\">\n    <span class=\"glyphicon glyphicon-repeat\" aria-hidden=\"true\"></span>\n  </button>\n  <button type=\"button\" \n    (click)=\"showTree()\"\n    class=\"btn btn-default\" \n    data-toggle=\"tooltip\" \n    title=\"Toggle Company Account View\">\n    <span class=\"glyphicon glyphicon-eye-open\" aria-hidden=\"true\"></span>\n  </button>\n\n</div> \n<!-- End of btn-group div -->      \n"

/***/ }),

/***/ "../../../../../src/app/toolBar-component/toolBar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__documentDetails_component_document_details_service__ = __webpack_require__("../../../../../src/app/documentDetails-component/document-details.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chartList_component_chartList_service__ = __webpack_require__("../../../../../src/app/chartList-component/chartList.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dialogs_saveDlg__ = __webpack_require__("../../../../../src/app/dialogs/saveDlg.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dialogs_confirmationDlg__ = __webpack_require__("../../../../../src/app/dialogs/confirmationDlg.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent(dialog, _chartListService, _docDetailsService) {
        this.dialog = dialog;
        this._chartListService = _chartListService;
        this._docDetailsService = _docDetailsService;
        this.financialsEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.saveEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.alertEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.treeEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.euroFormtEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.gFormID = '01';
        this.gFormatID = 'US';
        this.gMessage = '';
        this.title = '';
        this.gToggle = '1';
        //public gSelectedChartCode: string = AppSettings.CHART_CODE;
        this.gSelectedChartCode = "";
        this.selectedChart = "";
        //console.log('I am in toolbar.constructor()!');
        this.gSelectedChartCode = this._docDetailsService.selectedChartCode;
        //this.selectedChart = this._docDetailsService.selectedChartCode;
    }
    ToolbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        //console.log('I am in toolbar.ngOnInit()!');
        this._docDetailsService.selectedTitle.subscribe(function (val) {
            _this.title = val;
        });
        this.getChartCodesList();
    };
    ToolbarComponent.prototype.onChange = function (newValue) {
        var vString = newValue.split(":", 2);
        //console.log("newValue **** " + newValue);
        //console.log("vString **** " + vString);
        this.gSelectedChartCode = vString[0];
        //console.log("tb.SelectedChart: " + this.gSelectedChartCode);
        this._chartListService.setChartCode(this.gSelectedChartCode);
        this.treeEvent.emit(null);
    };
    ToolbarComponent.prototype.openConfirmationDialog = function (aFormID, aFormatID) {
        var _this = this;
        var settings = {
            disableClose: true
        };
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__dialogs_confirmationDlg__["a" /* ConfirmDialog */], settings);
        dialogRef.componentInstance.confirmMessage = "Have you saved your changes?";
        dialogRef.afterClosed().subscribe(function (result) {
            //console.log("Selected Stataus: " + this._docDetailsService.getSelectedStatus());
            //console.log("Result: " + result);
            if (result === 'ok') {
                _this.getFinancials(aFormID, aFormatID);
            }
            ;
        });
    };
    // Calls getFinancials() in docDetails.component.ts. 
    // Check panel-documentDetails.component.html for more edetails.
    ToolbarComponent.prototype.getFinancials = function (aFormID, aFormatID) {
        //console.log('In TOOLBAR.getFinancials()!');
        this.gFormID = aFormID;
        this.gFormatID = aFormatID;
        this.financialsEvent.emit(null);
    };
    // to load chart list:
    ToolbarComponent.prototype.getChartCodesList = function () {
        var _this = this;
        //console.log('I am in getChartList()!');
        this._chartListService.getChartCodes()
            .subscribe(
        // the first argument is a function which runs on success
        function (data) {
            _this.chartCodesList = data;
        }, 
        // the second argument is a function which runs on error
        function (err) { return console.error(err); }, 
        // the third argument is a function which runs on completion
        function () {
            var self = _this;
            var newArr = _this.chartCodesList.filter(function (item) {
                return item.CHARTCODE == self.gSelectedChartCode;
            });
            if (newArr.length > 0) {
                self.selectedChart = newArr[0].CHARTCODE + ": " + newArr[0].DESCRIPTION;
                //+ ': ' + this._docDetailsService.selectedReportTypeCode; 
            }
        });
    };
    ToolbarComponent.prototype.showAlert = function (aMessage) {
        //console.log('I am in TOOLBAR.showAlert() ....' + aMessage);
        this.gMessage = aMessage;
        this.alertEvent.emit(null);
    };
    ToolbarComponent.prototype.showTree = function () {
        //console.log('Started in TOOLBAR.showTree() ....' + this.gToggle);
        if (this.gToggle == '1') {
            this.gToggle = '2';
        }
        else {
            this.gToggle = '1';
        }
        //console.log('Changed to in TOOLBAR.showTree() ....' + this.gToggle);
        //this.gToggle = aToggle;
        this.treeEvent.emit(null);
    };
    ToolbarComponent.prototype.saveData = function () {
        //console.log('in SaveData!!!');
        this.openDialog();
    };
    ToolbarComponent.prototype.europeanFormat = function (aFormID) {
        console.log('in europeanFormat()!');
        this.gFormID = aFormID;
        if (this.gFormatID === 'US')
            this.gFormatID = 'EUR';
        else
            this.gFormatID = 'US';
        this.getFinancials(this.gFormID, this.gFormatID);
        //this.euroFormtEvent.emit(null);
    };
    ToolbarComponent.prototype.open = function () {
        //console.log('in Open ...!!!');
    };
    ToolbarComponent.prototype.openDialog = function () {
        var _this = this;
        var settings = {
            disableClose: true
        };
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__dialogs_saveDlg__["a" /* SaveDialog */], settings);
        dialogRef.afterClosed().subscribe(function (result) {
            //console.log("Selected Stataus: " + this._docDetailsService.getSelectedStatus());
            //console.log("Result: " + result);
            if (result === 'ok')
                _this.saveEvent.emit(null);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ToolbarComponent.prototype, "financialsEvent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ToolbarComponent.prototype, "saveEvent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ToolbarComponent.prototype, "alertEvent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ToolbarComponent.prototype, "treeEvent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ToolbarComponent.prototype, "euroFormtEvent", void 0);
    ToolbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'toolbar',
            template: __webpack_require__("../../../../../src/app/toolBar-component/toolBar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/css/app.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_material__["i" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_2__chartList_component_chartList_service__["a" /* ChartListService */], __WEBPACK_IMPORTED_MODULE_1__documentDetails_component_document_details_service__["a" /* documentDetailsService */]])
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/topPanel-component/topPanel.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"topPanel\">\n  <!--<span *ngFor=\"let h of documentHeaderList\">-->\n  <span>  \n     <!-- <div class=\"cellContainer\">-->\n      <!--<div class=\"headerContainer\">-->\n        <mat-form-field>\n          <mat-select placeholder=\"Header Periods\" (change)=\"onChange($event.value)\" [(ngModel)]=\"selectedPeriod\">\n          <mat-option *ngFor=\"let h of documentHeaderList; let i = index;\" \n              [value]=\"h.CAPTION + ' ' + h.REPORTDATE_TEXT + '::' + h.REPORTTYPE + '::' + h.AUDITOR \n                  + '::' + h.MULTIPLIER + '::' + h.CURRENCYCODE + '::' + h.REPORTDATE \n                  + '::' + h.CONSOLIDATED \n                  + '::' + h.FYECHANGE \n                  + '::' + h.PERIODFISCALYEAR \n                  + '::' + h.SOURCETYPEID + '::' + h.PRINCIPLETYPEID\n                  + '::' + h.PERIODSTARTDATE + '::' + h.SOURCEDATE\n                  + '::' + i\">\n              {{ h.REPORTDATE }}: {{ h.REPORTTYPE}}: {{ h.CURRENCYCODE }}\n            </mat-option>\n        </mat-select>\n      </mat-form-field>  \n\n      &nbsp;&nbsp;\n\n      <button type=\"button\" \n        (click)=\"openDialog()\"\n        class=\"btn btn-default\" \n        data-toggle=\"tooltip\" \n        title=\"Properties\">\n        <span class=\"glyphicon glyphicon-cog\" aria-hidden=\"true\" hint=\"Open\"></span>\n      </button>\n    <!--</div> <!- - End of headerContainer -->\n  </span>                                 \n</div> <!-- End of topPanel -->\n                        \n<!--\n\n      <option *ngFor=\"let h of documentHeaderList\" [value]=\"h.REPORTDATE_TEXT\">\n        {{ h.REPORTDATE_TEXT }}\n      </option>\n\n-->\n"

/***/ }),

/***/ "../../../../../src/app/topPanel-component/topPanel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__properties_component_properties_component__ = __webpack_require__("../../../../../src/app/properties-component/properties.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__properties_component_properties_service__ = __webpack_require__("../../../../../src/app/properties-component/properties.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__documentDetails_component_document_details_service__ = __webpack_require__("../../../../../src/app/documentDetails-component/document-details.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { AppSettings } from '../appsettings';



//import { FormControl } from '@angular/forms';
var TopPanelComponent = /** @class */ (function () {
    function TopPanelComponent(dialog, _propertiesService, _docDetailsService) {
        var _this = this;
        this.dialog = dialog;
        this._propertiesService = _propertiesService;
        this._docDetailsService = _docDetailsService;
        this.selectedPeriod = "";
        this.selectedExtractedText = "";
        this.selectedType = "";
        this.selectedAuditor = "";
        this.selectedMultiplier = "";
        this.selectedCurrency = "";
        this.selectedReportDate = "";
        this.selectedStartDate = "";
        this.selectedSourceDate = "";
        this.selectedConsolidated = "0";
        this.selectedFYEChange = "0";
        this.selectedPeriodFY = "";
        this.selectedSourceTypeID = "";
        this.selectedPrincipleTypeID = "";
        this.selectedIndex = 0;
        this.returnColumnIDs().subscribe(function (val) {
            _this.gColumns = val;
        });
    }
    TopPanelComponent.prototype.onChange = function (newValue) {
        var vString = newValue.split("::", 14);
        this.selectedPeriod = newValue;
        this.selectedIndex = parseInt(vString[13]);
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
    };
    // Opens Properties dialog. HTML and TS files are in properties-component:
    TopPanelComponent.prototype.openDialog = function () {
        var _this = this;
        var settings = {
            disableClose: true
        };
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__properties_component_properties_component__["a" /* PropertiesDialog */], settings);
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('*** *** *** ' + result);
            if (result === 'ok') {
                _this.returnColumnIDs().subscribe(function (val) {
                    console.log("Columns Length: " + val.length + " *** " + val[_this.selectedIndex].COLUMNID);
                    var vCollectedHeader = _this.collectDocumentHeader(val[_this.selectedIndex].COLUMNID);
                    _this.saveDocumentHeader(vCollectedHeader);
                });
            }
            ;
        });
    };
    TopPanelComponent.prototype.collectDocumentHeader = function (aColID) {
        var documentHeader = [];
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
        console.log('Collect this data =>'
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
            + "  Index: " + this.selectedIndex);
        return documentHeader;
    };
    TopPanelComponent.prototype.saveDocumentHeader = function (aCollectedheader) {
        var _this = this;
        var vMessage;
        console.log('Save this data =>'
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
            + "  Index: " + this.selectedIndex);
        this._propertiesService.saveDocumentHeader(aCollectedheader).subscribe(function (savedData) {
            //console.log('savedData: ' + savedData.message);
            if (savedData.message)
                vMessage = savedData.message;
        }, 
        // the second argument is a function which runs on error
        function (err) {
            console.log('Error in saveDocumentHeader! ' + err);
        }, 
        // the third argument is a function which runs on completion
        function () {
            console.log('DONE WITH saveDocumentHeader() for ColumnID: ' + aCollectedheader[0].column_id);
            if (!vMessage)
                vMessage = "Something went wrong and http.post request did not return any data!";
            _this.getDocumentHeaderList(_this.selectedIndex);
            console.log("Saved message: " + vMessage);
        });
    };
    TopPanelComponent.prototype.returnColumnIDs = function () {
        //console.log('I am in docDetails returnColumnIDs()!');       
        return this._docDetailsService.getColumnIDs();
    };
    TopPanelComponent.prototype.getDocumentHeaderList = function (aIndex) {
        var _this = this;
        this.selectedIndex = aIndex; // It is necessary to reset index when change form ID.
        this._propertiesService.getDocumentHeaderList().subscribe(
        // the first argument is a function which runs on success
        function (data) {
            _this.documentHeaderList = data;
        }, 
        // the second argument is a function which runs on error
        function (err) { return console.error(err); }, 
        // the third argument is a function which runs on completion
        function () {
            if (_this.documentHeaderList.length > 0) {
                _this.selectedPeriod = _this.documentHeaderList[aIndex].CAPTION + " "
                    + _this.documentHeaderList[aIndex].REPORTDATE_TEXT + "::"
                    + _this.documentHeaderList[aIndex].REPORTTYPE + "::"
                    + _this.documentHeaderList[aIndex].AUDITOR + "::"
                    + _this.documentHeaderList[aIndex].MULTIPLIER + "::"
                    + _this.documentHeaderList[aIndex].CURRENCYCODE + "::"
                    + _this.documentHeaderList[aIndex].REPORTDATE + "::"
                    + _this.documentHeaderList[aIndex].CONSOLIDATED + "::"
                    + _this.documentHeaderList[aIndex].FYECHANGE + "::"
                    + _this.documentHeaderList[aIndex].PERIODFISCALYEAR + "::"
                    + _this.documentHeaderList[aIndex].SOURCETYPEID + "::"
                    + _this.documentHeaderList[aIndex].PRINCIPLETYPEID + "::"
                    + _this.documentHeaderList[aIndex].PERIODSTARTDATE + "::"
                    + _this.documentHeaderList[aIndex].SOURCEDATE + "::"
                    + aIndex;
                _this.selectedExtractedText = _this.documentHeaderList[aIndex].CAPTION + " "
                    + _this.documentHeaderList[aIndex].REPORTDATE_TEXT;
                _this._propertiesService.setSelectedExtractedText(_this.selectedExtractedText);
                _this.selectedType = _this.documentHeaderList[aIndex].REPORTTYPE;
                //console.log("selected-type=  " + this.selectedType);
                _this._propertiesService.setSelectedType(_this.selectedType);
                _this.selectedAuditor = _this.documentHeaderList[aIndex].AUDITOR;
                //console.log("selected-auditor=  " + this.selectedAuditor);
                _this._propertiesService.setSelectedAuditor(_this.selectedAuditor);
                _this.selectedMultiplier = _this.documentHeaderList[aIndex].MULTIPLIER;
                //console.log("selected-multiplier=  " + this.selectedMultiplier);
                _this._propertiesService.setSelectedMultiplier(_this.selectedMultiplier);
                _this.selectedCurrency = _this.documentHeaderList[aIndex].CURRENCYCODE;
                //console.log("selected-curency=  " + this.selectedCurrency);
                _this._propertiesService.setSelectedCurrency(_this.selectedCurrency);
                _this.selectedReportDate = _this.documentHeaderList[aIndex].REPORTDATE;
                //console.log("selected-reportdate=  " + this.selectedReportDate);
                if (_this.selectedReportDate) {
                    var re = /-/gi;
                    var newDateString = _this.selectedReportDate.replace(re, '/');
                    _this.selectedReportDate = (new Date(newDateString)).toISOString();
                    _this._propertiesService.setSelectedReportDate(_this.selectedReportDate);
                    console.log("selectedReportDate: " + _this.selectedReportDate);
                }
                else {
                    _this._propertiesService.setSelectedReportDate((new Date()).toISOString());
                }
                _this.selectedSourceDate = _this.documentHeaderList[aIndex].SOURCEDATE;
                if (_this.selectedSourceDate) {
                    var re = /-/gi;
                    var newDateString = _this.selectedSourceDate.replace(re, '/');
                    _this.selectedSourceDate = (new Date(newDateString)).toISOString();
                    _this._propertiesService.setSelectedSourceDate(_this.selectedSourceDate);
                    console.log("selectedSourceDate: " + _this.selectedSourceDate);
                }
                else {
                    //this._propertiesService.setSelectedSourceDate((new Date()).toISOString());
                }
                _this.selectedStartDate = _this.documentHeaderList[aIndex].PERIODSTARTDATE;
                if (_this.selectedStartDate) {
                    var re = /-/gi;
                    var newDateString = _this.selectedStartDate.replace(re, '/');
                    _this.selectedStartDate = (new Date(newDateString)).toISOString();
                    _this._propertiesService.setSelectedStartDate(_this.selectedStartDate);
                    console.log("selectedStartDate: " + _this.selectedStartDate);
                }
                else {
                    //this._propertiesService.setSelectedStartDate((new Date()).toISOString());
                }
                _this.selectedConsolidated = (_this.documentHeaderList[aIndex].CONSOLIDATED) !== null
                    ? String(_this.documentHeaderList[aIndex].CONSOLIDATED) : "0";
                _this._propertiesService.setSelectedConsolidated(_this.selectedConsolidated);
                _this.selectedFYEChange = (_this.documentHeaderList[aIndex].FYECHANGE) !== null
                    ? String(_this.documentHeaderList[aIndex].FYECHANGE) : "0";
                _this._propertiesService.setSelectedFYEChange(_this.selectedFYEChange);
                _this.selectedPeriodFY = _this.documentHeaderList[aIndex].PERIODFISCALYEAR;
                _this._propertiesService.setSelectedPeriodFY(_this.selectedPeriodFY);
                _this.selectedSourceTypeID = _this.documentHeaderList[aIndex].SOURCETYPEID;
                _this._propertiesService.setSelectedSourceTypeID(_this.selectedSourceTypeID);
                _this.selectedPrincipleTypeID = _this.documentHeaderList[aIndex].PRINCIPLETYPEID;
                _this._propertiesService.setSelectedPrincipleTypeID(_this.selectedPrincipleTypeID);
            }
            else {
                _this._propertiesService.setSelectedExtractedText("");
            }
            //console.log('done with topPanel.getDocumentHeaderList() ... selectedPeriod is: ' + this.selectedPeriod)
        });
    };
    TopPanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'topPanel',
            template: __webpack_require__("../../../../../src/app/topPanel-component/topPanel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/css/app.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_3__properties_component_properties_service__["a" /* PropertiesService */],
            __WEBPACK_IMPORTED_MODULE_4__documentDetails_component_document_details_service__["a" /* documentDetailsService */]])
    ], TopPanelComponent);
    return TopPanelComponent;
}());



/***/ }),

/***/ "../../../../../src/app/treeView-component/treeView.component.html":
/***/ (function(module, exports) {

module.exports = "<iui-treeview #treeview\r\n    [controlStyle]=\"ctrlStyle\"          \r\n    [virtualMode]=\"true\"\r\n    >\r\n    <ng-template let-item>\r\n        <span \r\n            class=\"trw-lbl-item-content\" \r\n            (dblclick)=\"onItemDblClick($event, item)\"\r\n            (click)=\"onItemClick($event, item)\"\r\n            [ngStyle]=\"{ color: item.textColor }\"\r\n        > {{item.LITERAL}} </span>\r\n    </ng-template>\r\n</iui-treeview>\r\n    "

/***/ }),

/***/ "../../../../../src/app/treeView-component/treeView.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_integralui_components_integralui_core__ = __webpack_require__("../../../../integralui/components/integralui.core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_integralui_components_integralui_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_integralui_components_integralui_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_integralui_components_integralui_treeview__ = __webpack_require__("../../../../integralui/components/integralui.treeview.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_integralui_components_integralui_treeview___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_integralui_components_integralui_treeview__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chartList_component_chartList_service__ = __webpack_require__("../../../../../src/app/chartList-component/chartList.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__documentDetails_component_document_details_service__ = __webpack_require__("../../../../../src/app/documentDetails-component/document-details.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__treeViewAccountDlg_component__ = __webpack_require__("../../../../../src/app/treeView-component/treeViewAccountDlg.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var TreeViewComponent = /** @class */ (function () {
    function TreeViewComponent(dialog, _chartListService, _docDetailsService) {
        this.dialog = dialog;
        this._chartListService = _chartListService;
        this._docDetailsService = _docDetailsService;
        //@Output() findGridRowEvent = new EventEmitter();
        //@Output() alertEvent = new EventEmitter();
        this.processedChartData = [];
        this.gMessage = '';
        this.gToggle = '1';
        this.gSelectedChartCode = "";
        this.chartIDList = [];
        this.selMode = __WEBPACK_IMPORTED_MODULE_1_integralui_components_integralui_core__["IntegralUISelectionMode"].MultiExtended;
        this.showLines = true;
        this.selectedLiteral = "";
        this.selectedMapcode = "";
        this.selectedOrderlink = "";
        this.ctrlStyle = {
            general: {
                normal: 'leftDiv'
            }
        };
        this.treeDataFields = {
            text: 'LITERAL',
            id: 'ID',
            pid: 'PID',
        };
        this.gSelectedChartCode = this._docDetailsService.selectedChartCode;
        //console.log("code tv.constructor(): " + this.gSelectedChartCode);
    }
    TreeViewComponent.prototype.onItemClick = function (e, item) {
        //console.log(item.id + ' - selectedID!');
        //console.log(item.pid + ' - selectedPID!');
        //console.log(item.MAPCODE + ' - selectedMapcode!');
        // Used in panel-documentDetails.html to call docDetails.scrollToRow():
        //this.selectedLiteral = item.LITERAL;
        //this.selectedMapcode = item.MAPCODE;
        //this.selectedOrderlink = item.ORDERLINK;
        // Used in other components:
        this._chartListService.setLiteral(item.LITERAL);
        this._chartListService.setOrderLink(item.ORDERLINK);
        this._chartListService.setMapCode(item.MAPCODE);
        //this.findGridRowEvent.emit(null); This feature is not in C++ version and makes things complicated
    };
    TreeViewComponent.prototype.getChartIDList = function (aToggle, aCode) {
        var _this = this;
        //console.log('I am in getChartList()!');
        if (aCode)
            this.gSelectedChartCode = aCode;
        var compNum = this._docDetailsService.getCompNumber();
        var type = this._docDetailsService.getReportTypeCode();
        var formCode = this._docDetailsService.getFormID().getValue();
        var chartCode = this.gSelectedChartCode;
        if ((compNum > 0) && (chartCode) && (type) && (formCode)) {
            this._chartListService.getChartIDs(compNum, chartCode, type, formCode).subscribe(
            // the first argument is a function which runs on success
            function (data) {
                _this.chartIDList = data;
            }, 
            // the second argument is a function which runs on error
            function (err) { return console.error(err); }, 
            // the third argument is a function which runs on completion
            function () {
                //console.log('DONE WITH tv.getChartIDList() ... ' + this.chartIDList.length);
                _this.loadFromJSON(null, aToggle, _this.gSelectedChartCode);
            });
        }
        else {
            console.log("WARNING: Parameter list is not complete in getChartIDList!!!");
        }
    };
    TreeViewComponent.prototype.loadFromJSON = function (item, aToggle, aCode) {
        //console.log("Toggle in loadFromJSON(): " + aToggle);
        //console.log("code in loadFromJSON(): " + aCode);
        var _this = this;
        var originalChartData;
        //let processedChartData: any[];
        if (aToggle) {
            this.gToggle = aToggle;
        }
        if (aCode) {
            this.gSelectedChartCode = aCode;
        }
        if (this.gToggle == '1') {
            this._chartListService.getChartAccountData(this._docDetailsService.getCompNumber(), 
            //AppSettings.CHART_CODE, // Default is IFR, but chart code should be also retrieved from the user interface
            this.gSelectedChartCode, this._docDetailsService.getReportTypeCode(), this._docDetailsService.getFormID().getValue()).subscribe(function (originalChartData) {
                // assign the right pid for each account and more ...
                //processedChartData = originalChartData;
                _this.processedChartData = _this.processData(originalChartData);
                // add processed data to the chart tree
                _this.addData(_this.processedChartData, item, 1);
            }, 
            // the second argument is a function which runs on error
            function (error) { return console.log(error); }, 
            // the third argument is a function which runs on completion
            function () {
                //console.log('DONE WITH loadFromJSON() ... ' + this.chartIDList.length);
            });
        }
        else {
            //this.gMessage = 'Company account order is under construction!';
            //this.alertEvent.emit(null);
            //console.log(" Toggle: " + aToggle);
            this._chartListService.getCompanyAccountData(this._docDetailsService.getCompNumber(), 
            //AppSettings.CHART_CODE, // Default is IFR, but chart code should be also retrieved from the user interface
            this.gSelectedChartCode, this._docDetailsService.getReportTypeCode(), this._docDetailsService.getFormID().getValue()).subscribe(function (originalChartData) {
                // we don't need to assign the right pid for each account and more here. It should be flat.
                _this.processedChartData = originalChartData;
                // add original data to the chart tree
                _this.addData(_this.processedChartData, item, 2);
            }, 
            // the second argument is a function which runs on error
            function (error) { return console.log(error); }, 
            // the third argument is a function which runs on completion
            function () {
                //console.log('DONE WITH loadFromJSON() ... ' + this.chartIDList.length);
            });
        }
    };
    TreeViewComponent.prototype.addData = function (data, item, toggle) {
        // Load data from JSON into the TreeView as children for specified item
        if (toggle === 1) {
            //console.log(" addData.Toggle: " + toggle);
            this.treeview.loadData(data, item, this.treeDataFields);
        }
        else {
            //console.log(" addData.Toggle: " + toggle);
            this.treeview.loadData(data, item, this.treeDataFields, false);
        }
        // Restore the expanding icon
        this.treeview.endLoad(item);
        // Update the appareance of the TreeView
        this.treeview.refresh();
        this.treeview.collapse();
    };
    TreeViewComponent.prototype.processData = function (data) {
        //console.log('inside processData!!!')
        var vFound = false;
        var vLength = 0;
        var vElement;
        for (var i = 0; i < data.length; i++) {
            if (data[i].PID) {
                vLength = data[i].PID.length;
                vFound = false;
                while ((vFound === false) && (vLength > 0)) {
                    vElement = data[i].PID.substr(0, vLength);
                    var newArr = this.chartIDList.filter(function (item) {
                        return item.id === vElement;
                    });
                    // assigning proper pid 
                    if (newArr.length > 0) {
                        for (var j = 0; j < data.length; j++) {
                            if (data[j].REF === vElement) {
                                data[i].PID = vElement + '-' + data[j].ORDERLINK;
                                vFound = true;
                                //console.log('new PID: '+ data[i].PID);
                                break;
                            }
                        }
                        break;
                    }
                    else {
                        vLength -= 3;
                    }
                }
            }
        }
        return data;
    };
    /*
        private processData(data: any) {
            //console.log('inside processData!!!')
            let vFound: boolean=false;
            let vLength: number;
            let vElement: string;
    
            for (let i = 0; i < data.length; i++) {
                if (data[i].pid !== '') {
    
                    vLength = data[i].pid.length;
                    vFound = false;
    
                    // assigning proper pid
                    while ((vFound === false) && (vLength > 0)) {
                        vElement = data[i].pid.substr(0, vLength);
                        //console.log('inside processData while loop ---> ' + vElement + ' ---> ' + data[i].LITERAL);
    
                        let newArr = this.chartIDList.filter(function(item){
                            return item.id === vElement;
                        });
    
                        //console.log("newArr.length = " + newArr.length);
    
                        if (newArr.length > 0) {
                            data[i].pid = vElement;
                            vFound = true;
                            //console.log('Found it !!! ---> ' + data[i].LITERAL + ' ---> ' + vElement + ' ---> ' + vLength);
                            break;
                        }
                        else {
                            //console.log('Not Found it !!! ---> ' + data[i].LITERAL + ' ---> ' + vElement + ' ---> ' + vLength);
                            vLength -= 3;
                        }
                        
                    }
                    
                }
            }
    
            return data;
        }
    */
    TreeViewComponent.prototype.onItemDblClick = function (e, item) {
        //this.gMessage = 'Mapcode: ' + item.MAPCODE;
        //this.alertEvent.emit(null);
        this.openDialog();
    };
    // Opens TreeViewAccountDialog dialog:
    TreeViewComponent.prototype.openDialog = function () {
        var settings = {
            disableClose: true
        };
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__treeViewAccountDlg_component__["a" /* TreeViewAccountDialog */], settings);
        //dialogRef.afterClosed().subscribe(result => {
        // save dialog in database
        //});
    };
    TreeViewComponent.prototype.scrollToAccount = function () {
        var vOrderlink = this._docDetailsService.getOrderlink();
        var vMapcode = this._docDetailsService.getMapcode();
        var vLiteral = this._docDetailsService.getSelectedLiteral();
        //let item: any = this.treeview.findItemById(item.itemID);
        //let item: any = this.treeview.findItemByText(aText);
        var item = this.getItem(vMapcode, vOrderlink, vLiteral);
        if (item) {
            //console.log("item.MAPCODE found in scrollTo: " + item.MAPCODE);
            // Use scrollTo method to scroll the view so that the item is visible
            this.treeview.scrollTo(item);
            // Select the item once it is present in current view
            this.treeview.selectedItem = item;
            this._chartListService.setMapCode(item.MAPCODE);
            this._chartListService.setOrderLink(item.ORDERLINK);
            this._chartListService.setLiteral(item.LITERAL);
        }
    };
    TreeViewComponent.prototype.getItem = function (aMapcode, aOrderlink, aLiteral) {
        var result = 0;
        for (var i = 0; i < this.processedChartData.length; i++) {
            if (((this.processedChartData[i].MAPCODE === aMapcode) && (this.processedChartData[i].ORDERLINK === aOrderlink))
                || (this.processedChartData[i].LITERAL.toLowerCase() === aLiteral.toLowerCase())) {
                result = this.processedChartData[i];
                //console.log("Found it: " + this.processedChartData[i].LITERAL);
                break;
            }
        }
        return result;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('treeview'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_integralui_components_integralui_treeview__["IntegralUITreeView"])
    ], TreeViewComponent.prototype, "treeview", void 0);
    TreeViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'treeView',
            /*
            The ViewEncapsulation.None allows you to change the component appearance
            by applying your own custom CSS styles within your app component.
            This overrides the default CSS styles that are included in component css file.
            As you may know, by default all Angular components are protected from outside changes of CSS.
            The ViewEncapsulation.None allows you to override that within your app project, in code.
            */
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            template: __webpack_require__("../../../../../src/app/treeView-component/treeView.component.html"),
            styles: [__webpack_require__("../../../../../src/app/css/app.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_4__chartList_component_chartList_service__["a" /* ChartListService */],
            __WEBPACK_IMPORTED_MODULE_5__documentDetails_component_document_details_service__["a" /* documentDetailsService */]])
    ], TreeViewComponent);
    return TreeViewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/treeView-component/treeViewAccountDlg.component.html":
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/css?family=Roboto:300,400,500\" rel=\"stylesheet\">\n\n<div >\n    <h1 mat-dialog-title>{{selectedLiteral}}</h1> \n\n    <div md-dialog-content  style=\"width: 400px; font-size: 13px;\">    \n\n        <mat-form-field>    \n            <input matInput placeholder=\"Form: \" disabled>\n            <div>\n            <label> {{selectedForm}} </label>\n            </div>    \n        </mat-form-field>\n\n        <br>\n        <mat-form-field>    \n            <input matInput placeholder=\"Mapcode: \" disabled>\n            <div>\n            <label> {{selectedMapCode}} </label>\n            </div>    \n        </mat-form-field>\n\n        <br>\n        <mat-form-field>    \n            <input matInput placeholder=\"Hierarchy: \" disabled>\n            <div>\n            <label> {{selectedHierarchy}} </label>\n            </div>    \n        </mat-form-field>\n\n        <br>\n        <mat-form-field>    \n            <input matInput placeholder=\"Amount: \" disabled>\n            <div>\n            <label> {{selectedAmount}} </label>\n            </div>    \n        </mat-form-field>\n\n        <br>\n        <mat-form-field>\n            <mat-select placeholder=\"Last Transaction: \" [(ngModel)]=\"selectedDate\">\n                <mat-option *ngFor=\"let t of transactions_list\" [value]=\"t.REPORTDATE + '::' + t.FINANCIALREPORTTYPE\">\n                    {{ t.REPORTDATE }}: {{ t.FINANCIALREPORTTYPE }}\n                </mat-option>\n            </mat-select>\n        </mat-form-field>\n\n    </div>\n    <br>\n    <div mat-dialog-actions align=\"bottom\">\n        <!--<button mat-button [mat-dialog-close]=\"\" cdkFocusInitial>OK</button>-->\n        <button mat-raised-button color=\"primary\" [mat-dialog-close]=\"\" cdkFocusInitial>OK</button>  \n    </div>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/treeView-component/treeViewAccountDlg.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeViewAccountDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__documentDetails_component_document_details_service__ = __webpack_require__("../../../../../src/app/documentDetails-component/document-details.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chartList_component_chartList_service__ = __webpack_require__("../../../../../src/app/chartList-component/chartList.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var TreeViewAccountDialog = /** @class */ (function () {
    function TreeViewAccountDialog(_docDetailsService, _chartListService, dialogRef, data) {
        this._docDetailsService = _docDetailsService;
        this._chartListService = _chartListService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.transactions_list = [];
        this.selectedLiteral = "";
        this.selectedForm = "";
        this.selectedMapCode = "";
        this.selectedHierarchy = "";
        this.selectedAmount = 0;
        this.selectedDate = "";
        this.selectedOrderLink = 0;
        // the following statements are necessary in order to showing the selected values when dialog opens:
        this.selectedForm = this._docDetailsService.selectedFormDescription;
        this.selectedMapCode = this._chartListService.selectedMapCode;
        this.selectedLiteral = this._chartListService.selectedLiteral;
        this.selectedOrderLink = this._chartListService.selectedOrderLink;
        //Clear list boxes:
    }
    TreeViewAccountDialog.prototype.ngOnInit = function () {
        if (this._docDetailsService.selectedReportTypeCode == "Q") {
            this.getQuarterlyChartAccountList();
        }
        else {
            this.getAnnualChartAccountList();
        }
    };
    // to load annual chart account list:
    TreeViewAccountDialog.prototype.getAnnualChartAccountList = function () {
        var _this = this;
        //console.log('I am in getAnnualChartAccountList()!');
        this._chartListService.getAnnualChartAccountData(this._docDetailsService.getCompNumber(), this._docDetailsService.selectedChartCode, this.selectedOrderLink).subscribe(
        // the first argument is a function which runs on success
        function (data) {
            _this.transactions_list = data;
            //console.log("chart data length: " + this.chartData.length);
        }, 
        // the second argument is a function which runs on error
        function (err) { return console.error(err); }, 
        // the third argument is a function which runs on completion
        function () {
            //console.log('DONE WITH getAnnualChartAccountList() ... ' + this.transactions_list[0].AMOUNT)
            _this.selectedDate = _this.transactions_list[0].REPORTDATE;
            _this.selectedAmount = _this.transactions_list[0].AMOUNT;
        });
    };
    // to load annual chart account list:
    TreeViewAccountDialog.prototype.getQuarterlyChartAccountList = function () {
        var _this = this;
        //console.log('I am in getQuarterlyChartAccountList()!');
        this._chartListService.getQuarterlyChartAccountData(this._docDetailsService.getCompNumber(), this._docDetailsService.selectedChartCode, this.selectedOrderLink).subscribe(
        // the first argument is a function which runs on success
        function (data) {
            _this.transactions_list = data;
            //console.log("chart data length: " + this.chartData.length);
        }, 
        // the second argument is a function which runs on error
        function (err) { return console.error(err); }, 
        // the third argument is a function which runs on completion
        function () {
            //console.log('DONE WITH getAnnualChartAccountList() ... ' + this.transactions_list[0].AMOUNT)
            _this.selectedDate = _this.transactions_list[0].REPORTDATE;
            _this.selectedAmount = _this.transactions_list[0].AMOUNT;
        });
    };
    TreeViewAccountDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'dialog-treeViewAccount',
            template: __webpack_require__("../../../../../src/app/treeView-component/treeViewAccountDlg.component.html"),
            styles: [__webpack_require__("../../../../../src/app/css/app.component.scss")],
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__documentDetails_component_document_details_service__["a" /* documentDetailsService */], __WEBPACK_IMPORTED_MODULE_3__chartList_component_chartList_service__["a" /* ChartListService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialogRef */], Object])
    ], TreeViewAccountDialog);
    return TreeViewAccountDialog;
}());



/***/ }),

/***/ "../../../../../src/app/treeView-component/treeViewMatch.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div>\n    <label>Show items where: </label><br/>\n        <iui-combobox #combobox\n            [items]=\"filterOptions\" \n            [controlStyle]=\"comboStyle\"\n            [selectedItem]=\"selectedOption\" \n            (selectedItemChanged)=\"filterOptionChanged($event)\"\n        >\n            <iui-item *ngFor=\"let option of filterOptions\" [text]=\"option.text\"></iui-item>\n        </iui-combobox> \n\n        <input [(ngModel)]=\"filterValue\" type=\"text\" style=\"width:270px; height:30.5px;\"/><br/><br/>\n\n        <button class=\"trw-ftr-button\" (click)=\"applyFilter()\">Apply Filter</button>\n        <button class=\"trw-ftr-button\" (click)=\"resetFilter()\">Reset</button><br/>   \n</div>\n\n<iui-treeview #treeviewMatched\n    [items]=\"items\" \n    [controlStyle]=\"ctrlStyle\"          \n    [virtualMode]=\"true\"\n    >\n    <ng-template let-item>\n        <span \n            class=\"trw-ftr-inline-block\"\n            (click)=\"onItemClick($event, item)\"\n            (afterSelect)=\"onAfterSelect($event)\"\n        > {{item.LITERAL}} -- {{item.MAPCODE}}</span>\n    </ng-template>\n</iui-treeview>\n    "

/***/ }),

/***/ "../../../../../src/app/treeView-component/treeViewMatch.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".trv-matched-div {\n  height: 300px;\n  color: black;\n  padding: 4px; }\n\n.trw-ftr-normal {\n  width: 350px;\n  height: 400px; }\n\n.trw-ftr-item-label {\n  padding: 5px; }\n\n.trw-ftr-inline-block {\n  display: inline-block;\n  margin: 3px 0; }\n\n.trw-ftr-button {\n  display: inline-block;\n  margin: 5px;\n  width: 100px;\n  height: 25px; }\n\n.trw-ftr-cmb {\n  display: inline-block;\n  width: 165px;\n  margin: 0 5px; }\n\n.trw-ftr-cmb .iui-combobox-header {\n  height: 30px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/treeView-component/treeViewMatch.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeViewMatchedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_integralui_components_integralui_core__ = __webpack_require__("../../../../integralui/components/integralui.core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_integralui_components_integralui_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_integralui_components_integralui_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_integralui_components_integralui_treeview__ = __webpack_require__("../../../../integralui/components/integralui.treeview.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_integralui_components_integralui_treeview___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_integralui_components_integralui_treeview__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chartList_component_chartList_service__ = __webpack_require__("../../../../../src/app/chartList-component/chartList.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__documentDetails_component_document_details_service__ = __webpack_require__("../../../../../src/app/documentDetails-component/document-details.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TreeViewMatchedComponent = /** @class */ (function () {
    function TreeViewMatchedComponent(cd, _chartListService, _docDetailsService, http) {
        var _this = this;
        this.cd = cd;
        this._chartListService = _chartListService;
        this._docDetailsService = _docDetailsService;
        this.http = http;
        this.items = []; //Gets or Sets a collection of tree items that are assigned to the TreeView.
        this.gMessage = '';
        this.gToggle = '1';
        //public gSelectedChartCode: string = "AppSettings.CHART_CODE";
        this.gSelectedChartCode = "";
        this.chartIDList = [];
        this.selMode = __WEBPACK_IMPORTED_MODULE_1_integralui_components_integralui_core__["IntegralUISelectionMode"].MultiExtended;
        this.showLines = true;
        this.selectedLiteral = "";
        this.selectedOption = "";
        //Filter ...
        this.filterValue = "";
        this.filterOptions = [];
        this.ctrlStyle = {
            general: {
                normal: 'trv-matched-div'
            }
        };
        this.treeDataFields = {
            text: 'LITERAL',
        };
        this.comboStyle = {
            general: {
                normal: 'trw-ftr-cmb'
            }
        };
        //console.log("inside constructor()!!!");
        this.gSelectedChartCode = this._docDetailsService.selectedChartCode;
        this._docDetailsService.selectedTitle.subscribe(function (val) {
            _this.title = val.substr(val.indexOf('-') + 1, val.length);
        });
    }
    TreeViewMatchedComponent.prototype.ngOnInit = function () {
        //console.log("code ngAfterViewInit(): ");
        //setTimeout(() => {
        this.filterOptions = [
            { text: ' ' },
            { text: 'equals' },
            { text: 'does not equal' },
            { text: 'begins with' },
            { text: 'does not begin with' },
            { text: 'ends with' },
            { text: 'does not end with' },
            { text: 'contains' },
            { text: 'does not contain' }
        ];
        //});
    };
    TreeViewMatchedComponent.prototype.ngAfterViewInit = function () {
        //setTimeout(() => {
        this.selectedOption = this.filterOptions[1];
        this.getChartIDList();
        this.loadFromJSON(null);
        //});
        /*
            Hint: detectChanges() forces another change detection cycle for the parent component
            between the first one and the verification phase. The best place to do it is
            inside the ngAfterViewInit lifecycle hook as it’s triggered when change detection
            for all child components have been performed and so they all had possibility to
            update parent components property
        */
        this.cd.detectChanges();
    };
    // to load chart list:
    TreeViewMatchedComponent.prototype.getChartIDList = function () {
        //console.log('inside getChartIDList()!');
        var _this = this;
        var compNum = this._docDetailsService.getCompNumber();
        var chartCode = this.gSelectedChartCode;
        var type = this._docDetailsService.getReportTypeCode();
        var formCode = this._docDetailsService.getFormID().getValue();
        if ((compNum > 0) && (chartCode) && (type) && (formCode)) {
            this._chartListService.getChartIDs(compNum, chartCode, type, formCode).subscribe(
            // the first argument is a function which runs on success
            function (data) {
                _this.chartIDList = data;
            }, 
            // the second argument is a function which runs on error
            function (err) {
                console.error(err);
            }
            // the third argument is a function which runs on completion
            //() => console.log('DONE WITH getChartIDList() ... ' + this.chartIDList.length)
            );
        }
        else {
            console.log("WARNING: Parameter list is not complete in getChartIDList!!!");
        }
    };
    TreeViewMatchedComponent.prototype.loadFromJSON = function (item) {
        //console.log("inside loadFromJSON()!!");
        var _this = this;
        var originalChartData;
        var processedChartData;
        this._chartListService.getChartAccountDlgData(this.gSelectedChartCode, this._docDetailsService.getFormID().getValue()).subscribe(function (originalChartData) {
            // assign the right pid for each account and more ...
            //processedChartData = originalChartData;
            processedChartData = _this.processData(originalChartData);
            // add processed data to the chart tree
            _this.addData(processedChartData, item);
            // save expanded state for TreeView items:
            _this.saveTreeStatus();
        }, function (error) { return console.log("error in loadFromJSON: " + error); });
    };
    TreeViewMatchedComponent.prototype.processData = function (data) {
        //console.log('inside processData!!!')
        var vFound = false;
        var vLength;
        var vElement;
        for (var i = 0; i < data.length; i++) {
            if (data[i].pid) {
                vLength = data[i].pid.length;
                vFound = false;
                while ((vFound == false) && (vLength > 0)) {
                    vElement = data[i].pid.substr(0, vLength);
                    //console.log('inside processData while loop ---> ' + vElement + ' ---> ' + data[i].LITERAL);
                    var newArr = this.chartIDList.filter(function (item) {
                        return item.id === vElement;
                    });
                    if (newArr.length > 0) {
                        data[i].pid = vElement;
                        vFound = true;
                        //console.log('Found it !!! ---> ' + data[i].LITERAL + ' ---> ' + vElement + ' ---> ' + vLength);
                        break;
                    }
                    else {
                        vLength -= 3;
                    }
                }
            }
        }
        return data;
    };
    TreeViewMatchedComponent.prototype.addData = function (data, item) {
        //console.log("inside addData()!!");
        // Load data from JSON into the TreeView as children for specified item
        this.treeViewMatched.loadData(data, item, this.treeDataFields);
        // Restore the expanding icon
        this.treeViewMatched.endLoad(item);
        // Update the appareance of the TreeView
        this.treeViewMatched.refresh();
        this.treeViewMatched.collapse();
    };
    TreeViewMatchedComponent.prototype.saveTreeStatus = function () {
        //console.log("inside saveTreeStatus()!!");
        if (localStorage) {
            //console.log("localStorage created!!!");
            // Suspend the TreeView layout to increase performance
            this.treeViewMatched.suspendLayout();
            // Use JSON parse method to extract the data from local storage
            var storedItems = JSON.parse(localStorage.getItem("TREE_EXPAND_STATE"));
            if (storedItems) {
                // Update the item expanded state from the saved data
                for (var i = 0; i < storedItems.length; i++) {
                    var item = this.treeViewMatched.findItemById(storedItems[i].id); // id is case sensitive in this line and must keep it lowercase
                    if (item)
                        item.expanded = storedItems[i].expanded;
                }
            }
            // Resume and update the layout of TreeView
            this.treeViewMatched.resumeLayout();
        }
    };
    TreeViewMatchedComponent.prototype.onItemClick = function (e, item) {
        //console.log("Mapcode: " + item.MAPCODE);
        this.selectedLiteral = item.LITERAL;
        this._chartListService.setMapCode(item.MAPCODE);
        this._chartListService.setLiteral(item.LITERAL);
        // Save expanded state for treeViewMatched items:
        var savedList = [];
        var list = this.treeViewMatched.getFullList();
        for (var i = 0; i < list.length; i++) {
            savedList.push({
                id: list[i].id,
                expanded: list[i].expanded
            });
        }
        if (localStorage)
            localStorage.setItem("TREE_EXPAND_STATE", JSON.stringify(savedList));
    };
    TreeViewMatchedComponent.prototype.applyFilter = function () {
        var filterConditions = [];
        if (this.selectedOption != '' && this.filterValue != '') {
            var currentOperation = this.getOption(this.selectedOption);
            filterConditions.push({
                value: this.filterValue,
                operation: currentOperation,
                negative: this.filterOptions.indexOf(this.selectedOption) % 2 == 0
            });
        }
        if (filterConditions.length > 0) {
            var params = {
                allowParent: true,
                caseSensitive: false
            };
            params.conditions = filterConditions[0];
            this.treeViewMatched.filter(params);
            if (filterConditions[0].operation === "=") {
                //console.log("condition is: " + filterConditions[0].operation);
                this.treeViewMatched.expand();
                this.scrollToItem(this.selectedLiteral);
            }
        }
        else
            this.resetFilter();
    };
    TreeViewMatchedComponent.prototype.scrollToItem = function (aText) {
        //console.log("scroll to Item: " + aText);
        //let item: any = this.treeview.findItemById(item.itemID);
        var item = this.treeViewMatched.findItemByText(aText);
        if (item) {
            // Use scrollTo method to scroll the view so that the item is visible
            this.treeViewMatched.scrollTo(item);
            // Select the item once it is present in current view
            this.treeViewMatched.selectedItem = item;
            this.selectedLiteral = item.LITERAL;
            this._chartListService.setMapCode(item.MAPCODE);
            this._chartListService.setLiteral(item.LITERAL);
        }
    };
    TreeViewMatchedComponent.prototype.resetFilter = function () {
        this.filterValue = '';
        this.selectedOption = this.filterOptions[0];
        this.treeViewMatched.filter();
    };
    TreeViewMatchedComponent.prototype.getOption = function (option) {
        var index = this.filterOptions.indexOf(option);
        switch (index) {
            case 1://equals
                return '=';
            case 2://does not equal
                return '!=';
            case 3://begins with
                return '->';
            case 4://does not begin with
                return '->';
            case 5://ends with
                return '<-';
            case 6://does not end with
                return '<-';
            case 7://contains
                return '[]';
            case 8://does not contain
                return '[]';
        }
        return '';
    };
    TreeViewMatchedComponent.prototype.filterOptionChanged = function (e) {
        this.selectedOption = e.item;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('treeviewMatched'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_integralui_components_integralui_treeview__["IntegralUITreeView"])
    ], TreeViewMatchedComponent.prototype, "treeViewMatched", void 0);
    TreeViewMatchedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'treeViewMatched',
            /*
            The ViewEncapsulation.None allows you to change the component appearance
            by applying your own custom CSS styles within your app component.
            This overrides the default CSS styles that are included in component css file.
            As you may know, by default all Angular components are protected from outside changes of CSS.
            The ViewEncapsulation.None allows you to override that within your app project, in code.
            */
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            template: __webpack_require__("../../../../../src/app/treeView-component/treeViewMatch.component.html"),
            styles: [__webpack_require__("../../../../../src/app/treeView-component/treeViewMatch.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_3__chartList_component_chartList_service__["a" /* ChartListService */],
            __WEBPACK_IMPORTED_MODULE_4__documentDetails_component_document_details_service__["a" /* documentDetailsService */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */]])
    ], TreeViewMatchedComponent);
    return TreeViewMatchedComponent;
}());



/***/ }),

/***/ "../../../../../src/app/treeView-component/treeViewMatchedDlg.component.html":
/***/ (function(module, exports) {

module.exports = "<div >\n    <h1 mat-dialog-title>Select Chart Account</h1> \n    <div md-dialog-content  style=\"width: 505px; font-size: 13px;\">\n\n        <div>\n            <treeViewMatched #treeViewMatched></treeViewMatched>\n        </div>\n\n    </div>\n    <br>\n</div>\n<div mat-dialog-actions align=\"bottom\">\n    <!--<button mat-button [mat-dialog-close]=\"\" cdkFocusInitial>OK</button>-->\n    <button mat-raised-button color=\"primary\" (click)=\"onCloseConfirm()\" cdkFocusInitial >OK</button>  \n\n    <!--<button mat-button [mat-dialog-close]=\"\" cdkFocusInitial>OK</button>-->\n    <button mat-raised-button color=\"primary\" (click)=\"onCloseCancel()\">Cancel</button>  \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/treeView-component/treeViewMatchedDlg.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeViewMatchedDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TreeViewMatchedDialog = /** @class */ (function () {
    function TreeViewMatchedDialog(dialogRef) {
        this.dialogRef = dialogRef;
        //console.log("I'm in TreeViewMatchedDialog.constructor !!!")
    }
    TreeViewMatchedDialog.prototype.onCloseConfirm = function () {
        this.dialogRef.close('ok');
    };
    TreeViewMatchedDialog.prototype.onCloseCancel = function () {
        this.dialogRef.close('Cancel');
    };
    TreeViewMatchedDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'treeViewMatchedDlg',
            template: __webpack_require__("../../../../../src/app/treeView-component/treeViewMatchedDlg.component.html"),
            styles: [__webpack_require__("../../../../../src/app/treeView-component/treeViewMatch.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialogRef */]])
    ], TreeViewMatchedDialog);
    return TreeViewMatchedDialog;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ag_grid_enterprise_main__ = __webpack_require__("../../../../ag-grid-enterprise/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ag_grid_enterprise_main___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ag_grid_enterprise_main__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
// for enterprise customers
// LicenseManager.setLicenseKey("your license key");
__WEBPACK_IMPORTED_MODULE_2_ag_grid_enterprise_main__["LicenseManager"].setLicenseKey("ag-Grid_Evaluation_License_Not_For_Production_1Devs20_January_2018__MTUxNjQwNjQwMDAwMA==4091ca44a0ac9c86778d044f42c5edc1");
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map