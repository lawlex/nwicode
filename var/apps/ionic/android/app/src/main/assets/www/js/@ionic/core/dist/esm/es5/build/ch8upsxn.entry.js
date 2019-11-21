import*as tslib_1 from"../polyfills/tslib.js";import{h}from"../ionic.core.js";import{c as present,d as dismiss,e as eventMethod,f as createOverlay,g as dismissOverlay,h as getOverlay}from"./chunk-4f24dff4.js";import{d as hostContext,e as createThemedClasses,a as getClassMap}from"./chunk-7c632336.js";import{i as clamp,d as findItemLabel,e as renderHiddenInput}from"./chunk-6d7d2f8c.js";import{a as hapticSelectionChanged}from"./chunk-81780b86.js";function renderDatetime(t,e,i){if(void 0!==e){var n=[],r=!1;if(FORMAT_KEYS.forEach(function(o,a){if(t.indexOf(o.f)>-1){var s="{"+a+"}",l=renderTextFormat(o.f,e[o.k],e,i);r||void 0===l||null==e[o.k]||(r=!0),n.push(s,l||""),t=t.replace(o.f,s)}}),r){for(var o=0;o<n.length;o+=2)t=t.replace(n[o],n[o+1]);return t}}}function renderTextFormat(t,e,i,n){if(t!==FORMAT_DDDD&&t!==FORMAT_DDD){if(t===FORMAT_A)return void 0!==i&&void 0!==i.hour?i.hour<12?"AM":"PM":e?e.toUpperCase():"";if(t===FORMAT_a)return void 0!==i&&void 0!==i.hour?i.hour<12?"am":"pm":e||"";if(null==e)return"";if(t===FORMAT_YY||t===FORMAT_MM||t===FORMAT_DD||t===FORMAT_HH||t===FORMAT_mm||t===FORMAT_ss)return twoDigit(e);if(t===FORMAT_YYYY)return fourDigit(e);if(t===FORMAT_MMMM)return(n.monthNames?n.monthNames:MONTH_NAMES)[e-1];if(t===FORMAT_MMM)return(n.monthShortNames?n.monthShortNames:MONTH_SHORT_NAMES)[e-1];if(t===FORMAT_hh||t===FORMAT_h){if(0===e)return"12";if(e>12&&(e-=12),t===FORMAT_hh&&e<10)return"0"+e}return e.toString()}try{return e=new Date(i.year,i.month-1,i.day).getDay(),t===FORMAT_DDDD?(n.dayNames?n.dayNames:DAY_NAMES)[e]:(n.dayShortNames?n.dayShortNames:DAY_SHORT_NAMES)[e]}catch(t){}}function dateValueRange(t,e,i){var n=[];if(t===FORMAT_YYYY||t===FORMAT_YY){if(void 0===i.year||void 0===e.year)throw new Error("min and max year is undefined");for(var r=i.year;r>=e.year;r--)n.push(r)}else if(t===FORMAT_MMMM||t===FORMAT_MMM||t===FORMAT_MM||t===FORMAT_M||t===FORMAT_hh||t===FORMAT_h)for(r=1;r<13;r++)n.push(r);else if(t===FORMAT_DDDD||t===FORMAT_DDD||t===FORMAT_DD||t===FORMAT_D)for(r=1;r<32;r++)n.push(r);else if(t===FORMAT_HH||t===FORMAT_H)for(r=0;r<24;r++)n.push(r);else if(t===FORMAT_mm||t===FORMAT_m)for(r=0;r<60;r++)n.push(r);else if(t===FORMAT_ss||t===FORMAT_s)for(r=0;r<60;r++)n.push(r);else t!==FORMAT_A&&t!==FORMAT_a||n.push("am","pm");return n}function dateSortValue(t,e,i,n,r){return void 0===n&&(n=0),void 0===r&&(r=0),parseInt("1"+fourDigit(t)+twoDigit(e)+twoDigit(i)+twoDigit(n)+twoDigit(r),10)}function dateDataSortValue(t){return dateSortValue(t.year,t.month,t.day,t.hour,t.minute)}function daysInMonth(t,e){return 4===t||6===t||9===t||11===t?30:2===t?isLeapYear(e)?29:28:31}function isLeapYear(t){return t%4==0&&t%100!=0||t%400==0}var ISO_8601_REGEXP=/^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/,TIME_REGEXP=/^((\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/;function parseDate(t){var e=null;if(null!=t&&""!==t&&((e=TIME_REGEXP.exec(t))?(e.unshift(void 0,void 0),e[2]=e[3]=void 0):e=ISO_8601_REGEXP.exec(t)),null!==e){for(var i=1;i<8;i++)e[i]=void 0!==e[i]?parseInt(e[i],10):void 0;var n=0;return e[9]&&e[10]&&(n=60*parseInt(e[10],10),e[11]&&(n+=parseInt(e[11],10)),"-"===e[9]&&(n*=-1)),{year:e[1],month:e[2],day:e[3],hour:e[4],minute:e[5],second:e[6],millisecond:e[7],tzOffset:n}}}function updateDate(t,e){if(e&&""!==e){if("string"==typeof e){if(e=parseDate(e))return Object.assign(t,e),!0}else if(e.year||e.hour||e.month||e.day||e.minute||e.second){e.ampm&&e.hour&&(e.hour.value="pm"===e.ampm.value?12===e.hour.value?12:e.hour.value+12:12===e.hour.value?0:e.hour.value);for(var i=0,n=Object.keys(e);i<n.length;i++){var r=n[i];t[r]=e[r].value}return!0}console.warn('Error parsing date: "'+e+'". Please provide a valid ISO 8601 datetime format: https://www.w3.org/TR/NOTE-datetime')}else for(var o in t)t.hasOwnProperty(o)&&delete t[o];return!1}function parseTemplate(t){var e=[];t=t.replace(/[^\w\s]/gi," "),FORMAT_KEYS.forEach(function(e){e.f.length>1&&t.indexOf(e.f)>-1&&t.indexOf(e.f+e.f.charAt(0))<0&&(t=t.replace(e.f," "+e.f+" "))});var i=t.split(" ").filter(function(t){return t.length>0});return i.forEach(function(t,n){FORMAT_KEYS.forEach(function(r){if(t===r.f){if((t===FORMAT_A||t===FORMAT_a)&&(e.indexOf(FORMAT_h)<0&&e.indexOf(FORMAT_hh)<0||-1===VALID_AMPM_PREFIX.indexOf(i[n-1])))return;e.push(t)}})}),e}function getValueFromFormat(t,e){return e===FORMAT_A||e===FORMAT_a?t.hour<12?"am":"pm":e===FORMAT_hh||e===FORMAT_h?t.hour>12?t.hour-12:t.hour:t[convertFormatToKey(e)]}function convertFormatToKey(t){for(var e in FORMAT_KEYS)if(FORMAT_KEYS[e].f===t)return FORMAT_KEYS[e].k}function convertDataToISO(t){var e="";return void 0!==t.year?(e=fourDigit(t.year),void 0!==t.month&&(e+="-"+twoDigit(t.month),void 0!==t.day&&(e+="-"+twoDigit(t.day),void 0!==t.hour&&(e+="T"+twoDigit(t.hour)+":"+twoDigit(t.minute)+":"+twoDigit(t.second),t.millisecond>0&&(e+="."+threeDigit(t.millisecond)),e+=void 0===t.tzOffset?"Z":(t.tzOffset>0?"+":"-")+twoDigit(Math.floor(Math.abs(t.tzOffset/60)))+":"+twoDigit(t.tzOffset%60))))):void 0!==t.hour&&(e=twoDigit(t.hour)+":"+twoDigit(t.minute),void 0!==t.second&&(e+=":"+twoDigit(t.second),void 0!==t.millisecond&&(e+="."+threeDigit(t.millisecond)))),e}function convertToArrayOfStrings(t,e){var i;if(null!=t)return"string"==typeof t&&(t=t.replace(/\[|\]/g,"").split(",")),Array.isArray(t)&&(i=t.map(function(t){return t.toString().trim()})),void 0!==i&&0!==i.length||console.warn('Invalid "'+e+'Names". Must be an array of strings, or a comma separated string.'),i}function convertToArrayOfNumbers(t,e){var i;return"string"==typeof t&&(t=t.replace(/\[|\]|\s/g,"").split(",")),0===(i=Array.isArray(t)?t.map(function(t){return parseInt(t,10)}).filter(isFinite):[t]).length&&console.warn('Invalid "'+e+'Values". Must be an array of numbers, or a comma separated string of numbers.'),i}function twoDigit(t){return("0"+(void 0!==t?Math.abs(t):"0")).slice(-2)}function threeDigit(t){return("00"+(void 0!==t?Math.abs(t):"0")).slice(-3)}function fourDigit(t){return("000"+(void 0!==t?Math.abs(t):"0")).slice(-4)}var FORMAT_YYYY="YYYY",FORMAT_YY="YY",FORMAT_MMMM="MMMM",FORMAT_MMM="MMM",FORMAT_MM="MM",FORMAT_M="M",FORMAT_DDDD="DDDD",FORMAT_DDD="DDD",FORMAT_DD="DD",FORMAT_D="D",FORMAT_HH="HH",FORMAT_H="H",FORMAT_hh="hh",FORMAT_h="h",FORMAT_mm="mm",FORMAT_m="m",FORMAT_ss="ss",FORMAT_s="s",FORMAT_A="A",FORMAT_a="a",FORMAT_KEYS=[{f:FORMAT_YYYY,k:"year"},{f:FORMAT_MMMM,k:"month"},{f:FORMAT_DDDD,k:"day"},{f:FORMAT_MMM,k:"month"},{f:FORMAT_DDD,k:"day"},{f:FORMAT_YY,k:"year"},{f:FORMAT_MM,k:"month"},{f:FORMAT_DD,k:"day"},{f:FORMAT_HH,k:"hour"},{f:FORMAT_hh,k:"hour"},{f:FORMAT_mm,k:"minute"},{f:FORMAT_ss,k:"second"},{f:FORMAT_M,k:"month"},{f:FORMAT_D,k:"day"},{f:FORMAT_H,k:"hour"},{f:FORMAT_h,k:"hour"},{f:FORMAT_m,k:"minute"},{f:FORMAT_s,k:"second"},{f:FORMAT_A,k:"ampm"},{f:FORMAT_a,k:"ampm"}],DAY_NAMES=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],DAY_SHORT_NAMES=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],MONTH_NAMES=["January","February","March","April","May","June","July","August","September","October","November","December"],MONTH_SHORT_NAMES=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],VALID_AMPM_PREFIX=[FORMAT_hh,FORMAT_h,FORMAT_mm,FORMAT_m,FORMAT_ss,FORMAT_s],Datetime=function(){function t(){var t=this;this.inputId="ion-dt-"+datetimeIds++,this.locale={},this.datetimeMin={},this.datetimeMax={},this.datetimeValue={},this.isExpanded=!1,this.name=this.inputId,this.disabled=!1,this.readonly=!1,this.displayFormat="MMM D, YYYY",this.cancelText="Cancel",this.doneText="Done",this.onFocus=function(){t.ionFocus.emit()},this.onBlur=function(){t.ionBlur.emit()}}return t.prototype.disabledChanged=function(){this.emitStyle()},t.prototype.valueChanged=function(){this.updateDatetimeValue(this.value),this.emitStyle(),this.ionChange.emit({value:this.value})},t.prototype.componentWillLoad=function(){this.locale={monthNames:convertToArrayOfStrings(this.monthNames,"monthNames"),monthShortNames:convertToArrayOfStrings(this.monthShortNames,"monthShortNames"),dayNames:convertToArrayOfStrings(this.dayNames,"dayNames"),dayShortNames:convertToArrayOfStrings(this.dayShortNames,"dayShortNames")},this.updateDatetimeValue(this.value),this.emitStyle()},t.prototype.onClick=function(){this.setFocus(),this.open()},t.prototype.open=function(){return tslib_1.__awaiter(this,void 0,void 0,function(){var t,e,i=this;return tslib_1.__generator(this,function(n){switch(n.label){case 0:return this.disabled||this.isExpanded?[2]:(t=this.generatePickerOptions(),[4,this.pickerCtrl.create(t)]);case 1:return e=n.sent(),this.isExpanded=!0,e.onDidDismiss().then(function(){i.isExpanded=!1,i.setFocus()}),[4,this.validate(e)];case 2:return n.sent(),[4,e.present()];case 3:return n.sent(),[2]}})})},t.prototype.emitStyle=function(){this.ionStyle.emit({interactive:!0,datetime:!0,"has-placeholder":null!=this.placeholder,"has-value":this.hasValue(),"interactive-disabled":this.disabled})},t.prototype.updateDatetimeValue=function(t){updateDate(this.datetimeValue,t)},t.prototype.generatePickerOptions=function(){var t=this,e=Object.assign({mode:this.mode},this.pickerOptions,{columns:this.generateColumns()}),i=e.buttons;return i&&0!==i.length||(e.buttons=[{text:this.cancelText,role:"cancel",handler:function(){t.ionCancel.emit()}},{text:this.doneText,handler:function(e){t.updateDatetimeValue(e),t.value=convertDataToISO(t.datetimeValue)}}]),e},t.prototype.generateColumns=function(){var t=this,e=this.pickerFormat||this.displayFormat||DEFAULT_FORMAT;if(0===e.length)return[];this.calcMinMax(),-1===(e=e.replace("DDDD","{~}").replace("DDD","{~}")).indexOf("D")&&(e=e.replace("{~}","D"));var i=parseTemplate(e=e.replace(/{~}/g,"")).map(function(e){var i=convertFormatToKey(e),n=(t[i+"Values"]?convertToArrayOfNumbers(t[i+"Values"],i):dateValueRange(e,t.datetimeMin,t.datetimeMax)).map(function(i){return{value:i,text:renderTextFormat(e,i,void 0,t.locale)}}),r=getValueFromFormat(t.datetimeValue,e),o=n.findIndex(function(t){return t.value===r});return{name:i,selectedIndex:o>=0?o:0,options:n}}),n=this.datetimeMin,r=this.datetimeMax;return["month","day","hour","minute"].filter(function(t){return!i.find(function(e){return e.name===t})}).forEach(function(t){n[t]=0,r[t]=0}),divyColumns(i)},t.prototype.validate=function(t){return tslib_1.__awaiter(this,void 0,void 0,function(){var e,i,n,r,o,a,s,l,u,c,d;return tslib_1.__generator(this,function(h){switch(h.label){case 0:return e=new Date,i=dateDataSortValue(this.datetimeMin),n=dateDataSortValue(this.datetimeMax),[4,t.getColumn("year")];case 1:return r=h.sent(),o=e.getFullYear(),r&&(r.options.find(function(t){return t.value===e.getFullYear()})||(o=r.options[0].value),void 0!==(a=r.selectedIndex)&&(s=r.options[a])&&(o=s.value)),[4,this.validateColumn(t,"month",1,i,n,[o,0,0,0,0],[o,12,31,23,59])];case 2:return l=h.sent(),u=daysInMonth(l,o),[4,this.validateColumn(t,"day",2,i,n,[o,l,0,0,0],[o,l,u,23,59])];case 3:return c=h.sent(),[4,this.validateColumn(t,"hour",3,i,n,[o,l,c,0,0],[o,l,c,23,59])];case 4:return d=h.sent(),[4,this.validateColumn(t,"minute",4,i,n,[o,l,c,d,0],[o,l,c,d,59])];case 5:return h.sent(),[2]}})})},t.prototype.calcMinMax=function(){var t=(new Date).getFullYear();if(void 0!==this.yearValues){var e=convertToArrayOfNumbers(this.yearValues,"year");void 0===this.min&&(this.min=Math.min.apply(Math,e).toString()),void 0===this.max&&(this.max=Math.max.apply(Math,e).toString())}else void 0===this.min&&(this.min=(t-100).toString()),void 0===this.max&&(this.max=t.toString());var i=this.datetimeMin=parseDate(this.min),n=this.datetimeMax=parseDate(this.max);i.year=i.year||t,n.year=n.year||t,i.month=i.month||1,n.month=n.month||12,i.day=i.day||1,n.day=n.day||31,i.hour=i.hour||0,n.hour=n.hour||23,i.minute=i.minute||0,n.minute=n.minute||59,i.second=i.second||0,n.second=n.second||59,i.year>n.year&&(console.error("min.year > max.year"),i.year=n.year-100),i.year===n.year&&(i.month>n.month?(console.error("min.month > max.month"),i.month=1):i.month===n.month&&i.day>n.day&&(console.error("min.day > max.day"),i.day=1))},t.prototype.validateColumn=function(t,e,i,n,r,o,a){return tslib_1.__awaiter(this,void 0,void 0,function(){var s,l,u,c,d,h,m,p,f,y,v;return tslib_1.__generator(this,function(M){switch(M.label){case 0:return[4,t.getColumn(e)];case 1:if(!(s=M.sent()))return[2,0];for(l=o.slice(),u=a.slice(),d=(c=s.options).length-1,h=0,m=0;m<c.length;m++)f=(p=c[m]).value,l[i]=p.value,u[i]=p.value,(p.disabled=f<o[i]||f>a[i]||dateSortValue(u[0],u[1],u[2],u[3],u[4])<n||dateSortValue(l[0],l[1],l[2],l[3],l[4])>r)||(d=Math.min(d,m),h=Math.max(h,m));return y=s.selectedIndex=clamp(d,s.selectedIndex,h),(v=s.options[y])?[2,v.value]:[2,0]}})})},t.prototype.getText=function(){return renderDatetime(this.displayFormat||this.pickerFormat||DEFAULT_FORMAT,this.datetimeValue,this.locale)},t.prototype.hasValue=function(){return Object.keys(this.datetimeValue).length>0},t.prototype.setFocus=function(){this.buttonEl&&this.buttonEl.focus()},t.prototype.hostData=function(){var t=this,e=t.inputId,i=t.disabled,n=t.readonly,r=t.isExpanded,o=t.el,a=t.placeholder,s=void 0===this.getText()&&null!=a,l=e+"-lbl",u=findItemLabel(o);return u&&(u.id=l),{role:"combobox","aria-disabled":i?"true":null,"aria-expanded":""+r,"aria-haspopup":"true","aria-labelledby":l,class:{"datetime-disabled":i,"datetime-readonly":n,"datetime-placeholder":s,"in-item":hostContext("ion-item",o)}}},t.prototype.render=function(){var t=this,e=this.getText();return void 0===e&&(e=null!=this.placeholder?this.placeholder:""),renderHiddenInput(!0,this.el,this.name,this.value,this.disabled),[h("div",{class:"datetime-text"},e),h("button",{type:"button",onFocus:this.onFocus,onBlur:this.onBlur,disabled:this.disabled,ref:function(e){return t.buttonEl=e}})]},Object.defineProperty(t,"is",{get:function(){return"ion-datetime"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{cancelText:{type:String,attr:"cancel-text"},dayNames:{type:String,attr:"day-names"},dayShortNames:{type:String,attr:"day-short-names"},dayValues:{type:"Any",attr:"day-values"},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},displayFormat:{type:String,attr:"display-format"},doneText:{type:String,attr:"done-text"},el:{elementRef:!0},hourValues:{type:"Any",attr:"hour-values"},isExpanded:{state:!0},max:{type:String,attr:"max",mutable:!0},min:{type:String,attr:"min",mutable:!0},minuteValues:{type:"Any",attr:"minute-values"},mode:{type:String,attr:"mode"},monthNames:{type:String,attr:"month-names"},monthShortNames:{type:String,attr:"month-short-names"},monthValues:{type:"Any",attr:"month-values"},name:{type:String,attr:"name"},open:{method:!0},pickerCtrl:{connect:"ion-picker-controller"},pickerFormat:{type:String,attr:"picker-format"},pickerOptions:{type:"Any",attr:"picker-options"},placeholder:{type:String,attr:"placeholder"},readonly:{type:Boolean,attr:"readonly"},value:{type:String,attr:"value",mutable:!0,watchCallbacks:["valueChanged"]},yearValues:{type:"Any",attr:"year-values"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionCancel",method:"ionCancel",bubbles:!0,cancelable:!0,composed:!0},{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0},{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"click",method:"onClick"}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;min-width:16px;min-height:1.2em;font-family:var(--ion-font-family,inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;z-index:2}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static}:host(.datetime-placeholder){color:var(--placeholder-color)}:host(.datetime-disabled){opacity:.3;pointer-events:none}:host(.datetime-readonly){pointer-events:none}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:initial;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button{right:0}button::-moz-focus-inner{border:0}.datetime-text{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-ms-flex:1;flex:1;min-height:inherit;direction:ltr;overflow:inherit}:host{--placeholder-color:var(--ion-placeholder-color,var(--ion-color-step-400,#999));--padding-top:10px;--padding-end:0;--padding-bottom:11px;--padding-start:16px}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),t}();function divyColumns(t){for(var e,i,n=[],r=0;r<t.length;r++){e=t[r],n.push(0);for(var o=0,a=e.options;o<a.length;o++)(i=a[o].text.length)>n[r]&&(n[r]=i)}return 2===n.length?(i=Math.max(n[0],n[1]),t[0].align="right",t[1].align="left",t[0].optionsWidth=t[1].optionsWidth=17*i+"px"):3===n.length&&(i=Math.max(n[0],n[2]),t[0].align="right",t[1].columnWidth=17*n[1]+"px",t[0].optionsWidth=t[2].optionsWidth=17*i+"px",t[2].align="left"),t}var datetimeIds=0,DEFAULT_FORMAT="MMM D, YYYY";function iosEnterAnimation(t,e){var i=new t,n=new t;n.addElement(e.querySelector("ion-backdrop"));var r=new t;return r.addElement(e.querySelector(".picker-wrapper")),n.fromTo("opacity",.01,.26),r.fromTo("translateY","100%","0%"),Promise.resolve(i.addElement(e).easing("cubic-bezier(.36,.66,.04,1)").duration(400).add(n).add(r))}function iosLeaveAnimation(t,e){var i=new t,n=new t;n.addElement(e.querySelector("ion-backdrop"));var r=new t;return r.addElement(e.querySelector(".picker-wrapper")),n.fromTo("opacity",.26,.01),r.fromTo("translateY","0%","100%"),Promise.resolve(i.addElement(e).easing("cubic-bezier(.36,.66,.04,1)").duration(400).add(n).add(r))}var Picker=function(){function t(){this.presented=!1,this.keyboardClose=!0,this.buttons=[],this.columns=[],this.duration=0,this.showBackdrop=!0,this.backdropDismiss=!0,this.animated=!0}return t.prototype.onBackdropTap=function(){var t=this.buttons.find(function(t){return"cancel"===t.role});t?this.buttonClick(t):this.dismiss()},t.prototype.present=function(){return tslib_1.__awaiter(this,void 0,void 0,function(){var t=this;return tslib_1.__generator(this,function(e){switch(e.label){case 0:return[4,present(this,"pickerEnter",iosEnterAnimation,iosEnterAnimation,void 0)];case 1:return e.sent(),this.duration>0&&(this.durationTimeout=setTimeout(function(){return t.dismiss()},this.duration)),[2]}})})},t.prototype.dismiss=function(t,e){return this.durationTimeout&&clearTimeout(this.durationTimeout),dismiss(this,t,e,"pickerLeave",iosLeaveAnimation,iosLeaveAnimation)},t.prototype.onDidDismiss=function(){return eventMethod(this.el,"ionPickerDidDismiss")},t.prototype.onWillDismiss=function(){return eventMethod(this.el,"ionPickerWillDismiss")},t.prototype.getColumn=function(t){return Promise.resolve(this.columns.find(function(e){return e.name===t}))},t.prototype.buttonClick=function(t){var e=!0;return t.handler&&!1===t.handler(this.getSelected())&&(e=!1),e?this.dismiss():Promise.resolve(!1)},t.prototype.getSelected=function(){var t={};return this.columns.forEach(function(e,i){var n=void 0!==e.selectedIndex?e.options[e.selectedIndex]:void 0;t[e.name]={text:n?n.text:void 0,value:n?n.value:void 0,columnIndex:i}}),t},t.prototype.hostData=function(){return{"aria-modal":"true",class:Object.assign({},createThemedClasses(this.mode,"picker"),getClassMap(this.cssClass)),style:{zIndex:2e4+this.overlayIndex}}},t.prototype.render=function(){var t=this;return[h("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),h("div",{class:"picker-wrapper",role:"dialog"},h("div",{class:"picker-toolbar"},this.buttons.map(function(e){return h("div",{class:buttonWrapperClass(e)},h("button",{type:"button",onClick:function(){return t.buttonClick(e)},class:buttonClass(e)},e.text))})),h("div",{class:"picker-columns"},h("div",{class:"picker-above-highlight"}),this.presented&&this.columns.map(function(t){return h("ion-picker-column",{col:t})}),h("div",{class:"picker-below-highlight"})))]},Object.defineProperty(t,"is",{get:function(){return"ion-picker"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"scoped"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{animated:{type:Boolean,attr:"animated"},backdropDismiss:{type:Boolean,attr:"backdrop-dismiss"},buttons:{type:"Any",attr:"buttons"},columns:{type:"Any",attr:"columns"},config:{context:"config"},cssClass:{type:String,attr:"css-class"},dismiss:{method:!0},duration:{type:Number,attr:"duration"},el:{elementRef:!0},enterAnimation:{type:"Any",attr:"enter-animation"},getColumn:{method:!0},keyboardClose:{type:Boolean,attr:"keyboard-close"},leaveAnimation:{type:"Any",attr:"leave-animation"},mode:{type:String,attr:"mode"},onDidDismiss:{method:!0},onWillDismiss:{method:!0},overlayIndex:{type:Number,attr:"overlay-index"},present:{method:!0},presented:{state:!0},showBackdrop:{type:Boolean,attr:"show-backdrop"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionPickerDidPresent",method:"didPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPickerWillPresent",method:"willPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPickerWillDismiss",method:"willDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPickerDidDismiss",method:"didDismiss",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"ionBackdropTap",method:"onBackdropTap"}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".sc-ion-picker-md-h{--border-radius:0;--border-style:solid;--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--max-height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;top:0;display:block;position:absolute;width:100%;height:100%;font-family:var(--ion-font-family,inherit);contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1000}[dir=rtl].sc-ion-picker-md-h + b.sc-ion-picker-md{right:0}.overlay-hidden.sc-ion-picker-md-h{display:none}.picker-wrapper.sc-ion-picker-md{border-radius:var(--border-radius);left:0;right:0;bottom:0;margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;overflow:hidden;z-index:10}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.picker-wrapper.sc-ion-picker-md{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.picker-toolbar.sc-ion-picker-md{width:100%;background:transparent;contain:strict;z-index:1}.picker-button.sc-ion-picker-md{border:0;font-family:inherit}.picker-button.sc-ion-picker-md:active, .picker-button.sc-ion-picker-md:focus{outline:none}.picker-columns.sc-ion-picker-md{display:-ms-flexbox;display:flex;position:relative;-ms-flex-pack:center;justify-content:center;margin-bottom:var(--ion-safe-area-bottom,0);contain:strict;direction:ltr;overflow:hidden}.picker-above-highlight.sc-ion-picker-md, .picker-below-highlight.sc-ion-picker-md{display:none;pointer-events:none}.sc-ion-picker-md-h{--background:var(--ion-background-color,#fff);--border-width:0.55px 0 0;--border-color:var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,0.13))));--height:260px;color:var(--ion-item-color,var(--ion-text-color,#000))}.picker-toolbar.sc-ion-picker-md{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;height:44px}.picker-button.sc-ion-picker-md, .picker-button.activated.sc-ion-picker-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:1.1em;padding-right:1.1em;padding-top:0;padding-bottom:0;height:44px;background:transparent;color:var(--ion-color-primary,#3880ff);font-size:14px;font-weight:500;text-transform:uppercase;-webkit-box-shadow:none;box-shadow:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.picker-button.sc-ion-picker-md, .picker-button.activated.sc-ion-picker-md{padding-left:unset;padding-right:unset;-webkit-padding-start:1.1em;padding-inline-start:1.1em;-webkit-padding-end:1.1em;padding-inline-end:1.1em}}.picker-columns.sc-ion-picker-md{height:216px;-webkit-perspective:1800px;perspective:1800px}.picker-above-highlight.sc-ion-picker-md{left:0;top:0;-webkit-transform:translateZ(90px);transform:translateZ(90px);position:absolute;width:100%;height:81px;border-bottom:1px solid var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,.13))));background:-webkit-gradient(linear,left top,left bottom,color-stop(20%,var(--ion-background-color,#fff)),to(rgba(var(--ion-background-color-rgb,255,255,255),.8)));background:linear-gradient(180deg,var(--ion-background-color,#fff) 20%,rgba(var(--ion-background-color-rgb,255,255,255),.8));z-index:10}[dir=rtl].sc-ion-picker-md-h   .picker-above-highlight.sc-ion-picker-md, [dir=rtl]   .sc-ion-picker-md-h   .picker-above-highlight.sc-ion-picker-md{right:0}.picker-below-highlight.sc-ion-picker-md{left:0;top:115px;-webkit-transform:translateZ(90px);transform:translateZ(90px);position:absolute;width:100%;height:119px;border-top:1px solid var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,.13))));background:-webkit-gradient(linear,left bottom,left top,color-stop(30%,var(--ion-background-color,#fff)),to(rgba(var(--ion-background-color-rgb,255,255,255),.8)));background:linear-gradient(0deg,var(--ion-background-color,#fff) 30%,rgba(var(--ion-background-color-rgb,255,255,255),.8));z-index:11}[dir=rtl].sc-ion-picker-md-h   .picker-below-highlight.sc-ion-picker-md, [dir=rtl]   .sc-ion-picker-md-h   .picker-below-highlight.sc-ion-picker-md{right:0}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),t}();function buttonWrapperClass(t){var e;return(e={})["picker-toolbar-"+t.role]=void 0!==t.role,e["picker-toolbar-button"]=!0,e}function buttonClass(t){return Object.assign({"picker-button":!0,"ion-activatable":!0},getClassMap(t.cssClass))}var PickerColumnCmp=function(){function t(){this.optHeight=0,this.rotateFactor=0,this.scaleFactor=1,this.velocity=0,this.y=0,this.noAnimate=!0}return t.prototype.componentWillLoad=function(){var t=0,e=.81;"ios"===this.mode&&(t=-.46,e=1),this.rotateFactor=t,this.scaleFactor=e},t.prototype.componentDidLoad=function(){return tslib_1.__awaiter(this,void 0,void 0,function(){var t,e,i=this;return tslib_1.__generator(this,function(n){switch(n.label){case 0:return(t=this.optsEl)&&(this.optHeight=t.firstElementChild?t.firstElementChild.clientHeight:0),this.refresh(),e=this,[4,import("./chunk-f56eaea8.js")];case 1:return e.gesture=n.sent().createGesture({el:this.el,queue:this.queue,gestureName:"picker-swipe",gesturePriority:100,threshold:0,onStart:function(t){return i.onStart(t)},onMove:function(t){return i.onMove(t)},onEnd:function(t){return i.onEnd(t)}}),this.gesture.setDisabled(!1),this.tmrId=setTimeout(function(){i.noAnimate=!1,i.refresh(!0)},250),[2]}})})},t.prototype.componentDidUnload=function(){cancelAnimationFrame(this.rafId),clearTimeout(this.tmrId),this.gesture&&(this.gesture.destroy(),this.gesture=void 0)},t.prototype.setSelected=function(t,e){var i=t>-1?-t*this.optHeight:0;this.velocity=0,cancelAnimationFrame(this.rafId),this.update(i,e,!0)},t.prototype.update=function(t,e,i){if(this.optsEl){for(var n=0,r=0,o=this.col,a=this.rotateFactor,s=o.selectedIndex=this.indexForY(-t),l=0===e?"":e+"ms",u="scale("+this.scaleFactor+")",c=this.optsEl.children,d=0;d<c.length;d++){var h=c[d],m=o.options[d],p=d*this.optHeight+t,f="";if(0!==a){var y=p*a;Math.abs(y)<=90?(n=0,r=90,f="rotateX("+y+"deg) "):n=-9999}else r=0,n=p;var v=s===d;f+="translate3d(0px,"+n+"px,"+r+"px) ",1===this.scaleFactor||v||(f+=u),this.noAnimate?(m.duration=0,h.style.transitionDuration=""):e!==m.duration&&(m.duration=e,h.style.transitionDuration=l),f!==m.transform&&(m.transform=f,h.style.transform=f),v!==m.selected&&(m.selected=v,v?h.classList.add(PICKER_OPT_SELECTED):h.classList.remove(PICKER_OPT_SELECTED))}this.col.prevSelected=s,i&&(this.y=t),this.lastIndex!==s&&(hapticSelectionChanged(),this.lastIndex=s)}},t.prototype.decelerate=function(){var t=this;if(0!==this.velocity){this.velocity*=DECELERATION_FRICTION,this.velocity=this.velocity>0?Math.max(this.velocity,1):Math.min(this.velocity,-1);var e=this.y+this.velocity;e>this.minY?(e=this.minY,this.velocity=0):e<this.maxY&&(e=this.maxY,this.velocity=0),this.update(e,0,!0),(Math.round(e)%this.optHeight!=0||Math.abs(this.velocity)>1)&&(this.rafId=requestAnimationFrame(function(){return t.decelerate()}))}else if(this.y%this.optHeight!=0){var i=Math.abs(this.y%this.optHeight);this.velocity=i>this.optHeight/2?1:-1,this.decelerate()}},t.prototype.indexForY=function(t){return Math.min(Math.max(Math.abs(Math.round(t/this.optHeight)),0),this.col.options.length-1)},t.prototype.onStart=function(t){t.event.preventDefault(),t.event.stopPropagation(),cancelAnimationFrame(this.rafId);for(var e=this.col.options,i=e.length-1,n=0,r=0;r<e.length;r++)e[r].disabled||(i=Math.min(i,r),n=Math.max(n,r));this.minY=-i*this.optHeight,this.maxY=-n*this.optHeight},t.prototype.onMove=function(t){t.event.preventDefault(),t.event.stopPropagation();var e=this.y+t.deltaY;e>this.minY?(e=Math.pow(e,.8),this.bounceFrom=e):e<this.maxY?(e+=Math.pow(this.maxY-e,.9),this.bounceFrom=e):this.bounceFrom=0,this.update(e,0,!1)},t.prototype.onEnd=function(t){if(this.bounceFrom>0)this.update(this.minY,100,!0);else if(this.bounceFrom<0)this.update(this.maxY,100,!0);else if(this.velocity=clamp(-MAX_PICKER_SPEED,23*t.velocityY,MAX_PICKER_SPEED),0===this.velocity&&0===t.deltaY){var e=t.event.target.closest(".picker-opt");e&&e.hasAttribute("opt-index")&&this.setSelected(parseInt(e.getAttribute("opt-index"),10),TRANSITION_DURATION)}else this.y+=t.deltaY,this.decelerate()},t.prototype.refresh=function(t){for(var e=this.col.options.length-1,i=0,n=this.col.options,r=0;r<n.length;r++)n[r].disabled||(e=Math.min(e,r),i=Math.max(i,r));var o=clamp(e,this.col.selectedIndex||0,i);if(this.col.prevSelected!==o||t){var a=o*this.optHeight*-1;this.velocity=0,this.update(a,TRANSITION_DURATION,!0)}},t.prototype.hostData=function(){return{class:{"picker-col":!0,"picker-opts-left":"left"===this.col.align,"picker-opts-right":"right"===this.col.align},style:{"max-width":this.col.columnWidth}}},t.prototype.render=function(){var t=this,e=this.col;return[e.prefix&&h("div",{class:"picker-prefix",style:{width:e.prefixWidth}},e.prefix),h("div",{class:"picker-opts",style:{maxWidth:e.optionsWidth},ref:function(e){return t.optsEl=e}},e.options.map(function(t,e){return h("button",{type:"button",class:{"picker-opt":!0,"picker-opt-disabled":!!t.disabled},"opt-index":e},t.text)})),e.suffix&&h("div",{class:"picker-suffix",style:{width:e.suffixWidth}},e.suffix)]},Object.defineProperty(t,"is",{get:function(){return"ion-picker-column"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{col:{type:"Any",attr:"col"},el:{elementRef:!0},queue:{context:"queue"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".picker-col{display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-box-sizing:content-box;box-sizing:content-box;contain:content}.picker-opts{position:relative;-ms-flex:1;flex:1;max-width:100%}.picker-opt{left:0;top:0;display:block;position:absolute;width:100%;border:0;text-align:center;text-overflow:ellipsis;white-space:nowrap;contain:strict;overflow:hidden;will-change:transform}:host-context([dir=rtl]) .picker-opt{right:0}.picker-opt.picker-opt-disabled{pointer-events:none}.picker-opt-disabled{opacity:0}.picker-opts-left{-ms-flex-pack:start;justify-content:flex-start}.picker-opts-right,:host-context([dir=rtl]) .picker-opts-left{-ms-flex-pack:end;justify-content:flex-end}:host-context([dir=rtl]) .picker-opts-right{-ms-flex-pack:start;justify-content:flex-start}.picker-opt:active,.picker-opt:focus{outline:none}.picker-prefix{text-align:end}.picker-prefix,.picker-suffix{position:relative;-ms-flex:1;flex:1;white-space:nowrap}.picker-suffix{text-align:start}.picker-col{padding-left:8px;padding-right:8px;padding-top:0;padding-bottom:0;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.picker-col{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}.picker-opts,.picker-prefix,.picker-suffix{top:77px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;color:inherit;font-size:22px;line-height:42px;pointer-events:none}.picker-opt{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;height:43px;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;background:transparent;color:inherit;font-size:22px;line-height:42px;-webkit-backface-visibility:hidden;backface-visibility:hidden;pointer-events:auto}.picker-opt.picker-opt-selected,.picker-prefix,.picker-suffix{color:var(--ion-color-primary,#3880ff)}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),t}(),PICKER_OPT_SELECTED="picker-opt-selected",DECELERATION_FRICTION=.97,MAX_PICKER_SPEED=90,TRANSITION_DURATION=150,PickerController=function(){function t(){}return t.prototype.create=function(t){return createOverlay(this.doc.createElement("ion-picker"),t)},t.prototype.dismiss=function(t,e,i){return dismissOverlay(this.doc,t,e,"ion-picker",i)},t.prototype.getTop=function(){return tslib_1.__awaiter(this,void 0,void 0,function(){return tslib_1.__generator(this,function(t){return[2,getOverlay(this.doc,"ion-picker")]})})},Object.defineProperty(t,"is",{get:function(){return"ion-picker-controller"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{create:{method:!0},dismiss:{method:!0},doc:{context:"document"},getTop:{method:!0}}},enumerable:!0,configurable:!0}),t}();export{Datetime as IonDatetime,Picker as IonPicker,PickerColumnCmp as IonPickerColumn,PickerController as IonPickerController};