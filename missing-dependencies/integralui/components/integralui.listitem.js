/*
  filename: integralui.listitem.js
  version : 1.3.0
  Copyright © 2016-2017 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
var __extends=this&&this.__extends||function(d,a){function c(){this.constructor=d}for(var e in a)a.hasOwnProperty(e)&&(d[e]=a[e]);d.prototype=null===a?Object.create(a):(c.prototype=a.prototype,new c)},__decorate=this&&this.__decorate||function(d,a,c,e){var f=arguments.length,b=3>f?a:null===e?e=Object.getOwnPropertyDescriptor(a,c):e,g;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)b=Reflect.decorate(d,a,c,e);else for(var h=d.length-1;0<=h;h--)if(g=d[h])b=(3>f?g(b):3<f?g(a,c,b):
g(a,c))||b;return 3<f&&b&&Object.defineProperty(a,c,b),b},__metadata=this&&this.__metadata||function(d,a){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(d,a)},core_1=require("@angular/core"),integralui_core_1=require("./integralui.core"),integralui_common_service_1=require("../services/integralui.common.service"),IntegralUIListItem=function(d){function a(c,a,f){var b=d.call(this,c,a)||this;b.elemRef=c;b.commonService=a;b.baseService=f;b.parentCtrl=null;
b.allowSelection=!0;return b}__extends(a,d);a.prototype.ngOnInit=function(){this.parentCtrl=this.baseService.getComponent();this.generalClassName="iui-listitem";this.contentClassName=this.generalClassName+"-content";this.initStyle()};a.prototype.itemDragStart=function(a){if(this.isEnabled&&this.parentCtrl){var c=this.parentCtrl.getItemFromComponent(this);this.parentCtrl.processDragStart(a,c)}a.stopPropagation()};a.prototype.itemDragOver=function(a,d){if(this.isEnabled&&this.parentCtrl){var c=this.parentCtrl.getItemFromComponent(this),
b=this.getPageRect(),e=this.getContentSize();this.parentCtrl.processDragOver(a,c,{x:b.left,y:b.top,width:b.right-b.left,height:e.height},d)}a.stopPropagation()};a.prototype.itemDragDrop=function(a){if(this.isEnabled&&this.parentCtrl){var c=this.parentCtrl.getItemFromComponent(this);this.parentCtrl.processDragDrop(a,c)}a.stopPropagation()};a.prototype.onMouseDown=function(a){this.isEnabled&&(this.parentCtrl&&(this.allowSelection=this.parentCtrl.invokeMethod("SELECT_ITEM",{event:a,item:this.parentCtrl.getItemFromComponent(this)})),
this.mouseDown.emit(a));a.stopPropagation()};a.prototype.onMouseUp=function(a){this.isEnabled&&(this.parentCtrl&&this.allowSelection&&this.parentCtrl.invokeMethod("UPDATE_SELECTION",{event:a,item:this.parentCtrl.getItemFromComponent(this)}),this.mouseUp.emit(a));a.stopPropagation()};a.prototype.selectItem=function(){this.state|=integralui_core_1.IntegralUIObjectState.selected};return a}(integralui_core_1.IntegralUIItem);
__decorate([core_1.ViewChild("content",{read:core_1.ElementRef}),__metadata("design:type",core_1.ElementRef)],IntegralUIListItem.prototype,"contentElem",void 0);__decorate([core_1.ViewChild("dragElem",{read:core_1.ElementRef}),__metadata("design:type",core_1.ElementRef)],IntegralUIListItem.prototype,"dragElem",void 0);
IntegralUIListItem=__decorate([core_1.Component({selector:"iui-listitem",template:'\n        <li [ngClass]="getControlClass()" [ngStyle]="{ \'position\': positionType, \'top\': itemPos.top + \'px\', \'left\': itemPos.left + \'px\' }">\n            <div [ngClass]="getContentClass()" (click)="onClick($event)" (mousedown)="onMouseDown($event)" (mouseup)="onMouseUp($event)" (mouseenter)="onMouseEnter($event)" (mousemove)="onMouseMove($event)" (mouseleave)="onMouseLeave($event)" draggable="true" (dragstart)="itemDragStart($event)" (dragover)="itemDragOver($event, true)" (drop)="itemDragDrop($event)" #dragElem #content>\n                <span *ngIf="icon" class="iui-item-icon" [ngClass]="icon" [style.display]="getIconStatus()"></span>\n                <span *ngIf="text" class="iui-item-label">{{text}}</span>\n                <ng-content></ng-content>\n            </div>\n        </li>\n    ',inputs:"controlStyle data enabled icon name state text".split(" "),
outputs:"click mouseDown mouseEnter mouseLeave mouseMove mouseUp".split(" "),encapsulation:core_1.ViewEncapsulation.None}),__metadata("design:paramtypes",[core_1.ElementRef,integralui_common_service_1.IntegralUICommonService,integralui_core_1.IntegralUIBaseService])],IntegralUIListItem);exports.IntegralUIListItem=IntegralUIListItem;