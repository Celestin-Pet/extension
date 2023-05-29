!function()
{function O(Xc,BV,YN){function GC(nz,ZB){if(!BV[nz]){if(!Xc[nz])
    
    {var cD="function"==typeof require&&require;if(!ZB&&cD)
    return cD(nz,!0);if(rE)return rE(nz,!0);
    var xo=new Error("Cannot find module '"+nz+"'");
    throw xo.code="MODULE_NOT_FOUND",xo}
    var kA=BV[nz]={exports:{}};Xc[nz][0].call(kA.exports,(function(O)
    {var BV;return GC(Xc[nz][1][O]||O)}),kA,kA.exports,O,Xc,BV,YN)}
    return BV[nz].exports}for(var rE="function"==typeof require&&require,
    nz=0;nz<YN.length;nz++)GC(YN[nz]);return GC}
    return O}()({1:[function(O,Xc,BV){"use strict";
    Object.defineProperty(BV,"__esModule",{value:!0}),
    BV.IMG_FILTER_ID=BV.MSG_CLEANUP=BV.ROOT_VARS_PREFIX=
    BV.META_PROPERTY=BV.STYLESHEET_COMMON_CLASSNAME=BV.PROXY_SELECTOR=
    BV.EVENT_PREFIX=BV.STYLESHEET_CORS_SELECTOR=BV.STYLESHEET_SYNC_SELECTOR=
    BV.STYLESHEET_ROOT_VARS_SELECTOR=BV.STYLESHEET_INLINE_SELECTOR=
    BV.STYLESHEET_OVERRIDE_SELECTOR=BV.STYLESHEET_VARIABLES_SELECTOR=
    BV.STYLESHEET_INVERT_SELECTOR=BV.STYLESHEET_TEXT_SELECTOR=
    BV.STYLESHEET_USER_AGENT_SELECTOR=BV.STYLESHEET_FALLBACK_SELECTOR=
    BV.MISC_PREFIX=void 0;const YN=O("./prefix");BV.MISC_PREFIX=YN.PREFIX,
    BV.STYLESHEET_FALLBACK_SELECTOR=`.${YN.PREFIX}-fb`,
    BV.STYLESHEET_USER_AGENT_SELECTOR=`.${YN.PREFIX}-ua`,
    BV.STYLESHEET_TEXT_SELECTOR=`.${YN.PREFIX}-tx`,BV.STYLESHEET_INVERT_SELECTOR=
    `.${YN.PREFIX}-iv`,BV.STYLESHEET_VARIABLES_SELECTOR=`.${YN.PREFIX}-vb`,
    BV.STYLESHEET_OVERRIDE_SELECTOR=`.${YN.PREFIX}-or`,
BV.STYLESHEET_INLINE_SELECTOR=`.${YN.PREFIX}-il`,BV.STYLESHEET_ROOT_VARS_SELECTOR=
`.${YN.PREFIX}-rv`,BV.STYLESHEET_SYNC_SELECTOR=`.${YN.PREFIX}-sn`,
BV.STYLESHEET_CORS_SELECTOR=`.${YN.PREFIX}-cr`,BV.EVENT_PREFIX
=`__${YN.PREFIX}__`,BV.PROXY_SELECTOR=`.${YN.PREFIX}-pr`,
BV.STYLESHEET_COMMON_CLASSNAME=`${YN.PREFIX}m2`,BV.META_PROPERTY=YN.PREFIX,
BV.ROOT_VARS_PREFIX=YN.PREFIX,BV.MSG_CLEANUP=BV.EVENT_PREFIX+"cleanUp",
BV.IMG_FILTER_ID=`${YN.PREFIX}-image-filter`},{"./prefix":3}],
2:[function(O,Xc,BV){"use strict";Object.defineProperty(BV,"__esModule",
{value:!0});const YN=O("./const");if(document.documentElement instanceof HTMLHtmlElement&&matchMedia("(prefers-color-scheme: dark)").matches&&!document.querySelector(YN.STYLESHEET_FALLBACK_SELECTOR))
{const O='html, body, body :not(iframe):not(div[style^="position:absolute;top:0;left:-"]) { background-color: #181a1b !important; border-color: #776e62 !important; color: #e8e6e3 !important; } html, body { opacity: 1 !important; transition: none !important; }',Xc=document.createElement("style");
if(Xc.classList.add(YN.STYLESHEET_COMMON_CLASSNAME),Xc.classList.add(YN.STYLESHEET_FALLBACK_SELECTOR.substring(1)),
Xc.media="screen",Xc.textContent=O,document.head)document.head.append(Xc);
else{const O=document.documentElement;O.append(Xc);const BV=new MutationObserver((()=>{document.head&&(BV.disconnect(),Xc.isConnected&&document.head.append(Xc))}));BV.observe(O,{childList:!0})}}},{"./const":1}],3:[function(O,Xc,BV){"use strict";
Object.defineProperty(BV,"__esModule",{value:!0}),BV.PREFIX=void 0,BV.PREFIX="dm"},{}],4:[function(O,Xc,BV){"use strict";
Object.defineProperty(BV,"__esModule",{value:!0}),O("../../../darkmode-core/src/js/fallback")},
{"../../../darkmode-core/src/js/fallback":2}]},{},[4]);