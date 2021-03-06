/**********************************
* author: Mario Balibrera
*    web: mariobalibrera.com
*  email: mario.balibrera@gmail.com
**********************************/

js = { 'io': { 'modPath': '' } }

/***********
* package manager and build system from Dojo
* http://dojotoolkit.org
***********/
try {
    dojo; // dojo exists in the global namespace
    js.io.modPath = '../js.io';
}
catch(e) { // dojo does not exist in the global namespace
    // load dojo package manager and build system
    // TODO: trim this SIGNIFICANTLY
    (function(){var _1=null;if((_1||(typeof djConfig!="undefined"&&djConfig.scopeMap))&&(typeof window!="undefined")){var _2="",_3="",_4="",_5={},_6={};_1=_1||djConfig.scopeMap;for(var i=0;i<_1.length;i++){var _8=_1[i];_2+="var "+_8[0]+" = {}; "+_8[1]+" = "+_8[0]+";"+_8[1]+"._scopeName = '"+_8[1]+"';";_3+=(i==0?"":",")+_8[0];_4+=(i==0?"":",")+_8[1];_5[_8[0]]=_8[1];_6[_8[1]]=_8[0];}eval(_2+"dojo._scopeArgs = ["+_4+"];");dojo._scopePrefixArgs=_3;dojo._scopePrefix="(function("+_3+"){";dojo._scopeSuffix="})("+_4+")";dojo._scopeMap=_5;dojo._scopeMapRev=_6;}(function(){if(!this["console"]){this.console={log:function(){}};}var cn=["assert","count","debug","dir","dirxml","error","group","groupEnd","info","profile","profileEnd","time","timeEnd","trace","warn","log"];var i=0,tn;while((tn=cn[i++])){if(!console[tn]){(function(){var _c=tn+"";console[_c]=function(){var a=Array.apply({},arguments);a.unshift(_c+":");console.log(a.join(" "));};})();}}if(typeof dojo=="undefined"){this.dojo={_scopeName:"dojo",_scopePrefix:"",_scopePrefixArgs:"",_scopeSuffix:"",_scopeMap:{},_scopeMapRev:{}};}var d=dojo;if(typeof dijit=="undefined"){this.dijit={_scopeName:"dijit"};}if(typeof dojox=="undefined"){this.dojox={_scopeName:"dojox"};}if(!d._scopeArgs){d._scopeArgs=[dojo,dijit,dojox];}d.global=this;d.config={isDebug:false,debugAtAllCosts:false};if(typeof djConfig!="undefined"){for(var _f in djConfig){d.config[_f]=djConfig[_f];}}var _10=["Browser","Rhino","Spidermonkey","Mobile"];var t;while((t=_10.shift())){d["is"+t]=false;}dojo.locale=d.config.locale;var rev="$Rev: 13682 $".match(/\d+/);dojo.version={major:0,minor:0,patch:0,flag:"dev",revision:rev?+rev[0]:999999,toString:function(){with(d.version){return major+"."+minor+"."+patch+flag+" ("+revision+")";}}};if(typeof OpenAjax!="undefined"){OpenAjax.hub.registerLibrary(dojo._scopeName,"http://dojotoolkit.org",d.version.toString());}dojo._mixin=function(obj,_14){var _15={};for(var x in _14){if(_15[x]===undefined||_15[x]!=_14[x]){obj[x]=_14[x];}}if(d["isIE"]&&_14){var p=_14.toString;if(typeof p=="function"&&p!=obj.toString&&p!=_15.toString&&p!="\nfunction toString() {\n    [native code]\n}\n"){obj.toString=_14.toString;}}return obj;};dojo.mixin=function(obj,_19){for(var i=1,l=arguments.length;i<l;i++){d._mixin(obj,arguments[i]);}return obj;};dojo._getProp=function(_1c,_1d,_1e){var obj=_1e||d.global;for(var i=0,p;obj&&(p=_1c[i]);i++){if(i==0&&this._scopeMap[p]){p=this._scopeMap[p];}obj=(p in obj?obj[p]:(_1d?obj[p]={}:undefined));}return obj;};dojo.setObject=function(_22,_23,_24){var _25=_22.split("."),p=_25.pop(),obj=d._getProp(_25,true,_24);return obj&&p?(obj[p]=_23):undefined;};dojo.getObject=function(_28,_29,_2a){return d._getProp(_28.split("."),_29,_2a);};dojo.exists=function(_2b,obj){return !!d.getObject(_2b,false,obj);};dojo["eval"]=function(_2d){return d.global.eval?d.global.eval(_2d):eval(_2d);};d.deprecated=d.experimental=function(){};})();(function(){var d=dojo;d.mixin(d,{_loadedModules:{},_inFlightCount:0,_hasResource:{},_modulePrefixes:{dojo:{name:"dojo",value:"."},doh:{name:"doh",value:"../util/doh"},tests:{name:"tests",value:"tests"}},_moduleHasPrefix:function(_2f){var mp=this._modulePrefixes;return !!(mp[_2f]&&mp[_2f].value);},_getModulePrefix:function(_31){var mp=this._modulePrefixes;if(this._moduleHasPrefix(_31)){return mp[_31].value;}return _31;},_loadedUrls:[],_postLoad:false,_loaders:[],_unloaders:[],_loadNotifying:false});dojo._loadPath=function(_33,_34,cb){var uri=((_33.charAt(0)=="/"||_33.match(/^\w+:/))?"":this.baseUrl)+_33;try{return !_34?this._loadUri(uri,cb):this._loadUriAndCheck(uri,_34,cb);}catch(e){console.error(e);return false;}};dojo._loadUri=function(uri,cb){if(this._loadedUrls[uri]){return true;}var _39=this._getText(uri,true);if(!_39){return false;}this._loadedUrls[uri]=true;this._loadedUrls.push(uri);if(cb){_39="("+_39+")";}else{_39=this._scopePrefix+_39+this._scopeSuffix;}if(d.isMoz){_39+="\r\n//@ sourceURL="+uri;}var _3a=d["eval"](_39);if(cb){cb(_3a);}return true;};dojo._loadUriAndCheck=function(uri,_3c,cb){var ok=false;try{ok=this._loadUri(uri,cb);}catch(e){console.error("failed loading "+uri+" with error: "+e);}return !!(ok&&this._loadedModules[_3c]);};dojo.loaded=function(){this._loadNotifying=true;this._postLoad=true;var mll=d._loaders;this._loaders=[];for(var x=0;x<mll.length;x++){try{mll[x]();}catch(e){throw e;console.error("dojo.addOnLoad callback failed: "+e,e);}}this._loadNotifying=false;if(d._postLoad&&d._inFlightCount==0&&mll.length){d._callLoaded();}};dojo.unloaded=function(){var mll=this._unloaders;while(mll.length){(mll.pop())();}};var _42=function(arr,obj,fn){if(!fn){arr.push(obj);}else{if(fn){var _46=(typeof fn=="string")?obj[fn]:fn;arr.push(function(){_46.call(obj);});}}};dojo.addOnLoad=function(obj,_48){_42(d._loaders,obj,_48);if(d._postLoad&&d._inFlightCount==0&&!d._loadNotifying){d._callLoaded();}};var dca=d.config.addOnLoad;if(dca){d.addOnLoad[(dca instanceof Array?"apply":"call")](d,dca);}dojo.addOnUnload=function(obj,_4b){_42(d._unloaders,obj,_4b);};dojo._modulesLoaded=function(){if(d._postLoad){return;}if(d._inFlightCount>0){console.warn("files still in flight!");return;}d._callLoaded();};dojo._callLoaded=function(){if(typeof setTimeout=="object"||(dojo.config.useXDomain&&d.isOpera)){if(dojo.isAIR){setTimeout(function(){dojo.loaded();},0);}else{setTimeout(dojo._scopeName+".loaded();",0);}}else{d.loaded();}};dojo._getModuleSymbols=function(_4c){var _4d=_4c.split(".");for(var i=_4d.length;i>0;i--){var _4f=_4d.slice(0,i).join(".");if((i==1)&&!this._moduleHasPrefix(_4f)){_4d[0]="../"+_4d[0];}else{var _50=this._getModulePrefix(_4f);if(_50!=_4f){_4d.splice(0,i,_50);break;}}}return _4d;};dojo._global_omit_module_check=false;dojo.loadInit=function(_51){_51();};dojo._loadModule=dojo.require=function(_52,_53){_53=this._global_omit_module_check||_53;var _54=this._loadedModules[_52];if(_54){return _54;}var _55=this._getModuleSymbols(_52).join("/")+".js";var _56=(!_53)?_52:null;var ok=this._loadPath(_55,_56);if(!ok&&!_53){throw new Error("Could not load '"+_52+"'; last tried '"+_55+"'");}if(!_53&&!this._isXDomain){_54=this._loadedModules[_52];if(!_54){throw new Error("symbol '"+_52+"' is not defined after loading '"+_55+"'");}}return _54;};dojo.provide=function(_58){_58=_58+"";return (d._loadedModules[_58]=d.getObject(_58,true));};dojo.platformRequire=function(_59){var _5a=_59.common||[];var _5b=_5a.concat(_59[d._name]||_59["default"]||[]);for(var x=0;x<_5b.length;x++){var _5d=_5b[x];if(_5d.constructor==Array){d._loadModule.apply(d,_5d);}else{d._loadModule(_5d);}}};dojo.requireIf=function(_5e,_5f){if(_5e===true){var _60=[];for(var i=1;i<arguments.length;i++){_60.push(arguments[i]);}d.require.apply(d,_60);}};dojo.requireAfterIf=d.requireIf;dojo.registerModulePath=function(_62,_63){d._modulePrefixes[_62]={name:_62,value:_63};};dojo.requireLocalization=function(_64,_65,_66,_67){d.require("dojo.i18n");d.i18n._requireLocalization.apply(d.hostenv,arguments);};var ore=new RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?$");var ire=new RegExp("^((([^\\[:]+):)?([^@]+)@)?(\\[([^\\]]+)\\]|([^\\[:]*))(:([0-9]+))?$");dojo._Url=function(){var n=null;var _a=arguments;var uri=[_a[0]];for(var i=1;i<_a.length;i++){if(!_a[i]){continue;}var _6e=new d._Url(_a[i]+"");var _6f=new d._Url(uri[0]+"");if(_6e.path==""&&!_6e.scheme&&!_6e.authority&&!_6e.query){if(_6e.fragment!=n){_6f.fragment=_6e.fragment;}_6e=_6f;}else{if(!_6e.scheme){_6e.scheme=_6f.scheme;if(!_6e.authority){_6e.authority=_6f.authority;if(_6e.path.charAt(0)!="/"){var _70=_6f.path.substring(0,_6f.path.lastIndexOf("/")+1)+_6e.path;var _71=_70.split("/");for(var j=0;j<_71.length;j++){if(_71[j]=="."){if(j==_71.length-1){_71[j]="";}else{_71.splice(j,1);j--;}}else{if(j>0&&!(j==1&&_71[0]=="")&&_71[j]==".."&&_71[j-1]!=".."){if(j==(_71.length-1)){_71.splice(j,1);_71[j-1]="";}else{_71.splice(j-1,2);j-=2;}}}}_6e.path=_71.join("/");}}}}uri=[];if(_6e.scheme){uri.push(_6e.scheme,":");}if(_6e.authority){uri.push("//",_6e.authority);}uri.push(_6e.path);if(_6e.query){uri.push("?",_6e.query);}if(_6e.fragment){uri.push("#",_6e.fragment);}}this.uri=uri.join("");var r=this.uri.match(ore);this.scheme=r[2]||(r[1]?"":n);this.authority=r[4]||(r[3]?"":n);this.path=r[5];this.query=r[7]||(r[6]?"":n);this.fragment=r[9]||(r[8]?"":n);if(this.authority!=n){r=this.authority.match(ire);this.user=r[3]||n;this.password=r[4]||n;this.host=r[6]||r[7];this.port=r[9]||n;}};dojo._Url.prototype.toString=function(){return this.uri;};dojo.moduleUrl=function(_74,url){var loc=d._getModuleSymbols(_74).join("/");if(!loc){return null;}if(loc.lastIndexOf("/")!=loc.length-1){loc+="/";}var _77=loc.indexOf(":");if(loc.charAt(0)!="/"&&(_77==-1||_77>loc.indexOf("/"))){loc=d.baseUrl+loc;}return new d._Url(loc,url);};})();if(typeof window!="undefined"){dojo.isBrowser=true;dojo._name="browser";(function(){var d=dojo;if(document&&document.getElementsByTagName){var _79=document.getElementsByTagName("script");var _7a=/dojo(\.xd)?\.js(\W|$)/i;for(var i=0;i<_79.length;i++){var src=_79[i].getAttribute("src");if(!src){continue;}var m=src.match(_7a);if(m){if(!d.config.baseUrl){d.config.baseUrl=src.substring(0,m.index);}var cfg=_79[i].getAttribute("djConfig");if(cfg){var _7f=eval("({ "+cfg+" })");for(var x in _7f){dojo.config[x]=_7f[x];}}break;}}}d.baseUrl=d.config.baseUrl;var n=navigator;var dua=n.userAgent;var dav=n.appVersion;var pf=parseFloat;var tv=pf(dav);d.isOpera=(dua.indexOf("Opera")>=0)?tv:0;var idx=Math.max(dav.indexOf("WebKit"),dav.indexOf("Safari"),0);if(idx){d.isSafari=pf(dav.split("Version/")[1])||((pf(dav.substr(idx+7))>=419.3)?3:2)||2;}d.isAIR=(dua.indexOf("AdobeAIR")>=0)?1:0;d.isKhtml=(dav.indexOf("Konqueror")>=0||d.isSafari)?tv:0;d.isMozilla=d.isMoz=(dua.indexOf("Gecko")>=0&&!d.isKhtml)?tv:0;d.isFF=d.isIE=0;if(d.isMoz){d.isFF=pf(dua.split("Firefox/")[1])||0;}if(document.all&&!d.isOpera){d.isIE=pf(dav.split("MSIE ")[1])||0;}if(dojo.isIE&&window.location.protocol==="file:"){dojo.config.ieForceActiveXXhr=true;}var cm=document.compatMode;d.isQuirks=cm=="BackCompat"||cm=="QuirksMode"||d.isIE<6;d.locale=dojo.config.locale||(d.isIE?n.userLanguage:n.language).toLowerCase();d._XMLHTTP_PROGIDS=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"];d._xhrObj=function(){var _88=null;var _89=null;if(!dojo.isIE||!dojo.config.ieForceActiveXXhr){try{_88=new XMLHttpRequest();}catch(e){}}if(!_88){for(var i=0;i<3;++i){var _8b=d._XMLHTTP_PROGIDS[i];try{_88=new ActiveXObject(_8b);}catch(e){_89=e;}if(_88){d._XMLHTTP_PROGIDS=[_8b];break;}}}if(!_88){throw new Error("XMLHTTP not available: "+_89);}return _88;};d._isDocumentOk=function(_8c){var _8d=_8c.status||0;return (_8d>=200&&_8d<300)||_8d==304||_8d==1223||(!_8d&&(location.protocol=="file:"||location.protocol=="chrome:"));};var _8e=window.location+"";var _8f=document.getElementsByTagName("base");var _90=(_8f&&_8f.length>0);d._getText=function(uri,_92){var _93=this._xhrObj();if(!_90&&dojo._Url){uri=(new dojo._Url(_8e,uri)).toString();}if(d.config.cacheBust){uri+="";uri+=(uri.indexOf("?")==-1?"?":"&")+String(d.config.cacheBust).replace(/\W+/g,"");}_93.open("GET",uri,false);try{_93.send(null);if(!d._isDocumentOk(_93)){var err=Error("Unable to load "+uri+" status:"+_93.status);err.status=_93.status;err.responseText=_93.responseText;throw err;}}catch(e){if(_92){return null;}throw e;}return _93.responseText;};})();dojo._initFired=false;dojo._loadInit=function(e){dojo._initFired=true;var _96=(e&&e.type)?e.type.toLowerCase():"load";if(arguments.callee.initialized||(_96!="domcontentloaded"&&_96!="load")){return;}arguments.callee.initialized=true;if("_khtmlTimer" in dojo){clearInterval(dojo._khtmlTimer);delete dojo._khtmlTimer;}if(dojo._inFlightCount==0){dojo._modulesLoaded();}};dojo._fakeLoadInit=function(){dojo._loadInit({type:"load"});};if(!dojo.config.afterOnLoad){if(document.addEventListener){if(dojo.isOpera||dojo.isFF>=3||(dojo.isMoz&&dojo.config.enableMozDomContentLoaded===true)){document.addEventListener("DOMContentLoaded",dojo._loadInit,null);}window.addEventListener("load",dojo._loadInit,null);}if(dojo.isAIR){window.addEventListener("load",dojo._loadInit,null);}else{if(/(WebKit|khtml)/i.test(navigator.userAgent)){dojo._khtmlTimer=setInterval(function(){if(/loaded|complete/.test(document.readyState)){dojo._loadInit();}},10);}}}(function(){var _w=window;var _98=function(_99,fp){var _9b=_w[_99]||function(){};_w[_99]=function(){fp.apply(_w,arguments);_9b.apply(_w,arguments);};};if(dojo.isIE){if(!dojo.config.afterOnLoad){document.write("<scr"+"ipt defer src=\"//:\" "+"onreadystatechange=\"if(this.readyState=='complete'){"+dojo._scopeName+"._loadInit();}\">"+"</scr"+"ipt>");}try{document.namespaces.add("v","urn:schemas-microsoft-com:vml");document.createStyleSheet().addRule("v\\:*","behavior:url(#default#VML)");}catch(e){}}_98("onbeforeunload",function(){dojo.unloaded();});})();}(function(){var mp=dojo.config["modulePaths"];if(mp){for(var _9d in mp){dojo.registerModulePath(_9d,mp[_9d]);}}})();if(dojo.config.isDebug){dojo.require("dojo._firebug.firebug");}if(dojo.config.debugAtAllCosts){dojo.config.useXDomain=true;dojo.require("dojo._base._loader.loader_xd");dojo.require("dojo._base._loader.loader_debug");dojo.require("dojo.i18n");}if(!dojo._hasResource["dojo._base"]){dojo._hasResource["dojo._base"]=true;dojo.provide("dojo._base");dojo.provide("dojo._base.browser");dojo.provide("dojo._base._stubs");(function(){var d=dojo;d._stubs={"dojo._base.lang":{"dojo":["trim","clone","_toArray","partial","delegate","_delegate","hitch","_hitchArgs","extend","isAlien","isArrayLike","isObject","isFunction","isArray","isString"]},"dojo._base.declare":{"dojo":["declare"]},"dojo._base.connect":{"dojo":["subscribe","unsubscribe","publish","connectPublisher"]},"dojo._base.Deferred":{"dojo":["Deferred"]},"dojo._base.json":{"dojo":["fromJson","_escapeString","toJson"]},"dojo._base.array":{"dojo":["indexOf","lastIndexOf","forEach","_everyOrSome","every","some","map","filter"]},"dojo._base.Color":{"dojo":["Color","blendColors","colorFromRgb","colorFromHex","colorFromArray","colorFromString"]},"dojo._base.window":{"dojo":["_gearsObject","isGears","body","setContext","_fireCallback","withGlobal","withDoc"]},"dojo._base.event":{"dojo":["connect","disconnect","fixEvent","stopEvent","_connect","_disconnect","_ieDispatcher","_getIeDispatcher"]},"dojo._base.html":{"dojo":["byId","_destroyElement","isDescendant","setSelectable","place","getComputedStyle","_toPixelValue","_getOpacity","_setOpacity","style","_getPadExtents","_getBorderExtents","_getPadBorderExtents","_getMarginExtents","_getMarginBox","_getContentBox","_getBorderBox","_setBox","_usesBorderBox","_setContentSize","_setMarginBox","marginBox","contentBox","_docScroll","_isBodyLtr","_getIeDocumentElementOffset","_fixIeBiDiScrollLeft","_abs","coords","hasAttr","attr","removeAttr","hasClass","addClass","removeClass","toggleClass"]},"dojo._base.NodeList":{"dojo":["NodeList"],"dojo.NodeList":["_wrap"]},"dojo._base.query":{"dojo":["_filterQueryResult","query"]},"dojo._base.xhr":{"dojo":["formToObject","objectToQuery","formToQuery","formToJson","queryToObject","_ioSetArgs","_ioCancelAll","_ioAddQueryToUrl","xhr","xhrGet","rawXhrPost","rawXhrPut","xhrDelete","wrapForm"]},"dojo._base.fx":{"dojo":["_Line","_Animation","_fade","fadeIn","fadeOut","_defaultEasing","animateProperty","anim"]}};var _9f=function(len){var r=[];for(var x=0;x<len;x++){r.push("a["+x+"]");}return eval(["(function(c, a){ return new c(",r.join(","),"); })"].join(""));};var _a3={};var _a4=function(_a5,ns,_a7){var wns=d.getObject(ns);if(!wns[_a7]){var nc=_a7.charAt(0);var _aa=(nc!=nc.toLowerCase());wns[_a7]=function(){d["require"](_a5);if(!_aa){return wns[_a7].apply(this,arguments);}else{return _9f(arguments.length)(wns[_a7],arguments);}};if(_aa){_a3[_a5]=_a3[_a5]||{};_a3[_a5][ns+"."+_a7]=true;}}};var dr=d.require;d.require=function(_ac){var wln=_a3[_ac];var old={};if(wln){for(var x in wln){old[x]=d.getObject(x);}}dr.apply(d,arguments);var p="prototype";if(wln){for(var x in old){var _b1=d.getObject(x);for(var y in old[x]){if(!_b1[y]){_b1[y]=old[x][y];}}for(var z in old[x][p]){if(!_b1[p][z]){_b1[p][z]=old[x][p][z];}}}_a3[_ac]=null;}};for(var x in d._stubs){var dx=d._stubs[x];for(var y in dx){var dy=dx[y];for(var z=0;z<dy.length;z++){var dz=dy[z];_a4(x,y,dz);}}}var r=d.config.require;if(r){for(var x=0;x<r.length;x++){d["require"](r[x]);}}d.doc=d.doc||window["document"]||null;try{document.execCommand("BackgroundImageCache",false,true);}catch(e){}})();}if(dojo.config.afterOnLoad&&dojo.isBrowser){window.setTimeout(dojo._fakeLoadInit,1000);}})();
    // + dojo._base.lang:
    dojo._hasResource["dojo._base.lang"]=true;dojo.provide("dojo._base.lang");dojo.isString=function(it){return !!arguments.length&&it!=null&&(typeof it=="string"||it instanceof String);};dojo.isArray=function(it){return it&&(it instanceof Array||typeof it=="array");};dojo.isFunction=(function(){var _3=function(it){return it&&(typeof it=="function"||it instanceof Function);};return dojo.isSafari?function(it){if(typeof it=="function"&&it=="[object NodeList]"){return false;}return _3(it);}:_3;})();dojo.isObject=function(it){return it!==undefined&&(it===null||typeof it=="object"||dojo.isArray(it)||dojo.isFunction(it));};dojo.isArrayLike=function(it){var d=dojo;return it&&it!==undefined&&!d.isString(it)&&!d.isFunction(it)&&!(it.tagName&&it.tagName.toLowerCase()=="form")&&(d.isArray(it)||isFinite(it.length));};dojo.isAlien=function(it){return it&&!dojo.isFunction(it)&&/\{\s*\[native code\]\s*\}/.test(String(it));};dojo.extend=function(_a,_b){for(var i=1,l=arguments.length;i<l;i++){dojo._mixin(_a.prototype,arguments[i]);}return _a;};dojo._hitchArgs=function(_e,_f){var pre=dojo._toArray(arguments,2);var _11=dojo.isString(_f);return function(){var _12=dojo._toArray(arguments);var f=_11?(_e||dojo.global)[_f]:_f;return f&&f.apply(_e||this,pre.concat(_12));};};dojo.hitch=function(_14,_15){if(arguments.length>2){return dojo._hitchArgs.apply(dojo,arguments);}if(!_15){_15=_14;_14=null;}if(dojo.isString(_15)){_14=_14||dojo.global;if(!_14[_15]){throw (["dojo.hitch: scope[\"",_15,"\"] is null (scope=\"",_14,"\")"].join(""));}return function(){return _14[_15].apply(_14,arguments||[]);};}return !_14?_15:function(){return _15.apply(_14,arguments||[]);};};dojo.delegate=dojo._delegate=function(obj,_17){function TMP(){};TMP.prototype=obj;var tmp=new TMP();if(_17){dojo.mixin(tmp,_17);}return tmp;};dojo.partial=function(_19){var arr=[null];return dojo.hitch.apply(dojo,arr.concat(dojo._toArray(arguments)));};dojo._toArray=function(obj,_1c,_1d){var arr=_1d||[];for(var x=_1c||0;x<obj.length;x++){arr.push(obj[x]);}return arr;};dojo.clone=function(o){if(!o){return o;}if(dojo.isArray(o)){var r=[];for(var i=0;i<o.length;++i){r.push(dojo.clone(o[i]));}return r;}if(!dojo.isObject(o)){return o;}if(o.nodeType&&o.cloneNode){return o.cloneNode(true);}if(o instanceof Date){return new Date(o.getTime());}var r=new o.constructor();for(var i in o){if(!(i in r)||r[i]!=o[i]){r[i]=dojo.clone(o[i]);}}return r;};dojo.trim=function(str){return str.replace(/^\s\s*/,"").replace(/\s\s*$/,"");};
    // + dojo.declare:
    dojo._hasResource["dojo._base.declare"]=true;dojo.provide("dojo._base.declare");dojo.require("dojo._base.lang");dojo.declare=function(_1,_2,_3){var dd=arguments.callee,_5;if(dojo.isArray(_2)){_5=_2;_2=_5.shift();}if(_5){dojo.forEach(_5,function(m){if(!m){throw (_1+": mixin #"+i+" is null");}_2=dd._delegate(_2,m);});}var _7=dd._delegate(_2);_3=_3||{};_7.extend(_3);dojo.extend(_7,{declaredClass:_1,_constructor:_3.constructor});_7.prototype.constructor=_7;return dojo.setObject(_1,_7);};dojo.mixin(dojo.declare,{_delegate:function(_8,_9){var bp=(_8||0).prototype,mp=(_9||0).prototype,dd=dojo.declare;var _d=dd._makeCtor();dojo.mixin(_d,{superclass:bp,mixin:mp,extend:dd._extend});if(_8){_d.prototype=dojo._delegate(bp);}dojo.extend(_d,dd._core,mp||0,{_constructor:null,preamble:null});_d.prototype.constructor=_d;_d.prototype.declaredClass=(bp||0).declaredClass+"_"+(mp||0).declaredClass;return _d;},_extend:function(_e){var i,fn;for(i in _e){if(dojo.isFunction(fn=_e[i])&&!0[i]){fn.nom=i;fn.ctor=this;}}dojo.extend(this,_e);},_makeCtor:function(){return function(){this._construct(arguments);};},_core:{_construct:function(_11){var c=_11.callee,s=c.superclass,ct=s&&s.constructor,m=c.mixin,mct=m&&m.constructor,a=_11,ii,fn;if(a[0]){if(((fn=a[0].preamble))){a=fn.apply(this,a)||a;}}if((fn=c.prototype.preamble)){a=fn.apply(this,a)||a;}if(ct&&ct.apply){ct.apply(this,a);}if(mct&&mct.apply){mct.apply(this,a);}if((ii=c.prototype._constructor)){ii.apply(this,_11);}if(this.constructor.prototype==c.prototype&&(ct=this.postscript)){ct.apply(this,_11);}},_findMixin:function(_1a){var c=this.constructor,p,m;while(c){p=c.superclass;m=c.mixin;if(m==_1a||(m instanceof _1a.constructor)){return p;}if(m&&m._findMixin&&(m=m._findMixin(_1a))){return m;}c=p&&p.constructor;}},_findMethod:function(_1e,_1f,_20,has){var p=_20,c,m,f;do{c=p.constructor;m=c.mixin;if(m&&(m=this._findMethod(_1e,_1f,m,has))){return m;}if((f=p[_1e])&&(has==(f==_1f))){return p;}p=c.superclass;}while(p);return !has&&(p=this._findMixin(_20))&&this._findMethod(_1e,_1f,p,has);},inherited:function(_26,_27,_28){var a=arguments;if(!dojo.isString(a[0])){_28=_27;_27=_26;_26=_27.callee.nom;}a=_28||_27;var c=_27.callee,p=this.constructor.prototype,fn,mp;if(this[_26]!=c||p[_26]==c){mp=(c.ctor||0).superclass||this._findMethod(_26,c,p,true);if(!mp){throw (this.declaredClass+": inherited method \""+_26+"\" mismatch");}p=this._findMethod(_26,c,mp,false);}fn=p&&p[_26];if(!fn){throw (mp.declaredClass+": inherited method \""+_26+"\" not found");}return fn.apply(this,a);}}});

    /********
    * figure out relative module path
    * based on dojo's path finder
    ********/
	var scripts = document.getElementsByTagName("script");
	for(var i = 0; i < scripts.length; i++) {
		var src = scripts[i].getAttribute("src");
		if(src) {
    		var bingo = src.indexOf('js.io.js');
	    	if(bingo != -1){
	    		js.io.modPath = src.substring(0, bingo-1);
	    		break;
            }
		}
	}

    /********
    * figure out full path
    ********/
    if (!js.io.modPath) {
        js.io.modPath = '.';
    }
    if (js.io.modPath[0] != '/' && js.io.modPath.indexOf('http:') != 0) {
        var docLocation = String(document.location).split('/');
        docLocation.pop();
        js.io.modPath = docLocation.join('/') + '/' + js.io.modPath;
    }
}

dojo.registerModulePath('js.io', js.io.modPath);

js.io.require = dojo.require;
js.io.provide = dojo.provide;
js.io.declare = dojo.declare;
js.io.DEBUG = false;

js.io.getLogger = function(/*String*/ loggerName, /*bool*/ loggerOn) {
    if (loggerOn == null) {
        loggerOn = js.io.DEBUG;
    }
    if (loggerOn && typeof(Orbited)) {
        var logger = Orbited.getLogger(name);
        if (!("dir" in logger)) {
            logger.dir = function() {};
        }
        return logger;
    }
    else if (loggerOn && typeof(console)) {
        return {
            debug: function() {
                var args = Array.prototype.slice.call(arguments);
                args.unshift(name, ": ");
                console.debug.apply(console, args);
            },
            dir: function() {
                console.debug(name, ":");
                console.dir.apply(console, arguments);
            }
        };
    }
    else {
        return {
            debug: function() {},
            dir: function() {}
        };
    }
}

js.io.setWebSocket = function() {
    /***********
    * calling this at the beginning of your
    * websocket application ensures that
    * your code will utilize native websocket
    * support in HTML5-compliant browsers,
    * while still working properly in older
    * browsers by way of a TCPSocket proxy.
    ***********/
    if (!window.WebSocket) {
        js.io.require("js.io.protocols.websocket");
        WebSocket = js.io.protocols.websocket.Client;
    }
}

js.io.setSocket = function(/*Socket*/ s) {
    /***************
    * shouldn't be necessary to call js.io.setSocket manually
    * unless you're using a socket we don't know about,
    * in which case, you should notify the mailing list
    ***************/
    if (s) { // manual socket setting
        js.io.TCPSocket = s;
    }
    else if (js.io.TCPSocket == null) { // socket discovery
        js.io.TCPSocket = _discoverSocket();
    }
}

var _discoverSocket = function() {
    try { return TCPSocket; } catch(e) {}         // browser (someday)
    try { return Orbited.TCPSocket; } catch(e) {} // Orbited
    // discover other sockets here...
}

js.io.setSocket();