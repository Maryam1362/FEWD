/*!
 * ZeroClipboard
 * The ZeroClipboard library provides an easy way to copy text to the clipboard using an invisible Adobe Flash movie and a JavaScript interface.
 * Copyright (c) 2009-2014 Jon Rohan, James M. Greene
 * Licensed MIT
 * http://zeroclipboard.org/
 * v2.2.0
 */
(function(a8,G){var bf=a8,bh=bf.document,O=bf.navigator,A=bf.setTimeout,p=bf.clearTimeout,X=bf.setInterval,e=bf.clearInterval,aO=bf.getComputedStyle,a0=bf.encodeURIComponent,av=bf.ActiveXObject,ax=bf.Error,ao=bf.Number.parseInt||bf.parseInt,U=bf.Number.parseFloat||bf.parseFloat,Z=bf.Number.isNaN||bf.isNaN,V=bf.Date.now,an=bf.Object.keys,aN=bf.Object.defineProperty,aG=bf.Object.prototype.hasOwnProperty,j=bf.Array.prototype.slice,aW=function(){var bl=function(bm){return bm
};
if(typeof bf.wrap==="function"&&typeof bf.unwrap==="function"){try{var bk=bh.createElement("div");
var bi=bf.unwrap(bk);
if(bk.nodeType===1&&bi&&bi.nodeType===1){bl=bf.unwrap
}}catch(bj){}}return bl
}();
var aQ=function(bi){return j.call(bi,0)
};
var aM=function(){var bl,bj,bi,bp,bn,bo,bk=aQ(arguments),bm=bk[0]||{};
for(bl=1,bj=bk.length;
bl<bj;
bl++){if((bi=bk[bl])!=null){for(bp in bi){if(aG.call(bi,bp)){bn=bm[bp];
bo=bi[bp];
if(bm!==bo&&bo!==G){bm[bp]=bo
}}}}}return bm
};
var K=function(bk){var bm,bj,bi,bl;
if(typeof bk!=="object"||bk==null||typeof bk.nodeType==="number"){bm=bk
}else{if(typeof bk.length==="number"){bm=[];
for(bj=0,bi=bk.length;
bj<bi;
bj++){if(aG.call(bk,bj)){bm[bj]=K(bk[bj])
}}}else{bm={};
for(bl in bk){if(aG.call(bk,bl)){bm[bl]=K(bk[bl])
}}}}return bm
};
var s=function(bm,bl){var bj={};
for(var bk=0,bi=bl.length;
bk<bi;
bk++){if(bl[bk] in bm){bj[bl[bk]]=bm[bl[bk]]
}}return bj
};
var bd=function(bk,bj){var bi={};
for(var bl in bk){if(bj.indexOf(bl)===-1){bi[bl]=bk[bl]
}}return bi
};
var ap=function(bi){if(bi){for(var bj in bi){if(aG.call(bi,bj)){delete bi[bj]
}}}return bi
};
var aP=function(bi,bj){if(bi&&bi.nodeType===1&&bi.ownerDocument&&bj&&(bj.nodeType===1&&bj.ownerDocument&&bj.ownerDocument===bi.ownerDocument||bj.nodeType===9&&!bj.ownerDocument&&bj===bi.ownerDocument)){do{if(bi===bj){return true
}bi=bi.parentNode
}while(bi)
}return false
};
var M=function(bj){var bi;
if(typeof bj==="string"&&bj){bi=bj.split("#")[0].split("?")[0];
bi=bj.slice(0,bj.lastIndexOf("/")+1)
}return bi
};
var R=function(bi){var bj,bk;
if(typeof bi==="string"&&bi){bk=bi.match(/^(?:|[^:@]*@|.+\)@(?=http[s]?|file)|.+?\s+(?: at |@)(?:[^:\(]+ )*[\(]?)((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/);
if(bk&&bk[1]){bj=bk[1]
}else{bk=bi.match(/\)@((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/);
if(bk&&bk[1]){bj=bk[1]
}}}return bj
};
var ay=function(){var bi,bj;
try{throw new ax()
}catch(bk){bj=bk
}if(bj){bi=bj.sourceURL||bj.fileName||R(bj.stack)
}return bi
};
var aL=function(){var bk,bi,bj;
if(bh.currentScript&&(bk=bh.currentScript.src)){return bk
}bi=bh.getElementsByTagName("script");
if(bi.length===1){return bi[0].src||G
}if("readyState" in bi[0]){for(bj=bi.length;
bj--;
){if(bi[bj].readyState==="interactive"&&(bk=bi[bj].src)){return bk
}}}if(bh.readyState==="loading"&&(bk=bi[bi.length-1].src)){return bk
}if(bk=ay()){return bk
}return G
};
var B=function(){var bk,bj,bl,bi=bh.getElementsByTagName("script");
for(bk=bi.length;
bk--;
){if(!(bl=bi[bk].src)){bj=null;
break
}bl=M(bl);
if(bj==null){bj=bl
}else{if(bj!==bl){bj=null;
break
}}}return bj||G
};
var y=function(){var bi=M(aL())||B()||"";
return bi+"ZeroClipboard.swf"
};
var ab=function(){return a8.opener==null&&(!!a8.top&&a8!=a8.top||!!a8.parent&&a8!=a8.parent)
}();
var n={bridge:null,version:"0.0.0",pluginType:"unknown",disabled:null,outdated:null,sandboxed:null,unavailable:null,degraded:null,deactivated:null,overdue:null,ready:null};
var aq="11.0.0";
var a5;
var au={};
var ai;
var r;
var t={};
var aw=null;
var o=0;
var W=0;
var k={ready:"Flash communication is established",error:{"flash-disabled":"Flash is disabled or not installed. May also be attempting to run Flash in a sandboxed iframe, which is impossible.","flash-outdated":"Flash is too outdated to support ZeroClipboard","flash-sandboxed":"Attempting to run Flash in a sandboxed iframe, which is impossible","flash-unavailable":"Flash is unable to communicate bidirectionally with JavaScript","flash-degraded":"Flash is unable to preserve data fidelity when communicating with JavaScript","flash-deactivated":"Flash is too outdated for your browser and/or is configured as click-to-activate.\nThis may also mean that the ZeroClipboard SWF object could not be loaded, so please check your `swfPath` configuration and/or network connectivity.\nMay also be attempting to run Flash in a sandboxed iframe, which is impossible.","flash-overdue":"Flash communication was established but NOT within the acceptable time limit","version-mismatch":"ZeroClipboard JS version number does not match ZeroClipboard SWF version number","clipboard-error":"At least one error was thrown while ZeroClipboard was attempting to inject your data into the clipboard","config-mismatch":"ZeroClipboard configuration does not match Flash's reality","swf-not-found":"The ZeroClipboard SWF object could not be loaded, so please check your `swfPath` configuration and/or network connectivity"}};
var bc=["flash-unavailable","flash-degraded","flash-overdue","version-mismatch","config-mismatch","clipboard-error"];
var aV=["flash-disabled","flash-outdated","flash-sandboxed","flash-unavailable","flash-degraded","flash-deactivated","flash-overdue"];
var N=new RegExp("^flash-("+aV.map(function(bi){return bi.replace(/^flash-/,"")
}).join("|")+")$");
var aj=new RegExp("^flash-("+aV.slice(1).map(function(bi){return bi.replace(/^flash-/,"")
}).join("|")+")$");
var a2={swfPath:y(),trustedDomains:a8.location.host?[a8.location.host]:[],cacheBust:true,forceEnhancedClipboard:false,flashLoadTimeout:30000,autoActivate:true,bubbleEvents:true,containerId:"global-zeroclipboard-html-bridge",containerClass:"global-zeroclipboard-container",swfObjectId:"global-zeroclipboard-flash-bridge",hoverClass:"zeroclipboard-is-hover",activeClass:"zeroclipboard-is-active",forceHandCursor:false,title:null,zIndex:999999999};
var aJ=function(bi){if(typeof bi==="object"&&bi!==null){for(var bj in bi){if(aG.call(bi,bj)){if(/^(?:forceHandCursor|title|zIndex|bubbleEvents)$/.test(bj)){a2[bj]=bi[bj]
}else{if(n.bridge==null){if(bj==="containerId"||bj==="swfObjectId"){if(a9(bi[bj])){a2[bj]=bi[bj]
}else{throw new Error("The specified `"+bj+"` value is not valid as an HTML4 Element ID")
}}else{a2[bj]=bi[bj]
}}}}}}if(typeof bi==="string"&&bi){if(aG.call(a2,bi)){return a2[bi]
}return
}return K(a2)
};
var aR=function(){ba();
return{browser:s(O,["userAgent","platform","appName"]),flash:bd(n,["bridge"]),zeroclipboard:{version:bg.version,config:bg.config()}}
};
var w=function(){return !!(n.disabled||n.outdated||n.sandboxed||n.unavailable||n.degraded||n.deactivated)
};
var aa=function(bl,bn){var bk,bi,bj,bm={};
if(typeof bl==="string"&&bl){bj=bl.toLowerCase().split(/\s+/)
}else{if(typeof bl==="object"&&bl&&typeof bn==="undefined"){for(bk in bl){if(aG.call(bl,bk)&&typeof bk==="string"&&bk&&typeof bl[bk]==="function"){bg.on(bk,bl[bk])
}}}}if(bj&&bj.length){for(bk=0,bi=bj.length;
bk<bi;
bk++){bl=bj[bk].replace(/^on/,"");
bm[bl]=true;
if(!au[bl]){au[bl]=[]
}au[bl].push(bn)
}if(bm.ready&&n.ready){bg.emit({type:"ready"})
}if(bm.error){for(bk=0,bi=aV.length;
bk<bi;
bk++){if(n[aV[bk].replace(/^flash-/,"")]===true){bg.emit({type:"error",name:aV[bk]});
break
}}if(a5!==G&&bg.version!==a5){bg.emit({type:"error",name:"version-mismatch",jsVersion:bg.version,swfVersion:a5})
}}}return bg
};
var bb=function(bm,bn){var bl,bi,bo,bk,bj;
if(arguments.length===0){bk=an(au)
}else{if(typeof bm==="string"&&bm){bk=bm.split(/\s+/)
}else{if(typeof bm==="object"&&bm&&typeof bn==="undefined"){for(bl in bm){if(aG.call(bm,bl)&&typeof bl==="string"&&bl&&typeof bm[bl]==="function"){bg.off(bl,bm[bl])
}}}}}if(bk&&bk.length){for(bl=0,bi=bk.length;
bl<bi;
bl++){bm=bk[bl].toLowerCase().replace(/^on/,"");
bj=au[bm];
if(bj&&bj.length){if(bn){bo=bj.indexOf(bn);
while(bo!==-1){bj.splice(bo,1);
bo=bj.indexOf(bn,bo)
}}else{bj.length=0
}}}}return bg
};
var c=function(bi){var bj;
if(typeof bi==="string"&&bi){bj=K(au[bi])||null
}else{bj=K(au)
}return bj
};
var aH=function(bk){var bl,bj,bi;
bk=F(bk);
if(!bk){return
}if(a4(bk)){return
}if(bk.type==="ready"&&n.overdue===true){return bg.emit({type:"error",name:"flash-overdue"})
}bl=aM({},bk);
am.call(this,bl);
if(bk.type==="copy"){bi=m(t);
bj=bi.data;
aw=bi.formatMap
}return bj
};
var L=function(){var bi=n.sandboxed;
ba();
if(typeof n.ready!=="boolean"){n.ready=false
}if(n.sandboxed!==bi&&n.sandboxed===true){n.ready=false;
bg.emit({type:"error",name:"flash-sandboxed"})
}else{if(!bg.isFlashUnusable()&&n.bridge===null){var bj=a2.flashLoadTimeout;
if(typeof bj==="number"&&bj>=0){o=A(function(){if(typeof n.deactivated!=="boolean"){n.deactivated=true
}if(n.deactivated===true){bg.emit({type:"error",name:"flash-deactivated"})
}},bj)
}n.overdue=false;
az()
}}};
var Y=function(){bg.clearData();
bg.blur();
bg.emit("destroy");
f();
bg.off()
};
var g=function(bk,bj){var bi;
if(typeof bk==="object"&&bk&&typeof bj==="undefined"){bi=bk;
bg.clearData()
}else{if(typeof bk==="string"&&bk){bi={};
bi[bk]=bj
}else{return
}}for(var bl in bi){if(typeof bl==="string"&&bl&&aG.call(bi,bl)&&typeof bi[bl]==="string"&&bi[bl]){t[bl]=bi[bl]
}}};
var q=function(bi){if(typeof bi==="undefined"){ap(t);
aw=null
}else{if(typeof bi==="string"&&aG.call(t,bi)){delete t[bi]
}}};
var C=function(bi){if(typeof bi==="undefined"){return K(t)
}else{if(typeof bi==="string"&&aG.call(t,bi)){return t[bi]
}}};
var aS=function(bk){if(!(bk&&bk.nodeType===1)){return
}if(ai){aA(ai,a2.activeClass);
if(ai!==bk){aA(ai,a2.hoverClass)
}}ai=bk;
ae(bk,a2.hoverClass);
var bl=bk.getAttribute("title")||a2.title;
if(typeof bl==="string"&&bl){var bj=be(n.bridge);
if(bj){bj.setAttribute("title",bl)
}}var bi=a2.forceHandCursor===true||I(bk,"cursor")==="pointer";
a6(bi);
a7()
};
var aK=function(){var bi=be(n.bridge);
if(bi){bi.removeAttribute("title");
bi.style.left="0px";
bi.style.top="-9999px";
bi.style.width="1px";
bi.style.height="1px"
}if(ai){aA(ai,a2.hoverClass);
aA(ai,a2.activeClass);
ai=null
}};
var ah=function(){return ai||null
};
var a9=function(bi){return typeof bi==="string"&&bi&&/^[A-Za-z][A-Za-z0-9_:\-\.]*$/.test(bi)
};
var F=function(bj){var bi;
if(typeof bj==="string"&&bj){bi=bj;
bj={}
}else{if(typeof bj==="object"&&bj&&typeof bj.type==="string"&&bj.type){bi=bj.type
}}if(!bi){return
}bi=bi.toLowerCase();
if(!bj.target&&(/^(copy|aftercopy|_click)$/.test(bi)||bi==="error"&&bj.name==="clipboard-error")){bj.target=r
}aM(bj,{type:bi,target:bj.target||ai||null,relatedTarget:bj.relatedTarget||null,currentTarget:n&&n.bridge||null,timeStamp:bj.timeStamp||V()||null});
var bk=k[bj.type];
if(bj.type==="error"&&bj.name&&bk){bk=bk[bj.name]
}if(bk){bj.message=bk
}if(bj.type==="ready"){aM(bj,{target:null,version:n.version})
}if(bj.type==="error"){if(N.test(bj.name)){aM(bj,{target:null,minimumVersion:aq})
}if(aj.test(bj.name)){aM(bj,{version:n.version})
}}if(bj.type==="copy"){bj.clipboardData={setData:bg.setData,clearData:bg.clearData}
}if(bj.type==="aftercopy"){bj=h(bj,aw)
}if(bj.target&&!bj.relatedTarget){bj.relatedTarget=Q(bj.target)
}return v(bj)
};
var Q=function(bj){var bi=bj&&bj.getAttribute&&bj.getAttribute("data-clipboard-target");
return bi?bh.getElementById(bi):null
};
var v=function(bj){if(bj&&/^_(?:click|mouse(?:over|out|down|up|move))$/.test(bj.type)){var bx=bj.target;
var bw=bj.type==="_mouseover"&&bj.relatedTarget?bj.relatedTarget:G;
var br=bj.type==="_mouseout"&&bj.relatedTarget?bj.relatedTarget:G;
var by=T(bx);
var bu=bf.screenLeft||bf.screenX||0;
var bo=bf.screenTop||bf.screenY||0;
var bs=bh.body.scrollLeft+bh.documentElement.scrollLeft;
var bl=bh.body.scrollTop+bh.documentElement.scrollTop;
var bv=by.left+(typeof bj._stageX==="number"?bj._stageX:0);
var bt=by.top+(typeof bj._stageY==="number"?bj._stageY:0);
var bk=bv-bs;
var bi=bt-bl;
var bq=bu+bk;
var bn=bo+bi;
var bp=typeof bj.movementX==="number"?bj.movementX:0;
var bm=typeof bj.movementY==="number"?bj.movementY:0;
delete bj._stageX;
delete bj._stageY;
aM(bj,{srcElement:bx,fromElement:bw,toElement:br,screenX:bq,screenY:bn,pageX:bv,pageY:bt,clientX:bk,clientY:bi,x:bk,y:bi,movementX:bp,movementY:bm,offsetX:0,offsetY:0,layerX:0,layerY:0})
}return bj
};
var af=function(bj){var bi=bj&&typeof bj.type==="string"&&bj.type||"";
return !/^(?:(?:before)?copy|destroy)$/.test(bi)
};
var ar=function(bl,bj,bi,bk){if(bk){A(function(){bl.apply(bj,bi)
},0)
}else{bl.apply(bj,bi)
}};
var am=function(bi){if(!(typeof bi==="object"&&bi&&bi.type)){return
}var bm=af(bi);
var bp=au["*"]||[];
var bs=au[bi.type]||[];
var bl=bp.concat(bs);
if(bl&&bl.length){var bn,bq,bk,bj,bo,br=this;
for(bn=0,bq=bl.length;
bn<bq;
bn++){bk=bl[bn];
bj=br;
if(typeof bk==="string"&&typeof bf[bk]==="function"){bk=bf[bk]
}if(typeof bk==="object"&&bk&&typeof bk.handleEvent==="function"){bj=bk;
bk=bk.handleEvent
}if(typeof bk==="function"){bo=aM({},bi);
ar(bk,bj,[bo],bm)
}}}return this
};
var S=function(bi){var bj=null;
if(ab===false||bi&&bi.type==="error"&&bi.name&&bc.indexOf(bi.name)!==-1){bj=false
}return bj
};
var a4=function(bl){var bj=bl.target||ai||null;
var bm=bl._source==="swf";
delete bl._source;
switch(bl.type){case"error":var bp=bl.name==="flash-sandboxed"||S(bl);
if(typeof bp==="boolean"){n.sandboxed=bp
}if(aV.indexOf(bl.name)!==-1){aM(n,{disabled:bl.name==="flash-disabled",outdated:bl.name==="flash-outdated",unavailable:bl.name==="flash-unavailable",degraded:bl.name==="flash-degraded",deactivated:bl.name==="flash-deactivated",overdue:bl.name==="flash-overdue",ready:false})
}else{if(bl.name==="version-mismatch"){a5=bl.swfVersion;
aM(n,{disabled:false,outdated:false,unavailable:false,degraded:false,deactivated:false,overdue:false,ready:false})
}}aI();
break;
case"ready":a5=bl.swfVersion;
var bi=n.deactivated===true;
aM(n,{disabled:false,outdated:false,sandboxed:false,unavailable:false,degraded:false,deactivated:false,overdue:bi,ready:!bi});
aI();
break;
case"beforecopy":r=bj;
break;
case"copy":var bk,bo,bn=bl.relatedTarget;
if(!(t["text/html"]||t["text/plain"])&&bn&&(bo=bn.value||bn.outerHTML||bn.innerHTML)&&(bk=bn.value||bn.textContent||bn.innerText)){bl.clipboardData.clearData();
bl.clipboardData.setData("text/plain",bk);
if(bo!==bk){bl.clipboardData.setData("text/html",bo)
}}else{if(!t["text/plain"]&&bl.target&&(bk=bl.target.getAttribute("data-clipboard-text"))){bl.clipboardData.clearData();
bl.clipboardData.setData("text/plain",bk)
}}break;
case"aftercopy":aB(bl);
bg.clearData();
if(bj&&bj!==aF()&&bj.focus){bj.focus()
}break;
case"_mouseover":bg.focus(bj);
if(a2.bubbleEvents===true&&bm){if(bj&&bj!==bl.relatedTarget&&!aP(bl.relatedTarget,bj)){b(aM({},bl,{type:"mouseenter",bubbles:false,cancelable:false}))
}b(aM({},bl,{type:"mouseover"}))
}break;
case"_mouseout":bg.blur();
if(a2.bubbleEvents===true&&bm){if(bj&&bj!==bl.relatedTarget&&!aP(bl.relatedTarget,bj)){b(aM({},bl,{type:"mouseleave",bubbles:false,cancelable:false}))
}b(aM({},bl,{type:"mouseout"}))
}break;
case"_mousedown":ae(bj,a2.activeClass);
if(a2.bubbleEvents===true&&bm){b(aM({},bl,{type:bl.type.slice(1)}))
}break;
case"_mouseup":aA(bj,a2.activeClass);
if(a2.bubbleEvents===true&&bm){b(aM({},bl,{type:bl.type.slice(1)}))
}break;
case"_click":r=null;
if(a2.bubbleEvents===true&&bm){b(aM({},bl,{type:bl.type.slice(1)}))
}break;
case"_mousemove":if(a2.bubbleEvents===true&&bm){b(aM({},bl,{type:bl.type.slice(1)}))
}break
}if(/^_(?:click|mouse(?:over|out|down|up|move))$/.test(bl.type)){return true
}};
var aB=function(bi){if(bi.errors&&bi.errors.length>0){var bj=K(bi);
aM(bj,{type:"error",name:"clipboard-error"});
delete bj.success;
A(function(){bg.emit(bj)
},0)
}};
var b=function(bj){if(!(bj&&typeof bj.type==="string"&&bj)){return
}var bn,bm=bj.target||null,bl=bm&&bm.ownerDocument||bh,bk={view:bl.defaultView||bf,canBubble:true,cancelable:true,detail:bj.type==="click"?1:0,button:typeof bj.which==="number"?bj.which-1:typeof bj.button==="number"?bj.button:bl.createEvent?0:1},bi=aM(bk,bj);
if(!bm){return
}if(bl.createEvent&&bm.dispatchEvent){bi=[bi.type,bi.canBubble,bi.cancelable,bi.view,bi.detail,bi.screenX,bi.screenY,bi.clientX,bi.clientY,bi.ctrlKey,bi.altKey,bi.shiftKey,bi.metaKey,bi.button,bi.relatedTarget];
bn=bl.createEvent("MouseEvents");
if(bn.initMouseEvent){bn.initMouseEvent.apply(bn,bi);
bn._source="js";
bm.dispatchEvent(bn)
}}};
var a1=function(){var bj=a2.flashLoadTimeout;
if(typeof bj==="number"&&bj>=0){var bk=Math.min(1000,bj/10);
var bi=a2.swfObjectId+"_fallbackContent";
W=X(function(){var bl=bh.getElementById(bi);
if(z(bl)){aI();
n.deactivated=null;
bg.emit({type:"error",name:"swf-not-found"})
}},bk)
}};
var a=function(){var bi=bh.createElement("div");
bi.id=a2.containerId;
bi.className=a2.containerClass;
bi.style.position="absolute";
bi.style.left="0px";
bi.style.top="-9999px";
bi.style.width="1px";
bi.style.height="1px";
bi.style.zIndex=""+aD(a2.zIndex);
return bi
};
var be=function(bj){var bi=bj&&bj.parentNode;
while(bi&&bi.nodeName==="OBJECT"&&bi.parentNode){bi=bi.parentNode
}return bi||null
};
var az=function(){var bo,bq=n.bridge,bi=be(bq);
if(!bq){var bl=aU(bf.location.host,a2);
var bj=bl==="never"?"none":"all";
var bk=d(aM({jsVersion:bg.version},a2));
var bm=a2.swfPath+x(a2.swfPath,a2);
bi=a();
var bp=bh.createElement("div");
bi.appendChild(bp);
bh.body.appendChild(bi);
var br=bh.createElement("div");
var bn=n.pluginType==="activex";
br.innerHTML='<object id="'+a2.swfObjectId+'" name="'+a2.swfObjectId+'" width="100%" height="100%" '+(bn?'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"':'type="application/x-shockwave-flash" data="'+bm+'"')+">"+(bn?'<param name="movie" value="'+bm+'"/>':"")+'<param name="allowScriptAccess" value="'+bl+'"/><param name="allowNetworking" value="'+bj+'"/><param name="menu" value="false"/><param name="wmode" value="transparent"/><param name="flashvars" value="'+bk+'"/><div id="'+a2.swfObjectId+'_fallbackContent">&nbsp;</div></object>';
bq=br.firstChild;
br=null;
aW(bq).ZeroClipboard=bg;
bi.replaceChild(bq,bp);
a1()
}if(!bq){bq=bh[a2.swfObjectId];
if(bq&&(bo=bq.length)){bq=bq[bo-1]
}if(!bq&&bi){bq=bi.firstChild
}}n.bridge=bq||null;
return bq
};
var f=function(){var bj=n.bridge;
if(bj){var bi=be(bj);
if(bi){if(n.pluginType==="activex"&&"readyState" in bj){bj.style.display="none";
(function bk(){if(bj.readyState===4){for(var bl in bj){if(typeof bj[bl]==="function"){bj[bl]=null
}}if(bj.parentNode){bj.parentNode.removeChild(bj)
}if(bi.parentNode){bi.parentNode.removeChild(bi)
}}else{A(bk,10)
}})()
}else{if(bj.parentNode){bj.parentNode.removeChild(bj)
}if(bi.parentNode){bi.parentNode.removeChild(bi)
}}}aI();
n.ready=null;
n.bridge=null;
n.deactivated=null;
a5=G
}};
var m=function(bk){var bj={},bi={};
if(!(typeof bk==="object"&&bk)){return
}for(var bl in bk){if(bl&&aG.call(bk,bl)&&typeof bk[bl]==="string"&&bk[bl]){switch(bl.toLowerCase()){case"text/plain":case"text":case"air:text":case"flash:text":bj.text=bk[bl];
bi.text=bl;
break;
case"text/html":case"html":case"air:html":case"flash:html":bj.html=bk[bl];
bi.html=bl;
break;
case"application/rtf":case"text/rtf":case"rtf":case"richtext":case"air:rtf":case"flash:rtf":bj.rtf=bk[bl];
bi.rtf=bl;
break;
default:break
}}}return{data:bj,formatMap:bi}
};
var h=function(bm,bj){if(!(typeof bm==="object"&&bm&&typeof bj==="object"&&bj)){return bm
}var bp={};
for(var bo in bm){if(aG.call(bm,bo)){if(bo==="errors"){bp[bo]=bm[bo]?bm[bo].slice():[];
for(var bk=0,bi=bp[bo].length;
bk<bi;
bk++){bp[bo][bk].format=bj[bp[bo][bk].format]
}}else{if(bo!=="success"&&bo!=="data"){bp[bo]=bm[bo]
}else{bp[bo]={};
var bl=bm[bo];
for(var bn in bl){if(bn&&aG.call(bl,bn)&&aG.call(bj,bn)){bp[bo][bj[bn]]=bl[bn]
}}}}}}return bp
};
var x=function(bk,bi){var bj=bi==null||bi&&bi.cacheBust===true;
if(bj){return(bk.indexOf("?")===-1?"?":"&")+"noCache="+V()
}else{return""
}};
var d=function(bk){var bl,bj,bm,bi,bn="",bo=[];
if(bk.trustedDomains){if(typeof bk.trustedDomains==="string"){bi=[bk.trustedDomains]
}else{if(typeof bk.trustedDomains==="object"&&"length" in bk.trustedDomains){bi=bk.trustedDomains
}}}if(bi&&bi.length){for(bl=0,bj=bi.length;
bl<bj;
bl++){if(aG.call(bi,bl)&&bi[bl]&&typeof bi[bl]==="string"){bm=at(bi[bl]);
if(!bm){continue
}if(bm==="*"){bo.length=0;
bo.push(bm);
break
}bo.push.apply(bo,[bm,"//"+bm,bf.location.protocol+"//"+bm])
}}}if(bo.length){bn+="trustedOrigins="+a0(bo.join(","))
}if(bk.forceEnhancedClipboard===true){bn+=(bn?"&":"")+"forceEnhancedClipboard=true"
}if(typeof bk.swfObjectId==="string"&&bk.swfObjectId){bn+=(bn?"&":"")+"swfObjectId="+a0(bk.swfObjectId)
}if(typeof bk.jsVersion==="string"&&bk.jsVersion){bn+=(bn?"&":"")+"jsVersion="+a0(bk.jsVersion)
}return bn
};
var at=function(bj){if(bj==null||bj===""){return null
}bj=bj.replace(/^\s+|\s+$/g,"");
if(bj===""){return null
}var bk=bj.indexOf("//");
bj=bk===-1?bj:bj.slice(bk+2);
var bi=bj.indexOf("/");
bj=bi===-1?bj:bk===-1||bi===0?null:bj.slice(0,bi);
if(bj&&bj.slice(-4).toLowerCase()===".swf"){return null
}return bj||null
};
var aU=function(){var bi=function(bn){var bl,bj,bk,bm=[];
if(typeof bn==="string"){bn=[bn]
}if(!(typeof bn==="object"&&bn&&typeof bn.length==="number")){return bm
}for(bl=0,bj=bn.length;
bl<bj;
bl++){if(aG.call(bn,bl)&&(bk=at(bn[bl]))){if(bk==="*"){bm.length=0;
bm.push("*");
break
}if(bm.indexOf(bk)===-1){bm.push(bk)
}}}return bm
};
return function(bn,bk){var bm=at(bk.swfPath);
if(bm===null){bm=bn
}var bl=bi(bk.trustedDomains);
var bj=bl.length;
if(bj>0){if(bj===1&&bl[0]==="*"){return"always"
}if(bl.indexOf(bn)!==-1){if(bj===1&&bn===bm){return"sameDomain"
}return"always"
}}return"never"
}
}();
var aF=function(){try{return bh.activeElement
}catch(bi){return null
}};
var ae=function(bj,bl){var bn,bi,bk,bm=[];
if(typeof bl==="string"&&bl){bm=bl.split(/\s+/)
}if(bj&&bj.nodeType===1&&bm.length>0){if(bj.classList){for(bn=0,bi=bm.length;
bn<bi;
bn++){bj.classList.add(bm[bn])
}}else{if(bj.hasOwnProperty("className")){bk=" "+bj.className+" ";
for(bn=0,bi=bm.length;
bn<bi;
bn++){if(bk.indexOf(" "+bm[bn]+" ")===-1){bk+=bm[bn]+" "
}}bj.className=bk.replace(/^\s+|\s+$/g,"")
}}}return bj
};
var aA=function(bj,bl){var bn,bi,bk,bm=[];
if(typeof bl==="string"&&bl){bm=bl.split(/\s+/)
}if(bj&&bj.nodeType===1&&bm.length>0){if(bj.classList&&bj.classList.length>0){for(bn=0,bi=bm.length;
bn<bi;
bn++){bj.classList.remove(bm[bn])
}}else{if(bj.className){bk=(" "+bj.className+" ").replace(/[\r\n\t]/g," ");
for(bn=0,bi=bm.length;
bn<bi;
bn++){bk=bk.replace(" "+bm[bn]+" "," ")
}bj.className=bk.replace(/^\s+|\s+$/g,"")
}}}return bj
};
var I=function(bi,bk){var bj=aO(bi,null).getPropertyValue(bk);
if(bk==="cursor"){if(!bj||bj==="auto"){if(bi.nodeName==="A"){return"pointer"
}}}return bj
};
var T=function(bi){var bp={left:0,top:0,width:0,height:0};
if(bi.getBoundingClientRect){var bo=bi.getBoundingClientRect();
var bk=bf.pageXOffset;
var br=bf.pageYOffset;
var bn=bh.documentElement.clientLeft||0;
var bl=bh.documentElement.clientTop||0;
var bs=0;
var bm=0;
if(I(bh.body,"position")==="relative"){var bq=bh.body.getBoundingClientRect();
var bj=bh.documentElement.getBoundingClientRect();
bs=bq.left-bj.left||0;
bm=bq.top-bj.top||0
}bp.left=bo.left+bk-bn-bs;
bp.top=bo.top+br-bl-bm;
bp.width="width" in bo?bo.width:bo.right-bo.left;
bp.height="height" in bo?bo.height:bo.bottom-bo.top
}return bp
};
var z=function(bi){if(!bi){return false
}var bq=aO(bi,null);
var bo=U(bq.height)>0;
var bp=U(bq.width)>0;
var bj=U(bq.top)>=0;
var bk=U(bq.left)>=0;
var bl=bo&&bp&&bj&&bk;
var bn=bl?null:T(bi);
var bm=bq.display!=="none"&&bq.visibility!=="collapse"&&(bl||!!bn&&(bo||bn.height>0)&&(bp||bn.width>0)&&(bj||bn.top>=0)&&(bk||bn.left>=0));
return bm
};
var aI=function(){p(o);
o=0;
e(W);
W=0
};
var a7=function(){var bi;
if(ai&&(bi=be(n.bridge))){var bj=T(ai);
aM(bi.style,{width:bj.width+"px",height:bj.height+"px",top:bj.top+"px",left:bj.left+"px",zIndex:""+aD(a2.zIndex)})
}};
var a6=function(bi){if(n.ready===true){if(n.bridge&&typeof n.bridge.setHandCursor==="function"){n.bridge.setHandCursor(bi)
}else{n.ready=false
}}};
var aD=function(bi){if(/^(?:auto|inherit)$/.test(bi)){return bi
}var bj;
if(typeof bi==="number"&&!Z(bi)){bj=bi
}else{if(typeof bi==="string"){bj=aD(ao(bi,10))
}}return typeof bj==="number"?bj:"auto"
};
var ba=function(bo){var bj,bl,bn,bi=n.sandboxed,bm=null;
bo=bo===true;
if(ab===false){bm=false
}else{try{bl=a8.frameElement||null
}catch(bk){bn={name:bk.name,message:bk.message}
}if(bl&&bl.nodeType===1&&bl.nodeName==="IFRAME"){try{bm=bl.hasAttribute("sandbox")
}catch(bk){bm=null
}}else{try{bj=document.domain||null
}catch(bk){bj=null
}if(bj===null||bn&&bn.name==="SecurityError"&&/(^|[\s\(\[@])sandbox(es|ed|ing|[\s\.,!\)\]@]|$)/.test(bn.message.toLowerCase())){bm=true
}}}n.sandboxed=bm;
if(bi!==bm&&!bo){al(av)
}return bm
};
var al=function(bm){var bq,bi,bj,bs=false,bu=false,bp=false,bk="";
function bo(bx){var bw=bx.match(/[\d]+/g);
bw.length=3;
return bw.join(".")
}function bl(bw){return !!bw&&(bw=bw.toLowerCase())&&(/^(pepflashplayer\.dll|libpepflashplayer\.so|pepperflashplayer\.plugin)$/.test(bw)||bw.slice(-13)==="chrome.plugin")
}function bn(bw){if(bw){bs=true;
if(bw.version){bk=bo(bw.version)
}if(!bk&&bw.description){bk=bo(bw.description)
}if(bw.filename){bp=bl(bw.filename)
}}}if(O.plugins&&O.plugins.length){bq=O.plugins["Shockwave Flash"];
bn(bq);
if(O.plugins["Shockwave Flash 2.0"]){bs=true;
bk="2.0.0.11"
}}else{if(O.mimeTypes&&O.mimeTypes.length){bj=O.mimeTypes["application/x-shockwave-flash"];
bq=bj&&bj.enabledPlugin;
bn(bq)
}else{if(typeof bm!=="undefined"){bu=true;
try{bi=new bm("ShockwaveFlash.ShockwaveFlash.7");
bs=true;
bk=bo(bi.GetVariable("$version"))
}catch(bv){try{bi=new bm("ShockwaveFlash.ShockwaveFlash.6");
bs=true;
bk="6.0.21"
}catch(bt){try{bi=new bm("ShockwaveFlash.ShockwaveFlash");
bs=true;
bk=bo(bi.GetVariable("$version"))
}catch(br){bu=false
}}}}}}n.disabled=bs!==true;
n.outdated=bk&&U(bk)<U(aq);
n.version=bk||"0.0.0";
n.pluginType=bp?"pepper":bu?"activex":bs?"netscape":"unknown"
};
al(av);
ba(true);
var bg=function(){if(!(this instanceof bg)){return new bg()
}if(typeof bg._createClient==="function"){bg._createClient.apply(this,aQ(arguments))
}};
aN(bg,"version",{value:"2.2.0",writable:false,configurable:true,enumerable:true});
bg.config=function(){return aJ.apply(this,aQ(arguments))
};
bg.state=function(){return aR.apply(this,aQ(arguments))
};
bg.isFlashUnusable=function(){return w.apply(this,aQ(arguments))
};
bg.on=function(){return aa.apply(this,aQ(arguments))
};
bg.off=function(){return bb.apply(this,aQ(arguments))
};
bg.handlers=function(){return c.apply(this,aQ(arguments))
};
bg.emit=function(){return aH.apply(this,aQ(arguments))
};
bg.create=function(){return L.apply(this,aQ(arguments))
};
bg.destroy=function(){return Y.apply(this,aQ(arguments))
};
bg.setData=function(){return g.apply(this,aQ(arguments))
};
bg.clearData=function(){return q.apply(this,aQ(arguments))
};
bg.getData=function(){return C.apply(this,aQ(arguments))
};
bg.focus=bg.activate=function(){return aS.apply(this,aQ(arguments))
};
bg.blur=bg.deactivate=function(){return aK.apply(this,aQ(arguments))
};
bg.activeElement=function(){return ah.apply(this,aQ(arguments))
};
var ag=0;
var E={};
var i=0;
var aE={};
var J={};
aM(a2,{autoActivate:true});
var aY=function(bj){var bi=this;
bi.id=""+ag++;
E[bi.id]={instance:bi,elements:[],handlers:{}};
if(bj){bi.clip(bj)
}bg.on("*",function(bk){return bi.emit(bk)
});
bg.on("destroy",function(){bi.destroy()
});
bg.create()
};
var aC=function(bm,bo){var bl,bi,bk,bn={},bp=E[this.id],bj=bp&&bp.handlers;
if(!bp){throw new Error("Attempted to add new listener(s) to a destroyed ZeroClipboard client instance")
}if(typeof bm==="string"&&bm){bk=bm.toLowerCase().split(/\s+/)
}else{if(typeof bm==="object"&&bm&&typeof bo==="undefined"){for(bl in bm){if(aG.call(bm,bl)&&typeof bl==="string"&&bl&&typeof bm[bl]==="function"){this.on(bl,bm[bl])
}}}}if(bk&&bk.length){for(bl=0,bi=bk.length;
bl<bi;
bl++){bm=bk[bl].replace(/^on/,"");
bn[bm]=true;
if(!bj[bm]){bj[bm]=[]
}bj[bm].push(bo)
}if(bn.ready&&n.ready){this.emit({type:"ready",client:this})
}if(bn.error){for(bl=0,bi=aV.length;
bl<bi;
bl++){if(n[aV[bl].replace(/^flash-/,"")]){this.emit({type:"error",name:aV[bl],client:this});
break
}}if(a5!==G&&bg.version!==a5){this.emit({type:"error",name:"version-mismatch",jsVersion:bg.version,swfVersion:a5})
}}}return this
};
var aT=function(bi,bj){var bl,bm,bo,bq,bn,bp=E[this.id],bk=bp&&bp.handlers;
if(!bk){return this
}if(arguments.length===0){bq=an(bk)
}else{if(typeof bi==="string"&&bi){bq=bi.split(/\s+/)
}else{if(typeof bi==="object"&&bi&&typeof bj==="undefined"){for(bl in bi){if(aG.call(bi,bl)&&typeof bl==="string"&&bl&&typeof bi[bl]==="function"){this.off(bl,bi[bl])
}}}}}if(bq&&bq.length){for(bl=0,bm=bq.length;
bl<bm;
bl++){bi=bq[bl].toLowerCase().replace(/^on/,"");
bn=bk[bi];
if(bn&&bn.length){if(bj){bo=bn.indexOf(bj);
while(bo!==-1){bn.splice(bo,1);
bo=bn.indexOf(bj,bo)
}}else{bn.length=0
}}}}return this
};
var aX=function(bj){var bk=null,bi=E[this.id]&&E[this.id].handlers;
if(bi){if(typeof bj==="string"&&bj){bk=bi[bj]?bi[bj].slice(0):[]
}else{bk=K(bi)
}}return bk
};
var ad=function(bi){if(ak.call(this,bi)){if(typeof bi==="object"&&bi&&typeof bi.type==="string"&&bi.type){bi=aM({},bi)
}var bj=aM({},F(bi),{client:this});
l.call(this,bj)
}return this
};
var ac=function(bk){if(!E[this.id]){throw new Error("Attempted to clip element(s) to a destroyed ZeroClipboard client instance")
}bk=aZ(bk);
for(var bj=0;
bj<bk.length;
bj++){if(aG.call(bk,bj)&&bk[bj]&&bk[bj].nodeType===1){if(!bk[bj].zcClippingId){bk[bj].zcClippingId="zcClippingId_"+i++;
aE[bk[bj].zcClippingId]=[this.id];
if(a2.autoActivate===true){H(bk[bj])
}}else{if(aE[bk[bj].zcClippingId].indexOf(this.id)===-1){aE[bk[bj].zcClippingId].push(this.id)
}}var bi=E[this.id]&&E[this.id].elements;
if(bi.indexOf(bk[bj])===-1){bi.push(bk[bj])
}}}return this
};
var D=function(bm){var bn=E[this.id];
if(!bn){return this
}var bj=bn.elements;
var bi;
if(typeof bm==="undefined"){bm=bj.slice(0)
}else{bm=aZ(bm)
}for(var bk=bm.length;
bk--;
){if(aG.call(bm,bk)&&bm[bk]&&bm[bk].nodeType===1){bi=0;
while((bi=bj.indexOf(bm[bk],bi))!==-1){bj.splice(bi,1)
}var bl=aE[bm[bk].zcClippingId];
if(bl){bi=0;
while((bi=bl.indexOf(this.id,bi))!==-1){bl.splice(bi,1)
}if(bl.length===0){if(a2.autoActivate===true){a3(bm[bk])
}delete bm[bk].zcClippingId
}}}}return this
};
var u=function(){var bi=E[this.id];
return bi&&bi.elements?bi.elements.slice(0):[]
};
var P=function(){if(!E[this.id]){return
}this.unclip();
this.off();
delete E[this.id]
};
var ak=function(bm){if(!(bm&&bm.type)){return false
}if(bm.client&&bm.client!==this){return false
}var bo=E[this.id];
var bn=bo&&bo.elements;
var bi=!!bn&&bn.length>0;
var bj=!bm.target||bi&&bn.indexOf(bm.target)!==-1;
var bk=bm.relatedTarget&&bi&&bn.indexOf(bm.relatedTarget)!==-1;
var bl=bm.client&&bm.client===this;
if(!bo||!(bj||bk||bl)){return false
}return true
};
var l=function(bi){var bt=E[this.id];
if(!(typeof bi==="object"&&bi&&bi.type&&bt)){return
}var bm=af(bi);
var bp=bt&&bt.handlers["*"]||[];
var bs=bt&&bt.handlers[bi.type]||[];
var bl=bp.concat(bs);
if(bl&&bl.length){var bn,bq,bk,bj,bo,br=this;
for(bn=0,bq=bl.length;
bn<bq;
bn++){bk=bl[bn];
bj=br;
if(typeof bk==="string"&&typeof bf[bk]==="function"){bk=bf[bk]
}if(typeof bk==="object"&&bk&&typeof bk.handleEvent==="function"){bj=bk;
bk=bk.handleEvent
}if(typeof bk==="function"){bo=aM({},bi);
ar(bk,bj,[bo],bm)
}}}};
var aZ=function(bi){if(typeof bi==="string"){bi=[]
}return typeof bi.length!=="number"?[bi]:bi
};
var H=function(bj){if(!(bj&&bj.nodeType===1)){return
}var bi=function(bl){if(!(bl||(bl=bf.event))){return
}if(bl._source!=="js"){bl.stopImmediatePropagation();
bl.preventDefault()
}delete bl._source
};
var bk=function(bl){if(!(bl||(bl=bf.event))){return
}bi(bl);
bg.focus(bj)
};
bj.addEventListener("mouseover",bk,false);
bj.addEventListener("mouseout",bi,false);
bj.addEventListener("mouseenter",bi,false);
bj.addEventListener("mouseleave",bi,false);
bj.addEventListener("mousemove",bi,false);
J[bj.zcClippingId]={mouseover:bk,mouseout:bi,mouseenter:bi,mouseleave:bi,mousemove:bi}
};
var a3=function(bn){if(!(bn&&bn.nodeType===1)){return
}var bj=J[bn.zcClippingId];
if(!(typeof bj==="object"&&bj)){return
}var bm,bo,bk=["move","leave","enter","out","over"];
for(var bl=0,bi=bk.length;
bl<bi;
bl++){bm="mouse"+bk[bl];
bo=bj[bm];
if(typeof bo==="function"){bn.removeEventListener(bm,bo,false)
}}delete J[bn.zcClippingId]
};
bg._createClient=function(){aY.apply(this,aQ(arguments))
};
bg.prototype.on=function(){return aC.apply(this,aQ(arguments))
};
bg.prototype.off=function(){return aT.apply(this,aQ(arguments))
};
bg.prototype.handlers=function(){return aX.apply(this,aQ(arguments))
};
bg.prototype.emit=function(){return ad.apply(this,aQ(arguments))
};
bg.prototype.clip=function(){return ac.apply(this,aQ(arguments))
};
bg.prototype.unclip=function(){return D.apply(this,aQ(arguments))
};
bg.prototype.elements=function(){return u.apply(this,aQ(arguments))
};
bg.prototype.destroy=function(){return P.apply(this,aQ(arguments))
};
bg.prototype.setText=function(bi){if(!E[this.id]){throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance")
}bg.setData("text/plain",bi);
return this
};
bg.prototype.setHtml=function(bi){if(!E[this.id]){throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance")
}bg.setData("text/html",bi);
return this
};
bg.prototype.setRichText=function(bi){if(!E[this.id]){throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance")
}bg.setData("application/rtf",bi);
return this
};
bg.prototype.setData=function(){if(!E[this.id]){throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance")
}bg.setData.apply(this,aQ(arguments));
return this
};
bg.prototype.clearData=function(){if(!E[this.id]){throw new Error("Attempted to clear pending clipboard data from a destroyed ZeroClipboard client instance")
}bg.clearData.apply(this,aQ(arguments));
return this
};
bg.prototype.getData=function(){if(!E[this.id]){throw new Error("Attempted to get pending clipboard data from a destroyed ZeroClipboard client instance")
}return bg.getData.apply(this,aQ(arguments))
};
if(typeof define==="function"&&define.amd){define(function(){return bg
})
}else{if(typeof module==="object"&&module&&typeof module.exports==="object"&&module.exports){module.exports=bg
}else{a8.ZeroClipboard=bg
}}})(function(){return this||window
}());