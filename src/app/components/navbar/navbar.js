'use strict';

import NavbarController from './navbar.controller';
import NavbarDirective from './navbar.directive';

export default angular.module('switchboard-app.Navbar', [])
.directive('navbar', NavbarDirective)
.controller('NavbarController', NavbarController);