/*
  filename: integralui.listbar.js
  version : 1.3.0
  Copyright © 2016-2017 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
var __extends=this&&this.__extends||function(h,b){function a(){this.constructor=h}for(var d in b)b.hasOwnProperty(d)&&(h[d]=b[d]);h.prototype=null===b?Object.create(b):(a.prototype=b.prototype,new a)},__decorate=this&&this.__decorate||function(h,b,a,d){var g=arguments.length,e=3>g?b:null===d?d=Object.getOwnPropertyDescriptor(b,a):d,f;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)e=Reflect.decorate(h,b,a,d);else for(var c=h.length-1;0<=c;c--)if(f=h[c])e=(3>g?f(e):3<g?f(b,a,e):
f(b,a))||e;return 3<g&&e&&Object.defineProperty(b,a,e),e},__metadata=this&&this.__metadata||function(h,b){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(h,b)},core_1=require("@angular/core"),integralui_core_1=require("./integralui.core"),integralui_common_service_1=require("../services/integralui.common.service"),integralui_data_service_1=require("../services/integralui.data.service"),integralui_listgroup_1=require("./integralui.listgroup"),IntegralUIListBar=
function(h){function b(a,d,b,e,f){var c=h.call(this,b)||this;c.elemRef=a;c.dataService=d;c.commonService=b;c.cmpResolver=e;c.baseService=f;c.numGroups=0;c.blockMarginTop=0;c.scrollPos={x:0,y:0};c.maxScrollPos={x:0,y:0};c.buttonWidth=0;c.groupEventList=[];c.initScrollPos=0;c.isScrollActive=!1;c.isScrollVisible=!1;c.scrollCount=0;c.scrollTimer=null;c.stopScrolling=!1;c.currentSelection=null;c.currentSelectedIndex=-1;c.selectedComponent=null;c.prevComponent=null;c.removeIndex=-1;c.trialRef=null;c.afterCollapse=
new core_1.EventEmitter;c.afterExpand=new core_1.EventEmitter;c.afterSelect=new core_1.EventEmitter;c.beforeCollapse=new core_1.EventEmitter;c.beforeExpand=new core_1.EventEmitter;c.beforeSelect=new core_1.EventEmitter;c.groupAdding=new core_1.EventEmitter;c.groupAdded=new core_1.EventEmitter;c.clear=new core_1.EventEmitter;c.groupRemoving=new core_1.EventEmitter;c.groupRemoved=new core_1.EventEmitter;c.selectionChanged=new core_1.EventEmitter;c.groupList=[];return c}__extends(b,h);Object.defineProperty(b.prototype,
"selectedIndex",{get:function(){return this.currentSelectedIndex},set:function(a){this.currentSelectedIndex!=a&&(this.currentSelectedIndex=a,this.selectComponentByIndex(a))},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"selectedGroup",{get:function(){return this.currentSelection},set:function(a){this.currentSelection!=a&&(this.currentSelection=a,this.selectGroup(a))},enumerable:!0,configurable:!0});b.prototype.ngOnInit=function(){this.baseService.setComponent(this);this.dataService.init([{data:this.groups}]);
this.generalClassName="iui-listbar";this.defaultStyle={general:{disabled:this.generalClassName+"-disabled",focused:this.generalClassName+"-focused",normal:this.generalClassName,hovered:this.generalClassName+"-hovered",selected:this.generalClassName+"-selected"}};this.updateStyle(this.controlStyle);this.updateControlClass()};b.prototype.ngAfterViewInit=function(){var a=this,b=setTimeout(function(){var d=a.cmpResolver.resolveComponentFactory(integralui_core_1.IntegralUITComponent);d&&a.contentRef&&
(a.trialRef=a.contentRef.createComponent(d));clearTimeout(b)},100)};b.prototype.ngAfterContentInit=function(){this.groupList=this.contentList.toArray();this.numGroups=this.groupList.length;this.attachGroupEvents();0<this.numGroups&&(0<=this.selectedIndex?this.selectComponentByIndex(this.selectedIndex):this.selectedGroup&&this.groups&&this.selectComponentByIndex(this.groups.indexOf(this.selectedGroup)));this.updateLayout()};b.prototype.ngOnDestroy=function(){this.trialRef&&this.trialRef.destroy()};
b.prototype.ngAfterContentChecked=function(){this.contentList&&(this.groupList=this.contentList.toArray(),this.numGroups!=this.groupList.length&&(this.attachGroupEvents(),this.numGroups=this.groupList.length,this.selectComponentByIndex(this.selectedIndex)),0==this.numGroups&&(this.selectedComponent=null));this.updateLayout()};b.prototype.clearGroups=function(){this.dataService.clear();this.clear.emit(null)};b.prototype.addGroup=function(a){this.callEventAdd("add",a)};b.prototype.insertGroupAt=function(a,
b){this.callEventAdd("at",a,b)};b.prototype.insertGroupBefore=function(a,b){this.callEventAdd("ref",a,-1,b)};b.prototype.insertGroupAfter=function(a,b){this.callEventAdd("ref",a,-1,b,!0)};b.prototype.removeGroup=function(a){this.callEventRemove(a)};b.prototype.removeGroupAt=function(a){this.groups&&0<=a&&a<this.groups.length&&this.callEventRemove(this.groups[a])};b.prototype.callEventAdd=function(a,b,g,e,f){var d={cancel:!1,group:b};this.groupAdding.emit(d);if(1!=d.cancel){switch(a){case "at":this.dataService.insert(b,
g);break;case "ref":this.dataService.insertByRef(b,e,f);break;default:this.dataService.insert(b)}this.groupAdded.emit({group:b});this.selectedComponent||this.selectComponentByIndex(0)}};b.prototype.callEventRemove=function(a){var b={cancel:!1,group:a};this.groupRemoving.emit(b);1!=b.cancel&&(this.removeIndex=this.groups?this.groups.indexOf(a):-1,this.dataService.removeAt(a),this.groupRemoved.emit({group:a}))};b.prototype.closeGroups=function(a){this.groupList=this.contentList.toArray();this.groupList.forEach(function(b,
g){b!=a&&(b.selected=!1,b.collapse())})};b.prototype.toggleGroups=function(){var a=this;if(a.selectedComponent)var b=setTimeout(function(){var d=0,e=0,f=0,c=a.selectedComponent.getContentHeight();if(a.selectedComponent.expanded){a.prevComponent&&(d=a.prevComponent.getContentHeight());var h=setInterval(function(){e<c?(f=0==f?1:f+2,e+=f,d-=f,d=0<d?d:0,a.selectedComponent.setContentHeight(e+"px"),a.prevComponent&&a.prevComponent.setContentHeight(d+"px")):(a.selectedComponent.setContentHeight("auto"),
a.prevComponent&&(a.prevComponent.setContentHeight("0"),a.prevComponent.expanded=!1,a.invokeEvent("AFTER_COLLAPSE",a.prevComponent)),a.invokeEvent("AFTER_EXPAND",a.selectedComponent),clearInterval(h))},25)}else a.selectedComponent.setContentHeight("0"),a.prevComponent&&a.prevComponent.setContentHeight("auto");clearInterval(b)},100)};b.prototype.getGroupCurrentIndex=function(a){this.groupList=this.contentList.toArray();return a&&this.groupList?this.groupList.indexOf(a):-1};b.prototype.getGroupDataIndex=
function(a){return a&&(a=this.getGroupCurrentIndex(a),this.groups&&0<=a&&a<this.groups.length)?a:-1};b.prototype.getGroupData=function(a){return this.groups&&0<=a&&a<this.groups.length?this.groups[a]:null};b.prototype.getGroupIndex=function(a){return a&&this.groups?this.groups.indexOf(a):-1};b.prototype.getComponentData=function(a){if(a){if(a.data)return a.data;a=this.getGroupDataIndex(a);if(this.groups&&0<=a&&a<this.groups.length)return this.groups[a]}return null};b.prototype.invokeEvent=function(a,
b){var d=!0,e=this.getComponentData(b),f={cancel:!1,group:e};switch(a){case "AFTER_COLLAPSE":this.afterCollapse.emit({group:e});break;case "AFTER_EXPAND":this.afterExpand.emit({group:e});this.closeGroups(b);break;case "BEFORE_COLLAPSE":this.beforeCollapse.emit(f);d=!f.cancel;break;case "BEFORE_EXPAND":this.beforeExpand.emit(f),d=!f.cancel}return d};b.prototype.invokeMethod=function(a,b){var d=!0;switch(a){case "SELECT_GROUP":d=this.selectComponent(b)}return d};b.prototype.isIndexInRange=function(a){this.contentList&&
(this.groupList=this.contentList.toArray());return this.groupList?0<=a&&a<this.groupList.length:!1};b.prototype.attachGroupEvents=function(){var a=this;this.groupList=this.contentList.toArray();a.groupEventList&&(a.groupEventList.forEach(function(a){a.forEach(function(a){a.unsubscribe()})}),a.groupEventList.length=0);this.groupList&&0<this.groupList.length&&this.groupList.forEach(function(b){var d=[];d.push(b.beforeSelect.subscribe(function(d){var e={cancel:!1,group:a.getComponentData(b)};a.beforeSelect.emit(e);
d.cancel=e.cancel}));d.push(b.afterSelect.subscribe(function(d){a.clearSelection(b)}));d.push(b.selectedChanged.subscribe(function(d){b.selected&&a.clearSelection(b)}));a.groupEventList.push(d)})};b.prototype.updateLayout=function(){this.contentElem&&(this.isScrollVisible=this.elemRef.nativeElement.firstElementChild.offsetHeight<this.contentElem.nativeElement.offsetHeight,this.maxScrollPos={x:0,y:this.isScrollVisible?this.elemRef.nativeElement.firstElementChild.offsetHeight-this.contentElem.nativeElement.offsetHeight-
(this.buttonUpElem.nativeElement.offsetHeight+this.buttonDownElem.nativeElement.offsetHeight)-2:0},this.initScrollPos=this.isScrollVisible?this.buttonUpElem.nativeElement.offsetHeight:0,this.isScrollVisible||(this.scrollPos.y=0))};b.prototype.scrollUpPressed=function(){this.isEnabled&&this.startScroll(!1)};b.prototype.scrollUpReleased=function(){this.isEnabled&&this.stopScroll()};b.prototype.scrollDownPressed=function(){this.isEnabled&&this.startScroll(!0)};b.prototype.scrollDownReleased=function(){this.isEnabled&&
this.stopScroll()};b.prototype.startScroll=function(a){var b=this;b.scrollTimer&&clearInterval(b.scrollTimer);b.scrollCount=0;b.isScrollActive=!0;b.scrollTimer=setInterval(function(){b.scrollTimerElapsed(a)},100)};b.prototype.stopScroll=function(){this.scrollTimer&&clearInterval(this.scrollTimer);this.isScrollActive=!1};b.prototype.scrollTimerElapsed=function(a){0==this.scrollCount&&(this.scrollCount=1);this.scrollCount+=5;this.stopScrolling=!1;this.processScroll(a);this.stopScrolling&&this.stopScroll()};
b.prototype.processScroll=function(a){a?this.scrollPos.y-this.scrollCount>this.maxScrollPos.y?this.scrollPos.y-=this.scrollCount:(this.stopScrolling=!0,this.scrollPos.y=this.maxScrollPos.y):0>this.scrollPos.y+this.scrollCount?this.scrollPos.y+=this.scrollCount:(this.stopScrolling=!0,this.scrollPos.y=0)};b.prototype.listMouseWheel=function(a){this.isEnabled&&(a.preventDefault(),this.setScrollPos({x:0,y:this.scrollPos.y- -30*Math.max(-1,Math.min(1,a.wheelDelta||-a.detail))}))};b.prototype.setScrollPos=
function(a){a.y<this.maxScrollPos.y&&(a.y=this.maxScrollPos.y);0<a.y&&(a.y=0);this.scrollPos={x:0,y:a.y}};b.prototype.clearSelection=function(a){this.groupList=this.contentList.toArray();this.groupList.forEach(function(b,g){b!=a&&(b.selected=!1,b.clearSelection())})};b.prototype.selectComponent=function(a){var b=this.getComponentData(a),g={cancel:!1,group:b};this.beforeSelect.emit(g);return 1!=g.cancel&&a&&a!=this.selectedComponent?(this.currentSelectedIndex=g=this.getGroupCurrentIndex(a),this.groups&&
0<=g&&g<this.groups.length&&(this.currentSelection=this.groups[g]),this.prevComponent=this.selectedComponent,this.selectedComponent=a,this.clearSelection(a),a.selected=!0,a.expanded=!0,this.afterSelect.emit({group:b}),this.selectionChanged.emit({index:g,group:this.getGroupData(this.getGroupDataIndex(a))}),!0):!1};b.prototype.selectComponentByIndex=function(a){this.isIndexInRange(a)&&this.selectComponent(this.groupList[a])};b.prototype.selectGroup=function(a){this.groups&&(this.currentSelectedIndex=
this.groups.indexOf(a),this.selectComponentByIndex(this.currentSelectedIndex))};return b}(integralui_core_1.IntegralUIBaseComponent);__decorate([core_1.ViewChild("buttonUp",{read:core_1.ElementRef}),__metadata("design:type",core_1.ElementRef)],IntegralUIListBar.prototype,"buttonUpElem",void 0);__decorate([core_1.ViewChild("buttonDown",{read:core_1.ElementRef}),__metadata("design:type",core_1.ElementRef)],IntegralUIListBar.prototype,"buttonDownElem",void 0);
__decorate([core_1.ViewChild("content",{read:core_1.ViewContainerRef}),__metadata("design:type",core_1.ViewContainerRef)],IntegralUIListBar.prototype,"contentRef",void 0);__decorate([core_1.ViewChild("content",{read:core_1.ElementRef}),__metadata("design:type",core_1.ElementRef)],IntegralUIListBar.prototype,"contentElem",void 0);__decorate([core_1.ContentChildren(integralui_listgroup_1.IntegralUIListGroup),__metadata("design:type",core_1.QueryList)],IntegralUIListBar.prototype,"contentList",void 0);
__decorate([core_1.Input(),__metadata("design:type",Array)],IntegralUIListBar.prototype,"groups",void 0);__decorate([core_1.Input(),__metadata("design:type",Number),__metadata("design:paramtypes",[Number])],IntegralUIListBar.prototype,"selectedIndex",null);__decorate([core_1.Input(),__metadata("design:type",Object),__metadata("design:paramtypes",[Object])],IntegralUIListBar.prototype,"selectedGroup",null);
__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],IntegralUIListBar.prototype,"afterCollapse",void 0);__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],IntegralUIListBar.prototype,"afterExpand",void 0);__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],IntegralUIListBar.prototype,"afterSelect",void 0);__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],IntegralUIListBar.prototype,"beforeCollapse",void 0);
__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],IntegralUIListBar.prototype,"beforeExpand",void 0);__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],IntegralUIListBar.prototype,"beforeSelect",void 0);__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],IntegralUIListBar.prototype,"groupAdding",void 0);__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],IntegralUIListBar.prototype,"groupAdded",void 0);
__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],IntegralUIListBar.prototype,"clear",void 0);__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],IntegralUIListBar.prototype,"groupRemoving",void 0);__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],IntegralUIListBar.prototype,"groupRemoved",void 0);__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],IntegralUIListBar.prototype,"selectionChanged",void 0);
IntegralUIListBar=__decorate([core_1.Component({selector:"iui-listbar",template:'\n\t\t<div [ngClass]="getControlClass()" (DOMMouseScroll)="listMouseWheel($event)" (mousewheel)="listMouseWheel($event)">\n\t\t\t<div class="iui-listbar-button-up" [ngStyle]="{ \'display\': isScrollVisible ? \'block\' : \'none\' }" (mousedown)="scrollUpPressed()" (mouseup)="scrollUpReleased()" [ngStyle]="{ \'width\': buttonWidth + \'px\' }" #buttonUp>\n\t\t\t\t<span class="iui-listbar-button-up-icon" [ngStyle]="{ \'display\': scrollPos.y != 0 ? \'inline-block\' : \'none\' }"></span>\n\t\t\t</div>\n\t\t\t<div class="iui-listbar-content" [ngStyle]="{ \'margin-top\': scrollPos.y + initScrollPos - 1 + \'px\' }" #content>\n\t\t\t\t<ng-content></ng-content>\n\t\t\t</div>\n\t\t\t<div class="iui-listbar-button-down" [ngStyle]="{ \'display\': isScrollVisible ? \'block\' : \'none\' }" (mousedown)="scrollDownPressed()" (mouseup)="scrollDownReleased()" [ngStyle]="{ \'width\': buttonWidth + \'px\' }" #buttonDown>\n\t\t\t\t<span class="iui-listbar-button-down-icon" [ngStyle]="{ \'display\': scrollPos.y != maxScrollPos.y ? \'inline-block\' : \'none\' }"></span>\n\t\t\t</div>\n\t\t</div>\n\t',
providers:[integralui_core_1.IntegralUIBaseService,integralui_data_service_1.IntegralUIDataService],inputs:["controlStyle","data","enabled","name","state"],encapsulation:core_1.ViewEncapsulation.None}),__metadata("design:paramtypes",[core_1.ElementRef,integralui_data_service_1.IntegralUIDataService,integralui_common_service_1.IntegralUICommonService,core_1.ComponentFactoryResolver,integralui_core_1.IntegralUIBaseService])],IntegralUIListBar);exports.IntegralUIListBar=IntegralUIListBar;