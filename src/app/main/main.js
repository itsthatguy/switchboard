'use strict';

import MainController from './main.controller';     // jshint ignore:line
import Videos         from './thing/thing';       // jshint ignore:line

export default angular.module('switchboard-app.Main', [
  'switchboard-app.Thing',
  'angular.filter'
])
.controller('MainController', MainController);
