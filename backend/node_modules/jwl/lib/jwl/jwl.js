/*
	JWL - The JavaScript Widget Library version 0.8.7
	Copyright (c) 2016 - 2020 The Zonebuilder <zone.builder@gmx.com>
	http://sourceforge.net/projects/jwl-library/
	Licenses: GNU GPL2 or later; GNU LGPLv3 or later (http://sourceforge.net/p/jwl-library/wiki/License/)
 */
/**
	@fileOverview	The JavaScript Widget Library (JWL) is a tool that allows you to build modern web applications by providing a simple way to create HTML components.
	 JWL is based on JUL - The JavaScript UI Language module and it easily integrates with JUL Designer.
*/
/* jshint browser: true, curly: true, eqeqeq: true, evil: true, expr: true, funcscope: true, immed: true, latedef: true, loopfunc: true,  
	onevar: true, newcap: true, noarg: true, node: true, strict: true, trailing: true, undef: true, unused: vars, wsh: true */
/* globals JUL */

(function(global, module) {
'use strict';
if (module && module.exports && typeof require === 'function') { require('jul'); }
var jul = new JUL.Instance({nsRoot: module && module.exports ? {JWL: module.exports} : global || null});
var JWL = jul.ns('JWL');


jul.ns('JWL');

jul.apply(jul.get('JWL'),  {
  parserConfig: {
    defaultClass: 'html',
    topDown: true,
    useTags: true,
    customFactory: function(oConfig) {
      var sTag = oConfig[this.tagProperty];
      if (oConfig[this.classProperty] !== this.defaultClass) { sTag = oConfig[this.classProperty] + ':' + sTag; } 
      var oComponent = JWL.components[sTag];
      if (!oComponent) {
        var fCreator = this._creator ? jul.get(this._creator) : null;
        return typeof fCreator === 'function' ? fCreator.call(this, oConfig) : this.createDom(oConfig);
      }
      oConfig._componentIndex = sTag;
      var fPreCreate = oConfig.preCreate || oComponent.preCreate;
      if (fPreCreate) { fPreCreate = jul.get(fPreCreate); }
      delete oConfig.preCreate;
      var fPostCreate = oConfig.postCreate || oComponent.postCreate;
      if (fPostCreate) { fPostCreate = jul.get(fPostCreate); }
      if (fPostCreate) { oConfig.postCreate = fPostCreate; }
      var oHost = oConfig[this.parentProperty] ? oConfig[this.parentProperty].host || oConfig[this.parentProperty] : null;
      if (oHost && oHost._componentName && oHost._derived) {
        oConfig[this.classProperty] = this.defaultClass;
        oConfig[this.tagProperty] = 'div';
      }
      else if (oComponent.ui) {
        oConfig[this.classProperty] = oComponent.ui[this.classProperty] || this.defaultClass;
        oConfig[this.tagProperty] = oComponent.ui[this.tagProperty];
      }
      if (typeof fPreCreate === 'function') {
        var bReturn = fPreCreate.call(oConfig[this.parentProperty],  oConfig, this);
        if (bReturn === false) { return null; }
      }
      fPostCreate = oConfig.postCreate;
      delete oConfig.postCreate;
      var oInit = oConfig;
      oConfig = JUL.apply({}, oConfig);
      delete oConfig._componentIndex;
      var oLogic = {};
      var sBinding = oComponent.ui ? oComponent.ui[this.bindingProperty] : '.component';
      if (!oComponent.ui) { oConfig[this.bindingProperty] = sBinding; }
      var oRootLogic = {};
      oLogic[sBinding] = oRootLogic;
      var sItem, nDot;
      for (sItem in oConfig) {
        if (oConfig.hasOwnProperty(sItem)) {
           nDot = sItem.indexOf('.', 1);
          if (nDot > 0 && nDot < sItem.length - 1) {
            sBinding = sItem.slice(0, nDot);
            oLogic[sBinding] = oLogic[sBinding] || {};
            oLogic[sBinding][sItem.substr(nDot + 1)] = oConfig[sItem];
            delete oConfig[sItem];
          }
        }
      }
      var oListeners = oConfig.listeners || {};
      delete oConfig.listeners;
      oRootLogic.listeners = oListeners;
      for (sItem in oListeners) {
        if (oListeners.hasOwnProperty(sItem)) {
           nDot = sItem.indexOf('.', 1);
          if (nDot > 0 && nDot < sItem.length - 1) {
            sBinding = sItem.slice(0, nDot);
            oLogic[sBinding] = oLogic[sBinding] || {};
            oLogic[sBinding].listeners = oLogic[sBinding].listeners || {};
            oLogic[sBinding].listeners[sItem.substr(nDot + 1)] = oListeners[sItem];
            delete oListeners[sItem];
          }
        }
      }
      for (sItem in oConfig) {
        if (oConfig.hasOwnProperty(sItem) &&
          [this.classProperty, this.tagProperty,  this.idProperty, this.bindingProperty, this.parentProperty, this.cssProperty].indexOf(sItem) < 0) {
          oRootLogic[sItem] = oConfig[sItem];
          delete oConfig[sItem];
        }
      }
      if (oComponent.ui) { oConfig[this.includeProperty] = oComponent.ui; }
      if (oComponent.logic) { oLogic[this.includeProperty] = oComponent.logic; }
      var oWidget = this.create(oConfig, oLogic, oConfig.parent);
      if (typeof fPostCreate === 'function') { fPostCreate.call(oWidget, oInit, this); }
      return oWidget;
    },
    _usePrefixes: true,
    _includeMerger: function(oData, oApply, bSkip) {
      var oListeners = oData.listeners;
      var sItem;
      if (bSkip) {
        JUL.apply(oData, oApply);
      }
      else {
        for (sItem in oApply) {
          if (oApply.hasOwnProperty(sItem)) {
            if (sItem.substr(0, 1) === '.' && sItem.length > 1 && JUL.typeOf(oApply[sItem]) === 'Object' &&
              oData[sItem] && JUL.typeOf(oData[sItem]) === 'Object') { this._includeMerger(oData[sItem], oApply[sItem], true); }
            else {
              if (sItem === this.cssProperty) { oData[sItem] = oApply[sItem] + (oData[sItem] ? ' ' + oData[sItem] : ''); }
              else { oData[sItem] = oApply[sItem]; }
            }
          }
        }
      }
      if (!oListeners || !oApply.listeners) { return oData; }
      for (sItem in oApply.listeners) {
        if (oApply.listeners.hasOwnProperty(sItem)) {
          if (sItem !== 'scope' && oListeners[sItem]) {
            oListeners[sItem] = [].concat(oListeners[sItem], oApply.listeners[sItem]);
          }
          else {
            oListeners[sItem] = oApply.listeners[sItem];
          }
        }
      }
      oData.listeners = oListeners;
      return oData;
    },
    _jsonReviver: function(sKey, oValue) {
      if (sKey && typeof oValue === 'string') {
        var bPrefix = false;
        for (var sItem in this._jsonPrefixes) {
          if (this._jsonPrefixes.hasOwnProperty(sItem) &&
            oValue.substr(0, this._jsonPrefixes[sItem].length) === this._jsonPrefixes[sItem]) {
            bPrefix = true;
            oValue = oValue.substr(this._jsonPrefixes[sItem].length).replace(/^\s+/, '');
            break;
          }
        }
        if (bPrefix) {
          try {
            return eval('(function(){return ' + oValue + '})()');
          }
          catch(e) {
            return oValue;
          }
        }
      }
      return oValue;
    }
  },
  registerPrefix: 'jwl',
  version: '0.8.5',
  Parser: function(oConfig) {
    if (!(this instanceof JWL.Parser)) {
      return new JWL.Parser(oConfig);
    }
    jul.ui.Parser.call(this, oConfig);
  },
  custom: function(oConfig) {
      var sName = oConfig[this.tagProperty];
      if (oConfig[this.classProperty] !== this.defaultClass) { sName = oConfig[this.classProperty] + ':' + sName; }
      var oComponent = JWL.components[sName];
      if (oComponent) {
        JWL._customCache = JWL._customCache || {};
        var sKey = oConfig[this.classProperty] + ':' + oConfig[this.tagProperty];
        if (typeof JWL._customCache[sKey] !== 'function') {
          try {
            JWL._customCache[sKey] = JWL.register(sName, false, '', this);
          }
          catch (e) {}
        }
        oConfig[this.tagProperty] = JWL.registerPrefix + '-' +
          (oConfig[this.classProperty] === this.defaultClass ? '' : oConfig[this.classProperty] + '-') +
          oConfig[this.tagProperty];
        oConfig[this.classProperty] = this.defaultClass;
      }
      return this.createDom(oConfig);
  },
  factory: function(oConfig) {
    var sName = oConfig[this.tagProperty];
    var sNS = oConfig[this.classProperty];
    var CNew = jul.get('JWL.' + sNS.toUpperCase() + '.' + sName[0].toUpperCase() + sName.substr(1));
    if (typeof CNew !== 'function') { CNew = JWL.makeClass(sNS + ':' + sName, false, this); }
    return new CNew(oConfig);
  },
  get: function(oEl) {
    if (typeof oEl === 'string') { oEl = document.getElementById(oEl); }
    if (typeof JWL._Base_ === 'function'&& oEl instanceof JWL._Base_) { return oEl; }
    if (oEl && typeof oEl.el === 'function') { oEl = oEl.el(); }
    return oEl && typeof JWL._Base_ === 'function' ? JWL._Base_.get(oEl) || oEl : oEl || null;
  },
  load: function(sData, sWhat, sRoot) {
    var oData = null;
    try {
      oData = JSON.parse(sData, JUL.makeCaller(this.parser, '_jsonReviver'));
    }
    catch (e) {}
    if (oData && sRoot) { oData = JUL.get(sRoot, oData); }
    if (!oData || typeof oData !== 'object') { return null; }
    return jul.ns('JWL.components' + (sWhat ? '.' + sWhat : ''), oData);
  },
  loadCss: function(sComponent, fCall, oScope) {
    var oComponent = this.components[sComponent] || {};
    if (!oComponent.css) { return null; }
    var bCall = typeof fCall === 'function';
    this._cssCache = this._cssCache || {};
    var aCss;
    if (this._cssCache[sComponent]) {
      aCss = this._cssCache[sComponent];
      if (bCall) {
        (oScope ? fCall.call(oScope, aCss) : fCall(aCss));
      }
      return aCss;
    }
    var oWatch = {
      values: [],
      total: 0,
      count: 0,
      ready: null,
      scope: this,
      set: function(nKey, oValue) {
        var sUrl = '';
        if (nKey >= 0) {
          sUrl = this.values[nKey].style;
          this.values[nKey].style = oValue;
        }
        this.count++;
        if (this.count >= this.total && typeof this.ready === 'function') {
          this.ready.call(this.scope);
        }
        if (sUrl && this.scope.__pending[sUrl]) {
          var aCalls = this.scope.__pending[sUrl];
          for (var i = 0; i < aCalls.length; i++) {
            aCalls[i].watch.set(aCalls[i].key, oValue);
          }
          delete this.scope.__pending[sUrl];
        }
      }
    };
    this.__pending = this.__pending || {};
    var fLoad = function(sUrl, nKey) {
      if (this.__pending[sUrl]) {
        this.__pending[sUrl].push({watch: oWatch, key: nKey});
        return;
      }
      else {
        this.__pending[sUrl] = [];
      }
      var oHttp;
      try {
        if (typeof window.XMLHttpRequest === 'function') {
          oHttp = new XMLHttpRequest();
          if (bCall) {
            oHttp.addEventListener('load', function() {
              oWatch.set(nKey, this.responseText || '');
            });
            oHttp.addEventListener('error', function() {
              oWatch.set(nKey, '');
            });
          }
          oHttp.open('GET', sUrl, bCall);
          oHttp.setRequestHeader('Content-Type', 'text/css; charset=UTF-8');
          oHttp.send(null);
          if (!bCall) { oWatch.set(nKey, oHttp.responseText || ''); }
        }
        else {
          oHttp = new ActiveXObject('WinHttp.WinHttpRequest.5.1');
          oHttp.Open('GET', sUrl, false);
          oHttp.SetRequestHeader('Content-Type', 'text/css; charset=UTF-8');
          oHttp.Send();
          oWatch.ser(nKey, oHttp.ResponseText || '');
        }
      }
      catch (e) {
        oWatch.set(nKey, '');
      }
    };
    aCss = [].concat(oComponent.css);
    oWatch.ready = function() {
      for (var i = 0; i < aCss.length; i++) {
        if (!aCss[i].style) {
          aCss.splice(i, 1);
          i--;
        }
      }
      this._cssCache[sComponent] = aCss;
      if (bCall) {
        (oScope ? fCall.call(oScope, aCss) : fCall(aCss));
      }
    };
    oWatch.total = aCss.length;
    oWatch.values = aCss;
    for (var i = 0; i < aCss.length; i++) {
      if (typeof aCss[i] !== 'object') { aCss[i] = {style: aCss[i], media: ''}; }
      var sUrl = encodeURI(JUL.trim(aCss[i].style.substr(0, 1024).split('\n')));
      if (aCss[i].style && aCss[i].style.indexOf(';') < 0 && sUrl) {
        fLoad.call(this, sUrl, i);
      }
      else {
        oWatch.set(-1, '' );
      }
    }
    return aCss;
  },
  makeClass: function(sName, sNewNS, oParser) {
    oParser = oParser || this.parser;
    if (sName.indexOf(oParser.defaultClass + ':') === 0) { sName = sName.substr(oParser.defaultClass.length + 1); }
    var oComponent = this.components[sName] || {};
    var sNS = oParser.defaultClass;
    if (sName.indexOf(':') > -1) {
      sNS = sName.split(':')[0];
      sName = sName.substr(sNS.length + 1);
    }
    if (typeof JWL._Base_ !== 'function') {
      JWL._Base_ = function() {};
      JUL.apply(JWL._Base_.prototype, {
        get: function(sItem) { return sItem in this ? this[sItem] : JWL._Base_.wrapUp(this._el[sItem]); },
        set: function(sItem, oValue, bHost) { (bHost || sItem in this ? this : this._el)[sItem] =
          !bHost && !(sItem in this) && JWL._Base_.onRe.test(sItem) && typeof oValue === 'function' ?
          JUL.makeCaller(this, oValue) : oValue; },
        el: function() { return this._el; },
        config: function() { return this._config; }
      });
      JUL.apply(JWL._Base_, {
        id: 1,
        items: {},
        attributeName: 'data-component-id',
        onRe: /^on[a-z]+$/,
        map: function(oComponent, sItem) {
          var oEl = oComponent.el();
          if (!oEl) { return; }
          if (sItem && typeof sItem !== 'string') { sItem = sItem.getAttribute(this.attributeName); }
          if (!sItem) { sItem = 'c-' + this.id++; }
          this.items[sItem] = oComponent;
          oEl.setAttribute(this.attributeName, sItem);
        },
        get: function(sId) {
          if (sId && typeof sId !== 'string') { sId = sId.getAttribute(this.attributeName); }
          return sId ? this.items[sId] || null : null;
        },
        cleanUp: function() {
          if ((this.id - 1) % 4096) { return; }
          var oItems = {};
          var fClean = function(oNode) {
            for (var i = 0; i < oNode.childNodes.length; i++) {
              var oChild = oNode.childNodes[i];
              if (oChild.nodeType !== 1) { continue; }
              var sItem = oChild.getAttribute(this.attributeName);
              if (sItem) { oItems[sItem] = this.items[sItem]; }
              fClean.call(this, oChild);
            }
          };
          fClean.call(this, document.body);
          this.items = oItems;
        },
        wrapUp: function(oData) {
          try {
            if (!oData) { return oData; }
            if (oData instanceof Element && oData.nodeType === 1) {
              return oData.getAttribute(this.attributeName) ? this.get(oData) : oData;
            }
            if (typeof oData === 'object' && typeof oData.length && oData[0] instanceof Element) {
              var aReturn = [];
              for (var i = 0; i < oData.length; i++) {
                aReturn[i] = oData[i].nodeType === 1 && oData[i].getAttribute(this.attributeName) ? this.get(oData[i]) : oData[i];
              }
              return aReturn;
            }
          }
          catch (e) {}
          return oData;
        }
      });
    }
    var fClass = function(oConfig, oEl) {
      oConfig = oConfig  || {};
      this._config = JUL.apply({}, oConfig);
      delete this._config[this._parser.parentProperty];
      oConfig = JUL.apply({}, oConfig);
      oConfig[this._parser.classProperty] = sNS;
      oConfig[this._parser.tagProperty] = sName;
      oConfig.listeners = JUL.apply({scope: this}, oConfig.listeners || {});
      if (oEl) {
        this._parser.createDom(oConfig, oEl);
        this._el = oEl;
      }
      else {
        this._el = JWL.parser.customFactory.call(this._parser, oConfig);
        if (this._el instanceof JWL._Base_) {
          oEl = this._el.el();
          oEl.setAttribute('class', (oEl.getAttribute('class') || '') + ' ' + JWL.registerPrefix + '-' +
            (sNS === this._parser.defaultClass ? '' : sNS + '-') +
            ((oComponent.ui || {})[this._parser.cssProperty] || sName).split(' ').shift());
          this._el = oEl;
          JWL._Base_.map(this, oEl);
          return;
        }
      }
      JWL._Base_.map(this);
      JWL._Base_.cleanUp();
    };
    fClass.prototype = new JWL._Base_();
    fClass.prototype.constructor = fClass;
    fClass.prototype._parser = oParser;
    this._protoCache = this._protoCache || {};
    var sItem, oProto;
    var sCompNS = oComponent.ui ? oComponent.ui[oParser.classPrpperty] || oParser.defaultClass : sNS;
    var sCompTag = oComponent.ui ? oComponent.ui[oParser.tagProperty] : sName;
    var sTag = sCompNS + ':' + sCompTag;
    if (!this._protoCache[sTag]) {
      this._protoCache[sTag] = {attributes: false, baseURI: false, childNodes: false, className: false,  
        dataset: false, firstChild: false, innerHTML: false, lastChild: false, localName: false, 
        namespaceURI: false, nextSibling: false, nodeName: false, nodeType: false, nodeValue: false, 
        ownerDocument: false, parentNode: false, prefix: false, previousSibling : false, style: false, 
        tabIndex: false, tagName: false,
        addEventListener: true, appendChild: true, blur: true, cloneNode: true, 
        compareDocumentPosition: true, dispatchEvent: true, focus: true, getAttribute: true, 
        getAttributeNode: true, getAttributeNodeNS: true, getAttributeNS: true, getBoundingClientRect: true, 
        getElementsByTagName: true, getElementsByTagNameNS: true, hasAttribute: true, hasAttributeNS: true, 
        hasAttributes: true, hasChildNodes: true, insertBefore: true, isDefaultNamespace: true, 
        lookupNamespaceURI: true, lookupPrefix: true, normalize: true, querySelector: true, querySelectorAll: true, 
        releaseCapture: true, removeAttribute: true, removeAttributeNode: true, removeAttributeNS: true, 
        removeChild: true, removeEventListener: true, replaceChild: true, scrollIntoView: true, setAttribute: true, 
        setAttributeNode: true, setAttributeNodeNS: true, setAttributeNS: true, setCapture: true};
      var oFilter = /^[a-z]/;
      var oProtoConfig = {};
      oProtoConfig[oParser.classProperty] = sCompNS;
      oProtoConfig[oParser.tagProperty] = sCompTag;
      oProto = oParser.createDom(oProtoConfig);
      for (sItem in oProto) {
        if (!oFilter.test(sItem)) { continue; }
        try {
          this._protoCache[sTag][sItem] = typeof oProto[sItem] === 'function';
        }
        catch (e) {}
      }
    }
    oProto = this._protoCache[sTag];
    this._methodCache = this._methodCache || {getter: {}, setter: {}, other: {}};
    for (sItem in oProto) {
      if (oProto.hasOwnProperty(sItem)) {
        if (oProto[sItem]) {
          this._methodCache.other[sItem] = this._methodCache.other[sItem] || (function(sItem) {
            return function() {
              if (!this._el) { return undefined; }
              var bEvent = sItem === 'addEventListener' || sItem === 'attachEvent';
              var aArgs = [].slice.call(arguments);
              for (var i = 0; i < aArgs.length; i++) {
                if (bEvent && typeof aArgs[i] === 'function') { aArgs[i] = JUL.makeCaller(this, aArgs[i]); }
                if (aArgs[i] instanceof JWL._Base_) { aArgs[i] = aArgs[i].el(); }
              }
              return JWL._Base_.wrapUp(this._el[sItem].apply(this._el, aArgs));
            };
          })(sItem);
          fClass.prototype[sItem] = this._methodCache.other[sItem];
        }
        else {
          this._methodCache.getter[sItem] = this._methodCache.getter[sItem] || (function(sItem) {
            return function() {
              return this._el ? JWL._Base_.wrapUp(this._el[sItem]) : undefined;
            };
          })(sItem);
          this._methodCache.setter[sItem] = this._methodCache.setter[sItem] || (function(sItem) {
            return function(oValue) {
              if (oValue instanceof JWL._Base_) { oValue = oValue.el(); }
              if (this._el) {
                if (JWL._Base_.onRe.test(sItem) && typeof oValue === 'function') {
                  oValue = JUL.makeCaller(this, oValue);
                }
                this._el[sItem] = oValue;
              }
            };
          })(sItem);
          try {
            Object.defineProperty(fClass.prototype, sItem, {
              configurable: true,
              enumerable: true,
              get: this._methodCache.getter[sItem],
              set: this._methodCache.setter[sItem]
            });
          }
          catch (e1) {}
        }
      }
    }
    JUL.apply(fClass.prototype, oComponent.prototype || {});
    var sWhat = 'JWL.' + sNS.toUpperCase() + '.' + sName[0].toUpperCase() + sName.substr(1);
    return jul.ns(sNewNS || sWhat, fClass);
  },
  register: function(sName, bDerived, sNewName, oParser) {
    oParser = oParser || this.parser;
    if (sName.indexOf(oParser.defaultClass + ':') === 0) { sName = sName.substr(oParser.defaultClass.length + 1); }
    var oComponent = this.components[sName] || {};
    var oPrototype = JUL.apply({
      _componentName: sName,
      _derived: bDerived && true,
      _parser: oParser,
      el: function() {
        return (this.shadowRoot || this).lastChild;
      },
      createdCallback: function() {
        var oRoot = this;
        if (this.shadowRoot) { oRoot = this.shadowRoot; }
        else if (typeof this.createShadowRoot === 'function') {  oRoot = this.createShadowRoot(); }
        var oComponent = JWL.components[this._componentName] || {};
        if (oComponent.css) {
          var n = [].concat(oComponent.css).length;
          for (var i = 0; i < n; i++) {
            var oStyle = document.createElement('style');
            oStyle.setAttribute('type', 'text/css' );
            oStyle.appendChild(document.createTextNode('noscript {}'));
            oRoot.appendChild(oStyle);
          }
          JWL.loadCss(this._componentName, function(aCss) {
            for (var i = 0; i < aCss.length; i++) {
              var oStyle = document.createElement('style');
              oStyle.setAttribute('type', 'text/css' );
              if (aCss[i].media) { oStyle.setAttribute('media', aCss[i].media); }
              oStyle.appendChild(document.createTextNode(aCss[i].style));
              oRoot.replaceChild(oStyle, oRoot.childNodes[i]);
            }
          }, this);
        }
      },
      connectedCallback: function() {
        this.attachedCallback();
      },
      attachedCallback: function() {
        var oRoot = this.shadowRoot || this;
        if (oRoot.childNodes.length && oRoot.lastChild.nodeName.toLowerCase() !== 'style') { return; }
        var oComponent = JWL.components[this._componentName] || {};
        var sNS = this._parser.defaultClass;
        var sName = this._componentName;
        if (sName.indexOf(':') > -1) {
          sNS = sName.split(':')[0];
          sName = sName.substr(sNS.length + 1);
        }
        this.setAttribute('class', (this.getAttribute('class') || '') + ' ' + JWL.registerPrefix + '-' +
          (sNS === this._parser.defaultClass ? '' : sNS + '-') +
          ((oComponent.ui || {})[this._parser.cssProperty] || sName).split(' ').shift());
        if (!oComponent.ui) { return; }
        var oConfig = {};
        oConfig[this._parser.classProperty] = sNS;
        oConfig[this._parser.tagProperty] = sName;
        oConfig[this._parser.parentProperty] = oRoot;
        oConfig.listeners = JUL.apply({scope: this}, oConfig.listeners || {});
        JWL.parser.customFactory.call(this._parser, oConfig);
      }
    }, oComponent.prototype || {});
    var sNS = oParser.defaultClass;
    if (sName.indexOf(':') > -1) {
      sNS = sName.split(':')[0];
      sName = sName.substr(sNS.length + 1);
    }
    var sTag = '';
    if (bDerived) {
      var sCompNS = oComponent.ui ? oComponent.ui[oParser.classPrpperty] || oParser.defaultClass : sNS;
      var sCompTag = oComponent.ui ? oComponent.ui[oParser.tagProperty] : sName;
      sTag = (sCompNS === oParser.defaultClass ? '' : sCompNS + ':') + sCompTag;
      var oElConfig = {};
      oElConfig[oParser.classProperty] = sCompNS;
      oElConfig[oParser.tagProperty] = sCompTag;
      var oEl = oParser.createDom(oElConfig);
      oPrototype = JUL.apply(Object.create(oEl.constructor.prototype), oPrototype);
    }
    else {
      oPrototype = JUL.apply(Object.create(HTMLElement.prototype), oPrototype);
    }
    sName = this.registerPrefix + '-' + (sNS === oParser.defaultClass ? '' : sNS + '-') + sName;
    if (window.customElements && typeof window.customElements.define === 'function') {
      var CC = function() {
         var oEl = window.Reflect.construct(oPrototype.constructor, [].slice.call(arguments) , CC);
           oEl.attachShadow({mode: 'open'});
             oEl.createdCallback();
         return oEl;
      };
      CC.prototype = oPrototype;
      var oCE = window.customElements;
      oCE.define.apply(oCE, [sName, CC].concat(bDerived ? {'extends': sTag} : []));
      return CC;
    }
    return document.registerElement(sNewName || sName, bDerived ? 
      {'extends': sTag, prototype: oPrototype} : {prototype: oPrototype});
  },
  save: function(sWhat) {
    return this.parser.obj2str(sWhat ? this.components[sWhat] : this.components, true);
  },
  trigger: function(oTarget, sEvent, oInit) {
    if (typeof JWL._Base_ === 'function' && oTarget instanceof JWL._Base_) { oTarget = oTarget.el(); }
    oInit = JUL.apply({bubbles: true, cancelable: true, composed: true}, oInit || {});
    var nSep = sEvent.indexOf(':');
    var sClass = nSep < 0 ? 'Event' : sEvent.slice (0, nSep);
    if (nSep > -1) { sEvent = sEvent.substr(nSep + 1); }
    var oEvent = null;
    if (typeof window[sClass] === 'function') {
        oEvent = new window[sClass](sEvent, oInit);
    }
    else if (typeof document.createEvent === 'function') {
        oEvent = document.createEvent(sClass );
        var aArgs = [sEvent];
        for (var sItem in oInit) {
          if (oInit.hasOwnProperty(sItem)) { aArgs.push(oInit[sItem]); }
        }
        oEvent['init' + sClass].apply(oEvent, aArgs);
    }
    else {
      oEvent = document.createEventObject();
      JUL.apply(oEvent, oInit);
      try {
        return oTarget.fireEvent('on' + sEvent, oEvent);
      }
      catch (e1) { return false; }
    }
    return  oTarget.dispatchEvent(oEvent);
  }
});

jul.ns('JWL.components');
JWL.parser = new jul.ui.Parser(JWL.parserConfig);
JWL.Parser.prototype = JWL.parser;

})(typeof global !== 'undefined' ? global : window, typeof module !== 'undefined' ? module : null);


(function(global, module) {
'use strict';
if (module && module.exports && typeof require === 'function') { require('jul'); }
var jul = new JUL.Instance({nsRoot: module && module.exports ? {JWL: module.exports} : global || null});
var JWL = jul.ns('JWL');


jul.ns('JWL.components.frameplayer');

jul.apply(jul.get('JWL.components.frameplayer'),  {
  ui: {
    tag: 'div', cid: '.frameplayer', css: 'frameplayer', children: [
      {tag: 'div', children: [
        {tag: 'img', cid: '.frameplayer-image', alt: 'frame', css: 'frameplayer-image', height: '135', src: 'frame.jpg',
         width: '240'}
      ]},
      {tag: 'div', css: 'left', title: 'JWL Frameplayer', children: [
        {xclass: 'svg', tag: 'svg', height: '32', include: 'JWL.resources.svglogo.ui', width: '32', parserConfig: {
          defaultClass: 'svg'
        }}
      ]},
      {tag: 'span', css: 'center', children: [
        {tag: 'playerbar', cid: '.frameplayer-playerbar'}
      ]},
      {tag: 'div', css: 'right', children: [
        {tag: 'jsonoptions', cid: '.frameplayer-jsonoptions'}
      ]},
      {tag: 'div', css: 'clear'}
    ]
  },
  logic: {
    '.frameplayer': {
      listeners: {
        gotoend: function () {
          this.gotoEnd();
        },
        gotostart: function () {
          this.gotoStart();
        },
        optionschanged: function () {
          this.stop();
        },
        pause: function () {
          this.pause();
        },
        play: function () {
          this.play();
        },
        stepbackward: function () {
          this.stepBackward();
        },
        stepforward: function () {
          this.stepForward();
        },
        stop: function () {
          this.stop();
        }
      }
    }
  },
  preCreate: function(oConfig, oParser) {
    var oMap = {
      'data-image-width': '.frameplayer-image.width',
      'data-image-height': '.frameplayer-image.height',
      'data-image-src': '.frameplayer-image.src',
      'data-image-alt': '.frameplayer-image.alt',
      'data-options': '.frameplayer-jsonoptions.data-options'
    };
    var sItem;
    var oHost = this ? this.host || this : null;
    if (oHost && oHost._componentName) {
      for (sItem in oMap) {
        if (oMap.hasOwnProperty(sItem)) { oConfig[sItem] = oHost.getAttribute(sItem); }
      }
    }
    for (sItem in oMap) {
      if (oMap.hasOwnProperty(sItem) && oConfig[sItem]) {
        oConfig[oMap[sItem]] = oConfig[sItem];
      }
    }
  },
  prototype: {
    cron: null,
    current: -1,
    gotoEnd: function() {
      this.current = 1e9;
      this.play();
      this.pause();
      this.showStop();
    },
    gotoStart: function() {
      this.current = -1;
      this.play();
      this.pause();
      this.showStop();
    },
    pause: function() {
      if (this.cron) { clearTimeout(this.cron); }
      this.cron = null;
    },
    play: function() {
      var oOpts = JWL.get(this).querySelector('.jwl-jsonoptions').getAttribute('data-options') || '';
      try { oOpts = JSON.parse(oOpts); } catch (e) {}
      oOpts = JUL.apply({
        template: 'frame.jpg',
        range: [0, 0],
        interval: 1000
      }, oOpts || {});
      if (this.current < oOpts.range[0]) { this.current = oOpts.range[0]; }
      if (this.current > oOpts.range[1]) { this.current = oOpts.range[1]; }
      var nVal = oOpts.zeropad ? (parseFloat('1e' + oOpts.range[1].toString().length) + this.current).toString().substr(1) : this.current;
      var oImg = JWL.get(this).querySelector('.frameplayer-image' );
      var sSrc = oOpts.template.replace('{n}', nVal);
      oImg.setAttribute('src', sSrc);
      oImg.setAttribute('alt', sSrc.split('/').pop().split('.')[0]);
      this.current++;
      var oThis = this;
      if (this.cron) { clearTimeout(this.cron); }
      this.cron = setTimeout(this.current > oOpts.range[1] ? 
        function() { oThis.stop(); } : function() { oThis.play(); }, oOpts.interval);
    },
    showStop: function() {
      JWL.get(this).querySelector('.jwl-playerbar').showPlay();
    },
    stepBackward: function() {
      this.current -= 2;
      this.play();
      this.pause();
      this.showStop();
    },
    stepForward: function() {
      this.play();
      this.pause();
      this.showStop();
    },
    stop: function() {
      this.pause();
      this.current = -1;
      this.showStop();
      var oImg = JWL.get(this).querySelector('.frameplayer-image');
      oImg.setAttribute('src', this.getAttribute('data-image-src'));
      oImg.setAttribute('alt', this.getAttribute('data-image-alt'));
    }
  },
  css: 'lib/jwl/css/frameplayer.css?v=0.8.5'
});

})(typeof global !== 'undefined' ? global : window, typeof module !== 'undefined' ? module : null);


(function(global, module) {
'use strict';
if (module && module.exports && typeof require === 'function') { require('jul'); }
var jul = new JUL.Instance({nsRoot: module && module.exports ? {JWL: module.exports} : global || null});
var JWL = jul.ns('JWL');


jul.ns('JWL.components.jsonoptions');

jul.apply(jul.get('JWL.components.jsonoptions'),  {
  ui: {
    tag: 'div', cid: '.jsonoptions', css: 'jsonoptions', children: [
      {tag: 'a', cid: '.jsonoptions-show', css: 'fa fa-gear', href: '#', title: 'Options'},
      {tag: 'div', css: 'jsonoptions-opts-wrap', children: [
        {tag: 'div', css: 'jsonoptions-opts', children: [
          {tag: 'textarea', cid: '.jsonoptions-edit', cols: '30', css: 'jsonoptions-edit', rows: '10', wrap: 'off'},
          {tag: 'div', css: 'jsonoptions-buttons', children: [
            {tag: 'button', cid: '.jsonoptions-ok', html: 'OK'},
            {tag: 'button', cid: '.jsonoptions-cancel', html: 'Cancel'}
          ]}
        ]}
      ]}
    ]
  },
  logic: {
    '.jsonoptions': {
      'data-options': '', listeners: {
        saveoptions: function () {
          this.saveOptions();
        },
        toggleoptions: function () {
          this.showOptions();
        }
      }
    },
    '.jsonoptions-cancel': {
      listeners: {
        click: function () {
          JWL.trigger(this, 'toggleoptions');
        }
      }
    },
    '.jsonoptions-ok': {
      listeners: {
        click: function () {
          JWL.trigger(this, 'saveoptions');
        }
      }
    },
    '.jsonoptions-show': {
      listeners: {
        click: function (oEvent) {
          oEvent = oEvent || event;  
          try { oEvent.preventDefault(); } catch(e) {}
          JWL.trigger(this, 'toggleoptions');
          return false;
        }
      }
    }
  },
  prototype: {
    showOptions: function(bHide) {
      var oOpts = JWL.get(this).querySelector('.jsonoptions-opts');
      var sClass = oOpts.getAttribute('class') || '';
      if (bHide || sClass.indexOf('shown') > -1) {
        oOpts.setAttribute('class', sClass.replace('shown', ''));
    }
    else {
      var sJson = this.getAttribute('data-options') || '';
      try { sJson = JUL.UI.obj2str(JSON.parse(sJson), true); } catch (e) {}
      JWL.get(this).querySelector('.jsonoptions-edit').value = sJson;
        oOpts.setAttribute('class', sClass + ' shown');
      }
    },
    saveOptions: function() {
        var sJson = JUL.trim(JWL.get(this).querySelector('.jsonoptions-edit').value);
        if (sJson) {
          try { sJson = JSON.stringify(JSON.parse(sJson)); }
          catch (e) { window.alert('Text must be valid JSON.\n' + (e.description || e.message)); return; }
        }
      this.setAttribute('data-options', sJson);
      JWL.trigger(this, 'optionschanged');
      this.showOptions(true);
    }
  },
  css: ['lib/faws/css/font-awesome.min.css?v=0.8.5',
   'lib/jwl/css/jsonoptions.css?v=0.8.5']
});

})(typeof global !== 'undefined' ? global : window, typeof module !== 'undefined' ? module : null);


(function(global, module) {
'use strict';
if (module && module.exports && typeof require === 'function') { require('jul'); }
var jul = new JUL.Instance({nsRoot: module && module.exports ? {JWL: module.exports} : global || null});
var JWL = jul.ns('JWL');


jul.ns('JWL.components.playerbar');

jul.apply(jul.get('JWL.components.playerbar'),  {
  ui: {
    tag: 'div', cid: '.playerbar', css: 'playerbar', children: [
      {tag: 'a', cid: '.playerbar-gotostart', css: 'fa fa-fast-backward', href: '#', title: 'Go to start'},
      {tag: 'a', cid: '.playerbar-stepbackward', css: 'fa fa-step-backward', href: '#', title: 'Step backward'},
      {tag: 'a', cid: '.playerbar-play', css: 'playerbar-play fa fa-play', href: '#', title: 'Play'},
      {tag: 'a', cid: '.playerbar-stepforward', css: 'fa fa-step-forward', href: '#', title: 'Step forward'},
      {tag: 'a', cid: '.playerbar-gotoend', css: 'fa fa-fast-forward', href: '#', title: 'Go to end'},
      {tag: 'a', cid: '.playerbar-stop', css: 'fa fa-stop', href: '#', title: 'Stop'}
    ]
  },
  logic: {
    '.playerbar': {
      listeners: {
        pause: function () {
          this.showPlay();
        },
        play: function () {
          this.showPlay(true);
        },
        stop: function () {
          this.showPlay();
        }
      }
    },
    '.playerbar-gotoend': {
      listeners: {
        click: function (oEvent) {
          oEvent = oEvent || event;  
          try { oEvent.preventDefault(); } catch(e) {}
          JWL.trigger(this, 'gotoend');
          return false;
        }
      }
    },
    '.playerbar-gotostart': {
      listeners: {
        click: function (oEvent) {
          oEvent = oEvent || event;  
          try { oEvent.preventDefault(); } catch(e) {}
          JWL.trigger(this, 'gotostart');
          return false;
        }
      }
    },
    '.playerbar-play': {
      listeners: {
        click: function (oEvent) {
          oEvent = oEvent || event;  
          try { oEvent.preventDefault(); } catch(e) {}
          var sClass = this.getAttribute('class');
          if (sClass.indexOf('fa-play') > -1) {
            JWL.trigger(this, 'play');
          }
          else {
            JWL.trigger(this, 'pause');
        }
          return false;
        }
      }
    },
    '.playerbar-stepbackward': {
      listeners: {
        click: function (oEvent) {
          oEvent = oEvent || event;  
          try { oEvent.preventDefault(); } catch(e) {}
          JWL.trigger(this, 'stepbackward');
          return false;
        }
      }
    },
    '.playerbar-stepforward': {
      listeners: {
        click: function (oEvent) {
          oEvent = oEvent || event;  
          try { oEvent.preventDefault(); } catch(e) {}
          JWL.trigger(this, 'stepforward');
          return false;
        }
      }
    },
    '.playerbar-stop': {
      listeners: {
        click: function (oEvent) {
          oEvent = oEvent || event;  
          try { oEvent.preventDefault(); } catch(e) {}
          JWL.trigger(this, 'stop');
          return false;
        }
      }
    }
  },
  prototype: {
    showPlay: function(bPause) {
      var oPlay = JWL.get(this).querySelector( '.playerbar-play');
      var sClass = oPlay.getAttribute('class');
      oPlay.setAttribute('class', sClass.replace(bPause ? 'fa-play' : 'fa-pause', bPause ? 'fa-pause' : 'fa-play'));
      oPlay.setAttribute('title', bPause ? 'Pause' : 'Play');
    }
  },
  css: ['lib/faws/css/font-awesome.min.css?v=0.8.5',
   'lib/jwl/css/playerbar.css?v=0.8.5']
});

})(typeof global !== 'undefined' ? global : window, typeof module !== 'undefined' ? module : null);


(function(global, module) {
'use strict';
if (module && module.exports && typeof require === 'function') { require('jul'); }
var jul = new JUL.Instance({nsRoot: module && module.exports ? {JWL: module.exports} : global || null});


jul.ns('JWL.resources');

jul.apply(jul.get('JWL.resources'),  {
  svglogo: {
    ui: {
      tag: 'svg', fill: 'transparent', height: '300', viewBox: '-10 -10 20 20', width: '300', children: [
        {tag: 'polygon', points: '-2,-1 2,-1 0,-8', stroke: 'yellow'},
        {tag: 'polygon', points: '-2,1 2,1 0,8', stroke: 'blue'},
        {tag: 'polygon', points: '-1,-2 -1,2 -8,0', stroke: 'red'},
        {tag: 'polygon', points: '1,-2 1,2 8,0', stroke: 'lightgreen'}
      ]
    },
    logic: null
  }
});

})(typeof global !== 'undefined' ? global : window, typeof module !== 'undefined' ? module : null);

