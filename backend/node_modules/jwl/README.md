<p align="center">
<img alt="JWL" src="https://zonebuilder.github.io/media/jwl144.png" width="220" height="144" />
</p>

JWL - The JavaScript Widget Library
===================================

About
-----

The JavaScript Widget Library (JWL) is a tool that allows you to build modern 
web applications by providing a simple way to create HTML components.
 JWL is based on [JUL - The JavaScript UI Language module](http://sourceforge.net/projects/jul-javascript/) 
 and it easily integrates with [JUL Designer](http://sourceforge.net/projects/jul-designer/).
 
License
-------
 
 Licensed under GNU GPLv2 or later and under GNU LGPLv3 or later. See enclosed 'licenses' folder.
 
Browser support
---------------

Compatible with all major browsers including: FF4+, Chrome 5+, IE9+, Edge, Opera 11+, Safari 5+ 

Features
--------
 
* creating HTML components from configuration objects 
* structural composition of the layout and the interface behavior with cascading element listeners 
* configuration and component inheritance 
* registering the components as HTML5 custom elements in supported browsers 
* two-way, fully recursive element wrappers for all browsers 

Install & usage in Node
-----------------------

Install JWL locally:

`npm install jwl`

Globally:

`npm install -g jwl`

Sample usage:

```javascript
var jwl = require('jwl');
console.log(jwl.components);
// create a JWL component - JWL.makeClass() wrapper test
var wnd = require('window');
global.window = global.window || new wnd();
var jwlParser = new jwl.Parser({
	customFactory: 'JWL.factory'
});
var player = jwlParser.create({tag: 'frameplayer'});
console.log(player.el());
```

You cab use webpack or browserify to bundle the components for the browser.

Build & install from source
---------------------------

Install [Node.js](https://nodejs.org/) in your system.
Run the following shell commands in order:

``` bash
	npm install
	npm run make
```
The release will be in the 'build' folder. The Node module will be in the 'build_node' folder.

Downloads & user support
------------------------

[jwl-library project on SourceForge](http://sourceforge.net/projects/jwl-library/)

