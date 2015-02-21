(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var App, MyApp, os;

os = require("os");

MyApp = Ember.Application.extend({
  online: navigator.onLine,
  offline: Em.computed.not("online"),
  platform: {
    isWindows: os.type() === "Windows_NT",
    isMac: os.type() === "Darwin",
    isLinux: os.type() === "Linux"
  }
});

App = MyApp.create();

$(window).on("online offline", function() {
  App.set("online", navigator.onLine);
});

App.Router.map(function() {
  return this.resource("chat", {
    path: "/chat/:name"
  });
});

App.IndexRoute = Ember.Route.extend();

App.IndexController = Ember.Controller.extend({
  enabled: false,
  fileToOpen: "",
  directoryToOpen: "",
  saveAsFile: ""
});

App.IndexView = Ember.View.extend({
  actions: {
    openFile: function() {
      this.$("#open-file").click();
    },
    openDirectory: function() {
      this.$("#open-directory").click();
    },
    saveAs: function() {
      this.$("#save-as").click();
    }
  }
});

App.UiSwitchComponent = Ember.Component.extend({
  classNames: ["ui-switch"],
  classNameBindings: ["enabled:on"],
  enabled: false,
  click: function() {
    this.toggleProperty("enabled");
  }
});

App.UiFileDialogComponent = Ember.Component.extend({
  classNames: ["ui-file-dialog"],
  tagName: "input",
  attributeBindings: ["type", "accept", "style", "directory:nwdirectory", "save:nwsaveas"],
  type: "file",
  style: "display: none",
  value: "",
  accept: null,
  directory: false,
  save: false,
  open: function() {
    this.$().click();
  },
  change: function() {
    this.set("value", this.$().val());
  }
});


},{"os":2}],2:[function(require,module,exports){
exports.endianness = function () { return 'LE' };

exports.hostname = function () {
    if (typeof location !== 'undefined') {
        return location.hostname
    }
    else return '';
};

exports.loadavg = function () { return [] };

exports.uptime = function () { return 0 };

exports.freemem = function () {
    return Number.MAX_VALUE;
};

exports.totalmem = function () {
    return Number.MAX_VALUE;
};

exports.cpus = function () { return [] };

exports.type = function () { return 'Browser' };

exports.release = function () {
    if (typeof navigator !== 'undefined') {
        return navigator.appVersion;
    }
    return '';
};

exports.networkInterfaces
= exports.getNetworkInterfaces
= function () { return {} };

exports.arch = function () { return 'javascript' };

exports.platform = function () { return 'browser' };

exports.tmpdir = exports.tmpDir = function () {
    return '/tmp';
};

exports.EOL = '\n';

},{}]},{},[1])