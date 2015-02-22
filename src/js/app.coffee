os = require("os")

MyApp = Ember.Application.extend
  online: navigator.onLine
  offline: Em.computed.not("online")
  platform:
    isWindows: os.type() is "Windows_NT"
    isMac: os.type() is "Darwin"
    isLinux: os.type() is "Linux"

window.App = MyApp.create()
$(window).on "online offline", ->
  App.set "online", navigator.onLine
  return

App.Router.map ->
  @resource "chat", { path: "/chat/:name" }

# put your routes here
App.IndexRoute = Ember.Route.extend()
App.IndexController = Ember.Controller.extend
  enabled: false
  fileToOpen: ""
  directoryToOpen: ""
  saveAsFile: ""

App.IndexView = Ember.View.extend
  actions:
    openFile: ->
      @$("#open-file").click()
      return

    openDirectory: ->
      @$("#open-directory").click()
      return

    saveAs: ->
      @$("#save-as").click()
      return

App.UiSwitchComponent = Ember.Component.extend
  classNames: ["ui-switch"]
  classNameBindings: ["enabled:on"]
  enabled: false
  click: ->
    @toggleProperty "enabled"
    return

App.UiFileDialogComponent = Ember.Component.extend
  classNames: ["ui-file-dialog"]
  tagName: "input"
  attributeBindings: [
    "type"
    "accept"
    "style"
    "directory:nwdirectory"
    "save:nwsaveas"
  ]
  type: "file"
  style: "display: none"
  value: ""
  accept: null
  directory: false
  save: false
  open: ->
    @$().click()
    return

  change: ->
    @set "value", @$().val()
    return
