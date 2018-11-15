/*
  filename: integralui.filter.service.js
  version : 1.3.0
  Copyright © 2016-2017 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
var __decorate=this&&this.__decorate||function(g,a,b,c){var d=arguments.length,f=3>d?a:null===c?c=Object.getOwnPropertyDescriptor(a,b):c,e;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)f=Reflect.decorate(g,a,b,c);else for(var k=g.length-1;0<=k;k--)if(e=g[k])f=(3>d?e(f):3<d?e(a,b,f):e(a,b))||f;return 3<d&&f&&Object.defineProperty(a,b,f),f},__metadata=this&&this.__metadata||function(g,a){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(g,
a)},core_1=require("@angular/core"),IntegralUIFilterService=function(){function g(){}g.prototype.isString=function(a){return a?"string"==typeof a||a instanceof String:!1};g.prototype.isFilterCondition=function(a){return"a"==a||"b"==a||"c"==a||"d"==a||"e"==a||"f"==a||"g"==a||"h"==a||"i"==a||"j"==a||"k"==a||"l"==a||"m"==a||"n"==a||"o"==a||"p"==a||"q"==a||"r"==a||"s"==a||"t"==a||"u"==a||"v"==a||"w"==a||"x"==a||"y"==a||"z"==a?!0:!1};g.prototype.beginsWith=function(a,b,c){return void 0!=a&&void 0!=b&&
this.isString(a)&&this.isString(b)&&a.length>=b.length?0!=c?a.substring(0,b.length)==b?!0:!1:a.toLowerCase().substring(0,b.length)==b.toLowerCase()?!0:!1:!1};g.prototype.endsWith=function(a,b,c){return void 0!=a&&void 0!=b&&this.isString(a)&&this.isString(b)&&a.length>=b.length?0!=c?a.substring(a.length-b.length,a.length)==b?!0:!1:a.toLowerCase().substring(a.length-b.length,a.length)==b.toLowerCase()?!0:!1:!1};g.prototype.getFilterCondition=function(a,b){var c="abcdefghijklmnopqrstuvwxyz".indexOf(b);
return a&&0<=c&&c<a.length?a[c]:null};g.prototype.createFilterNode=function(){return{result:!1}};g.prototype.setFilterNode=function(a,b,c,d){var f=this.createFilterNode();f.condition=this.getFilterCondition(b,c);f.negative=d;a.left?a.right||(a.right=f):a.left=f};g.prototype.getMatchResult=function(a,b,c,d,f){var e=!1;if(void 0!=a&&void 0!=c){switch(b){case ">":e=a>c;break;case ">=":e=a>=c;break;case "<":e=a<c;break;case "<=":e=a<=c;break;case "=":e=this.isString(a)&&this.isString(c)?0!=f?a==c:a.toLowerCase()==
c.toLowerCase():a==c;break;case "!=":e=this.isString(a)&&this.isString(c)?0!=f?a!=c:a.toLowerCase()!=c.toLowerCase():a!=c;break;case "<>":e=this.isString(a)&&this.isString(c)?0!=f?a!=c:a.toLowerCase()!=c.toLowerCase():a!=c;break;case "->":e=this.beginsWith(a,c,f);break;case "<-":e=this.endsWith(a,c,f);break;case "><":e=this.isString(a)&&this.isString(c)?0!=f?-1<a.indexOf(c):-1<a.toLowerCase().indexOf(c.toLowerCase()):!1;break;case "[]":e=this.isString(a)&&this.isString(c)?0!=f?-1<a.indexOf(c):-1<
a.toLowerCase().indexOf(c.toLowerCase()):!1}1==d&&(e=!e)}return e};g.prototype.getFilterResult=function(a,b,c,d){if(b){if(Array.isArray(b.value)){for(var f=[],e=0;e<b.value.length;e++)f.push(this.getMatchResult(a,b.operation,b.value[e],c,d));a=!0;if("&"==b.join)for(e=0;e<f.length;e++)a=a&&f[e];else for(a=!1,e=0;e<f.length;e++)a=a||f[e];return a}return this.getMatchResult(a,b.operation,b.value,c,d)}return!0};g.prototype.applyFilter=function(a,b,c){if(b){var d=b;d.left&&(d.left.condition?d.left.result=
this.getFilterResult(a,d.left.condition,d.left.negative,c):(d=d.left,this.applyFilter(a,d,c)));d=b;d.right&&(d.right.condition?d.right.result=this.getFilterResult(a,d.right.condition,d.right.negative,c):(d=d.right,this.applyFilter(a,d,c)));"&"==b.operator?(b.result=!0,b.left&&(b.result=b.result&&b.left.result),b.right&&(b.result=b.result&&b.right.result)):(b.result=!1,b.left&&(b.result=b.result||b.left.result),b.right&&(b.result=b.result||b.right.result));return b.result}return!0};g.prototype.createTree=
function(a,b){if(b){for(var c=this.createFilterNode(),d=c,f,e=!1,g=0;g<b.length;g++)this.isFilterCondition(b[g])?this.setFilterNode(d,a,b[g],e):"&"==b[g]||"|"==b[g]?(e=!1,d.operator=b[g]):"!"==b[g]?e=!0:"("==b[g]?(e=!1,f=this.createFilterNode(),f.parent=d,d=f):")"==b[g]&&(e=!1,d.parent&&(d.parent.left?d.parent.right||(d.parent.right=d):d.parent.left=d),d=d.parent);return c}return null};g.prototype.match=function(a,b,c,d,f){return Array.isArray(b)?(d||(d=this.createTree(b,c)),this.applyFilter(a,d,
f)):this.getFilterResult(a,b,b?b.negative:!1,f)};g.prototype.filter=function(a,b,c,d,f,e){var g=[];if(a&&Array.isArray(a))for(var h=0;h<a.length;h++)this.match(b?a[h][b]:a[h],c,d,f,e)&&g.push(a[h]);return g};return g}();IntegralUIFilterService=__decorate([core_1.Injectable(),__metadata("design:paramtypes",[])],IntegralUIFilterService);exports.IntegralUIFilterService=IntegralUIFilterService;