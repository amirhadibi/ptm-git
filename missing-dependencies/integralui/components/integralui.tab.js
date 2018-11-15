/*
  filename: integralui.tab.js
  version : 1.3.0
  Copyright © 2016-2017 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
var __extends=this&&this.__extends||function(d,b){function a(){this.constructor=d}for(var e in b)b.hasOwnProperty(e)&&(d[e]=b[e]);d.prototype=null===b?Object.create(b):(a.prototype=b.prototype,new a)},__decorate=this&&this.__decorate||function(d,b,a,e){var f=arguments.length,c=3>f?b:null===e?e=Object.getOwnPropertyDescriptor(b,a):e,g;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)c=Reflect.decorate(d,b,a,e);else for(var h=d.length-1;0<=h;h--)if(g=d[h])c=(3>f?g(c):3<f?g(b,a,c):
g(b,a))||c;return 3<f&&c&&Object.defineProperty(b,a,c),c},__metadata=this&&this.__metadata||function(d,b){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(d,b)},core_1=require("@angular/core"),integralui_core_1=require("./integralui.core"),integralui_common_service_1=require("../services/integralui.common.service"),IntegralUITab=function(d){function b(a,b,f){var c=d.call(this,b)||this;c.elemRef=a;c.commonService=b;c.baseService=f;c.parentCtrl=null;c.contentClass=
[];c.isSelected=!1;c.topPos=0;c.leftPos=0;c.elemWidth="0";c.elemHeight="0";c.elemOrder=0;c.elemBorderColor="gray";c.selectedChanged=new core_1.EventEmitter;return c}__extends(b,d);Object.defineProperty(b.prototype,"selected",{get:function(){return this.isSelected},set:function(a){this.isSelected!=a&&(this.state=a?this.state|integralui_core_1.IntegralUIObjectState.selected:this.state&~integralui_core_1.IntegralUIObjectState.selected,this.elemOrder=(this.isSelected=a)?2:0)},enumerable:!0,configurable:!0});
b.prototype.ngOnInit=function(){this.parentCtrl=this.baseService.getComponent();this.generalClassName="iui-tab";this.headerClassName=this.generalClassName+"-header";this.contentClassName=this.generalClassName+"-content";this.initStyle()};b.prototype.initStyle=function(){this.defaultStyle={general:{disabled:this.generalClassName+"-disabled",focused:this.generalClassName+"-focused",normal:this.generalClassName,hovered:this.generalClassName+"-hovered",selected:this.generalClassName+"-selected"},header:{disabled:this.headerClassName+
"-disabled",focused:this.headerClassName+"-focused",normal:this.headerClassName,hovered:this.headerClassName+"-hovered",selected:this.headerClassName+"-selected"},content:{disabled:this.contentClassName+"-disabled",focused:this.contentClassName+"-focused",normal:this.contentClassName,hovered:this.contentClassName+"-hovered",selected:this.contentClassName+"-selected"}};this.updateStyle(this.controlStyle);this.updateControlClass();this.updateContentClass()};b.prototype.processStateChanged=function(){this.updateContentClass()};
b.prototype.getSize=function(a){var b={width:0,height:0};a&&(b={width:a.offsetWidth,height:a.offsetHeight});return b};b.prototype.updateLayout=function(a,b){this.topPos=a.top;this.leftPos=a.left;var d={top:0,right:0,bottom:0,left:0};this.contentElem&&(d=this.commonService.getPadding(this.contentElem.nativeElement));this.elemWidth=b.width-(d.left+d.right)+"px";this.elemHeight="auto"==b.height?"auto":b.height-(d.top+d.bottom)+"px"};b.prototype.getLayoutParams=function(){var a={size:{width:0,height:0},
padding:{top:0,right:0,bottom:0,left:0}};if(this.elemRef){var b=this.elemRef.nativeElement.children[0];a.size=this.getSize(b);a.padding=this.commonService.getPadding(b)}return a};b.prototype.updateContentClass=function(){this.contentClass.length=0;this.contentClass.push(this.contentClassName);this.contentClass.push(this.options.currentStyle.content.normal);this.state&integralui_core_1.IntegralUIObjectState.disabled?this.contentClass.push(this.options.currentStyle.content.disabled):this.state&integralui_core_1.IntegralUIObjectState.focused?
this.contentClass.push(this.options.currentStyle.content.focused):this.state&integralui_core_1.IntegralUIObjectState.selected?this.contentClass.push(this.options.currentStyle.content.selected):this.state&integralui_core_1.IntegralUIObjectState.hovered&&this.contentClass.push(this.options.currentStyle.content.hovered)};b.prototype.getContentClass=function(){return this.contentClass};b.prototype.getContentStyle=function(a){return this.commonService.isString(a)?a:a?{disabled:this.commonService.isFieldAvailable(a.disabled,
this.contentClassName+"-disabled"),focused:this.commonService.isFieldAvailable(a.focused,this.contentClassName+"-focused"),hovered:this.commonService.isFieldAvailable(a.hovered,this.contentClassName+"-hovered"),normal:this.commonService.isFieldAvailable(a.normal,this.contentClassName),selected:this.commonService.isFieldAvailable(a.selected,this.contentClassName+"-selected")}:{disabled:this.defaultStyle.content.disabled,focused:this.defaultStyle.content.focused,hovered:this.defaultStyle.content.hovered,
normal:this.defaultStyle.content.normal,selected:this.defaultStyle.content.selected}};b.prototype.getHeaderClass=function(){var a=this.headerClassName;return a=this.state&integralui_core_1.IntegralUIObjectState.disabled?a+(" "+this.options.currentStyle.header.disabled):this.state&integralui_core_1.IntegralUIObjectState.focused?a+(" "+this.options.currentStyle.header.focused):this.state&integralui_core_1.IntegralUIObjectState.selected?a+(" "+this.options.currentStyle.header.selected):this.state&integralui_core_1.IntegralUIObjectState.hovered?
a+(" "+this.options.currentStyle.header.hovered):a+(" "+this.options.currentStyle.header.normal)};b.prototype.getHeaderStyle=function(a){return this.commonService.isString(a)?a:a?{disabled:this.commonService.isFieldAvailable(a.disabled,this.headerClassName+"-disabled"),focused:this.commonService.isFieldAvailable(a.focused,this.headerClassName+"-focused"),hovered:this.commonService.isFieldAvailable(a.hovered,this.headerClassName+"-hovered"),normal:this.commonService.isFieldAvailable(a.normal,this.headerClassName),
selected:this.commonService.isFieldAvailable(a.selected,this.headerClassName+"-selected")}:{disabled:this.defaultStyle.header.disabled,focused:this.defaultStyle.header.focused,hovered:this.defaultStyle.header.hovered,normal:this.defaultStyle.header.normal,selected:this.defaultStyle.header.selected}};b.prototype.updateStyle=function(a){this.options.currentStyle=a?{general:this.getGeneralStyle(a.general),header:this.getHeaderStyle(a.header),content:this.getContentStyle(a.content)}:{general:{disabled:this.defaultStyle.general.disabled,
focused:this.defaultStyle.general.focused,hovered:this.defaultStyle.general.hovered,normal:this.defaultStyle.general.normal,selected:this.defaultStyle.general.selected},header:{disabled:this.defaultStyle.header.disabled,focused:this.defaultStyle.header.focused,hovered:this.defaultStyle.header.hovered,normal:this.defaultStyle.header.normal,selected:this.defaultStyle.header.selected},content:{disabled:this.defaultStyle.content.disabled,focused:this.defaultStyle.content.focused,hovered:this.defaultStyle.content.hovered,
normal:this.defaultStyle.content.normal,selected:this.defaultStyle.content.selected}}};b.prototype.getCurrentTabStyle=function(){return this.options.currentStyle};b.prototype.getTabContentClass=function(){var a="";this.selected&&(a+=" iui-tabstrip-tab-content-selected");return a};return b}(integralui_core_1.IntegralUIBaseComponent);__decorate([core_1.ViewChild("content"),__metadata("design:type",core_1.ElementRef)],IntegralUITab.prototype,"contentElem",void 0);
__decorate([core_1.Input(),__metadata("design:type",String)],IntegralUITab.prototype,"text",void 0);__decorate([core_1.Input(),__metadata("design:type",String)],IntegralUITab.prototype,"icon",void 0);__decorate([core_1.Input(),__metadata("design:type",Boolean),__metadata("design:paramtypes",[Boolean])],IntegralUITab.prototype,"selected",null);__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],IntegralUITab.prototype,"selectedChanged",void 0);
IntegralUITab=__decorate([core_1.Component({selector:"iui-tab",template:"\n\t\t<div [ngClass]=\"getContentClass()\" [ngStyle]=\"{ 'top': topPos + 'px', 'left': leftPos + 'px', 'width': elemWidth, 'height': elemHeight }\" [hidden]=\"selected==false\" #content>\n\t\t\t<div>\n\t\t\t\t<ng-content></ng-content>\n\t\t\t</div>\n\t\t</div>\n\t",inputs:["controlStyle","data","enabled","name","state"],encapsulation:core_1.ViewEncapsulation.None}),__metadata("design:paramtypes",[core_1.ElementRef,integralui_common_service_1.IntegralUICommonService,
integralui_core_1.IntegralUIBaseService])],IntegralUITab);exports.IntegralUITab=IntegralUITab;