<<<<<<< HEAD
'use strict'

$            = require('jquery')
Handlebars   = require ('handlebars')
WatchJS      = require("watchjs")
watch        = WatchJS.watch
unwatch      = WatchJS.unwatch
callWatchers = WatchJS.callWatchers
github       = require('octonode')
ghdownload   = require('github-download')
exec         = require('exec')
path         = require('path')
fs           = require('fs.extra')

# this is a generic token
client = github.client("b88ebd287229cba593058175b38b059b13af6034")
ghrepo = client.repo('vikinghug/VikingActionBarSet')

class Repos
  blacklist: [
    "vikinghug.com"
    "VikingBuddies"
  ]
  repos: []
  constructor: ->
    @createEvents()
    @getRepos('vikinghug')


  createEvents: ->
    $("#download-all").on 'click', (e) => @downloadRepos()

  downloadRepos: ->
    for repo, i in @repos
      url = repo.git_url
      name = repo.name
      @downloadRepo(url, name)

  downloadRepo: (url, name) ->
    downloadPath = "./downloads/#{name}/"
    fs.exists downloadPath, (bool) =>
      if bool then fs.rmrfSync downloadPath

      ghdownload(url, downloadPath)
      .on 'dir', (dir) -> console.log(dir)
      .on 'file', (file) -> console.log(file)
      .on 'zip', (zipUrl) -> console.log(zipUrl)
      .on 'error', (err) -> console.error(err)
      .on 'end', ->
        exec 'tree', (err, stdout, sderr) -> console.log(stdout)


  findRepo: (id) ->
    return null if @repos.length == 0

    for repo, i in @repos
      if repo.id == id then return i else return null

  getRepos: (owner) ->
    org = client.org(owner)
    org.repos (err, array, data) =>
      array = @filterForBlacklist(array)

      for repo, i in array
        payload =
          id       : i
          owner    : repo.owner.login
          name     : repo.name
          git_url  : repo.git_url
          releases : null
          branches : null

        unless @findRepo(i)?
          @repos.push(payload)
        else
          @repos[i] = payload

        @getCommand("releases", payload)
        @getCommand("branches", payload)
        @getCommand("info", payload)

        @updateView(payload)
        self = @
        watch payload, -> self.updateView(this)

  filterForBlacklist: (array) ->
    self = this
    repos = array.filter (repo) ->
      n = 0
      self.blacklist.map (name) => n += (repo.name == name)
      return repo if n == 0

  updateView: (data) ->
    reposSource = $("#repo-template").html()
    template    = Handlebars.compile(reposSource)
    html        = template(data)
    $el = $("[data-repo-id=#{data.id}]")
    if $el.length == 0
      $("#repos").append(html)
    else
      $el.replaceWith(html)

  getCommand: (command, data) ->
    repo = client.repo("#{data.owner}/#{data.name}")
    repo[command] (err, array, res) => data[command] = array


module.exports = window.Repos = new Repos()
=======
os = require("os")

MyApp = Ember.Application.extend
  online: navigator.onLine
  offline: Em.computed.not("online")
  platform:
    isWindows: os.type() is "Windows_NT"
    isMac: os.type() is "Darwin"
    isLinux: os.type() is "Linux"

App = MyApp.create()
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
>>>>>>> 32c791f... initial commit
