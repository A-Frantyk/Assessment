(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _commonTemplates = require('../common/templates');

var _commonTemplates2 = _interopRequireDefault(_commonTemplates);

require('../main/views/abiliton-main.html');

var _modulesSdlc = require('modules/sdlc');

var _modulesSdlc2 = _interopRequireDefault(_modulesSdlc);

var _modulesAdminCharters = require('modules/adminCharters');

var _modulesAdminCharters2 = _interopRequireDefault(_modulesAdminCharters);

var _mainControllersNavbarController = require('../main/controllers/navbar.controller');

var _mainControllersNavbarController2 = _interopRequireDefault(_mainControllersNavbarController);

var _commonControllersAppController = require('../common/controllers/app.controller');

var _commonControllersAppController2 = _interopRequireDefault(_commonControllersAppController);

var _componentsLogoutService = require('components/logout-service');

var _componentsLogoutService2 = _interopRequireDefault(_componentsLogoutService);

var _componentsBackDropService = require('components/back-drop-service');

var _componentsBackDropService2 = _interopRequireDefault(_componentsBackDropService);

var _componentsRoles = require('components/roles');

var _componentsRoles2 = _interopRequireDefault(_componentsRoles);

var _componentsStatusService = require('components/status-service');

var _componentsStatusService2 = _interopRequireDefault(_componentsStatusService);

var moduleName = 'abiliton.adminMain';

angular.module(moduleName, [_commonTemplates2['default'], _modulesSdlc2['default'], _modulesAdminCharters2['default'], _componentsLogoutService2['default'], _componentsBackDropService2['default'], _componentsRoles2['default'], _componentsStatusService2['default']]).controller('NavBarCtrl', _mainControllersNavbarController2['default']).controller('AppCtrl', _commonControllersAppController2['default'])
/**
 *  It is a temporary solution. We are turning off Tab to
 *  prevent some UI issues. We are going to implement tabulation in future, so thi code will be removed
 *  Responsible person: Yevgen Kruglyk
 */
.config(function () {
  // prevents default action on 'TAB' key
  angular.element(document).on('keydown', function (e) {
    // 9: TAB key
    if (e.keyCode === 9) {
      e.preventDefault();
      e.stopPropagation();
    }
  });
}).config(['$urlRouterProvider', function ($urlRouterProvider) {
  $urlRouterProvider.otherwise('/charters');
}]).run(['$rootScope', '$state', '$injector', function ($rootScope, $state, $injector) {
  // Leverages 'redirectTo' property from state config to automatically go to the specified child state.
  // This is needed to avoid issue with abstract parent states: if we put ui-sref="abstractParent" – error
  // will be thrown. ui-sref="abstractParent/childState" – is not a pretty solution because of hardcode.
  // More details on the problem – https://github.com/angular-ui/ui-router/issues/1584
  $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
    var redirect = toState.redirectTo;

    if (redirect) {
      if (angular.isString(redirect)) {
        event.preventDefault();
        $state.go(redirect, toParams);
      } else {
        var newState = $injector.invoke(redirect, null, { toState: toState, toParams: toParams });

        if (newState) {
          if (angular.isString(newState)) {
            event.preventDefault();
            $state.go(newState);
          } else if (newState.state) {
            event.preventDefault();
            $state.go(newState.state, newState.params);
          }
        }
      }
    }
  });
}]);

exports['default'] = moduleName;
module.exports = exports['default'];

},{"../common/controllers/app.controller":4,"../common/templates":6,"../main/controllers/navbar.controller":8,"../main/views/abiliton-main.html":10,"components/back-drop-service":13,"components/logout-service":31,"components/roles":45,"components/status-service":56,"modules/adminCharters":87,"modules/sdlc":182}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _commonTemplates = require('../common/templates');

var _commonTemplates2 = _interopRequireDefault(_commonTemplates);

require('./views/client-abiliton-main.html');

var _modulesClientCharters = require('modules/clientCharters');

var _modulesClientCharters2 = _interopRequireDefault(_modulesClientCharters);

var _commonControllersBaseNavbarController = require('../common/controllers/base.navbar.controller');

var _commonControllersBaseNavbarController2 = _interopRequireDefault(_commonControllersBaseNavbarController);

var _commonControllersAppController = require('../common/controllers/app.controller');

var _commonControllersAppController2 = _interopRequireDefault(_commonControllersAppController);

var _componentsLogoutService = require('components/logout-service');

var _componentsLogoutService2 = _interopRequireDefault(_componentsLogoutService);

var _componentsBackDropService = require('components/back-drop-service');

var _componentsBackDropService2 = _interopRequireDefault(_componentsBackDropService);

var _componentsRoles = require('components/roles');

var _componentsRoles2 = _interopRequireDefault(_componentsRoles);

var _componentsStatusService = require('components/status-service');

var _componentsStatusService2 = _interopRequireDefault(_componentsStatusService);

var moduleName = 'client.abiliton.main';

angular.module(moduleName, [_commonTemplates2['default'], _modulesClientCharters2['default'], _componentsLogoutService2['default'], _componentsBackDropService2['default'], _componentsRoles2['default'], _componentsStatusService2['default']]).controller('NavBarCtrl', _commonControllersBaseNavbarController2['default']).controller('AppCtrl', _commonControllersAppController2['default'])
/**
 *  It is a temporary solution. We are turning off Tab to
 *  prevent some UI issues. We are going to implement tabulation in future, so thi code will be removed
 *  Responsible person: Yevgen Kruglyk
 */
.config(function () {
  // prevents default action on 'TAB' key
  angular.element(document).on('keydown', function (e) {
    // 9: TAB key
    if (e.keyCode === 9) {
      e.preventDefault();
      e.stopPropagation();
    }
  });
}).config(['$urlRouterProvider', function ($urlRouterProvider) {
  $urlRouterProvider.otherwise('/charters');
}]).run(['$rootScope', '$state', '$injector', function ($rootScope, $state, $injector) {
  // Leverages 'redirectTo' property from state config to automatically go to the specified child state.
  // This is needed to avoid issue with abstract parent states: if we put ui-sref="abstractParent" – error
  // will be thrown. ui-sref="abstractParent/childState" – is not a pretty solution because of hardcode.
  // More details on the problem – https://github.com/angular-ui/ui-router/issues/1584
  $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
    var redirect = toState.redirectTo;

    if (redirect) {
      if (angular.isString(redirect)) {
        event.preventDefault();
        $state.go(redirect, toParams);
      } else {
        var newState = $injector.invoke(redirect, null, { toState: toState, toParams: toParams });

        if (newState) {
          if (angular.isString(newState)) {
            event.preventDefault();
            $state.go(newState);
          } else if (newState.state) {
            event.preventDefault();
            $state.go(newState.state, newState.params);
          }
        }
      }
    }
  });
}]);

exports['default'] = moduleName;
module.exports = exports['default'];

},{"../common/controllers/app.controller":4,"../common/controllers/base.navbar.controller":5,"../common/templates":6,"./views/client-abiliton-main.html":3,"components/back-drop-service":13,"components/logout-service":31,"components/roles":45,"components/status-service":56,"modules/clientCharters":160}],3:[function(require,module,exports){
(function (global){
(typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null).module('src/app/index.js').run(['$templateCache', function($templateCache){$templateCache.put('client-abiliton-main.html','<div class="navbar navbar-inverse" ng-controller="NavBarCtrl"> <div class="row"> <div class="navbar-header"> <div class="h-content clearfix"> <a href="#" class="navbar-brand"> <div class="brand" ui-view="brand"></div> </a> </div> </div> <div ui-view="top-navigation"></div> <ul class="nav navbar-nav navbar-right"> <li class="uib-dropdown" uib-dropdown> <a href class="uib-dropdown-toggle" uib-dropdown-toggle> <span ng-include="\'username.html\'"></span> <span class="caret"></span> </a> <ul class="dropdown-menu"> <li ng-click="logout()"> <a href> Logout </a> </li> </ul> </li> </ul> </div> </div> <div class="container" ng-controller="AppCtrl"> <div class="aside" ng-class="{ absolute: isActivatedBackdrop }"> <div ui-view="context"></div> </div> <div ui-view="content"> </div> <div class="ad-backdrop" ng-class="{ visible: isActivatedBackdrop }"></div> </div>')}]);
module.exports = 'client-abiliton-main.html';
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],4:[function(require,module,exports){
'use strict';

/*@ngInject*/
Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var AppCtrl = (function () {
  function AppCtrl($scope, BackDropService, StatusService, LogoutService, $uibModal, $interval) {
    var _this = this;

    _classCallCheck(this, AppCtrl);

    this.$modal = $uibModal;
    this.StatusService = StatusService;
    this.LogoutService = LogoutService;
    this.isMessageShown = false;

    // interval between requests for checking status
    this._pollingTime = 30000;

    $scope.isActivatedBackdrop = false;

    var unWatchBackDropState = $scope.$watch(function () {
      return BackDropService.getBackDropState();
    }, function () {
      return $scope.isActivatedBackdrop = BackDropService.getBackDropState();
    });

    var session = $interval(function () {
      StatusService.getStatus().then(function (res) {
        var state = res.data.authenticated;

        if (!state) {
          $interval.cancel(session);

          session = null;
          sessionStorage.status = 'expired';

          _this.LogoutService.logout();
        }

        if (angular.isNumber(state)) {
          _this.showExpirationMessage(state);
        }
      });
    }, this._pollingTime);

    $scope.$on('$destroy', function () {
      $interval.cancel(session);
      session = null;

      unWatchBackDropState();
    });
  }

  /**
   * Shows session expiration notification
   */

  _createClass(AppCtrl, [{
    key: 'showExpirationMessage',
    value: function showExpirationMessage(expTime) {
      var _this2 = this;

      var me = this;

      if (this.isMessageShown) {
        return null;
      }

      var modalInstance = this.$modal.open({
        animation: true,
        backdrop: 'static',
        windowClass: 'expiration-modal',
        templateUrl: 'session-expired.html',
        resolve: {
          time: function time() {
            return expTime;
          }
        },
        /*@ngInject*/
        controller: ["$scope", "$uibModalInstance", "$interval", "time", function controller($scope, $uibModalInstance, $interval, time) {
          $scope.time = time / 60;

          $scope.refresh = function () {
            me.isMessageShown = false;
            $uibModalInstance.close();
          };

          $scope.logout = function () {
            $uibModalInstance.dismiss('cancel');
          };
        }]
      });

      modalInstance.result.then(function () {
        return _this2.StatusService.refreshStatus().then(null, function () {
          return _this2.LogoutService.logout();
        });
      }, function () {
        return _this2.LogoutService.logout();
      });

      this.isMessageShown = true;
    }
  }]);

  return AppCtrl;
})();

exports['default'] = AppCtrl;
module.exports = exports['default'];

},{}],5:[function(require,module,exports){
'use strict';

/*@ngInject*/
Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var BaseNavBarCtrl = (function () {
  function BaseNavBarCtrl($scope, LogoutService) {
    var _this = this;

    _classCallCheck(this, BaseNavBarCtrl);

    this.logoutService = LogoutService;

    $scope.logout = function () {
      return _this.logout();
    };
  }

  _createClass(BaseNavBarCtrl, [{
    key: 'logout',
    value: function logout() {
      this.logoutService.logout();
    }
  }]);

  return BaseNavBarCtrl;
})();

exports['default'] = BaseNavBarCtrl;
module.exports = exports['default'];

},{}],6:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null);

var _angular2 = _interopRequireDefault(_angular);

// templates, which is required by ngify, has to be created before import of any module
// that has html templates within it.
exports['default'] = _angular2['default'].module('src/app/index.js', []).name;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],7:[function(require,module,exports){
(function (global){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null);

var _angular2 = _interopRequireDefault(_angular);

var _main = require('./main');

var _main2 = _interopRequireDefault(_main);

var _clientMain = require('./clientMain');

var _clientMain2 = _interopRequireDefault(_clientMain);

var _adminMain = require('./adminMain');

var _adminMain2 = _interopRequireDefault(_adminMain);

var permissions = undefined;
var app = _angular2['default'].module('abiliton', [_adminMain2['default']]);

var fetchData = function fetchData() {
  var injector = _angular2['default'].injector(['ng']);
  var promise = injector.get('$http').get('/api/user_groups');

  promise.then(function (res) {
    return permissions = res.data;
  }, function (error) {
    if (error && error.status !== 404) {
      var locationUrl = location.protocol + '//' + location.host + '/auth#/login';
      var encodedNext = encodeURIComponent(location.hash);

      location.href = encodedNext ? locationUrl + '?next=/' + encodedNext : locationUrl;
    }
  });

  return promise;
};

var bootstrapApplication = function bootstrapApplication(res) {
  var role = {
    charterAdmin: 'charter_admin',
    teamViewer: 'team_viewer',
    sdlcAuditor: 'sdlc_auditor'
  };

  var canViewTeams = function canViewTeams(items) {
    for (var key in items) {
      if (items.hasOwnProperty(key)) {
        var roles = items[key];

        for (var i = 0, len = roles.length; i < len; i++) {
          if (roles[i] === role.teamViewer || roles[i] === role.sdlcAuditor) {
            return true;
          }
        }
      }
    }

    return false;
  };

  var module = _main2['default'];
  var userRoles = res.data.user_roles;

  if (res.data.user_type === 'client') {
    if (!canViewTeams(userRoles)) {
      module = _clientMain2['default'];
    }
  } else {
    var roles = userRoles[0];

    if (roles && roles.some(function (item) {
      return item === role.charterAdmin;
    })) {
      module = _adminMain2['default'];
    }
  }

  app = _angular2['default'].module('abiliton', [module]);

  app.run(['PermissionsService', function (PermissionsService) {
    PermissionsService.setPermissions(permissions);
  }]);

  _angular2['default'].element(document).ready(function () {
    _angular2['default'].bootstrap(document, [app.name]);
  });
};

fetchData().then(bootstrapApplication);

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./adminMain":1,"./clientMain":2,"./main":9}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _commonControllersBaseNavbarController = require('../../common/controllers/base.navbar.controller');

var _commonControllersBaseNavbarController2 = _interopRequireDefault(_commonControllersBaseNavbarController);

/*@ngInject*/

var NavBarCtrl = (function (_BaseNavBarCtrl) {
  NavBarCtrl.$inject = ["$scope", "LogoutService"];
  _inherits(NavBarCtrl, _BaseNavBarCtrl);

  function NavBarCtrl($scope, LogoutService) {
    _classCallCheck(this, NavBarCtrl);

    _get(Object.getPrototypeOf(NavBarCtrl.prototype), 'constructor', this).call(this, $scope, LogoutService);

    var modules = [{ name: 'SOFTSERVE EXCELLENCE', link: 'charters' }, { name: 'ABILITON SDLC', link: 'sdlc' }];

    $scope.availableModules = modules;
  }

  return NavBarCtrl;
})(_commonControllersBaseNavbarController2['default']);

exports['default'] = NavBarCtrl;
module.exports = exports['default'];

},{"../../common/controllers/base.navbar.controller":5}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _commonTemplates = require('../common/templates');

var _commonTemplates2 = _interopRequireDefault(_commonTemplates);

require('./views/abiliton-main.html');

var _modulesSdlc = require('modules/sdlc');

var _modulesSdlc2 = _interopRequireDefault(_modulesSdlc);

var _modulesCharters = require('modules/charters');

var _modulesCharters2 = _interopRequireDefault(_modulesCharters);

var _controllersNavbarController = require('./controllers/navbar.controller');

var _controllersNavbarController2 = _interopRequireDefault(_controllersNavbarController);

var _commonControllersAppController = require('../common/controllers/app.controller');

var _commonControllersAppController2 = _interopRequireDefault(_commonControllersAppController);

var _componentsLogoutService = require('components/logout-service');

var _componentsLogoutService2 = _interopRequireDefault(_componentsLogoutService);

var _componentsBackDropService = require('components/back-drop-service');

var _componentsBackDropService2 = _interopRequireDefault(_componentsBackDropService);

var _componentsRoles = require('components/roles');

var _componentsRoles2 = _interopRequireDefault(_componentsRoles);

var _componentsStatusService = require('components/status-service');

var _componentsStatusService2 = _interopRequireDefault(_componentsStatusService);

var moduleName = 'abiliton.main';

angular.module(moduleName, [_commonTemplates2['default'], _modulesSdlc2['default'], _modulesCharters2['default'], _componentsLogoutService2['default'], _componentsBackDropService2['default'], _componentsRoles2['default'], _componentsStatusService2['default']]).controller('NavBarCtrl', _controllersNavbarController2['default']).controller('AppCtrl', _commonControllersAppController2['default'])
/**
 *  It is a temporary solution. We are turning off Tab to
 *  prevent some UI issues. We are going to implement tabulation in future, so thi code will be removed
 *  Responsible person: Yevgen Kruglyk
 */
.config(function () {
  // prevents default action on 'TAB' key
  angular.element(document).on('keydown', function (e) {
    // 9: TAB key
    if (e.keyCode === 9) {
      e.preventDefault();
      e.stopPropagation();
    }
  });
}).config(['$urlRouterProvider', function ($urlRouterProvider) {
  $urlRouterProvider.otherwise('/charters');
}]).run(['$rootScope', '$state', '$injector', function ($rootScope, $state, $injector) {
  // Leverages 'redirectTo' property from state config to automatically go to the specified child state.
  // This is needed to avoid issue with abstract parent states: if we put ui-sref="abstractParent" – error
  // will be thrown. ui-sref="abstractParent/childState" – is not a pretty solution because of hardcode.
  // More details on the problem – https://github.com/angular-ui/ui-router/issues/1584
  $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
    var redirect = toState.redirectTo;

    if (redirect) {
      if (angular.isString(redirect)) {
        event.preventDefault();
        $state.go(redirect, toParams);
      } else {
        var newState = $injector.invoke(redirect, null, { toState: toState, toParams: toParams });

        if (newState) {
          if (angular.isString(newState)) {
            event.preventDefault();
            $state.go(newState);
          } else if (newState.state) {
            event.preventDefault();
            $state.go(newState.state, newState.params);
          }
        }
      }
    }
  });
}]);

exports['default'] = moduleName;
module.exports = exports['default'];

},{"../common/controllers/app.controller":4,"../common/templates":6,"./controllers/navbar.controller":8,"./views/abiliton-main.html":10,"components/back-drop-service":13,"components/logout-service":31,"components/roles":45,"components/status-service":56,"modules/charters":153,"modules/sdlc":182}],10:[function(require,module,exports){
(function (global){
(typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null).module('src/app/index.js').run(['$templateCache', function($templateCache){$templateCache.put('abiliton-main.html','<div class="navbar navbar-inverse navbar-fixed-top" ng-controller="NavBarCtrl"> <div class="row"> <div class="navbar-header"> <div class="h-content clearfix" uib-dropdown> <a href="#" class="navbar-brand" uib-dropdown-toggle> <div class="brand" ui-view="brand"></div> <span ng-if="availableModules.length > 1" class="caret"></span> </a> <ul ng-if="availableModules.length > 1" class="uib-dropdown-menu" role="menu"> <li ng-repeat="module in availableModules" ui-sref-active="active"> <a ui-sref="{{ module.link }}" href="#">{{ module.name }}</a> </li> </ul> </div> </div> <div ui-view="top-navigation" class="navbar-left"></div> <ul class="nav navbar-nav navbar-right"> <li class="uib-dropdown" uib-dropdown> <a href class="uib-dropdown-toggle" uib-dropdown-toggle> <span ng-include="\'username.html\'"></span> <span class="caret"></span> </a> <ul class="dropdown-menu"> <li ng-click="logout()"> <a href> Logout </a> </li> </ul> </li> </ul> </div> </div> <div class="container" ng-controller="AppCtrl"> <div class="aside" ng-class="{ absolute: isActivatedBackdrop }"> <div ui-view="context"></div> </div> <div ui-view="content"> </div> <div class="ad-backdrop" ng-class="{ visible: isActivatedBackdrop }"></div> </div>')}]);
module.exports = 'abiliton-main.html';
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],11:[function(require,module,exports){
(function (global){
"use strict";

/***************

 This service makes call to API /api/account

 Response data format:
 [{
      "id": 1,
      "name": "Allscripts",
      "can_create_charter": true
    },
    ...
 ]

 ***************/

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null);

var _angular2 = _interopRequireDefault(_angular);

var moduleName = 'account.service';

/*@ngInject*/

var AccountService = (function () {
  AccountService.$inject = ["$http"];
  function AccountService($http) {
    _classCallCheck(this, AccountService);

    this.$http = $http;
  }

  /**
   * Makes call to API /account
   * @returns {Object} promise
   */

  _createClass(AccountService, [{
    key: 'getAccounts',
    value: function getAccounts() {
      return this.$http.get('/api/account');
    }
  }]);

  return AccountService;
})();

_angular2['default'].module(moduleName, []).service('AccountService', AccountService);

exports['default'] = moduleName;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],12:[function(require,module,exports){
'use strict';

/***************

 This service provides data sharing between application components.
 For instance, the list of selected teams for SDLC tab or selected
 charters for Charters tab and the selected period.

 You can add any data which you are going to share. Please do following:

 1. Create setter function:
 setSomething (something) {
            this._someThing = something;
          }
 2. Create getter function:
 getSomething () {
            return this._someThing;
          }

 If you want to watch new data you have to inject AppContext into your
 module and use getter for that data in the $watch. In this way you
 must not know the internal data realisation, you just use getter
 to say watch what this function returns, for instance:

 class yourClass {
        constructor ($scope, AppContext) {
          $scope.$watch(
            () => AppContext.getSomething(),
            (newValue, oldValue) => {
              // DO SOMETHING
            }
          );
        }
      }

 Also it can store and restore the context when we do switching between SDLC and Charters.
 This can save a lot of work if you have some special context.

 The service also knows how to serialize/deserialize context data. You can add your own
 serialize/deserialize functions if you add some new property to context. For instance:

 this._properties = {
        // BEGIN predefined properties
        selectedEntities: {
          serialize: () => {...},
          deserialize: () => {...}
        },
        period: {
          serialize: () => {...},
          deserialize: () => {...}
        }
        // END predefined properties

        // your new property
        newProperty: {
          serialize: () => {...},
          deserialize: () => {...}
        }
      };

 Example how it works with UrlParams service. Usage:

 //to get URL parameter's value
 let value = this.urlParams.getParameter(propertyName);
 let data = this._properties[propertyName].deserialize(value);

 //to set data to URL parameter
 let value = this._properties[propertyName].serialize(data);
 this.urlParams.setParameter(propertyName, value);

 ***************/

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _componentsUrlParamsService = require('components/url-params-service');

var _componentsUrlParamsService2 = _interopRequireDefault(_componentsUrlParamsService);

var moduleName = 'app.context.service';

/*@ngInject*/

var AppContext = (function () {
  AppContext.$inject = ["UrlParams"];
  function AppContext(UrlParams) {
    _classCallCheck(this, AppContext);

    this.urlParams = UrlParams;

    this._context = {};
    this._contextCache = {};
    this._entitiesStatus = {};

    this._promises = {
      account: null,
      team: null,
      charter: null
    };

    this._defFilterData = {
      status: [{ name: 'All' }],
      account: [{ name: 'All' }],
      unit: [{ name: 'All' }],
      vertical: [{ name: 'All' }]
    };

    this._filterData = angular.copy(this._defFilterData);

    this._filterContext = {
      data: this._filterData,
      filter: this._getDefCharterFilter()
    };

    this._properties = {
      selectedEntities: {
        serialize: this._serializeEntities,
        deserialize: this._deserializeEntities
      },
      uncheckedEntities: {
        serialize: this._serializeEntities,
        deserialize: this._deserializeEntities
      },
      period: {
        serialize: this._serializePeriod,
        deserialize: this._deserializePeriod
      }
    };

    this.resetRouterStates();
  }

  /**
   * Creates and updates a brand new context with new data.
   * This allows us not to do a deep data comparison in $watch().
   * @param {String} propertyName - the name of context property
   * @param {Object|Array} data - property value
   * @private
   */

  _createClass(AppContext, [{
    key: '_updateContext',
    value: function _updateContext(propertyName, data) {
      var value = this._properties[propertyName].serialize.call(this, data);

      this._context[propertyName] = angular.isObject(data) ? angular.copy(data) : {};

      this.urlParams.setParameter(propertyName, value);
    }

    /**
     * Serializes entities (teams|charters)
     * @param {Array} data - the list of entities from Search component
     * @returns {String}
     * @private
     */
  }, {
    key: '_serializeEntities',
    value: function _serializeEntities(data) {
      if (angular.isArray(data)) {
        return data.join(',');
      }

      return null;
    }

    /**
     * Deserializes the list of entities
     * @param {String} value - the value of the URL parameter
     * @returns {Array}
     * @private
     */
  }, {
    key: '_deserializeEntities',
    value: function _deserializeEntities(value) {
      if (!value) {
        return [];
      }

      var data = value.split(',');

      return data.length ? this._parseIds(data) : [];
    }

    /**
     * Serializes period data
     * @param {Object} data - period and preset
     * @returns {String}
     * @private
     */
  }, {
    key: '_serializePeriod',
    value: function _serializePeriod(data) {
      if (angular.isArray(data.preset)) {
        return data.preset.join(',');
      }

      return data.preset;
    }

    /**
     * Deserializes period data
     * @param {String} value - the value of the URL parameter
     * @returns {Object}
     * @private
     */
  }, {
    key: '_deserializePeriod',
    value: function _deserializePeriod(value) {
      /**
       * Create date from value
       * @param value - value in milliseconds
       * @returns {Date}
       */
      var getDate = function getDate(value) {
        return new Date(+value);
      };

      var period = {
        startDate: null,
        endDate: null,
        preset: this._resolvePeriodPreset()
      };

      if (!value) {
        return period;
      }

      if (value.indexOf(',') > -1) {
        var preset = value.split(',');

        return {
          startDate: getDate(preset[0]),
          endDate: getDate(preset[1]),
          preset: preset
        };
      }

      return period;
    }

    /**
     * Throughs away not numbers from array
     * @param {Array} arr - the list of entities ids
     * @returns {Array}
     * @private
     */
  }, {
    key: '_parseIds',
    value: function _parseIds(arr) {
      var result = [];

      for (var i = 0; i < arr.length; i++) {
        var id = +arr[i];

        if (!isNaN(id)) {
          result.push(id);
        }
      }

      return result;
    }

    /**
     * Updates selected entities in context
     * @param {Array} entities - the list of entities (teams, charters, etc.)
     */
  }, {
    key: 'updateSelectedEntities',
    value: function updateSelectedEntities(entities) {
      this._updateContext('selectedEntities', entities);
    }

    /**
     * Sets data from the Search component to shared context
     * @param {Object} entities - the list of entities (teams, charters, etc.)
     */
  }, {
    key: 'setSelectedEntities',
    value: function setSelectedEntities(entities) {
      this._updateContext('selectedEntities', entities.checked);
      this._updateContext('uncheckedEntities', entities.unchecked);
    }

    /**
     * Returns Search component context with selected and checked entities
     * @returns {Array}
     */
  }, {
    key: 'getAllEntities',
    value: function getAllEntities() {
      return this._context.selectedEntities.concat(this._context.uncheckedEntities);
    }

    /**
     * Returns Search component context with selected entities (checked items)
     * @returns {Array}
     */
  }, {
    key: 'getSelectedEntities',
    value: function getSelectedEntities() {
      return this._context.selectedEntities;
    }

    /**
     * Returns Search component context with unchecked entities
     * @returns {Array}
     */
  }, {
    key: 'getUncheckedEntities',
    value: function getUncheckedEntities() {
      return this._context.uncheckedEntities;
    }

    /**
     * Sets dates from Period component to shared context
     * @param {Object} period - contains start and end date
     */
  }, {
    key: 'setPeriod',
    value: function setPeriod(period) {
      this._updateContext('period', period);
    }

    /**
     * Returns Period component context
     * @returns {Object}
     */
  }, {
    key: 'getPeriod',
    value: function getPeriod() {
      return this._context.period;
    }

    /**
     * Sets both Search and Period context
     * @param {Array} entities - the list of entities (teams, charters, etc.)
     * @param {Object} period - contains start and end date
     */
  }, {
    key: 'setContext',
    value: function setContext(entities, period) {
      this.setSelectedEntities(entities);
      this.setPeriod(period);
    }

    /**
     * Returns full context with selected entities and period
     * @returns {Object}
     *  Format:
     *    {
     *      selectedEntities: [id1,...,idN],
     *      period: {
     *        startDate: date1,
     *        endDate: date2,
     *        preset: '3m' | [milliseconds_start, milliseconds2_end]
     *      }
     *    }
     */
  }, {
    key: 'getContext',
    value: function getContext() {
      return this._context;
    }

    /**
     * Resets shared context. So sets default or from URL parameters values if exist
     */
  }, {
    key: 'resetContext',
    value: function resetContext() {
      var props = this._properties;

      this._context = {};

      for (var key in props) {
        if (props.hasOwnProperty(key)) {
          var value = this.urlParams.getParameter(key);

          this._context[key] = this._properties[key].deserialize.call(this, value);
        }
      }
    }

    /**
     * Sets the state which indicates whether the entities are loaded
     * @param {Boolean} state
     */
  }, {
    key: 'setEntitiesAvailability',
    value: function setEntitiesAvailability(state) {
      this._entitiesAvailable = state;
    }

    /**
     * Returns the current state of entities
     * @returns {Boolean}
     */
  }, {
    key: 'getEntitiesAvailability',
    value: function getEntitiesAvailability() {
      return this._entitiesAvailable;
    }

    /**
     * Stores the current router state
     * @param {String} state - 'current'|'previous'
     * @param {String} sref - router state
     */
  }, {
    key: 'setRouterState',
    value: function setRouterState(state, sref) {
      this._state[state] = sref;
    }

    /**
     * Returns the stored router state
     * @param {String} state - 'current'|'previous'
     * @returns {String}
     */
  }, {
    key: 'getRouterState',
    value: function getRouterState(state) {
      return this._state[state];
    }

    /**
     * Resets all stored states
     */
  }, {
    key: 'resetRouterStates',
    value: function resetRouterStates() {
      this._state = { current: null, previous: null };
    }

    /**
     * Stores the current context to AppContext cache
     * @param {String} key
     */
  }, {
    key: 'storeContext',
    value: function storeContext(key) {
      this._contextCache[key] = angular.copy(this._context);
    }

    /**
     * Restores cached context
     * @param {String} key
     */
  }, {
    key: 'restoreContext',
    value: function restoreContext(key) {
      this._context = angular.copy(this._contextCache[key]);
    }

    /**
     * Checks key in context cache
     * @param key
     * @returns {boolean}
     */
  }, {
    key: 'isCached',
    value: function isCached(key) {
      return this._contextCache.hasOwnProperty(key);
    }

    /**
     * Adds new created entity to context
     * @param {Number} id - charter id
     */
  }, {
    key: 'addEntityToContext',
    value: function addEntityToContext(id) {
      var checked = this.getSelectedEntities() || [];
      var unchecked = this.getUncheckedEntities() || [];

      checked.push(id);

      this.setSelectedEntities({ checked: checked, unchecked: unchecked });
    }

    /**
     * Store entities ids with status
     * @param {Object} entitiesStatusObj
     * example of entitiesStatusObj
     *  {
     *    active: [...],
     *    inactive: [...],
     *    expired: [...]
     *  }
     */
  }, {
    key: 'setEntitiesStatus',
    value: function setEntitiesStatus(entitiesStatusObj) {
      this._entitiesStatus = entitiesStatusObj;
    }

    /**
     * Returns the stored entities ids with status
     * @returns {Object|*}
     */
  }, {
    key: 'getEntitiesStatus',
    value: function getEntitiesStatus() {
      return this._entitiesStatus;
    }

    /**
     * Stores the current context loader state
     * @param {Boolean} state
     */
  }, {
    key: 'setContextLoadedState',
    value: function setContextLoadedState(state) {
      this._contextLoadedState = state;
    }

    /**
     * Returns the current context loader state
     */
  }, {
    key: 'getContextLoadedState',
    value: function getContextLoadedState() {
      return this._contextLoadedState;
    }

    /**
     * Returns the charter period
     */
  }, {
    key: 'getCharterPeriod',
    value: function getCharterPeriod() {
      return this._charterPeriod;
    }

    /**
     * Stores the charter period
     * @param {Object} period
     */
  }, {
    key: 'setCharterPeriod',
    value: function setCharterPeriod(period) {
      this._charterPeriod = period;
    }

    /**
     * Stores the promise
     * @param {String} type - promise type (as a object's key)
     * @param {Function|null} promise
     * @param {Boolean} override - should we override existing promise
     */
  }, {
    key: 'setPromise',
    value: function setPromise(type, promise) {
      var override = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

      if (override) {
        this._promises[type] = promise ? promise(type) : null;

        return null;
      }

      if (!this._promises[type] && promise) {
        this._promises[type] = promise(type);
      }
    }

    /**
     * Returns the stored promise
     * @param {String} type - promise type
     */
  }, {
    key: 'getPromise',
    value: function getPromise(type) {
      return this._promises[type];
    }

    /**
     * Stores the state for active tab or resets if undefined or null
     * @param {String|null} state
     */
  }, {
    key: 'setActiveTabState',
    value: function setActiveTabState() {
      var state = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

      this._activeTabState = state;
    }

    /**
     * Returns the stored state fro active tab
     * @returns {String}
     */
  }, {
    key: 'getActiveTabState',
    value: function getActiveTabState() {
      return this._activeTabState;
    }

    /**
     * Stores the charters table filter object
     * @param {Object} filter
     */
  }, {
    key: 'setCharterFilter',
    value: function setCharterFilter(filter) {
      this._filterContext.filter = filter;
    }

    /**
     * Returns the stored charters table filter object
     * @returns {Object}
     */
  }, {
    key: 'getCharterFilter',
    value: function getCharterFilter() {
      return this._filterContext.filter;
    }

    /**
     * Resets charters table filter
     */
  }, {
    key: 'resetCharterFilter',
    value: function resetCharterFilter() {
      return this._filterContext.filter = this._getDefCharterFilter();
    }

    /**
     * Returns default charter filter data
     * @returns {Object}
     */
  }, {
    key: 'getDefCharterFilterData',
    value: function getDefCharterFilterData() {
      return this._defFilterData;
    }

    /**
     * Creates default charter filter
     * @returns {Object}
     * @private
     */
  }, {
    key: '_getDefCharterFilter',
    value: function _getDefCharterFilter() {
      return {
        status: this._filterData.status[0],
        account: this._filterData.account[0],
        unit: this._filterData.unit[0],
        vertical: this._filterData.vertical[0],
        clientPartner: '',
        manager: '',
        expired: false,
        overdue: false
      };
    }

    /**
     * Sets charter filter data for choices
     * @param {Object} data
     */
  }, {
    key: 'setCharterFilterData',
    value: function setCharterFilterData(data) {
      this._filterContext.data = data;
    }

    /**
     * Returns charter filter data for choices
     * @returns {Object}
     */
  }, {
    key: 'getCharterFilterData',
    value: function getCharterFilterData() {
      return this._filterContext.data;
    }

    /**
     * Resolves a state parameter period by states including
     * @returns {String}
     */
  }, {
    key: '_resolvePeriodPreset',
    value: function _resolvePeriodPreset() {
      var preset = this.urlParams.getParameter('period');

      if (!preset) {
        var stateIncludes = this.urlParams.getIncludes();

        preset = stateIncludes['charters'] && '1y' || stateIncludes['sdlc'] && '3m';
      }

      return preset;
    }

    /**
     * Stores true if period selector is active and false in another case
     * @param {Boolean} state
     */
  }, {
    key: 'setPeriodActive',
    value: function setPeriodActive(state) {
      this._periodActive = state;
    }

    /**
     * Returns period selector state
     */
  }, {
    key: 'getPeriodActive',
    value: function getPeriodActive() {
      return this._periodActive;
    }
  }], [{
    key: 'serviceFactory',
    value: function serviceFactory(UrlParams) {
      return new AppContext(UrlParams);
    }
  }]);

  return AppContext;
})();

angular.module(moduleName, [_componentsUrlParamsService2['default']]).factory('AppContext', AppContext.serviceFactory);

exports['default'] = moduleName;
module.exports = exports['default'];

},{"components/url-params-service":67}],13:[function(require,module,exports){
(function (global){
/***************

 This service manages the state of the backdrop.

 You can activate backdrop by passing true in setBackDropState method
 and deactivate it by passing false.

 Also you can watch the backdrop state using getBackDropState method.

 ***************/

"use strict";

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null);

var _angular2 = _interopRequireDefault(_angular);

var moduleName = 'back-drop.service';

var BackDropService = (function () {
  function BackDropService() {
    _classCallCheck(this, BackDropService);

    this.state = false;
  }

  /**
   * Sets Back Drop state
   * @param {Boolean} state
   */

  _createClass(BackDropService, [{
    key: 'setBackDropState',
    value: function setBackDropState(state) {
      this.state = state;
    }

    /**
     * Returns Back Drop state
     * @returns {Boolean}
     */
  }, {
    key: 'getBackDropState',
    value: function getBackDropState() {
      return this.state;
    }
  }]);

  return BackDropService;
})();

_angular2['default'].module(moduleName, []).service('BackDropService', BackDropService);

exports['default'] = moduleName;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],14:[function(require,module,exports){
(function (global){
'use strict';

/***************

 This service provides tools for tracking application supported browsers.

 ***************/

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null);

var _angular2 = _interopRequireDefault(_angular);

var moduleName = 'browser.service';

var BrowserService = (function () {
  function BrowserService(deviceDetector) {
    _classCallCheck(this, BrowserService);

    var cookieBrowser = sessionStorage['checkBrowser'];
    var cookieDevice = sessionStorage['checkDevice'];

    this.deviceDetector = deviceDetector;

    this._supportedBrowsers = {
      chrome: true,
      firefox: true,
      safari: true
    };

    this._checkBrowser = _angular2['default'].isDefined(cookieBrowser) ? JSON.parse(cookieBrowser) : true;
    this._checkDevice = _angular2['default'].isDefined(cookieDevice) ? JSON.parse(cookieDevice) : true;
  }

  /**
   * Changes state for checking supported browsers
   * @param {Boolean} state
   */

  _createClass(BrowserService, [{
    key: 'checkBrowser',
    value: function checkBrowser(state) {
      this._checkBrowser = state;
      sessionStorage['checkBrowser'] = state;
    }

    /**
     * Changes state for checking supported devices
     * @param {Boolean} state
     */
  }, {
    key: 'checkDevice',
    value: function checkDevice(state) {
      this._checkDevice = state;
      sessionStorage['checkDevice'] = state;
    }

    /**
     * Checks whether we support the current browser
     * @returns {boolean}
     */
  }, {
    key: 'isSupportedBrowser',
    value: function isSupportedBrowser() {
      return this._checkBrowser ? this._supportedBrowsers[this.deviceDetector.browser] : true;
    }

    /**
     * Checks whether it is Chrome
     * @returns {boolean}
     */
  }, {
    key: 'isChrome',
    value: function isChrome() {
      return this.deviceDetector.browser === 'chrome';
    }

    /**
     * Checks whether it is Safari
     * @returns {boolean}
     */
  }, {
    key: 'isSafari',
    value: function isSafari() {
      return this.deviceDetector.browser === 'safari';
    }

    /**
     * Checks whether it is Firefox
     * @returns {boolean}
     */
  }, {
    key: 'isFirefox',
    value: function isFirefox() {
      return this.deviceDetector.browser === 'firefox';
    }

    /**
     * Checks whether the current device is a desktop
     * @returns {Boolean}
     */
  }, {
    key: 'isDesktop',
    value: function isDesktop() {
      return this._checkDevice ? this.deviceDetector.isDesktop() : true;
    }
  }], [{
    key: 'serviceFactory',
    value: function serviceFactory(deviceDetector) {
      return new BrowserService(deviceDetector);
    }
  }]);

  return BrowserService;
})();

_angular2['default'].module(moduleName, ['ng.deviceDetector']).factory('BrowserService', BrowserService.serviceFactory);

exports['default'] = moduleName;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],15:[function(require,module,exports){
"use strict";

/***************

 This directive add quick filter in context

 Possible definition:

 <charters-context-filter data="data"></charters-context-filter>

 data - list of all entities ids


 To add it to your module make the following

 import SimpleContextList from 'components/charters-context-filter';

 and add it to dependency

 angular.module(moduleName, [..., ChartersContextFilter, ...])

 ***************/

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

require('../view/charters.context.filter.html');

/*@ngInject*/

var ChartersContextFilter = (function () {
  ChartersContextFilter.$inject = ["$state", "AppContext"];
  function ChartersContextFilter($state, AppContext) {
    var _this = this;

    _classCallCheck(this, ChartersContextFilter);

    this.$state = $state;
    this.appContext = AppContext;
    this.restrict = 'E';
    this.templateUrl = 'charters.context.filter.html';
    this.scope = {
      data: '='
    };

    this.link = function (scope) {
      return _this._link(scope);
    };
  }

  _createClass(ChartersContextFilter, [{
    key: '_link',
    value: function _link(scope) {
      var _this2 = this;

      var unwatchAppContext = scope.$watch(function () {
        return _this2.appContext.getEntitiesStatus();
      }, function (newVal) {
        if (newVal) {
          scope.active = newVal.active;
          scope.inactive = newVal.inactive;
          scope.expired = newVal.expired;
        }
      });

      /**
       * Adds entities in the context list
       * @param {Sting} status - charters status (active|inactive|expired|all)
       * @returns
       */
      scope.add = function (status) {
        if (scope.hasOwnProperty(status)) {
          _this2.appContext.setSelectedEntities({
            checked: scope[status]
          });
        }

        if (status === 'all') {
          _this2.appContext.updateSelectedEntities(scope.data);
        }
      };

      scope.$on('$destroy', function () {
        unwatchAppContext();
      });
    }
  }], [{
    key: 'directiveFactory',
    value: function directiveFactory($state, AppContext) {
      return new ChartersContextFilter($state, AppContext);
    }
  }]);

  return ChartersContextFilter;
})();

exports['default'] = ChartersContextFilter;
module.exports = exports['default'];

},{"../view/charters.context.filter.html":17}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _directiveChartersContextFilter = require('./directive/charters.context.filter');

var _directiveChartersContextFilter2 = _interopRequireDefault(_directiveChartersContextFilter);

var _componentsAppContextService = require('components/app-context-service');

var _componentsAppContextService2 = _interopRequireDefault(_componentsAppContextService);

var moduleName = 'charters.context.filter';

angular.module(moduleName, []).directive('chartersContextFilter', ['$state', 'AppContext', _directiveChartersContextFilter2['default'].directiveFactory]);

exports['default'] = moduleName;
module.exports = exports['default'];

},{"./directive/charters.context.filter":15,"components/app-context-service":12}],17:[function(require,module,exports){
(function (global){
(typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null).module('src/app/index.js').run(['$templateCache', function($templateCache){$templateCache.put('charters.context.filter.html','<div> No charters selected. <br> You have <a ng-if="data.length" ng-click="add(\'all\')">{{ data.length }} charters</a>: <a ng-if="active.length" ng-click="add(\'active\')">{{ active.length }} active</a> <span ng-if="!active.length">0 active</span> and <a ng-if="inactive.length" ng-click="add(\'inactive\')">{{ inactive.length }} inactive</a> <span ng-if="!inactive.length">0 inactive</span>. Expired charters: <a ng-if="expired.length" ng-click="add(\'expired\')">{{ expired.length }}</a> <span ng-if="!expired.length">0</span> . </div>')}]);
module.exports = 'charters.context.filter.html';
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],18:[function(require,module,exports){
(function (global){
"use strict";

/***************

 This service makes call to API `/api/choices/<key>`
 Possible value for <key>: type_of_work|charter_status|collection_basis (can be extended)

 Example of the response format for key=type_of_work:
 [
   {
     key: "ddt",
     value: "Dedicated development team"
   },
   {
     key: "sla",
     value: "SLA based service"
   },
   {
     key: "sa",
     value: "Staff augmentation"
   }
 ]



 ***************/

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null);

var _angular2 = _interopRequireDefault(_angular);

var moduleName = 'choice.service';

/*@ngInject*/

var ChoiceService = (function () {
  ChoiceService.$inject = ["$http"];
  function ChoiceService($http) {
    _classCallCheck(this, ChoiceService);

    this.$http = $http;
  }

  /**
   * Makes call to API type_of_work
   * @returns {Array} types list
   */

  _createClass(ChoiceService, [{
    key: 'getChoices',
    value: function getChoices(key) {
      return this.$http.get('/api/choices/' + key);
    }
  }]);

  return ChoiceService;
})();

_angular2['default'].module(moduleName, []).service('ChoiceService', ChoiceService);

exports['default'] = moduleName;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],19:[function(require,module,exports){
(function (global){
/***************

 This service notify if need reload context.

 You can notify about reload context by passing TRUE in setContextState method
 and deactivate it by passing FALSE.

 Also you can watch the ReloadContext state using getContextState method.

 ***************/

"use strict";

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null);

var _angular2 = _interopRequireDefault(_angular);

var moduleName = 'reload.context.service';

var ContextStateService = (function () {
  function ContextStateService() {
    _classCallCheck(this, ContextStateService);

    this.state = false;
  }

  /**
   * Sets Reload Context state
   * @param {Boolean} state
   */

  _createClass(ContextStateService, [{
    key: 'setContextState',
    value: function setContextState(state) {
      this.state = state;
    }

    /**
     * Returns Reload Context state
     * @returns {Boolean}
     */
  }, {
    key: 'getContextState',
    value: function getContextState() {
      return this.state;
    }
  }]);

  return ContextStateService;
})();

_angular2['default'].module(moduleName, []).service('ContextStateService', ContextStateService);

exports['default'] = moduleName;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],20:[function(require,module,exports){
(function (global){
"use strict";

/***************
 This directive shows contributors

 Possible definition:
 <contributors data="Array" contributors-item-action="Function" contributors-order="worst|best" contributors-type="teams|charters></contributors>

 Example of input data:
 [{
    id: 1,
    value: 0.7,
    name: '360 Program'
 }]

 To add it to your module make the following

 import Contributors from 'components/contributors';

 and add it to dependency

 angular.module(moduleName, [..., Contributors, ...])
 ***************/

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null);

var _angular2 = _interopRequireDefault(_angular);

require('./views/contributors.html');

var moduleName = 'contributors';

/*@ngInject*/

var Contributors = (function () {
  Contributors.$inject = ["$filter"];
  function Contributors($filter) {
    var _this = this;

    _classCallCheck(this, Contributors);

    this.$filter = $filter;
    this.restrict = 'E';
    this.templateUrl = 'contributors.html';

    this.scope = {
      data: '=',
      contributorsItemAction: '&',
      contributorsOrder: '=',
      contributorsType: '=',
      thresholds: '=',
      hideDivider: '@'
    };

    this.cfg = {
      topElementsLength: 2,
      bottomElementsLength: 3,
      collapsedLength: 6
    };

    this.link = function ($scope, $element, attrs) {
      return _this._link($scope, $element, attrs);
    };
  }

  _createClass(Contributors, [{
    key: '_link',
    value: function _link($scope, $element, attrs) {
      var _this2 = this;

      if (attrs.hasOwnProperty('hideDivider')) {
        $scope.isPresentDivider = false;
      } else {
        $scope.isPresentDivider = true;
        $scope.isCollapsed = true;
        $scope.firstPart = this.cfg.topElementsLength;
        $scope.collapsedLength = this.cfg.collapsedLength;
      }

      $scope.getContributorType = function (value) {
        return _this2._getContributorType(value, $scope.thresholds);
      };
      $scope.getContributorValue = function (value) {
        return _this2._getContributorValue(value);
      };
      $scope.expand = function () {
        return $scope.isCollapsed = false;
      };
      $scope.collapse = function () {
        return $scope.isCollapsed = true;
      };

      $scope.$watch('data', function (data) {
        if (data) {
          $scope.constructorsLength = data.length;
          $scope.contributors = _this2.$filter('orderBy')(data, $scope.contributorsOrder);
          $scope.lastPart = $scope.constructorsLength - _this2.cfg.bottomElementsLength;
          $scope.moreContributorsCount = $scope.constructorsLength - _this2.cfg.collapsedLength;
          $scope.isCollapsed = true;
        }
      });
    }

    /**
     * Returns contributors type
     * @param {Number} value - contributor value
     * @param {Object} thresholds - red and yellow
     * @private
     * returns {String}
     */
  }, {
    key: '_getContributorType',
    value: function _getContributorType(value, thresholds) {
      if (!thresholds) {
        return null;
      }

      if (value <= thresholds.red) {
        return 'danger';
      }

      if (value > thresholds.yellow) {
        return 'success';
      }

      return 'warning';
    }

    /**
     * Returns contributor value in percentages
     * @param {Number} value - contributor value
     * @returns {number}
     * @private
     */
  }, {
    key: '_getContributorValue',
    value: function _getContributorValue(value) {
      return Math.round(value * 100);
    }
  }], [{
    key: 'directiveFactory',
    value: function directiveFactory($filter) {
      return new Contributors($filter);
    }
  }]);

  return Contributors;
})();

_angular2['default'].module(moduleName, ['ui.bootstrap']).directive('contributors', Contributors.directiveFactory);

exports['default'] = moduleName;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./views/contributors.html":21}],21:[function(require,module,exports){
(function (global){
(typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null).module('src/app/index.js').run(['$templateCache', function($templateCache){$templateCache.put('contributors.html','<div class="progress-bar-wrapper" ng-if="!!contributors && contributors.length"> <div class="progress-bar-items" ng-repeat="item in contributors"> <div ng-class="{ \'progress-bar-item\': contributorsItemAction }" ng-if="!isCollapsed || $index <= firstPart || $index >= lastPart || !isPresentDivider" ng-click="contributorsItemAction({ id: item.id || item.name })"> <div class="progress-bar-name">{{ item.name }}</div> <div class="progress-bar-value">{{ getContributorValue(item.value) }}%</div> <uib-progressbar class="c-both" animate="true" type="{{ getContributorType(item.value) }}" value="getContributorValue(item.value)"></uib-progressbar> </div> <div class="more-teams-item" ng-if="isCollapsed && $index === firstPart && constructorsLength > collapsedLength && isPresentDivider"> <div> <span ng-click="expand()">{{ moreContributorsCount }} more {{ contributorsType }}</span> </div> </div> </div> <div class="more-teams-item" ng-if="!isCollapsed && !!contributors"> <div> <span ng-click="collapse()">Show less</span> </div> </div> </div> <div class="contributor-no-data" ng-if="!contributors || !contributors.length"> <div> <span class="no-data">NO DATA</span> </div> </div>')}]);
module.exports = 'contributors.html';
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],22:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var moduleName = 'Doughnut';

var Doughnut = (function () {
  function Doughnut($timeout) {
    var _this = this;

    _classCallCheck(this, Doughnut);

    this.timeout = $timeout;
    this.restrict = 'A';
    this.scope = {
      data: '=doughnut',
      config: '='
    };

    this.cfg = {
      defaultHeight: 200,
      defaultDrawDuration: 1000,
      circleRadius: 8,
      lineWidth: 3,
      radians: Math.PI / 180,
      red: 0.6,
      yellow: 0.8,
      margin: 10,
      axisStrokeWidth: 1,
      axisWidth: 10,
      startCircle: 0,
      fullCircle: 360,
      quarter: 90,
      thresholdRadius: 120,
      endTime: 1.1,
      minWindowWidth: 1366,
      defaultFontSize: '48px',
      defaultNoDataSize: '24px'
    };

    this.link = function (scope, element, attrs) {
      return _this._link(scope, element, attrs);
    };
  }

  _createClass(Doughnut, [{
    key: 'initializeParams',
    value: function initializeParams(element, attrs, enableAnimation) {
      this.cfg.drawDuration = enableAnimation ? this.cfg.defaultDrawDuration : 0;
      this.cfg.width = attrs.doughnutWidth || element.width() || element.parent().width();
      this.cfg.height = attrs.doughnutHeight || element.height() || this.cfg.defaultHeight;
      this.cfg.w = this.cfg.width - this.cfg.margin * 2;
      this.cfg.h = this.cfg.height - this.cfg.margin * 2;
      this.cfg.halfW = this.cfg.w / 2;
      this.cfg.halfH = this.cfg.h / 2;
      this.cfg.radius = Math.min(this.cfg.halfW, this.cfg.halfH);
      this.cfg.lineInnerRadius = this.cfg.radius - this.cfg.lineWidth;
    }
  }, {
    key: 'arc',
    value: function arc(config) {
      return d3.svg.arc().startAngle(config.start * this.cfg.radians).outerRadius(config.outerRadius).innerRadius(config.innerRadius).endAngle(config.end * this.cfg.radians);
    }

    /**
     * Gets threshold value by type
     * @param {String} type - type of the threshold ('red'|'yellow')
     * @param {Object} thresholds - contains red and yellow thresholds from response
     * @returns {Number}
     * @private
     */
  }, {
    key: '_getThreshold',
    value: function _getThreshold(type, thresholds) {
      return thresholds && thresholds[type] || this.cfg[type];
    }
  }, {
    key: '_link',
    value: function _link(scope, element, attrs) {
      var _this2 = this;

      var stopResizing = false;
      var resizeTimer;
      var unwatch = scope.$watch('data', function (data) {
        return _this2.timeout(function () {
          return _this2.render(element, attrs, data, true);
        }, 0);
      });

      var randomId = Math.round(1000000 * Math.random());

      this.config = scope.config || {};

      d3.select(window).on('resize.doughnut-' + randomId, function () {
        clearTimeout(resizeTimer);

        resizeTimer = setTimeout(function () {
          if (window.innerWidth > _this2.cfg.minWindowWidth) {
            _this2.render(element, attrs, scope.data, false);

            stopResizing = false;
          } else if (!stopResizing) {
            _this2.render(element, attrs, scope.data, false);

            stopResizing = true;
          }
        }, 50);
      });

      scope.$on('$destroy', function () {
        d3.select(window).on('resize.doughnut-' + randomId, null);
        unwatch();
      });
    }
  }, {
    key: 'getPercentage',
    value: function getPercentage(value) {
      return Math.round(value * 100);
    }

    /**
     * Draws threshold label
     * @param {Object} chart
     * @param {Number} value - threshold value
     * @param {Object} config - calculated coordinates
     * @param {String} type - threshold type ('red'|'yellow')
     */
  }, {
    key: 'drawThresholdLabel',
    value: function drawThresholdLabel(chart, value, config, type) {
      var rect = config.rect;
      var lCircle = config.leftCircle;
      var rCircle = config.rightCircle;
      var text = config.text;

      var label = chart.append('g');

      label.classed('kpi-threshold-label', true).attr('transform', 'translate(' + this.cfg.halfW + ',' + this.cfg.halfH + ')');

      label.append('rect').attr('x', rect.x).attr('y', rect.y).attr('width', rect.w).attr('height', rect.h).classed(type, true);

      label.append('circle').attr('cx', lCircle.cx).attr('cy', lCircle.cy).attr('r', lCircle.r).classed(type, true);

      label.append('circle').attr('cx', rCircle.cx).attr('cy', rCircle.cy).attr('r', rCircle.r).classed(type, true);

      label.append('text').attr('x', text.x).attr('y', text.y).text(Math.round(100 * value) + '%');
    }

    /**
     * Draw red label which indicates red threshold value
     */
  }, {
    key: 'redThresholdLabel',
    value: function redThresholdLabel(chart, coord, value) {
      // label's rect
      var rect = { h: 14, w: 24 };
      var halfH = rect.h / 2;
      var xH = coord.x - rect.h - halfH / 2;
      var yH = coord.y - halfH;
      var config = {
        rect: {
          x: xH,
          y: coord.y - rect.h,
          w: rect.w,
          h: rect.h
        },
        leftCircle: {
          cx: xH,
          cy: yH,
          r: halfH
        },
        rightCircle: {
          cx: xH + rect.w,
          cy: yH,
          r: halfH
        },
        text: {
          x: xH + rect.w / 2,
          y: coord.y - halfH / 2
        }
      };

      this.drawThresholdLabel(chart, value, config, 'red');
    }

    /**
     * Draw yellow label which indicates yellow threshold value
     */
  }, {
    key: 'yellowThresholdLabel',
    value: function yellowThresholdLabel(chart, coord, value) {
      // label's rect
      var rect = { h: 14, w: 24 };
      var halfH = rect.h / 2;
      var xH = coord.x - rect.h;

      var config = {
        rect: {
          x: xH,
          y: coord.y - halfH,
          w: rect.w,
          h: rect.h
        },
        leftCircle: {
          cx: xH,
          cy: coord.y,
          r: halfH
        },
        rightCircle: {
          cx: xH + rect.w,
          cy: coord.y,
          r: halfH
        },
        text: {
          x: xH + rect.w / 2,
          y: coord.y + halfH / 2 + halfH / 8
        }
      };

      this.drawThresholdLabel(chart, value, config, 'yellow');
    }
  }, {
    key: 'drawThreshold',
    value: function drawThreshold(parentEl, value, type) {
      var _this3 = this;

      if (this.config.hideThreshold) {
        return null;
      }

      var getCoord = function getCoord(value, func) {
        var radians = (value - _this3.cfg.quarter) * _this3.cfg.radians;

        return Math[func](radians) * _this3.cfg.thresholdRadius;
      };
      var val = this.cfg.fullCircle * value;
      var axisOutRadius = this.cfg.radius + this.cfg.axisWidth;
      var style = type === 'red' ? 'critical' : 'target';

      var threshold = parentEl.append('g').append('path').classed('threshold-default', true).classed(style, true).attr('transform', 'translate(' + this.cfg.halfW + ',' + this.cfg.halfH + ')').attr('d', this.arc({
        start: val,
        outerRadius: axisOutRadius,
        innerRadius: this.cfg.radius,
        end: val + this.cfg.axisStrokeWidth
      }));

      this[type + 'ThresholdLabel'](parentEl, { x: getCoord(val, 'cos'), y: getCoord(val, 'sin') }, value);

      return threshold;
    }
  }, {
    key: 'drawNoData',
    value: function drawNoData(parentEl) {
      var translateHeight = this.cfg.halfH + this.cfg.margin / 2;

      return parentEl.append('text').classed('chart-value-no-data', true).attr('transform', 'translate(' + this.cfg.halfW + ',' + translateHeight + ')').attr('font-size', this.config.noDataSize || this.cfg.defaultNoDataSize).text('NO DATA');
    }
  }, {
    key: 'render',
    value: function render(element, attrs, data) {
      var enableAnimation = arguments.length <= 3 || arguments[3] === undefined ? true : arguments[3];

      if (!data) {
        return null;
      }

      this.initializeParams(element, attrs, enableAnimation);

      var el = d3.select(element[0]);

      el.select('svg').remove();

      var doughnutSpace = el.append('svg').classed('doughnut-chart', true).attr({ width: this.cfg.width, height: this.cfg.height }).append('g').classed('margin', true).attr('transform', 'translate(' + this.cfg.margin + ', ' + this.cfg.margin + ')').attr({ width: this.cfg.w, height: this.cfg.h });

      var lineInnerRadius = this.cfg.radius - this.cfg.lineWidth;

      doughnutSpace.append('g').append('path').classed('backgroundArc', true).attr('transform', 'translate(' + this.cfg.halfW + ',' + this.cfg.halfH + ')').attr('d', this.arc({
        start: this.cfg.startCircle,
        outerRadius: this.cfg.radius,
        innerRadius: lineInnerRadius,
        end: this.cfg.fullCircle
      }));

      var critical = this._getThreshold('red', data.thresholds);
      var target = this._getThreshold('yellow', data.thresholds);

      var thresholds = {
        critical: {
          el: this.drawThreshold(doughnutSpace, critical, 'red'),
          value: critical
        },
        target: {
          el: this.drawThreshold(doughnutSpace, target, 'yellow'),
          value: target
        }
      };

      if (data.value !== 0 && !data.value) {
        this.drawNoData(doughnutSpace);

        return null;
      }

      this.drawChartLine(doughnutSpace, data.value, thresholds);
    }
  }, {
    key: 'drawChartLine',
    value: function drawChartLine(parentEl, data, thresholds) {
      var _this4 = this;

      var angle = this.cfg.fullCircle * data;
      var chartArc = this.arc({
        start: this.cfg.startCircle,
        outerRadius: this.cfg.radius,
        innerRadius: this.cfg.lineInnerRadius,
        end: angle
      });

      var chartProgress = parentEl.append('g').append('path').datum(angle * (Math.PI / 180)).classed('chart-critical', true).attr('transform', 'translate(' + this.cfg.halfW + ',' + this.cfg.halfH + ')').attr('d', chartArc);

      var chartValueWrap = parentEl.append('text').attr('transform', 'translate(' + this.cfg.halfW + ',' + this.cfg.height / 2 + ')');

      var animationConfig = {
        timeCritical: thresholds.critical.value / data,
        timeTarget: thresholds.target.value / data,
        thresholds: thresholds,
        chartValue: this.drawChartValue(chartValueWrap, data),
        percentageSymbol: this.drawPercentage(chartValueWrap),
        circle: this.drawCircle(parentEl),
        chartProgress: chartProgress
      };

      var _currentValue = 0;

      chartProgress.transition().duration(this.cfg.drawDuration).ease('linear').attrTween('d', function (d) {
        var i = d3.interpolate(_currentValue, d);

        return function (t) {
          _currentValue = i(t);

          _this4.animation(i, t, data, animationConfig);

          return chartArc.endAngle(i(t))();
        };
      });
    }
  }, {
    key: 'changeClass',
    value: function changeClass(element, defClass, prevClass, toClass) {
      if (element && defClass && prevClass) {
        var to = toClass ? defClass + '-' + toClass : defClass;
        element.classed(defClass + '-' + prevClass, false).classed(to, true);
      }
    }
  }, {
    key: 'animation',
    value: function animation(i, t, data, config) {
      if (t > config.timeCritical && data > config.thresholds.critical.value) {
        this.changeClass(config.thresholds.critical.el, 'threshold', 'critical', 'target');
        this.changeClass(config.chartValue, 'chart-value', 'critical', 'target');
        this.changeClass(config.percentageSymbol, 'chart-value-percentage', 'critical', 'target');
        this.changeClass(config.chartProgress, 'chart', 'critical', 'target');
        this.changeClass(config.circle, 'circle', 'critical', 'target');

        config.timeCritical = this.cfg.endTime;
      }

      if (t > config.timeTarget && data > config.thresholds.target.value) {
        this.changeClass(config.thresholds.critical.el, 'threshold', 'target');
        this.changeClass(config.thresholds.target.el, 'threshold', 'target');
        this.changeClass(config.chartValue, 'chart-value', 'target');
        this.changeClass(config.percentageSymbol, 'chart-value-percentage', 'target');
        this.changeClass(config.chartProgress, 'chart', 'target');
        this.changeClass(config.circle, 'circle', 'target');

        config.timeTarget = this.cfg.endTime;
      }

      var r = i(t) - this.cfg.quarter * this.cfg.radians;
      var middleChartLine = this.cfg.radius - 1;

      config.circle.attr('cx', Math.cos(r) * middleChartLine).attr('cy', Math.sin(r) * middleChartLine);
    }
  }, {
    key: 'drawChartValue',
    value: function drawChartValue(parentEl, data) {
      var _currentValue = 0;
      var chartValue = parentEl.append('tspan').classed('chart-value-critical', true).attr('transform', 'translate(' + this.cfg.halfW + ',' + this.cfg.halfH + ')').attr('font-size', this.config.valueSize || this.cfg.defaultFontSize).text(this.getPercentage(data)).datum(this.getPercentage(data));

      chartValue.transition().duration(this.cfg.drawDuration).ease('linear').tween('text', function (d) {
        var i = d3.interpolate(_currentValue, d);
        _currentValue = i(0);

        return function (t) {
          _currentValue = i(t);
          chartValue.text(Math.round(_currentValue));
        };
      });

      return chartValue;
    }
  }, {
    key: 'drawPercentage',
    value: function drawPercentage(parentEl) {
      return parentEl.append('tspan').text('%').classed('chart-value-percentage-critical', true);
    }
  }, {
    key: 'drawCircle',
    value: function drawCircle(parentEl) {
      return parentEl.append('circle').classed('circle-critical', true).attr('transform', 'translate(' + this.cfg.halfW + ',' + this.cfg.halfH + ')').attr('r', this.cfg.circleRadius);
    }
  }], [{
    key: 'directiveFactory',
    value: function directiveFactory($timeout) {
      return new Doughnut($timeout);
    }
  }]);

  return Doughnut;
})();

Doughnut.directiveFactory.$inject = ['$timeout'];

angular.module(moduleName, []).directive('doughnut', Doughnut.directiveFactory);

exports['default'] = moduleName;
module.exports = exports['default'];

},{}],23:[function(require,module,exports){
(function (global){
"use strict";

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null);

var _angular2 = _interopRequireDefault(_angular);

var moduleName = 'entities.service';

var EntitiesService = (function () {
  /*@ngInject*/

  EntitiesService.$inject = ["$http"];
  function EntitiesService($http) {
    _classCallCheck(this, EntitiesService);

    this.$http = $http;
  }

  /**
   * Makes call to API entities
   * @param {String} entityType - {charter|team|anything-else} Blank or missing type stands for "give me all the entities"
   * @returns {Array} Entities list
   */

  _createClass(EntitiesService, [{
    key: 'getEntitiesData',
    value: function getEntitiesData(entityType) {
      return this.$http.get('/api/entities', {
        params: {
          type: entityType
        }
      });
    }

    /**
     * Serializes context
     * @param {Array} entityList - Entities list
     *  Example:
     *   entityList = [
     *    {
     *      id: {String}, // Entity id
     *      isInList: {True},
     *      isChecked: {Boolean}
     *    }
     *   ]
     * @returns {Object}
     *  Example:
     *    {
     *      checked: {Array},  //Ids of checked entities
     *      unchecked: {Array} //Ids of unchecked entities
     *    }
     */
  }, {
    key: 'serializeContext',
    value: function serializeContext(entityList) {
      var result = { checked: [], unchecked: [] };

      for (var i = 0; i < entityList.length; i++) {
        if (entityList[i].isChecked) {
          result.checked.push(entityList[i].id);
        } else {
          result.unchecked.push(entityList[i].id);
        }
      }

      return result;
    }

    /**
     * Deserializes context
     * @param {Array} checkedEntities - checked entities id
     * @param {Array} unCheckedEntities - unchecked entities id
     * @returns {Array}
     *  Example:
     *   [
     *    {
     *      id: {String}, // Entity id
     *      isInList: {True},
     *      isChecked: {Boolean}
     *    }
     *   ]
     */
  }, {
    key: 'deSerializeContext',
    value: function deSerializeContext(checkedEntities, unCheckedEntities) {
      var createContextData = function createContextData(data) {
        var checked = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

        var result = [];

        if (!_angular2['default'].isArray(data)) {
          return result;
        }

        for (var i = 0, len = data.length; i < len; i++) {
          result.push({
            id: data[i],
            isChecked: checked,
            isInList: true
          });
        }

        return result;
      };

      var result = createContextData(checkedEntities);

      return result.concat(createContextData(unCheckedEntities, false));
    }

    /**
     * Gets object of entities status which keys is a status and value - an array of entities ids with this status
     * @param {Array} entities - the list of selected entities
     * @returns {Object}
     */
  }, {
    key: 'getEntitiesStatus',
    value: function getEntitiesStatus(entities) {
      var active = [];
      var inactive = [];
      var expired = [];

      for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];
        var attrs = entity.attrs;

        if (attrs && attrs.internal_details && attrs.internal_details.charter_status && attrs.internal_details.charter_status.key) {

          var _status = attrs.internal_details.charter_status.key;

          if (_status === 'active') {
            active.push(entity.id);
          }

          if (_status === 'inactive') {
            inactive.push(entity.id);
          }

          if (attrs.valid_until && this._isExpired(attrs.valid_until)) {
            entity._isExpired = true;
            expired.push(entity.id);
          }
        }
      }

      return {
        active: active,
        inactive: inactive,
        expired: expired
      };
    }

    /**
     * Checks whether the entity is expired
     * @param {String} date - expired date
     * @returns {Boolean}
     */
  }, {
    key: '_isExpired',
    value: function _isExpired(dateString) {
      var _dateString$split = dateString.split('-');

      var _dateString$split2 = _slicedToArray(_dateString$split, 3);

      var year = _dateString$split2[0];
      var month = _dateString$split2[1];
      var day = _dateString$split2[2];

      var expired = new Date(+year, +month - 1, +day + 1).getTime();

      return new Date().getTime() >= expired;
    }
  }]);

  return EntitiesService;
})();

_angular2['default'].module(moduleName, []).service('EntitiesService', EntitiesService);

exports['default'] = moduleName;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],24:[function(require,module,exports){
(function (global){
"use strict";

/***************

 This service handles incoming error status code and returns an appropriate error string

 ***************/

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null);

var _angular2 = _interopRequireDefault(_angular);

var moduleName = 'error.service';

/*@ngInject*/

var ErrorService = (function () {
  function ErrorService() {
    _classCallCheck(this, ErrorService);

    this._error = {
      400: 'Bad Request.',
      403: 'You have no access rights to view this data.',
      404: 'The page you were looking for does not exist.',
      500: 'Internal Server Error.',
      unknown: 'Unknown error.'
    };
  }

  /**
   * Return error string
   * @params {Object} error - error object
   * @returns {String}
   */

  _createClass(ErrorService, [{
    key: 'getError',
    value: function getError(error) {
      return this._error[error.status] || error.statusText || this._error.unknown;
    }
  }]);

  return ErrorService;
})();

_angular2['default'].module(moduleName, []).service('ErrorService', ErrorService);

exports['default'] = moduleName;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],25:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var moduleName = 'ngFullHeightSearchList';

var FullHeightSearchList = (function () {
  function FullHeightSearchList($timeout, AppContext) {
    var _this = this;

    _classCallCheck(this, FullHeightSearchList);

    this.timeout = $timeout;
    this.AppContext = AppContext;
    this.restrict = 'A';
    this.scope = {
      searchPanelIsActive: '=ngFullHeightSearchList'
    };

    this.link = function (scope, element) {
      return _this._link(scope, element);
    };
  }

  _createClass(FullHeightSearchList, [{
    key: '_link',
    value: function _link(scope, element) {
      var _this2 = this;

      var elem = $(element);
      elem.addClass('search-scroll');

      var setFullHeightSearchList = function setFullHeightSearchList() {
        var windowHeight = $(window).height();
        var searchListOffsetTop = elem.offset().top;
        var searchListOffsetBottom = elem.hasClass('has-bottom-controls') ? 49 : 0;
        var windowScrollTop = $(window).scrollTop();

        elem.css({
          "max-height": windowHeight - (searchListOffsetTop - windowScrollTop) - 40 - searchListOffsetBottom
        });
      };

      /**
       * Runs resize by timeout
       */
      var doResize = function doResize() {
        _this2.timeout(function () {
          scope.$apply(function () {
            return setFullHeightSearchList();
          });
        }, 200);
      };

      $(window).on('resize', setFullHeightSearchList);

      setFullHeightSearchList();

      scope.$watch(function () {
        return _this2.AppContext.getPeriodActive();
      }, doResize);
      scope.$watch('searchPanelIsActive', doResize);
    }
  }], [{
    key: 'directiveFactory',
    value: function directiveFactory($timeout, AppContext) {
      return new FullHeightSearchList($timeout, AppContext);
    }
  }]);

  return FullHeightSearchList;
})();

FullHeightSearchList.directiveFactory.$inject = ['$timeout', 'AppContext'];

angular.module(moduleName, []).directive('ngFullHeightSearchList', FullHeightSearchList.directiveFactory);

exports['default'] = moduleName;
module.exports = exports['default'];

},{}],26:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var moduleName = 'ngFullHeightTab';

var FullHeightTab = (function () {
  function FullHeightTab() {
    _classCallCheck(this, FullHeightTab);

    this.restrict = 'A';
  }

  _createClass(FullHeightTab, [{
    key: 'link',
    value: function link(scope, element) {
      var wind = $(window);
      var setFullHeightTab = function setFullHeightTab() {
        var windowHeight = wind.height();
        var elem = $(element);
        var elementContent = elem.find('.tab-content');
        var tabOffsetTop = elem.offset().top; // distance from tab to top of window
        var navHeight = 70; // hardcoded
        var tabBottomDistance = 10; // hardcoded

        elementContent.css({
          "max-height": windowHeight - navHeight - tabOffsetTop - tabBottomDistance
        });
      };

      wind.on('resize', setFullHeightTab);

      setFullHeightTab();
    }
  }], [{
    key: 'directiveFactory',
    value: function directiveFactory() {
      return new FullHeightTab();
    }
  }]);

  return FullHeightTab;
})();

angular.module(moduleName, []).directive('ngFullHeightTab', FullHeightTab.directiveFactory);

exports['default'] = moduleName;
module.exports = exports['default'];

},{}],27:[function(require,module,exports){
(function (global){
'use strict';

/**
 * Retrieve and process charters hierarchy data.
 */

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null);

var _angular2 = _interopRequireDefault(_angular);

var moduleName = 'hierarchy.service';

/*@ngInject*/

var HierarchyService = (function () {
  HierarchyService.$inject = ["$http"];
  function HierarchyService($http) {
    _classCallCheck(this, HierarchyService);

    this.$http = $http;
  }

  /**
   * Returns an array of entities. An entity may have property "children" which is
   * an array of entities of the same type.
   *
   * [{
   *    "id",
   *    "name",
   *    "type",
   *    "attrs": { key: value, ...},
   *    "children": [ child_1, child_2, ... ]
   * }]
   *
   * @param {String} type
   * @returns {Promise}
   */

  _createClass(HierarchyService, [{
    key: 'getHierarchyData',
    value: function getHierarchyData(type) {
      return this.$http.get('/api/accounts-charters-hierarchy', {
        "params": {
          "type": type
        }
      });
    }

    /**
     * Returns the accounts structure with there businesses and unassigned charters.
     * @params {String} filter
     * [{
     *  "id": "account_id",
     *  "name": "account name",
     *  "type": "account",
     *  "attrs": {...},
     *  "businesses": [Array],
     *  "unassigned_charters": [Array]
     *  },
     *  ...
     * ]
     *
     * @returns {Promise}
     */
  }, {
    key: 'getBusinessHierarchyData',
    value: function getBusinessHierarchyData() {
      var filter = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

      return this.$http.get('/api/accounts-business-charters-hierarchy' + (filter ? '?name_startswith=' + filter : ''));
    }

    /**
     * Gets an array of entities and returns alphabetized dictionary.
     * Value field is "name".
     *
     * [{
     *    id: 123,
     *    name: 'Allscritps',
     *    ...
     * },{
     *    id: 543,
     *    name: 'Babel',
     *    ...
     * },
     * ...
     * ]
     *
     * is converted to:
     *
     * {
     *    a: [{
     *      id: 123,
     *      name: 'Allscritps',
     *      ...
     *    }],
     *    b: [{
     *      id: 543,
     *      name: 'Babel',
     *      ...
     *    }],
     *    ...
     * }
     *
     * @param {Entity[]} data Source data
     * @returns {Object} Dictionary where key is a letter and value is an array of items.
     */
  }, {
    key: 'alphabetize',
    value: function alphabetize(data) {
      return data.reduce(function (result, item) {
        if (item.name) {
          var firstLetter = item.name[0].toLowerCase();

          if (!result[firstLetter]) {
            result[firstLetter] = [];
          }

          result[firstLetter].push(item);

          return result;
        }
      }, {});
    }

    /**
     * Creates a dictionary/map from a given tree.
     * Key is retrieved with the help of identity function.
     *
     * Also this function adds '$parent' property to each node and sets to the parent object.
     *
     * Example:
     * [{ id: '123', ...}] => { "123": { id: '123', ... } }
     *
     * @param {Array} data
     * @param {Function} identity
     * @param {Function} children
     * @returns {Object}
     */
  }, {
    key: 'indexTree',
    value: function indexTree(data, identity, children) {
      var traverseTree = function traverseTree(res, node, parent) {
        res[identity(node)] = node;

        if (node.owner && node.owner.id) {
          var id = node.owner.id;

          res[id] = node.owner;
          res[id]['$parent'] = parent;
          res[id]['parent'] = identity(node);
        }

        node.$parent = parent;

        var ch = children(node);

        for (var i = 0; i < ch.length; i++) {
          traverseTree(res, ch[i], node);
        }
      };

      var res = {};

      for (var key in data) {
        traverseTree(res, data[key]);
      }

      return res;
    }

    /**
     * Return the accounts filters
     * {
     *   "#": 0,
     *   "0-9": 2,
     *   "a": 2,
     *   "b": 1,
     *   "c": 0,
     *   // ...
     *   "z": 0
     * }
     * @returns {Promise}
     */
  }, {
    key: 'getBusinessHierarchyFilters',
    value: function getBusinessHierarchyFilters() {
      return this.$http.get('/api/accounts-business-charters-index');
    }
  }]);

  return HierarchyService;
})();

_angular2['default'].module(moduleName, []).service('HierarchyService', HierarchyService);

exports['default'] = moduleName;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],28:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var moduleName = 'IndexTrend';

var IndexTrend = (function () {
  function IndexTrend($timeout) {
    _classCallCheck(this, IndexTrend);

    IndexTrend.timeout = $timeout;
    this.restrict = 'A';
    this.scope = {
      data: '=indexTrend',
      config: '='
    };
  }

  _createClass(IndexTrend, [{
    key: 'link',
    value: function link(scope, element, attrs) {
      var resizeTimer = undefined;
      var config = scope.config || {};

      var cfg = {
        defaultHeight: 100,
        drawDelay: 0,
        drawDuration: 700,
        drawCircleDuration: 300,
        circleRadius: 8,
        red: 0.6,
        yellow: 0.8,
        margin: 10,
        endTime: 1.1,
        chartRange: 0.2,
        gridLines: 6,
        thresholdTextMargin: 5,
        defaultMaxRange: 1,
        minWindowWidth: 1366,
        stopResizing: false
      };

      var randomId = Math.round(1000000 * Math.random());

      scope.$watch('data', function (data) {
        return IndexTrend.timeout(function () {
          return scope.render(data);
        }, 0);
      });

      d3.select(window).on('resize.index.trend-' + randomId, function () {
        clearTimeout(resizeTimer);

        resizeTimer = setTimeout(function () {
          if (window.innerWidth > cfg.minWindowWidth) {
            scope.render(scope.data, false);

            cfg.stopResizing = false;
          } else if (!cfg.stopResizing) {
            scope.render(scope.data, false);

            cfg.stopResizing = true;
          }
        }, 50);
      });

      scope.$on('$destroy', function () {
        return d3.select(window).on('resize.index.trend-' + randomId, null);
      });

      scope.render = function (data) {
        var enableAnimation = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

        var thresholds = config.thresholds + '_thresholds';
        var _getThreshold = function _getThreshold(type) {
          return data && data[thresholds] && data[thresholds][type] || cfg[type];
        };

        var critical = _getThreshold('red');
        var target = _getThreshold('yellow');
        var chartValues = data && data.data || [];

        var width = attrs.width || element.width() || element.parent().width();
        var height = attrs.height || cfg.defaultHeight;
        var w = width - cfg.margin * 2;
        var h = height - cfg.margin * 2;

        var el = d3.select(element[0]);

        el.select('svg').remove();

        var svg = el.append('svg').classed('index-trend-chart', true).attr({ width: width, height: height });

        var chartSpace = svg.append('g').classed('margin', true).attr('transform', 'translate(' + cfg.margin + ',' + cfg.margin + ')').attr({ width: w, height: h });

        if (!config.hideGridLines) {
          var xGridLine = chartSpace.append('g').classed('grid-lines', true).attr('transform', 'translate(0,0)');

          var step = w / cfg.gridLines;

          for (var i = 0; i < w;) {
            xGridLine.append('line').classed('grid-line', true).attr('x1', i).attr('y1', 0).attr('x2', i).attr('y2', h);

            i += step - 1;
          }
        }

        var _drawNoData = function _drawNoData() {
          chartSpace.append('text').classed('no-data', true).attr('transform', 'translate(' + w / 2 + ',' + h / 1.6 + ')').text('NO DATA');
        };

        if (!chartValues || !chartValues.length) {
          _drawNoData();

          return null;
        }

        var trendData = [];
        var j = 0;
        var progressData = false;
        var progressNotData = false;
        var nextEl = null;
        var itemCount = chartValues.length;

        for (var i = 0; itemCount > i; i++) {
          if (chartValues[i].index !== null) {
            progressData = true;

            if (progressNotData) {
              progressNotData = false;
              j++;
            }

            if (!trendData[j]) {
              trendData[j] = [];
            }

            trendData[j].push(chartValues[i]);

            nextEl = chartValues[i + 1];

            if (nextEl && nextEl.index === null) {
              var nextDate = new Date(nextEl.date);

              nextDate.setDate(nextDate.getDate() - 1);
              trendData[j].push({
                date: nextDate,
                index: chartValues[i].index
              });
            }
          } else {
            progressNotData = true;

            if (progressData) {
              progressData = false;
              j++;
            }

            if (!trendData[j] && trendData[j] !== 0) {
              trendData[j] = -1;
            }

            trendData[j] = trendData[j] + 1;
          }
        }

        var trendDataLength = trendData.length;

        if (!trendDataLength) {
          _drawNoData();

          return null;
        }

        var x = d3.time.scale().range([0, w]);
        var y = d3.scale.linear().range([h, 0]);

        var minIndex = d3.min(chartValues.map(function (d) {
          return parseFloat(d.index);
        }));
        var maxIndex = d3.max(chartValues.map(function (d) {
          return parseFloat(d.index);
        }));

        var minRange = critical;
        var maxRange = target > 0.9 ? target + 0.1 : cfg.defaultMaxRange;

        if (minIndex < minRange) {
          minRange = minIndex - cfg.chartRange < 0 ? 0 : minIndex - cfg.chartRange;
        }

        if (maxIndex > maxRange) {
          maxRange = maxIndex + 0.1;
        }

        x.domain(d3.extent(chartValues, function (d) {
          return d.date;
        }));
        y.domain([minRange, maxRange]);

        /**
         * Draws labels which indicates threshold values
         */
        var _drawThresholdLabel = function _drawThresholdLabel(chart, coord, value, type) {
          // label's rect
          var rect = { h: 14, w: 24 };
          var halfH = rect.h / 2;
          var label = chart.append('g');

          label.classed('kpi-threshold-label', true);

          label.append('rect').attr('x', coord.x + halfH).attr('y', coord.y - halfH).attr('width', rect.w).attr('height', rect.h).classed(type, true);

          label.append('circle').attr('cx', coord.x + halfH).attr('cy', coord.y).attr('r', halfH).classed(type, true);

          label.append('circle').attr('cx', coord.x + rect.w + halfH).attr('cy', coord.y).attr('r', halfH).classed(type, true);

          label.append('text').attr('x', coord.x + rect.w / 2 + halfH).attr('y', coord.y + Math.ceil(halfH / 2)).text(Math.round(100 * value) + '%');
        };

        var _addThresholdLine = function _addThresholdLine(chart, value, type) {
          var yCoord = y(value);
          var style = type === 'red' ? 'threshold-critical' : 'threshold-target';

          chartSpace.append('line').attr('class', style).attr('x1', 0).attr('y1', yCoord).attr('x2', w).attr('y2', yCoord);

          _drawThresholdLabel(chartSpace, { x: 0, y: yCoord }, value, type);
        };

        var trend = d3.svg.line().interpolate('basis').defined(function (d) {
          return d.index !== null;
        }).x(function (d) {
          return x(d.date);
        }).y(function (d) {
          return y(parseFloat(d.index));
        });

        var _drawTrendLine = function _drawTrendLine(data) {
          var delay = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
          var duration = arguments.length <= 2 || arguments[2] === undefined ? cfg.drawDuration : arguments[2];

          var trendLine = chartSpace.append('path').datum(data).attr('d', trend).classed('hideLine', true);

          if (enableAnimation) {
            trendLine.transition().delay(delay).duration(duration).ease('liner').attrTween('stroke-dasharray', function () {
              trendLine.classed('trend-line', true).classed('hideLine', false);

              var path = trendLine[0][0];
              var l = path.getTotalLength();
              var i = d3.interpolate('0,' + l, l + ',' + l);

              return function (t) {
                return i(t);
              };
            });
          } else {
            trendLine.classed('trend-line', true).classed('hideLine', false);
          }
        };

        var timePerItem = cfg.drawDuration / itemCount;
        var delay = cfg.drawDelay;
        var duration = 0;
        var incrementDelay = 0;

        _addThresholdLine(chartSpace, critical, 'red');
        _addThresholdLine(chartSpace, target, 'yellow');

        trendData.forEach(function (segment) {
          if (segment.length) {
            delay = delay + duration + incrementDelay;
            incrementDelay = 0;
            duration = segment.length * timePerItem;

            _drawTrendLine(segment, delay, duration);
          } else {
            incrementDelay = segment * timePerItem;
          }
        });

        var lastTrendSegment = trendData[trendData.length - 1];

        if (lastTrendSegment.length) {
          (function () {
            var lastPoint = lastTrendSegment[lastTrendSegment.length - 1];
            var lastIndex = lastPoint.index;

            var circle = chartSpace.append('circle').classed('circle', lastIndex > target).classed('circle-target', function () {
              return lastIndex > critical && lastIndex <= target;
            }).classed('circle-critical', function () {
              return lastIndex <= critical;
            }).attr('r', 0).attr('cx', x(lastPoint.date)).attr('cy', y(lastPoint.index));

            if (enableAnimation) {
              circle.transition().delay(cfg.drawDuration).duration(cfg.drawCircleDuration).ease('linear').attr('r', cfg.circleRadius);
            } else {
              circle.attr('r', cfg.circleRadius);
            }
          })();
        }
      };
    }
  }], [{
    key: 'directiveFactory',
    value: function directiveFactory($timeout) {
      return new IndexTrend($timeout);
    }
  }]);

  return IndexTrend;
})();

IndexTrend.directiveFactory.$inject = ['$timeout'];

angular.module(moduleName, []).directive('indexTrend', IndexTrend.directiveFactory);

exports['default'] = moduleName;
module.exports = exports['default'];

},{}],29:[function(require,module,exports){
(function (global){
"use strict";

/***************
 This directive add loading indicator

 Possible definition:
 <loading-indicator indicator-size="8px" max-width="88px" display-center='true|false'></loading-indicator>

 To add it to your module make the following

 import LoadingIndicator from 'components/loading-indicator';

 and add it to dependency

 angular.module(moduleName, [..., LoadingIndicator, ...])
 ***************/

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null);

var _angular2 = _interopRequireDefault(_angular);

require('./view/loading-indicator.html');

var moduleName = 'loading.indicator';

/*@ngInject*/

var LoadingIndicator = (function () {
  function LoadingIndicator() {
    var _this = this;

    _classCallCheck(this, LoadingIndicator);

    this.restrict = 'E';
    this.templateUrl = 'loading-indicator.html';

    this.scope = {
      indicatorSize: '@',
      maxWidth: '@',
      displayCenter: '@'
    };

    this.link = function ($scope, $element, attrs) {
      return _this._link($scope, $element, attrs);
    };
  }

  _createClass(LoadingIndicator, [{
    key: '_link',
    value: function _link($scope, $element, attrs) {
      this._setIndicatorSize($element, attrs.indicatorSize);

      if (attrs.maxWidth) {
        $element.find('.loading-indicator-wrapper').css('max-width', attrs.maxWidth);
      }

      if (attrs.displayCenter) {
        $element.css({
          position: 'absolute',
          top: '50%',
          width: '100%'
        });
      }
    }

    /**
     * Sets circle size
     * @param $element
     * @param {String} size - size in pixels
     * @private
     * @returns
     */
  }, {
    key: '_setIndicatorSize',
    value: function _setIndicatorSize($element) {
      var size = arguments.length <= 1 || arguments[1] === undefined ? '8px' : arguments[1];

      var indicators = $element.find('.loading-indicator').toArray();
      var style = {
        'height': size,
        'width': size,
        'border-radius': size
      };

      indicators.forEach(function (item) {
        return $(item).css(style);
      });
    }
  }], [{
    key: 'directiveFactory',
    value: function directiveFactory() {
      return new LoadingIndicator();
    }
  }]);

  return LoadingIndicator;
})();

_angular2['default'].module(moduleName, ['ui.bootstrap']).directive('loadingIndicator', LoadingIndicator.directiveFactory);

exports['default'] = moduleName;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./view/loading-indicator.html":30}],30:[function(require,module,exports){
(function (global){
(typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null).module('src/app/index.js').run(['$templateCache', function($templateCache){$templateCache.put('loading-indicator.html','<div class="loading-indicator-wrapper"> <div id="circle_1" class="loading-indicator"></div> <div id="circle_2" class="loading-indicator"></div> <div id="circle_3" class="loading-indicator"></div> <div id="circle_4" class="loading-indicator"></div> <div id="circle_5" class="loading-indicator"></div> </div>')}]);
module.exports = 'loading-indicator.html';
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],31:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var moduleName = 'logout.service';

var LogoutService = (function () {
  /*@ngInject*/

  LogoutService.$inject = ["$http", "$state"];
  function LogoutService($http, $state) {
    _classCallCheck(this, LogoutService);

    this.$http = $http;
    this.$state = $state;
  }

  _createClass(LogoutService, [{
    key: 'logout',
    value: function logout() {
      return this.$http.post('/logout').then(function () {
        var locationUrl = location.protocol + '//' + location.host + '/auth#/login';
        var encodedNext = encodeURIComponent(location.hash);

        location.href = encodedNext ? locationUrl + '?next=/' + encodedNext : locationUrl;
      });
    }
  }], [{
    key: 'serviceFactory',
    value: function serviceFactory($http, $state) {
      return new LogoutService($http, $state);
    }
  }]);

  return LogoutService;
})();

angular.module(moduleName, []).factory('LogoutService', LogoutService.serviceFactory);

exports['default'] = moduleName;
module.exports = exports['default'];

},{}],32:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var moduleName = 'MetricAnalysis';

var MetricAnalysis = (function () {
  function MetricAnalysis($timeout) {
    _classCallCheck(this, MetricAnalysis);

    MetricAnalysis.timeout = $timeout;

    this.restrict = 'EA';
    this.scope = {
      data: '=',
      scale: '=',
      metrics: '='
    };
  }

  _createClass(MetricAnalysis, [{
    key: 'link',
    value: function link(scope, element, attrs) {
      var svg = undefined,
          chart = undefined,
          x = undefined,
          y = undefined,
          xAxis = undefined,
          yAxisL = undefined,
          yAxisR = undefined,
          yGridLine = undefined,
          tip = undefined,
          xLabelsCache = undefined;
      var width = undefined,
          height = undefined,
          w = undefined,
          h = undefined;
      var visibleSrcMetrics = undefined,
          visibleDrMetrics = undefined,
          visibleKpiMetrics = undefined;
      var resizeTimer = undefined;

      var cfg = {
        defaultHeight: 400,
        shift: 20,
        drawDelay: 300,
        drawDuration: 400,
        defaultRange: [0, 100],
        axisLabelIndent: 50,
        axisLabelRotate: 90,
        metricType: {
          source: 'source',
          derived: 'calculated',
          kpi: 'KPI'
        },
        markerType: ['circle', 'square', 'triangle-up', 'triangle-down'],
        threshold: [60, 80],
        markerSize: 100,
        radius: 6,
        hintWidth: 220,
        hintMarkerOffset: 8,
        message: {
          noData: 'NO DATA',
          noDataSelected: 'NO DATA SELECTED'
        },
        margin: {
          top: 20,
          bottom: 40,
          left: 60,
          right: 60
        },
        padding: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        },
        windowWidth: { min: 1366, max: 1920 },
        labelsApproxCount: { min: 15, max: 25 },
        strLabelsApproxCount: { min: 10, max: 16 },
        strLabelLength: 10,
        stopResizing: false
      };

      var isNull = function isNull(value) {
        return value === null;
      };
      var isUndefined = function isUndefined(value) {
        return value === undefined;
      };
      var getRate = function getRate(max) {
        return max ? (100 - cfg.shift) / max : 1;
      };
      var getY = function getY(value) {
        return isNull(value) || isNaN(value) ? 0 : y(value);
      };
      var displayType = function displayType(value) {
        return isNull(value) ? 'none' : null;
      };
      var isPresent = function isPresent(unit) {
        return !isUndefined(scope.data.units[unit]);
      };
      var translateTo = function translateTo(x, y) {
        return 'translate(' + x + ',' + y + ')';
      };
      var getVisibleMetrics = function getVisibleMetrics(type) {
        return scope.metrics[type].filter(function (item) {
          return item.visible;
        });
      };
      var roundFloat = function roundFloat(value) {
        return Math.round(100 * value) / 100;
      };
      var formatDate = d3.time.format('%b %d');
      var formatFullDate = d3.time.format('%b %d, %Y');
      var xFormatFullDate = d3.time.format('%b %d\'%y');
      var xHintFormatFullDate = d3.time.format('%B %d, %Y');

      var formatFloat = function formatFloat(value) {
        return isNull(value) || isUndefined(value) ? '-' : roundFloat(value).toFixed(2);
      };

      /**
       * Gets label for X axis for selected item
       * @param {Object} item - data object
       * @returns {String|Number} - text label or timestamp
       */
      var getLabel = function getLabel(item) {
        var label = item.start_date && item.start_date.toString() || item.date;

        if (angular.isString(label)) {
          xLabelsCache[label] = item.period_name;
        }

        return label;
      };

      var getHintBorder = function getHintBorder() {
        var length = visibleSrcMetrics.length || 1;

        return length * x.rangeBand() / (length + 2);
      };

      var getMax = function getMax(unit) {
        var item = scope.data.units[unit];

        if (item) {
          return item.max;
        }

        return null;
      };

      var getConsolidatedMax = function getConsolidatedMax(unit) {
        var item = scope.data.units[unit];

        if (item) {
          return item.min < 0 ? item.max - item.min : item.max;
        }

        return null;
      };

      var getMin = function getMin(unit) {
        var item = scope.data.units[unit];

        if (item) {
          return item.min;
        }

        return null;
      };

      var isMetricAvailable = function isMetricAvailable(metric) {
        return metric.visible && isPresent(metric.unit) && scope.data.data_availability[metric.id] === 'available';
      };

      var createMarker = function createMarker(type) {
        var markerType = cfg.markerType.indexOf(type) > -1 ? type : 'circle';

        return d3.svg.symbol().type(markerType).size(cfg.markerSize);
      };

      var getUnit = function getUnit(id) {
        for (var key in cfg.metricType) {
          if (cfg.metricType.hasOwnProperty(key)) {
            var metrics = scope.metrics[cfg.metricType[key]];

            for (var j = 0, len = metrics.length; j < len; j++) {
              if (metrics[j].id === id) {
                return metrics[j].unit;
              }
            }
          }
        }

        return '';
      };

      var getRateById = function getRateById(id) {
        var unit = getUnit(id);

        return getRate(getConsolidatedMax(unit));
      };

      var formatValue = function formatValue(value, index, scale) {
        var val = roundFloat(value);

        if (value === 0) {
          return value;
        }

        return index % 2 === 0 ? (val / getRate(getConsolidatedMax(scale)) || val).toFixed(2) : '';
      };

      var isGroupAvailable = function isGroupAvailable(group) {
        var result = false;

        for (var i = 0, len = group.length; i < len; i++) {
          if (isMetricAvailable(group[i])) {
            result = true;
          }
        }

        return result;
      };

      var isAnyMetric = function isAnyMetric() {
        return isGroupAvailable(visibleSrcMetrics) || isGroupAvailable(visibleDrMetrics) || isGroupAvailable(visibleKpiMetrics);
      };

      var isDataAvailable = function isDataAvailable() {
        var da = scope.data.data_availability;

        for (var key in da) {
          if (da.hasOwnProperty(key)) {
            if (da[key] === 'available') {
              return true;
            }
          }
        }

        return false;
      };

      var isDataSelected = function isDataSelected() {
        var isKpiAvailable = false;

        if (scope.data.multiple_teams) {
          if (visibleKpiMetrics.length) {
            for (var i = 0, len = visibleKpiMetrics.length; i < len; i++) {
              if (isMetricAvailable(visibleKpiMetrics[i])) {
                isKpiAvailable = true;
              }
            }

            return isKpiAvailable;
          }
        } else if (isAnyMetric()) {
          return true;
        }

        return false;
      };

      var hideTip = function hideTip() {
        if (tip) {
          chart.selectAll('.period-line').remove();
          tip.hide();
        }
      };

      var getDomain = function getDomain() {
        var maxValue = 0;
        var minValue = 0;
        var units = scope.data.units;
        var limit = 100 - cfg.shift;

        for (var unit in units) {
          if (units.hasOwnProperty(unit)) {
            var max = getMax(unit);
            var min = getMin(unit);
            var rate = getRate(getConsolidatedMax(unit));

            max = rate * max;
            min = rate * min;

            if (maxValue < max) {
              maxValue = max;
            }

            if (minValue > min) {
              minValue = min;
            }
          }
        }

        minValue = minValue * (1 + cfg.shift / 100);
        maxValue = maxValue * (1 + cfg.shift / 100);

        minValue = minValue < -100 || minValue < -limit ? -100 : minValue;
        maxValue = maxValue > 100 || maxValue > limit ? 100 : maxValue;

        return [Math.round(minValue), Math.round(maxValue)];
      };

      var reRender = function reRender() {
        var enableAnimation = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

        if (scope.data && scope.data.values) {
          scope.render(scope.data.values, enableAnimation);
          scope.drawScale(scope.scale);
        }
      };

      function drawNoData(position) {
        var msg = arguments.length <= 1 || arguments[1] === undefined ? cfg.message.noData : arguments[1];

        /*jshint validthis:true */
        this.append('text').classed('no-data', true).text(msg).attr('x', position.x).attr('y', position.y);
      }

      scope.$watch(function (scope) {
        return scope.metrics;
      }, function (data) {
        return MetricAnalysis.timeout(function () {
          if (data) {
            reRender();
          }
        }, 0);
      });

      scope.$watch(function (scope) {
        return scope.scale;
      }, function (scale) {
        return MetricAnalysis.timeout(function () {
          if (scale) {
            scope.drawScale(scale);
          }
        }, 0);
      });

      d3.select(window).on('resize.mac', function () {
        clearTimeout(resizeTimer);

        resizeTimer = setTimeout(function () {
          if (window.innerWidth > cfg.windowWidth.min) {
            reRender(false);

            cfg.stopResizing = false;
          } else if (!cfg.stopResizing) {
            reRender(false);

            cfg.stopResizing = true;
          }
        }, 50);
      });

      scope.$on('$destroy', function () {
        return d3.select(window).on('resize.mac', null);
      });

      scope.drawScale = function (scale) {
        var isData = isDataAvailable();

        var drawThresholds = function drawThresholds() {
          var _this = this;

          var periods = scope.data.values;
          var yellowLabels = [];
          var redLabels = [];

          var removeThresholds = function removeThresholds() {
            _this.selectAll('.kpi-threshold').remove();
            _this.selectAll('.kpi-threshold-label').remove();
          };

          /**
           * Draws labels which indicates threshold values
           */
          var drawThresholdLabels = function drawThresholdLabels() {
            // label's rect
            var rect = { h: 14, w: 24 };
            var halfH = rect.h / 2;
            /**
             * Goes through the passed labels and draws them
             * @param {Array} labels
             */
            var drawLabels = function drawLabels(labels) {
              for (var i = 0, len = labels.length; i < len; i++) {
                var _cfg = labels[i];
                var xVal = (_cfg.currentIndex + 1) * x.rangeBand();
                var yVal = y(_cfg.rate * _cfg.value);

                var label = _this.append('g');

                label.classed('kpi-threshold-label', true);

                label.append('rect').attr('x', xVal + halfH).attr('y', yVal - halfH).attr('width', rect.w).attr('height', rect.h).classed(_cfg.type, true);

                label.append('circle').attr('cx', xVal + halfH).attr('cy', yVal).attr('r', halfH).classed(_cfg.type, true);

                label.append('circle').attr('cx', xVal + rect.w + halfH).attr('cy', yVal).attr('r', halfH).classed(_cfg.type, true);

                label.append('text').attr('x', xVal + rect.w / 2 + halfH).attr('y', yVal + Math.ceil(halfH / 2)).text(_cfg.value.toFixed(2));
              }
            };

            drawLabels.call(chart, yellowLabels);
            drawLabels.call(chart, redLabels);
          };

          var drawThreshold = function drawThreshold(cfg) {
            if (!cfg) {
              return null;
            }

            _this.append('line').classed('kpi-threshold', true).attr('x1', function () {
              return cfg.currentIndex * x.rangeBand();
            }).attr('y1', function () {
              return y(cfg.rate * cfg.value);
            }).attr('x2', function () {
              return (cfg.currentIndex + 1) * x.rangeBand();
            }).attr('y2', function () {
              return y(cfg.rate * cfg.value);
            }).classed('' + cfg.type, true);
          };

          if (!periods.length) {
            return null;
          }

          if (visibleKpiMetrics.length === 1) {
            var id = visibleKpiMetrics[0].id;

            if (getUnit(id) !== scale) {
              removeThresholds.call(chart);

              return null;
            }

            for (var i = 0, len = periods.length; i < len; i++) {
              if (!periods[i].kpi_thresholds) {
                continue;
              }

              var threshold = periods[i].kpi_thresholds[id];

              if (!threshold) {
                continue;
              }

              var yellow = threshold.yellow;
              var red = threshold.red;
              var rate = getRate(getConsolidatedMax(scale));

              var yellowCfg = {
                currentIndex: i,
                rate: rate,
                type: 'yellow',
                value: yellow
              };

              var redCfg = {
                currentIndex: i,
                rate: rate,
                type: 'red',
                value: red
              };

              if (i === 0) {
                yellowLabels.push(yellowCfg);
                redLabels.push(redCfg);
              } else {
                if (yellowLabels[yellowLabels.length - 1].value !== yellowCfg.value) {
                  yellowLabels.push(yellowCfg);
                } else {
                  yellowLabels[yellowLabels.length - 1] = yellowCfg;
                }

                if (redLabels[redLabels.length - 1].value !== redCfg.value) {
                  redLabels.push(redCfg);
                } else {
                  redLabels[redLabels.length - 1] = redCfg;
                }
              }

              drawThreshold.call(chart, yellowCfg);
              drawThreshold.call(chart, redCfg);
            }
          } else {
            removeThresholds.call(chart);
          }

          drawThresholdLabels();
        };

        yAxisL = d3.svg.axis().scale(y).tickFormat(function (d, i) {
          return isData ? formatValue(d, i, scale) : '';
        }).orient('left');

        yAxisR = d3.svg.axis().scale(y).tickFormat(function (d, i) {
          return isData ? formatValue(d, i, scale) : '';
        }).orient('right');

        chart.selectAll('.y').remove();

        chart.append('g').classed('y axis', true).attr('transform', translateTo(0, 0)).call(yAxisL).selectAll('text');

        chart.append('g').classed('y axis', true).attr('transform', translateTo(w, 0)).call(yAxisR).selectAll('text').style('text-anchor', 'start');

        chart.selectAll('.y-axis-label').remove();

        chart.select('.y.axis').append('text').classed('y-axis-label', true).attr('x', 0).attr('y', 0).style('text-anchor', 'middle').attr('transform', translateTo(-cfg.axisLabelIndent, h / 2) + ' rotate(-' + cfg.axisLabelRotate + ')').text(scale);

        if (isData) {
          drawThresholds.call(chart);
        }

        chart.append('line').classed('zero-line', true).attr('x1', 0).attr('y1', y(0)).attr('x2', w).attr('y2', y(0));
      };

      scope.render = function (data) {
        var enableAnimation = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

        if (!data) {
          return null;
        }

        var lStep = undefined,
            strLStep = undefined;
        // for storing month number
        var xMonths = [];

        var getXPosition = function getXPosition(period) {
          return x(period) + x.rangeBand() / 2;
        };
        var isHintOutOfChart = function isHintOutOfChart(x) {
          return width - cfg.margin.right - x < cfg.hintWidth;
        };

        var getLabelsCount = function getLabelsCount(range) {
          var width = window.innerWidth > cfg.windowWidth.min ? window.innerWidth : cfg.windowWidth.min;
          var mediana = (cfg.windowWidth.max + cfg.windowWidth.min) / 2;
          var minCount = Math.round(width * range.min / cfg.windowWidth.min);
          var maxCount = Math.round(width * range.max / cfg.windowWidth.max);

          if (width <= mediana) {
            return minCount;
          }

          if (width > cfg.windowWidth.max) {
            return maxCount;
          }

          return Math.round((minCount + maxCount) / 2);
        };

        var getStep = function getStep(count) {
          return Math.round(data.length / getLabelsCount(count)) || 1;
        };

        var drawMarkers = function drawMarkers(config) {
          if (!config) {
            return null;
          }

          var markers = this.selectAll('.' + config.metricType + '-metric-marker .metric-' + config.metric.id).data(data).enter().append('path').classed(config.metricType + '-metric-marker metric-' + config.metric.id, true).style('stroke', '#' + config.metric.color).style('display', function (d) {
            return displayType(d.values[config.metric.id]);
          });

          if (enableAnimation) {
            markers.attr('transform', function (d) {
              return translateTo(getXPosition(getLabel(d)), y(0));
            }).attr('d', createMarker(config.metric.marker)).transition().delay(cfg.drawDelay).duration(2 * cfg.drawDuration).attr('transform', function (d) {
              return translateTo(getXPosition(getLabel(d)), getY(config.rate * d.values[config.metric.id]));
            });
          } else {
            markers.attr('transform', function (d) {
              return translateTo(getXPosition(getLabel(d)), getY(config.rate * d.values[config.metric.id]));
            }).attr('d', createMarker(config.metric.marker));
          }
        };

        var drawLine = function drawLine(config) {
          if (!config) {
            return null;
          }

          var definePath = function definePath(path, d) {
            var segments = path.split('L');

            for (var i = 0, len = d.length; i < len; i++) {
              var value = d[i].values[config.metric.id];

              if (isNull(value) || d[i].new_phase) {
                if (segments[i].indexOf('M') === -1) {
                  segments[i] = 'M' + segments[i];
                }
              } else {
                if (i !== 0) {
                  if (isNull(d[i - 1].values[config.metric.id])) {
                    segments[i] = 'M' + segments[i];
                  } else {
                    segments[i] = 'L' + segments[i];
                  }
                }
              }
            }

            return segments.join(' ');
          };

          var line1 = d3.svg.line().x(function (d) {
            return getXPosition(getLabel(d));
          }).y(y(0));

          var line2 = d3.svg.line().x(function (d) {
            return getXPosition(getLabel(d));
          }).y(function (d) {
            return y(config.rate * d.values[config.metric.id]);
          });

          var lines = this.selectAll('.' + config.metricType + '-metric-line .metric-' + config.metric.id).data([data]).enter().append('path').classed(config.metricType + '-metric-line metric-' + config.metric.id, true).style('stroke', '#' + config.metric.color);

          if (enableAnimation) {
            lines.attr('d', function (d) {
              return definePath(line1(d), d);
            }).transition().delay(cfg.drawDelay).duration(2 * cfg.drawDuration).attr('d', function (d) {
              return definePath(line2(d), d);
            });
          } else {
            lines.attr('d', function (d) {
              return definePath(line2(d), d);
            });
          }
        };

        var drawBars = function drawBars(config) {
          if (!config) {
            return null;
          }

          var calculateY = function calculateY(d) {
            var yPos = getY(config.rate * d.values[config.metric.id]);
            var height = y(0) - yPos;

            return height < 0 ? y(0) : yPos;
          };

          var calculateX = function calculateX(d) {
            return x(getLabel(d)) + x.rangeBand() * (config.index + 1) / config.steps;
          };
          var calculateHeight = function calculateHeight(d) {
            return Math.abs(y(0) - getY(config.rate * d.values[config.metric.id]));
          };

          var bars = this.selectAll('.' + config.metricType + '-metric-bar .metric-' + config.metric.id).data(data).enter().append('rect').classed(config.metricType + '-metric-bar metric-' + config.metric.id, true).style('fill', '#' + config.metric.color);

          if (enableAnimation) {
            bars.attr('x', calculateX).attr('y', y(0)).attr('width', function () {
              return x.rangeBand() / config.steps;
            }).attr('height', 0).transition().delay(cfg.drawDelay).duration(cfg.drawDuration).attr('y', calculateY).attr('height', calculateHeight);
          } else {
            bars.attr('x', calculateX).attr('y', calculateY).attr('width', function () {
              return x.rangeBand() / config.steps;
            }).attr('height', calculateHeight);
          }
        };

        var drawGridLines = function drawGridLines() {
          yGridLine = d3.svg.axis().scale(y).tickSize(-w, 0, 0).tickFormat('').orient('left');

          this.append('g').call(yGridLine).classed('grid-line', true).attr('transform', translateTo(0, 0));
        };

        /**
         * Draws X axis with labels
         */
        var drawXAxis = function drawXAxis() {
          this.append('g').classed('x axis', true).attr('transform', translateTo(0, h)).call(xAxis).selectAll('text').attr('dy', '1.5em').append('svg:title').text(function (d) {
            return Object.keys(xLabelsCache).length ? xLabelsCache[d] : xHintFormatFullDate(new Date(d));
          });
        };

        var drawNewPhases = function drawNewPhases() {
          var _this2 = this;

          var _loop = function (i, len) {
            if (!data[i].hasOwnProperty('new_phase')) {
              return {
                v: null
              };
            }

            if (data[i].new_phase) {
              _this2.append('line').classed('new-phase-line', true).attr('x1', function () {
                return getXPosition(getLabel(data[i]));
              }).attr('y1', 0).attr('x2', function () {
                return getXPosition(getLabel(data[i]));
              }).attr('y2', h);
            }
          };

          for (var i = 0, len = data.length; i < len; i++) {
            var _ret = _loop(i, len);

            if (typeof _ret === 'object') return _ret.v;
          }
        };

        xLabelsCache = {};
        width = attrs.width || scope._getParentWidth(element);
        height = attrs.height || cfg.defaultHeight;
        w = width - cfg.margin.left - cfg.margin.right - cfg.padding.left - cfg.padding.right;
        h = height - cfg.margin.top - cfg.margin.bottom - cfg.padding.top - cfg.padding.bottom;

        visibleSrcMetrics = getVisibleMetrics(cfg.metricType.source);
        visibleDrMetrics = getVisibleMetrics(cfg.metricType.derived);
        visibleKpiMetrics = getVisibleMetrics(cfg.metricType.kpi);

        var el = d3.select(element[0]);

        el.select('svg').remove();

        svg = el.append('svg').classed('metric-analysis-chart', true).attr({ width: width, height: height });

        chart = svg.append('g').classed('margin', true).attr('transform', translateTo(cfg.margin.left, cfg.margin.top)).append('g').classed('padding', true).attr('transform', translateTo(cfg.padding.left, cfg.padding.top));

        x = d3.scale.ordinal().domain(data.map(function (item) {
          return getLabel(item);
        })).rangeBands([0, w]);

        y = d3.scale.linear().domain(getDomain()).range([h, 0]);

        lStep = getStep(cfg.labelsApproxCount);
        strLStep = getStep(cfg.strLabelsApproxCount);

        xAxis = d3.svg.axis().scale(x).tickSize(0).tickFormat(function (d, i) {
          if (angular.isString(d)) {
            var label = xLabelsCache[d] || 'None';

            if ((i + 1) % strLStep === 0) {
              return label.length > cfg.strLabelLength ? label.substr(0, cfg.strLabelLength - 1) + '...' : label;
            }

            return ' ';
          } else {
            var prevMonth = undefined;
            var date = new Date(d);
            var currMonth = date.getMonth();

            prevMonth = xMonths.length > 0 ? xMonths[xMonths.length - 1] : -1;

            if ((i + 1) % lStep === 0) {
              xMonths.push(currMonth);

              return currMonth === 0 && currMonth !== prevMonth ? xFormatFullDate(date) : formatDate(date);
            }
          }

          return ' ';
        }).orient('bottom');

        d3.select('.period-hint').remove();

        tip = d3.tip().attr('class', 'period-hint').direction(function (d) {
          return isHintOutOfChart(getXPosition(getLabel(d))) ? 'w' : 'e';
        }).offset(function (d) {
          var xPos = getXPosition(getLabel(d));
          var offset = getHintBorder() / 2;

          if (isHintOutOfChart(xPos)) {
            return [0, offset - cfg.hintMarkerOffset];
          }

          return [0, cfg.hintMarkerOffset - offset];
        }).html(function (d) {
          var createGroup = function createGroup(metrics, type) {
            var group = '<div class="metrics-group barchart-controls">';

            for (var i = 0, len = metrics.length; i < len; i++) {
              if (!isMetricAvailable(metrics[i])) {
                continue;
              }

              var id = metrics[i].id;
              //TODO Maksym Shtyria: jsHint raises two warnings regarding "name" variable
              /* jshint ignore:start */
              var iconClass = metrics[i].marker ? 'barchart-indicator marker marker-' + type + ' marker-' + metrics[i].marker + '-' + type + '"' : 'barchart-indicator color opacity50';

              var icon = '<span class="' + iconClass + '" style="background-color: #' + metrics[i].color + '"></span>';
              var _name = '<span class="metrics-name" title="' + metrics[i].name + '">' + metrics[i].name + '</span>';
              var url = metrics[i].doc_url;

              if (url) {
                _name = '<a href="' + url + '" target="_blank">' + _name + '</a>';
              }
              /* jshint ignore:end */

              group += '<div class="metrics-item">' + icon + _name + '<span class="metrics-value">' + formatFloat(d.values[id]) + '</span>' + '</div>';
            }

            group += '</div>';

            return group;
          };

          var name = d.period_name ? d.period_name : formatFullDate(new Date(d.date));
          var date = d.period_name ? formatDate(new Date(d.start_date)) + ' - ' + formatDate(new Date(d.end_date)) : '';
          var hintHeader = '<div class="name">' + name + '</div>' + '<div class="date">' + date + '</div>';
          hintHeader += d.new_phase ? '<div class="phase-msg">New Phase</div>' : '';

          var hintBody = createGroup(visibleSrcMetrics);

          hintBody += createGroup(visibleDrMetrics, 'striped');
          hintBody += createGroup(visibleKpiMetrics, 'solid');

          return '<div class="hint-content">' + '<div class="hint-header">' + hintHeader + '</div>' + '<div class="hint-body">' + hintBody + '</div>' + '</div>';
        });

        chart.call(tip);

        drawGridLines.call(chart);
        drawXAxis.call(chart);

        if (!isDataAvailable()) {
          drawNoData.call(chart, { x: w / 2, y: h / 2 });

          return null;
        }

        if (!isDataSelected()) {
          drawNoData.call(chart, { x: w / 2, y: h / 2 }, cfg.message.noDataSelected);

          return null;
        }

        for (var j = 0, len = visibleSrcMetrics.length; j < len; j++) {
          var metric = visibleSrcMetrics[j];

          if (!isMetricAvailable(metric)) {
            continue;
          }

          drawBars.call(chart, {
            metric: metric,
            metricType: 'source',
            rate: getRateById(metric.id),
            steps: len + 2,
            index: j
          });
        }

        for (var j = 0, len = visibleDrMetrics.length; j < len; j++) {
          var metric = visibleDrMetrics[j];

          if (!isMetricAvailable(metric)) {
            continue;
          }

          var config = {
            metric: metric,
            metricType: 'derived',
            rate: getRateById(metric.id)
          };

          drawLine.call(chart, config);
          drawMarkers.call(chart, config);
        }

        for (var j = 0, len = visibleKpiMetrics.length; j < len; j++) {
          var metric = visibleKpiMetrics[j];

          if (!isMetricAvailable(metric)) {
            continue;
          }

          var config = {
            metric: metric,
            metricType: 'kpi',
            rate: getRateById(metric.id)
          };

          drawLine.call(chart, config);
          drawMarkers.call(chart, config);
        }

        drawNewPhases.call(chart);

        chart.selectAll('.period-bar').data(data).enter().append('rect').classed('period-bar', true).attr('x', function (d) {
          var length = visibleSrcMetrics.length || 1;

          return x(getLabel(d)) + x.rangeBand() / (length + 2);
        }).attr('y', 0).attr('width', function () {
          return getHintBorder();
        }).attr('height', h).on('mouseover', function (d) {
          hideTip();

          chart.insert('svg:line', '.period-bar').classed('period-line', true).attr('x1', function () {
            return getXPosition(getLabel(d));
          }).attr('y1', 0).attr('x2', function () {
            return getXPosition(getLabel(d));
          }).attr('y2', h);

          tip.show(d);
        }).on('mouseout', function () {
          if (event.relatedTarget instanceof SVGSVGElement) {
            hideTip();
          }
        }).on('wheel', function () {
          return hideTip();
        });

        d3.select('body').on('keydown', function () {
          return hideTip();
        }).on('click', function () {
          return hideTip();
        }).on('wheel', function () {
          return hideTip();
        });

        d3.select('.period-hint').on('mouseout', function () {
          if (event.relatedTarget instanceof SVGSVGElement) {
            hideTip();
          }
        });

        d3.select('.tab-content').on('scroll', function () {
          return hideTip();
        });
      };

      scope._getParentWidth = function (element) {
        if (!element.length) {
          return 0;
        }
        return element.parent().width();
      };
    }
  }], [{
    key: 'directiveFactory',
    value: function directiveFactory($timeout) {
      return new MetricAnalysis($timeout);
    }
  }]);

  return MetricAnalysis;
})();

MetricAnalysis.directiveFactory.$inject = ['$timeout'];

angular.module(moduleName, []).directive('metricAnalysis', MetricAnalysis.directiveFactory);

exports['default'] = moduleName;
module.exports = exports['default'];

},{}],33:[function(require,module,exports){
(function (global){
'use strict';
Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null);

var _angular2 = _interopRequireDefault(_angular);

/*@ngInject*/
var moduleName = 'metric-registry.service';

var MetricRegistry = (function () {
  function MetricRegistry($http) {
    _classCallCheck(this, MetricRegistry);

    this.$http = $http;
  }

  /**
   * Returns a the list of metric types which are suitable for use in the Responsibilities section.
   *
   * [
   *   {
   *     "id": 123,
   *     "metric_name": "Turnover",
   *     "metric_area": "Team" // this is category
   *   },
   *   ...
   * ]
   *
   * @param {String} type Type of registered metrics. Allowed values – responsibility|experience|expectation
   * @returns {Promise}
   */

  _createClass(MetricRegistry, [{
    key: 'getRegisteredMetrics',
    value: function getRegisteredMetrics(type) {
      return this.$http.get('/api/metric-registry?category=' + type, { cache: true });
    }
  }]);

  return MetricRegistry;
})();

_angular2['default'].module(moduleName, []).service('MetricRegistryService', MetricRegistry);

exports['default'] = moduleName;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],34:[function(require,module,exports){
(function (global){
"use strict";

/***************
 We needs in this directive to set the minimum height for our views

 Possible definition:
 <div min-height></div>

 To add it to your module make the following

 import MinHeight from 'components/min-height';

 and add it to dependency

 angular.module(moduleName, [..., MinHeight, ...])
 ***************/

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null);

var _angular2 = _interopRequireDefault(_angular);

var moduleName = 'minHeight';

var MinHeight = (function () {
  function MinHeight() {
    _classCallCheck(this, MinHeight);

    this.restrict = 'A';
  }

  _createClass(MinHeight, [{
    key: 'link',
    value: function link($scope, $element) {
      var $window = $(window);

      /**
       * Sets min-height to element
       */
      var setMinHeight = function setMinHeight() {
        $element.css({
          "min-height": $window.height() - 120
        });
      };

      $window.on('resize', setMinHeight);

      setMinHeight();
    }
  }], [{
    key: 'directiveFactory',
    value: function directiveFactory() {
      return new MinHeight();
    }
  }]);

  return MinHeight;
})();

_angular2['default'].module(moduleName, []).directive('minHeight', MinHeight.directiveFactory);

exports['default'] = moduleName;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],35:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var PeriodSelectionCtrl = (function () {
  /*@ngInject*/

  PeriodSelectionCtrl.$inject = ["$scope", "AppContext"];
  function PeriodSelectionCtrl($scope, AppContext) {
    var _this = this;

    _classCallCheck(this, PeriodSelectionCtrl);

    this.AppContext = AppContext;
    this.currentDate = new Date();

    this.periods = {
      '3m': 3,
      '6m': 6,
      '1y': 12
    };

    this.calendarIsActive = false;
    this.isStartPickerShown = false;
    this.isEndPickerShown = false;
    this.isInitialized = false;

    this.periodMenu = [{
      label: '3m',
      isHandled: true
    }, {
      label: '6m',
      isHandled: true
    }, {
      label: '1y',
      isHandled: true
    }, {
      label: 'Custom',
      isHandled: false
    }];

    var unWatchInitialize = $scope.$watch(function () {
      return _this.period;
    }, function (data) {
      if (data && data.preset) {
        _this.initializePeriod(data.preset);
        unWatchInitialize();
      }
    });

    var unwatchStartDP = $scope.$watch(function () {
      return _this.period.startDate.getTime();
    }, function () {
      return _this.isStartPickerShown = false;
    });

    var unwatchEndDP = $scope.$watch(function () {
      return _this.period.endDate.getTime();
    }, function () {
      return _this.isEndPickerShown = false;
    });

    $scope.$on('$destroy', function () {
      unWatchInitialize();
      unwatchStartDP();
      unwatchEndDP();
    });
  }

  _createClass(PeriodSelectionCtrl, [{
    key: 'initializePeriod',
    value: function initializePeriod(period) {
      var startDate = undefined;
      var endDate = undefined;

      if (Array.isArray(period)) {
        this.currentPeriod = period;
        startDate = new Date(parseFloat(period[0]));
        endDate = new Date(parseFloat(period[1]));
      } else {
        this.currentPeriod = period;
        endDate = new Date();
        startDate = this.setStartDate(this.periods[period]);
      }

      this.setPeriod(startDate, endDate, period);

      this.isInitialized = true;
    }
  }, {
    key: 'setStartDate',
    value: function setStartDate() {
      var month = arguments.length <= 0 || arguments[0] === undefined ? 3 : arguments[0];

      var currentDate = new Date(this.currentDate.valueOf());

      currentDate.setMonth(currentDate.getMonth() - month);

      return currentDate;
    }
  }, {
    key: 'selectPeriod',
    value: function selectPeriod(preset) {
      if (!preset && !this.isInitialized) {
        return null;
      }

      this.setPeriod(this.setStartDate(this.periods[preset]), new Date(this.currentDate.valueOf()), preset);

      this.currentPeriod = preset;
    }
  }, {
    key: 'setPeriod',
    value: function setPeriod(startDate, endDate, preset) {
      this.calendarIsActive = false;
      this.period.startDate = startDate;
      this.period.endDate = endDate;
      this.period.preset = preset;
    }
  }, {
    key: 'isSelectedPeriod',
    value: function isSelectedPeriod(checkPeriod) {
      if (checkPeriod === 'Custom' && Array.isArray(this.currentPeriod)) {
        return true;
      }

      return this.currentPeriod === checkPeriod;
    }
  }, {
    key: 'showStartDatePicker',
    value: function showStartDatePicker() {
      this.isStartPickerShown = true;
      this.isEndPickerShown = false;
    }
  }, {
    key: 'showEndDatePicker',
    value: function showEndDatePicker() {
      this.isStartPickerShown = false;
      this.isEndPickerShown = true;
    }
  }, {
    key: 'setCustomPeriod',
    value: function setCustomPeriod() {
      this.currentPeriod = [this.period.startDate.getTime(), this.period.endDate.getTime()];
      this.setPeriod(this.period.startDate, this.period.endDate, this.currentPeriod);
    }
  }, {
    key: 'hidePickers',
    value: function hidePickers() {
      this.isStartPickerShown = false;
      this.isEndPickerShown = false;
    }
  }, {
    key: 'checkMaxStarDate',
    value: function checkMaxStarDate() {
      if (this.isInitialized) {
        var max = new Date(this.period.endDate);

        return max.setDate(max.getDate() - 3);
      }
    }
  }, {
    key: 'checkMinEndDate',
    value: function checkMinEndDate() {
      if (this.isInitialized) {
        var min = new Date(this.period.startDate);

        return min.setDate(min.getDate() + 3);
      }
    }
  }]);

  return PeriodSelectionCtrl;
})();

exports['default'] = PeriodSelectionCtrl;
module.exports = exports['default'];

},{}],36:[function(require,module,exports){
(function (global){
/**
 * <ad-perid-selection period="" is-hidden="" calendar-is-active=""></ad-perid-selection>
 */
"use strict";

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null);

var _angular2 = _interopRequireDefault(_angular);

require('../view/period-selection.html');

var _controllerPeriodSelectionControllerJs = require('../controller/period-selection.controller.js');

var _controllerPeriodSelectionControllerJs2 = _interopRequireDefault(_controllerPeriodSelectionControllerJs);

/*@ngInject*/

var PeriodSelection = (function () {
  PeriodSelection.$inject = ["$document"];
  function PeriodSelection($document) {
    var _this = this;

    _classCallCheck(this, PeriodSelection);

    this.$document = $document;
    this.restrict = 'EA';
    this.templateUrl = 'period-selection.html';
    this.controller = _controllerPeriodSelectionControllerJs2['default'];
    this.controllerAs = 'periodSelection';
    this.bindToController = true;
    this.scope = {
      period: '=',
      isHidden: '=',
      isActive: '='
    };

    this.link = function (scope, element, attrs, controller) {
      return _this._link(scope, element, attrs, controller);
    };
  }

  _createClass(PeriodSelection, [{
    key: '_link',
    value: function _link(scope, element, attrs, controller) {
      scope.$watch(function () {
        return controller.calendarIsActive;
      }, function (value) {
        controller.isActive = !controller.isActive;

        controller.AppContext.setPeriodActive(value);

        if (!value) {
          controller.hidePickers();
        }
      });

      var targetNode = 'ad-period-selection';
      var isDatepickerClick = false;

      this.$document.on('click', function (event) {
        var target = $(event.target);

        if (!target.parents(targetNode).length && !isDatepickerClick) {
          scope.$apply(function () {
            return controller.calendarIsActive = false;
          });
        }

        isDatepickerClick = false;
      });

      /**
       * It's a little bicycle, but it works.
       *
       * 'Period selection' element closes each time when user wants to change
       * month or year that's why we needs this hack.
       */
      scope.datepickerClick = function () {
        isDatepickerClick = true;
      };
    }
  }], [{
    key: 'directiveFactory',
    value: function directiveFactory($document) {
      return new PeriodSelection($document);
    }
  }]);

  return PeriodSelection;
})();

exports['default'] = PeriodSelection;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../controller/period-selection.controller.js":35,"../view/period-selection.html":38}],37:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null);

var _angular2 = _interopRequireDefault(_angular);

var _directivePeriodSelection = require('./directive/period-selection');

var _directivePeriodSelection2 = _interopRequireDefault(_directivePeriodSelection);

var moduleName = 'ad.PeriodSelection';

_angular2['default'].module(moduleName, []).directive('adPeriodSelection', _directivePeriodSelection2['default'].directiveFactory);

exports['default'] = moduleName;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./directive/period-selection":36}],38:[function(require,module,exports){
(function (global){
(typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null).module('src/app/index.js').run(['$templateCache', function($templateCache){$templateCache.put('period-selection.html','<div class="panel-wrapper has-datepicker" ng-class="{ hidden: periodSelection.isHidden }"> <div class="panel-name"> <div class="f-left">Period</div> </div> <div class="panel panel-default"> <div class="panel-heading"> <ul class="panel-heading-controls"> <li ng-repeat="item in periodSelection.periodMenu" ng-class="{ active: periodSelection.isSelectedPeriod(item.label) }"> <a ng-click="periodSelection.selectPeriod(item.label)" ng-show="item.isHandled">{{ item.label }}</a> <a ng-hide="item.isHandled">{{ item.label }}</a> </li> </ul> </div> <div class="panel-body"> <form class="daterange"> <input type="text" value="{{ periodSelection.period.startDate | date:\'MM/dd/yyyy\' }}" ng-focus="periodSelection.calendarIsActive = true;" ng-click="periodSelection.showStartDatePicker()" ng-readonly="true" ng-class="{ focusDate: periodSelection.isStartPickerShown }"> <span class="separator">to</span> <input type="text" value="{{ periodSelection.period.endDate | date:\'MM/dd/yyyy\'}}" ng-focus="periodSelection.calendarIsActive = true;" ng-click="periodSelection.showEndDatePicker()" ng-readonly="true" ng-class="{ focusDate: periodSelection.isEndPickerShown }"> </form> <div class="datepicker-wrapper"> <uib-datepicker ng-click="datepickerClick()" ng-model="periodSelection.period.startDate" max-date="periodSelection.checkMaxStarDate()" format-day="d" show-weeks="false" close-on-date-selection="true" class="row well well-sm ad-datepicker" ng-show="periodSelection.isStartPickerShown" ng-change="periodSelection.setCustomPeriod()"> </uib-datepicker> <uib-datepicker ng-click="datepickerClick()" ng-model="periodSelection.period.endDate" min-date="periodSelection.checkMinEndDate()" max-date="periodSelection.currentDate" format-day="d" show-weeks="false" close-on-date-selection="true" class="row well well-sm ad-datepicker" ng-show="periodSelection.isEndPickerShown" ng-change="periodSelection.setCustomPeriod()"> </uib-datepicker> </div> </div> </div> </div>')}]);
module.exports = 'period-selection.html';
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],39:[function(require,module,exports){
(function (global){
"use strict";

/***************

 This service makes call to API /api/entities/:id/periods

 Response data format:
 [{
      "status": "new",
      "committed_date": 1447113600000,
      "name": "test comm",
      "id": 1335,
      "committer": "Alex Shevelo"
    }, {
      "status": "committed",
      "committed_date": 1446054603000,
      "name": "testq1",
      "id": 1334,
      "committer": "Yuriy Ovramets"
    }]

 ***************/

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null);

var _angular2 = _interopRequireDefault(_angular);

var moduleName = 'period.service';

/*@ngInject*/

var PeriodService = (function () {
  PeriodService.$inject = ["$http"];
  function PeriodService($http) {
    _classCallCheck(this, PeriodService);

    this.$http = $http;
  }

  /**
   * Makes call to API period and returns promise
   * @param {Number} id - entity id
   * @returns {Object} periods promise
   */

  _createClass(PeriodService, [{
    key: 'getPeriods',
    value: function getPeriods(id) {
      return this.$http.get('/api/entities/' + id + '/periods');
    }
  }]);

  return PeriodService;
})();

_angular2['default'].module(moduleName, []).service('PeriodService', PeriodService);

exports['default'] = moduleName;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],40:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var monthInQuarter = 3;
var lastQuarter = 4;
var customPeriodName = 'Custom';

/*@ngInject*/

var QuarterSelectionCtrl = (function () {
  QuarterSelectionCtrl.$inject = ["$scope", "AppContext"];
  function QuarterSelectionCtrl($scope, AppContext) {
    var _this = this;

    _classCallCheck(this, QuarterSelectionCtrl);

    this.$scope = $scope;
    this.AppContext = AppContext;

    this.presets = {
      '1q': { step: -1 },
      '2q': { step: -2 },
      '1y': { step: -4 }
    };

    this.quartersEndData = {
      1: 31,
      2: 30,
      3: 30,
      4: 31
    };

    this.currentDate = new Date();
    this.currentQuarter = this._getQuarter(this.currentDate);

    $scope.maxQuarter = this._getQuarterStrByDate(this.currentDate);
    $scope.periodMenu = [{
      label: '1q',
      isHandled: true
    }, {
      label: '2q',
      isHandled: true
    }, {
      label: '1y',
      isHandled: true
    }, {
      label: customPeriodName,
      isHandled: false
    }];

    $scope.startPickerShow = false;
    $scope.endPickerShow = false;

    $scope.isSelectedPeriod = function (preset) {
      return _this._isSelectedPeriod(preset);
    };
    $scope.setPeriodByPreset = function (period) {
      return _this._setPeriodByPreset(period);
    };
    $scope.setStartQuarter = function (quarter, year) {
      return _this._setQuarter('start', quarter, year);
    };
    $scope.setEndQuarter = function (quarter, year) {
      return _this._setQuarter('end', quarter, year);
    };

    var unWatchInitialize = $scope.$watch('period', function (data) {
      if (data && data.preset) {
        _this.$scope.period = data;
        _this._initializePeriod(data.preset);
        unWatchInitialize();
      }
    });
  }

  _createClass(QuarterSelectionCtrl, [{
    key: '_initializePeriod',
    value: function _initializePeriod(preset) {
      if (Array.isArray(preset)) {
        this._setPeriodByDates(preset);
      } else {
        this._setPeriodByPreset(preset);
      }
    }

    /**
     * Checks whether the selected period
     * @param {String} checkPeriod - period label
     * @returns {boolean}
     * @private
     */
  }, {
    key: '_isSelectedPeriod',
    value: function _isSelectedPeriod(checkPeriod) {
      if (checkPeriod === customPeriodName && Array.isArray(this.currentPeriod)) {
        return true;
      }

      return this.currentPeriod === checkPeriod;
    }

    /**
     * Returns quarter number
     * @param {Date} date
     * @returns {Number}
     * @private
     */
  }, {
    key: '_getQuarter',
    value: function _getQuarter(date) {
      return Math.floor(1 + date.getMonth() / monthInQuarter);
    }

    /**
     * Returns quarters string like 'Q4 2015' by specified date
     * @param {Date} date
     * @returns {String}
     * @private
     */
  }, {
    key: '_getQuarterStrByDate',
    value: function _getQuarterStrByDate(date) {
      return this._getQuarterStr(this._getQuarter(date), date.getFullYear());
    }

    /**
     * Returns quarters string like 'Q4 2015'
     * @param {Number} quarter
     * @param {Number} year
     * @returns {String}
     * @private
     */
  }, {
    key: '_getQuarterStr',
    value: function _getQuarterStr(quarter, year) {
      return 'Q' + quarter + ' ' + year;
    }

    /**
     * Returns the beginning date of the quarter based on a specified date and step
     * @param {Date} datePoint - specified date
     * @param {Number} quarterStep - step
     * @returns {Date}
     * @private
     */
  }, {
    key: '_getQuarterStartDateByStep',
    value: function _getQuarterStartDateByStep(datePoint, quarterStep) {
      var currentQuarterStartDate = this._getQuarterStartDate(datePoint);
      var month = currentQuarterStartDate.getMonth() + monthInQuarter * quarterStep;

      return new Date(datePoint.getFullYear(), month, 1);
    }

    /**
     * Returns the beginning date of the quarter
     * @param {Number} year
     * @param {Namber} quarter
     * @returns {Date}
     * @private
     */
  }, {
    key: '_getQuarter_startDate',
    value: function _getQuarter_startDate(year, quarter) {
      var month = monthInQuarter * (quarter - 1);

      return new Date(year, month, 1);
    }

    /**
     * Returns the beginning date of the quarter by some date
     * @param {Date} date
     * @returns {Date}
     * @private
     */
  }, {
    key: '_getQuarterStartDate',
    value: function _getQuarterStartDate(date) {
      var month = monthInQuarter * (this._getQuarter(date) - 1);

      return new Date(date.getFullYear(), month, 1);
    }

    /**
     * Returns the ending date of the quarter
     * @param {Number} year
     * @param {Namber} quarter
     * @returns {Date}
     * @private
     */
  }, {
    key: '_getQuarter_endDate',
    value: function _getQuarter_endDate(year, quarter) {
      var month = quarter * monthInQuarter - 1;

      return new Date(year, month, this.quartersEndData[quarter], 23, 59, 59, 999);
    }

    /**
     * Sets period
     * @param {Date} startDate
     * @param {Date} endDate
     * @private
     */
  }, {
    key: '_setPeriod',
    value: function _setPeriod(startDate, endDate) {
      var scope = this.$scope;
      var period = scope.period;

      period.startDate = startDate;
      period.endDate = endDate;

      scope.startQuarter = this._getQuarterStrByDate(startDate);
      scope.endQuarter = this._getQuarterStrByDate(endDate);
    }

    /**
     * Sets period by preset
     * @param {String} preset
     * @private
     */
  }, {
    key: '_setPeriodByPreset',
    value: function _setPeriodByPreset(preset) {
      var currentYear = this.currentDate.getFullYear();

      var _ref = this.currentQuarter === 1 ? [lastQuarter, currentYear - 1] : [this.currentQuarter - 1, currentYear];

      var _ref2 = _slicedToArray(_ref, 2);

      var endQuarter = _ref2[0];
      var endYear = _ref2[1];

      var endDate = this._getQuarter_endDate(endYear, endQuarter);
      var startDate = this._getQuarterStartDateByStep(this.currentDate, this.presets[preset].step);

      this.$scope.period.preset = preset;

      this._setPeriod(startDate, endDate);

      this.currentPeriod = preset;
    }

    /**
     * Sets period by dates
     * @param {Array} dates - [timestamp start date, timestamp end date]
     * @private
     */
  }, {
    key: '_setPeriodByDates',
    value: function _setPeriodByDates(dates) {
      var _dates = _slicedToArray(dates, 2);

      var start = _dates[0];
      var end = _dates[1];

      var startDate = new Date(+start);
      var endDate = new Date(+end);

      this._setPeriod(startDate, endDate);

      this.currentPeriod = 'Custom';
    }

    /**
     * Sets quarter
     * @param {String} type - {'start' | 'end'}
     * @param {Number} quarter
     * @param {Number} year
     * @private
     */
  }, {
    key: '_setQuarter',
    value: function _setQuarter(type, quarter, year) {
      var scope = this.$scope;
      var period = scope.period;

      scope[type + 'Quarter'] = this._getQuarterStr(quarter, year);
      scope.period[type + 'Date'] = this['_getQuarter_' + type + 'Date'](year, quarter);
      scope[type + 'PickerShow'] = false;
      scope.period.preset = [period.startDate.getTime(), period.endDate.getTime()];
      this.currentPeriod = customPeriodName;
    }
  }]);

  return QuarterSelectionCtrl;
})();

exports['default'] = QuarterSelectionCtrl;
module.exports = exports['default'];

},{}],41:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null);

var _angular2 = _interopRequireDefault(_angular);

require('./views/quarter.picker.html');

/*@ngInject*/
var moduleName = 'quarter.picker';

var QuarterPicker = (function () {
  function QuarterPicker() {
    var _this = this;

    _classCallCheck(this, QuarterPicker);

    this.restrict = 'EA';
    this.templateUrl = 'quarter.picker.html';

    this.scope = {
      min: '=',
      max: '=',
      selectedQuarter: '=',
      select: '&'
    };

    this.link = function (scope) {
      return _this._link(scope);
    };
  }

  _createClass(QuarterPicker, [{
    key: '_link',
    value: function _link($scope) {
      var _this2 = this;

      $scope.presets = ['Q1', 'Q2', 'Q3', 'Q4'];

      $scope.$watch('selectedQuarter', function (quarter) {
        if (quarter) {
          var quarterPart = _this2._parseQuarterStr(quarter);

          $scope.quarter = quarterPart.quarter;
          $scope.year = quarterPart.year;
          $scope.selectedYear = quarterPart.year;
        }
      });

      $scope.$watch('max', function (maxQuarter) {
        if (maxQuarter) {
          var quarterPart = _this2._parseQuarterStr(maxQuarter);

          $scope.maxQuarter = quarterPart.quarter;
          $scope.maxYear = quarterPart.year;
        }
      });

      $scope.$watch('min', function (minQuarter) {
        if (minQuarter) {
          var quarterPart = _this2._parseQuarterStr(minQuarter);

          $scope.minQuarter = quarterPart.quarter;
          $scope.minYear = quarterPart.year;
        }
      });

      $scope.selectYear = function (step) {
        return $scope.year = $scope.year + step;
      };

      /**
       * Checks whether the year picker arrow is disabled
       * @param {Number} year
       * @returns {boolean}
       */
      $scope.isDisabledArrow = function (year) {
        return year ? $scope.year - year === 0 : false;
      };

      /**
       * Checks whether the quarter picker is disabled
       * @param {Number} $index
       * @returns {boolean}
       */
      $scope.isDisabledQuarterPicker = function ($index) {
        var indexMin = null;
        var indexMax = null;
        var result = false;

        if ($scope.maxYear && $scope.isDisabledArrow($scope.maxYear) && $scope.maxQuarter) {
          indexMax = $scope.presets.indexOf($scope.maxQuarter);

          result = indexMax < $index;
        }

        if ($scope.minYear && $scope.isDisabledArrow($scope.minYear) && $scope.minQuarter) {
          indexMin = $scope.presets.indexOf($scope.minQuarter);

          result = indexMin > $index;
        }

        if ($scope.maxYear === $scope.year && $scope.minYear === $scope.year) {
          result = indexMin > $index || indexMax < $index;
        }

        return result;
      };
    }

    /**
     * Parse quarter string
     * @param {String} q - quarter string
     * @returns {Object}
     * @private
     */
  }, {
    key: '_parseQuarterStr',
    value: function _parseQuarterStr(q) {
      var str = q.split(' ');

      return { quarter: str[0], year: +str[1] };
    }
  }], [{
    key: 'directiveFactory',
    value: function directiveFactory() {
      return new QuarterPicker();
    }
  }]);

  return QuarterPicker;
})();

_angular2['default'].module(moduleName, []).directive('quarterPicker', QuarterPicker.directiveFactory);

exports['default'] = moduleName;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./views/quarter.picker.html":42}],42:[function(require,module,exports){
(function (global){
(typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null).module('src/app/index.js').run(['$templateCache', function($templateCache){$templateCache.put('quarter.picker.html','<div class="year-selector ta-center"> <div class="arrow-wrapper pull-left" ng-click="!isDisabledArrow(minYear) && selectYear(-1)" ng-class="{ \'disabled\': isDisabledArrow(minYear) }"> <i class="glyphicon-chevron-left"></i> </div> <span class="year-wrapper"> <span>{{ year }}</span> </span> <div class="arrow-wrapper pull-right" ng-click="!isDisabledArrow(maxYear) && selectYear(+1)" ng-class="{ \'disabled\': isDisabledArrow(maxYear) }"> <i class="glyphicon-chevron-right"></i> </div> </div> <div class="quarter-wrapper"> <ul> <li ng-repeat="item in presets" ng-class="{                         \'active\': item === quarter && selectedYear === year,                         \'disabled\': isDisabledQuarterPicker($index)                       }"> <a ng-click="!isDisabledQuarterPicker($index) && select({ quarter: presets.indexOf(item) + 1, year: year })">{{ item }}</a> </li> </ul> </div>')}]);
module.exports = 'quarter.picker.html';
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],43:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null);

var _angular2 = _interopRequireDefault(_angular);

require('./views/quarter.selection.html');

var _controllersQuarterSelectionControllerJs = require('./controllers/quarter.selection.controller.js');

var _controllersQuarterSelectionControllerJs2 = _interopRequireDefault(_controllersQuarterSelectionControllerJs);

var _directivesQuarterPicker = require('./directives/quarter-picker');

var _directivesQuarterPicker2 = _interopRequireDefault(_directivesQuarterPicker);

/*@ngInject*/
var moduleName = 'quarter.selection';

var QuarterSelection = (function () {
  function QuarterSelection($document) {
    var _this = this;

    _classCallCheck(this, QuarterSelection);

    this.$document = $document;
    this.restrict = 'EA';
    this.templateUrl = 'quarter.selection.html';
    this.controller = _controllersQuarterSelectionControllerJs2['default'];
    this.scope = {
      period: '=',
      isHidden: '=',
      isActive: '='
    };

    this.link = function (scope, element, attrs, controller) {
      return _this._link(scope, element, attrs, controller);
    };
  }

  _createClass(QuarterSelection, [{
    key: '_link',
    value: function _link($scope, element, attrs, controller) {
      var targetNode = 'quarter-selection';

      $scope.$watch('calendarIsActive', function (value) {
        return controller.AppContext.setPeriodActive(value);
      });

      this.$document.on('click', function (event) {
        var target = $(event.target);

        if (!target.parents(targetNode).length) {
          $scope.$apply(function () {
            $scope.startPickerShow = false;
            $scope.endPickerShow = false;
            $scope.calendarIsActive = false;
          });
        }
      });
    }
  }], [{
    key: 'directiveFactory',
    value: function directiveFactory($document) {
      return new QuarterSelection($document);
    }
  }]);

  return QuarterSelection;
})();

_angular2['default'].module(moduleName, [_directivesQuarterPicker2['default']]).controller('QuarterSelectionCtrl', _controllersQuarterSelectionControllerJs2['default']).directive('quarterSelection', QuarterSelection.directiveFactory);

exports['default'] = moduleName;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./controllers/quarter.selection.controller.js":40,"./directives/quarter-picker":41,"./views/quarter.selection.html":44}],44:[function(require,module,exports){
(function (global){
(typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null).module('src/app/index.js').run(['$templateCache', function($templateCache){$templateCache.put('quarter.selection.html','<div class="panel-wrapper has-datepicker" ng-class="{ hidden: isHidden }"> <div class="panel-name"> <div class="f-left">Period</div> </div> <div class="panel panel-default"> <div class="panel-heading"> <ul class="panel-heading-controls"> <li ng-repeat="item in periodMenu" ng-class="{ active: isSelectedPeriod(item.label) }"> <a ng-click="item.isHandled && setPeriodByPreset(item.label)" ng-show="item.isHandled">{{ item.label }}</a> <a ng-hide="item.isHandled">{{ item.label }}</a> </li> </ul> </div> <div class="panel-body"> <form class="daterange"> <input type="text" value="{{ startQuarter }}" ng-focus="calendarIsActive = true;" ng-click="startPickerShow = true; endPickerShow = false; isActive = true;" ng-readonly="true" ng-class="{ focusDate: startPickerShow }"> <span class="separator">to</span> <input type="text" value="{{ endQuarter }}" ng-focus="calendarIsActive = true;" ng-click="endPickerShow = true; startPickerShow = false; isActive = true;" ng-readonly="true" ng-class="{ focusDate: endPickerShow }"> </form> <div class="datepicker-wrapper quarter" ng-if="startPickerShow || endPickerShow"> <quarter-picker selected-quarter="startQuarter" max="endQuarter" select="setStartQuarter(quarter, year)" ng-if="startPickerShow"></quarter-picker> <quarter-picker selected-quarter="endQuarter" min="startQuarter" max="maxQuarter" select="setEndQuarter(quarter, year)" ng-if="endPickerShow"></quarter-picker> </div> </div> </div> </div>')}]);
module.exports = 'quarter.selection.html';
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],45:[function(require,module,exports){
(function (global){
'use strict';

/**
 * Roles module
 *
 * Contains RolesService to retrieve all user roles from API
 * Contains PermissionsService to check permissions of user role to perform some action
 */

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null);

var _angular2 = _interopRequireDefault(_angular);

var _servicesRolesService = require('./services/roles.service');

var _servicesRolesService2 = _interopRequireDefault(_servicesRolesService);

var _servicesPermissionsService = require('./services/permissions.service');

var _servicesPermissionsService2 = _interopRequireDefault(_servicesPermissionsService);

var moduleName = 'roles';

_angular2['default'].module(moduleName, []).service('RolesService', _servicesRolesService2['default']).service('PermissionsService', _servicesPermissionsService2['default']);

exports['default'] = moduleName;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./services/permissions.service":46,"./services/roles.service":47}],46:[function(require,module,exports){
'use strict';

/***************

 This service retrieves user's roles from `/api/user_groups`

 Example of response format:
 {
     0: 'CP', // 0 - default user role
     1: 'DD', // 1 - entity id, DD - user role for entity
     ...
 }

 ***************/

/*@ngInject*/
Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var PermissionsService = (function () {
  function PermissionsService($http) {
    _classCallCheck(this, PermissionsService);

    this.http = $http;
    this._userPermissions = {};
    this._clientRole = false;
    this._permissions = PermissionsService.getRolesPermissions();
  }

  /**
   * Fetches user roles from API
   */

  _createClass(PermissionsService, [{
    key: 'fetchPermissions',
    value: function fetchPermissions() {
      var _this = this;

      this.http.get('/api/user_groups').then(function (res) {
        _this._userPermissions = _this.setPermissions(res.data);
      });
    }

    /**
     * Sets permissions after initial load
     * @param permissions
     */
  }, {
    key: 'setPermissions',
    value: function setPermissions(permissions) {
      this._userPermissions = permissions ? permissions['user_roles'] : {};
      this._clientRole = permissions ? permissions['user_type'] === 'client' : false;
    }

    /**
     * Method-checker if user can perform some action
     * @param {String} action - Action to check permission
     * @param {Number|Object} target - Id entity user wanted to perform action on
     * @returns {Boolean} - True for allow access, false for deny
     */
  }, {
    key: 'can',
    value: function can(action) {
      var target = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

      if (typeof target !== 'object') {
        var userRoles = angular.copy(this._userPermissions['0']) || [];
        var targetRole = this._userPermissions[target];

        if (targetRole) {
          userRoles.push(targetRole[0]);
        }

        return this._checkPermission(action, userRoles);
      }

      return this._checkPermission(action, this._mergeRoles(target));
    }

    /**
     * Checks if user can do some action with even one item
     * @param {String} action - Action to check permission
     * @returns {boolean}
     */
  }, {
    key: 'canAny',
    value: function canAny(action) {
      var accessGranted = undefined;

      for (var key in this._userPermissions) {
        var roles = this._userPermissions[key];

        accessGranted = this._checkPermission(action, roles);

        if (accessGranted) {
          return true;
        }
      }

      return accessGranted;
    }

    /**
     * Checks whether we have client role
     * @returns {boolean|*}
     */
  }, {
    key: 'isClientRole',
    value: function isClientRole() {
      return this._clientRole;
    }

    /**
     * Merges user roles for concrete target, parent, account and default user role
     * @param {Object} config - contains parent, account, and target id's
     * @returns {Array} Array with all user roles for needed thing
     * @private
     */
  }, {
    key: '_mergeRoles',
    value: function _mergeRoles(config) {
      var _this2 = this;

      var defaultUserRole = this._userPermissions[0] ? angular.copy(this._userPermissions[0]) : null;
      var userRoles = defaultUserRole ? defaultUserRole : [];

      Object.keys(config).forEach(function (key) {
        if (_this2._userPermissions[config[key]]) {
          _this2._addRoles(userRoles, _this2._userPermissions[config[key]]);
        }
      });

      return userRoles;
    }

    /**
     * Adds roles to user's roles array
     * @param userRoles {Array}
     * @param roles {Array}
     * @private
     */
  }, {
    key: '_addRoles',
    value: function _addRoles(userRoles, roles) {
      roles.forEach(function (role) {
        if (userRoles.indexOf(role) === -1) {
          userRoles.push(role);
        }
      });
    }

    /**
     * Checks existing needed role in permissions array
     * @param {String} action - Action to check permission
     * @param {Array} roles - Role to check access
     * @returns {Boolean} - True if role is allowed to perform action, deny if not
     * @private
     */
  }, {
    key: '_checkPermission',
    value: function _checkPermission(action, roles) {
      var _this3 = this;

      var isAccessGranted = roles.some(function (role) {
        return _this3._permissions[action].indexOf(role) !== -1;
      });

      return isAccessGranted;
    }

    /**
     * Returns permissions map
     * @returns {Object} - Map with permissions
     */
  }], [{
    key: 'getRolesPermissions',
    value: function getRolesPermissions() {
      var ProjectManager = 'pm';
      var DeliveryDirector = 'dd';
      var AccountViewer = 'account_viewer';
      var ClientPartner = 'cp';
      var CharterAdmin = 'charter_admin';
      var CharterAuditor = 'charter_auditor';
      var Client = 'client';

      // Roles for future. Currently not used
      var SDLCAuditor = 'sdlc_auditor';

      return {
        createCharter: [DeliveryDirector, CharterAdmin],
        editCharter: [ProjectManager, DeliveryDirector, ClientPartner, CharterAdmin],
        viewCharter: [ProjectManager, DeliveryDirector, AccountViewer, ClientPartner, CharterAdmin, CharterAuditor, Client],
        viewCharterInternals: [ProjectManager, DeliveryDirector, AccountViewer, ClientPartner, CharterAdmin, CharterAuditor],
        viewResponsibilities: [ProjectManager, DeliveryDirector, ClientPartner, CharterAdmin, Client],
        editResponsibilities: [ProjectManager, DeliveryDirector, ClientPartner, CharterAdmin],
        changeCharterClientPartner: [DeliveryDirector, CharterAdmin],
        changeCharterManager: [DeliveryDirector, CharterAdmin],
        removeResponsibility: [ProjectManager, DeliveryDirector, CharterAdmin],
        activateCharter: [ProjectManager, DeliveryDirector, ClientPartner, CharterAdmin],
        viewCommit: [ProjectManager, DeliveryDirector, ClientPartner, CharterAdmin, Client],
        editCommit: [ProjectManager, DeliveryDirector, ClientPartner, CharterAdmin],
        viewAdministration: [CharterAdmin]
      };
    }
  }]);

  return PermissionsService;
})();

exports['default'] = PermissionsService;
module.exports = exports['default'];

},{}],47:[function(require,module,exports){
"use strict";

/***************

 This service makes call to API `/api/roles`

 Example of response format:
 [{
     name: 'Client Partner',
     id: '1'
 }, ... ]

 ***************/

/*@ngInject*/
Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RolesService = (function () {
  function RolesService($http) {
    _classCallCheck(this, RolesService);

    this.$http = $http;
  }

  /**
   * Makes call to API roles
   * @returns {Array} roles list
   */

  _createClass(RolesService, [{
    key: "getRoles",
    value: function getRoles() {
      return this.$http.get('/api/roles');
    }
  }]);

  return RolesService;
})();

exports["default"] = RolesService;
module.exports = exports["default"];

},{}],48:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null);

var _angular2 = _interopRequireDefault(_angular);

/*@ngInject*/

var SearchCtrl = (function () {
  SearchCtrl.$inject = ["$scope", "$sce", "$filter", "PermissionsService", "UtilsService"];
  function SearchCtrl($scope, $sce, $filter, PermissionsService, UtilsService) {
    var _this = this;

    _classCallCheck(this, SearchCtrl);

    this.scope = $scope;
    this.$sce = $sce;
    this.filter = $filter;
    this.PermissionsService = PermissionsService;
    this.UtilsService = UtilsService;

    this.entitiesIds = [];
    this.searchList = [];
    this.nativeSearchList = [];
    this.nativeSearchResult = [];
    this.removedList = [];
    this.searchText = null;
    this.hiddenItemsCount = 0;
    this.minSearchTextLength = 3;

    $scope.highlight = function (text, search) {
      return _this.highlight(text, search);
    };

    $scope.isChangedHeight = false;

    var unwatchSearchResize = $scope.$watch(function () {
      return _this.isNeedResize;
    }, function (data) {
      return $scope.isChangedHeight = !$scope.isChangedHeight;
    });

    var unwatchSearchPanelIsActive = $scope.$watch(function () {
      return _this.searchPanelIsActive;
    }, function () {
      return $scope.isChangedHeight = !$scope.isChangedHeight;
    });

    var unWatchInitializeData = $scope.$watch(function () {
      return _this.data;
    }, function (data) {
      if (data) {
        _this.initializeSearch(data);
      }
    });

    var unwatchResult = $scope.$watch(function () {
      return _this.result;
    }, function (newVal) {
      if (newVal && _this.isInitialized) {
        _this.updateSearch();
      }
    }, true);

    $scope.$on('destroy', function () {
      unWatchInitializeData();
      unwatchResult();
      unwatchSearchResize();
      unwatchSearchPanelIsActive();
    });
  }

  /**
   * Initializes the search list
   */

  _createClass(SearchCtrl, [{
    key: 'initializeSearch',
    value: function initializeSearch() {
      this.isInitialized = true;

      if (!this.data.length) {
        this.searchLoading = true;
      }

      this.searchList = _angular2['default'].copy(this.data);

      for (var i = 0; i < this.searchList.length; i++) {
        this.entitiesIds.push(this.searchList[i].id);
        this.searchList[i].isInList = false;
      }

      this.nativeSearchList = _angular2['default'].copy(this.searchList);

      if (this.result.length) {
        this.nativeSearchResult = _angular2['default'].copy(this.result);
        this.updateSearch();

        return null;
      } else {
        this.searchLoading = true;
      }
    }
  }, {
    key: 'updateSearch',
    value: function updateSearch() {
      var checkedItems = this.filter('filter')(this.result, { isChecked: true });
      var unCheckedItems = this.filter('filter')(this.result, { isChecked: false });

      if (checkedItems.length) {
        this.setSelectedItems(checkedItems.map(function (item) {
          return item.id;
        }));
      }

      if (unCheckedItems.length) {
        this.setItemsInList(unCheckedItems.map(function (item) {
          return item.id;
        }));
      }
    }

    /**
     * Sets selected items to the search list by ids
     * @param {Array} itemIds - List of items ids
     * @returns {NULL}
     */
  }, {
    key: 'setSelectedItems',
    value: function setSelectedItems(itemIds) {
      if (Array.isArray(itemIds)) {
        for (var i = 0; i < itemIds.length; i++) {
          var item = this.findItemById(itemIds[i]);

          if (item) {
            this.addToChosenList(item);
          } else {
            this.hiddenItemsCount++;
          }
        }

        if (this.nativeSearchResult.length === this.hiddenItemsCount) {
          this.result = [];
          this.searchLoading = true;
        }

        return null;
      }
    }

    /**
     * Finds search item by id
     * @param {Number} id - Item id
     * @returns {Object | NULL} - Search item if item was found
     */
  }, {
    key: 'findItemById',
    value: function findItemById(id) {
      var items = this.filter('filter')(this.searchList, { id: id });
      var len = items.length;

      if (len > 1) {
        var index = undefined;

        for (var i = 0; i < len; i++) {
          if (items[i].id === id) {
            index = i;
            break;
          }
        }

        return items[index];
      }

      return len === 1 ? items[0] : null;
    }

    /**
     * Adds item to the search list
     * @param {Object} item - Search item
     */
  }, {
    key: 'addToChosenList',
    value: function addToChosenList(item) {
      this.scope.isListCleared = false;
      item.isChecked = true;
      item.isInList = true;
      this.syncResult();
    }

    /**
     * Synchronize selected items with context
     */
  }, {
    key: 'syncResult',
    value: function syncResult() {
      this.result = this.getSearchResult();
      this.searchLoading = true;
    }

    /**
     * Gets list of selected items
     * @returns {Array} List of search result
     */
  }, {
    key: 'getSearchResult',
    value: function getSearchResult() {
      var items = this.filter('filter')(this.searchList, { isInList: true });

      return items.map(function (item) {
        return {
          id: item.id,
          isInList: true,
          isChecked: item.isChecked
        };
      });
    }

    /**
     * Checks whether the search panel was active
     * @param {String} searchText - Search query
     * @returns {Boolean}
     */
  }, {
    key: 'isSearchOn',
    value: function isSearchOn(searchText) {
      return searchText && searchText.length >= this.minSearchTextLength && this.searchPanelIsActive;
    }

    /**
     * Turns off the search panel
     */
  }, {
    key: 'searchOff',
    value: function searchOff() {
      this.searchText = null;
      this.searchPanelIsActive = false;
      this.scope.browseButtonIsVisible = true;
    }

    /**
     * Removes item from the search list
     * @param {Object} item - Search item
     */
  }, {
    key: 'removeFromList',
    value: function removeFromList(item) {
      item.isChecked = null;
      item.isInList = false;
      this.syncResult();
    }

    /**
     * Changes state of the search item from selected to unselected or vice versa
     * @param {Object} item - Search item
     */
  }, {
    key: 'changeState',
    value: function changeState(item) {
      item.isChecked = !item.isChecked;
      this.syncResult();
    }

    /**
     * Clears the search list
     */
  }, {
    key: 'clearList',
    value: function clearList() {
      if (this.isPresentItems()) {
        this.removedList = _angular2['default'].copy(this.searchList);
        this.searchList = _angular2['default'].copy(this.nativeSearchList);
        this.scope.isListCleared = true;
        this.syncResult();
      }
    }

    /**
     * Reverts the search list
     */
  }, {
    key: 'revertList',
    value: function revertList() {
      this.searchList = _angular2['default'].copy(this.removedList);
      this.removedList = [];
      this.scope.isListCleared = false;
      this.syncResult();
    }

    /**
     * Sets chosen items to search list by ids
     * @param {Array} itemsIds - List of items ids
     */
  }, {
    key: 'setItemsInList',
    value: function setItemsInList(itemsIds) {
      for (var i = 0; i < itemsIds.length; i++) {
        var id = itemsIds[i];
        var item = this.findItemById(id);

        if (item) {
          item.isChecked = false;
          item.isInList = true;
        } else {
          this.hiddenItemsCount++;
        }
      }
      this.syncResult();
    }

    /**
     * Checks whether there are items of selected list
     * @returns {Boolean}
     */
  }, {
    key: 'isPresentItems',
    value: function isPresentItems() {
      return this.searchLoading && !!this.filter('filter')(this.searchList, { isInList: true }).length;
    }

    /**
     * Highlights matchings in the search list using pattern
     * @param {String} text - Source text
     * @param {String} searchText - Search pattern
     * @returns {TrustedValueHolderType}
     */
  }, {
    key: 'highlight',
    value: function highlight(text, searchText) {
      return this.UtilsService.highlight(text, searchText);
    }

    /**
     * Checks whether there are any matches of search query in the search list
     * @param {String} searchText - Search query
     * @returns {Boolean}
     */
  }, {
    key: 'isHaveAnyMatches',
    value: function isHaveAnyMatches(searchText) {
      return !!this.filter('filter')(this.searchList, { name: searchText }).length;
    }

    /**
     * Checks whether there is a Browse button
     */
  }, {
    key: 'isPresentBrowseButton',
    value: function isPresentBrowseButton() {
      return !this.PermissionsService.isClientRole() && this.config.isPresentSearchBrowse && !this.searchPanelIsActive;
    }

    /**
     * Checks whether there is a Clear button
     * @returns {Boolean}
     */
  }, {
    key: 'isPresentClearButton',
    value: function isPresentClearButton() {
      return !this.searchPanelIsActive && !this.scope.isListCleared;
    }

    /**
     * Checks whether there is a Revert button
     * @returns {Boolean}
     */
  }, {
    key: 'isPresentRevertButton',
    value: function isPresentRevertButton() {
      return !this.searchPanelIsActive && this.scope.isListCleared;
    }

    /**
     * Checks whether the entity is expired
     * @param {Object} attrs - search item attributes
     * @returns {Boolean}
     */
  }, {
    key: 'isExpired',
    value: function isExpired(attrs) {
      var expiredDate = attrs && attrs.valid_until && new Date(attrs.valid_until).valueOf();

      if (expiredDate) {
        expiredDate = new Date(attrs.valid_until);
        var expired = new Date(expiredDate.getFullYear(), expiredDate.getMonth(), expiredDate.getDate()).valueOf();
        var now = new Date();
        var year = now.getFullYear();
        var month = now.getMonth();
        var day = now.getDate();
        var today = new Date(year, month, day).valueOf();
        var tomorrow = new Date(year, month, day + 1).valueOf();

        if (tomorrow > expired && expired !== today) {
          return true;
        }
      }

      return false;
    }

    /**
     * Checks whether all entities are selected
     * @returns {Boolean}
     */
  }, {
    key: 'isAllEntitiesSelected',
    value: function isAllEntitiesSelected() {
      return this.searchList.length === this.result.filter(function (item) {
        return item.isChecked;
      }).length;
    }

    /**
     * Sets all entities in context
     */
  }, {
    key: 'selectAll',
    value: function selectAll() {
      var searchList = this.searchList;

      for (var i = 0; i < searchList.length; i++) {
        this.addToChosenList(searchList[i]);
      }
    }

    /**
     * Checks whether is present no items message
     * @returns {boolean}
     */
  }, {
    key: 'showNoItems',
    value: function showNoItems() {
      return !this.isPresentItems() && !this.searchText && !this.error;
    }

    /**
     * Checks whether user has items to show
     * @returns {boolean}
     */
  }, {
    key: 'isNoAvailableItems',
    value: function isNoAvailableItems() {
      return !this.searchList.length;
    }

    /**
     * Checks if entity type 'charter'
     * @returns {boolean}
     */
  }, {
    key: 'isTypeCharter',
    value: function isTypeCharter() {
      return this.config.type === 'charter';
    }
  }]);

  return SearchCtrl;
})();

exports['default'] = SearchCtrl;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],49:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

require('../view/search.html');

var _controllerSearchControllerJs = require('../controller/search.controller.js');

var _controllerSearchControllerJs2 = _interopRequireDefault(_controllerSearchControllerJs);

var Search = (function () {
  /*@ngInject*/

  Search.$inject = ["$timeout"];
  function Search($timeout) {
    var _this = this;

    _classCallCheck(this, Search);

    this.timeout = $timeout;
    this.restrict = 'EA';
    this.templateUrl = 'search.html';
    this.controller = _controllerSearchControllerJs2['default'];
    this.controllerAs = 'search';
    this.scope = {
      data: '=',
      result: '=',
      searchPanelIsActive: '=',
      config: '=',
      error: '=',
      reload: '=',
      searchLoading: '=',
      isNeedResize: '=',
      infoAction: '&',
      browseAction: '&'
    };
    this.bindToController = true;
    this.isChosenList = true;
    this.isHighlight = false;
    this.link = function (scope, element, attrs, controller) {
      return _this._link(scope, element, attrs, controller);
    };
  }

  _createClass(Search, [{
    key: '_link',
    value: function _link(scope, element, attrs, controller) {
      var _this2 = this;

      this.$scope = scope;
      this.$element = element;
      this.$source = this.$element.find('ul.search-list');
      this.$searchInput = element.find('form input');

      this.addToChosenList = function (item) {
        return !item.isInList && controller.addToChosenList(item);
      };
      this.changeState = function (item) {
        return controller.changeState(item);
      };
      this.isSearchOn = function () {
        return controller.isSearchOn(controller.searchText, scope.search.searchPanelIsActive);
      };

      var itCloseBtn = function itCloseBtn(target) {
        return target ? target.hasAttribute('close-button') : false;
      };

      this.$searchInput.on('blur', function (event) {
        if (scope.search.searchPanelIsActive && !_this2.isHighlight && !itCloseBtn(event.relatedTarget)) {
          //This timeout is needed to scroll if use keyboard to navigate.
          _this2.timeout(function () {
            return _this2.$searchInput.focus();
          }, 0);
        }
        _this2.isHighlight = false;
      });

      this.$searchInput.on('keyup', function () {
        if (_this2.isChosenList === _this2.isSearchOn()) {
          _this2.isChosenList = !_this2.isChosenList;
          _this2.$source.find('li.active').removeClass('active');
        }
      });

      var unwatch = scope.$watch(function () {
        return scope.search.searchPanelIsActive;
      }, function (value) {
        if (!value) {
          _this2.$searchInput.blur();
          _this2.$source.find('li.active').removeClass('active');
          controller.searchOff();
        }
      });

      scope.inputPressKey = function (event) {
        return _this2.inputPressKey(event);
      };
      scope.itemClick = function (item) {
        return _this2.enter(item);
      };
      scope.sourceClick = function (event) {
        if (scope.search.searchPanelIsActive) {
          _this2.$source.find('li.active').removeClass('active');
          _this2.highlight($(event.currentTarget));
        }
      };

      scope.$on('$destroy', function () {
        unwatch();
        _this2.$searchInput = null;
        _this2.$source = null;
      });
    }
  }, {
    key: 'inputPressKey',
    value: function inputPressKey(event) {
      var _this3 = this;

      /*  KEY CODES
       13 => ENTER
       27 => ESC
       38 => ARROW_UP
       40 => ARROW_DOWN_KEY
       */

      if (event.keyCode === 38 || event.keyCode === 40) {
        event.preventDefault();
      }

      var keyMap = {
        13: function _(element) {
          return _this3.enter(element.scope().item);
        },
        27: function _() {
          return _this3.close();
        },
        38: function _(element) {
          return _this3.moveTop(element);
        },
        40: function _(element) {
          return _this3.moveBottom(element);
        }
      };

      if (keyMap.hasOwnProperty(event.keyCode)) {
        keyMap[event.keyCode](this.$source.find('li.active'));
      }
    }
  }, {
    key: 'enter',
    value: function enter(item) {
      if (item.isInList) {
        this.changeState(item);
      } else {
        this.addToChosenList(item);
      }
    }
  }, {
    key: 'close',
    value: function close() {
      this.$scope.search.searchPanelIsActive = false;
    }
  }, {
    key: 'moveTop',
    value: function moveTop(currentEl) {
      currentEl.removeClass('active');

      if (currentEl.length && currentEl.prev().length) {
        this.highlight(currentEl.prev());
      } else {
        this.highlight(this.$source.find('li:not(.ng-hide)').last());
      }
    }
  }, {
    key: 'moveBottom',
    value: function moveBottom(currentEl) {
      currentEl.removeClass('active');

      if (currentEl.length && currentEl.next().length) {
        this.highlight(currentEl.next());
      } else {
        this.highlight(this.$source.find('li:not(.ng-hide)').first());
      }
    }
  }, {
    key: 'highlight',
    value: function highlight(element) {
      this.isHighlight = true;
      element.find('a.active').focus();
      element.addClass('active');
      this.$searchInput.focus();
    }
  }], [{
    key: 'directiveFactory',
    value: function directiveFactory($timeout) {
      return new Search($timeout);
    }
  }]);

  return Search;
})();

exports['default'] = Search;
module.exports = exports['default'];

},{"../controller/search.controller.js":48,"../view/search.html":51}],50:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _directiveSearch = require('./directive/search');

var _directiveSearch2 = _interopRequireDefault(_directiveSearch);

var _componentsFullHeightSearchList = require('components/full-height/search-list');

var _componentsFullHeightSearchList2 = _interopRequireDefault(_componentsFullHeightSearchList);

var _componentsChartersContextFilter = require('components/charters-context-filter');

var _componentsChartersContextFilter2 = _interopRequireDefault(_componentsChartersContextFilter);

var _componentsTeamsContextFilter = require('components/teams-context-filter');

var _componentsTeamsContextFilter2 = _interopRequireDefault(_componentsTeamsContextFilter);

var _componentsUtilsService = require('components/utils-service');

var _componentsUtilsService2 = _interopRequireDefault(_componentsUtilsService);

var moduleName = 'ad.Search';

angular.module(moduleName, [_componentsFullHeightSearchList2['default'], _componentsChartersContextFilter2['default'], _componentsTeamsContextFilter2['default'], _componentsUtilsService2['default']]).directive('adSearch', ['$timeout', _directiveSearch2['default'].directiveFactory]);

exports['default'] = moduleName;
module.exports = exports['default'];

},{"./directive/search":49,"components/charters-context-filter":16,"components/full-height/search-list":25,"components/teams-context-filter":57,"components/utils-service":70}],51:[function(require,module,exports){
(function (global){
(typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null).module('src/app/index.js').run(['$templateCache', function($templateCache){$templateCache.put('search.html','<div class="panel-wrapper" ng-class="{ overbackdrop: search.searchPanelIsActive, \'fixed-search\': search.searchPanelIsActive}"> <div class="panel-name"> <div class="f-left">Context</div> <a href="" class="f-left" ng-if="search.isPresentBrowseButton()" ng-click="search.browseAction()">Browse</a> <a class="f-right" ng-click="search.clearList()" ng-show="search.isPresentClearButton()">Clear</a> <a class="f-right" ng-click="search.revertList()" ng-show="search.isPresentRevertButton()">Revert</a> <a href="" class="f-right" ng-show="search.searchPanelIsActive" close-button ng-click="setPrevState(); search.searchPanelIsActive = false;">Close</a> </div> <div class="panel panel-default"> <div class="panel-heading" ng-show="false"> <ul class="panel-heading-controls"> <li class="active"> <a href="#">Projects</a> </li> <li> <a href="#">Delivery Units</a> </li> <li> <a href="#">Verticals</a> </li> </ul> </div> <div class="panel-body" ng-init="dismissNotification = false"> <form class="search-form" ng-submit="false"> <a class="search-clean" ng-click="search.searchText = \'\'" ng-show="search.searchText.length > 0"> <span class="icon icon-search-remove"></span> </a> <input ng-model="search.searchText" type="text" placeholder="Search" class="fullwidth" ng-class="{ focusDate: search.searchPanelIsActive }" ng-click="search.searchPanelIsActive = true;" ng-disabled="search.error" ng-keydown="inputPressKey($event, search.searchText)" ng-trim="false"> <div class="ad-notification" ng-show="search.hiddenItemsCount > 0 && !dismissNotification"> Your context selection has been updated with {{ search.getSearchResult().length }} items. {{ search.hiddenItemsCount }} items were hidden. <a class="dismiss" ng-click="dismissNotification = true">Dismiss</a> </div> </form> <loading-indicator ng-if="!search.searchLoading" max-width="88px"></loading-indicator> <div ng-full-height-search-list="isChangedHeight" class="has-bottom-controls"> <div ng-show="search.searchLoading"> <ul class="search-list"> <li class="search-list-item" ng-repeat="item in search.searchList |                                 filter: { name: search.searchText || \'\' , isInList: !search.searchText || item.isInList } |                                  orderBy: \'name\'" ng-click="sourceClick($event)" ng-show="search.isSearchOn(search.searchText, search.searchPanelIsActive) || !search.searchPanelIsActive || !search.searchText"> <input type="checkbox" class="ad-checkbox" ng-class="{ indeterminate: item.indeterminate }" id="{{ \'searchItemCheckbox\' + item.id }}" ng-checked="item.isChecked" ng-disabled="item.isDisabled" ng-show="item.isInList" ng-click="itemClick(item)" ng-keydown="segmentPressKey($event)"> <label for="{{ \'searchItemCheckbox\' + item.id }}" ng-show="item.isInList"> <span class="search-list-item-name" title="{{ item.name }}" ng-bind-html="highlight(item.name, search.searchText)"></span> <div class="search-list-item-controls"> <a href="" class="remove active" ng-click="search.removeFromList(item)"> <span class="icon icon-remove"></span> </a> <a class="info" ng-show="search.config.isPresentSearchInfo" ng-click="search.infoAction({ id: item.id })"> <span class="icon icon-info" ng-if="search.config.isPresentAlarmIcon && !search.isExpired(item.attrs)"></span> <span class="icon-alarm" ng-if="search.config.isPresentAlarmIcon && search.isExpired(item.attrs)"></span> </a> </div> </label> <a href="" class="active" ng-click="search.addToChosenList(item)" ng-show="!item.isInList && search.isSearchOn(search.searchText, search.searchPanelIsActive)"> <span class="icon icon-add"></span> <span class="search-list-item-name" title="{{ item.name }}" ng-bind-html="highlight(item.name, search.searchText)"></span> </a> </li> </ul> <div class="no-selected-msg"> <span ng-show="search.error">Connection error. <a htef="" ng-click="search.reload = true;">Try again.</a></span> <span ng-show="search.isNoAvailableItems() && !search.isTypeCharter()"> You have no access to any of registered teams </span> <span ng-show="search.isNoAvailableItems() && search.isTypeCharter()"> You have no charters available </span> <charters-context-filter data="search.entitiesIds" ng-if="search.showNoItems() && !search.isNoAvailableItems() && search.isTypeCharter()"> </charters-context-filter> <teams-context-filter data="search.data" ng-if="search.showNoItems() && !search.isNoAvailableItems() && !search.isTypeCharter()"> </teams-context-filter> <span ng-show="!search.isNoAvailableItems() && search.searchText && search.searchText.length < 3">Minimum search length is 3 symbols</span> <span ng-show="!search.isNoAvailableItems() && search.isSearchOn(search.searchText, search.searchPanelIsActive) && !search.isHaveAnyMatches(search.searchText)"> No matches found for this selection </span> </div> </div> </div> <div class="incomplete" ng-show="false"> <span> <span class="icon icon-warning"></span> 1 of 6 have incomplete indexes </span> </div> </div> <div class="search-bottom-controls" ng-show="search.searchLoading"> <a ng-click="!search.isAllEntitiesSelected() && search.selectAll()" ng-class="{ active: !search.isAllEntitiesSelected() }"> Select all {{ search.config.type === \'charter\' ? \'charters\' : \'teams\' }} </a> </div> </div> <div class="hint ta-center" ng-show="false"> You can only view 5 at a time </div> </div>')}]);
module.exports = 'search.html';
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],52:[function(require,module,exports){
"use strict";

/***************

 The simple context directive.

 Possible definition:

 <simple-context data="data"  active-item="activeItemId"
 config="config" info-action="function(id)" click-action="function(id)"
 remove-action="function(item)"></simple-context>

 Config format:

 {
   isPresentInfoButton: {Boolean},
   isPresentRemoveButton: {Boolean}
   isClickedRow: {Boolean}
 }

 To add it to your module make the following

 import SimpleContextList from 'components/simple-context-list';

 and add it to dependency

 angular.module(moduleName, [..., SimpleContextList, ...])

 ***************/

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

require('../view/simple.context.list.html');

/*@ngInject*/

var SimpleContextList = (function () {
  SimpleContextList.$inject = ["$filter"];
  function SimpleContextList($filter) {
    var _this = this;

    _classCallCheck(this, SimpleContextList);

    this.$filter = $filter;
    this.restrict = 'EA';
    this.templateUrl = 'simple.context.list.html';
    this.scope = {
      data: '=',
      fullEntitiesList: '=',
      expiredEntities: '=',
      config: '=',
      activeItem: '=',
      loading: '=',
      infoAction: '&',
      clickAction: '&',
      removeAction: '&'
    };
    this.link = function (scope) {
      return _this._link(scope);
    };
  }

  _createClass(SimpleContextList, [{
    key: '_link',
    value: function _link(scope) {
      var _this2 = this;

      scope.isInit = false;
      scope.isDataLoaded = false;

      this.$scope = scope;

      scope.isValidDate = function (itemAttrs) {
        return _this2._isValidDate(itemAttrs);
      };
      scope.isPresentItems = function () {
        return _this2._isPresentItems();
      };
      scope.isItemsAvailable = function () {
        return _this2._isItemsAvailable();
      };

      var unwatchData = scope.$watch('data', function (newVal) {
        scope.items = newVal;
        scope.isInit = scope.loading;
      });

      var watchLoading = scope.$watch('loading', function (newVal) {
        scope.isDataLoaded = true;

        return newVal && scope.isDataLoaded;
      });

      scope.$on('$destroy', function () {
        unwatchData();
        watchLoading();
      });

      /**
       * Shows all charters in context
       */
      scope.showAll = function () {
        if (!scope.isAllEntitiesInContext()) {
          scope.data = scope.fullEntitiesList;
        }
      };

      /**
       * Shows all charters with 'expired' status in context
       */
      scope.showExpired = function () {
        if (!_this2._isAllExpiredEntitiesInContext()) {
          scope.data = scope.expiredEntities;
        }
      };

      /**
       * Checks whether there ara all antities in the list
       * @returns {Boolean}
       */
      scope.isAllEntitiesInContext = function () {
        return scope.items && scope.items.length === scope.fullEntitiesList.length;
      };
      scope.isAllExpiredEntitiesInContext = function () {
        return _this2._isAllExpiredEntitiesInContext();
      };
    }

    /**
     * Checks whether the entity is expired
     * @param {Object} attrs - search item attributes
     * @private
     * @returns {Boolean}
     */
  }, {
    key: '_isValidDate',
    value: function _isValidDate(attrs) {
      var expiredDate = attrs && attrs.valid_until && new Date(attrs.valid_until).valueOf();

      if (expiredDate) {
        expiredDate = new Date(attrs.valid_until);
        var expired = new Date(expiredDate.getFullYear(), expiredDate.getMonth(), expiredDate.getDate()).valueOf();
        var now = new Date();
        var year = now.getFullYear();
        var month = now.getMonth();
        var day = now.getDate();
        var today = new Date(year, month, day).valueOf();
        var tomorrow = new Date(year, month, day + 1).valueOf();

        if (tomorrow > expired && expired !== today) {
          return true;
        }
      }

      return false;
    }

    /**
     * Checks whether there are items in list
     * @private
     * @returns {Boolean}
     */
  }, {
    key: '_isPresentItems',
    value: function _isPresentItems() {
      return this.$scope.isDataLoaded && this.$scope.isInit ? this.$scope.items.length : true;
    }

    /**
     * Checks whether user has items
     * @private
     * @returns {Boolean}
     */
  }, {
    key: '_isItemsAvailable',
    value: function _isItemsAvailable() {
      return this.$scope.isDataLoaded && this.$scope.isInit ? !!this.$scope.fullEntitiesList.length : true;
    }

    /**
     * Checks whether there only all expired items in the list
     * @private
     * @returns {Boolean}
     */
  }, {
    key: '_isAllExpiredEntitiesInContext',
    value: function _isAllExpiredEntitiesInContext() {
      var items = this.$scope.items;

      if (!items) {
        return null;
      }

      var itemsLen = items.length;
      var expiredCount = this.$filter('filter')(items, { '_isExpired': true }).length;

      return itemsLen === expiredCount;
    }
  }], [{
    key: 'directiveFactory',
    value: function directiveFactory($filter) {
      return new SimpleContextList($filter);
    }
  }]);

  return SimpleContextList;
})();

exports['default'] = SimpleContextList;
module.exports = exports['default'];

},{"../view/simple.context.list.html":54}],53:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _directiveSimpleContextList = require('./directive/simple.context.list');

var _directiveSimpleContextList2 = _interopRequireDefault(_directiveSimpleContextList);

var moduleName = 'simple.context.list';

angular.module(moduleName, []).directive('simpleContext', ['$filter', _directiveSimpleContextList2['default'].directiveFactory]);

exports['default'] = moduleName;
module.exports = exports['default'];

},{"./directive/simple.context.list":52}],54:[function(require,module,exports){
(function (global){
(typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null).module('src/app/index.js').run(['$templateCache', function($templateCache){$templateCache.put('simple.context.list.html','<div class="panel-wrapper fixed-search" ng-class="{ \'overbackdrop\': !config.disableContext }"> <div class="panel-name"> <div class="f-left">Context</div> </div> <div class="panel panel-default simple-context-wrapper"> <div class="panel-heading simple-context-controls" ng-show="config.isPresentFilters"> <a class="f-left hidden" ng-class="{ active: !isAllExpiredEntitiesInContext() }" ng-click="showExpired()">Showing expired only</a> <a class="f-right" ng-class="{ active: !isAllEntitiesInContext() }" ng-click="showAll()">Show all</a> </div> <div class="panel-body simple-context-body" ng-full-height-search-list="true"> <loading-indicator ng-if="!(isDataLoaded && isInit)" max-width="88px"></loading-indicator> <div ng-show="isDataLoaded && isInit"> <ul class="simple-context"> <li class="simple-context-item" ng-class="{ active: item.id == activeItem }" ng-repeat="item in items | orderBy: \'name\'" ng-click="config.isClickedRow && clickAction({ id: item.id })"> <span class="simple-context-item-name" title="{{ item.name }}">{{item.name}}</span> <div class="simple-context-item-controls"> <a href="" class="remove" ng-click="removeAction({ item: item })" ng-if="config.isPresentRemoveButton"> <span class="icon icon-remove"></span> </a> <a class="info" ng-click="infoAction({ id: item.id })" ng-if="config.isPresentInfoButton"> <span class="icon icon-info" ng-if="!isValidDate(item.attrs)"></span> <span class="icon-alarm" ng-if="isValidDate(item.attrs)"></span> </a> </div> </li> </ul> <div class="no-selected-msg"> <span ng-show="!isPresentItems() && isItemsAvailable()">No charters selected</span> </div> <div class="no-selected-msg"> <span ng-show="!isItemsAvailable()">You have no charters available</span> </div> </div> </div> </div> </div>')}]);
module.exports = 'simple.context.list.html';
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],55:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var moduleName = 'Spider';

var Spider = (function () {
  function Spider($timeout) {
    _classCallCheck(this, Spider);

    Spider.timeout = $timeout;
    this.restrict = 'EA';
    this.scope = {
      spiderData: '=data',
      components: '='
    };
  }

  _createClass(Spider, [{
    key: 'link',
    value: function link(scope, element, attrs) {
      var cfg = {
        radius: 8,
        defaultHeight: 350,
        defaultWidth: 350,
        factor: 0.75,
        factorLegend: 0.95,
        maxValue: 100,
        radians: 2 * Math.PI,
        axisLabelShift: 15,
        thLabelShift: 35,
        zeroShift: { x: 10, y: 5 },
        posK: [0.4, 0.5, 0.6],
        drawDelay: 300,
        drawDuration: 400,
        red: 0.6,
        yellow: 0.8
      };

      var total = undefined,
          average = undefined;

      var el = d3.select(element[0]);

      var isEmptyObject = function isEmptyObject(obj) {
        return !Object.keys(obj).length;
      };

      var isNullValues = function isNullValues(obj) {
        for (var key in obj) {
          if (obj.hasOwnProperty(key)) {
            if (obj[key] !== null) {
              return false;
            }
          }
        }

        return true;
      };

      function getPosition(i, range, factor, func) {
        factor = typeof factor !== 'undefined' ? factor : 1;
        return range * (1 - factor * func(i * cfg.radians / total));
      }

      function getHorizontalPosition(i, range, factor) {
        return getPosition(i, range, factor, Math.sin);
      }

      function getVerticalPosition(i, range, factor) {
        return getPosition(i, range, factor, Math.cos);
      }

      function getAxisData() {
        var areas = [];

        if (scope.components) {
          var area = [];

          for (var i = 0, len = scope.components.length; i < len; i++) {
            var id = scope.components[i].id;
            var value = 100 * scope.spiderData.values[id] || 0;

            area.push({
              axis: scope.components[i].name,
              value: value
            });
          }

          areas.push(area);
        }

        average = 100 * scope.spiderData.average;

        return areas;
      }

      function drawNoData(position) {
        /*jshint validthis:true */
        this.append('text').classed('spider-no-data', true).text('NO DATA').attr('x', position.x).attr('y', position.y);
      }

      scope.$watch(function (scope) {
        return scope.spiderData;
      }, function (data) {
        return Spider.timeout(function () {
          if (data) {
            scope.render(data);
          }
        }, 0);
      });

      /**
       * Draws spider chart based on "data" parameter
       * @param {Object} data - data form "metrics-on-date" API
       *    Data example:
       *    {
       *      data: {
       *        on_date: 1436227200000,
       *        values: {
       *          '44': 0.663960055004472,
       *          '45': 1,
       *          '47': 0.327920110008945
       *        }
       *      },
       *      index_thresholds: {
       *        'red': 0.6,
       *        'yellow': 0.8
       *      }
       *    }
       * @returns {null}
       */
      scope.render = function (data) {
        if (!data) {
          return null;
        }

        var svg = undefined,
            chart = undefined,
            allAxis = undefined,
            axis = undefined,
            levels = undefined,
            critical = undefined,
            target = undefined;

        /**
         * Converts threshold value to the range 0..100
         * @param {String} type - type of the threshold ('red'|'yellow')
         * @returns {Number}
         * @private
         */
        var _getThreshold = function _getThreshold(type) {
          return 100 * (data.index_thresholds && data.index_thresholds[type] || cfg[type]);
        };

        /**
         * Calculates scaling factor
         * @param {Number} value
         * @returns {Number}
         * @private
         */
        var _calculateFactor = function _calculateFactor(value) {
          return parseFloat(Math.max(value, 0)) / cfg.maxValue * cfg.factor;
        };

        /**
         * Checks whether value is in yellow zone
         * @param {Number} value
         * @returns {Boolean}
         * @private
         */
        var _isTarget = function _isTarget(value) {
          return value <= target && value > critical;
        };

        /**
         * Checks whether value is in red zone
         * @param {Number} value
         * @returns {Boolean}
         * @private
         */
        var _isCritical = function _isCritical(value) {
          return value <= critical;
        };

        critical = _getThreshold('red');
        target = _getThreshold('yellow');
        var width = attrs.width || cfg.defaultWidth;
        var height = attrs.height || cfg.defaultHeight;
        var radius = cfg.factor * Math.min(width / 2, height / 2);
        var newData = getAxisData();

        allAxis = newData[0].map(function (i) {
          return i.axis;
        });
        total = allAxis.length;

        el.select('svg').remove();

        svg = el.append('svg').classed('spider-chart', true).attr({ width: width, height: height });

        chart = svg.append('g');

        levels = [critical, target];

        // drawing axis with labels
        axis = chart.selectAll('.spider-axis').data(allAxis).enter().append('g').classed('spider-axis', true);

        axis.append('line').attr('x1', width / 2).attr('y1', height / 2).attr('x2', function (j, i) {
          return getHorizontalPosition(i, width / 2, cfg.factor);
        }).attr('y2', function (j, i) {
          return getVerticalPosition(i, height / 2, cfg.factor);
        }).classed('axis-line', true);

        axis.append('text').classed('spider-legend', true).text(function (d) {
          return d;
        }).style('text-anchor', function (d, i) {
          var p = getHorizontalPosition(i, cfg.posK[1]);

          return p < cfg.posK[0] ? 'start' : p > cfg.posK[2] ? 'end' : 'middle';
        }).attr('transform', function (d, i) {
          var p = getVerticalPosition(i, height / 2);

          return p < cfg.axisLabelShift ? 'translate(0, ' + (cfg.axisLabelShift - p) + ')' : '';
        }).attr('x', function (d, i) {
          return getHorizontalPosition(i, width / 2, cfg.factorLegend);
        }).attr('y', function (d, i) {
          return getVerticalPosition(i, height / 2, cfg.factorLegend);
        });

        // Temporary commented for future decision about threshold labels
        //chart.append('text')
        //  .classed('spider-legend', true)
        //  .text('0')
        //  .attr('x', width / 2 - cfg.zeroShift.x)
        //  .attr('y', height / 2 - cfg.zeroShift.y);

        if (isEmptyObject(data.values) || isNullValues(data.values)) {
          drawNoData.call(chart, { x: width / 2, y: height / 2 - 2 * cfg.axisLabelShift });

          return null;
        }

        // drawing thresholds with labels

        var _loop = function (j, len) {
          var levelFactor = radius * (levels[j] / cfg.maxValue);

          chart.append('text').classed('spider-legend threshold', true);
          // Temporary commented for future decision about threshold labels
          //.text(`${ levels[j] }%`)
          //.attr('x', width / 2 - cfg.thLabelShift)
          //.attr('y', height / 2 - levelFactor);

          chart.selectAll('.spider-levels').data(allAxis).enter().append('line').attr('x1', function (d, i) {
            return getHorizontalPosition(i, levelFactor);
          }).attr('y1', function (d, i) {
            return getVerticalPosition(i, levelFactor);
          }).attr('x2', function (d, i) {
            return getHorizontalPosition(i + 1, levelFactor);
          }).attr('y2', function (d, i) {
            return getVerticalPosition(i + 1, levelFactor);
          }).classed('spider-line', true).classed('spider-line-critical', function () {
            return critical === levels[j];
          }).classed('spider-line-target', function () {
            return target === levels[j];
          }).attr("transform", 'translate(' + (width / 2 - levelFactor) + ',' + (height / 2 - levelFactor) + ')');
        };

        for (var j = 0, len = levels.length; j < len; j++) {
          _loop(j, len);
        }

        newData.forEach(function (y) {
          var dataValues = [];

          chart.selectAll('.nodes').data(y, function (j, i) {
            dataValues.push([getHorizontalPosition(i, width / 2, _calculateFactor(j.value)), getVerticalPosition(i, height / 2, _calculateFactor(j.value))]);
          });

          dataValues.push(dataValues[0]);

          var spiderArea = chart.append('g');

          spiderArea.selectAll('.spider-area .spider-polygon').data([dataValues]).enter().append('polygon').classed('spider-area spider-polygon', true).attr('points', function (d) {
            var str = '';

            for (var pti = 0; pti < d.length; pti++) {
              str = str + (width / 2 + ',' + height / 2 + ' ');
            }

            return str;
          }).classed('spider-area-target', function () {
            return _isTarget(average);
          }).classed('spider-area-critical', function () {
            return _isCritical(average);
          }).transition().delay(cfg.drawDelay).duration(cfg.drawDuration).attr('points', function (d) {
            var str = '';

            for (var pti = 0; pti < d.length; pti++) {
              str = str + (d[pti][0] + ',' + d[pti][1] + ' ');
            }

            return str;
          });

          spiderArea.append('svg:title').text(function () {
            return average.toFixed(2);
          });
        });

        newData.forEach(function (y) {
          var dataValues = [];

          var circles = chart.append('g').selectAll('.nodes').data(y).enter().append('svg:circle');

          circles.classed('spider-circle', true).attr('r', cfg.radius).attr('alt', function (j) {
            return Math.max(j.value, 0);
          }).attr('cx', width / 2).attr('cy', height / 2).attr('data-id', function (j) {
            return j.axis;
          }).classed('spider-circle-target', function (d) {
            return _isTarget(d.value);
          }).classed('spider-circle-critical', function (d) {
            return _isCritical(d.value);
          }).transition().delay(cfg.drawDelay).duration(cfg.drawDuration).attr('cx', function (j, i) {
            dataValues.push([getHorizontalPosition(i, width / 2, _calculateFactor(j.value)), getVerticalPosition(i, height / 2, _calculateFactor(j.value))]);

            return getHorizontalPosition(i, width / 2, _calculateFactor(j.value));
          }).attr('cy', function (j, i) {
            return getVerticalPosition(i, height / 2, _calculateFactor(j.value));
          });

          circles.append('svg:title').text(function (d) {
            return d.value.toFixed(2);
          });
        });
      };
    }
  }], [{
    key: 'directiveFactory',
    value: function directiveFactory($timeout) {
      return new Spider($timeout);
    }
  }]);

  return Spider;
})();

Spider.directiveFactory.$inject = ['$timeout'];

angular.module(moduleName, []).directive('spider', Spider.directiveFactory);

exports['default'] = moduleName;
module.exports = exports['default'];

},{}],56:[function(require,module,exports){
(function (global){
"use strict";

/***************

 This service makes call to API /api/status
 Returns current session status

 Response data format:

 {
    "authenticated": true (session is active) | false(session is expired) | seconds (time before expiration),
 }

 ***************/

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null);

var _angular2 = _interopRequireDefault(_angular);

var moduleName = 'status.service';

/*@ngInject*/

var StatusService = (function () {
  StatusService.$inject = ["$http"];
  function StatusService($http) {
    _classCallCheck(this, StatusService);

    this.$http = $http;
    this.url = 'api/status';
  }

  /**
   * Makes call to API
   * @returns {Promise}
   */

  _createClass(StatusService, [{
    key: 'getStatus',
    value: function getStatus() {
      return this.$http.get(this.url);
    }

    /**
     * Sends empty POST request to prolong session's life
     * @returns {Promise}
     */
  }, {
    key: 'refreshStatus',
    value: function refreshStatus() {
      return this.$http.post(this.url);
    }
  }]);

  return StatusService;
})();

_angular2['default'].module(moduleName, []).service('StatusService', StatusService);

exports['default'] = moduleName;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],57:[function(require,module,exports){
"use strict";

/***************

 This directive add quick filter in context

 Possible definition:

 <teams-context-filter data="data"></teams-context-filter>

 data - list of all entities


 To add it to your module make the following

 import TeamsContextFilter from 'components/teams-context-filter';

 and add it to dependency

 angular.module(moduleName, [..., TeamsContextFilter, ...])

 ***************/

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

require('./view/teams.context.filter.html');

var _componentsAppContextService = require('components/app-context-service');

var _componentsAppContextService2 = _interopRequireDefault(_componentsAppContextService);

/*@ngInject*/
var moduleName = 'teams.context.filter';

var TeamsContextFilter = (function () {
  function TeamsContextFilter(AppContext) {
    var _this = this;

    _classCallCheck(this, TeamsContextFilter);

    this.appContext = AppContext;
    this.restrict = 'E';
    this.templateUrl = 'teams.context.filter.html';
    this.scope = {
      data: '='
    };

    this.link = function (scope) {
      return _this._link(scope);
    };
  }

  _createClass(TeamsContextFilter, [{
    key: '_link',
    value: function _link(scope) {
      var _this2 = this;

      var unwatchAppContext = scope.$watch(function () {
        return scope.data;
      }, function (newVal) {
        if (newVal) {
          scope.active = _this2._getByStatus(newVal, 'active');
          scope.closed = _this2._getByStatus(newVal, 'closed');
          scope.newTeams = _this2._getByStatus(newVal, 'new');
        }
      });

      /**
       * Adds entities in the context list
       * @param {Sting} status - charters status (active|inactive|expired|all)
       * @returns
       */
      scope.add = function (status) {
        if (scope.hasOwnProperty(status)) {
          _this2.appContext.setSelectedEntities({
            checked: scope[status]
          });
        }

        if (status === 'all') {
          _this2.appContext.updateSelectedEntities(scope.data.map(function (item) {
            return item.id;
          }));
        }
      };

      scope.$on('$destroy', function () {
        unwatchAppContext();
      });
    }

    /**
     * Returns entities by selected status
     * @param {Array} data - entities list
     * @param {String} status - entity status
     * @returns {NULL|Array}
     * @private
     */
  }, {
    key: '_getByStatus',
    value: function _getByStatus(data, status) {
      if (!data) {
        return null;
      }

      var result = [];

      for (var i = 0; i < data.length; i++) {
        if (data[i].status && data[i].status.toLowerCase() === status) {
          result.push(data[i].id);
        }
      }

      return result;
    }
  }], [{
    key: 'directiveFactory',
    value: function directiveFactory(AppContext) {
      return new TeamsContextFilter(AppContext);
    }
  }]);

  return TeamsContextFilter;
})();

angular.module(moduleName, []).directive('teamsContextFilter', ['AppContext', TeamsContextFilter.directiveFactory]);

exports['default'] = moduleName;
module.exports = exports['default'];

},{"./view/teams.context.filter.html":58,"components/app-context-service":12}],58:[function(require,module,exports){
(function (global){
(typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null).module('src/app/index.js').run(['$templateCache', function($templateCache){$templateCache.put('teams.context.filter.html','<div> No teams selected. <br> You have <a ng-if="data.length" ng-click="add(\'all\')">{{ data.length }} teams</a> . There are <a ng-if="active.length" ng-click="add(\'active\')">{{ active.length }} active</a> <span ng-if="!active.length">0 active</span> , <br> <a ng-if="closed.length" ng-click="add(\'closed\')">{{ closed.length }} closed</a> <span ng-if="!closed.length">0 closed</span> and <a ng-if="newTeams.length" ng-click="add(\'newTeams\')">{{ newTeams.length }} new</a> <span ng-if="!newTeams.length">0 new</span> . </div>')}]);
module.exports = 'teams.context.filter.html';
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],59:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null);

var _angular2 = _interopRequireDefault(_angular);

var _jquery = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

var _jquery2 = _interopRequireDefault(_jquery);

var moduleName = 'hierarchy.tree-control';

/**
 * This directive provides control over the angular-ui-tree trees.
 * Basically it allows to invoke methods exposed by ui-tree directive's controller.
 *
 * The directive requires to arguments:
 *  action: scope method to call;
 *  selector: a DOM selector string which returns elements with ui-tree directive attached.
 *
 * Exapmle:
 * <a ad-tree-control="expandAll" tree-root-selector=".ad-treeview-wrapper" href="#" >EXPAND ALL</a>
 *
 * somewhere else in a template:
 * <div ui-tree data-drag-enabled="false" class="ad-treeview-wrapper">
 *   ....
 * </div>
 *
 * IMPORTANT: this directive touches DOM elements outside of its element, but this is acceptable in this case
 * bacause the directive just reads scope and doesn't do any DOM manipulation. A more correct way is to have
 * a service for this purpose, but that is an overkill.
 */

var TreeControl = (function () {
  function TreeControl() {
    var _this = this;

    _classCallCheck(this, TreeControl);

    this.restrict = 'A';
    this.scope = {
      action: '@adTreeControl',
      selector: '@treeRootSelector'
    };

    this.link = function (scope, element, attrs) {
      return _this._link(scope, element, attrs);
    };
  }

  _createClass(TreeControl, [{
    key: '_link',
    value: function _link(scope, element, attrs) {
      (0, _jquery2['default'])(element).on('click', function (e) {
        e.preventDefault();

        (0, _jquery2['default'])(scope.selector).toArray().forEach(function (el) {
          var treeScope = _angular2['default'].element(el).scope();

          if (_angular2['default'].isFunction(treeScope[scope.action])) {
            treeScope[scope.action]();
          }
        });

        scope.$apply();

        return false;
      });
    }
  }], [{
    key: 'directiveFactory',
    value: function directiveFactory() {
      return new TreeControl();
    }
  }]);

  return TreeControl;
})();

_angular2['default'].module(moduleName, []).directive('adTreeControl', TreeControl.directiveFactory);

exports['default'] = moduleName;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],60:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var moduleName = 'TrendChart';

var TrendChart = (function () {
  function TrendChart($timeout) {
    _classCallCheck(this, TrendChart);

    TrendChart.timeout = $timeout;
    this.restrict = 'EA';
    this.scope = {
      data: '=data'
    };
  }

  _createClass(TrendChart, [{
    key: 'link',
    value: function link(scope, element, attrs) {
      var resizeTimer = undefined;

      var cfg = {
        defaultHeight: 320,
        drawDelay: 300,
        drawDuration: 400,
        drawValueDelay: function drawValueDelay() {
          return cfg.drawDelay + cfg.drawDuration;
        },
        defaultRange: [0, 1],
        axisLabelIndent: 50,
        axisLabelRotate: 90,
        circleRadius: 8,
        labelSize: 18,
        labelOffset: { x: 10, y: 8 },
        yellow: 0.8,
        red: 0.6,
        mainTrendColor: '333333',
        windowWidth: { min: 1366, max: 1920 },
        labelsApproxCount: { min: 8, max: 18 },
        stopResizing: false,
        daysBetweenPeriods: { min: 2, mediana: 3, max: 5 }
      };

      scope.$watch('data', function (data) {
        return TrendChart.timeout(function () {
          return scope.render(data);
        }, 0);
      });

      d3.select(window).on('resize.trend', function () {
        clearTimeout(resizeTimer);

        resizeTimer = setTimeout(function () {
          if (window.innerWidth > cfg.windowWidth.min) {
            scope.render(scope.data, false);

            cfg.stopResizing = false;
          } else if (!cfg.stopResizing) {
            scope.render(scope.data, false);

            cfg.stopResizing = true;
          }
        }, 50);
      });

      scope.$on('$destroy', function () {
        return d3.select(window).on('resize.trend', null);
      });

      scope.render = function (data) {
        var enableAnimation = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

        if (!data) {
          return null;
        }

        var x = undefined,
            y = undefined,
            tickValues = undefined,
            lStep = undefined;
        var xMonths = [];

        var margin = {
          top: 10,
          bottom: 40,
          left: 60,
          right: 60
        };

        var padding = {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        };

        var formatDate = d3.time.format('%b %d');
        var xFormatFullDate = d3.time.format('%b %d\'%y');

        var width = attrs.width || scope._getParentWidth(element);
        var height = attrs.height || cfg.defaultHeight;
        var w = width - margin.left - margin.right;
        var h = height - margin.top - margin.bottom;

        /**
         * Gets threshold value by type
         * @param {String} type - type of the threshold ('red'|'yellow')
         * @param {Object} thresholds - contains red and yellow thresholds from response
         * @returns {Number}
         * @private
         */
        var _getThreshold = function _getThreshold(type, thresholds) {
          return thresholds && thresholds[type] || cfg[type];
        };

        /**
         * Gets window width. As we support cfg.windowWidth.min === 1366 if the width is less than minimal width
         * method will always return cfg.windowWidth.min
         * @returns {Number}
         */
        var getWindowWidth = function getWindowWidth() {
          return window.innerWidth > cfg.windowWidth.min ? window.innerWidth : cfg.windowWidth.min;
        };

        /**
         * Calculates average between minimum and maximum supported width
         * @returns {Number}
         */
        var getAverageWidth = function getAverageWidth() {
          return (cfg.windowWidth.max + cfg.windowWidth.min) / 2;
        };

        /**
         * Calculates the number of labels which can be fitted on x axis based on approximate values
         * @param {Object} range - contains approximate quantity (min and max) of the labels which can
         * be fitted on X axis
         * @returns {Number}
         */
        var getLabelsCount = function getLabelsCount(range) {
          var width = getWindowWidth();
          var mediana = getAverageWidth();
          var minCount = Math.round(width * range.min / cfg.windowWidth.min);
          var maxCount = Math.round(width * range.max / cfg.windowWidth.max);

          if (width <= mediana) {
            return minCount;
          }

          if (width > cfg.windowWidth.max) {
            return maxCount;
          }

          return Math.round((minCount + maxCount) / 2);
        };

        /**
         * Calculates step to the next period to avoid overlapping
         * @param {Object} range - contains approximate quantity (min and max) of the labels which can
         * be fitted on X axis
         * @returns {Number}
         */
        var getStep = function getStep(range) {
          return Math.round(data.metrics.length / getLabelsCount(range)) || 1;
        };

        /**
         * Creates the list of dates which should be shown on X axis.
         * If days between dates less then specified number the last one will be skipped.
         * @returns {Array} dates list
         */
        var getTickValues = function getTickValues() {
          /**
           * Calculates days between two dates
           * @param {Date} start - start date
           * @param {Date} end - end date
           * @returns {number} number of days
           */
          var daysBetween = function daysBetween(start, end) {
            var oneDay = 24 * 60 * 60 * 1000;

            return Math.round(Math.abs((end.getTime() - start.getTime()) / oneDay));
          };

          var width = getWindowWidth();
          var mediana = getAverageWidth();
          var dates = data.metrics.map(function (item) {
            return new Date(item.date);
          });
          var isMinLabelsCount = dates.length <= cfg.labelsApproxCount.min;
          var daysBetweenPeriods = isMinLabelsCount ? cfg.daysBetweenPeriods.min : cfg.daysBetweenPeriods.max;

          if (width < mediana && isMinLabelsCount) {
            daysBetweenPeriods = cfg.daysBetweenPeriods.mediana;
          }

          if (daysBetween(dates[0], dates[1]) <= daysBetweenPeriods) {
            dates.shift();
          }

          if (daysBetween(dates[dates.length - 2], dates[dates.length - 1]) <= daysBetweenPeriods) {
            dates.pop();
          }

          return dates;
        };

        var yAxisValues = function yAxisValues(d, i, tickLength) {
          var result = '';

          if (i % 2 === 0) {
            result += d * 100;

            if (i === tickLength[0]) {
              result += '%';
            }
          }

          return result;
        };

        /**
         * Draws labels which indicates threshold values
         */
        var _drawThresholdLabel = function _drawThresholdLabel(chart, coord, value, type) {
          // label's rect
          var rect = { h: 14, w: 24 };
          var halfH = rect.h / 2;
          var label = chart.append('g');

          label.classed('kpi-threshold-label', true);

          label.append('rect').attr('x', coord.x + halfH).attr('y', coord.y - halfH).attr('width', rect.w).attr('height', rect.h).classed(type, true);

          label.append('circle').attr('cx', coord.x + halfH).attr('cy', coord.y).attr('r', halfH).classed(type, true);

          label.append('circle').attr('cx', coord.x + rect.w + halfH).attr('cy', coord.y).attr('r', halfH).classed(type, true);

          label.append('text').attr('x', coord.x + rect.w / 2 + halfH).attr('y', coord.y + Math.ceil(halfH / 2)).text(Math.round(100 * value) + '%');
        };

        var _addThresholdLine = function _addThresholdLine(chart, value, type) {
          var yCoord = y(value);
          var style = type === 'red' ? 'threshold-critical' : 'threshold-target';

          chart.append('line').attr('class', style).attr('x1', 0).attr('y1', yCoord).attr('x2', w).attr('y2', yCoord);

          _drawThresholdLabel(chart, { x: w, y: yCoord }, value, type);
        };

        var el = d3.select(element[0]);

        var critical = _getThreshold('red', data.index_thresholds);
        var target = _getThreshold('yellow', data.index_thresholds);

        x = d3.time.scale().range([0, w]);
        y = d3.scale.linear().range([h, 0]);

        var yAxisL = d3.svg.axis().scale(y).tickFormat(function (d, i) {
          return yAxisValues(d, i, yAxisL.ticks());
        }).orient('left');

        var yAxisR = d3.svg.axis().scale(y).tickFormat(function (d, i) {
          return yAxisValues(d, i, yAxisR.ticks());
        }).orient('right');

        var yGridLine = d3.svg.axis().scale(y).tickSize(-w, 0, 0).tickFormat('').orient('left');

        el.select('svg').remove();

        var svg = el.append('svg').classed('trend-chart', true).attr({ width: width, height: height });

        var chart = svg.append('g').classed('margin', true).attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')').append('g').classed('padding', true).attr('transform', 'translate(' + padding.left + ', ' + padding.top + ')');

        chart.append('g').call(yGridLine).classed('grid-line', true).attr('transform', 'translate(0,0)');

        chart.append('g').classed('y axis', true).attr('transform', 'translate(0,0)').call(yAxisL);

        chart.select('.y.axis').append('text').classed('y-axis-label', true).attr('x', 0).attr('y', 0).style('text-anchor', 'middle').attr('transform', 'translate(-' + cfg.axisLabelIndent + ',' + h / 2 + ') rotate(-' + cfg.axisLabelRotate + ')');

        chart.append('g').classed('y axis', true).attr('transform', 'translate(' + w + ',0)').call(yAxisR);

        _addThresholdLine(chart, critical, 'red');
        _addThresholdLine(chart, target, 'yellow');

        if (!data.dataExists || !data.metrics.length) {
          chart.append('text').classed('no-data', true).attr('transform', 'translate(' + w / 2 + ',' + h / 2 + ')').text('NO DATA');

          return null;
        }

        lStep = getStep(cfg.labelsApproxCount);
        tickValues = getTickValues();

        var _getColor = function _getColor(key) {
          return data.legend[key].color;
        };

        var xAxis = d3.svg.axis().scale(x).tickValues(tickValues).tickSize(0).orient('bottom').tickFormat(function (d, i) {
          var prevMonth = undefined;
          var date = new Date(d);
          var currMonth = date.getMonth();

          prevMonth = xMonths.length > 0 ? xMonths[xMonths.length - 1] : -1;

          if ((i + 1) % lStep === 0) {
            xMonths.push(currMonth);

            return currMonth === 0 && currMonth !== prevMonth ? xFormatFullDate(date) : formatDate(date);
          }

          return ' ';
        });

        var chartLine = d3.svg.line().interpolate('basis').x(function (d) {
          return x(d.date);
        }).y(function (d) {
          return y(parseFloat(d.index));
        });

        var metricIds = d3.keys(data.metrics[0].values).map(function (id) {
          return +id;
        });
        var indexOfDataId = metricIds.indexOf(data.id);

        if (metricIds[indexOfDataId] !== metricIds.length - 1) {
          metricIds[indexOfDataId] = metricIds[metricIds.length - 1];
          metricIds[metricIds.length - 1] = data.id;
        }

        var chartData = {};
        var itemLength = data.metrics.length;

        metricIds.forEach(function (metricId) {
          var lineData = [];
          var j = 0;
          var progressData = false;
          var progressNotData = false;
          var next = null;

          for (var i = 0; itemLength > i; i++) {
            if (data.metrics[i].values[metricId] !== null) {
              progressData = true;

              if (progressNotData) {
                progressNotData = false;
                j++;
              }

              next = data.metrics[i + 1];

              if (!lineData[j]) {
                lineData[j] = [];
              }

              lineData[j].push({
                date: data.metrics[i].date,
                index: data.metrics[i].values[metricId]
              });

              if (next && next.values[metricId] === null) {
                var nextDate = new Date(next.date);
                nextDate.setDate(nextDate.getDate() - 1);

                lineData[j].push({
                  date: nextDate.getTime(),
                  index: data.metrics[i].values[metricId]
                });
              }
            } else {
              progressNotData = true;

              if (progressData) {
                progressData = false;
                j++;
              }

              if (!lineData[j] && lineData[j] !== 0) {
                lineData[j] = -1;
              }

              lineData[j] = lineData[j] + 1;
            }
          }

          chartData[metricId] = lineData;
        });

        x.domain(d3.extent(data.metrics, function (d) {
          return d.date;
        }));
        y.domain(cfg.defaultRange);

        chart.append('g').classed('x axis', true).attr('transform', 'translate(0,' + h + ')').call(xAxis).selectAll('text').attr('dy', '1.5em');

        chart.append('line').classed('zero-line', true).attr('x1', 0).attr('y1', y(0)).attr('x2', w).attr('y2', y(0));

        var timePerItem = cfg.drawDuration / itemLength;

        var _drawTrendLine = function _drawTrendLine(points, metricId, delay, duration) {
          var trendLine = chart.append('path').datum(points).attr('d', function (d) {
            return chartLine(d);
          }).classed('line', true).classed('main', metricId === data.id).classed('hideLine', true).style('stroke', _getColor(metricId));

          var generateLine = function generateLine() {
            trendLine.classed('hideLine', false);

            var path = trendLine[0][0];
            var l = path.getTotalLength();
            var i = d3.interpolate('0,' + l, l + ',' + l);

            return function (t) {
              return i(t);
            };
          };

          if (enableAnimation) {
            trendLine.transition().delay(delay).duration(duration).ease("linear").attrTween('stroke-dasharray', generateLine);
          } else {
            trendLine.classed('hideLine', false);
          }
        };

        metricIds.forEach(function (id) {
          var delay = cfg.drawDelay;
          var duration = 0;
          var incrementDelay = 0;

          chartData[id].forEach(function (segment) {
            if (!segment.length) {
              incrementDelay = segment * timePerItem;
            } else {
              delay = delay + duration + incrementDelay;
              incrementDelay = 0;
              duration = segment.length * timePerItem;

              _drawTrendLine(segment, id, delay, duration);
            }
          });
        });

        var mainTrendData = chartData[data.id];

        var lastMainTrendSegment = mainTrendData[mainTrendData.length - 1];
        var lastPoint = null;

        if (lastMainTrendSegment.length) {
          lastPoint = lastMainTrendSegment[lastMainTrendSegment.length - 1];
        }

        if (lastPoint) {
          (function () {
            var lastDate = lastPoint.date;
            var lastIndex = lastPoint.index;
            var valueStr = Math.round(lastIndex * 100) + '%';

            var circle = chart.append('circle').classed('circle', lastIndex > target).classed('circle-target', function () {
              return lastIndex > critical && lastIndex <= target;
            }).classed('circle-critical', function () {
              return lastIndex <= critical;
            }).attr('r', 0).attr('cx', x(lastDate)).attr('cy', y(lastIndex));

            circle.append('svg:title').text(valueStr);

            var label = chart.append('text').classed('value', true).text(valueStr).attr('x', x(lastDate) + cfg.labelOffset.x).attr('y', y(lastIndex) + cfg.labelOffset.y).attr('font-size', 0);

            if (enableAnimation) {
              circle.transition().delay(cfg.drawValueDelay()).duration(cfg.drawDuration).ease('linear').attr('r', cfg.circleRadius);

              label.transition().delay(cfg.drawValueDelay()).duration(cfg.drawDuration).ease('cubic-out').attr('font-size', cfg.labelSize);
            } else {
              circle.attr('r', cfg.circleRadius);
              label.attr('font-size', cfg.labelSize);
            }
          })();
        }
      };

      scope._getParentWidth = function (element) {
        if (!element.length) {
          return 0;
        }
        return element.parent().width();
      };
    }
  }], [{
    key: 'directiveFactory',
    value: function directiveFactory($timeout) {
      return new TrendChart($timeout);
    }
  }]);

  return TrendChart;
})();

TrendChart.directiveFactory.$inject = ['$timeout'];

angular.module(moduleName, []).directive('trendChart', TrendChart.directiveFactory);

exports['default'] = moduleName;
module.exports = exports['default'];

},{}],61:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

require('./trend-legend.html');

var moduleName = 'TrendLegend';

var TrendLegend = (function () {
  function TrendLegend() {
    _classCallCheck(this, TrendLegend);

    this.restrict = 'EA';
    this.templateUrl = 'trend-legend.html';
    this.scope = {
      data: '=',
      label: '@',
      onClick: '&'
    };
  }

  _createClass(TrendLegend, null, [{
    key: 'directiveFactory',
    value: function directiveFactory() {
      return new TrendLegend();
    }
  }]);

  return TrendLegend;
})();

TrendLegend.directiveFactory.$inject = [];

angular.module(moduleName, []).directive('trendLegend', TrendLegend.directiveFactory);

exports['default'] = moduleName;
module.exports = exports['default'];

},{"./trend-legend.html":62}],62:[function(require,module,exports){
(function (global){
(typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null).module('src/app/index.js').run(['$templateCache', function($templateCache){$templateCache.put('trend-legend.html','<div class="trend-chart"> <ul class="legend"> <li class="legend-item" ng-repeat="item in data"> <div class="legend-line" style="background: {{ item.color }}"></div> <span class="legend-text">{{ item.name }}</span> </li> </ul> </div>')}]);
module.exports = 'trend-legend.html';
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],63:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

require('./trend.html');

var _trendController = require('./trend.controller');

var _trendController2 = _interopRequireDefault(_trendController);

var _componentsTrendChart = require('./components/trend-chart');

var _componentsTrendChart2 = _interopRequireDefault(_componentsTrendChart);

var _componentsTrendLegend = require('./components/trend-legend');

var _componentsTrendLegend2 = _interopRequireDefault(_componentsTrendLegend);

var moduleName = 'ngTrend';

var Trend = (function () {
  function Trend() {
    _classCallCheck(this, Trend);

    this.restrict = 'EA';
    this.templateUrl = 'trend.html';
    this.controller = _trendController2['default'];
    this.controllerAs = 'Trend';
    this.scope = {
      data: '='
    };
  }

  _createClass(Trend, [{
    key: 'link',
    value: function link(scope, element, attrs, controller) {

      scope.$watch('data', function (data) {
        if (data) {
          controller.bind(data);
        }
      });
    }
  }], [{
    key: 'directiveFactory',
    value: function directiveFactory() {
      return new Trend();
    }
  }]);

  return Trend;
})();

angular.module(moduleName, [_componentsTrendChart2['default'], _componentsTrendLegend2['default']]).directive('trend', Trend.directiveFactory).controller('TrendCtrl', _trendController2['default']);

exports['default'] = moduleName;
module.exports = exports['default'];

},{"./components/trend-chart":60,"./components/trend-legend":61,"./trend.controller":64,"./trend.html":65}],64:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var TrendCtrl = (function () {
  function TrendCtrl($scope) {
    _classCallCheck(this, TrendCtrl);

    this.scope = $scope;

    this.trendData = null;
    this.trendLegendData = null;
  }

  _createClass(TrendCtrl, [{
    key: 'bind',
    value: function bind() {
      this.trendData = this.scope.data;
      this.trendLegendData = this.scope.data.legend;
    }
  }]);

  return TrendCtrl;
})();

TrendCtrl.$inject = ['$scope'];

exports['default'] = TrendCtrl;
module.exports = exports['default'];

},{}],65:[function(require,module,exports){
(function (global){
(typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null).module('src/app/index.js').run(['$templateCache', function($templateCache){$templateCache.put('trend.html','<div> <trend-chart data="Trend.trendData"></trend-chart> <trend-legend data="Trend.trendLegendData"></trend-legend> </div>')}]);
module.exports = 'trend.html';
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],66:[function(require,module,exports){
"use strict";

/***************

 This filter searches the pattern matches in the string from the beginning of each word
 and wraps this matches into tag <strong>.

 ***************/

Object.defineProperty(exports, '__esModule', {
  value: true
});
var moduleName = 'typeaheadCustomHighlight.filter';

var TypeaheadCustomHighlight = function TypeaheadCustomHighlight() {

  /**
   * Escape regexp special characters
   * @param {String} queryToEscape - string to escaping
   * @returns {String} - Escaped string
   */
  var escapeQuery = function escapeQuery(queryToEscape) {
    return '' + queryToEscape.replace(/[.?*+^$[\]\\(){}|-]/g, '\\$&');
  };

  /**
   * Highlights matchings in the string using pattern
   * @param {String} item - source text
   * @param {String} query - search pattern
   * @returns {String} -String highlighting matches
   */
  return function (item, query) {
    var pattern = new RegExp('\\b' + escapeQuery(query), 'gi');

    return query ? ('' + item).replace(pattern, '<strong>$&</strong>') : item;
  };
};

angular.module(moduleName, []).filter('typeaheadCustomHighlight', TypeaheadCustomHighlight);

exports['default'] = moduleName;
module.exports = exports['default'];

},{}],67:[function(require,module,exports){
'use strict';

/***************

 This service provides tools for working with URL parameters.
 Works via Angular $state service.

 If you want to work with URL parameters just inject UrlParams service
 into your module. For instance:

 class yourClass {
     constructor (UrlParams) {
       UrlParams.setParameter('userId', 'guest'); // result => http://localhost/#/view?userId=guest

       UrlParams.getParameter('userId'); // result => 'guest'
     }
   }

 ***************/

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var moduleName = 'url.params.service';

var UrlParams = (function () {
  /*@ngInject*/

  UrlParams.$inject = ["$state"];
  function UrlParams($state) {
    _classCallCheck(this, UrlParams);

    this.state = $state;
  }

  /**
   * Sets value as URL parameter
   * @param {String} name - property name
   * @param {String} value - serialized value
   */

  _createClass(UrlParams, [{
    key: 'setParameter',
    value: function setParameter(name, value) {
      this.state.params[name] = value;

      if (this.state.$current.name) {
        this.state.go(this.state.$current.name, this.state.params, { reload: false, notify: false });
      }
    }

    /**
     * Returns URL parameter by name
     * @param {String} name - property name
     * @returns {String|undefined}
     */
  }, {
    key: 'getParameter',
    value: function getParameter(name) {
      return this.state.params[name];
    }

    /**
     * Returns state includes
     * @returns {Object}
     */
  }, {
    key: 'getIncludes',
    value: function getIncludes() {
      return this.state.$current.includes;
    }
  }], [{
    key: 'serviceFactory',
    value: function serviceFactory($state) {
      return new UrlParams($state);
    }
  }]);

  return UrlParams;
})();

angular.module(moduleName, ['ui.router']).factory('UrlParams', UrlParams.serviceFactory);

exports['default'] = moduleName;
module.exports = exports['default'];

},{}],68:[function(require,module,exports){
"use strict";

/***************

 This filter filters users list by pattern

 ***************/

Object.defineProperty(exports, '__esModule', {
  value: true
});
var UserFilter = function UserFilter() {

  /**
   * Escape regexp special characters
   * @param {String} queryToEscape - string to escaping
   * @returns {String} - Escaped string
   */
  var escapeQuery = function escapeQuery(queryToEscape) {
    return '' + queryToEscape.replace(/[.?*+^$[\]\\(){}|-]/g, '\\$&');
  };

  /**
   * Filters array using pattern
   * @param {Array} items - input array
   *  Example:
   *    items = [{
   *      name: 'Ivan Ivanov',
   *      loginL 'iivan'
   *    }]
   *
   * @param {String} query - filtered pattern
   * @returns {Array}
   */
  return function (items, query) {
    var outPut = [];

    if (items) {
      var pattern = new RegExp('\\b' + escapeQuery(query), 'gi');

      for (var i = 0; i < items.length; i++) {
        if (items[i].name.match(pattern) || items[i].uid.match(pattern)) {
          outPut.push(items[i]);
        }
      }
    }

    return outPut;
  };
};

exports['default'] = UserFilter;
module.exports = exports['default'];

},{}],69:[function(require,module,exports){
(function (global){
"use strict";

/***************

 This service makes call to API `/api/users`

 Example of response format:
   [{
     name: 'Sveta Loboda',
     login: 'slob'
   }]

 ***************/

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null);

var _angular2 = _interopRequireDefault(_angular);

var _filterUsersFilter = require('./filter/users-filter');

var _filterUsersFilter2 = _interopRequireDefault(_filterUsersFilter);

var moduleName = 'users.service';

/*@ngInject*/

var UsersService = (function () {
  UsersService.$inject = ["$http"];
  function UsersService($http) {
    _classCallCheck(this, UsersService);

    this.$http = $http;
  }

  /**
   * Makes call to API users
   * @returns {Array} Users list
   */

  _createClass(UsersService, [{
    key: 'getUsersData',
    value: function getUsersData() {
      return this.$http.get('/api/users/staff');
    }
  }]);

  return UsersService;
})();

_angular2['default'].module(moduleName, []).service('UsersService', UsersService).filter('usersFilter', _filterUsersFilter2['default']);

exports['default'] = moduleName;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./filter/users-filter":68}],70:[function(require,module,exports){
(function (global){
"use strict";

/***************

 This service provides the set of useful functions

 ***************/

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null);

var _angular2 = _interopRequireDefault(_angular);

var moduleName = 'utils.service';

/*@ngInject*/

var UtilsService = (function () {
  UtilsService.$inject = ["$sce"];
  function UtilsService($sce) {
    _classCallCheck(this, UtilsService);

    this.$sce = $sce;
  }

  /**
   * FF and Chrome supports different date string format.
   * yyyy-MM-dd hh:mm:ss.msec is invalid format for FF and valid for Chrome.
   * This function replaces '-' with '/' and cuts milliseconds to make it valid for FF.
   * @param {String} time
   * @returns {*}
   */

  _createClass(UtilsService, [{
    key: 'adoptTime',
    value: function adoptTime(time) {
      time = time.split('.')[0];
      time = time.replace(/-/g, '/');

      return time;
    }

    /**
     * Checks whether date is already expired or not
     * @param {String} date
     */
  }, {
    key: 'isDateStillValid',
    value: function isDateStillValid(date) {
      var current = new Date();
      var valid = new Date(date);

      if (isNaN(valid.getTime())) {
        return null;
      }

      valid.setDate(valid.getDate() + 1);

      return current.getTime() < valid.getTime();
    }

    /**
     * Highlights matching in string
     * @param {String} text - text
     * @param {String} term - term highlight
     * @returns {TrustedValueHolderType}
     */
  }, {
    key: 'highlight',
    value: function highlight(text, term) {
      if (!text) {
        return null;
      }

      if (!term) {
        return this.$sce.trustAsHtml(text);
      }

      var pattern = (term + '').replace(/[.?*+^$[\]\\(){}|-]/g, '\\$&');

      return this.$sce.trustAsHtml(text.replace(new RegExp(pattern, 'gi'), '<span class="highlightedText">$&</span>'));
    }
  }]);

  return UtilsService;
})();

_angular2['default'].module(moduleName, []).service('UtilsService', UtilsService);

exports['default'] = moduleName;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],71:[function(require,module,exports){
'use strict';

/*@ngInject*/
Object.defineProperty(exports, '__esModule', {
  value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var CommitsArchiveCtrl = (function () {
  function CommitsArchiveCtrl($scope, uiGridConstants, templates, $sce, CommitsArchiveService, UtilsService, $uibModal) {
    var _this = this;

    _classCallCheck(this, CommitsArchiveCtrl);

    this.$scope = $scope;
    this.$sce = $sce;
    this.uiGridConstants = uiGridConstants;
    this.CommitsArchiveService = CommitsArchiveService;
    this.$modal = $uibModal;

    this._emptyValue = '-';

    var archiveTemplates = {
      commit_date: 'committed-date.html',
      closed: 'closed-col-template.html'
    };
    var rowHeight = 30;
    var pivotHeaderHeight = 80;
    var month = {
      q1: 0,
      q2: 3,
      q3: 6,
      q4: 9,
      jan: 0,
      feb: 1,
      mar: 2,
      apr: 3,
      may: 4,
      jun: 5,
      jul: 6,
      aug: 7,
      sep: 8,
      oct: 9,
      nov: 10,
      dec: 11
    };

    $scope.gridDataLen = 0;

    var _highlightFilteredHeader = function _highlightFilteredHeader(row, rowRenderIndex, col, colRenderIndex) {
      return col.filters[0].term ? 'header-filtered' : '';
    };

    /**
     * Return style for pivot table
     */
    $scope.getStyle = function () {
      // we have to consider dividers with height 1px which appears after every 3 rows
      // that's why we have to add $scope.data.length / 3 to get correct height
      if ($scope.data.length) {
        return {
          height: $scope.data.length * rowHeight + pivotHeaderHeight + $scope.data.length / 3 + 'px'
        };
      }
    };

    //Convert period name to timestamp
    var _parsePeriod = function _parsePeriod(period) {
      var _period$split = period.split(', ');

      var _period$split2 = _slicedToArray(_period$split, 2);

      var quarter = _period$split2[0];
      var year = _period$split2[1];

      return new Date(year, month[quarter.toLowerCase()], 1).getTime();
    };

    /**
     * Create table config
     * @param {Array} data
     * @private
     */
    var _createTableCfg = function _createTableCfg(data) {
      return {
        onRegisterApi: function onRegisterApi(gridApi) {
          return $scope.gridApi = gridApi;
        },
        enableFiltering: true,
        enableSorting: true,
        enableHorizontalScrollbar: _this.uiGridConstants.scrollbars.NEVER,
        enableVerticalScrollbar: _this.uiGridConstants.scrollbars.NEVER,
        minRowsToShow: data.length,
        columnDefs: [{
          field: 'account',
          name: 'Account',
          pinned: true,
          headerCellTemplate: templates.header,
          filter: {
            placeholder: 'Search'
          },
          sort: {
            direction: _this.uiGridConstants.ASC,
            priority: 1
          },
          headerCellClass: _highlightFilteredHeader,
          cellTemplate: templates.cell,
          cellClass: _highlightFilteredHeader,
          maxWidth: 320
        }, {
          field: 'charter_name',
          name: 'Charter Name',
          pinned: true,
          headerCellTemplate: templates.header,
          filter: {
            placeholder: 'Search'
          },
          headerCellClass: _highlightFilteredHeader,
          cellTemplate: templates.cell,
          cellClass: _highlightFilteredHeader
        }, {
          field: 'period',
          name: 'Period',
          pinned: true,
          headerCellTemplate: templates.header,
          filter: {
            placeholder: 'Search'
          },
          headerCellClass: _highlightFilteredHeader,
          cellTemplate: templates.cell,
          cellClass: _highlightFilteredHeader,
          sortingAlgorithm: function sortingAlgorithm(a, b, rowA, rowB, direction) {
            return _parsePeriod(a) > _parsePeriod(b) ? 1 : -1;
          },
          width: 110
        }, {
          field: 'commit_date',
          name: 'Commit Date',
          pinned: true,
          headerCellTemplate: templates.header,
          filter: {
            placeholder: 'Search',
            condition: function condition(searchTerm, cellValue) {
              return cellValue.dateString.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
            }
          },
          headerCellClass: _highlightFilteredHeader,
          cellTemplate: archiveTemplates.commit_date,
          cellClass: _highlightFilteredHeader,
          sortingAlgorithm: function sortingAlgorithm(a, b, rowA, rowB, direction) {
            if (a.timestamp === b.timestamp) {
              return 0;
            }

            return a.timestamp > b.timestamp ? 1 : -1;
          },
          width: 130
        }, {
          field: 'commit_user',
          name: 'Commit User',
          pinned: true,
          headerCellTemplate: templates.header,
          filter: {
            placeholder: 'Search'
          },
          headerCellClass: _highlightFilteredHeader,
          cellTemplate: templates.cell,
          cellClass: _highlightFilteredHeader,
          maxWidth: 300
        }, {
          field: 'committed',
          name: 'Closed',
          pinned: true,
          headerCellTemplate: templates.header,
          hideHeaderControls: true,
          cellTemplate: archiveTemplates.closed,
          width: 70
        }],
        data: data
      };
    };

    $scope.$watch('data', function (val) {
      if (val) {
        $scope.gridOptions = _createTableCfg(val);
        $scope.isLoaded = true;
      }
    });

    $scope.highlight = function (text, term) {
      return UtilsService.highlight(text, term);
    };
    $scope.reopenPeriod = function (periodId) {
      return _this._reopenPeriod(periodId);
    };

    this._getCommits();
  }

  /**
   * Make api call to API /period-commits to get data
   * @private
   */

  _createClass(CommitsArchiveCtrl, [{
    key: '_getCommits',
    value: function _getCommits() {
      var _this2 = this;

      this.$scope.isLoaded = false;

      this.CommitsArchiveService.getPeriodCommits().then(function (res) {
        _this2.$scope.gridDataLen = res.data.length;
        _this2.$scope.data = _this2._parseCommitsData(res.data);
      }, function (error) {
        return _this2.$scope.data = [];
      });
    }

    /**
     * Parse data from API /period-commits
     * @param commitsData
     * @returns {*}
     * @private
     */
  }, {
    key: '_parseCommitsData',
    value: function _parseCommitsData(commitsData) {
      var _this3 = this;

      return commitsData.map(function (commit) {
        return _this3._getCommitData(commit);
      });
    }

    /**
     * Returns commit data
     * @param {Array} commit - response from API /period-commits
     * @returns {
     *  {
     *    periodId: *,
     *    account: *,
     *    charter_name: *,
     *    period: *,
     *    commit_date: ({dateString, timestamp}|*),
     *    commit_user: *,
     *    committed: {
     *      status: (committed|{committed, periodId}|*|boolean|null),
     *      periodId: *
     *    }
     *   }
     *  }
     * @private
     */
  }, {
    key: '_getCommitData',
    value: function _getCommitData(commit) {
      return {
        periodId: commit.period_id,
        account: commit.account.name ? commit.account.name : this._emptyValue,
        charter_name: commit.charter.name ? commit.charter.name : this._emptyValue,
        period: commit.period_name ? commit.period_name : this._emptyValue,
        commit_date: this._getDateObj(commit.committed_date),
        commit_user: commit.committed_user.name ? commit.committed_user.name : this._emptyValue,
        committed: {
          status: commit.committed,
          periodId: commit.period_id
        }
      };
    }

    /**
     * Returns date object
     * @param {String} dateString
     * @returns {Object}
     *  {
     *    dateString: Sep 21, 2016,
     *    timestamp: *
     *  }
     * @private
     */
  }, {
    key: '_getDateObj',
    value: function _getDateObj(dateString) {
      var dateObj = {
        dateString: this._emptyValue,
        timestamp: null
      };

      if (dateString) {
        var date = new Date(dateString);

        var _date$toDateString$split = date.toDateString().split(' ');

        var _date$toDateString$split2 = _slicedToArray(_date$toDateString$split, 4);

        var weekDay = _date$toDateString$split2[0];
        var month = _date$toDateString$split2[1];
        var day = _date$toDateString$split2[2];
        var year = _date$toDateString$split2[3];

        dateObj = {
          dateString: month + ' ' + day + ', ' + year,
          timestamp: date.getTime()
        };
      }

      return dateObj;
    }

    /**
     * Reopen committed period
     * @param {Number} periodId
     * @private
     */
  }, {
    key: '_reopenPeriod',
    value: function _reopenPeriod(periodId) {
      var _this4 = this;

      var modalInstance = this.$modal.open({
        animation: true,
        templateUrl: 'confirm-reopen-period.html',
        resolve: {
          item: function item() {
            var gridItems = _this4.$scope.gridOptions.data;
            var index = gridItems.indexOf(gridItems.find(function (item) {
              return item.periodId === periodId;
            }));

            return gridItems[index];
          }
        },
        /*@ngInject*/
        controller: ["$scope", "$uibModalInstance", "item", function controller($scope, $uibModalInstance, item) {
          $scope.item = item;

          $scope.ok = function () {
            $uibModalInstance.close(item);
          };

          $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
          };
        }]
      });

      modalInstance.result.then(function (item) {
        if (item.periodId) {
          return _this4.CommitsArchiveService.reopenPeriod(periodId);
        }

        return item;
      }).then(function (res) {
        var gridItems = _this4.$scope.gridOptions.data;
        var index = gridItems.indexOf(gridItems.find(function (item) {
          return item.periodId === res.data.period_id;
        }));

        gridItems[index] = _this4._getCommitData(res.data);

        _this4.$scope.gridApi.core.refresh();
      });
    }
  }]);

  return CommitsArchiveCtrl;
})();

exports['default'] = CommitsArchiveCtrl;
module.exports = exports['default'];

},{}],72:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null);

var _angular2 = _interopRequireDefault(_angular);

require('./views/commits-archive.html');

require('modules/common/views/pivot-header-cell-template.html');

require('modules/common/views/pivot-cell-template.html');

var _controllersCommitsArchiveController = require('./controllers/commits-archive.controller');

var _controllersCommitsArchiveController2 = _interopRequireDefault(_controllersCommitsArchiveController);

var _servicesCommitsArchiveService = require('./services/commits-archive.service');

var _servicesCommitsArchiveService2 = _interopRequireDefault(_servicesCommitsArchiveService);

var _componentsUtilsService = require('components/utils-service');

var _componentsUtilsService2 = _interopRequireDefault(_componentsUtilsService);

var moduleName = 'abiliton.administration.commits.archive';

_angular2['default'].module(moduleName, ['ui.bootstrap', 'ui.router', 'ui.grid', 'ui.grid.grouping', 'ui.grid.autoResize', _servicesCommitsArchiveService2['default'], _componentsUtilsService2['default']]).controller('CommitsArchiveCtrl', _controllersCommitsArchiveController2['default']).config(function ($stateProvider) {
  $stateProvider.state('charters.administration.commits_archive', {
    url: '/commits_archive',
    templateUrl: 'commits-archive.html',
    controller: 'CommitsArchiveCtrl',
    resolve: {
      templates: function templates() {
        return { header: 'pivot-header-cell-template.html', cell: 'pivot-cell-template.html' };
      }
    }
  });
});

exports['default'] = moduleName;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./controllers/commits-archive.controller":71,"./services/commits-archive.service":73,"./views/commits-archive.html":74,"components/utils-service":70,"modules/common/views/pivot-cell-template.html":161,"modules/common/views/pivot-header-cell-template.html":162}],73:[function(require,module,exports){
(function (global){
"use strict";

/***************

 This service makes call to API /api/period-commits

 Response data format:
 [{
        "period_id": 2791,
        "period_name": "Q4, 2015",
        "account":
        {
            "id": 10594,
            "name": "360 Incentives30"
        },
        "charter":
        {
            "id": 13112,
            "name": "0004"
        },
        "committed": true,
        "committed_date": "2016-01-04T12:32:06.108833+00:00",
        "committed_user":
        {
            "uid": "uid@staff",
            "name": "User Name"
        }
    },
 ...
 ]

 ***************/

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null);

var _angular2 = _interopRequireDefault(_angular);

var moduleName = 'commits.archive';

/*@ngInject*/

var CommitsArchiveService = (function () {
  CommitsArchiveService.$inject = ["$http"];
  function CommitsArchiveService($http) {
    _classCallCheck(this, CommitsArchiveService);

    this.$http = $http;
  }

  /**
   * Makes call to API /period-commits
   * @returns {Object} promise
   */

  _createClass(CommitsArchiveService, [{
    key: 'getPeriodCommits',
    value: function getPeriodCommits() {
      return this.$http.get('/api/period-commits');
    }

    /**
     * Makes call to API /period-commits/id
     * @params {String} periodId
     * @returns {Object} promise
     */
  }, {
    key: 'reopenPeriod',
    value: function reopenPeriod(periodId) {
      return this.$http.put('/api/period-commits/' + periodId, {
        committed: false
      });
    }
  }]);

  return CommitsArchiveService;
})();

_angular2['default'].module(moduleName, []).service('CommitsArchiveService', CommitsArchiveService);

exports['default'] = moduleName;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],74:[function(require,module,exports){
(function (global){
(typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null).module('src/app/index.js').run(['$templateCache', function($templateCache){$templateCache.put('commits-archive.html','<script type="text/ng-template" id="committed-date.html"><div class="ui-grid-cell-value" ng-class="{ \'active\': col.sort.direction }" ng-bind-html="grid.appScope.highlight(COL_FIELD.dateString, col.filters[0].term)"></div></script> <script type="text/ng-template" id="closed-col-template.html"><div class="closed-cell">     <span ng-if="COL_FIELD.status" class="icon icon-selected"></span>     <span ng-if="!COL_FIELD.status" class="icon icon-unselected"></span>     <span ng-if="COL_FIELD.status" class="reopenBtn" ng-click="grid.appScope.reopenPeriod(COL_FIELD.periodId)">Reopen</span>   </div></script> <script type="text/ng-template" id="confirm-reopen-period.html"><div class="modal-header">     <h3 class="modal-title">Re-Open Period</h3>   </div>   <div class="modal-body">     <p>You are about to re-open a period <strong>{{ item.period }}</strong> for charter <strong>{{ item.charter_name }}</strong>. If you would like to proceed - click Re-Open button.</p>   </div>   <div class="modal-footer">     <button class="btn btn-primary" type="button" ng-click="ok()">Re-Open</button>     <button class="btn btn-default" type="button" ng-click="cancel()">Cancel</button>   </div></script> <div class="panel-wrapper administration-metrics"> <div class="panel-name visible"> <div class="f-left">Commits Archive</div> </div> <div class="ad-tab ad-tab-large o-hid"> <div class="tab-content" min-height> <div class="ad-loading ad-loading-pivot margin-top-50" ng-if="!isLoaded"> <div class="loading-img"></div> </div> <div ng-if="isLoaded" id="charterArchivePivot" class="ui-grid-el" ui-grid="gridOptions" ui-grid-auto-resize class="grid" ng-style="getStyle()"></div> </div> </div> </div>')}]);
module.exports = 'commits-archive.html';
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],75:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _navigationMenu = require('./navigation-menu');

var _navigationMenu2 = _interopRequireDefault(_navigationMenu);

var _chartersCommonControllersChartersController = require('../../charters/common/controllers/charters.controller');

var _chartersCommonControllersChartersController2 = _interopRequireDefault(_chartersCommonControllersChartersController);

var _metrics = require('./metrics');

var _metrics2 = _interopRequireDefault(_metrics);

var _roleMembership = require('./role-membership');

var _roleMembership2 = _interopRequireDefault(_roleMembership);

var _commitsArchive = require('./commits-archive');

var _commitsArchive2 = _interopRequireDefault(_commitsArchive);

var _units = require('./units');

var _units2 = _interopRequireDefault(_units);

var moduleName = 'abiliton.administration';

angular.module(moduleName, [_navigationMenu2['default'], _metrics2['default'], _roleMembership2['default'], _commitsArchive2['default'], _units2['default'], 'ui.router', 'ngResource']).config(["$stateProvider", function ($stateProvider) {
  $stateProvider.state('charters.administration', {
    url: '/administration',
    redirectTo: 'charters.administration.metrics',
    reloadOnSearch: false,
    views: {
      'context@': {
        templateUrl: 'navigation-menu.html',
        controller: 'NavigationMenuCtrl'
      },
      'content@': {
        templateUrl: 'charters.tpl.html',
        controller: _chartersCommonControllersChartersController2['default']
      }
    }
  });
}]);

exports['default'] = moduleName;
module.exports = exports['default'];

},{"../../charters/common/controllers/charters.controller":142,"./commits-archive":72,"./metrics":77,"./navigation-menu":81,"./role-membership":83,"./units":85}],76:[function(require,module,exports){
'use strict';

/*@ngInject*/
Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var MetricsCtrl = (function () {
  function MetricsCtrl($scope, $state, PrototypeRegistryService, AppContext) {
    var _this = this;

    _classCallCheck(this, MetricsCtrl);

    this.$scope = $scope;
    this.PrototypeRegistryService = PrototypeRegistryService;
    this._defaultPreset = 'All Types';

    this.$scope.isContentLoaded = false;
    this.$scope.deviderStep = 3;
    this.$scope.isRequestError = false;
    this.$scope.presets = [this._defaultPreset];

    this.currentPreset = this.$scope.presets[0];

    this.$scope.isActive = function (preset) {
      return preset === _this.currentPreset;
    };
    this.$scope.setPreset = function (preset) {
      return _this.currentPreset = preset;
    };
    this.$scope.getPresetName = function () {
      return _this.currentPreset === _this._defaultPreset ? '' : _this.currentPreset;
    };
    this.$scope.comparator = function (actual, expected) {
      if (!expected) {
        return true;
      }

      return actual && typeof actual === 'object' && actual.area_group ? actual.area_group === expected : false;
    };

    AppContext.setActiveTabState($state.current.name);

    this.getMetricsData();
  }

  /**
   * Retrieves data from server
   */

  _createClass(MetricsCtrl, [{
    key: 'getMetricsData',
    value: function getMetricsData() {
      var _this2 = this;

      this.PrototypeRegistryService.getPrototypeRegistry().then(function (res) {
        _this2.$scope.isContentLoaded = true;
        _this2.$scope.metrics = res.data;

        _this2.generatePresets(res.data);
      }, function () {
        _this2.$scope.isContentLoaded = true;
        _this2.$scope.isRequestError = true;
      });
    }

    /**
     * Create the list of available types
     * @param {Array} data
     */
  }, {
    key: 'generatePresets',
    value: function generatePresets(data) {
      var presets = this.$scope.presets;
      var items = [];

      data.forEach(function (item) {
        if (item.area_group && items.indexOf(item.area_group) === -1) {
          items.push(item.area_group);
        }
      });

      if (items.length) {
        items.sort();
        this.$scope.presets = presets.concat(items);
      }
    }
  }]);

  return MetricsCtrl;
})();

exports['default'] = MetricsCtrl;
module.exports = exports['default'];

},{}],77:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null);

var _angular2 = _interopRequireDefault(_angular);

require('./views/metrics.html');

var _servicesPrototypeRegistryService = require('./services/prototype-registry-service');

var _servicesPrototypeRegistryService2 = _interopRequireDefault(_servicesPrototypeRegistryService);

var _controllersMetricsController = require('./controllers/metrics.controller');

var _controllersMetricsController2 = _interopRequireDefault(_controllersMetricsController);

var moduleName = 'abiliton.administration.metrics';

_angular2['default'].module(moduleName, [_servicesPrototypeRegistryService2['default'], 'ui.bootstrap', 'ui.router']).controller('MetricsCtrl', _controllersMetricsController2['default']).config(function ($stateProvider) {
  $stateProvider.state('charters.administration.metrics', {
    url: '/metrics',
    templateUrl: 'metrics.html',
    controller: 'MetricsCtrl'
  });
});

exports['default'] = moduleName;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./controllers/metrics.controller":76,"./services/prototype-registry-service":78,"./views/metrics.html":79}],78:[function(require,module,exports){
(function (global){
"use strict";

/***************

 This service makes call to API /api/prototype-registry

 Response data format:
 [{
      "metric_description": "Budget management",
      "area_type": null,
      "area_group": "SDLC",
      "area": "Budget management",
      "metric_name": "Budget Compliance"
    },
    ...
 ]

 ***************/

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null);

var _angular2 = _interopRequireDefault(_angular);

var moduleName = 'prototype.registry.service';

/*@ngInject*/

var PrototypeRegistryService = (function () {
  PrototypeRegistryService.$inject = ["$http"];
  function PrototypeRegistryService($http) {
    _classCallCheck(this, PrototypeRegistryService);

    this.$http = $http;
  }

  /**
   * Makes call to API /prototype-registry
   * @returns {Object} promise
   */

  _createClass(PrototypeRegistryService, [{
    key: 'getPrototypeRegistry',
    value: function getPrototypeRegistry() {
      return this.$http.get('/api/prototype');
    }
  }]);

  return PrototypeRegistryService;
})();

_angular2['default'].module(moduleName, []).service('PrototypeRegistryService', PrototypeRegistryService);

exports['default'] = moduleName;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],79:[function(require,module,exports){
(function (global){
(typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null).module('src/app/index.js').run(['$templateCache', function($templateCache){$templateCache.put('metrics.html','<div class="panel-wrapper administration-metrics"> <div class="panel-name visible"> <div class="f-left">Metrics</div> </div> <div class="ad-tab ad-tab-large o-hid"> <div class="tab-content" min-height> <loading-indicator ng-if="!isRequestError && !isContentLoaded" indicator-size="16px" max-width="120px" display-center="true"></loading-indicator> <div class="analysis-no-data" ng-if="!isRequestError && !metrics.length && isContentLoaded"> <span class="no-data-icon"></span> <div class="title">You have no metrics available</div> </div> <ul class="panel-heading-controls" ng-if="!isRequestError && metrics.length && isContentLoaded"> <li ng-repeat="preset in presets" ng-click="setPreset(preset)" ng-class="{ \'active\': isActive(preset) }"> <a>{{ preset }}</a> </li> </ul> <div ng-if="!isRequestError && metrics.length && isContentLoaded"> <div class="charter-table metrics-table"> <div class="table-header row"> <div class="charter-col type">Type</div> <div class="charter-col area">Area</div> <div class="charter-col area-type">Area Type</div> <div class="charter-col metric">Metric</div> <div class="charter-col metric-description">Description</div> <div class="charter-col action-bar"></div> <div class="divider"></div> </div> <div class="table-row row" ng-repeat="item in metrics | orderBy:[\'area_group\', \'area\', \'metric_name\'] | filter:getPresetName():comparator"> <div class="charter-col type"> <span class="description">{{ item.area_group }}</span> </div> <div class="charter-col area"> <span class="description">{{ item.area }}</span> </div> <div class="charter-col area-type"> <span class="description">{{ item.area_type }}</span> </div> <div class="charter-col metric"> <span class="description">{{ item.metric_name }}</span> </div> <div class="charter-col metric-description"> <span class="description">{{ item.metric_description }}</span> </div> <div class="charter-col action-bar" ng-if="false"> <div class="action-item"> <a href="" class="remove-resp" title="Delete metric"> <span class="icon icon-remove"></span> </a> </div> <div ng-if="item.isNew" class="action-item"> <a href="" class="action-button">SAVE</a> </div> <div ng-if="!item.isNew" class="action-item"> <a href="" class="action-button">EDIT</a> </div> </div> <div class="divider" ng-show="($index + 1) % deviderStep === 0 || $last"></div> </div> </div> <div class="table-row row add-metric" ng-if="false"> <div class="col-xs-2"> <a href="">Add new metric</a> </div> </div> </div> <div ng-if="isRequestError" class="charters-summary"> <span class="summary-icon"></span> <div class="charter-message"> <div class="title">{{ errorMessage }}</div> </div> </div> </div> </div> </div>')}]);
module.exports = 'metrics.html';
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],80:[function(require,module,exports){
'use strict';

/*@ngInject*/
Object.defineProperty(exports, '__esModule', {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var NavigationMenuCtrl = function NavigationMenuCtrl($scope) {
  _classCallCheck(this, NavigationMenuCtrl);

  this.$scope = $scope;

  // Navigation menu items
  this.$scope.menuItems = [{
    name: 'Metrics',
    url: 'charters.administration.metrics',
    disabled: false
  }, {
    name: 'Role Membership',
    url: 'charters.administration.role',
    disabled: true
  }, {
    name: 'Commits Archive',
    url: 'charters.administration.commits_archive',
    disabled: false
  }, {
    name: 'Units of Measurement',
    url: 'charters.administration.units',
    disabled: true
  }];
};

exports['default'] = NavigationMenuCtrl;
module.exports = exports['default'];

},{}],81:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

require('./views/navigation-menu.html');

var _controllersNavigationMenuController = require('./controllers/navigation-menu.controller');

var _controllersNavigationMenuController2 = _interopRequireDefault(_controllersNavigationMenuController);

var moduleName = 'abiliton.charters.navigation.menu';

angular.module(moduleName, ['ui.router']).controller('NavigationMenuCtrl', _controllersNavigationMenuController2['default']);

exports['default'] = moduleName;
module.exports = exports['default'];

},{"./controllers/navigation-menu.controller":80,"./views/navigation-menu.html":82}],82:[function(require,module,exports){
(function (global){
(typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null).module('src/app/index.js').run(['$templateCache', function($templateCache){$templateCache.put('navigation-menu.html','<div class="panel-wrapper navigation-menu"> <div class="panel-name">&nbsp;</div> <ul class="nav nav-pills nav-stacked"> <li ng-repeat="item in menuItems" ui-sref-active="active" ng-disabled="item.disabled"> <a href="" ui-sref="{{ item.url }}" ng-if="!item.disabled">{{ item.name }}</a> <a ng-if="item.disabled" ng-disabled="true">{{ item.name }}</a> </li> </ul> </div>')}]);
module.exports = 'navigation-menu.html';
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],83:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null);

var _angular2 = _interopRequireDefault(_angular);

require('./views/role.html');

var moduleName = 'abiliton.administration.role';

_angular2['default'].module(moduleName, ['ui.bootstrap', 'ui.router']).config(function ($stateProvider) {
  $stateProvider.state('charters.administration.role', {
    url: '/role',
    templateUrl: 'role.html',
    controller: function controller() {}
  });
});

exports['default'] = moduleName;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./views/role.html":84}],84:[function(require,module,exports){
(function (global){
(typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null).module('src/app/index.js').run(['$templateCache', function($templateCache){$templateCache.put('role.html','<div class="panel-wrapper administration-metrics"> <div class="panel-name visible"> <div class="f-left">Role Membership</div> </div> <div class="ad-tab ad-tab-large o-hid"> <div class="tab-content" min-height> </div> </div> </div>')}]);
module.exports = 'role.html';
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],85:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null);

var _angular2 = _interopRequireDefault(_angular);

require('./views/units.html');

var moduleName = 'abiliton.administration.units';

_angular2['default'].module(moduleName, ['ui.bootstrap', 'ui.router']).config(function ($stateProvider) {
  $stateProvider.state('charters.administration.units', {
    url: '/units',
    templateUrl: 'units.html',
    controller: function controller() {}
  });
});

exports['default'] = moduleName;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./views/units.html":86}],86:[function(require,module,exports){
(function (global){
(typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null).module('src/app/index.js').run(['$templateCache', function($templateCache){$templateCache.put('units.html','<div class="panel-wrapper administration-metrics"> <div class="panel-name visible"> <div class="f-left">Units of Measurement</div> </div> <div class="ad-tab ad-tab-large o-hid"> <div class="tab-content" min-height> </div> </div> </div>')}]);
module.exports = 'units.html';
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],87:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

require('../charters/common/views/charters.tpl.html');

require('../charters/common/views/charters-brand.html');

require('../charters/common/views/charters-top-navigation.html');

var _modulesContext = require('modules/context');

var _modulesContext2 = _interopRequireDefault(_modulesContext);

var _chartersSummary = require('../charters/summary');

var _chartersSummary2 = _interopRequireDefault(_chartersSummary);

var _chartersSimpleHierarchy = require('../charters/simple-hierarchy');

var _chartersSimpleHierarchy2 = _interopRequireDefault(_chartersSimpleHierarchy);

var _chartersHierarchy = require('../charters/hierarchy');

var _chartersHierarchy2 = _interopRequireDefault(_chartersHierarchy);

var _chartersCommonControllersChartersController = require('../charters/common/controllers/charters.controller');

var _chartersCommonControllersChartersController2 = _interopRequireDefault(_chartersCommonControllersChartersController);

var _chartersCommonControllersNavigationController = require('../charters/common/controllers/navigation.controller');

var _chartersCommonControllersNavigationController2 = _interopRequireDefault(_chartersCommonControllersNavigationController);

var _chartersCharter = require('../charters/charter');

var _chartersCharter2 = _interopRequireDefault(_chartersCharter);

var _componentsAppContextService = require('components/app-context-service');

var _componentsAppContextService2 = _interopRequireDefault(_componentsAppContextService);

var _chartersAnalytics = require('../charters/analytics');

var _chartersAnalytics2 = _interopRequireDefault(_chartersAnalytics);

var _componentsEntitiesService = require('components/entities-service');

var _componentsEntitiesService2 = _interopRequireDefault(_componentsEntitiesService);

var _componentsAccountService = require('components/account-service');

var _componentsAccountService2 = _interopRequireDefault(_componentsAccountService);

var _chartersCharterTable = require('../charters/charter-table');

var _chartersCharterTable2 = _interopRequireDefault(_chartersCharterTable);

var _administration = require('./administration');

var _administration2 = _interopRequireDefault(_administration);

var moduleName = 'abiliton.adminCharters';

angular.module(moduleName, [_modulesContext2['default'], _chartersSummary2['default'], _chartersSimpleHierarchy2['default'], _chartersCharter2['default'], _componentsAppContextService2['default'], _chartersAnalytics2['default'], _componentsEntitiesService2['default'], _componentsAccountService2['default'], _chartersCharterTable2['default'], _administration2['default'], _chartersHierarchy2['default'], 'ui.router', 'roles']).config(["$stateProvider", function ($stateProvider) {
  $stateProvider.state('charters', {
    url: '/charters?period&selectedEntities&uncheckedEntities&filter',
    redirectTo: 'charters.analytics',
    data: {
      type: 'charter',
      isPresentSearchInfo: true,
      isPresentSearchBrowse: true,
      isPresentAlarmIcon: true
    },
    views: {
      content: {
        templateUrl: 'charters.tpl.html',
        controller: _chartersCommonControllersChartersController2['default']
      },
      context: {
        templateUrl: 'context.html',
        controller: 'ContextCtrl'
      },
      brand: {
        templateUrl: "charters-brand.html"
      },
      "top-navigation": {
        templateUrl: "charters-top-navigation.html",
        controller: _chartersCommonControllersNavigationController2['default']
      }
    }
  });
}]);

exports['default'] = moduleName;
module.exports = exports['default'];

},{"../charters/analytics":95,"../charters/charter":131,"../charters/charter-table":100,"../charters/common/controllers/charters.controller":142,"../charters/common/controllers/navigation.controller":143,"../charters/common/views/charters-brand.html":144,"../charters/common/views/charters-top-navigation.html":145,"../charters/common/views/charters.tpl.html":146,"../charters/hierarchy":149,"../charters/simple-hierarchy":155,"../charters/summary":158,"./administration":75,"components/account-service":11,"components/app-context-service":12,"components/entities-service":23,"modules/context":164}],88:[function(require,module,exports){
'use strict';

/*@ngInject*/
Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var AnalyticsCtrl = (function () {
  function AnalyticsCtrl($scope, $timeout, AnalyticsService, AppContext) {
    var _this = this;

    _classCallCheck(this, AnalyticsCtrl);

    this.$scope = $scope;
    this.$timeout = $timeout;
    this.analiticsService = AnalyticsService;
    this.appContext = AppContext;

    this.requestsStack = null;
    this.$scope.isFullfilled = false;

    this.thresholds = {
      excellence: 'sei',
      experience: 'cei'
    };

    this.doughnutConfig = {
      excellence: {
        hideThreshold: true,
        valueSize: '34px',
        noDataSize: '18px',
        thresholds: this.thresholds.excellence
      },
      experience: {
        hideThreshold: true,
        valueSize: '34px',
        noDataSize: '18px',
        thresholds: this.thresholds.experience
      }
    };

    this.trendConfig = {
      excellence: {
        hideGridLines: true,
        thresholds: this.thresholds.excellence
      },
      experience: {
        hideGridLines: true,
        thresholds: this.thresholds.experience
      }
    };

    this.$scope.chartsData = [{
      order: 1,
      id: '-1',
      name: 'excellence',
      label: 'Service Excellence Index'
    }, {
      order: 2,
      id: '-2',
      name: 'experience',
      label: 'Client Experience Index'
    }];

    this.$scope.pivotData = [];
    this.$scope.isPivotDataLoaded = false;

    this.$scope.isPresentCharters = function () {
      return _this._isPresentCharters();
    };
    this.$scope.selectCharter = function (id) {
      return _this._selectCharter(id);
    };
    this.$scope.selectArea = function (areaName) {
      return _this.$scope.selectedArea = { name: areaName };
    };
    this.$scope.getTrendConfig = function (type) {
      return _this._getTrendConfig(type);
    };
    this.$scope.getDoughnutConfig = function (type) {
      return _this._getDoughnutConfig(type);
    };
    this.$scope.getThresholdsName = function (type) {
      return _this._getThresholdsName(type);
    };

    $scope.$watch(function () {
      return _this.appContext.getContextLoadedState();
    }, function (data) {
      return data && _this.initializeHandlers();
    });
  }

  /**
   * Return config for /api/metrics
   * @returns {Object}
   */

  _createClass(AnalyticsCtrl, [{
    key: '_getMetricConfig',
    value: function _getMetricConfig() {
      var period = this.appContext.getPeriod();

      return {
        metric_ids: '-1,-2',
        charter_ids: this.appContext.getSelectedEntities().join() || '',
        start_year: period.startDate.getFullYear(),
        start_quarter: this._getQuarter(period.startDate) - 1,
        end_year: period.endDate.getFullYear(),
        end_quarter: this._getQuarter(period.endDate) - 1
      };
    }

    /**
     * Return config for /api/metrics-on-date
     * @returns {Object}
     */
  }, {
    key: '_getMetricOnDateConfig',
    value: function _getMetricOnDateConfig() {
      return {
        metric_ids: '-1,-2',
        entity_ids: this.appContext.getSelectedEntities().join() || '',
        on_date: this.appContext.getPeriod().endDate.getTime()
      };
    }

    /**
     * Return config for /api/area-metrics
     * @returns {Object}
     */
  }, {
    key: '_getAreaMetricsConfig',
    value: function _getAreaMetricsConfig() {
      return {
        charter_ids: this.appContext.getSelectedEntities().join() || '',
        on_date: this.appContext.getPeriod().endDate.getTime()
      };
    }

    /**
     * Return config for /api/pivot-table-data
     * @returns {Object}
     */
  }, {
    key: '_getPivotTableConfig',
    value: function _getPivotTableConfig() {
      var period = this.appContext.getPeriod();

      return {
        charter_ids: this.appContext.getSelectedEntities().join() || '',
        year: period.endDate.getFullYear(),
        quarter: this._getQuarter(period.endDate) - 1
      };
    }

    /**
     *  Initializes handlers
     */
  }, {
    key: 'initializeHandlers',
    value: function initializeHandlers() {
      var _this2 = this;

      var timeoutPromise = undefined;
      var delay = 300;

      var unwatchFullfilled = this.$scope.$watch(function () {
        return _this2.requestsStack;
      }, function (newVal) {
        if (newVal !== null) {
          _this2.$scope.isFullfilled = !newVal.length;
        }
      }, true);

      this.$scope.$watch(function () {
        return _this2.appContext.getContext().period.endDate;
      }, function (date) {
        if (date) {
          _this2.$scope.endQuarter = 'Q' + _this2._getQuarter(date) + ' ' + date.getFullYear();
        }
      });

      var unwatch = this.$scope.$watch(function () {
        return _this2.appContext.getContext();
      }, function (data) {
        _this2.$scope.selectedArea = null;
        _this2.$scope.isFullfilled = false;
        _this2.$scope.isPivotDataLoaded = false;

        if (data && _this2._isPresentCharters()) {
          _this2.$timeout.cancel(timeoutPromise);

          timeoutPromise = _this2.$timeout(function () {
            _this2.initializeData();
          }, delay);
        } else {
          _this2.$scope.isFullfilled = true;
          _this2.$scope.isPivotDataLoaded = true;
        }
      }, true);

      this.$scope.$on("$destroy", function () {
        unwatch();
        unwatchFullfilled();
      });
    }

    /**
     *  Initializes data
     */
  }, {
    key: 'initializeData',
    value: function initializeData() {
      var _this3 = this;

      var period = this.appContext.getPeriod();
      var requests = ['doughnut', 'index', 'contributors', 'areas'];

      this.requestsStack = (this.requestsStack || []).concat(requests);

      if (!period.startDate && !period.endDate) {
        return null;
      }

      this.analiticsService.getMetricOnDateData(this._getMetricOnDateConfig()).then(function (res) {
        _this3._removeFromRequestStack(requests[0]);
        _this3._setDoughnutData(res.data);
      }, function () {
        _this3._removeFromRequestStack(requests[0]);
        _this3._setDoughnutNoData();
      });

      this.analiticsService.getMetricData(this._getMetricConfig()).then(function (res) {
        _this3._removeFromRequestStack(requests[1]);
        _this3._setIndexTrendData(res.data);
      }, function () {
        _this3._setTrendNoData();
        _this3._removeFromRequestStack(requests[1]);
      });

      this.analiticsService.getContributorsData(this._getMetricOnDateConfig()).then(function (res) {
        _this3._removeFromRequestStack(requests[2]);
        _this3._setContributorsData(res.data);
      }, function () {
        _this3._setContributorsData({});
        _this3._removeFromRequestStack(requests[2]);
      });

      this.analiticsService.getAreaMetricsData(this._getAreaMetricsConfig()).then(function (res) {
        _this3._removeFromRequestStack(requests[3]);
        _this3._setAreasData(res.data);
      }, function () {
        _this3._setAreasData({});
        _this3._removeFromRequestStack(requests[3]);
      });

      this.analiticsService.getPivotTableData(this._getPivotTableConfig()).then(function (res) {
        _this3.$scope.isPivotDataLoaded = true;
        _this3.$scope.pivotData = res.data;
      }, function () {
        _this3.$scope.pivotData = [];
        _this3.$scope.isPivotDataLoaded = true;
      });
    }

    /**
     * Returns thresholds name
     * @param {String} type - index type
     * @returns {*}
     * @private
     */
  }, {
    key: '_getThresholdsName',
    value: function _getThresholdsName(type) {
      return this.thresholds[type] + '_thresholds';
    }

    /**
     * Prepares data for Doughnut charts
     * @param {Object} res - data from "/metrics-on-date" API
     *    Data example:
     *      {
     *        "index_thresholds": { "yellow": 0.8, "red": 0.6 },
     *        "data": {
     *          "on_date": 1438300800000,
     *          "values": {
     *            "48": 0.926635884361832,
     *            "52": 0.6103929238269915,
     *            "44": 0.597565459341647
     *          }
     *        }
     *      }
     * @returns {null}
     */
  }, {
    key: '_setDoughnutData',
    value: function _setDoughnutData(res) {
      var _this4 = this;

      var values = res.data.values;

      if (!values && values !== 0) {
        this._setDoughnutNoData();

        return null;
      }

      this.$scope.chartsData.forEach(function (obj) {
        var thresholds = _this4._getThresholdsName(obj.name);

        obj.doughnut = { value: values[obj.id] };
        obj.doughnut.thresholds = res[thresholds];
      });
    }

    /**
     * Prepares data object for Small Trend Index chart
     * @param {Object} trendData - data from "/metrics" API
     *    Data example:
     *      {
     *        "index_thresholds": { "yellow": 0.8, "red": 0.6 },
     *        "limit_values": {
     *          "Index": { "max": 0.926635884361832, "min": 0.5402230665804234 }
     *        },
     *        "data_availability": {
     *          "48": "available",
     *          "52": "available",
     *          "44": "available"
     *        },
     *        "data": [{
     *          "date": 1430438400000,
     *          "values": { "48": null, "44": 0.833333333333333, "52": 0.826418439716312 }
     *        }, {
     *          "date": 1430611200000,
     *          "values": { "48": null, "44": 0.833333333333333, "52": 0.826418439716312 }
     *        }]
     *      }
     * @returns {Object}
     */
  }, {
    key: '_setIndexTrendData',
    value: function _setIndexTrendData(trendData) {
      var _this5 = this;

      if (!trendData) {
        this._setTrendNoData();

        return null;
      }

      this.$scope.chartsData.forEach(function (obj) {
        var thresholds = _this5._getThresholdsName(obj.name);

        obj.indexTrend = { data: [] };
        obj.indexTrend[thresholds] = trendData[thresholds];

        if (trendData.data_availability.hasOwnProperty(obj.id) && trendData.data_availability[obj.id] === 'available') {
          trendData.data[obj.id].forEach(function (dataObj) {
            obj.indexTrend.data.push({
              date: dataObj.date,
              index: dataObj.value
            });
          });
        }
      });
    }

    /**
     * Sets 'no data'  message for doughnut
     */
  }, {
    key: '_setDoughnutNoData',
    value: function _setDoughnutNoData() {
      this.$scope.chartsData.forEach(function (obj) {
        obj.doughnut = obj.doughnut || {};
        obj.doughnut.value = null;
      });
    }

    /**
     * Sets 'no data'  message for index trend
     */
  }, {
    key: '_setTrendNoData',
    value: function _setTrendNoData() {
      var _this6 = this;

      this.$scope.chartsData.forEach(function (obj) {
        var thresholds = _this6._getThresholdsName(obj.name);

        obj.indexTrend = { data: [] };
        obj.indexTrend[thresholds] = {};
      });
    }

    /**
     * Prepares data object for Contributors widget
     * @param {Object} data - data from "/index-contributors" API
     *    Data example:
     *      {
     *        "-1": [
     *          { "value": 0.853271768723664, "name": "Abiliton Dashboard Development" },
     *          { "value": 1.0, "name": "TM" }
     *        ],
     *        "-2": [
     *          { "value": 0.597565459341647, "name": "Abiliton Dashboard Development" }
     *        ]
     *      }
     * @returns {null}
     */
  }, {
    key: '_setContributorsData',
    value: function _setContributorsData(contributorsData) {
      var _this7 = this;

      this.$scope.chartsData.forEach(function (obj) {
        obj.contributors = {};

        if (contributorsData.data.hasOwnProperty(obj.id)) {
          obj.contributors.data = contributorsData.data[obj.id] || [];
        }

        obj.contributors.thresholds = contributorsData[_this7._getThresholdsName(obj.name)] || {};
      });
    }

    /**
     * Prepares data for Areas widget
     * @param areasData - data from '/api/area-metrics' API
     *  Data example:
     *    {
     *      client_experience: {
     *        metric_1_name: 0.2,
     *        metric_2_name: 0.8,
     *        ...
     *      }
     *      client_experience: {
     *        metric_1_name: 0.1,
     *        metric_2_name: 0.5,
     *        ...
     *      }
     *    }
     * @private
     */
  }, {
    key: '_setAreasData',
    value: function _setAreasData(areasData) {
      this.$scope.chartsData[0].areas = {
        data: this._setAreaData(areasData.responsibility),
        thresholds: areasData.sei_thresholds || {}
      };
      this.$scope.chartsData[1].areas = {
        data: this._setAreaData(areasData.client_experience),
        thresholds: areasData.cei_thresholds || {}
      };
    }

    /**
     * Prepares data for Area
     * @param areaData - area data
     *  Data example:
     *  {
     *    metric_1_name: 0.2,
     *    metric_1_name: 0.2,
     *  }
     * @returns {Array}
     *  Data example:
     *  [{
     *    name: 'metric_name',
     *    value: 0.9
     *  }]
     * @private
     */
  }, {
    key: '_setAreaData',
    value: function _setAreaData(areaData) {
      var result = [];

      for (var area in areaData) {
        var value = areaData[area];

        if (this._isValue(value)) {
          result.push({
            value: value,
            name: area
          });
        }
      }

      return result;
    }

    /**
     * Checks whether the value is not empty
     * @param {String|Number|Null|undefined} value
     * @returns {boolean}
     * @private
     */
  }, {
    key: '_isValue',
    value: function _isValue(value) {
      return value !== null && value !== '' && value !== undefined;
    }

    /**
     * Selects Charter by clicking on Contributors
     * @param {Number} id - entity id
     * @returns {null}
     * @private
     */
  }, {
    key: '_selectCharter',
    value: function _selectCharter(id) {
      if (!id) {
        return null;
      }

      var charters = this.appContext.getAllEntities();
      var index = charters.indexOf(id);

      if (index === -1) {
        return null;
      }

      charters.splice(index, 1);

      this.appContext.setSelectedEntities({
        checked: [id],
        unchecked: charters
      });
    }

    /**
     * Removes item from requests stack
     * @param request
     * @private
     */
  }, {
    key: '_removeFromRequestStack',
    value: function _removeFromRequestStack(request) {
      var index = this.requestsStack.indexOf(request);

      if (index > -1) {
        this.requestsStack.splice(index, 1);
      }
    }

    /**
     * Returns trend's thresholds type
     * @param {String} type - type of index
     * @returns {Object}
     * @private
     */
  }, {
    key: '_getTrendConfig',
    value: function _getTrendConfig(type) {
      return this.trendConfig[type];
    }

    /**
     * Returns doughnut's thresholds type
     * @param {String} type - type of index
     * @returns {Object}
     * @private
     */
  }, {
    key: '_getDoughnutConfig',
    value: function _getDoughnutConfig(type) {
      return this.doughnutConfig[type];
    }

    /**
     * Checks whether there are charters in the context
     * @returns {Boolean}
     * @private
     */
  }, {
    key: '_isPresentCharters',
    value: function _isPresentCharters() {
      return !!this.appContext.getAllEntities().length;
    }

    /**
     * Returns quarter number
     * @param {Date} date
     * @returns {Number}
     * @private
     */
  }, {
    key: '_getQuarter',
    value: function _getQuarter(date) {
      return Math.floor(1 + date.getMonth() / 3);
    }
  }]);

  return AnalyticsCtrl;
})();

exports['default'] = AnalyticsCtrl;
module.exports = exports['default'];

},{}],89:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null);

var _angular2 = _interopRequireDefault(_angular);

require('./view/pivot-table-description.html');

/*@ngInject*/
var moduleName = 'pivot.table.description';

var PivotTableDescription = (function () {
  function PivotTableDescription() {
    var _this = this;

    _classCallCheck(this, PivotTableDescription);

    this.restrict = 'E';
    this.templateUrl = 'pivot-table-description.html';

    this.scope = {
      data: '=',
      filterTerm: '=',
      highlightFn: '='
    };

    this.link = function ($scope, $element, attrs) {
      return _this._link($scope, $element, attrs);
    };
  }

  _createClass(PivotTableDescription, [{
    key: '_link',
    value: function _link($scope) {
      $scope.$watch('data', function (val) {
        if (val) {
          $scope.metric = val;
        }
      });
    }
  }], [{
    key: 'directiveFactory',
    value: function directiveFactory(uiGridConstants) {
      return new PivotTableDescription(uiGridConstants);
    }
  }]);

  return PivotTableDescription;
})();

_angular2['default'].module(moduleName, ['ui.bootstrap']).directive('pivotTableDescription', PivotTableDescription.directiveFactory);

exports['default'] = moduleName;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./view/pivot-table-description.html":90}],90:[function(require,module,exports){
(function (global){
(typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null).module('src/app/index.js').run(['$templateCache', function($templateCache){$templateCache.put('pivot-table-description.html','<span tooltip-class="cell-tooltip" uib-tooltip-template="\'pivot-table-hint-description.html\'" tooltip-placement="top" tooltip-append-to-body="true" tooltip-trigger="mouseenter" class="pivot-table-cell-value"> <div ng-bind-html="highlightFn(metric.name, filterTerm)"></div> </span> <!-- Hint template --> <script type="text/ng-template" id="pivot-table-hint-description.html"><div class="cell-tooltip-wrapper">         <div class="tooltip-header">             <span>Description</span>         </div>          <div class="cell-tooltip-body ta-justify">           {{ metric.description }}         </div>     </div></script>')}]);
module.exports = 'pivot-table-description.html';
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],91:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null);

var _angular2 = _interopRequireDefault(_angular);

require('./view/pivot-table-value.html');

/*@ngInject*/
var moduleName = 'pivot.table.value';

var PivotTableValue = (function () {
  function PivotTableValue() {
    var _this = this;

    _classCallCheck(this, PivotTableValue);

    this.restrict = 'E';
    this.templateUrl = 'pivot-table-value.html';

    this.scope = {
      data: '=',
      filterTerm: '=',
      highlightFn: '='
    };

    this.link = function ($scope, $element, attrs) {
      return _this._link($scope, $element, attrs);
    };
  }

  _createClass(PivotTableValue, [{
    key: '_link',
    value: function _link($scope) {
      var _this2 = this;

      $scope.$watch('data', function (val) {
        if (val) {
          $scope.valObj = val;
        }
      });

      /**
       * Returns value
       * @param {String|Number|Null|undefined} value
       * @returns {*}
       */
      $scope.getValue = function (value) {
        return _this2._isValue(value) ? value.toString() : '-';
      };
    }

    /**
     * Checks whether the value is not empty
     * @param {String|Numberined} value
     * @returns {boolean}
     * @private
     */
  }, {
    key: '_isValue',
    value: function _isValue(value) {
      return value !== null && value !== '' && value !== undefined;
    }
  }], [{
    key: 'directiveFactory',
    value: function directiveFactory(uiGridConstants) {
      return new PivotTableValue(uiGridConstants);
    }
  }]);

  return PivotTableValue;
})();

_angular2['default'].module(moduleName, ['ui.bootstrap']).directive('pivotTableValue', PivotTableValue.directiveFactory);

exports['default'] = moduleName;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./view/pivot-table-value.html":92}],92:[function(require,module,exports){
(function (global){
(typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null).module('src/app/index.js').run(['$templateCache', function($templateCache){$templateCache.put('pivot-table-value.html','<span tooltip-class="cell-tooltip" uib-tooltip-template="\'pivot_table_hint.html\'" tooltip-placement="top" tooltip-append-to-body="true" tooltip-trigger="mouseenter" class="pivot-table-cell-value"> <div class="value {{ valObj.normalized_zone }}" ng-bind-html="highlightFn(getValue(valObj.normalized), filterTerm)"></div> <div class="pull-left">%</div> </span> <!-- Hint template --> <script type="text/ng-template" id="pivot_table_hint.html"><div class="cell-tooltip-wrapper">         <div class="tooltip-header">             <span>Actual value</span>             <span class="value pull-right"> {{ getValue(valObj.absolute) }}</span>         </div>          <div class="cell-tooltip-body">             <div class="target-box f-left">                 <div class="title">Target</div>                 <div class="target">{{ getValue(valObj.thresholds.target) }}</div>             </div>             <div class="thresholds-box">                 <div class="title">Thresholds</div>                 <div>                     <span class="yellow pull-left">{{ getValue(valObj.thresholds.yellow) }}</span>                     <span class="red pull-right">{{ getValue(valObj.thresholds.red) }}</span>                 </div>             </div>             <div class="weight-box f-right">                 <div class="title">Weight</div>                 <div class="value">{{ getValue(valObj.weight) }} %</div>             </div>         </div>     </div></script>')}]);
module.exports = 'pivot-table-value.html';
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],93:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null);

var _angular2 = _interopRequireDefault(_angular);

require('modules/common/views/pivot-header-cell-template.html');

require('modules/common/views/pivot-cell-template.html');

require('./view/pivot-table.html');

var _pivotTableValue = require('../pivot-table-value');

var _pivotTableValue2 = _interopRequireDefault(_pivotTableValue);

var _componentsUtilsService = require('components/utils-service');

var _componentsUtilsService2 = _interopRequireDefault(_componentsUtilsService);

var _pivotTableDescription = require('../pivot-table-description');

var _pivotTableDescription2 = _interopRequireDefault(_pivotTableDescription);

/*@ngInject*/
var moduleName = 'pivot.table';

var PivotTable = (function () {
  function PivotTable(uiGridConstants, $sce, UtilsService) {
    var _this = this;

    _classCallCheck(this, PivotTable);

    this.uiGridConstants = uiGridConstants;
    this.$sce = $sce;
    this.UtilsService = UtilsService;
    this.restrict = 'E';
    this.templateUrl = 'pivot-table.html';

    this.termsStorage = {
      charter: null,
      area: null,
      metric: null,
      metric_value: null
    };

    this.scope = {
      data: '=',
      quarter: '=',
      areaTerm: '='
    };

    this.link = function ($scope, $element, attrs) {
      return _this._link($scope, $element, attrs);
    };
  }

  _createClass(PivotTable, [{
    key: '_link',
    value: function _link($scope, $element, attrs) {
      var _this2 = this;

      var isFiltersRestored = false;

      var pivotHeaderHeight = 80;
      var rowHeight = 30;
      var terms = {
        charter: function charter() {
          return $scope.gridOptions.columnDefs[0].filter.term;
        },
        area: function area() {
          return $scope.gridOptions.columnDefs[1].filter.term;
        },
        metric: function metric() {
          return $scope.gridOptions.columnDefs[2].filter.term;
        },
        metric_value: function metric_value() {
          return $scope.gridOptions.columnDefs[3].filter.term;
        }
      };
      var pivotTemplates = {
        header: 'pivot-header-cell-template.html',
        body: 'pivot-cell-template.html',
        value: 'pivot_table_value.html',
        description: 'pivot_table_description.html'
      };

      $scope.gridDataLen = 0;

      var _highlightFilteredHeader = function _highlightFilteredHeader(row, rowRenderIndex, col, colRenderIndex) {
        return col.filters[0].term ? 'header-filtered' : '';
      };

      //Create watchers fot filters terms
      var _initFilterWatchers = function _initFilterWatchers() {
        var columnDefs = $scope.gridOptions.columnDefs;

        var _loop = function (i, len) {

          //Store filters term
          $scope.$watch(function () {
            return terms[columnDefs[i].field]();
          }, function (term) {
            if (isFiltersRestored) {
              _this2.termsStorage[columnDefs[i].field] = term;
            }
          });
        };

        for (var i = 0, len = columnDefs.length; i < len; i++) {
          _loop(i, len);
        }
      };

      //Restore filters terms
      var _restoreTerms = function _restoreTerms() {
        var columnDefs = $scope.gridOptions.columnDefs;

        for (var i = 0, len = columnDefs.length; i < len; i++) {
          columnDefs[i].filter.term = _this2.termsStorage[columnDefs[i].field];
        }

        isFiltersRestored = true;
      };

      /**
       * Create pivot table config
       * @param {String} quarter
       * @private
       */
      var _createTableCfg = function _createTableCfg(quarter) {
        //Grid config
        $scope.gridOptions = {
          onRegisterApi: function onRegisterApi(gridApi) {
            return $scope.gridApi = gridApi;
          },
          enableFiltering: true,
          enableSorting: true,
          enableHorizontalScrollbar: _this2.uiGridConstants.scrollbars.NEVER,
          enableVerticalScrollbar: _this2.uiGridConstants.scrollbars.NEVER,
          columnDefs: [{
            field: 'charter',
            name: 'Charter',
            pinned: true,
            headerCellTemplate: pivotTemplates.header,
            filter: {
              placeholder: 'Search'
            },
            headerCellClass: _highlightFilteredHeader,
            cellTemplate: pivotTemplates.body,
            cellClass: _highlightFilteredHeader
          }, {
            field: 'area',
            name: 'Area',
            headerCellTemplate: pivotTemplates.header,
            filter: {
              placeholder: 'Search'
            },
            headerCellClass: _highlightFilteredHeader,
            cellTemplate: pivotTemplates.body,
            cellClass: _highlightFilteredHeader
          }, {
            field: 'metric',
            name: 'Metric',
            headerCellTemplate: pivotTemplates.header,
            filter: {
              placeholder: 'Search',
              condition: function condition(searchTerm, cellValue) {
                return cellValue.name.toLowerCase().match(searchTerm.toLowerCase());
              }
            },
            headerCellClass: _highlightFilteredHeader,
            cellTemplate: pivotTemplates.description,
            cellClass: _highlightFilteredHeader,
            sortingAlgorithm: function sortingAlgorithm(a, b, rowA, rowB, direction) {
              return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
            }
          }, {
            field: 'metric_value',
            name: quarter,
            headerCellTemplate: pivotTemplates.header,
            filter: {
              placeholder: 'Search',
              condition: function condition(searchTerm, cellValue) {
                return Math.round(cellValue.normalized).toString().indexOf(searchTerm) > -1;
              }
            },
            headerCellClass: _highlightFilteredHeader,
            cellTemplate: pivotTemplates.value,
            cellClass: _highlightFilteredHeader,
            sort: {
              direction: _this2.uiGridConstants.ASC,
              priority: 1
            },
            sortingAlgorithm: function sortingAlgorithm(a, b, rowA, rowB, direction) {
              if (a.normalized === b.normalized) {
                return 0;
              }

              return a.normalized > b.normalized ? 1 : -1;
            }
          }]
        };

        _initFilterWatchers();
      };

      //Watching for quarter
      $scope.$watch('quarter', function (val) {
        return val && _createTableCfg(val);
      });

      //Watching for changing table data
      $scope.$watch('gridDataLen', function () {
        return $scope.gridApi && $scope.gridApi.core.refresh();
      });

      //Sets grid data
      $scope.$watch('data', function (val) {
        if (val) {
          $scope.gridOptions.minRowsToShow = val.length;
          $scope.gridDataLen = val.length;
          $scope.gridOptions.data = val;
          $scope.isLoaded = true;
          _restoreTerms();
        }
      });

      /**
       * Return style for pivot table
       */
      $scope.getStyle = function () {
        // we have to consider dividers with height 1px which appears after every 3 rows
        // that's why we have to add $scope.data.length / 3 to get correct height
        return {
          height: $scope.gridDataLen * rowHeight + pivotHeaderHeight + $scope.data.length / 3 + 'px'
        };
      };

      /**
       * Scrolling to pivot table and highlights filter
       * @param { String } highlightedFilter
       * @private
       */
      var _scrollToPivot = function _scrollToPivot(highlightedFilter) {
        $('body').scrollTop($element.offset().top - pivotHeaderHeight);
        $element.find('.' + highlightedFilter).find('input').focus();
      };

      //Watching for external area term
      $scope.$watch('areaTerm', function (newVal) {
        if (newVal && newVal.name) {
          _scrollToPivot('Area');
          $scope.gridOptions.columnDefs[1].filter.term = newVal.name;
        }
      });

      /**
       * Highlights filter matching in cell
       * @param {String} text - cell text
       * @param {String} term - filter term
       * @returns {TrustedValueHolderType}
       */
      $scope.highlight = function (text, term) {
        return _this2.UtilsService.highlight(text, term);
      };
    }
  }], [{
    key: 'directiveFactory',
    value: function directiveFactory(uiGridConstants, $sce, UtilsService) {
      return new PivotTable(uiGridConstants, $sce, UtilsService);
    }
  }]);

  return PivotTable;
})();

_angular2['default'].module(moduleName, ['ui.grid', 'ui.grid.grouping', 'ui.bootstrap', 'ui.grid.autoResize', _pivotTableValue2['default'], _pivotTableDescription2['default'], _componentsUtilsService2['default']]).directive('pivotTable', PivotTable.directiveFactory);

exports['default'] = moduleName;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../pivot-table-description":89,"../pivot-table-value":91,"./view/pivot-table.html":94,"components/utils-service":70,"modules/common/views/pivot-cell-template.html":161,"modules/common/views/pivot-header-cell-template.html":162}],94:[function(require,module,exports){
(function (global){
(typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null).module('src/app/index.js').run(['$templateCache', function($templateCache){$templateCache.put('pivot-table.html','<div id="responsibilitiesPivot" ng-if="gridDataLen > 0 || isLoaded" class="ui-grid-el" ui-grid="gridOptions" class="grid" ui-grid-auto-resize ng-style="getStyle()"></div> <!-- Template for value cell --> <script type="text/ng-template" id="pivot_table_value.html"><div class="ui-grid-cell-value" ng-class="{ \'active\': col.sort.direction}">         <pivot-table-value data="COL_FIELD" filter-term="col.filters[0].term" highlight-fn="grid.appScope.highlight"></pivot-table-value>     </div></script> <!-- Template for description cell --> <script type="text/ng-template" id="pivot_table_description.html"><div class="ui-grid-cell-value" ng-class="{ \'active\' : col.sort.direction}">       <pivot-table-description data="COL_FIELD" filter-term="col.filters[0].term" highlight-fn="grid.appScope.highlight"></pivot-table-description>     </div></script>')}]);
module.exports = 'pivot-table.html';
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],95:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

require('./views/charters.analytics.html');

var _componentsAppContextService = require('components/app-context-service');

var _componentsAppContextService2 = _interopRequireDefault(_componentsAppContextService);

var _controllersAnalyticsControllerJs = require('./controllers/analytics.controller.js');

var _controllersAnalyticsControllerJs2 = _interopRequireDefault(_controllersAnalyticsControllerJs);

var _servicesAnalyticsServiceJs = require('./services/analytics.service.js');

var _servicesAnalyticsServiceJs2 = _interopRequireDefault(_servicesAnalyticsServiceJs);

var _componentsIndexTrend = require('components/index-trend');

var _componentsIndexTrend2 = _interopRequireDefault(_componentsIndexTrend);

var _componentsContributors = require('components/contributors');

var _componentsContributors2 = _interopRequireDefault(_componentsContributors);

var _componentsDoughnut = require('components/doughnut');

var _componentsDoughnut2 = _interopRequireDefault(_componentsDoughnut);

var _directivesPivotTable = require('./directives/pivot-table');

var _directivesPivotTable2 = _interopRequireDefault(_directivesPivotTable);

var moduleName = 'abiliton.charters.analytics';

angular.module(moduleName, [_componentsAppContextService2['default'], _servicesAnalyticsServiceJs2['default'], _componentsIndexTrend2['default'], _componentsContributors2['default'], _componentsDoughnut2['default'], _directivesPivotTable2['default']]).controller('AnalyticsCtrl', _controllersAnalyticsControllerJs2['default']).config(["$stateProvider", function ($stateProvider) {
  $stateProvider.state('charters.analytics', {
    url: '/analytics',
    reloadOnSearch: false,
    templateUrl: 'charters.analytics.html',
    controller: 'AnalyticsCtrl',
    onExit: ["AppContext", function onExit(AppContext) {
      AppContext.storeContext('charters');
    }]
  });
}]);

exports['default'] = moduleName;
module.exports = exports['default'];

},{"./controllers/analytics.controller.js":88,"./directives/pivot-table":93,"./services/analytics.service.js":96,"./views/charters.analytics.html":97,"components/app-context-service":12,"components/contributors":20,"components/doughnut":22,"components/index-trend":28}],96:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var moduleName = 'analytics.service';

/*@ngInject*/

var AnalyticsService = (function () {
  AnalyticsService.$inject = ["$http"];
  function AnalyticsService($http) {
    _classCallCheck(this, AnalyticsService);

    this.$http = $http;
  }

  /**
   * Makes api call to /api/charter-metrics
   * @param {Object} config
   *  {
   *    metric_ids: 1,
   *    entity_ids: [1, 2],
   *    start_year: 2014,
   *    end_year: 2015,
   *    end_quarter: 3,
   *    start_quarter: 2
   *  }
   *
   * @returns {Promise}
   *  {
   *    "data_availability": {
   *      "44":"available",
   *      "48":"available"
   *    },
   *    "limit_values": {
   *      "Index": {
   *        "min":0.7254640302243175,
   *        "max":0.9421459237641264
   *      }
   *    },
   *    "data": [{
   *      "date": 1438214400000,
   *      "values": {
   *        "44":0.8301165285130682,
   *        "48":0.7450918958293391}
   *      }, {
   *      "date":1438473600000,
   *      "values": {
   *        "44":0.8413373963848011,
   *        "48":0.7652222045387381
   *        }
   *      }],
   *    "index_thresholds":{"yellow":0.8,"red":0.6}
   *  }
   */

  _createClass(AnalyticsService, [{
    key: 'getMetricData',
    value: function getMetricData(config) {
      if (!config) {
        return null;
      }

      return this.$http.get('/api/charter-metrics', {
        params: {
          metric_ids: config.metric_ids,
          charter_ids: config.charter_ids,
          start_year: config.start_year,
          start_quarter: config.start_quarter,
          end_year: config.end_year,
          end_quarter: config.end_quarter
        }
      });
    }

    /**
     * Makes api call to /api/metrics-on-date
     * @param {Object} config
     *  {
     *    metric_ids: [1],
     *    entity_ids: [1, 2],
     *    om_date: 1442102400000
     *  }
     *
     * @returns {Promise}
     *  {
     *    "index_thresholds": { "yellow": 0.8, "red": 0.6 },
     *    "data": {
     *      "on_date": 1438300800000,
     *      "values": {
     *        "48": 0.926635884361832,
     *        "52": 0.6103929238269915,
     *        "44": 0.597565459341647
     *      }
     *    }
     *  }
     */
  }, {
    key: 'getMetricOnDateData',
    value: function getMetricOnDateData(config) {
      if (!config) {
        return null;
      }

      return this.$http.get('/api/metrics-on-date', {
        params: {
          metric_ids: config.metric_ids,
          entity_ids: config.entity_ids,
          on_date: config.on_date
        }
      });
    }

    /**
     * Makes api call to /api/area-metrics
     * @param {Object} config
     *  {
     *    metric_ids: [1],
     *    entity_ids: [1, 2],
     *    om_date: 1442102400000
     *  }
     *
     * @returns {Promise}
     */
  }, {
    key: 'getContributorsData',
    value: function getContributorsData(config) {
      if (!config) {
        return null;
      }

      return this.$http.get('/api/index-contributors', {
        params: {
          metric_ids: config.metric_ids,
          entity_ids: config.entity_ids,
          on_date: config.on_date
        }
      });
    }

    /**
     * Makes api call to /api/area-metrics
     * @param {Object} config
     *  {
     *    charter_ids: [1],
     *    om_date: 1442102400000
     *  }
     *
     * @returns {Promise}
     *  {
     *    "responsibility":
     *      {
     *        "area_name_1": value1,
     *        "area_name_2": value2,
     *        ...
     *      },
     *    "client_experience":
     *      {
     *        "area_name_1": value1,
     *        "area_name_2": value2,
     *        ...
     *      }
     *   }
     */
  }, {
    key: 'getAreaMetricsData',
    value: function getAreaMetricsData(config) {
      if (!config) {
        return null;
      }

      return this.$http.get('/api/area-metrics', {
        params: {
          charter_ids: config.charter_ids,
          on_date: config.on_date
        }
      });
    }

    /**
     * Makes api call to /api/charter-pivot
     * @param {Object} config
     *  {
     *    charter_ids: [1],
     *    year: 2016,
     *    quarter: 1
     *  }
     *
     * @returns {Promise}
     *  {
     *     'charter': charter.name,
     *     'area': area.name,
     *     'metric':  metric.name,
     *     'metric_value': {
     *         'absolute': value,
     *         'normalized': normalized,
     *         'normalized_zone': {red|yellow|green}
     *         'thresholds': {
     *             'red': 12,
     *             'yellow': 2,
     *             'target': 1,
     *         }
     *     }
     *   }
     */
  }, {
    key: 'getPivotTableData',
    value: function getPivotTableData(config) {
      if (!config) {
        return null;
      }

      return this.$http.get('/api/charter-pivot', {
        params: {
          charter_ids: config.charter_ids,
          year: config.year,
          quarter: config.quarter
        }
      });
    }
  }], [{
    key: 'serviceFactory',
    value: function serviceFactory($http) {
      return new AnalyticsService($http);
    }
  }]);

  return AnalyticsService;
})();

angular.module(moduleName, []).factory('AnalyticsService', AnalyticsService.serviceFactory);

exports['default'] = moduleName;
module.exports = exports['default'];

},{}],97:[function(require,module,exports){
(function (global){
(typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null).module('src/app/index.js').run(['$templateCache', function($templateCache){$templateCache.put('charters.analytics.html','<div class="panel-wrapper charter-analytics"> <div class="panel-name visible"> <div class="f-left">Summary</div> </div> <div class="panel panel-default"> <div class="panel-body panel-single" min-height> <loading-indicator ng-if="false" indicator-size="16px" max-width="120px" display-center="true"></loading-indicator> <div class="analysis-no-data" ng-show="!isPresentCharters()"> <span class="no-data-icon"></span> <div class="title">No charters selected.</div> <div class="message"> To start analyzing your data, please select at least one charter from the Context panel on the left. </div> </div> <div class="display-flex border-bottom" ng-if="isPresentCharters()"> <div class="col-xs-6 panel-column analytics-column" ng-class=" { \'padding-left-none\': $index === 0,  \'padding-right-none\': $index === chartsData.length }" ng-repeat="item in chartsData"> <h2 class="ta-center">{{ item.label }}</h2> <div class="analytics-charts-wrapper"> <div class="analytics-charts"> <div class="doughnut-wrapper"> <div doughnut="item.doughnut" doughnut-height="140" config="getDoughnutConfig(item.name)" ng-if="isFullfilled"></div> <div class="ad-loading ad-loading-doughnut" ng-if="!isFullfilled"> <div class="loading-img"></div> </div> </div> <div class="trend-wrapper"> <div height="140" index-trend="item.indexTrend" config="getTrendConfig(item.name)" ng-if="isFullfilled"></div> <div class="ad-loading ad-loading-indextrend" ng-if="!isFullfilled"> <div class="loading-img"></div> </div> </div> </div> <div class="display-flex"> <div class="col-xs-6 panel-column padding-left-none"> <h3 class="ta-center">Charters</h3> <contributors data="item.contributors.data" contributors-type="\'charters\'" contributors-order="\'-value\'" thresholds="item.contributors.thresholds" ng-if="isFullfilled && isPresentCharters()" contributors-item-action="selectCharter(id)"></contributors> <div class="ad-loading ad-loading-contributors analysis-contributors-loader" ng-if="!isFullfilled"> <div class="loading-img"></div> </div> </div> <div class="col-xs-6 panel-column padding-right-none"> <h3 class="ta-center">Areas</h3> <contributors data="item.areas.data" contributors-type="\'areas\'" contributors-order="\'-value\'" thresholds="item.areas.thresholds" ng-if="isFullfilled && isPresentCharters()" hide-divider contributors-item-action="selectArea(id)"></contributors> <div class="ad-loading ad-loading-contributors analysis-contributors-loader" ng-if="!isFullfilled"> <div class="loading-img"></div> </div> </div> </div> </div> </div> </div> <span ng-if="isPresentCharters()" class="pivot-table-title">SoftServe Responsibilities</span> <div class="ad-loading ad-loading-pivot" ng-if="isPresentCharters() && !isPivotDataLoaded"> <div class="loading-img"></div> </div> <pivot-table ng-if="isPivotDataLoaded && isPresentCharters()" data="pivotData" quarter="endQuarter" area-term="selectedArea"></pivot-table> </div> </div> </div>')}]);
module.exports = 'charters.analytics.html';
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],98:[function(require,module,exports){
'use strict';

/*@ngInject*/
Object.defineProperty(exports, '__esModule', {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var CharterFilterCtrl = function CharterFilterCtrl($scope, AppContext) {
  var _this = this;

  _classCallCheck(this, CharterFilterCtrl);

  this.$scope = $scope;

  this.$scope.data = AppContext.getCharterFilterData();
  this.$scope.filter = AppContext.getCharterFilter();

  /**
   * Resets filters to default state
   */
  this.$scope.resetFilter = function () {
    return _this.$scope.filter = AppContext.resetCharterFilter();
  };
};

exports['default'] = CharterFilterCtrl;
module.exports = exports['default'];

},{}],99:[function(require,module,exports){
'use strict';

/*@ngInject*/
Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var CharterTableCtrl = (function () {
  function CharterTableCtrl($scope, $state, AppContext, EntitiesService, ErrorService, PermissionsService, VerticalService, DeliveryUnitService, UtilsService) {
    var _this = this;

    _classCallCheck(this, CharterTableCtrl);

    this.$scope = $scope;
    this.$state = $state;
    this.AppContext = AppContext;
    this.EntitiesService = EntitiesService;
    this.ErrorService = ErrorService;
    this.Utils = UtilsService;
    this.VerticalService = VerticalService;
    this.DeliveryUnitService = DeliveryUnitService;
    this._promiseName = 'charter';

    this.data = {
      accounts: null,
      verticals: null,
      deliveryUnits: null
    };

    this.$scope.data = null;
    this.$scope.reverse = false;
    this.$scope.deviderStep = 3;
    this.$scope.filteredList = { data: [] };
    this.$scope.isRequestError = false;
    this.$scope.isContentLoaded = false;

    this.$scope.sortBy = ['account.name', 'name'];

    this.$scope.doSort = function (fieldsName) {
      return _this._doSort(fieldsName);
    };
    this.$scope.getValidity = function (valid_until) {
      return _this._getValidity(valid_until);
    };
    this.$scope.goToCharter = function (id) {
      return _this._goToCharter(id);
    };
    this.$scope.isSortedBy = function (fieldName) {
      return fieldName === _this.$scope.sortBy.join(',');
    };
    this.$scope.filterCharters = function (item) {
      return _this._filterCharters(item);
    };
    this.$scope.canCreate = function () {
      return PermissionsService.canAny('createCharter');
    };
    this.$scope.createCharter = function () {
      return $state.go('charters.charter.create', $state.params);
    };
    this.$scope.goToHierarchy = function () {
      return $state.go('charters.hierarchy', $state.params);
    };
    this.$scope.isAvailable = function () {
      return !PermissionsService.isClientRole();
    };

    AppContext.setActiveTabState($state.current.name);
    AppContext.setPromise(this._promiseName, angular.bind(EntitiesService, EntitiesService.getEntitiesData));

    this.$scope.$watch(function () {
      return _this.data;
    }, function (newVal) {
      if (newVal.accounts && newVal.verticals && newVal.deliveryUnits) {
        _this.getCharters();
      }
    }, true);

    this.initializeData();
  }

  /**
   * Handles request error
   * @param {Object} error - request error
   * @private
   */

  _createClass(CharterTableCtrl, [{
    key: '_handleError',
    value: function _handleError(error) {
      this.$scope.isRequestError = true;
      this.$scope.errorMessage = this.ErrorService.getError(error);
      this.$scope.isContentLoaded = true;
    }

    /**
     * Does table sorting by field name
     * @param {String} fieldsName - field name
     * @private
     */
  }, {
    key: '_doSort',
    value: function _doSort(fieldsName) {
      this.$scope.sortBy = fieldsName.split(',');
      this.$scope.reverse = !this.$scope.reverse;
    }

    /**
     * Checks the validity of charter's valid date
     * @param {Null|String} valid_until - date string
     * @private
     * @returns {Boolean}
     */
  }, {
    key: '_getValidity',
    value: function _getValidity(valid_until) {
      if (valid_until) {
        var date = this.Utils.adoptTime(valid_until);

        return this.Utils.isDateStillValid(date);
      }

      return null;
    }

    /**
     * Goes to charter Business Case
     * @param {Number} id - charter id
     * @private
     */
  }, {
    key: '_goToCharter',
    value: function _goToCharter(id) {
      this.$state.go('charters.charter.view', { id: id });
    }

    /**
     * Applies filters to charter table
     * @param {Object} item
     * @returns {Object}
     * @private
     */
  }, {
    key: '_filterCharters',
    value: function _filterCharters(item) {
      var _checkSelection = function _checkSelection(item, data, prop) {
        if (!item[prop] && data[prop].id) {
          return false;
        }

        return data[prop].id ? data[prop].name === item[prop].name : true;
      };

      var _checkInput = function _checkInput(item, data, prop) {
        if (!data[prop]) {
          return true;
        }

        if (data[prop].length < 2) {
          return true;
        }

        var str = data[prop].toLowerCase();

        if (item[prop].toLowerCase().indexOf(str) === 0) {
          return true;
        }

        var names = item[prop].split(' ');
        var nameExists = false;

        for (var i = 0, len = names.length; i < len; i++) {
          if (names[i].toLowerCase().indexOf(str) === 0) {
            nameExists = true;
            break;
          }
        }

        return nameExists;
      };

      var filter = this.AppContext.getCharterFilter();

      var status = _checkSelection(item, filter, 'status');
      var account = _checkSelection(item, filter, 'account');
      var vertical = _checkSelection(item, filter, 'vertical');
      var unit = _checkSelection(item, filter, 'unit');

      var clientPartner = _checkInput(item, filter, 'clientPartner');
      var manager = _checkInput(item, filter, 'manager');

      var expired = filter.expired ? !this._getValidity(item.validUntil) : true;
      var overdue = filter.overdue ? item.overdue !== null && !item.overdue : true;

      return status && account && vertical && unit && clientPartner && manager && expired && overdue;
    }

    /**
     * Represents data in a flat style
     * @param {Array} data
     * @returns {Array}
     */
  }, {
    key: '_prepareResponseData',
    value: function _prepareResponseData(data) {
      /**
       * Adds unique item to array
       * @param {Object} item - item to add
       * @param {Array} arr - destination array
       * @private
       */
      var _addItem = function _addItem(item, arr) {
        if (item && !arr.filter(function (i) {
          return i.id === (item.id || item.key);
        }).length) {
          arr.push({ id: item.id || item.key, name: item.name || item.value });
        }
      };

      /**
       * Sorter for sorting objects like { id, name }
       */
      var _sorter = function _sorter(a, b) {
        if (a.name > b.name) {
          return 1;
        }

        if (a.name < b.name) {
          return -1;
        }

        return 0;
      };

      var status = [],
          account = [];
      var filterData = this.AppContext.getCharterFilterData();
      var filterDataExists = !angular.equals(this.AppContext.getDefCharterFilterData(), filterData);

      var result = data.map(function (item) {
        var details = item.attrs.internal_details;

        if (!filterDataExists) {
          _addItem(details.charter_status, status);
        }

        return {
          id: item.id,
          account: item.attrs.internal_details.account,
          name: item.name,
          unit: item.delivery_unit || { name: '' },
          vertical: item.vertical,
          clientPartner: item.client_partner ? item.client_partner.name : '',
          manager: item.manager ? item.manager.name : '',
          validUntil: item.attrs.valid_until,
          status: {
            id: item.attrs.internal_details.charter_status.key,
            name: item.attrs.internal_details.charter_status.value
          },
          commit: item.all_periods_committed,
          overdue: item.all_prev_periods_committed
        };
      });

      if (!filterDataExists) {
        account = this.data.accounts.map(function (account) {
          return { id: account.id, name: account.name };
        });

        filterData.status = filterData.status.concat(status.sort(_sorter));
        filterData.account = filterData.account.concat(account.sort(_sorter));
        filterData.vertical = filterData.vertical.concat(this.data.verticals.sort(_sorter));
        filterData.unit = filterData.unit.concat(this.data.deliveryUnits.sort(_sorter));
      }

      return result;
    }

    /**
     * Initializes charters table data
     */
  }, {
    key: 'initializeData',
    value: function initializeData() {
      this.getAccounts();
      this.getVerticals();
      this.getDeliveryUnits();
    }

    /**
     * Retrieves accounts from server
     */
  }, {
    key: 'getAccounts',
    value: function getAccounts() {
      var _this2 = this;

      var accountPromise = this.AppContext.getPromise('account');

      if (accountPromise) {
        accountPromise.then(function (res) {
          return _this2.data.accounts = res.data;
        }, function (error) {
          return _this2._handleError(error);
        });
      }
    }

    /**
     * Retrieves verticals from server
     */
  }, {
    key: 'getVerticals',
    value: function getVerticals() {
      var _this3 = this;

      this.VerticalService.getVerticals().then(function (res) {
        return _this3.data.verticals = res.data;
      }, function (error) {
        return _this3._handleError(error);
      });
    }

    /**
     * Retrieves delivery units from server
     */
  }, {
    key: 'getDeliveryUnits',
    value: function getDeliveryUnits() {
      var _this4 = this;

      this.DeliveryUnitService.getDeliveryUnits().then(function (res) {
        return _this4.data.deliveryUnits = res.data;
      }, function (error) {
        return _this4._handleError(error);
      });
    }

    /**
     * Retrieves charters from server
     */
  }, {
    key: 'getCharters',
    value: function getCharters() {
      var _this5 = this;

      this.AppContext.getPromise(this._promiseName).then(function (res) {
        _this5.$scope.data = _this5._prepareResponseData(res.data);
        _this5.$scope.isContentLoaded = true;
      }, function (error) {
        return _this5._handleError(error);
      });
    }
  }]);

  return CharterTableCtrl;
})();

exports['default'] = CharterTableCtrl;
module.exports = exports['default'];

},{}],100:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

require('./views/charter.table.html');

require('./views/charter.filter.html');

var _controllersCharterTableControllerJs = require('./controllers/charter.table.controller.js');

var _controllersCharterTableControllerJs2 = _interopRequireDefault(_controllersCharterTableControllerJs);

var _controllersCharterFilterControllerJs = require('./controllers/charter.filter.controller.js');

var _controllersCharterFilterControllerJs2 = _interopRequireDefault(_controllersCharterFilterControllerJs);

var _componentsEntitiesService = require('components/entities-service');

var _componentsEntitiesService2 = _interopRequireDefault(_componentsEntitiesService);

var _componentsErrorService = require('components/error-service');

var _componentsErrorService2 = _interopRequireDefault(_componentsErrorService);

var _servicesVertical = require('./services/vertical');

var _servicesVertical2 = _interopRequireDefault(_servicesVertical);

var _servicesDeliveryUnit = require('./services/delivery-unit');

var _servicesDeliveryUnit2 = _interopRequireDefault(_servicesDeliveryUnit);

var _componentsUtilsService = require('components/utils-service');

var _componentsUtilsService2 = _interopRequireDefault(_componentsUtilsService);

var moduleName = 'abiliton.charter.table';

angular.module(moduleName, [_componentsEntitiesService2['default'], _componentsErrorService2['default'], _servicesVertical2['default'], _servicesDeliveryUnit2['default'], _componentsUtilsService2['default'], 'ui.router']).controller('CharterTableCtrl', _controllersCharterTableControllerJs2['default']).controller('CharterFilterCtrl', _controllersCharterFilterControllerJs2['default']).config(["$stateProvider", function ($stateProvider) {
  $stateProvider.state('charters.chartertable', {
    url: '/chartertable',
    reloadOnSearch: false,
    views: {
      '': {
        templateUrl: 'charter.table.html',
        controller: 'CharterTableCtrl'
      },
      'context@': {
        templateUrl: 'charter.filter.html',
        controller: 'CharterFilterCtrl'
      }
    }
  });
}]);

exports['default'] = moduleName;
module.exports = exports['default'];

},{"./controllers/charter.filter.controller.js":98,"./controllers/charter.table.controller.js":99,"./services/delivery-unit":101,"./services/vertical":102,"./views/charter.filter.html":103,"./views/charter.table.html":104,"components/entities-service":23,"components/error-service":24,"components/utils-service":70}],101:[function(require,module,exports){
(function (global){
"use strict";

/***************

 This service makes call to API /api/delivery-unit

 Response data format:
 [{
      "id": 1,
      "name": "Delivery Unit 1"
    }, {
      "id": 2
      "name": "Delivery Unit 2",
    },
 ...
 ]

 ***************/

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null);

var _angular2 = _interopRequireDefault(_angular);

var moduleName = 'delivery.unit.service';

/*@ngInject*/

var DeliveryUnitService = (function () {
  DeliveryUnitService.$inject = ["$http"];
  function DeliveryUnitService($http) {
    _classCallCheck(this, DeliveryUnitService);

    this.$http = $http;
  }

  /**
   * Makes call to API /delivery-unit and returns promise
   * @returns {Object} verticals promise
   */

  _createClass(DeliveryUnitService, [{
    key: 'getDeliveryUnits',
    value: function getDeliveryUnits() {
      return this.$http.get('/api/delivery-unit');
    }
  }]);

  return DeliveryUnitService;
})();

_angular2['default'].module(moduleName, []).service('DeliveryUnitService', DeliveryUnitService);

exports['default'] = moduleName;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],102:[function(require,module,exports){
(function (global){
"use strict";

/***************

 This service makes call to API /api/vertical

 Response data format:
 [{
      "id": 1,
      "name": "Vertical 1"
    }, {
      "id": 2
      "name": "Vertical 2",
    },
    ...
 ]

 ***************/

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null);

var _angular2 = _interopRequireDefault(_angular);

var moduleName = 'vertical.service';

/*@ngInject*/

var VerticalService = (function () {
  VerticalService.$inject = ["$http"];
  function VerticalService($http) {
    _classCallCheck(this, VerticalService);

    this.$http = $http;
  }

  /**
   * Makes call to API /vertical and returns promise
   * @returns {Object} verticals promise
   */

  _createClass(VerticalService, [{
    key: 'getVerticals',
    value: function getVerticals() {
      return this.$http.get('/api/vertical');
    }
  }]);

  return VerticalService;
})();

_angular2['default'].module(moduleName, []).service('VerticalService', VerticalService);

exports['default'] = moduleName;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],103:[function(require,module,exports){
(function (global){
(typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null).module('src/app/index.js').run(['$templateCache', function($templateCache){$templateCache.put('charter.filter.html','<div class="panel-wrapper charter-filter"> <div class="panel-name"> <div class="f-left">Filter</div> <a href="" class="f-right" ng-click="resetFilter()">RESET</a> </div> <div class="panel panel-default"> <div class="panel-body"> <div class="charter-info-list row"> <div class="charter-info-list-item"> <div class="col-xs-4"> <label class="charter-label">Status</label> </div> <div class="col-xs-8"> <select class="d-block fullwidth" ng-model="filter.status" ng-options="item as item.name for item in data.status"> </select> </div> </div> </div> <div class="divider"></div> <div class="charter-info-list row"> <div class="charter-info-list-item"> <div class="col-xs-4"> <label class="charter-label">Account</label> </div> <div class="col-xs-8"> <select class="d-block fullwidth" ng-model="filter.account" ng-options="item as item.name for item in data.account"> </select> </div> </div> <div class="charter-info-list-item"> <div class="col-xs-4"> <label class="charter-label">Unit</label> </div> <div class="col-xs-8"> <select class="d-block fullwidth" ng-model="filter.unit" ng-options="item as item.name for item in data.unit"> </select> </div> </div> <div class="charter-info-list-item"> <div class="col-xs-4"> <label class="charter-label">Vertical</label> </div> <div class="col-xs-8"> <select class="d-block fullwidth" ng-model="filter.vertical" ng-options="item as item.name for item in data.vertical"> </select> </div> </div> </div> <div class="divider"></div> <div class="charter-info-list row"> <div class="charter-info-list-item"> <div class="col-xs-4"> <label class="charter-label">Client Partner</label> </div> <div class="col-xs-8"> <input class="d-block fullwidth" type="text" placeholder="Enter name, min 2 symbols" ng-trim="true" ng-model="filter.clientPartner"> </div> </div> <div class="charter-info-list-item"> <div class="col-xs-4"> <label class="charter-label">Manager</label> </div> <div class="col-xs-8"> <input class="d-block fullwidth" type="text" placeholder="Enter name, min 2 symbols" ng-trim="true" ng-model="filter.manager"> </div> </div> </div> <div class="divider"></div> <div class="charter-info-list row"> <div class="charter-info-list-item"> <input id="expired" class="ad-filter-checkbox" type="checkbox" ng-model="filter.expired"> <label class="col-xs-6 cb-charter-label" for="expired">Expired only</label> </div> <div class="charter-info-list-item"> <input id="overdue" class="ad-filter-checkbox" type="checkbox" ng-model="filter.overdue"> <label class="col-xs-6 cb-charter-label" for="overdue">Overdue only</label> </div> </div> </div> </div> </div>')}]);
module.exports = 'charter.filter.html';
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],104:[function(require,module,exports){
(function (global){
(typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null).module('src/app/index.js').run(['$templateCache', function($templateCache){$templateCache.put('charter.table.html','<div class="panel-wrapper charter-table"> <div class="ad-tab ad-tab-large o-hid"> <ul class="nav nav-tabs" role="tablist"> <li class="active"> <a href="">Register</a> </li> <li ng-if="isAvailable()"> <a href="" ng-click="goToHierarchy()">Hierarchy</a> </li> <div class="panel-name visible"> <a href="" class="f-right" ng-click="createCharter()" ng-if="canCreate()">CREATE CHARTER</a> </div> </ul> <div class="tab-content" min-height> <loading-indicator ng-if="!isRequestError && !isContentLoaded" indicator-size="16px" max-width="120px" display-center="true"></loading-indicator> <div class="table-no-data" ng-if="!isRequestError && !data.length && isContentLoaded"> <span class="no-data-icon"></span> <div class="title">You have no charters available</div> </div> <div class="table-no-data" ng-if="!isRequestError && data.length && isContentLoaded && !filteredList.data.length"> <span class="no-data-icon"></span> <div class="title">No matches found</div> <div class="message"> Please try to change filter parameters. </div> </div> <div ng-if="!isRequestError && isContentLoaded && data.length" ng-show="filteredList.data.length"> <div class="table-header row"> <div class="charter-col charter-name" ng-click="doSort(\'account.name,name\')"> Charter Name <span ng-class="{ \'arrow-bottom\': !reverse, \'arrow-top\': reverse, \'opacity100\': isSortedBy(\'account.name,name\') }"></span> </div> <div class="charter-col delivery-unit" ng-click="doSort(\'unit.name\')"> Delivery Unit <span ng-class="{ \'arrow-bottom\': !reverse, \'arrow-top\': reverse, \'opacity100\': isSortedBy(\'unit.name\') }"></span> </div> <div class="charter-col client-partner" ng-click="doSort(\'clientPartner\')"> Client Partner <span ng-class="{ \'arrow-bottom\': !reverse, \'arrow-top\': reverse, \'opacity100\': isSortedBy(\'clientPartner\') }"></span> </div> <div class="charter-col manager" ng-click="doSort(\'manager\')"> Manager <span ng-class="{ \'arrow-bottom\': !reverse, \'arrow-top\': reverse, \'opacity100\': isSortedBy(\'manager\') }"></span> </div> <div class="charter-col valid-until text-center" ng-click="doSort(\'validUntil\')"> Valid Until <span ng-class="{ \'arrow-bottom\': !reverse, \'arrow-top\': reverse, \'opacity100\': isSortedBy(\'validUntil\') }"></span> </div> <div class="charter-col status text-center" ng-click="doSort(\'status.name\')"> Status <span ng-class="{ \'arrow-bottom\': !reverse, \'arrow-top\': reverse, \'opacity100\': isSortedBy(\'status.name\') }"></span> </div> <div class="charter-col commit text-center" ng-click="doSort(\'commit\')"> Commit <span ng-class="{ \'arrow-bottom\': !reverse, \'arrow-top\': reverse, \'opacity100\': isSortedBy(\'commit\') }"></span> </div> <div class="charter-col info text-center">Info</div> <div class="divider"></div> </div> <div ng-repeat="item in filteredList.data = (data | orderBy:sortBy:reverse | filter:filterCharters)" class="table-row row"> <div class="charter-col charter-name"> <div class="brushed-col"> <span class="description"> {{ item.account.name }}: {{ item.name }} </span> </div> </div> <div class="charter-col delivery-unit"> <span class="description">{{ item.unit.name }}</span> </div> <div class="charter-col client-partner"> <span class="description">{{ item.clientPartner }}</span> </div> <div class="charter-col manager"> <span class="description">{{ item.manager }}</span> </div> <div class="charter-col valid-until text-center"> <span class="description" ng-class="{ \'expired\': !getValidity(item.validUntil) }"> {{ item.validUntil | date:\'MMM d, yyyy\' }} </span> </div> <div class="charter-col status text-center"> <span class="description" ng-class="{ \'active-charter\': item.status.id === \'active\' }"> {{ item.status.name }} </span> </div> <div class="charter-col commit text-center"> <span class="ch-glyphicon" ng-class="{ true: \'glyphicon-ok\', false: \'glyphicon-remove\', null: \'null\' }[item.commit]"></span> </div> <div class="charter-col info text-center"> <a href="" class="charter-info" ng-click="goToCharter(item.id)"> <span class="icon icon-info"></span> </a> </div> <div class="divider" ng-show="($index + 1) % deviderStep === 0 || $last"></div> </div> </div> <div ng-if="isRequestError" class="charters-summary"> <span class="summary-icon"></span> <div class="charter-message"> <div class="title">{{ errorMessage }}</div> </div> </div> </div> </div> </div>')}]);
module.exports = 'charter.table.html';
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],105:[function(require,module,exports){
(function (global){
'use strict';

/***************

 The controller which serves chart creation view
 View location: ./views/charter.create.html

 ***************/

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null);

var _angular2 = _interopRequireDefault(_angular);

/*@ngInject*/

var CharterCreateCtrl = (function () {
  CharterCreateCtrl.$inject = ["$scope", "$state", "CharterService", "BackDropService", "UsersService", "RolesService", "$uibModal", "ErrorService", "ChoiceService", "ContextStateService", "AccountChildrenService", "AppContext", "PermissionsService", "BusinessService", "EntitiesService"];
  function CharterCreateCtrl($scope, $state, CharterService, BackDropService, UsersService, RolesService, $uibModal, ErrorService, ChoiceService, ContextStateService, AccountChildrenService, AppContext, PermissionsService, BusinessService, EntitiesService) {
    _classCallCheck(this, CharterCreateCtrl);

    if (PermissionsService.isClientRole()) {
      $state.go('charters');
    }

    this.editMode = !! +$state.params.id;
    this.previousState = AppContext.getRouterState('previous');
    this.accountId = +$state.params['account_id'];
    this.businessId = +$state.params['business_id'];

    $scope.unknownAccount = this.editMode ? false : !this.accountId;

    this.scope = $scope;
    this.state = $state;
    this.Charter = CharterService.getResource();
    this.CharterLogo = CharterService.getLogoResource();
    this.backDropService = BackDropService;
    this.usersService = UsersService;
    this.rolesService = RolesService;
    this.choiceService = ChoiceService;
    this.ContextStateService = ContextStateService;
    this.accountChildrenService = AccountChildrenService;
    this.appContext = AppContext;
    this.Permissions = PermissionsService;
    this.BusinessService = BusinessService;
    this.$modal = $uibModal;
    this.ErrorService = ErrorService;
    this.EntitiesService = EntitiesService;

    this.init();
  }

  /**
   *  Initializes handlers, data
   */

  _createClass(CharterCreateCtrl, [{
    key: 'init',
    value: function init() {
      var _this = this;

      this.roles = [];
      this.scope.users = [];
      this.logoOperations = [];
      this.scope.businesses = [];
      this.scope.accounts = [];
      this.scope.charterInfo = {};
      this.isRequestError = false;
      this.scope.isGetCharterError = false;
      this.requestsStack = [];
      this.scope.editMode = this.editMode;
      this.scope.permissions = {};
      this.scope.isLoadingData = true;
      this.scope.isFullfilled = false;
      this.scope.businessExists = false;

      this.defaultItems = [{ name: '--Please select--' }];

      this.stakeHolders = {
        client_partner: 'cp',
        manager: 'pm'
      };

      this.errorsCfg = {
        required: 'Required (*) fields cannot be empty',
        logoInvalidSize: 'File should be less than 10 MB',
        logoInvalidFormat: 'Format of file is not supported. Supported formats are: jpg, jpeg, png and gif',
        emptyBusiness: 'Please note that you left Business Segment/Line field empty. Stakeholders of the corresponding Business Segment/Line won\'t be able to access charter information, unless you fill the Business Segment/Line field.'
      };

      this.errorType = {
        required: 'required',
        user: 'user',
        date: 'date',
        children: 'children',
        invalid: 'invalid',
        request: 'request'
      };

      this.scope.fieldsCfg = {
        name: {
          id: 'field-' + this.generateNumber(),
          name: 'name',
          required: true,
          label: 'Charter Name',
          maxLength: 50,
          tips: '(50 chars max)',
          tabIndex: 1,
          errors: {
            required: 'Required',
            invalid: 'Charter name is not unique'
          }
        },
        budget_owner: {
          id: 'field-' + this.generateNumber(),
          name: 'budgetOwner',
          label: 'Budget Owner',
          required: true,
          tabIndex: 2,
          errors: {
            required: 'Required'
          }
        },
        client_partner: {
          id: 'field-' + this.generateNumber(),
          name: 'clientPartner',
          label: 'Client Partner',
          tabIndex: 3,
          required: true,
          minLength: 2,
          errors: {
            required: 'Required',
            invalid: 'Invalid user',
            tip: 'Minimum search length is 2 symbols',
            noResults: 'No matches found'
          }
        },
        manager: {
          id: 'field-' + this.generateNumber(),
          name: 'manager',
          label: 'Manager',
          tabIndex: 4,
          required: true,
          minLength: 2,
          errors: {
            required: 'Required',
            invalid: 'Invalid user',
            tip: 'Minimum search length is 2 symbols',
            noResults: 'No matches found'
          }
        },
        valid_until: {
          id: 'field-' + this.generateNumber(),
          name: 'validUntil',
          label: 'Valid until',
          tabIndex: 5,
          required: true,
          minDate: new Date(),
          errors: {
            required: 'Required',
            invalid: 'Date cannot be in the past'
          }
        },
        description: {
          id: 'field-' + this.generateNumber(),
          name: 'description',
          label: 'Business Case description',
          tips: '(This and below - 1000 chars max)',
          newLineTip: true,
          maxLength: 1000,
          inputCol: 8,
          tabIndex: 6,
          errors: {
            required: 'Required'
          }
        },
        business_need: {
          id: 'field-' + this.generateNumber(),
          name: 'need',
          label: 'Client business need',
          tips: '(Goal)',
          inputCol: 8,
          maxLength: 1000,
          tabIndex: 7,
          errors: {
            required: 'Required'
          }
        },
        constraints: {
          id: 'field-' + this.generateNumber(),
          name: 'constraints',
          label: 'Constraints',
          tips: '(Scope, Time, Cost)',
          inputCol: 8,
          maxLength: 1000,
          tabIndex: 8,
          errors: {
            required: 'Required'
          }
        },
        charter_status: {
          id: 'field-' + this.generateNumber(),
          name: 'status',
          label: 'Status',
          tabIndex: 9,
          inputCol: 4,
          items: []
        },
        customer_department: {
          id: 'field-' + this.generateNumber(),
          name: 'department',
          label: 'Customer Department',
          tabIndex: 10,
          inputCol: 4
        },
        type_of_work: {
          id: 'field-' + this.generateNumber(),
          name: 'workType',
          label: 'Type of work',
          tabIndex: 11,
          inputCol: 4,
          items: []
        },
        account: {
          id: 'field-' + this.generateNumber(),
          name: 'account',
          label: 'Account',
          tabIndex: 12,
          inputCol: 4,
          required: true,
          items: [],
          errors: {
            required: 'Required'
          }
        },
        business: {
          id: 'field-' + this.generateNumber(),
          name: 'business',
          label: 'Business Segment/Line',
          tabIndex: 12,
          inputCol: 4,
          items: [],
          errors: {
            required: 'Required'
          }
        },
        collection_basis: {
          id: 'field-' + this.generateNumber(),
          name: 'collection',
          label: 'Collection basis',
          tabIndex: 13,
          inputCol: 4,
          items: [{ name: 'Quarterly', id: 'quarterly' }]
        },
        program_name: {
          id: 'field-' + this.generateNumber(),
          name: 'programName',
          label: 'Program Name',
          inputCol: 4,
          tabIndex: 14
        },
        projects: {
          id: 'field-' + this.generateNumber(),
          name: 'projects',
          label: 'Project Name, ID',
          tips: '(SSE)',
          inputCol: 7,
          tabIndex: 15,
          buttonLabel: 'Add project',
          items: [],
          errors: {
            invalid: 'This project is already in use'
          }
        },
        charters: {
          id: 'field-' + this.generateNumber(),
          name: 'charters',
          label: 'Service charter(s)',
          inputCol: 7,
          tabIndex: 15,
          buttonLabel: 'Add charter',
          items: [],
          errors: {
            invalid: 'This charter is already in use',
            remove: 'If you remove this charter from Program, its connection to Business Line will be lost and charter information will not be accessible for stakeholders of the corresponding business line and program charter.'
          }
        }
      };

      this.scope.onCancel = function () {
        return _this._onCancel();
      };
      this.scope.onSubmit = function (form) {
        return _this._onSubmit(form);
      };
      this.scope.submitted = function () {
        return _this.getSubmitted();
      };
      this.scope.onRemoveLogo = function () {
        return _this._onRemoveLogo();
      };
      this.scope.onSelectLogo = function (image) {
        return _this._onSelectLogo(image);
      };
      this.scope.isSegment = function (item) {
        return _this._isSegment(item);
      };
      this.scope.changeCharterType = function (item) {
        return _this._changeCharterType(item);
      };

      /**
       * Checks if business required and has selected model
       * @param {Object} model
       * @param {Boolean} required
       */
      this.scope.isBusinessValid = function (model, required) {
        return required ? !!(model && model.id) : true;
      };

      /**
       * Checks whether submitted form is invalid or has some request errors
       * It triggers invalid fields highlighting and error message showing
       * @param {Object} form
       */
      this.scope.isError = function (form) {
        return _this.getSubmitted() && form.$error.required || _this.scope.isLogoErrored || _this.isRequestError;
      };

      this.getCharterInfo();
      this.setSubmitted(false);

      this.scope.$watch(function () {
        return _this.requestsStack;
      }, function (newVal) {
        return _this.scope.isFullfilled = !_this.requestsStack.length;
      }, true);
      this.scope.$watch(function () {
        return _this.scope.charterInfo;
      }, function (newVal) {
        return _this._charterInfoWatcher(newVal);
      }, true);
      this.scope.$watch(function () {
        return _this.scope.fieldsCfg.business.items;
      }, function (newVal, oldVal) {
        return _this._businessWatcher(newVal, oldVal);
      }, true);
      this.scope.$watch(function () {
        return _this.scope.fieldsCfg.charters.items;
      }, function (newVal, oldVal) {
        return _this._charterItemsWatcher(newVal, oldVal);
      }, true);

      if (this.scope.unknownAccount) {
        this.scope.$watch(function () {
          return _this.scope.charterInfo.attrs.internal_details.account;
        }, function (account) {
          return _this._accountWatcher(account);
        });
      }
    }

    /**
     * Handler for 'Close' button
     * @private
     */
  }, {
    key: '_onCancel',
    value: function _onCancel() {
      if (this.editMode) {
        this.state.go('charters.charter.view', this.state.params);
      } else {
        this.state.go(this.previousState, this.state.params);
      }
    }

    /**
     * Handler for 'Save' button
     * @param {Object} form - form for creation
     * @private
     */
  }, {
    key: '_onSubmit',
    value: function _onSubmit(form) {
      if (!this.scope.isFullfilled || this.getSubmitted()) {
        return null;
      }

      var logoOperation = this.logoOperations.pop();

      this.setSubmitted(true);
      this._resetRequestError(form);

      if (!this.isFormValid(form)) {
        this.scope.errorMessage = this.getError();

        return null;
      }

      if (this.editMode) {
        this._confirmSave(form, { logoOperation: logoOperation }, this.updateCharter);
      } else {
        this._confirmSave(form, { logoOperation: logoOperation }, this.createCharter);
      }
    }

    /**
     * Handler for uploading logo
     * @param {File} image - selected logo
     * @private
     */
  }, {
    key: '_onSelectLogo',
    value: function _onSelectLogo(image) {
      if (!this.scope.isFullfilled) {
        return null;
      }

      if (!image) {
        return null;
      }
      var errorMessages = this._getImageErrors(image);

      if (errorMessages.length) {
        this.scope.logoErrorMessage = errorMessages.join('. ');
        this.scope.isLogoErrored = true;

        return null;
      }

      this.scope.isLogoErrored = false;
      this.scope.newLogo = image;

      this.logoOperations.pop();
      this.logoOperations.push('update');
    }

    /**
     * Gets error messages if image is invalid
     * @param {File} image - image to validate
     * @returns {Array} - array with validation messages if not valid
     * @private
     */
  }, {
    key: '_getImageErrors',
    value: function _getImageErrors(image) {
      var _this2 = this;

      var allowedLogoFormats = ['image/jpeg', 'image/png', 'image/gif'];
      var allowedSize = 10; // Megabytes
      var errorMessages = [];

      if (!image) {
        return false;
      }

      var validityRules = [{
        name: 'logoInvalidSize',
        value: image.size / 1024 / 1024 < allowedSize
      }, {
        name: 'logoInvalidFormat',
        value: allowedLogoFormats.indexOf(image.type) !== -1
      }];

      validityRules.forEach(function (validity) {
        if (!validity.value) {
          errorMessages.push(_this2.errorsCfg[validity.name]);
        }
      });

      return errorMessages;
    }

    /**
     * Handler for 'Remove logo' functionality
     * @private
     */
  }, {
    key: '_onRemoveLogo',
    value: function _onRemoveLogo() {
      if (!this.scope.isFullfilled) {
        return null;
      }

      this.logoOperations.pop();

      if (this.scope.logo) {
        this.logoOperations.push('remove');
      }

      this.scope.logo = this.scope.newLogo = this.scope.logoErrorMessage = this.scope.isLogoErrored = null;
    }

    /**
     * Returns error description by response code
     * @param {Object|String} res - response object or error code
     * @returns {String}
     * @private
     */
  }, {
    key: 'getError',
    value: function getError() {
      var res = arguments.length <= 0 || arguments[0] === undefined ? 'required' : arguments[0];

      if (_angular2['default'].isObject(res)) {
        return this.ErrorService.getError(res);
      }

      return this.errorsCfg[res];
    }

    /**
     * Setter for 'submitted' property
     * @param {Boolean} state - true|false
     */
  }, {
    key: 'setSubmitted',
    value: function setSubmitted(state) {
      this.submitted = state;
    }

    /**
     * Getter for 'submitted' property
     */
  }, {
    key: 'getSubmitted',
    value: function getSubmitted() {
      return this.submitted;
    }

    /**
     * Returns default data model for charter
     * @returns {Object}
     */
  }, {
    key: 'getDefaultModel',
    value: function getDefaultModel() {
      var parentInfo = this.getParentInfo();
      var business = this.getBusiness();
      var account = null;

      if (this.accountId) {
        account = { id: this.accountId, name: this.state.params['account'] };
      }

      return {
        name: '',
        parent_id: parentInfo.parentId,
        type: 'charter',
        business: business,
        attrs: {
          program: this._isSegment(business),
          internal_details: {
            charter_status: { id: 'inactive', name: 'Inactive' },
            account: account,
            program_name: parentInfo.programName,
            collection_basis: this.scope.fieldsCfg.collection_basis.items[0],
            charters: parentInfo.charters,
            projects: []
          }
        },
        stakeholders: []
      };
    }

    /**
     * Retrieves charter info from server
     */
  }, {
    key: 'getCharterInfo',
    value: function getCharterInfo() {
      this.getAccounts();
      this.getUsers();
      this.getRoles();
      this.getChoices();
      this.getCharter();
    }

    /**
     * Retrieves accounts from server
     */
  }, {
    key: 'getAccounts',
    value: function getAccounts() {
      var _this3 = this;

      var request = 'account';
      var promise = this.appContext.getPromise(request);

      if (promise) {
        this.requestsStack.push(request);
        promise.then(function (res) {
          var items = res.data.filter(function (item) {
            return item.can_create_charter;
          });

          _this3.scope.fieldsCfg[request].items = _this3._createArray(items);
          _this3._removeFromRequestStack(request);
        }, function (error) {
          return _this3._removeFromRequestStack(request);
        });
      }
    }

    /**
     * Retrieves BSs/BLs from api/charters/:id/businesses
     * @param {Number} id - account id
     */
  }, {
    key: 'getBusinesses',
    value: function getBusinesses(id) {
      var _this4 = this;

      var request = 'businesses';

      this.requestsStack.push(request);
      this.BusinessService.getBusinesses(id).then(function (res) {
        _this4._initBusinesses(res.data);
        _this4._removeFromRequestStack(request);
      }, function (error) {
        return _this4._removeFromRequestStack(request);
      });
    }

    /**
     * Retrieves users from api/users
     */
  }, {
    key: 'getUsers',
    value: function getUsers() {
      var _this5 = this;

      var request = 'users';

      this.requestsStack.push(request);
      this.usersService.getUsersData().then(function (res) {
        _this5.scope.users = res.data;
        _this5._removeFromRequestStack(request);
      }, function (error) {
        return _this5._removeFromRequestStack(request);
      });
    }

    /**
     * Retrieves roles from api/roles
     */
  }, {
    key: 'getRoles',
    value: function getRoles() {
      var _this6 = this;

      var request = 'roles';

      this.requestsStack.push(request);
      this.rolesService.getRoles().then(function (res) {
        _this6.roles = res.data;
        _this6._removeFromRequestStack(request);
      }, function (error) {
        return _this6._removeFromRequestStack(request);
      });
    }

    /**
     * Retrieves data for select components
     */
  }, {
    key: 'getChoices',
    value: function getChoices() {
      var _this7 = this;

      var choices = ['charter_status', 'type_of_work'];

      this.requestsStack = this.requestsStack.concat(choices);

      choices.forEach(function (choice) {
        _this7.choiceService.getChoices(choice).then(function (res) {
          var items = res.data.map(function (item) {
            return { name: item.value, id: item.key };
          });

          _this7.scope.fieldsCfg[choice].items = choice === choices[0] ? items : _this7._createArray(items);
          _this7._removeFromRequestStack(choice);
        }, function (error) {
          return _this7._removeFromRequestStack(choice);
        });
      });
    }

    /**
     * Retrieves account's children from api
     */
  }, {
    key: 'getAccountChildren',
    value: function getAccountChildren(id) {
      var _this8 = this;

      var requestCharter = 'charters';
      var requestProject = 'account_project';

      this.requestsStack.push(requestCharter);
      this.accountChildrenService.getAccountPotentialChildren(id).then(function (res) {
        var newItems = res.data.filter(function (item) {
          return item.id !== _this8.scope.charterInfo.id;
        });

        _this8.scope.fieldsCfg.charters.items = _this8._createItemsWithDefault(newItems);
        _this8._removeFromRequestStack(requestCharter);
      }, function (error) {
        return _this8._removeFromRequestStack(requestCharter);
      });

      this.requestsStack.push(requestProject);
      this.accountChildrenService.getAccountChildren(id, requestProject).then(function (res) {
        _this8.scope.fieldsCfg.projects.items = _this8._createItemsWithDefault(res.data);
        _this8._removeFromRequestStack(requestProject);
      }, function (error) {
        return _this8._removeFromRequestStack(requestProject);
      });
    }

    /**
     * Get charter data. In case of update gets it from server,
     * in case of creation gets default charter data
     */
  }, {
    key: 'getCharter',
    value: function getCharter() {
      var _this9 = this;

      if (this.editMode) {
        (function () {
          var request = 'charter_info';

          _this9.requestsStack.push(request);
          _this9.Charter.get({ id: _this9.state.params.id }).$promise.then(function (data) {
            _this9.scope.charterInfo = _this9.prepareResponseData(data);
            _this9.scope.permissions = _this9._getPermissions();

            var attrs = _this9.scope.charterInfo.attrs;

            _this9.scope.logo = attrs && attrs.logo ? attrs.logo : null;

            _this9.getAccountChildren(attrs.internal_details.account.id);
            _this9.getBusinesses(attrs.internal_details.account.id);
            _this9._removeFromRequestStack(request);
          }, function (error) {
            _this9.scope.isGetCharterError = true;
            _this9.scope.errorMessage = _this9.ErrorService.getError(error);

            _this9._removeFromRequestStack(request);
          });
        })();
      } else {
        if (this.accountId) {
          this.getBusinesses(this.accountId);
          this.getAccountChildren(this.accountId);
        } else {
          this.scope.charterInfo = this.getDefaultModel();
        }
      }
    }

    /**
     * Sends request for charter creation
     * @param {Object} form
     * @param {Object} params - Parameters
     */
  }, {
    key: 'createCharter',
    value: function createCharter(form, params) {
      var _this10 = this;

      if (this.scope.charterInfo) {
        var newCharter = undefined;
        var infoCopy = _angular2['default'].copy(this.scope.charterInfo);

        this.prepareRequestData(infoCopy);

        newCharter = new this.Charter(infoCopy);

        var promise = newCharter.$save(function (res) {
          _this10.isRequestError = false;
          _this10.state.params.id = res.id;
        });

        promise.then(function () {
          return _this10._logoOperationProxy(params.logoOperation);
        }).then(function () {
          _this10.appContext.addEntityToContext(_this10.state.params.id);
          _this10.appContext.storeContext('charters');

          _this10.state.go(_this10.previousState, _this10.state.params);
        })['catch'](function (res) {
          _this10._setRequestError(form, res);
          _this10.setSubmitted(false);
        });

        return promise;
      }
    }

    /**
     * Sends request for charter updating
     * @param {Object} form
     * @param {Object} params - Parameters
     */
  }, {
    key: 'updateCharter',
    value: function updateCharter(form, params) {
      var _this11 = this;

      if (this.scope.charterInfo) {
        var infoCopy = _angular2['default'].copy(this.scope.charterInfo);

        this.prepareRequestData(infoCopy);

        var promise = infoCopy.$update({ id: this.scope.charterInfo.id });

        promise.then(function (res) {
          _this11.isRequestError = false;
          _this11.state.params.id = res.id;
        }).then(function () {
          return _this11._logoOperationProxy(params.logoOperation);
        }).then(function () {
          _this11.state.go('charters.charter.view', _this11.state.params);
          _this11.ContextStateService.setContextState(true);
        })['catch'](function (res) {
          _this11._setRequestError(form, res);
          _this11.setSubmitted(false);
        });

        return promise;
      }
    }

    /**
     * Prepares charter's data for pushing to the server
     * @param {Object} info - source data for request
     */
  }, {
    key: 'prepareRequestData',
    value: function prepareRequestData(info) {
      var manager = this.getRole(this.stakeHolders.manager);
      var client_partner = this.getRole(this.stakeHolders.client_partner);
      var details = info.attrs.internal_details;
      var collection = details.collection_basis;

      info.attrs.valid_until = this.getLocalDate(info.attrs.valid_until);
      info.business = info.business.id || null;

      if (client_partner) {
        info.stakeholders[0].role = { id: client_partner.id, name: client_partner.name };
      }

      if (manager) {
        info.stakeholders[1].role = { id: manager.id, name: manager.name };
      }

      details.type_of_work = details.type_of_work ? details.type_of_work.id : null;
      details.collection_basis = collection ? collection.id || collection.key : null;
      details.charter_status = details.charter_status.id;
      details.charters = details.charters ? details.charters.filter(function (item) {
        return item.id;
      }) : [];
      details.projects = details.projects ? details.projects.filter(function (item) {
        return item.id;
      }) : [];

      if (!info.parent_id) {
        info.parent_id = details.account.id;
      }

      delete details.account;
    }

    /**
     * Prepares charter's response data for showing on the view
     * @param {Object} info - source data
     */
  }, {
    key: 'prepareResponseData',
    value: function prepareResponseData(info) {
      /**
       * Set stakeholder to decent place in array
       * @param {Object} stakeholder - stakeholder data
       * @param {Number} place - item order number in array
       */
      var setStakeholder = function setStakeholder(stakeholder, place) {
        info.stakeholders[place] = stakeholder ? stakeholder : {};
      };

      var manager = this.getStakeholder(info, this.stakeHolders.manager);
      var client_partner = this.getStakeholder(info, this.stakeHolders.client_partner);

      setStakeholder(client_partner, 0);
      setStakeholder(manager, 1);

      return info;
    }

    /**
     * Returns role
     * @param {String} name - role name
     * @returns {Object} - { id: roleId, name: roleName }
     */
  }, {
    key: 'getRole',
    value: function getRole(name) {
      return this.roles.filter(function (role) {
        return role.name === name;
      })[0];
    }

    /**
     * Returns stakeholder with their user and role
     * @param {Object} data - source data
     * @param {String} name - stakeholder name
     * @returns {Object|undefined}
     */
  }, {
    key: 'getStakeholder',
    value: function getStakeholder(data, name) {
      if (data && data.stakeholders) {
        return data.stakeholders.filter(function (item) {
          return item.role.name === name;
        })[0];
      }
    }

    /**
     * Checks field for validity
     * @param {Object} field
     * @param {String} errorType
     * @param {Function} condition
     */
  }, {
    key: 'checkValidity',
    value: function checkValidity(field, errorType, condition) {
      if (field) {
        if (typeof condition === 'function' && condition(field)) {
          field.$setValidity(errorType, true);
        } else {
          field.$setValidity(errorType, false);
        }
      }
    }

    /**
     * Validates form for special cases
     * @param {Object} form
     */
  }, {
    key: 'validateForm',
    value: function validateForm(form) {
      if (form) {
        var cfg = this.scope.fieldsCfg;
        var _isValidBusiness = cfg.business.required ? this._isValidModel : function () {
          return true;
        };

        this.checkValidity(form[cfg.client_partner.name], this.errorType.user, this._isValidModel);
        this.checkValidity(form[cfg.manager.name], this.errorType.user, this._isValidModel);
        this.checkValidity(form[cfg.account.name], this.errorType.required, this._isValidModel);
        this.checkValidity(form[cfg.valid_until.name], this.errorType.date, this._isValidDate);
        this.checkValidity(form[cfg.business.name], this.errorType.required, _isValidBusiness);

        this.validateChildren(form);
      }
    }

    /**
     * Checks form for validity
     * @param {Object} form - charter form
     */
  }, {
    key: 'isFormValid',
    value: function isFormValid(form) {
      this.validateForm(form);

      return form && form.$valid;
    }

    /**
     * Validates charter's children (child charters or projects)
     * @param {Object} form
     */
  }, {
    key: 'validateChildren',
    value: function validateChildren(form) {
      var indexes = [];
      var field = 'child-';
      var attrs = this.scope.charterInfo.attrs;
      var cfg = this.scope.fieldsCfg;

      var fieldName = cfg.projects.name;
      var children = 'projects';

      var items = attrs.internal_details[children] || [];

      for (var i = 0, len1 = items.length; i < len1; i++) {
        form[field + i][fieldName].$setValidity(this.errorType.children, true);

        for (var j = i + 1, len2 = items.length; j < len2; j++) {
          if (items[i].id && items[i].id === items[j].id) {
            indexes.push(j);
          }
        }
      }

      for (var i = 0, len = indexes.length; i < len; i++) {
        form[field + indexes[i]][fieldName].$setValidity(this.errorType.children, false);
      }
    }

    /**
     * Generates random number
     * @returns {number}
     */
  }, {
    key: 'generateNumber',
    value: function generateNumber() {
      return Math.round(10000 * Math.random());
    }

    /**
     * Finds parent (program charter or account) and returns its id and program name
     * @param {Null|Number} account_id
     * @param {Null|Number} business_id
     * @returns {Object}
     */
  }, {
    key: 'getParentInfo',
    value: function getParentInfo() {
      var account_id = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
      var business_id = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

      var accountId = account_id || this.accountId;
      var businessId = business_id || this.businessId;
      var scope = this.scope;
      var charters = [];
      var line = [];

      if (!accountId) {
        return { programName: '', parentId: null, charters: [] };
      }

      for (var i = 0, len = scope.businesses.length; i < len; i++) {
        var segment = scope.businesses[i];

        if (segment.id === businessId) {
          line = segment.children.filter(function (child) {
            return child.owner && child.owner.id && child.owner.id !== scope.charterInfo.id;
          });
          charters = line.map(function (l) {
            return { id: l.owner.id, name: l.owner.name };
          });
          break;
        }

        line = segment.children.filter(function (child) {
          return child.id === businessId;
        });

        if (line.length) {
          var programName = segment.owner.id !== scope.charterInfo.id ? segment.owner.name : '';

          return { programName: programName, parentId: segment.owner.id || accountId, charters: charters };
        }
      }

      return { programName: '', parentId: accountId, charters: charters };
    }

    /**
     * Returns business segment or line for current charter
     * @params {Number|Null} id
     * @returns {Object}
     */
  }, {
    key: 'getBusiness',
    value: function getBusiness() {
      var id = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

      var info = this.scope.charterInfo;
      var cfg = this.scope.fieldsCfg;
      var accountId = this.accountId || info.attrs && info.attrs.internal_details.account.id;
      var businessId = id || this.businessId;
      var items = cfg.business.items.length ? cfg.business.items : this._createArray();
      var business = items[0];

      this.scope.businessExists = !!business.id;

      if (!accountId || accountId === businessId) {
        return business;
      }

      for (var i = 0, len = items.length; i < len; i++) {
        if (items[i].id === businessId) {
          business = items[i];
        }
      }

      return business;
    }

    /** Checks if key is equal to 'active'
     * @param {String} key
     * @returns {boolean}
     */
  }, {
    key: 'isActive',
    value: function isActive(key) {
      return key ? key.toLowerCase() === 'active' : false;
    }

    /**
     * Checks key for 'account'
     * @param {String} key
     * @returns {boolean}
     */
  }, {
    key: 'isAccount',
    value: function isAccount(key) {
      return key === 'account';
    }

    /**
     * Formats date
     * @param {String|Object} date
     * @returns {*}
     */
  }, {
    key: 'getLocalDate',
    value: function getLocalDate(date) {
      var newDate = new Date(date);
      var day = newDate.getDate();
      var month = newDate.getMonth() + 1;
      var year = newDate.getFullYear();

      return year + '-' + month + '-' + day;
    }

    /**
     * Field's model validator
     * @param {Object} field - charter's field
     * @returns {boolean|undefined}
     * @private
     */
  }, {
    key: '_isValidModel',
    value: function _isValidModel(field) {
      return _angular2['default'].isObject(field.$modelValue) && (field.$modelValue.uid || field.$modelValue.id);
    }

    /**
     * Valid Until field validator
     * @param {Object} field - charter's field
     * @returns {boolean|undefined}
     * @private
     */
  }, {
    key: '_isValidDate',
    value: function _isValidDate(field) {
      if (!field.$modelValue) {
        return false;
      }

      var today = new Date();
      var day = today.getDate();
      var month = today.getMonth();
      var year = today.getFullYear();

      today = new Date(year, month, day);

      return new Date(field.$modelValue).getTime() >= today.getTime();
    }

    /**
     * Handles charterInfo changes
     * @param {Object} newVal - new value
     * @private
     */
  }, {
    key: '_charterInfoWatcher',
    value: function _charterInfoWatcher(newVal) {
      var details = newVal && newVal.attrs && newVal.attrs.internal_details;

      if (details && details.charter_status) {
        var required = this.isActive(details.charter_status.id);

        this.scope.fieldsCfg.description.required = required;
        this.scope.fieldsCfg.business_need.required = required;
        this.scope.fieldsCfg.constraints.required = required;
        this.scope.fieldsCfg.business.required = required;
      }

      this.setSubmitted(false);
      this.isRequestError = false;
    }

    /**
     * Handles charter's children changes
     * @param {Object} newVal - new value
     * @param {Object} oldVal - old value
     * @private
     */
  }, {
    key: '_charterItemsWatcher',
    value: function _charterItemsWatcher(newVal, oldVal) {
      if (newVal && newVal.length) {
        var children = this.scope.charterInfo.children || [];

        if (oldVal && oldVal.length && oldVal.length + children.length === newVal.length) {
          return null;
        }

        if (children.length) {
          this.scope.fieldsCfg.charters.items = this.scope.fieldsCfg.charters.items.concat(children);
        }
      }
    }

    /**
     * Handles businesses changes
     * @param {Object} newVal - new value
     * @param {Object} oldVal - new value
     * @private
     */
  }, {
    key: '_businessWatcher',
    value: function _businessWatcher(newVal, oldVal) {
      if (newVal.length !== oldVal.length && !this.editMode && !this.scope.unknownAccount) {
        this.scope.charterInfo = this.getDefaultModel();
      }
    }

    /**
     * Handles accounts changes
     * @param {Object} account - new value
     * @private
     */
  }, {
    key: '_accountWatcher',
    value: function _accountWatcher(account) {
      if (this.scope.unknownAccount && account) {
        var id = account.id;

        if (id) {
          this.getBusinesses(id);
          this.getAccountChildren(id);
        } else {
          this._resetItems();
        }

        this._clearProjects();
      }
    }

    /**
     * Invokes updateLogo or removeLogo based on passed parameter
     * @param {String} operation - Needed operation
     * @returns {Promise} - Operation promise
     */
  }, {
    key: '_logoOperationProxy',
    value: function _logoOperationProxy(operation) {
      return operation ? this['_' + operation + 'Logo']() : true;
    }

    /**
     * Updates logo on the server
     * @returns {Promise} - Update logo promise
     */
  }, {
    key: '_updateLogo',
    value: function _updateLogo() {
      return this.CharterLogo.uploadLogo(this.state.params.id, this.scope.newLogo);
    }

    /**
     * Removes logo from the server
     * @returns {Promise} - Remove logo promise
     */
  }, {
    key: '_removeLogo',
    value: function _removeLogo() {
      return this.CharterLogo.removeLogo(this.state.params.id);
    }

    /**
     * Shows error after api call
     */
  }, {
    key: '_showError',
    value: function _showError(res) {
      this.isRequestError = true;
      this.scope.errorMessage = this.getError(res);
    }

    /** Creates list of items from data with default item
    * @param {Object} data - data from api
    * @returns {Array}
    * @private
    */
  }, {
    key: '_createItemsWithDefault',
    value: function _createItemsWithDefault(data) {
      return this._createArray(data.map(function (item) {
        return { name: item.name, id: item.id };
      }));
    }

    /**
     * Gets permissions from PermissionsService
     * @returns {Object} - Permissions map for this module
     */
  }, {
    key: '_getPermissions',
    value: function _getPermissions() {
      var charterDetails = {
        targetId: this.scope.charterInfo.id,
        accountId: this.scope.charterInfo.attrs.internal_details.account.id,
        parentId: this.scope.charterInfo.parent_id
      };

      return {
        canChangeCharterClientPartner: this.Permissions.can('changeCharterClientPartner', charterDetails),
        canChangeCharterManager: this.Permissions.can('changeCharterManager', charterDetails),
        canActivateCharter: this.Permissions.can('activateCharter', charterDetails)
      };
    }

    /**
     * Removes item from requests stack
     * @param request
     * @private
     */
  }, {
    key: '_removeFromRequestStack',
    value: function _removeFromRequestStack(request) {
      var index = this.requestsStack.indexOf(request);

      if (index > -1) {
        this.requestsStack.splice(index, 1);
      }
    }

    /**
     * Sets request error for fields according to response error object
     * @param {Object} form
     * @param {Object} res - response object with errors
     * @private
     */
  }, {
    key: '_setRequestError',
    value: function _setRequestError(form, res) {
      if (!res.data) {
        return null;
      }

      if (_angular2['default'].isObject(res.data) && Object.keys(res.data.field_error).length) {
        this._setRequestErrorState(form, res.data.field_error, false);

        return null;
      }

      this._showError(res);
    }

    /**
     * Resets request error for fields - sets fields validity to true
     * @param form
     * @private
     */
  }, {
    key: '_resetRequestError',
    value: function _resetRequestError(form) {
      this._setRequestErrorState(form, this.scope.fieldsCfg, true);
    }

    /**
     * Sets form's field validity which have request error
     * @param form
     * @param {Object} data - error response object or fields configuration object
     * @param {Boolean} state - state for validity
     * @returns {null}
     * @private
     */
  }, {
    key: '_setRequestErrorState',
    value: function _setRequestErrorState(form, data, state) {
      var _this12 = this;

      if (!data || !form) {
        return null;
      }

      Object.keys(data).forEach(function (key) {
        var field = form[key];

        if (_this12.scope.fieldsCfg[key].errors) {
          _this12.scope.fieldsCfg[key].errors.request = state ? '' : data[key][0];
        }

        if (field) {
          field.$setValidity(_this12.errorType.request, state);
        }
      });
    }

    /**
     * Creates business object
     * @param {Object} item
     * @returns {Object}
     * @private
     */
  }, {
    key: '_getBusinessObject',
    value: function _getBusinessObject(item) {
      return { id: item.id, name: item.name, free: item.free, owner_id: item.owner.id, type: item.type };
    }

    /**
     * Shows confirmation in case when we have changed BS or we haven't set BS or BL and
     * simply saves the charter's data in another case
     * @param {Object} form
     * @param {Object} cfg
     * @param {Function} success
     */
  }, {
    key: '_confirmSave',
    value: function _confirmSave(form, cfg, success) {
      var _this13 = this;

      var items = [];
      var info = this.scope.charterInfo;
      var businessId = info.business.id;
      var message = this.errorsCfg.emptyBusiness;

      var type = 'charter';
      /**
       * Resets promise in app context
       * @param {String} type
       * @private
       */
      var _resetPromise = function _resetPromise(type) {
        return _this13.appContext.setPromise(type, null, true);
      };

      if (this.isActive(info.attrs.internal_details.charter_status.id)) {
        if (businessId) {
          success.call(this, form, cfg).then(function () {
            return _resetPromise(type);
          });
        }

        return null;
      }

      if (!!businessId) {
        success.call(this, form, cfg).then(function () {
          return _resetPromise(type);
        });

        return null;
      }

      var modalInstance = this.$modal.open({
        animation: true,
        backdrop: 'static',
        windowClass: 'charter-modal',
        templateUrl: 'confirm-charter-save.html',
        resolve: {
          data: function data() {
            return { items: items, message: message, showSaveBtn: true };
          }
        },
        /*@ngInject*/
        controller: ["$scope", "$uibModalInstance", "data", function controller($scope, $uibModalInstance, data) {
          $scope.data = data;

          $scope.ok = function () {
            $uibModalInstance.close();
          };

          $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
          };
        }]
      });

      modalInstance.result.then(function () {
        return success.call(_this13, form, cfg).then(function () {
          return _resetPromise(type);
        });
      }, function () {
        return _this13.setSubmitted(false);
      });
    }

    /**
     * Initializes businesses data
     * @param {Object} data
     * @private
     */
  }, {
    key: '_initBusinesses',
    value: function _initBusinesses(data) {
      /**
       * Adds item to source
       * @param {Object} item
       * @param {Array} source
       * @param {Number} businessId
       * @private
       */
      var _addItem = function _addItem(item, source, businessId) {
        if (item.id === businessId) {
          item.free = true;
        }

        source.push(item);
      };

      var items = this._createArray();
      var businessId = this.scope.charterInfo.business && this.scope.charterInfo.business.id || this.businessId;

      for (var i = 0, len1 = data.length; i < len1; i++) {
        var segment = this._getBusinessObject(data[i]);
        var lines = data[i].children;

        _addItem(segment, items, businessId);

        for (var j = 0, len2 = lines.length; j < len2; j++) {
          var line = this._getBusinessObject(lines[j]);

          _addItem(line, items, businessId);
        }
      }

      this.scope.fieldsCfg.business.items = items;
      this.scope.businesses = data;
      this.scope.charterInfo.business = this.getBusiness(businessId);
    }

    /**
     * Changes charter type
     * @param {Object} item - segment or line
     * @private
     */
  }, {
    key: '_changeCharterType',
    value: function _changeCharterType(item) {
      var attrs = this.scope.charterInfo.attrs;

      this.scope.businessExists = !!item.id;
      attrs.program = this._isSegment(item);

      if (this.scope.businessExists) {
        var parentInfo = this.getParentInfo(attrs.internal_details.account.id, item.id);

        attrs.internal_details.program_name = parentInfo.programName;
        attrs.internal_details.charters = parentInfo.charters;
      } else {
        attrs.internal_details.program_name = '';
        attrs.internal_details.charters = [];
      }
    }

    /**
     * Checks whether item is 'segment'
     * @param {Object} item
     * @returns {boolean}
     */
  }, {
    key: '_isSegment',
    value: function _isSegment(item) {
      return item.type === 'segment';
    }

    /**
     * Resets businesses and children in case of not selected account
     * @private
     */
  }, {
    key: '_resetItems',
    value: function _resetItems() {
      var cfg = this.scope.fieldsCfg;
      var scope = this.scope;

      cfg.charters.items = this._createArray();
      cfg.projects.items = this._createArray();
      cfg.business.items = this._createArray();

      scope.charterInfo.business = cfg.business.items[0];
      scope.businesses = [];
    }

    /**
     * Creates new array
     * @params {Array|Null} items
     * @returns {Array}
     * @private
     */
  }, {
    key: '_createArray',
    value: function _createArray() {
      var items = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

      return this.defaultItems.concat(items || []);
    }

    /**
     * Clears projects for model
     * @private
     */
  }, {
    key: '_clearProjects',
    value: function _clearProjects() {
      this.scope.charterInfo.attrs.internal_details.projects = [];
    }
  }]);

  return CharterCreateCtrl;
})();

exports['default'] = CharterCreateCtrl;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],106:[function(require,module,exports){
(function (global){
'use strict';

/***************

  The controller which serves View Charter- Business case
  View location: ./views/charter.view.html

 ***************/

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null);

var _angular2 = _interopRequireDefault(_angular);

/*@ngInject*/

var CharterViewCtrl = (function () {
  CharterViewCtrl.$inject = ["$scope", "$state", "CharterService", "BackDropService", "PermissionsService", "AppContext", "ErrorService", "UtilsService"];
  function CharterViewCtrl($scope, $state, CharterService, BackDropService, PermissionsService, AppContext, ErrorService, UtilsService) {
    _classCallCheck(this, CharterViewCtrl);

    this.backDropService = BackDropService;
    this.scope = $scope;
    this.state = $state;
    this.AppContext = AppContext;
    this.Permissions = PermissionsService;
    this.Charter = CharterService.getResource();
    this.ErrorService = ErrorService;
    this.Utils = UtilsService;

    this.init();
  }

  /**
   * Initializes data, handlers
   */

  _createClass(CharterViewCtrl, [{
    key: 'init',
    value: function init() {
      var _this = this;

      this.accounts = [];
      this._defValue = 'None';
      this.businessExists = false;

      this.stakeHolders = {
        client_partner: 'cp',
        manager: 'pm'
      };

      this._fields = {
        budgetOwner: 'Budget Owner',
        clientPartner: 'Client Partner',
        manager: 'Manager',
        description: 'Business Case description',
        business_need: 'Client business need (Goal)',
        constraints: 'Constraints (Scope, Time, Cost)',
        department: 'Customer Department',
        workType: 'Type of work',
        programName: 'Program Name',
        projects: 'Project Name, ID (SSE)',
        charters: 'Service charter(s)',
        status: 'Status',
        account: 'Account',
        collection: 'Collection basis',
        business: 'Business Segment/Line'
      };

      this.scope.editAction = function () {
        return _this._editAction();
      };
      this.scope.setParentState = function () {
        return _this._setParentState();
      };
      this.scope.getValidity = function (status) {
        return _this._getValidity(status);
      };
      this.scope.goToResponsibilities = function () {
        return _this._goToResponsibilities();
      };
      this.scope.goToCommit = function () {
        return _this._goToCommit();
      };

      this.scope.permissions = {};
      this.scope.isContentLoaded = false;
      this.scope.isRequestError = false;
      this.scope.requestErrorMsg = '';
      this.scope.charterType = 'Unassigned';

      this.backDropService.setBackDropState(true);

      this._getCharterInfo();
    }

    /**
     * Retrieves charter info from server
     * @private
     */
  }, {
    key: '_getCharterInfo',
    value: function _getCharterInfo() {
      var _this2 = this;

      this.Charter.get({ id: this.state.params.id }).$promise.then(function (data) {
        _this2.scope.charterInfo = _this2.prepareData(data);
        _this2.scope.permissions = _this2._getPermissions();
        _this2.scope.isContentLoaded = true;
      }, function (error) {
        _this2.scope.isRequestError = true;
        _this2.scope.requestErrorMsg = _this2.ErrorService.getError(error);
        _this2.scope.isContentLoaded = true;
      });
    }

    /**
     * Backs to parent state when we push 'Close' button
     * @private
     */
  }, {
    key: '_setParentState',
    value: function _setParentState() {
      this.backDropService.setBackDropState(false);
      this.state.go(this.AppContext.getActiveTabState() || '^', this.state.params);
    }

    /**
     * Navigate to current charter's responsibilities
     * @private
     */
  }, {
    key: '_goToResponsibilities',
    value: function _goToResponsibilities() {
      this.state.go('^.responsibilities', this.state.params);
    }

    /**
     * Navigate to current charter's commit
     * @private
     */
  }, {
    key: '_goToCommit',
    value: function _goToCommit() {
      this.state.go('^.commit', this.state.params);
    }

    /**
     * Makes charter view details more suitable to iterate through
     * @param {Object} data - data from 'api/charter/:id'
     *  Raw data:
     *    {
     *      id: 1
     *      name: 'Charter123'
     *      type: 'charter,
     *      attrs: {
     *        active: true,
     *        program: true,
     *        valid: {},
     *        ...,
     *        description: 'some text',
     *        need: 'business need',
     *        ...,
     *        department: 'some department',
     *        work_type: 'development',
     *        ...
     *      },
     *      stakeholders: [
     *        { name: 'Jack Daniels', role: 'Budget Owner' },
     *        ...
     *      }
     *    }
     *
     *    Transformed:
     *      {
     *        id: 1,
     *        name: 'Charter123',
     *        status: { active: true, valid: true, ... },
     *        details: [{ label: 'Business case description', value: 'some description' }, ...],
     *        internalDetails: [{ label: 'Customer Department', value: 'some department' }, ...],
     *        stakeholders: [ the same or default array ]
     *      }
     * @private
     * @returns {Object}
     */
  }, {
    key: 'prepareData',
    value: function prepareData(data) {
      var charter = {
        status: {},
        _internal: {},
        details: [],
        internalDetails: [],
        internalDetailsExtra: [],
        stakeholders: []
      };

      var attrs = data && data.attrs;
      var internal_details = attrs && attrs.internal_details;
      var accountName = internal_details && internal_details.account && internal_details.account.name;

      this.businessExists = !!data.business.id;

      if (this.businessExists) {
        this.scope.charterType = data.business.type === 'segment' ? 'Program Charter' : 'Service Charter';
      }

      charter.id = data.id;
      charter.name = data.name;
      charter.fullName = accountName + ': ' + charter.name;
      // TODO: Temporary fix, remove after while back-end implement logo name with UUID
      charter.logo = attrs && attrs.logo ? attrs.logo : null;

      charter.stakeholders = this._createStakeholders(data);
      charter.details = this._createDetails(attrs);
      charter.status = this._createStatus(attrs);
      charter._internal = this._createInternalInfo(data);
      charter.internalDetails = this._createInternalDetails(internal_details);
      charter.internalDetailsExtra = this._createInternalDetailsExtra(internal_details, data.business.name, attrs.program);
      charter.children = this._createChildren(internal_details, attrs.program);

      return charter;
    }

    /**
     * Checks the validity of charter's valid date
     * @param {Null|Object} status - status object with properties
     * @private
     * @returns {Boolean}
     */
  }, {
    key: '_getValidity',
    value: function _getValidity(status) {
      return status && status.valid_until ? this.Utils.isDateStillValid(status.valid_until) : null;
    }

    /**
     * Creates charter's status object
     * @param {Object} data - source data
     * @returns {Object}
     * @private
     */
  }, {
    key: '_createStatus',
    value: function _createStatus(data) {
      var updated = data && data.last_updated;
      var validUntil = new Date(data && data.valid_until);
      var status = data && data.internal_details && data.internal_details.charter_status;
      var user = updated && updated.user;
      var adopt = this.Utils.adoptTime;

      return {
        active: status && this.isActive(status.key) || false,
        valid_until: validUntil.getTime() && validUntil || 'None',
        updated: {
          full_name: user && user.name || user && user.uid || 'None',
          date: updated && updated.time && this._formatDate(adopt(updated.time)) || 'None'
        }
      };
    }

    /**
     * Returns object with target, parent and account id's
     * @param {Object} data - charter info
     * @returns {{targetId: {Number}, parentId: {Number}, accountId: {Number}}}
     * @private
     */
  }, {
    key: '_createInternalInfo',
    value: function _createInternalInfo(data) {
      return {
        targetId: data.id,
        parentId: data.parent_id,
        accountId: data.attrs.internal_details.account.id
      };
    }

    /**
     * Creates charter's stakeholders object
     * @param {Object} data - source data
     * @returns {Array}
     * @private
     */
  }, {
    key: '_createStakeholders',
    value: function _createStakeholders(data) {
      var manager = this.getStakeholder(data, this.stakeHolders.manager);
      var client_partner = this.getStakeholder(data, this.stakeHolders.client_partner);
      var owner = data && data.attrs && data.attrs.budget_owner;

      manager = manager && manager.user && manager.user.name;
      client_partner = client_partner && client_partner.user && client_partner.user.name;

      return [{ role: this._fields.budgetOwner, name: owner || this._defValue }, { role: this._fields.clientPartner, name: client_partner || this._defValue }, { role: this._fields.manager, name: manager || this._defValue }];
    }

    /**
     * Creates charter's details object
     * @param {Object} data - source data
     * @returns {Array}
     * @private
     */
  }, {
    key: '_createDetails',
    value: function _createDetails(data) {
      return [{ label: this._fields.description, value: data && data.description || this._defValue }, { label: this._fields.business_need, value: data && data.business_need || this._defValue }, { label: this._fields.constraints, value: data && data.constraints || this._defValue }];
    }

    /**
     * Creates charter's internal details object
     * @param {Object} data - source data
     * @returns {Array}
     * @private
     */
  }, {
    key: '_createInternalDetails',
    value: function _createInternalDetails(data) {
      var workType = data && data.type_of_work && data.type_of_work.value;
      var status = data && data.charter_status && data.charter_status.key;

      return [{ label: this._fields.status, value: this.isActive(status) ? 'Active' : 'Inactive' }, { label: this._fields.department, value: data && data.customer_department || this._defValue }, { label: this._fields.workType, value: workType || this._defValue }];
    }

    /**
     * Creates charter's extra internal details object
     * @param {Object} data - source data
     * @param {Boolean} isProgram
     * @returns {Array}
     * @private
     */
  }, {
    key: '_createInternalDetailsExtra',
    value: function _createInternalDetailsExtra(data, businessValue, isProgram) {
      var collection = data && data.collection_basis && data.collection_basis.value;
      var account = data && data.account && data.account.name;
      var program_name = data && data.program_name;

      var fields = [{ label: this._fields.account, value: account || this._defValue }, { label: this._fields.business, value: businessValue || this._defValue }, { label: this._fields.collection, value: collection || this._defValue }];

      if (this.businessExists && !isProgram) {
        fields.push({ label: this._fields.programName, value: program_name || this._defValue });
      }

      return fields;
    }

    /**
     * Creates charter's children object
     * @param {Object} data - source data
     * @param {Boolean} isProgram - indicates whether charter is program
     * @returns {Array}
     * @private
     */
  }, {
    key: '_createChildren',
    value: function _createChildren(data, isProgram) {
      var _this3 = this;

      var _ref = isProgram ? [[this._fields.charters, this._fields.projects], ['charters', 'projects']] : [[this._fields.projects], ['projects']];

      var _ref2 = _slicedToArray(_ref, 2);

      var chLabel = _ref2[0];
      var children = _ref2[1];

      var fields = [];

      children.forEach(function (child, index) {
        var items = data[child] || [];
        var len = items.length;

        for (var i = 0; i < len; i++) {
          fields.push({
            label: i === 0 ? chLabel[index] : '',
            value: isProgram ? items[i].name : (items[i].external_id || '') + ' ' + items[i].name,
            isLast: i === len - 1
          });
        }

        if (!len) {
          fields.push({ label: chLabel[index], value: _this3._defValue });
        }
      });

      return fields;
    }

    /**
     * Handlers for 'Edit' button
     * @private
     */
  }, {
    key: '_editAction',
    value: function _editAction() {
      this.state.go('charters.charter.edit', this.state.params);
    }

    /**
     * Returns formatted date from string
     * @param {String} dateString - string with date
     * @private
     */
  }, {
    key: '_formatDate',
    value: function _formatDate(dateString) {
      var dateOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      };

      return new Date(dateString).toLocaleDateString('en-us', dateOptions);
    }

    /**
     * Returns stakeholder with their user and role
     * @param {Object} data - source data
     * @param {String} name - stakeholder name
     * @returns {Object|undefined}
     */
  }, {
    key: 'getStakeholder',
    value: function getStakeholder(data, name) {
      if (data && data.stakeholders) {
        return data.stakeholders.filter(function (item) {
          return item.role.name === name;
        })[0];
      }
    }

    /**
     * Checks if key is equal to 'active'
     * @param {String} key
     * @returns {boolean}
     */
  }, {
    key: 'isActive',
    value: function isActive(key) {
      return key ? key.toLowerCase() === 'active' : false;
    }

    /**
     * Gets permissions from PermissionsService
     * @returns {Object} - Permissions map for this module
     */
  }, {
    key: '_getPermissions',
    value: function _getPermissions() {
      var charterDetails = this.scope.charterInfo._internal;

      return {
        canViewCharter: this.Permissions.can('viewCharter', charterDetails),
        canViewCharterInternals: this.Permissions.can('viewCharterInternals', charterDetails),
        canEditCharter: this.Permissions.can('editCharter', charterDetails)
      };
    }
  }]);

  return CharterViewCtrl;
})();

exports['default'] = CharterViewCtrl;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],107:[function(require,module,exports){
(function (global){
"use strict";

/***************

 The charter datepicker directive.

 Possible definition:

 <charter-date-picker config="myConfig" charter-model="myField"></charter-date-picker>
 OR
 <ANY charter-date-picker config="myConfig" charter-model="myField"></ANY>

 Config format:

 {
   id: 'fieldId', // will be passed to <label for="fieldId"> and <input id="fieldId">
   label: 'My field',
   required: true, // add this to make field required
   tips: '(only numbers)' // add this if you what to add some tip after label (ex. 'My field (only numbers) '),
   minDate: date, // the amount of chars
   errors: {
     required: 'This field is required',
     invalid: 'Invalid value'
   }
 }

 To add it to your module make the following obviously if you work with charters/charter

 import CharterDatePicker from './directives/charter-date-picker';

 and add it to dependency

 angular.module(moduleName, [..., CharterDatePicker, ...])

 ***************/

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

require('./view/charter-autocomplete.html');

var _angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null);

var _angular2 = _interopRequireDefault(_angular);

var moduleName = 'charter.autocomplete';

var CharterAutocomplete = (function () {
  function CharterAutocomplete() {
    var _this = this;

    _classCallCheck(this, CharterAutocomplete);

    this.restrict = 'EA';
    this.templateUrl = 'charter-autocomplete.html';
    this.scope = {
      config: '=',
      charterModel: '=',
      users: '=',
      canEdit: '&'
    };

    this.link = function (scope, el, attrs) {
      return _this._link(scope, el, attrs);
    };
  }

  _createClass(CharterAutocomplete, [{
    key: '_link',
    value: function _link(scope, el, attrs) {
      /**
       * Checks whether we should show message about invalidity
       */
      scope.showInvalid = function () {
        var model = scope.charterModel;
        var cfg = scope.config;

        return model && model.length >= cfg.minLength && !model.uid;
      };
      /**
       * Checks whether we should show message about requirement
       */
      scope.showRequired = function () {
        var model = scope.charterModel;
        var cfg = scope.config;

        return cfg.required && !model || model && model.length === 0;
      };
      /**
       * Checks whether we should show tip regarding value
       */
      scope.showTip = function () {
        var model = scope.charterModel;
        var cfg = scope.config;

        return cfg.errors && cfg.errors.tip && model && model.length < cfg.minLength;
      };

      /**
       * Checks whether we should show message about no matches found
       */
      scope.showNoResults = function (isHaveAnyMatches) {
        return !scope.showTip() && isHaveAnyMatches;
      };
    }
  }], [{
    key: 'directiveFactory',
    value: function directiveFactory() {
      return new CharterAutocomplete();
    }
  }]);

  return CharterAutocomplete;
})();

_angular2['default'].module(moduleName, ['ui.bootstrap']).directive('charterAutocomplete', CharterAutocomplete.directiveFactory);

exports['default'] = moduleName;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./view/charter-autocomplete.html":108}],108:[function(require,module,exports){
(function (global){
(typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null).module('src/app/index.js').run(['$templateCache', function($templateCache){$templateCache.put('charter-autocomplete.html','<script type="text/ng-template" id="userTemplate.html"><a>     <span ng-bind-html="match.model.name + \' (\' + match.model.uid.split(\'@\')[0] + \')\' | typeaheadCustomHighlight:query"></span>   </a></script> <label class="fullwidth charter-label" for="{{ config.id }}"> <span class="charter-label-name"> {{ config.label }} {{ config.tips }} <span ng-show="config.required" class="required">&nbsp;*</span> </span> <div class="snake-loader" ng-show="loading"></div> <input type="text" id="{{ config.id }}" name="{{ config.name }}" class="d-block ad-typeahead fullwidth" tabindex="{{ config.tabIndex }}" ng-model="charterModel" ng-required="config.required" uib-typeahead="state as state.name for state in users | usersFilter:$viewValue | limitTo: 10" typeahead-min-length="config.minLength" typeahead-focus-first="true" typeahead-template-url="userTemplate.html" typeahead-loading="loading" typeahead-no-results="noResults" ng-disabled="!canEdit()"> <div class="message no-matches-found" ng-show="showTip()">{{ config.errors.tip }}</div> <div class="message no-matches-found" ng-show="showNoResults(noResults)">{{ config.errors.noResults }}</div> <div class="hidden-message error-message" ng-show="showInvalid()">{{ config.errors.invalid }}</div> <div class="hidden-message error-message" ng-show="showRequired()">{{ config.errors.required }}</div> </label>')}]);
module.exports = 'charter-autocomplete.html';
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],109:[function(require,module,exports){
(function (global){
"use strict";

/***************

 The charter datepicker directive.

 Possible definition:

 <charter-date-picker config="myConfig" charter-model="myField"></charter-date-picker>
 OR
 <ANY charter-date-picker config="myConfig" charter-model="myField"></ANY>

 Config format:

 {
   id: 'fieldId', // will be passed to <label for="fieldId"> and <input id="fieldId">
   label: 'My field',
   required: true, // add this to make field required
   tips: '(only numbers)' // add this if you what to add some tip after label (ex. 'My field (only numbers) '),
   minDate: date, // the amount of chars
   errors: {
     required: 'This field is required',
     invalid: 'Invalid value'
   }
 }

 To add it to your module make the following obviously if you work with charters/charter

 import CharterDatePicker from './directives/charter-date-picker';

 and add it to dependency

 angular.module(moduleName, [..., CharterDatePicker, ...])

 ***************/

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

require('./view/charter-date-picker.html');

var _angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null);

var _angular2 = _interopRequireDefault(_angular);

var moduleName = 'charter.date.picker';

var CharterDatePicker = (function () {
  function CharterDatePicker($timeout) {
    var _this = this;

    _classCallCheck(this, CharterDatePicker);

    this.$timeout = $timeout;
    this.restrict = 'EA';
    this.templateUrl = 'charter-date-picker.html';
    this.scope = {
      config: '=',
      charterModel: '='
    };

    this.link = function (scope, el, attrs) {
      return _this._link(scope, el, attrs);
    };
  }

  _createClass(CharterDatePicker, [{
    key: '_link',
    value: function _link(scope, el, attrs) {
      var _this2 = this;

      /**
       * Checks whether we should show message about requirement
       */
      scope.showRequired = function () {
        var model = scope.charterModel;
        var cfg = scope.config;

        return cfg.required && !model || model && model.length === 0;
      };
      /**
       * Checks whether we should show message about invalidity
       */
      scope.showInvalid = function () {
        if (!scope.charterModel) {
          return false;
        }

        var today = new Date();
        var day = today.getDate();
        var month = today.getMonth();
        var year = today.getFullYear();

        today = new Date(year, month, day);

        return !(new Date(scope.charterModel).getTime() >= today.getTime());
      };

      scope.close = function () {
        _this2.$timeout(function () {
          el.find('input').blur();
          scope.isOpened = false;
        }, 0);
      };

      scope.isOpened = false;
    }
  }], [{
    key: 'directiveFactory',
    value: function directiveFactory($timeout) {
      return new CharterDatePicker($timeout);
    }
  }]);

  return CharterDatePicker;
})();

_angular2['default'].module(moduleName, []).directive('charterDatePicker', CharterDatePicker.directiveFactory);

exports['default'] = moduleName;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./view/charter-date-picker.html":110}],110:[function(require,module,exports){
(function (global){
(typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null).module('src/app/index.js').run(['$templateCache', function($templateCache){$templateCache.put('charter-date-picker.html','<label class="fullwidth charter-label" for="{{ config.id }}"> <span class="charter-label-name"> {{ config.label }} {{ config.tips }} <span ng-show="config.required" class="required">&nbsp;*</span> </span> <input type="text" id="{{ config.id }}" class="d-block fullwidth ad-datepicker-input ad-datepicker-popup-left" name="{{ config.name }}" tabindex="{{ config.tabIndex }}" uib-datepicker-popup="MM/dd/yyyy" datepicker-options="{ showWeeks: \'false\' }" show-button-bar="false" is-open="$parent.opened" ng-focus="$parent.opened = true; isOpened = true" ng-change="close()" min-date="{{ config.minDate }}" ng-class="{ \'focused\': isOpened }" ng-model="charterModel" ng-readonly="true" ng-required="config.required"> <div class="hidden-message error-message" ng-show="showRequired()">{{ config.errors.required }}</div> <div class="hidden-message error-message" ng-show="showInvalid()">{{ config.errors.invalid }}</div> </label>')}]);
module.exports = 'charter-date-picker.html';
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],111:[function(require,module,exports){
(function (global){
"use strict";

/***************

 The charter dynamic list directive.

 Possible definition:

 <charter-list config="myConfig" charter-model="myField"></charter-list>

 Config format:

 {
   id: 'fieldId', // will be passed to <label for="fieldId"> and <input id="fieldId">
   label: 'My field',
   required: true, // add this to make field required
   tips: '(only numbers)', // add this if you what to add some tip after label (ex. 'My field (only numbers) ')
   errors: {
     required: 'This field is required'
   },
   items: [
      { name: '--Please select--' },
      { name: 'Testing', value: '123' },
      ...
    ]
 }

 To add it to your module make the following obviously if you work with charters/charter

 import CharterList './directives/charter-list';

 and add it to dependency

 angular.module(moduleName, [..., CharterList, ...])

 ***************/

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

require('./view/charter-list.html');

var _angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null);

var _angular2 = _interopRequireDefault(_angular);

var moduleName = 'charter.list';

/*@ngInject*/

var CharterList = (function () {
  CharterList.$inject = ["$uibModal"];
  function CharterList($uibModal) {
    var _this = this;

    _classCallCheck(this, CharterList);

    this.restrict = 'EA';
    this.templateUrl = 'charter-list.html';
    this.$modal = $uibModal;
    this.scope = {
      config: '=',
      charterModel: '=',
      form: '=',
      formLoaded: '='
    };

    this.link = function (scope, el, attrs) {
      return _this._link(scope, el, attrs);
    };
  }

  _createClass(CharterList, [{
    key: '_link',
    value: function _link(scope, el, attrs) {
      var _this2 = this;

      scope.itemsCache = [];
      scope.showWarning = false;
      scope.warningMessage = '';

      /**
       * Function for sorting models by id
       * @param {Object} a
       * @param {Object} b
       * @returns {Number}
       * @private
       */
      var _modelSorter = function _modelSorter(a, b) {
        return a.id - b.id;
      };

      /**
       * Excludes already used children from the list of children
       * @param {Array} models - the list of models
       * @param {Array} children - the list of projects or charters
       * @param {Null|Object} - model that will be skipped
       */
      var _excludeModels = function _excludeModels(models, children) {
        var current = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

        for (var i = 0, len1 = models.length; i < len1; i++) {
          var id = models[i].id;

          if (id) {
            for (var j = 0, len2 = children.length; j < len2; j++) {
              if (children[j].id === id) {
                children.splice(j, 1);
                break;
              }
            }
          }
        }

        if (current && current.id) {
          children.push(current);
        }

        return children.sort(_modelSorter);
      };

      /**
       * Checks for the possibility to add new items from list
       * @returns {boolean}
       */
      scope.isNoFreeItems = function () {
        if (scope.charterModel && scope.config.items) {
          return scope.charterModel.length === scope.config.items.length - 1;
        }

        return false;
      };

      /**
       * Checks for availability of items (projects|charters) in list
       * @returns {boolean}
       */
      scope.isNoItems = function () {
        return scope.config.items.length === 1 && !scope.config.items[0].id;
      };

      scope.$watch(function () {
        return {
          model: scope.charterModel,
          items: scope.config.items
        };
      }, function (newVal) {
        if (newVal.model && newVal.items.length) {
          var model = scope.charterModel;
          var cache = scope.itemsCache;
          var items = scope.config.items;

          scope.showWarning = false;
          scope.warningMessage = '';

          if (model.length === cache.length) {
            return null;
          }

          for (var i = 0, len1 = model.length; i < len1; i++) {
            cache.push(_excludeModels(model, _angular2['default'].copy(items), model[i]));

            for (var j = 0, len2 = items.length; j < len2; j++) {
              if (!model[i].id) {
                model[i] = cache[i][0];
              }

              if (model[i].id === cache[i][j].id) {
                model[i] = cache[i][j];
                break;
              }
            }
          }
        }
      }, true);

      /**
       * Handler for button which adds new items (projects, charters, etc.)
       */
      scope.addElement = function () {
        if (!scope.formLoaded) {
          return null;
        }

        var model = scope.charterModel;
        var cache = scope.itemsCache;
        var items = scope.config.items;

        model = model || [];

        scope.showWarning = scope.isNoFreeItems();
        scope.warningMessage = scope.getWarningMessage();

        if (scope.isNoItems()) {
          return null;
        }

        if (model.length) {
          if (!scope.isNoFreeItems()) {
            cache.push(_excludeModels(model, _angular2['default'].copy(items)));
            model.push({});

            for (var i = 0, len = model.length; i < len; i++) {
              if (!model[i].id) {
                model[i] = cache[i][0];
              }
            }
          }
        } else {
          model.push({});
          cache.push(_angular2['default'].copy(items.sort(_modelSorter)));

          model[0] = cache[cache.length - 1][0];
        }
      };

      /**
       * Removes item
       * @param {Number} index - field number
       */
      scope.removeElement = function (index) {
        if (!scope.formLoaded) {
          return null;
        }

        var model = scope.charterModel[index];

        scope.charterModel.splice(index, 1);
        scope.itemsCache.splice(index, 1);

        if (model.id) {
          for (var i = 0, len = scope.itemsCache.length; i < len; i++) {
            scope.itemsCache[i].push(model);
            scope.itemsCache.sort(_modelSorter);
          }
        }

        scope.showWarning = false;
      };

      /**
       * Remove child from charter children by index.
       * Confirmation dialog is displayed before delete.
       * @param {Number} index - the model number
       * @private
       */
      scope.removeChild = function (index) {
        var item = scope.charterModel[index];

        if (!item.id) {
          scope.removeElement(index);

          return null;
        }

        var modalInstance = _this2.$modal.open({
          animation: true,
          windowClass: 'charter-modal',
          templateUrl: 'confirm-child-delete-modal.html',
          resolve: {
            data: function data() {
              return { item: item, instruction: item.id ? scope.config.errors.remove : null };
            }
          },
          /*@ngInject*/
          controller: ["$scope", "$uibModalInstance", "data", function controller($scope, $uibModalInstance, data) {
            $scope.data = data;

            $scope.ok = function () {
              $uibModalInstance.close();
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };
          }]
        });

        modalInstance.result.then(function () {
          return scope.removeElement(index);
        });
      };

      /**
       * Checks whether we should show message about invalidity
       * @param {Number} index - field number
       * @returns {Boolean}
       */
      scope.showInvalid = function (index) {
        var field = scope.form['child-' + index][scope.config.name];

        return field.$invalid;
      };

      /**
       * Handler for select 'change' event
       * @param {Number} index - which components was changed
       * @param {String} prevModel - literal of the previous model
       */
      scope.onChange = function (index, prevModel) {
        var model = scope.charterModel[index];
        var oldModel = JSON.parse(prevModel);

        for (var i = 0, len1 = scope.itemsCache.length; i < len1; i++) {
          if (i === index) {
            continue;
          }

          var items = scope.itemsCache[i];

          if (model.id) {
            for (var j = 0, len2 = items.length; j < len2; j++) {
              if (items[j].id === model.id) {
                items.splice(j, 1);
                break;
              }
            }
          }

          if (oldModel.id) {
            items.push(oldModel);
            items.sort(_modelSorter);
          }
        }

        scope.showWarning = false;
      };

      /**
       * Returns warning message
       * @returns {String}
       */
      scope.getWarningMessage = function () {
        var addWarningMessage = 'You have reached max amount of ' + scope.config.name + ' on this account';
        var noItemsMessage = 'No ' + scope.config.name + ' on this account';

        return scope.config.items.length === 1 ? noItemsMessage : addWarningMessage;
      };
    }
  }], [{
    key: 'directiveFactory',
    value: function directiveFactory($uibModal) {
      return new CharterList($uibModal);
    }
  }]);

  return CharterList;
})();

_angular2['default'].module(moduleName, []).directive('charterList', CharterList.directiveFactory);

exports['default'] = moduleName;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./view/charter-list.html":112}],112:[function(require,module,exports){
(function (global){
(typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null).module('src/app/index.js').run(['$templateCache', function($templateCache){$templateCache.put('charter-list.html','<div class="charter-info-list-item"> <div class="col-xs-{{ config.labelCol || 3 }}"> <label class="charter-label"> {{ config.label }} {{ config.tips }} </label> </div> <div class="col-xs-{{ config.inputCol || 9 }}"> <div ng-repeat="pr in charterModel" ng-form="child-{{ $index }}"> <div class="col-xs-1 item-container"> <select class="d-block fullwidth" name="{{ config.name }}" ng-model="charterModel[$index]" ng-change="onChange($index, \'{{ charterModel[$index] }}\')" ng-options="item as item.name for item in itemsCache[$index]"> </select> </div> <div class="col-xs-1 item-remove-container"> <span class="icon icon-remove-grey icon-remove-item" ng-click="removeChild($index)"></span> </div> <div class="col-xs-1 item-invalid-container"> <div class="hidden-message error-message" ng-show="showInvalid($index)"> {{ config.errors.invalid }} </div> </div> </div> <div class="col-xs-2 add-new-container"> <a href="" class="add-new" ng-click="addElement()"> <span class="icon icon-add"></span> {{ config.buttonLabel }} </a> </div> <div class="col-xs-8 item-warning-container"> <div class="error-message" ng-show="showWarning"> {{ warningMessage }} </div> </div> </div> </div> <script type="text/ng-template" id="confirm-child-delete-modal.html"><div class="charter-modal">     <div class="modal-header">       <span class="modal-icon ch-glyphicon glyphicon-alert"></span>       <h3 class="modal-title">Confirm delete</h3>     </div>     <div class="modal-body">       <p ng-if="data.instruction">{{ data.instruction }}</p>       <p>Do you really want to delete <strong>{{ data.item.name || \'\' }}</strong>?</p>     </div>     <div class="modal-footer">       <button class="btn btn-primary" type="button" ng-click="ok()">Accept</button>       <button class="btn btn-default" type="button" ng-click="cancel()">Cancel</button>     </div>   </div></script>')}]);
module.exports = 'charter-list.html';
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],113:[function(require,module,exports){
(function (global){
"use strict";

/***************

 The charter select field directive.

 Possible definition:

 <charter-select config="myConfig" charter-model="myField"></charter-select>

 Config format:

 {
   id: 'fieldId', // will be passed to <label for="fieldId"> and <input id="fieldId">
   label: 'My field',
   required: true, // add this to make field required
   tips: '(only numbers)', // add this if you what to add some tip after label (ex. 'My field (only numbers) ')
   errors: {
     required: 'This field is required'
   },
   items: [
      { name: '--Please select--' },
      { name: 'Testing', value: '123' },
      ...
    ]
 }

 To add it to your module make the following obviously if you work with charters/charter

 import CharterSelect './directives/charter-select';

 and add it to dependency

 angular.module(moduleName, [..., CharterSelect, ...])

 ***************/

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

require('./view/charter-select.html');

var _angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null);

var _angular2 = _interopRequireDefault(_angular);

var moduleName = 'charter.select';

var CharterSelect = (function () {
  function CharterSelect() {
    var _this = this;

    _classCallCheck(this, CharterSelect);

    this.restrict = 'EA';
    this.templateUrl = 'charter-select.html';
    this.scope = {
      config: '=',
      charterModel: '=',
      readOnly: '='
    };

    this.link = function (scope, el, attrs) {
      return _this._link(scope, el, attrs);
    };
  }

  _createClass(CharterSelect, [{
    key: '_link',
    value: function _link(scope, el, attrs) {
      scope.$watch(function () {
        return {
          model: scope.charterModel,
          items: scope.config.items || []
        };
      }, function (newVal) {
        if (newVal.model && newVal.items.length) {
          var model = newVal.items.filter(function (item) {
            return item.name === newVal.model.value || item.name === newVal.model.name;
          })[0];

          if (model) {
            scope.charterModel = model;
          }
        } else {
          scope.charterModel = scope.charterModel || newVal.items[0];
        }
      }, true);

      /**
       * Checks whether we should show message about requirement
       */
      scope.showRequired = function () {
        var model = scope.charterModel;
        var cfg = scope.config;

        return cfg.required && model && !model.id;
      };
    }
  }], [{
    key: 'directiveFactory',
    value: function directiveFactory() {
      return new CharterSelect();
    }
  }]);

  return CharterSelect;
})();

_angular2['default'].module(moduleName, []).directive('charterSelect', CharterSelect.directiveFactory);

exports['default'] = moduleName;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./view/charter-select.html":114}],114:[function(require,module,exports){
(function (global){
(typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null).module('src/app/index.js').run(['$templateCache', function($templateCache){$templateCache.put('charter-select.html','<div class="charter-info-list-item"> <div class="col-xs-{{ config.labelCol || 3 }}"> <label for="{{ config.id }}" class="charter-label"> {{ config.label }} {{ config.tips }} <span ng-show="config.required" class="required">&nbsp;*</span> </label> </div> <div class="col-xs-{{ config.inputCol || 9 }}"> <select class="d-block fullwidth" id="{{ config.id }}" name="{{ config.name }}" tabindex="{{ config.tabIndex }}" ng-model="charterModel" ng-required="config.required" ng-disabled="!!readOnly" ng-options="item as item.name for item in config.items | orderBy: \'name\'"> </select> </div> <div class="hidden-message error-message hr-error-message" ng-show="showRequired()"> {{ config.errors.required }} </div> </div>')}]);
module.exports = 'charter-select.html';
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],115:[function(require,module,exports){
(function (global){
"use strict";

/***************

 The charter text area directive.

 Possible definition:

   <charter-text-area config="myConfig" charter-model="myField"></charter-text-area>
    OR
   <ANY charter-text-area config="myConfig" charter-model="myField"></ANY>

 Config format:

   {
     id: 'fieldId', // will be passed to <label for="fieldId"> and <input id="fieldId">
     label: 'My field',
     required: true, // add this to make field required
     tips: '(only numbers)', // add this if you what to add some tip after label (ex. 'My field (only numbers) ')
     rows: 3, // the amount of rows,
     maxLength: 30, // the amount of chars
     errors: {
       required: 'This field is required',
       invalid: 'Invalid value'
     }
   }

 To add it to your module make the following obviously if you work with charters/charter

   import ChartTextArea from './directives/charter-text-area';

 and add it to dependency

    angular.module(moduleName, [..., CharterTextArea, ...])

 ***************/

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

require('./view/charter-text-area.html');

var _angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null);

var _angular2 = _interopRequireDefault(_angular);

var moduleName = 'charter.text.area';

var CharterTextArea = (function () {
  function CharterTextArea() {
    var _this = this;

    _classCallCheck(this, CharterTextArea);

    this.restrict = 'EA';
    this.templateUrl = 'charter-text-area.html';
    this.scope = {
      config: '=',
      charterModel: '='
    };

    this.link = function (scope, el, attrs) {
      return _this._link(scope, el, attrs);
    };
  }

  _createClass(CharterTextArea, [{
    key: '_link',
    value: function _link(scope, el, attrs) {
      /**
       * Checks whether we should show message about requirement
       */
      scope.showRequired = function () {
        var model = scope.charterModel;
        var cfg = scope.config;

        return cfg.required && !model || model && model.length === 0;
      };
    }
  }], [{
    key: 'directiveFactory',
    value: function directiveFactory() {
      return new CharterTextArea();
    }
  }]);

  return CharterTextArea;
})();

_angular2['default'].module(moduleName, ['monospaced.elastic']).directive('charterTextArea', CharterTextArea.directiveFactory);

exports['default'] = moduleName;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./view/charter-text-area.html":116}],116:[function(require,module,exports){
(function (global){
(typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null).module('src/app/index.js').run(['$templateCache', function($templateCache){$templateCache.put('charter-text-area.html','<div class="charter-info-list-item"> <div class="col-xs-{{ config.labelCol || 3 }}"> <label for="{{ config.id }}" class="charter-label textarea-label"> {{ config.label }} <span ng-if="config.newLineTip"> <span ng-show="config.required" class="required">&nbsp;*</span><br> </span> {{ config.tips }} <span ng-show="config.required" ng-if="!config.newLineTip" class="required">&nbsp;*</span> </label> </div> <div class="col-xs-{{ config.inputCol || 9 }}"> <textarea id="{{ config.id }}" name="{{ config.name }}" class="d-block fullwidth" tabindex="{{ config.tabIndex }}" rows="1" ng-maxlength="config.maxLength" maxlength="{{ config.maxLength }}" ng-model="charterModel" ng-required="config.required" msd-elastic>     </textarea> </div> <div class="hidden-message error-message hr-error-message" ng-show="showRequired()"> {{ config.errors.required }} </div> </div>')}]);
module.exports = 'charter-text-area.html';
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],117:[function(require,module,exports){
(function (global){
"use strict";

/***************

 The charter text field directive.

 Possible definition:

    <charter-text-field config="myConfig" charter-model="myField"></charter-text-field>
      OR
    <ANY charter-text-field config="myConfig" charter-model="myField"></ANY>

 Config format:

    {
      id: 'fieldId', // will be passed to <label for="fieldId"> and <input id="fieldId">
      label: 'My field',
      required: true, // add this to make field required
      tips: '(only numbers)', // add this if you what to add some tip after label (ex. 'My field (only numbers) ')
      maxLength: 30, // the amount of chars
      errors: {
        required: 'This field is required',
        invalid: 'Invalid value'
      }
    }

 To add it to your module make the following obviously if you work with charters/charter

    import CharterTextField from './directives/charter-text-field';

 and add it to dependency

    angular.module(moduleName, [..., CharterTextField, ...])

 ***************/

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

require('./view/charter-text-field-hr.html');

var _angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null);

var _angular2 = _interopRequireDefault(_angular);

var moduleName = 'charter.text.field.hr';

var CharterTextFieldHr = (function () {
  function CharterTextFieldHr() {
    var _this = this;

    _classCallCheck(this, CharterTextFieldHr);

    this.restrict = 'EA';
    this.templateUrl = 'charter-text-field-hr.html';
    this.scope = {
      config: '=',
      charterModel: '=',
      readOnly: '='
    };

    this.link = function (scope, el, attrs) {
      return _this._link(scope, el, attrs);
    };
  }

  _createClass(CharterTextFieldHr, [{
    key: '_link',
    value: function _link(scope, el, attrs) {
      /**
       * Checks whether we should show message about requirement
       */
      scope.showRequired = function () {
        var model = scope.charterModel;
        var cfg = scope.config;

        return cfg.required && !model || model && model.length === 0;
      };
    }
  }], [{
    key: 'directiveFactory',
    value: function directiveFactory() {
      return new CharterTextFieldHr();
    }
  }]);

  return CharterTextFieldHr;
})();

_angular2['default'].module(moduleName, []).directive('charterTextFieldHr', CharterTextFieldHr.directiveFactory);

exports['default'] = moduleName;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./view/charter-text-field-hr.html":118}],118:[function(require,module,exports){
(function (global){
(typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null).module('src/app/index.js').run(['$templateCache', function($templateCache){$templateCache.put('charter-text-field-hr.html','<div class="charter-info-list-item"> <div class="col-xs-{{ config.labelCol || 3 }}"> <label for="{{ config.id }}" class="charter-label"> {{ config.label }} {{ config.tips }} <span ng-show="config.required" class="required">&nbsp;*</span> </label> </div> <div class="col-xs-{{ config.inputCol || 9 }}"> <input type="text" id="{{ config.id }}" name="{{ config.name }}" class="d-block fullwidth" tabindex="{{ config.tabIndex }}" ng-maxlength="config.maxLength" maxlength="{{ config.maxLength }}" ng-model="charterModel" ng-disabled="!!readOnly" ng-required="config.required"> </div> <div class="hidden-message error-message hr-error-message" ng-show="showRequired()"> {{ config.errors.required }} </div> </div>')}]);
module.exports = 'charter-text-field-hr.html';
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],119:[function(require,module,exports){
(function (global){
"use strict";

/***************

 The charter text field directive.

 Possible definition:

    <charter-text-field config="myConfig" charter-model="myField"></charter-text-field>
      OR
    <ANY charter-text-field config="myConfig" charter-model="myField"></ANY>

 Config format:

    {
      id: 'fieldId', // will be passed to <label for="fieldId"> and <input id="fieldId">
      label: 'My field',
      required: true, // add this to make field required
      tips: '(only numbers)', // add this if you what to add some tip after label (ex. 'My field (only numbers) ')
      maxLength: 30, // the amount of chars
      errors: {
        required: 'This field is required',
        invalid: 'Invalid value'
      }
    }

 To add it to your module make the following obviously if you work with charters/charter

    import CharterTextField from './directives/charter-text-field';

 and add it to dependency

    angular.module(moduleName, [..., CharterTextField, ...])

 ***************/

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

require('./view/charter-text-field-vr.html');

var _angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null);

var _angular2 = _interopRequireDefault(_angular);

var moduleName = 'charter.text.field.vr';

var CharterTextFieldVr = (function () {
  function CharterTextFieldVr() {
    var _this = this;

    _classCallCheck(this, CharterTextFieldVr);

    this.restrict = 'EA';
    this.templateUrl = 'charter-text-field-vr.html';
    this.scope = {
      form: '=',
      config: '=',
      charterModel: '='
    };

    this.link = function (scope, el, attrs) {
      return _this._link(scope, el, attrs);
    };
  }

  _createClass(CharterTextFieldVr, [{
    key: '_link',
    value: function _link(scope, el, attrs) {
      scope.isRequestError = false;

      /**
       * Checks whether we should show message about requirement
       */
      scope.showRequired = function () {
        var model = scope.charterModel;
        var cfg = scope.config;

        return cfg.required && !model || model && model.length === 0;
      };
      /**
       * Checks whether we should show message about invalidity
       */
      scope.showError = function (type) {
        if (!scope.form) {
          return null;
        }

        var field = scope.form[scope.config.name];
        var isError = field.$error[type];

        if (type === 'request') {
          scope.isRequestError = isError;
        }

        return isError;
      };

      scope.$watch('charterModel', function () {
        if (!scope.form) {
          return null;
        }

        scope.form[scope.config.name].$error['request'] = false;
        scope.isRequestError = false;
      });
    }
  }], [{
    key: 'directiveFactory',
    value: function directiveFactory() {
      return new CharterTextFieldVr();
    }
  }]);

  return CharterTextFieldVr;
})();

_angular2['default'].module(moduleName, []).directive('charterTextFieldVr', CharterTextFieldVr.directiveFactory);

exports['default'] = moduleName;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./view/charter-text-field-vr.html":120}],120:[function(require,module,exports){
(function (global){
(typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null).module('src/app/index.js').run(['$templateCache', function($templateCache){$templateCache.put('charter-text-field-vr.html','<label class="fullwidth charter-label" for="{{ config.id }}" ng-class="{ \'submitted\': isRequestError }"> <span class="charter-label-name"> {{ config.label }} {{ config.tips }} <span ng-show="config.required" class="required">&nbsp;*</span> </span> <input type="text" id="{{ config.id }}" name="{{ config.name }}" class="d-block fullwidth" tabindex="{{ config.tabIndex }}" ng-maxlength="config.maxLength" maxlength="{{ config.maxLength }}" ng-model="charterModel" ng-required="config.required"> <div class="hidden-message error-message" ng-show="showError(\'invalid\')">{{ config.errors.invalid }}</div> <div class="hidden-message error-message" ng-show="showError(\'request\')">{{ config.errors.request }}</div> <div class="hidden-message error-message" ng-show="showRequired()">{{ config.errors.required }}</div> </label>')}]);
module.exports = 'charter-text-field-vr.html';
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],121:[function(require,module,exports){
'use strict';

/**
 * View and edit charter's business case.
 * New charter can be created here as well.
 */

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

require('./views/charter.view.html');

require('./views/charter.create.html');

var _servicesCharterService = require('./services/charter.service');

var _servicesCharterService2 = _interopRequireDefault(_servicesCharterService);

var _controllersCharterViewController = require('./controllers/charter.view.controller');

var _controllersCharterViewController2 = _interopRequireDefault(_controllersCharterViewController);

var _controllersCharterCreateController = require('./controllers/charter.create.controller');

var _controllersCharterCreateController2 = _interopRequireDefault(_controllersCharterCreateController);

var _componentsBackDropService = require('components/back-drop-service');

var _componentsBackDropService2 = _interopRequireDefault(_componentsBackDropService);

var _directivesCharterTextFieldHr = require('./directives/charter-text-field-hr');

var _directivesCharterTextFieldHr2 = _interopRequireDefault(_directivesCharterTextFieldHr);

var _directivesCharterTextFieldVr = require('./directives/charter-text-field-vr');

var _directivesCharterTextFieldVr2 = _interopRequireDefault(_directivesCharterTextFieldVr);

var _directivesCharterTextArea = require('./directives/charter-text-area');

var _directivesCharterTextArea2 = _interopRequireDefault(_directivesCharterTextArea);

var _directivesCharterDatePicker = require('./directives/charter-date-picker');

var _directivesCharterDatePicker2 = _interopRequireDefault(_directivesCharterDatePicker);

var _directivesCharterAutocomplete = require('./directives/charter-autocomplete');

var _directivesCharterAutocomplete2 = _interopRequireDefault(_directivesCharterAutocomplete);

var _directivesCharterSelect = require('./directives/charter-select');

var _directivesCharterSelect2 = _interopRequireDefault(_directivesCharterSelect);

var _directivesCharterList = require('./directives/charter-list');

var _directivesCharterList2 = _interopRequireDefault(_directivesCharterList);

var _componentsUsersService = require('components/users-service');

var _componentsUsersService2 = _interopRequireDefault(_componentsUsersService);

var _componentsRoles = require('components/roles');

var _componentsRoles2 = _interopRequireDefault(_componentsRoles);

var _componentsChoiceService = require('components/choice-service');

var _componentsChoiceService2 = _interopRequireDefault(_componentsChoiceService);

var _servicesAccountChildrenService = require('./services/account.children.service');

var _servicesAccountChildrenService2 = _interopRequireDefault(_servicesAccountChildrenService);

var _servicesBusinessService = require('./services/business.service');

var _servicesBusinessService2 = _interopRequireDefault(_servicesBusinessService);

var _componentsTypeaheadCustomHighlight = require('components/typeahead-custom-highlight');

var _componentsTypeaheadCustomHighlight2 = _interopRequireDefault(_componentsTypeaheadCustomHighlight);

var _componentsContextStateService = require('components/context-state-service');

var _componentsContextStateService2 = _interopRequireDefault(_componentsContextStateService);

var _componentsErrorService = require('components/error-service');

var _componentsErrorService2 = _interopRequireDefault(_componentsErrorService);

var _componentsEntitiesService = require('components/entities-service');

var _componentsEntitiesService2 = _interopRequireDefault(_componentsEntitiesService);

var moduleName = 'abiliton.charter.business-case';

angular.module(moduleName, [_servicesCharterService2['default'], _componentsBackDropService2['default'], _componentsUsersService2['default'], _componentsRoles2['default'], _componentsChoiceService2['default'], _servicesAccountChildrenService2['default'], _servicesBusinessService2['default'], _directivesCharterTextFieldHr2['default'], _directivesCharterTextFieldVr2['default'], _directivesCharterTextArea2['default'], _directivesCharterDatePicker2['default'], _directivesCharterAutocomplete2['default'], _directivesCharterSelect2['default'], _directivesCharterList2['default'], _componentsTypeaheadCustomHighlight2['default'], _componentsContextStateService2['default'], _componentsErrorService2['default'], _componentsEntitiesService2['default'], 'ui.router', 'ui.bootstrap', 'ngResource', 'ngFileUpload']).controller('CharterViewCtrl', _controllersCharterViewController2['default']).controller('CharterCreateCtrl', _controllersCharterCreateController2['default']).config(["$stateProvider", function ($stateProvider) {

  $stateProvider.state('charters.charter.view', {
    url: '/charter/:id',
    reloadOnSearch: false,
    templateUrl: 'charter.view.html',
    controller: 'CharterViewCtrl'
  }).state('charters.charter.create', {
    data: {
      disableContext: true
    },
    url: '/create?business_id&account_id&account',
    reloadOnSearch: false,
    templateUrl: 'charter.create.html',
    controller: 'CharterCreateCtrl'
  }).state('charters.charter.edit', {
    data: {
      disableContext: true
    },
    url: '/edit/:id',
    reloadOnSearch: false,
    templateUrl: 'charter.create.html',
    controller: 'CharterCreateCtrl'
  });
}]);

exports['default'] = moduleName;
module.exports = exports['default'];

},{"./controllers/charter.create.controller":105,"./controllers/charter.view.controller":106,"./directives/charter-autocomplete":107,"./directives/charter-date-picker":109,"./directives/charter-list":111,"./directives/charter-select":113,"./directives/charter-text-area":115,"./directives/charter-text-field-hr":117,"./directives/charter-text-field-vr":119,"./services/account.children.service":122,"./services/business.service":123,"./services/charter.service":124,"./views/charter.create.html":125,"./views/charter.view.html":126,"components/back-drop-service":13,"components/choice-service":18,"components/context-state-service":19,"components/entities-service":23,"components/error-service":24,"components/roles":45,"components/typeahead-custom-highlight":66,"components/users-service":69}],122:[function(require,module,exports){
(function (global){
"use strict";

/***************

  Service that returns different types of account children.
  Such as children for a some entity, available children for charter

 ***************/

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null);

var _angular2 = _interopRequireDefault(_angular);

var moduleName = 'account.children.service';

/*@ngInject*/

var AccountChildrenService = (function () {
  AccountChildrenService.$inject = ["$http"];
  function AccountChildrenService($http) {
    _classCallCheck(this, AccountChildrenService);

    this.$http = $http;
  }

  /**
   * Makes call to API to get children for entity with id
   * @param {Number} id - entity id
   * @param {String} type - children type (account_project)
   * @returns {Promise}
   */

  _createClass(AccountChildrenService, [{
    key: 'getAccountChildren',
    value: function getAccountChildren(id, type) {
      return this.$http.get('/api/hierarchy/' + id + '/children/' + type);
    }

    /**
     * Makes call to API to get free children for entity with id
     * @param {Number} id - entity id
     * @returns {*}
     */
  }, {
    key: 'getAccountPotentialChildren',
    value: function getAccountPotentialChildren(id) {
      return this.$http.get('/api/accounts/' + id + '/charters-potential-children');
    }
  }]);

  return AccountChildrenService;
})();

_angular2['default'].module(moduleName, []).service('AccountChildrenService', AccountChildrenService);

exports['default'] = moduleName;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],123:[function(require,module,exports){
(function (global){
"use strict";

/***************

 Service that returns business segments or lines.

 ***************/

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null);

var _angular2 = _interopRequireDefault(_angular);

var moduleName = 'business.service';

/*@ngInject*/

var BusinessService = (function () {
  BusinessService.$inject = ["$http"];
  function BusinessService($http) {
    _classCallCheck(this, BusinessService);

    this.$http = $http;
  }

  /**
   * Makes call to API to get BS or BL for entity with some id
   * @param {Number} id - entity id
   * @returns {Promise}
   */

  _createClass(BusinessService, [{
    key: 'getBusinesses',
    value: function getBusinesses(id) {
      return this.$http.get('/api/charters/' + id + '/businesses');
    }
  }]);

  return BusinessService;
})();

_angular2['default'].module(moduleName, []).service('BusinessService', BusinessService);

exports['default'] = moduleName;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],124:[function(require,module,exports){
'use strict';

/***************

 The service eases the work with REST and deals with charter API

 APIs:
    GET /api/charter/:id - details for charter with id=:id

 Response format:
    {
       id: 1
       name: 'Charter123'
       type: 'charter,
       program: true,
       attrs: {
         active: true,
         logo: 'logo/0032434.png',
         last_updated: '',
         valid: {},
         ...,
         description: 'some text',
         need: 'business need',
         ...,
         department: 'some department',
         work_type: 'development',
         ...
       },
       stakeholders: [
         { name: 'Jack Daniels', role: 'Budget Owner' },
         ...
       ]
    }

 ***************/

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var moduleName = 'charter.service';

var CharterService = (function () {
  /*@ngInject*/

  CharterService.$inject = ["$resource", "$http", "Upload"];
  function CharterService($resource, $http, Upload) {
    _classCallCheck(this, CharterService);

    this.resource = $resource;
    this.http = $http;
    this.Upload = Upload;
  }

  /**
   * Creates REST API wrapper
   * @returns {Object}
   */

  _createClass(CharterService, [{
    key: 'getResource',
    value: function getResource() {
      return this.resource('api/charter/:id', { id: '@_id' }, {
        update: {
          method: 'PUT'
        }
      });
    }

    /**
     * Creates REST API wrapper
     * @returns {Object}
     */
  }, {
    key: 'getLogoResource',
    value: function getLogoResource() {
      var _this = this;

      return {
        uploadLogo: function uploadLogo(id, logo) {
          return _this._uploadLogo(id, logo);
        },
        removeLogo: function removeLogo(id) {
          return _this.http['delete']('/api/charter/' + id + '/logo');
        }
      };
    }

    /**
     * Upload logo
     * @returns {Promise}
     */
  }, {
    key: '_uploadLogo',
    value: function _uploadLogo(id, logo) {
      return this.Upload.upload({
        url: '/api/charter/' + id + '/logo',
        file: { logo: logo }
      });
    }
  }]);

  return CharterService;
})();

angular.module(moduleName, []).service('CharterService', CharterService);

exports['default'] = moduleName;
module.exports = exports['default'];

},{}],125:[function(require,module,exports){
(function (global){
(typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null).module('src/app/index.js').run(['$templateCache', function($templateCache){$templateCache.put('charter.create.html','<div class="panel-wrapper overbackdrop"> <div class="ad-tab ad-tab-large o-hid"> <ul class="nav nav-tabs" role="tablist"> <li class="active"> <a href="">{{ editMode ? \'Business Case\' : \'New Charter\' }}</a> </li> <div class="f-right nav-tabs-controls"> <a href="" ng-click="onSubmit(createForm)" ng-if="!isGetCharterError">{{ editMode ? \'SAVE\' : \'CREATE\' }}</a> <a href="" ng-click="onCancel()"> CANCEL <span class="icon icon-remove-white"></span> </a> </div> </ul> <div class="tab-content charter-business-case" min-height> <loading-indicator ng-if="!isFullfilled && !isGetCharterError" indicator-size="16px" max-width="120px" display-center="true"></loading-indicator> <form name="createForm" novalidate autocomplete="off" ng-class="{ \'submitted\': submitted() }" ng-show="isFullfilled && !isGetCharterError"> <div class="error-message-wrapper" ng-show="isError(createForm)"> <span class="general-error-message" ng-class="{ \'d-block\': isRequestError }"> <span ng-if="errorMessage">{{ errorMessage }}. </span> <span ng-if="isLogoErrored">{{ logoErrorMessage }}</span> </span> </div> <fieldset ng-disabled="!isFullfilled"> <div class="charter-main-info row"> <div class="col-xs-6"> <charter-text-field-vr form="createForm" config="fieldsCfg.name" charter-model="charterInfo.name"> </charter-text-field-vr> </div> <div class="logo-wrapper f-right col-xs-3"> <div class="charter-logo {{ !newLogo && !logo ? \'no-image\' : \'\' }}" ng-if="isFullfilled" ng-show="charterInfo.attrs"> <img class="charter-logo-img" ngf-src="newLogo || logo" ng-if="newLogo || logo"> <span ng-if="isFullfilled" ngf-select="onSelectLogo($file)"> {{ newLogo || logo ? \'Change\' : \'Add Logo\' }} </span> <span ng-if="isFullfilled" ng-click="onRemoveLogo()" ng-show="newLogo || logo">Remove</span> </div> </div> </div> <div class="row charter-stakeholders-info"> <div class="col-xs-3"> <charter-text-field-vr config="fieldsCfg.budget_owner" charter-model="charterInfo.attrs.budget_owner"> </charter-text-field-vr> </div> <div class="col-xs-3 ad-typeahead-wrapper"> <charter-autocomplete config="fieldsCfg.client_partner" charter-model="charterInfo.stakeholders[0].user" users="users" can-edit="permissions.canChangeCharterClientPartner || !editMode"> </charter-autocomplete> </div> <div class="col-xs-3 ad-typeahead-wrapper"> <charter-autocomplete config="fieldsCfg.manager" charter-model="charterInfo.stakeholders[1].user" users="users" can-edit="permissions.canChangeCharterManager || !editMode"> </charter-autocomplete> </div> <div class="col-xs-3"> <charter-date-picker config="fieldsCfg.valid_until" charter-model="charterInfo.attrs.valid_until"> </charter-date-picker> </div> </div> <div class="charter-info-list edit row"> <charter-text-area config="fieldsCfg.description" charter-model="charterInfo.attrs.description"> </charter-text-area> <charter-text-area config="fieldsCfg.business_need" charter-model="charterInfo.attrs.business_need"> </charter-text-area> <charter-text-area config="fieldsCfg.constraints" charter-model="charterInfo.attrs.constraints"> </charter-text-area> </div> <h2>Internal Details</h2> <div class="charter-info-list edit row"> <charter-select config="fieldsCfg.charter_status" charter-model="charterInfo.attrs.internal_details.charter_status"> </charter-select> <charter-text-field-hr config="fieldsCfg.customer_department" charter-model="charterInfo.attrs.internal_details.customer_department"> </charter-text-field-hr> <charter-select config="fieldsCfg.type_of_work" charter-model="charterInfo.attrs.internal_details.type_of_work"> </charter-select> </div> <div class="charter-info-list edit row"> <div ng-if="!unknownAccount" class="charter-info-list-item"> <div class="col-xs-{{ fieldsCfg.account.labelCol || 3 }}"> <label class="charter-label"> {{ fieldsCfg.account.label }} </label> </div> <div class="col-xs-{{ fieldsCfg.account.inputCol || 9 }}"> <span class="info-label">{{ charterInfo.attrs.internal_details.account.name }}</span> </div> </div> <charter-select ng-if="unknownAccount" config="fieldsCfg.account" charter-model="charterInfo.attrs.internal_details.account"> </charter-select> <div class="charter-info-list-item"> <div class="col-xs-{{ fieldsCfg.business.labelCol || 3 }}"> <label class="charter-label"> {{ fieldsCfg.business.label }} <span ng-if="fieldsCfg.business.required" class="required">&nbsp;*</span> </label> </div> <div class="col-xs-{{ fieldsCfg.business.inputCol || 9 }}"> <ui-select class="business-selector" name="{{ fieldsCfg.business.name }}" ng-model="charterInfo.business" ng-disabled="!charterInfo.attrs.internal_details.account.id" on-select="changeCharterType($item, $model)" append-to-body="true" search-enabled="true"> <ui-select-match>{{ $select.selected.name }}</ui-select-match> <ui-select-choices repeat="item in fieldsCfg.business.items | filter: $select.search" ui-disable-choice="item.id && !item.free"> <div class="item clearfix"> <div class="name" ng-class="{ \'hard-fullwidth\': item.free, \'f-bold\': isSegment(item), \'line\': !isSegment(item) }" title="{{ item.name }}" ng-bind-html="item.name | highlight: $select.search"></div> <div ng-show="item.id" class="occupied" ng-bind-html="item.free ? \'\' : \'In Use\'"></div> </div> </ui-select-choices> </ui-select> </div> <div class="hidden-message error-message hr-error-message" ng-show="!isBusinessValid(charterInfo.business, fieldsCfg.business.required)"> {{ fieldsCfg.business.errors.required }} </div> </div> <charter-select read-only="true" config="fieldsCfg.collection_basis" charter-model="charterInfo.attrs.internal_details.collection_basis"> </charter-select> <div class="charter-info-list-item" ng-if="businessExists && !charterInfo.attrs.program"> <div class="col-xs-{{ fieldsCfg.program_name.labelCol || 3 }}"> <label class="charter-label"> {{ fieldsCfg.program_name.label }} </label> </div> <div class="col-xs-{{ fieldsCfg.program_name.inputCol || 9 }}"> <span class="info-label">{{ charterInfo.attrs.internal_details.program_name || \'None\' }}</span> </div> </div> <div class="charter-info-list-item" ng-if="businessExists && charterInfo.attrs.program"> <div class="col-xs-{{ fieldsCfg.charters.labelCol || 3 }}"> <label class="charter-label"> {{ fieldsCfg.charters.label }} </label> </div> <div class="col-xs-{{ fieldsCfg.charters.inputCol || 9 }}"> <div class="info-label" ng-repeat="charter in charterInfo.attrs.internal_details.charters"> {{ charter.name }} </div> <div ng-hide="charterInfo.attrs.internal_details.charters.length" class="info-label">None</div> </div> </div> <charter-list form="createForm" form-loaded="isFullfilled" config="fieldsCfg.projects" charter-model="charterInfo.attrs.internal_details.projects"> </charter-list> <div class="charter-info-list-item" ng-if="!editMode"> <div class="col-xs-3"></div> <div class="col-xs-2"> <button class="charter-create-btn btn" ng-click="onSubmit(createForm)">Create charter</button> </div> </div> </div> </fieldset> </form> <div class="c-both"></div> <div ng-if="isFullfilled && isGetCharterError" class="charters-summary"> <span class="summary-icon"></span> <div class="charter-message"> <div class="title">{{ errorMessage }}</div> </div> </div> </div> </div> </div> <script type="text/ng-template" id="confirm-charter-save.html"><div class="charter-modal">     <div class="modal-header">       <span class="modal-icon ch-glyphicon glyphicon-alert"></span>       <h3 class="modal-title">Confirm save</h3>     </div>     <div class="modal-body">       <p>{{ data.message }}</p>       <p ng-show="data.items.length">{{ data.instruction }}:         <ul>           <li ng-repeat="item in data.items">             go to charter <strong>{{ item.owner_name }}</strong> and unlink <strong>{{ item.name }}</strong>           </li>         </ul>       </p>     </div>     <div class="modal-footer">       <button class="btn btn-primary" type="button" ng-click="ok()" ng-if="data.showSaveBtn">Save</button>       <button class="btn" type="button" ng-click="cancel()"               ng-class="{ \'btn-primary\': !data.showSaveBtn, \'btn-default\': data.showSaveBtn }">Continue editing</button>     </div>   </div></script>')}]);
module.exports = 'charter.create.html';
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],126:[function(require,module,exports){
(function (global){
(typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null).module('src/app/index.js').run(['$templateCache', function($templateCache){$templateCache.put('charter.view.html','<div class="panel-wrapper overbackdrop"> <div class="ad-tab ad-tab-large o-hid"> <ul class="nav nav-tabs" role="tablist"> <li class="active"> <a href="">Business Case</a> </li> <li> <a ng-click="goToResponsibilities()" href="">Responsibilities</a> </li> <li> <a ng-click="goToCommit()" href="">Commit</a> </li> <div class="f-right nav-tabs-controls"> <a ng-if="permissions.canEditCharter" href="" ng-click="editAction()">EDIT</a> <a href="" ng-click="setParentState()"> CLOSE <span class="icon icon-remove-white"></span> </a> </div> </ul> <div class="tab-content charter-business-case" min-height> <loading-indicator ng-if="!isContentLoaded" indicator-size="16px" max-width="120px" display-center="true"></loading-indicator> <div ng-if="isContentLoaded && !isRequestError"> <div class="charter-main-info row"> <div class="col-xs-9"> <div class="o-hid"> <h2 class="f-left"> <span class="icon icon-program"></span> {{ charterInfo.name }} </h2> <span ng-if="charterInfo.status" class="charterStatus label label-{{charterInfo.status.active ? \'active\' : \'inactive\'}}"> {{ charterInfo.status.active ? "active" : "inactive" }} </span> </div> <div class="time-updated"> Type: <strong>{{ charterType }}</strong> </div> <div class="time-updated"> Last updated: <strong>{{ charterInfo.status.updated.date }} by {{ charterInfo.status.updated.full_name }}</strong> </div> </div> <div class="logo-wrapper col-xs-3"> <div class="charter-logo" ng-if="charterInfo.logo"> <img class="charter-logo-img" ngf-src="charterInfo.logo"> </div> </div> </div> <div class="row charter-stakeholders-info"> <div class="col-xs-3" ng-repeat="item in charterInfo.stakeholders"> <div class="charter-label"> <div class="charter-label-key">{{ item.role }}</div> <div class="charter-label-value">{{ item.name }}</div> </div> </div> <div class="col-xs-3"> <div class="charter-label"> <div class="charter-label-key">Valid Until</div> <div class="charter-label-value" ng-class="{ true: \'valid\', false: \'invalid\', null: \'\' }[getValidity(charterInfo.status)]"> {{ charterInfo.status.valid_until | date: "mediumDate" }} </div> </div> </div> </div> <div class="charter-info-list row"> <div class="charter-info-list-item" ng-repeat="item in charterInfo.details"> <div class="col-xs-3"> <div class="charter-label">{{ item.label }}</div> </div> <div class="col-xs-9 charter-info-list-value charter-info-pre-wrap">{{ item.value }}</div> </div> </div> <div ng-if="permissions.canViewCharterInternals"> <h2>Internal Details</h2> <div class="charter-info-list row"> <div class="charter-info-list-item" ng-repeat="item in charterInfo.internalDetails"> <div class="col-xs-3"> <div class="charter-label">{{ item.label }}</div> </div> <div class="col-xs-9 charter-info-list-value">{{ item.value }}</div> </div> </div> <div class="charter-info-list row"> <div class="charter-info-list-item" ng-repeat="item in charterInfo.internalDetailsExtra"> <div class="col-xs-3"> <div class="charter-label">{{ item.label }}</div> </div> <div class="col-xs-9 charter-info-list-value">{{ item.value }}</div> </div> <div class="charter-info-list-item" ng-repeat="item in charterInfo.children" ng-class="{ \'charter-info-list-item-no-border\': !item.isLast }"> <div class="col-xs-3"> <div class="charter-label">{{ item.label }}</div> </div> <div class="col-xs-9 charter-info-list-value">{{ item.value }}</div> </div> </div> </div> </div> <div class="c-both"></div> <div ng-if="isContentLoaded && isRequestError" class="charters-summary"> <span class="summary-icon"></span> <div class="charter-message"> <div class="title">{{ requestErrorMsg }}</div> </div> </div> </div> </div> </div>')}]);
module.exports = 'charter.view.html';
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],127:[function(require,module,exports){
'use strict';

/*@ngInject*/
Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var CommitCtrl = (function () {
  function CommitCtrl($scope, $state, PermissionsService, CommitService, PeriodService, $timeout, AppContext, UrlParams, ErrorService, UtilsService) {
    var _this = this;

    _classCallCheck(this, CommitCtrl);

    if ($state.current.data.editMode && PermissionsService.isClientRole()) {
      $state.go('charters');
    }

    this.$scope = $scope;
    this.$state = $state;
    this.$timeout = $timeout;
    this.Permissions = PermissionsService;
    this.Commit = CommitService.getResource();
    this.PeriodService = PeriodService;
    this.AppContext = AppContext;
    this.ErrorService = ErrorService;
    this.Utils = UtilsService;

    this.$scope.data = {};
    this.$scope.permissions = {};
    this.$scope.periods = null;
    this.$scope.selectedPeriod = { period: null };
    this.$scope.alreadyCommitted = false;
    this.$scope.validDate = {
      status: true
    };

    this.$scope.respCfg = {
      ssResp: {
        name: 'softserve_responsibilities',
        fieldName: 'responsibility'
      },
      clientExp: {
        name: 'client_experience',
        fieldName: 'experience'
      },
      expToClient: {
        name: 'expectations_to_client',
        fieldName: 'expectation'
      }
    };

    this.items = {
      commit: 'values'
    };

    this.errorMessage = {
      required: 'Please fill in all the fields in order to commit this period',
      invalidValue: 'Invalid value',
      fieldRequired: 'Required',
      expiredCharter: 'You can not edit data, because the charter is expired',
      notExpiredCharter: 'You can not edit data, because Valid Until date of this charter ends before the end of the period'
    };

    this.$scope.editMode = $state.current.data.editMode;
    this.$scope.isContentLoaded = false;
    this.$scope.numberPattern = /^\d*\.?\d+$/;
    this.$scope.isValueRequired = false;
    this.$scope.isCharterActive = false;
    this.$scope.isRequestError = false;

    this.$scope.goToResponsibilities = function () {
      return _this._goToResponsibilities();
    };
    this.$scope.goToResponsibilitiesEdit = function () {
      return _this._goToResponsibilitiesEdit();
    };
    this.$scope.goToBusinessCase = function (mode) {
      return _this._goToBusinessCase(mode);
    };
    this.$scope.setParentState = function () {
      return _this._setParentState();
    };
    this.$scope.commitAction = function (form) {
      return _this._commitAction(form);
    };
    this.$scope.isContentAvailable = function () {
      return _this._isContentAvailable();
    };
    this.$scope.getUnit = function (item) {
      return _this._getUnit(item);
    };
    this.$scope.getValue = function (item) {
      return _this._getValue(item);
    };
    this.$scope.isCommitted = function () {
      return _this._isCommitted();
    };
    this.$scope.isBinaryUnit = function (unit) {
      return _this._isBinaryUnit(unit);
    };
    this.$scope.showError = function (form, index, name, config) {
      return _this._showError(form, index, name, config);
    };
    this.$scope.getErrorMessage = function (form, index, name, config) {
      return _this._getErrorMessage(form, index, name, config);
    };
    this.$scope.isError = function (form) {
      return _this._isError(form);
    };
    this.$scope.submitted = function () {
      return _this.getSubmitted();
    };
    this.$scope.commitPeriod = function (form) {
      return _this._commitPeriod(form);
    };
    this.$scope.showView = function () {
      return _this._showView();
    };
    this.$scope.isBest = function (item) {
      return _this._isBest(item);
    };
    this.$scope.isYellow = function (item) {
      return _this._isYellow(item);
    };
    this.$scope.isRed = function (item) {
      return _this._isRed(item);
    };

    var unWatchPeriod = this.$scope.$watch(function () {
      return _this.$scope.selectedPeriod.period;
    }, function (newVal) {
      if (newVal && newVal.id) {
        AppContext.setCharterPeriod(newVal);
        UrlParams.setParameter('periodId', newVal.id);
        _this.getCommit();
      }
    });

    var unWatchSubmitted = this.$scope.$watch(function () {
      return _this.getSubmitted();
    }, function (newVal) {
      if (!newVal) {
        _this.$scope.isValueRequired = false;
      }
    });

    var unWatchData = this.$scope.$watch(function () {
      return _this.$scope.data;
    }, function () {
      return _this.setSubmitted(false);
    }, true);

    /**
     * Destroy watchers
     */
    this.$scope.$on('destroy', function () {
      unWatchPeriod();
      unWatchSubmitted();
      unWatchData();
    });

    this.getPeriods();
  }

  /**
   * Go to Business Case tab
   * @param {String} mode - view|edit|create
   */

  _createClass(CommitCtrl, [{
    key: '_goToBusinessCase',
    value: function _goToBusinessCase(mode) {
      this._go('^.' + mode);
    }

    /**
     * Navigate to current charter's responsibilities
     * @private
     */
  }, {
    key: '_goToResponsibilities',
    value: function _goToResponsibilities() {
      this._go('^.responsibilities');
    }

    /**
     * Navigate to current charter's responsibilities
     * @private
     */
  }, {
    key: '_goToResponsibilitiesEdit',
    value: function _goToResponsibilitiesEdit() {
      this._go('^.responsibilitiesEdit');
    }

    /**
     * Backs to parent state when we push 'Close' button
     * @private
     */
  }, {
    key: '_setParentState',
    value: function _setParentState() {
      if (this._isEdit()) {
        this._go('^.commit');
      } else {
        this.$state.go(this.AppContext.getActiveTabState() || '^', this.$state.params);
      }
    }

    /**
     * Handlers for 'Edit' button
     * @private
     */
  }, {
    key: '_commitAction',
    value: function _commitAction(form) {
      if (!this._isEdit()) {
        this._go('^.commitEdit');
      } else {
        this._onSubmit(form, this.items.commit);
      }
    }

    /**
     * Go to state with parameters
     * @param {String} state
     * @private
     */
  }, {
    key: '_go',
    value: function _go(state) {
      this.$state.go(state, this._getParams());
    }

    /**
     * Checks whether we in edit mod
     * @returns {boolean}
     * @private
     */
  }, {
    key: '_isEdit',
    value: function _isEdit() {
      return this.$scope.editMode;
    }

    /**
     * Returns true if at least one section of commit is available.
     */
  }, {
    key: '_isContentAvailable',
    value: function _isContentAvailable() {
      var resps = this.$scope.data.softserve_responsibilities || [],
          exp = this.$scope.data.client_experience || [],
          expect = this.$scope.data.expectations_to_client || [];

      return resps.length || exp.length || expect.length;
    }

    /**
     * Returns formatted unit string
     * @param {Object} item
     * @returns {String}
     * @private
     */
  }, {
    key: '_getUnit',
    value: function _getUnit(item) {
      if (!item.unit) {
        return '';
      }

      return item.unit === '%' ? item.unit : '(' + item.unit + ')';
    }

    /**
     * Transforms values in case of binary metric
     * @param {Object} item
     * @private
     */
  }, {
    key: '_getValue',
    value: function _getValue(item) {
      if (item.value === null) {
        return '-';
      }

      if (this._isBinaryUnit(item.unit)) {
        return item.value ? 'Yes' : 'No';
      }

      return item.value;
    }

    /**
     * Checks whether unit is 'binary'
     * @param {String} unit
     * @returns {boolean}
     * @private
     */
  }, {
    key: '_isBinaryUnit',
    value: function _isBinaryUnit(unit) {
      return unit === 'binary';
    }

    /**
     * Checks whether selected period has committed status
     * @private
     */
  }, {
    key: '_isCommitted',
    value: function _isCommitted() {
      return this.$scope.selectedPeriod.period ? this.$scope.selectedPeriod.period.status.toLowerCase() === 'committed' : true;
    }

    /**
     * Returns period. In case of view it is the current period(last) and
     * in case of edit - the period with id == periodId from url params
     * @param {Array} data - the list of periods
     * @returns {Object}
     * @private
     */
  }, {
    key: '_getSelectedPeriod',
    value: function _getSelectedPeriod(data) {
      if (!data.length) {
        return null;
      }

      var result = data.filter(function (item) {
        return item.is_default;
      })[0] || data[0];
      var period = this.AppContext.getCharterPeriod();
      var id = period && period.id ? period.id : +this.$state.params.periodId;

      if (id) {
        var newPeriod = data.filter(function (item) {
          return item.id === id;
        })[0];

        result = newPeriod || result;
      }

      return result;
    }

    /**
     * Gets permissions from PermissionsService
     * @returns {Object} - Permissions map for this module
     */
  }, {
    key: '_getPermissions',
    value: function _getPermissions() {
      var targetDetails = {
        targetId: this.getCharterId(),
        accountId: this.$scope.data.charter.attrs.internal_details.account.id,
        parentId: this.$scope.data.charter.parent_id
      };

      return {
        canEditCommit: this.Permissions.can('editCommit', targetDetails)
      };
    }

    /**
     * Checks whether we should show error message
     * @param {Object} form
     * @param {Number} index - row number
     * @param {String} name - field name
     * @param {Object} config
     * @returns {Boolean}
     * @private
     */
  }, {
    key: '_showError',
    value: function _showError(form, index, name, config) {
      if (!form || !config) {
        return null;
      }

      var field = this._getField(form, index, name, config);

      if (!field) {
        return null;
      }

      return field.$invalid;
    }

    /**
     * Returns field of specified row
     * @param {Object} form
     * @param {Number} index - row number
     * @param {String} name - field name
     * @param {Object} config
     * @private
     */
  }, {
    key: '_getField',
    value: function _getField(form, index, name, config) {
      var row = this._getRow(form, index, config);

      return row ? row[name] : null;
    }

    /**
     * Returns row with nimber === index
     * @param {Object} form
     * @param {Number} index - row number
     * @param {Object} config
     * @private
     */
  }, {
    key: '_getRow',
    value: function _getRow(form, index, config) {
      if (!form || !this.$scope.data[config.name]) {
        return null;
      }

      return form[config.name][config.fieldName + '-' + index];
    }

    /**
     * Returns error message
     * @param {Object} form
     * @param {Number} index - row number
     * @param {String} name - field name
     * @param {Object} config
     * @returns {String}
     * @private
     */
  }, {
    key: '_getErrorMessage',
    value: function _getErrorMessage(form, index, name, config) {
      var error = this.errorMessage;

      if (!form || !config) {
        return '';
      }

      var field = this._getField(form, index, name, config);

      if (!field) {
        return '';
      }

      if (field.$error.required) {
        return error.fieldRequired;
      }

      if (field.$invalid) {
        return error.invalidValue;
      }

      return '';
    }

    /**
     * Checks whether submitted form is invalid
     * @param {Object} form
     */
  }, {
    key: '_isError',
    value: function _isError(form) {
      return this.getSubmitted() && (form.$error.required || this.$scope.isUpdateError);
    }

    /**
     * Save the form
     * @param {Object} form - form for creation
     * @param {String|null} items - null|'values'
     * @private
     */
  }, {
    key: '_onSubmit',
    value: function _onSubmit(form) {
      var _this2 = this;

      var items = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

      this.$scope.isValueRequired = items !== this.items.commit;

      // Above we have changed the required state for input fields. So at this moment the form has not
      // refreshed its validity state and has its old state. We have to postpone form validation via $timeout
      // to have a correct validity state
      this.$timeout(function () {
        _this2.$scope.$apply(function () {
          _this2.setSubmitted(true);

          if (!_this2.isFormValid(form)) {
            return null;
          }

          var params = _this2._getParams();

          if (items) {
            params.items = items;
          }

          _this2.Commit.update(params, _this2._getRequestData(), function (res) {
            _this2.AppContext.setPromise('charter', null, true);
            _this2._go('^.commit');
          }, function (error) {
            if (error.data && error.status === 409) {
              _this2.$scope.selectedPeriod.period.committer = error.data.field_error.committer;
              _this2.$scope.selectedPeriod.period.committed_date = error.data.field_error.committed_date;
              _this2.$scope.alreadyCommitted = true;
            }

            _this2.$scope.isUpdateError = true;
            _this2.$scope.errorMessage = _this2.ErrorService.getError(error);
          });
        });
      }, 0);
    }

    /**
     * Commit period's data
     * @param {Object} form
     * @private
     */
  }, {
    key: '_commitPeriod',
    value: function _commitPeriod(form) {
      this._onSubmit(form);
    }

    /**
     * Checks whether the state is active
     * @param {String} state
     * @returns {boolean}
     * @private
     */
  }, {
    key: '_isActive',
    value: function _isActive(state) {
      return state.toLowerCase() === 'active';
    }

    /**
     * Whether we should show view or not
     * @private
     */
  }, {
    key: '_showView',
    value: function _showView() {
      var isContent = this._isContentAvailable() && this.$scope.isContentLoaded;

      if (this._isEdit() && (this.$scope.alreadyCommitted || !this.$scope.validDate.status)) {
        return false;
      }

      return this._isEdit() ? !this._isCommitted() && this.$scope.isCharterActive && isContent : isContent && this.$scope.periods.length;
    }

    /**
     * Prepares and transforms data to appropriate format
     *   PUT data format:
     *    {
     *      "responsibility_values": [{
     *        "metric_id": 1242,
     *        "value": null
     *      }, {
     *        "metric_id": 1246,
     *        "value": 10
     *      }, {
     *        "metric_id": 1158,
     *        "value":80
     *      }, ...]
     *    }
     * @private
     */
  }, {
    key: '_getRequestData',
    value: function _getRequestData() {
      var obj = { responsibility_values: [] };
      var cfg = this.$scope.respCfg;

      for (var key in cfg) {
        if (cfg.hasOwnProperty(key)) {
          var _name = cfg[key].name;
          var resp = this.$scope.data[_name];

          if (resp) {
            for (var i = 0, len = resp.length; i < len; i++) {
              obj.responsibility_values.push({
                metric_id: resp[i].id,
                value: resp[i].value === null || resp[i].value === '' ? null : +resp[i].value
              });
            }
          }
        }
      }

      return obj;
    }

    /**
     * Returns entity and period ids
     * @returns {Object}
     * @private
     */
  }, {
    key: '_getParams',
    value: function _getParams() {
      return { id: this.getCharterId(), periodId: this.getPeriodId(), filter: this.$state.params.filter };
    }

    /**
     * Whether we have the normal threshold order, like red=60, yellow=80, best=100
     * @param {Object} item - metric
     * @returns {boolean}
     * @private
     */
  }, {
    key: '_isAscendingThresholds',
    value: function _isAscendingThresholds(item) {
      return item.yellow ? item.red < item.yellow && item.yellow < item.best : item.red < item.best;
    }

    /**
     * Checks whether the value is not empty
     * @param {String|Number|Null|undefined} value
     * @returns {boolean}
     * @private
     */
  }, {
    key: '_isValue',
    value: function _isValue(value) {
      return value !== null && value !== '' && value !== undefined;
    }

    /**
     * Checks whether we have any threshold
     * @param {Object} item - metric
     * @returns {boolean}
     * @private
     */
  }, {
    key: '_thresholdsExist',
    value: function _thresholdsExist(item) {
      return this._isValue(item.best) || this._isValue(item.yellow) || this._isValue(item.red);
    }

    /**
     * Checks whether metric value is in green zone
     * @param {Object} item - metric object
     * @returns {Boolean}
     * @private
     */
  }, {
    key: '_isBest',
    value: function _isBest(item) {
      var isBest = this._isValue(item.best);
      var isYellow = this._isValue(item.yellow);
      var isRed = this._isValue(item.red);

      if (!this._isValue(item.value) || !this._thresholdsExist(item)) {
        return false;
      }

      if (this._isBinaryUnit(item.unit)) {
        return item.value === item.best;
      }

      if (isBest && !isYellow && !isRed) {
        return item.value >= item.best;
      }

      return this._isAscendingThresholds(item) ? item.yellow ? item.value > item.yellow : item.value > item.red : item.yellow ? item.value < item.yellow : item.value < item.red;
    }

    /**
     * Checks whether metric value is in yellow zone
     * @param {Object} item - metric object
     * @returns {Boolean}
     * @private
     */
  }, {
    key: '_isYellow',
    value: function _isYellow(item) {
      if (this._isBinaryUnit(item.unit) || !this._isValue(item.value) || !this._thresholdsExist(item)) {
        return false;
      }

      return this._isAscendingThresholds(item) ? item.yellow ? item.value <= item.yellow && item.value > item.red : false : item.yellow ? item.value >= item.yellow && item.value < item.red : false;
    }

    /**
     * Checks whether metric value is in red zone
     * @param {Object} item - metric object
     * @returns {Boolean}
     * @private
     */
  }, {
    key: '_isRed',
    value: function _isRed(item) {
      var isBest = this._isValue(item.best);
      var isYellow = this._isValue(item.yellow);
      var isRed = this._isValue(item.red);

      if (!this._isValue(item.value) || !this._thresholdsExist(item)) {
        return false;
      }

      if (this._isBinaryUnit(item.unit)) {
        return item.value !== item.best;
      }

      if (isBest && !isYellow && !isRed) {
        return item.value < item.best;
      }

      return this._isAscendingThresholds(item) ? item.value <= item.red : item.value >= item.red;
    }

    /**
     * Returns id of the current charter
     * @returns {String}
     */
  }, {
    key: 'getCharterId',
    value: function getCharterId() {
      return this.$state.params.id;
    }

    /**
     * Gets periods from server
     */
  }, {
    key: 'getPeriods',
    value: function getPeriods() {
      var _this3 = this;

      this.PeriodService.getPeriods(this.getCharterId()).then(function (res) {
        _this3.$scope.periods = res.data.reverse();
        _this3.$scope.selectedPeriod.period = _this3._getSelectedPeriod(_this3.$scope.periods);
      }, function (error) {
        _this3.$scope.isRequestError = true;
        _this3.$scope.errorMessage = _this3.ErrorService.getError(error);
      });
    }

    /**
     * Load commit data from server
     */
  }, {
    key: 'getCommit',
    value: function getCommit() {
      var _this4 = this;

      var params = this._getParams();

      params.items = this.items.commit;

      this.Commit.get(params).$promise.then(function (data) {
        _this4.$scope.data = data;
        _this4.$scope.permissions = _this4._getPermissions();
        _this4.$scope.isContentLoaded = true;
        _this4.$scope.isCharterActive = _this4._isActive(data.charter.attrs.internal_details.charter_status.key);
        _this4.$scope.alreadyCommitted = _this4._isCommitted() && _this4.$scope.editMode && !!_this4.$scope.periods.length;
        _this4.$scope.validDate = _this4._getValidity();
      }, function (error) {
        _this4.$scope.isRequestError = true;
        _this4.$scope.errorMessage = _this4.ErrorService.getError(error);
        _this4.$scope.isContentLoaded = true;
      });
    }

    /**
     * Setter for 'submitted' property
     * @param {Boolean} state - true|false
     */
  }, {
    key: 'setSubmitted',
    value: function setSubmitted(state) {
      this.submitted = state;
    }

    /**
     * Getter for 'submitted' property
     */
  }, {
    key: 'getSubmitted',
    value: function getSubmitted() {
      return this.submitted;
    }

    /**
     * Checks form for validity
     * @param {Object} form - charter form
     */
  }, {
    key: 'isFormValid',
    value: function isFormValid(form) {
      if (form.$error.required) {
        this.$scope.errorMessage = this.errorMessage.required;
      }

      return form && form.$valid;
    }

    /**
     * Returns id of the selected period
     * @returns {String}
     */
  }, {
    key: 'getPeriodId',
    value: function getPeriodId() {
      return this.$scope.selectedPeriod.period && this.$scope.selectedPeriod.period.id;
    }

    /**
     * Checks the validity of period's end date regarding to valid until date
     * @returns {Object} - status and message
     */
  }, {
    key: '_getValidity',
    value: function _getValidity() {
      var _this5 = this;

      /**
       * Creates date for string and returns milliseconds
       * @param {String} str - string representation of date
       * @private
       */
      var _createDate = function _createDate(str) {
        return new Date(_this5.Utils.adoptTime(str)).getTime();
      };

      var attrs = this.$scope.data.charter.attrs;
      var validUntil = _createDate(attrs.valid_until);
      var periodEnd = _createDate(this.$scope.selectedPeriod.period.end);
      var message = this.Utils.isDateStillValid(attrs.valid_until) ? this.errorMessage.notExpiredCharter : this.errorMessage.expiredCharter;

      return { status: periodEnd <= validUntil, message: message };
    }
  }]);

  return CommitCtrl;
})();

exports['default'] = CommitCtrl;
module.exports = exports['default'];

},{}],128:[function(require,module,exports){
(function (global){
'use strict';

/**
 * View and edit charter's commit.
 */

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null);

var _angular2 = _interopRequireDefault(_angular);

require('./views/commit.html');

var _controllersCommitController = require('./controllers/commit.controller');

var _controllersCommitController2 = _interopRequireDefault(_controllersCommitController);

var _servicesCommitService = require('./services/commit.service');

var _servicesCommitService2 = _interopRequireDefault(_servicesCommitService);

var _componentsPeriodService = require('components/period-service');

var _componentsPeriodService2 = _interopRequireDefault(_componentsPeriodService);

var _componentsUrlParamsService = require('components/url-params-service');

var _componentsUrlParamsService2 = _interopRequireDefault(_componentsUrlParamsService);

var _componentsErrorService = require('components/error-service');

var _componentsErrorService2 = _interopRequireDefault(_componentsErrorService);

var moduleName = 'abiliton.charter.commit';

_angular2['default'].module(moduleName, [_servicesCommitService2['default'], _componentsPeriodService2['default'], _componentsUrlParamsService2['default'], _componentsErrorService2['default'], 'ui.bootstrap', 'ui.router']).controller('CommitCtrl', _controllersCommitController2['default']).config(function ($stateProvider) {
  $stateProvider.state('charters.charter.commit', {
    url: '/commit/:id?periodId',
    templateUrl: 'commit.html',
    controller: 'CommitCtrl'
  }).state('charters.charter.commitEdit', {
    data: {
      editMode: true,
      disableContext: true
    },
    url: '/edit-commit/:id?periodId',
    templateUrl: 'commit.html',
    controller: 'CommitCtrl'
  });
});

exports['default'] = moduleName;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./controllers/commit.controller":127,"./services/commit.service":129,"./views/commit.html":130,"components/error-service":24,"components/period-service":39,"components/url-params-service":67}],129:[function(require,module,exports){
(function (global){
'use strict';

/***************

 This service works with commit API /api/charter/:id/period/:periodId/:items
 In case of commit data saving :items === 'values'
 In case of period committing :items === null

 GET data format:
    {
      "softserve_responsibilities": [{
        "unit": "binary",
        "best": 0.0,
        "red": 1.0,
        "yellow": null,
        "metric_id": 79,
        "metric_area": "Budget management",
        "metric_name": "Budget Compliance",
        "description": "SOMETHING",
        "weight": 0,
        "value": 1.0,
        "id": 1242
      }, ...],
      "expectations_to_client": [{
        "unit": "binary",
        "best": 1.0,
        "yellow": null,
        "metric_id": 104,
        "red": 0.0,
        "metric_name": "New Metric",
        "description": "SOMETHING",
        "weight": 100,
        "value": 0.0, "id": 1165
      }],
      "charter": {
        "parent_id": 10280,
        "parent_type": "account",
        "attrs": {...},
        "program": false
      }
    }

  PUT data format:
    {
      "responsibility_values": [{
        "metric_id": 1242,
        "value": null
      }, {
        "metric_id": 1246,
        "value": 10
      }, {
        "metric_id": 1158,
        "value":80
      }, ...]
    }

 ***************/

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null);

var _angular2 = _interopRequireDefault(_angular);

var moduleName = 'charter.commit.service';

/*@ngInject*/

var CommitService = (function () {
  CommitService.$inject = ["$resource"];
  function CommitService($resource) {
    _classCallCheck(this, CommitService);

    this.$resource = $resource;
  }

  /**
   * Get $resource instance for charter commit.
   *
   * @returns {Object}
   */

  _createClass(CommitService, [{
    key: 'getResource',
    value: function getResource() {
      return this.$resource('/api/charter/:id/period/:periodId/:items', {}, {
        update: { method: 'PUT' }
      });
    }
  }]);

  return CommitService;
})();

_angular2['default'].module(moduleName, []).service('CommitService', CommitService);

exports['default'] = moduleName;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],130:[function(require,module,exports){
(function (global){
(typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null).module('src/app/index.js').run(['$templateCache', function($templateCache){$templateCache.put('commit.html','<div class="panel-wrapper overbackdrop"> <div class="ad-tab ad-tab-large o-hid"> <ul class="nav nav-tabs" role="tablist"> <li ng-if="!editMode"> <a ng-click="goToBusinessCase(\'view\')" href="">Business Case</a> </li> <li ng-if="!editMode"> <a href="" ng-click="goToResponsibilities()">Responsibilities</a> </li> <li class="active"> <a href="">Commit</a> </li> <div class="f-right nav-tabs-controls"> <a ng-if="!isRequestError && permissions.canEditCommit && !editMode && periods.length && isContentAvailable()" href="" ng-click="commitAction(respsForm)">EDIT</a> <a ng-if="!isRequestError && isCharterActive && permissions.canEditCommit && editMode && !isCommitted() && !alreadyCommitted && validDate.status" href="" ng-click="commitAction(respsForm)">SAVE</a> <a href="" ng-click="setParentState()"> {{ editMode ? \'CANCEL\' : \'CLOSE\' }} <span class="icon icon-remove-white"></span> </a> </div> </ul> <div class="tab-content charter-resps" min-height> <loading-indicator ng-if="!isContentLoaded && !isRequestError" indicator-size="16px" max-width="120px" display-center="true"></loading-indicator> <form name="respsForm" autocomplete="off" novalidate ng-class="{ \'submitted\': submitted() }" ng-show="isContentLoaded && !isRequestError"> <div class="table-row row period-selector" ng-if="!editMode && periods.length"> <div class="col-xs-8 text-right"> <div class="committed-by" ng-if="isCommitted()"> <label>Committed by:</label> {{ selectedPeriod.period.committer }} ({{ selectedPeriod.period.committed_date | date:\'MMM d, y h:mm a\' }}) </div> </div> <div class="col-xs-1 text-right"><label>Period</label></div> <div class="col-xs-3 ad-metric-selector"> <ui-select ng-if="!editMode" ng-model="selectedPeriod.period" search-enabled="true"> <ui-select-match>{{ $select.selected.name }}</ui-select-match> <ui-select-choices repeat="item in periods | filter:$select.search"> <div class="item-fullwidth clearfix"> <div class="name" ng-bind-html="item.name | highlight: $select.search"></div> <span class="ch-glyphicon glyphicon-ok committed-mark" ng-class="{ \'committed-mark-inverse\': item.id === selectedPeriod.period.id }" ng-if="item.status === \'committed\'"></span> </div> </ui-select-choices> </ui-select> </div> </div> <div ng-if="showView()"> <div class="error-message-wrapper" ng-show="isError(respsForm)"> <span class="general-error-message">{{ errorMessage }}</span> </div> <div class="table-row row period-selector text-right" ng-if="editMode"> <div class="col-xs-12"> <label>Period:&nbsp; <span class="period-name"> <strong>{{ selectedPeriod.period.name }}</strong> </span> </label> </div> </div> <section ng-form="{{ respCfg.ssResp.name }}" ng-if="data[respCfg.ssResp.name].length"> <h2>SoftServe Responsibilities <span class="count" ng-if="data[respCfg.ssResp.name].length > 1"> {{ data[respCfg.ssResp.name].length }} </span> </h2> <div class="view-resps-table"> <div class="table-header row"> <div class="col-xs-9">Area / Metric / Description</div> <div class="col-xs-3">{{ selectedPeriod.period.name }}</div> <div class="divider"></div> </div> <div ng-form="{{ respCfg.ssResp.fieldName }}-{{ $index }}" class="table-row row" ng-repeat="item in data[respCfg.ssResp.name] | orderBy:[\'metric_area\', \'metric_name\', \'description\']"> <div class="col-xs-9"> <span class="category">{{ item.metric_area }}</span> <span class="name">{{ item.metric_name }}</span> <p class="description">{{ item.description }}</p> </div> <div class="col-xs-3"> <span class="commit"> <span class="value" ng-class="{ \'col-xs-4\': editMode }"> <span ng-if="!editMode" ng-class="{ \'best\': isBest(item), \'yellow\': isYellow(item), \'red\': isRed(item)}"> {{ getValue(item) }} </span> <span ng-if="editMode"> <input name="value" type="text" maxlength="10" ng-if="!isBinaryUnit(item.unit)" ng-model="item.value" ng-pattern="numberPattern" ng-required="isValueRequired" transform-to-number> <select name="value" ng-if="isBinaryUnit(item.unit)" ng-required="isValueRequired" ng-model="item.value"> <option value=""></option> <option value="1">Yes</option> <option value="0">No</option> </select> <div class="hidden-message responsibility-error-message" ng-show="showError(respsForm, $index, \'value\', respCfg.ssResp)"> {{ getErrorMessage(respsForm, $index, \'value\', respCfg.ssResp) }} </div> </span> </span> <span ng-if="editMode" class="col-xs-1"></span> <span class="unit" ng-class="{ \'col-xs-7\': editMode }">{{ getUnit(item) }}</span> </span> </div> <div class="divider"></div> </div> </div> </section> <section ng-form="{{ respCfg.expToClient.name }}" ng-if="data.expectations_to_client.length"> <h2>Expectations to Client <span class="count" ng-if="data.expectations_to_client.length > 1"> {{ data.expectations_to_client.length }} </span> </h2> <div class="view-resps-table"> <div class="table-header row"> <div class="col-xs-9">Expectation / Description</div> <div class="col-xs-3">{{ selectedPeriod.period.name }}</div> <div class="divider"></div> </div> <div ng-repeat="item in data.expectations_to_client | orderBy:[\'metric_name\', \'description\']" ng-form="{{ respCfg.expToClient.fieldName }}-{{ $index }}" class="table-row row"> <div class="col-xs-9"> <span class="name">{{ item.metric_name }}</span> <p class="description">{{ item.description }}</p> </div> <div class="col-xs-3"> <span class="commit"> <span class="value" ng-class="{ \'col-xs-4\': editMode }"> <span ng-if="!editMode" ng-class="{ \'best\': isBest(item), \'yellow\': isYellow(item), \'red\': isRed(item)}"> {{ getValue(item) }} </span> <span ng-if="editMode"> <input name="value" type="text" maxlength="10" ng-if="!isBinaryUnit(item.unit)" ng-model="item.value" ng-required="isValueRequired" ng-pattern="numberPattern" transform-to-number> <select name="value" ng-if="isBinaryUnit(item.unit)" ng-required="isValueRequired" ng-model="item.value"> <option value=""></option> <option value="1">Yes</option> <option value="0">No</option> </select> <div class="hidden-message responsibility-error-message" ng-show="showError(respsForm, $index, \'value\', respCfg.expToClient)"> {{ getErrorMessage(respsForm, $index, \'value\', respCfg.expToClient) }} </div> </span> </span> <span ng-if="editMode" class="col-xs-1"></span> <span class="unit" ng-class="{ \'col-xs-7\': editMode }">{{ getUnit(item) }}</span> </span> </div> <div class="divider"></div> </div> </div> </section> </div> <div class="c-both"></div> <div ng-if="!editMode && !isContentAvailable() && isContentLoaded && !isCommitted() && periods.length" class="charters-summary"> <span class="summary-icon"></span> <div class="charter-message"> <div class="title">This section is empty</div> <div class="message" ng-if="permissions.canEditCommit"> Go to <a href="" ng-click="goToResponsibilitiesEdit()">Responsibilities</a> tab and add metrics </div> </div> </div> <div ng-if="validDate.status && editMode && !isCharterActive && !isCommitted() && periods.length" class="charters-summary"> <span class="summary-icon"></span> <div class="charter-message"> <div class="title">You can not edit data, because the charter is inactive</div> <div class="message" ng-if="permissions.canEditCommit"> Go to <a href="" ng-click="goToBusinessCase(\'edit\')">Business Case</a> tab and activate the charter </div> </div> </div> <div ng-if="alreadyCommitted" class="charters-summary"> <span class="summary-icon"></span> <div class="charter-message"> <div class="title">This period\'s data has already been committed by:</div> <div class="message"> {{ selectedPeriod.period.committer }} ({{ selectedPeriod.period.committed_date | date:\'MMM d, y h:mm a\' }}) </div> </div> </div> <div ng-if="isContentLoaded && !periods.length" class="charters-summary"> <span class="summary-icon"></span> <div class="charter-message"> <div class="title">There are no periods generated for your charter yet</div> <div class="message" ng-if="permissions.canEditCommit"> Please <a href="">contact</a> administrator to create new period </div> </div> </div> <div ng-if="!validDate.status && editMode && periods.length && !alreadyCommitted" class="charters-summary"> <span class="summary-icon"></span> <div class="charter-message"> <div class="title">{{ validDate.message }}</div> <div class="message" ng-if="permissions.canEditCommit"> Go to <a href="" ng-click="goToBusinessCase(\'edit\')">Business Case</a> tab and update \'Valid Until\' date </div> </div> </div> </form> <div ng-if="!isRequestError && showView()"> <div class="charter-info-list-item" ng-if="permissions.canEditCommit && editMode && !isCommitted()"> <div class="commit-btn-container"> <button class="commit-btn btn" ng-click="commitPeriod(respsForm)">Commit</button> </div> </div> </div> <div ng-if="isRequestError" class="charters-summary"> <span class="summary-icon"></span> <div class="charter-message"> <div class="title">{{ errorMessage }}</div> </div> </div> </div> </div> </div>')}]);
module.exports = 'commit.html';
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],131:[function(require,module,exports){
(function (global){
'use strict';

/**
 * View/edit charter's business case and responsibilities
 */

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null);

var _angular2 = _interopRequireDefault(_angular);

var _businessCase = require('./business-case');

var _businessCase2 = _interopRequireDefault(_businessCase);

var _responsibilities = require('./responsibilities');

var _responsibilities2 = _interopRequireDefault(_responsibilities);

var _commit = require('./commit');

var _commit2 = _interopRequireDefault(_commit);

var _modulesSimpleContext = require('modules/simple-context');

var _modulesSimpleContext2 = _interopRequireDefault(_modulesSimpleContext);

var _commonControllersChartersController = require('../common/controllers/charters.controller');

var _commonControllersChartersController2 = _interopRequireDefault(_commonControllersChartersController);

var _componentsUtilsService = require('components/utils-service');

var _componentsUtilsService2 = _interopRequireDefault(_componentsUtilsService);

var moduleName = 'abiliton.charter';

_angular2['default'].module(moduleName, [_businessCase2['default'], _responsibilities2['default'], _commit2['default'], _modulesSimpleContext2['default'], _componentsUtilsService2['default'], 'ui.router', 'ngResource']).config(function ($stateProvider) {
  $stateProvider.state('charters.charter', {
    url: '',
    reloadOnSearch: false,
    data: {
      isPresentInfoButton: true,
      isClickedRow: true,
      isPresentFilters: true
    },
    views: {
      'context@': {
        templateUrl: 'simple.context.html',
        controller: 'SimpleContextCtrl'
      },
      'content@': {
        templateUrl: 'charters.tpl.html',
        controller: _commonControllersChartersController2['default']
      }
    }
  });
});

exports['default'] = moduleName;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../common/controllers/charters.controller":142,"./business-case":121,"./commit":128,"./responsibilities":137,"components/utils-service":70,"modules/simple-context":186}],132:[function(require,module,exports){
'use strict';

/*@ngInject*/
Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var ResponsibilitiesCtrl = (function () {
  function ResponsibilitiesCtrl($scope, $state, ResponsibilitiesService, PermissionsService, PeriodService, AppContext, UrlParams, ErrorService) {
    var _this = this;

    _classCallCheck(this, ResponsibilitiesCtrl);

    this.$scope = $scope;
    this.$state = $state;
    this.Responsibilities = ResponsibilitiesService.getResource();
    this.Permissions = PermissionsService;
    this.PeriodService = PeriodService;
    this.AppContext = AppContext;
    this.ErrorService = ErrorService;

    /**
     * Initial value of responsibilities model.
     * @type {Object}
     */
    this.$scope.data = {};
    this.$scope.permissions = {};
    this.$scope.periods = null;
    this.$scope.selectedPeriod = { period: null };
    this.$scope.isContentLoaded = false;
    this.$scope.isRequestError = false;

    this.$scope.goToBusinessCase = function () {
      return _this.goToBusinessCase();
    };
    this.$scope.goToCommit = function () {
      return _this.goToCommit();
    };
    this.$scope.isContentAvailable = function () {
      return _this._isContentAvailable();
    };
    this.$scope.editAction = function () {
      return _this._editAction();
    };
    this.$scope.setParentState = function () {
      return _this._setParentState();
    };
    this.$scope.getThreshold = function (item, value) {
      return _this._getThreshold(item, value);
    };
    this.$scope.isBinaryUnit = function (unit) {
      return _this._isBinaryUnit(unit);
    };
    this.$scope.getUnit = function (unit) {
      return _this._getUnit(unit);
    };
    this.$scope.isCommitted = function () {
      return _this._isCommitted();
    };
    this.$scope.isNull = function (value) {
      return value === null;
    };

    var unWatchPeriod = this.$scope.$watch(function () {
      return _this.$scope.selectedPeriod.period;
    }, function (newVal) {
      if (newVal && newVal.id) {
        AppContext.setCharterPeriod(newVal);
        UrlParams.setParameter('periodId', newVal.id);
        _this.getResponsibilities();
      }
    });

    this.$scope.$on('destroy', function () {
      unWatchPeriod();
    });

    this.getPeriods();
  }

  /**
   * Go to Business Case tab
   */

  _createClass(ResponsibilitiesCtrl, [{
    key: 'goToBusinessCase',
    value: function goToBusinessCase() {
      this.$state.go('^.view', this._getParams());
    }

    /**
     * Go to Commit tab
     */
  }, {
    key: 'goToCommit',
    value: function goToCommit() {
      this.$state.go('^.commit', this._getParams());
    }

    /**
     * Returns id of current charter
     *
     * @returns {String}
     */
  }, {
    key: 'getCharterId',
    value: function getCharterId() {
      return this.$state.params.id;
    }

    /**
     * Load responsibilities data from server
     */
  }, {
    key: 'getResponsibilities',
    value: function getResponsibilities() {
      var _this2 = this;

      this.Responsibilities.get(this._getParams()).$promise.then(function (data) {
        _this2.$scope.data = data;
        _this2.$scope.permissions = _this2._getPermissions();
        _this2.$scope.isContentLoaded = true;
      }, function (error) {
        _this2.$scope.isRequestError = true;
        _this2.$scope.requestErrorMsg = _this2.ErrorService.getError(error);
        _this2.$scope.isContentLoaded = true;
      });
    }

    /**
     * Returns true if at least one section of responsibilities is available.
     */
  }, {
    key: '_isContentAvailable',
    value: function _isContentAvailable() {
      var resps = this.$scope.data.softserve_responsibilities || [],
          exp = this.$scope.data.client_experience || [],
          expect = this.$scope.data.expectations_to_client || [];

      return resps.length || exp.length || expect.length;
    }

    /**
     * Backs to parent state when we push 'Close' button
     * @private
     */
  }, {
    key: '_setParentState',
    value: function _setParentState() {
      this.$state.go(this.AppContext.getActiveTabState() || '^', this.$state.params);
    }

    /**
     * Handlers for 'Edit' button
     * @private
     */
  }, {
    key: '_editAction',
    value: function _editAction() {
      this.$state.go('charters.charter.responsibilitiesEdit', this._getParams());
    }

    /**
     * Gets permissions from PermissionsService
     * @returns {Object} - Permissions map for this module
     */
  }, {
    key: '_getPermissions',
    value: function _getPermissions() {
      var targetDetails = {
        targetId: this.getCharterId(),
        accountId: this.$scope.data.charter.attrs.internal_details.account.id,
        parentId: this.$scope.data.charter.parent_id
      };

      return {
        canEditResponsibilities: this.Permissions.can('editResponsibilities', targetDetails)
      };
    }

    /**
     * Transforms values in case of binary metric
     * @param {Object} item
     * @param {Number} value
     * @private
     */
  }, {
    key: '_getThreshold',
    value: function _getThreshold(item, value) {
      if (!item || value === null) {
        return '';
      }

      if (this._isBinaryUnit(item.unit)) {
        return value ? 'Yes' : 'No';
      }

      return value;
    }

    /**
     * Checks whether unit is 'binary'
     * @param {String} unit
     * @returns {boolean}
     * @private
     */
  }, {
    key: '_isBinaryUnit',
    value: function _isBinaryUnit(unit) {
      return unit === 'binary';
    }

    /**
     * Returns formatted unit string
     * @param {String} unit
     * @returns {String}
     * @private
     */
  }, {
    key: '_getUnit',
    value: function _getUnit(unit) {
      if (!unit) {
        return '';
      }

      return unit === '%' ? unit : '(' + unit + ')';
    }

    /**
     * Checks whether selected period has committed status
     * @private
     */
  }, {
    key: '_isCommitted',
    value: function _isCommitted() {
      return this.$scope.selectedPeriod.period ? this.$scope.selectedPeriod.period.status.toLowerCase() === 'committed' : true;
    }

    /**
     * Returns period. In case of view it is the current period(last) and
     * in case of edit - the period with id == periodId from url params
     * @param {Array} data - the list of periods
     * @returns {Object}
     * @private
     */
  }, {
    key: '_getSelectedPeriod',
    value: function _getSelectedPeriod(data) {
      if (!data.length) {
        return null;
      }

      var result = data.filter(function (item) {
        return item.is_default;
      })[0] || data[0];
      var period = this.AppContext.getCharterPeriod();
      var id = period && period.id ? period.id : +this.$state.params.periodId;

      if (id) {
        var newPeriod = data.filter(function (item) {
          return item.id === id;
        })[0];

        result = newPeriod || result;
      }

      return result;
    }

    /**
     * Returns entity and period ids
     * @returns {Object}
     * @private
     */
  }, {
    key: '_getParams',
    value: function _getParams() {
      return { id: this.getCharterId(), periodId: this.getPeriodId(), filter: this.$state.params.filter };
    }

    /**
     * Gets periods from server
     */
  }, {
    key: 'getPeriods',
    value: function getPeriods() {
      var _this3 = this;

      this.PeriodService.getPeriods(this.getCharterId()).then(function (res) {
        _this3.$scope.periods = res.data.reverse();
        _this3.$scope.selectedPeriod.period = _this3._getSelectedPeriod(_this3.$scope.periods);
      }, function (error) {
        _this3.$scope.isRequestError = true;
        _this3.$scope.requestErrorMsg = _this3.ErrorService.getError(error);
      });
    }

    /**
     * Returns id of the selected period
     * @returns {String}
     */
  }, {
    key: 'getPeriodId',
    value: function getPeriodId() {
      return this.$scope.selectedPeriod.period && this.$scope.selectedPeriod.period.id;
    }
  }]);

  return ResponsibilitiesCtrl;
})();

exports['default'] = ResponsibilitiesCtrl;
module.exports = exports['default'];

},{}],133:[function(require,module,exports){
'use strict';

/*@ngInject*/
Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var ResponsibilitiesEditCtrl = (function () {
  function ResponsibilitiesEditCtrl($scope, $state, ResponsibilitiesService, MetricRegistryService, ErrorService, $uibModal, PermissionsService, ChoiceService, $filter, PeriodService, AppContext, UrlParams) {
    var _this = this;

    _classCallCheck(this, ResponsibilitiesEditCtrl);

    if (PermissionsService.isClientRole()) {
      $state.go('charters');
    }

    this.$scope = $scope;
    this.$state = $state;
    this.$filter = $filter;
    this.$modal = $uibModal;
    this.Responsibilities = ResponsibilitiesService.getResource();
    this.ResponsibilitiesService = ResponsibilitiesService;
    this.MetricRegistryService = MetricRegistryService;
    this.Permissions = PermissionsService;
    this.ChoiceService = ChoiceService;
    this.PeriodService = PeriodService;
    this.AppContext = AppContext;
    this.ErrorService = ErrorService;

    this.$scope.respCfg = {
      ssResp: {
        name: 'softserve_responsibilities',
        fieldName: 'responsibility'
      },
      clientExp: {
        name: 'client_experience',
        fieldName: 'experience'
      },
      expToClient: {
        name: 'expectations_to_client',
        fieldName: 'expectation'
      }
    };

    this.$scope.units = [];
    this.$scope.isContentLoaded = false;
    this.$scope.periods = null;
    this.$scope.selectedPeriod = { period: null };
    this.$scope.isGetRespError = false;
    this.isRequestError = false;
    this.alreadyCommitted = false;

    this.errorMessage = {
      required: 'Required (*) fields can not be empty',
      invalidValue: 'Invalid value',
      fieldRequired: 'Required',
      invalidWeight: 'The sum of weights per section should be equal 100%',
      invalidThreshold: 'Target can not be equal to Yellow or Red Threshold',
      invalidYellowThreshold: 'Yellow threshold should be in range between red threshold and target',
      maxQuestions: 'You have reached max amount of questions on this section',
      noQuestions: 'There are no questions available',
      uniqueQuestions: 'Question has to be unique',
      zeroWeight: 'Weight can not be equal to 0',
      description: 'All changes applied to this Metric will affect previously saved data. Please check if you want description for all previous metrics to be changed. If yes, please proceed by clicking Apply Changes. Otherwise, please create a new Metric.'
    };

    this.$scope.onCancel = function () {
      return _this._onCancel();
    };
    this.$scope.onSubmit = function (form) {
      return _this._onSubmit(form);
    };
    this.$scope.addResp = function (form) {
      return _this._addResponsibility(form);
    };
    this.$scope.addQuestion = function (form) {
      return _this._addQuestion(form);
    };
    this.$scope.addExpectation = function (form) {
      return _this._addExpectation(form);
    };
    this.$scope.removeResp = function (resp, from) {
      return _this._removeResponsibility(resp, from);
    };
    this.$scope.calculateWeight = function (form, config) {
      return _this._calculateWeight(form, config);
    };
    this.$scope.isValidWeight = function (respName) {
      return _this._isValidWeight(respName);
    };
    this.$scope.isBinary = function (form, index, config) {
      return _this._isBinary(form, index, config);
    };
    this.$scope.submitted = function () {
      return _this.getSubmitted();
    };
    this.$scope.showError = function (form, index, name, config) {
      return _this._showError(form, index, name, config);
    };
    this.$scope.getErrorMessage = function (form, index, name, config) {
      return _this._getErrorMessage(form, index, name, config);
    };
    this.$scope.isError = function (form) {
      return _this._isError(form);
    };
    this.$scope.onBinaryChange = function (form, index, name, config) {
      return _this._onBinaryChange(form, index, name, config);
    };
    this.$scope.onUnitChange = function (index, config, oldItem) {
      return _this._resetThresholds(index, config, oldItem);
    };
    this.$scope.onQuestionChange = function (item) {
      return item.best = null;
    };
    this.$scope.isValue = function (value) {
      return _this._isValue(value);
    };
    this.$scope.canUserDeleteResponsibility = function (resp) {
      return _this._canUserDeleteResponsibility(resp);
    };
    this.$scope.isCommitted = function () {
      return _this._isCommitted();
    };
    this.$scope.triggerResp = function (item) {
      return item.applicable = !item.applicable;
    };
    this.$scope.isDisabled = function (item) {
      return !item.applicable && !item.isNew;
    };
    this.$scope.showTotal = function (section) {
      return _this.$scope[section] ? _this.$scope[section].totalWeight !== null : false;
    };
    this.$scope.isDescriptionChanged = function (form, index, name, config) {
      return _this._isDescriptionChanged(form, index, name, config);
    };

    // List of registered metrics
    this.$scope.registeredMetrics = null;
    this.$scope.questions = null;
    this.$scope.answers = null;
    this.$scope.loadingRegisteredMetrics = false;
    this.$scope.numberPattern = /^\d*\.?\d+$/;
    this.$scope.clientExpWarning = '';

    // Responsibilities data
    this.$scope.data = {};

    var unWatchData = this.$scope.$watch(function () {
      return _this.$scope.data;
    }, function () {
      _this._showWarning(false);
      _this.setSubmitted(false);
    }, true);

    var unWatchAnswers = this.$scope.$watch(function () {
      return {
        data: _this.$scope.data,
        answers: _this.$scope.answers
      };
    }, function () {
      return _this._bindClientExperienceData();
    }, true);

    var unWatchMetrics = this.$scope.$watch(function () {
      return {
        metrics: _this.$scope.registeredMetrics,
        questions: _this.$scope.questions
      };
    }, function (data) {
      if (data.metrics && data.questions) {
        _this.getResponsibilities();
      }
    }, true);

    var unWatchPeriod = this.$scope.$watch(function () {
      return _this.$scope.selectedPeriod.period;
    }, function (newVal) {
      if (newVal && newVal.id) {
        UrlParams.setParameter('periodId', newVal.id);
        _this.getRegisteredMetrics();
        _this.getUnits();
      }
    }, true);

    this.$scope.$on('destroy', function () {
      unWatchData();
      unWatchAnswers();
      unWatchMetrics();
      unWatchPeriod();
    });

    this.getPeriods();
    this.setSubmitted(false);
  }

  /**
   * Go to View Responsibilities when Close button is clicked
   * @private
   */

  _createClass(ResponsibilitiesEditCtrl, [{
    key: '_onCancel',
    value: function _onCancel() {
      this._goToViewResponsiblities();
    }

    /**
     * Save the form
     * @param {Object} form - form for creation
     * @private
     */
  }, {
    key: '_onSubmit',
    value: function _onSubmit(form) {
      var _this2 = this;

      if (this.getSubmitted()) {
        return null;
      }

      this.isRequestError = false;
      this.setSubmitted(true);

      if (!this.isFormValid(form)) {
        return null;
      }

      this.Responsibilities.update(this._getParams(), this._removeHiddenMetrics(), function (res) {
        return _this2._goToViewResponsiblities();
      }, function (error) {
        if (error.data && error.status === 409) {
          _this2.$scope.selectedPeriod.period.committer = error.data.field_error.committer;
          _this2.$scope.selectedPeriod.period.committed_date = error.data.field_error.committed_date;
          _this2.alreadyCommitted = true;
        }

        _this2.$scope.errorMessage = error.statusText;
        _this2.isRequestError = true;
      });
    }

    /**
     * Removes hidden metrics from data
     * @private
     */
  }, {
    key: '_removeHiddenMetrics',
    value: function _removeHiddenMetrics() {
      var cfg = this.$scope.respCfg;
      var metrics = {};

      for (var key in cfg) {
        var metricName = cfg[key].name;
        var data = this.$scope.data[metricName];

        if (data) {
          metrics[metricName] = data.filter(function (item) {
            return item.applicable || item.isNew;
          });
        }
      }

      return metrics;
    }

    /**
     * Go to View Responsiblities screen.
     * @private
     */
  }, {
    key: '_goToViewResponsiblities',
    value: function _goToViewResponsiblities() {
      this.$state.go('charters.charter.responsibilities', this._getParams());
    }

    /**
     * Returns id of current charter
     * @returns {String}
     */
  }, {
    key: 'getCharterId',
    value: function getCharterId() {
      return this.$state.params.id;
    }

    /**
     * Load responsibilities data from server
     */
  }, {
    key: 'getResponsibilities',
    value: function getResponsibilities() {
      var _this3 = this;

      var params = this._getParams();

      params.show_hidden = true;

      this.Responsibilities.get(params).$promise.then(function (data) {
        data.softserve_responsibilities = _this3.$filter('orderBy')(data.softserve_responsibilities, ['metric_area', 'metric_name', 'description']);
        data.expectations_to_client = _this3.$filter('orderBy')(data.expectations_to_client, ['metric_name', 'description']);

        _this3.$scope.data = data;
        _this3._backupData = angular.copy(data);
        _this3.$scope.permissions = _this3._getPermissions();
        _this3.$scope.isContentLoaded = true;
      }, function (error) {
        _this3.$scope.isGetRespError = true;
        _this3.$scope.errorMessage = _this3.ErrorService.getError(error);
        _this3.$scope.isContentLoaded = true;
      });
    }

    /**
     * Retrieves the list of registered metrics
     */
  }, {
    key: 'getRegisteredMetrics',
    value: function getRegisteredMetrics() {
      var _this4 = this;

      this.$scope.loadingRegisteredMetrics = true;

      this.MetricRegistryService.getRegisteredMetrics('responsibility').then(function (response) {
        return _this4.$scope.registeredMetrics = response.data;
      }, function (error) {
        return _this4.$scope.registeredMetricsError = error;
      })['finally'](function () {
        return _this4.$scope.loadingRegisteredMetrics = false;
      });

      this.MetricRegistryService.getRegisteredMetrics('experience').then(function (response) {
        _this4.$scope.answers = _this4._createAnswersHash(response.data);
        _this4.$scope.questions = response.data;
      }, function (error) {
        return _this4.$scope.questionsError = error;
      });
    }

    /**
     * Gets units from api
     */
  }, {
    key: 'getUnits',
    value: function getUnits() {
      var _this5 = this;

      this.ChoiceService.getChoices('unit').then(function (res) {
        return _this5.$scope.units = res.data;
      });
    }

    /**
     * Adds new responsibility
     * @param {Object} form
     * @private
     */
  }, {
    key: '_addResponsibility',
    value: function _addResponsibility(form) {
      this.$scope.errorMessage = this.errorMessage.required;

      this.setSubmitted(true);
      this.validateSection(form, this.$scope.respCfg.ssResp);

      if (form[this.$scope.respCfg.ssResp.name].$valid) {
        this.$scope.data.softserve_responsibilities = this.$scope.data.softserve_responsibilities || [];
        this.$scope.data.softserve_responsibilities.push(this._getEmptyResponsibility());
      }
    }

    /**
     * Adds new question
     * @param {Object} form
     * @private
     */
  }, {
    key: '_addQuestion',
    value: function _addQuestion(form) {
      if (!this.$scope.questions || !this.$scope.questions.length) {
        this._showWarning(true, this.errorMessage.noQuestions);

        return null;
      }

      if (!this.$scope.questions.length) {
        this.$scope.errorMessage = this.errorMessage.noQuestions;

        return null;
      }

      if (this.$scope.data.client_experience.length === this.$scope.questions.length) {
        this._showWarning(true, this.errorMessage.maxQuestions);

        return null;
      }

      this.$scope.errorMessage = this.errorMessage.required;

      this.setSubmitted(true);
      // Temporarely commented for future decision
      //this.validateClientExperience(form);

      if (form[this.$scope.respCfg.clientExp.name].$valid) {
        this.$scope.data.client_experience = this.$scope.data.client_experience || [];
        this.$scope.data.client_experience.push(this._getEmptyQuestion());
      }
    }

    /**
     * Adds new expectation
     * @param {Object} form
     * @private
     */
  }, {
    key: '_addExpectation',
    value: function _addExpectation(form) {
      this.$scope.errorMessage = this.errorMessage.required;

      this.setSubmitted(true);
      this.validateSection(form, this.$scope.respCfg.expToClient);

      if (form[this.$scope.respCfg.expToClient.name].$valid) {
        this.$scope.data.expectations_to_client = this.$scope.data.expectations_to_client || [];
        this.$scope.data.expectations_to_client.push(this._getEmptyExpectation());
      }
    }

    /**
     * Remove given item from given list.
     * Confirmation dialog is displayed before delete.
     * @param {Object} resp
     * @param {Array} from
     * @private
     */
  }, {
    key: '_removeResponsibility',
    value: function _removeResponsibility(resp, from) {
      var _this6 = this;

      var modalInstance = this.$modal.open({
        animation: true,
        templateUrl: 'confirm-resp-delete-modal.html',
        resolve: {
          item: function item() {
            return resp;
          }
        },
        /*@ngInject*/
        controller: ["$scope", "$uibModalInstance", "item", function controller($scope, $uibModalInstance, item) {
          $scope.item = item;
          $scope.item.metric_name = item.metric_name || _this6._findMetric(item.prototype_id).metric_name;

          $scope.ok = function () {
            $uibModalInstance.close(item);
          };

          $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
          };
        }]
      });

      modalInstance.result.then(function (item) {
        // Send a request to API only if the item has an ID, which means that the item
        // has been already saved to the database.
        if (item.id) {
          return _this6.ResponsibilitiesService.deleteResponsibility(_this6.getCharterId(), resp.id);
        }

        return item;
      }).then(function () {
        // if server delete is successful then remove the responsibility from the list
        var index = from.indexOf(resp);
        from.splice(index, 1);
      });
    }

    /**
     * Returns template responsibility object
     * @private
     */
  }, {
    key: '_getEmptyResponsibility',
    value: function _getEmptyResponsibility() {
      return {
        "id": null,
        "prototype_id": null,
        "metric_name": '',
        "metric_area": '',
        "description": '',
        "best": null,
        "yellow": null,
        "red": null,
        "unit": '',
        "weight": null,
        "isNew": true
      };
    }

    /**
     * Returns template question object
     * @private
     */
  }, {
    key: '_getEmptyQuestion',
    value: function _getEmptyQuestion() {
      return {
        "id": null,
        "prototype_id": null,
        "metric_name": '',
        "description": '',
        "best": '',
        "isNew": true
      };
    }

    /**
     * Returns template expectation object
     * @private
     */
  }, {
    key: '_getEmptyExpectation',
    value: function _getEmptyExpectation() {
      return {
        "id": null,
        "prototype_id": null,
        "metric_name": '',
        "description": '',
        "best": null,
        "yellow": null,
        "red": null,
        "unit": null,
        "weight": null,
        "isNew": true
      };
    }

    /**
     * Calculates total weight
     * @param {Object} form
     * @param {Object} config - type of responsibilities
     * @private
     */
  }, {
    key: '_calculateWeight',
    value: function _calculateWeight(form, config) {
      if (!form || !this.$scope.data[config.name]) {
        return null;
      }

      var section = form[config.name];
      var items = this.$scope.data[config.name];
      var emptyValuesCount = 0;
      var applicableCount = 0;

      var sectionName = this.$scope[config.name] = { totalWeight: 0 };

      for (var i = 0, len = items.length; i < len; i++) {
        if (!items[i].applicable && !items[i].isNew) {
          continue;
        }

        var row = section[config.fieldName + '-' + i];

        if (!row) {
          break;
        }

        var viewValue = row.weight.$viewValue;
        var weight = viewValue === null || angular.isString(viewValue) && viewValue.trim() === '' ? null : +viewValue;

        if (weight === null) {
          emptyValuesCount++;
        } else {
          sectionName.totalWeight += weight;
        }

        applicableCount++;
      }

      sectionName.totalWeight = emptyValuesCount === applicableCount ? null : sectionName.totalWeight;

      return sectionName.totalWeight;
    }

    /**
     * Checks total section's weight for validness
     * @param {String} respName - name of responsibility
     * @returns {boolean}
     * @private
     */
  }, {
    key: '_isValidWeight',
    value: function _isValidWeight(respName) {
      var data = this.$scope.data[respName];

      if (!data) {
        return true;
      }

      var notApplicable = data.filter(function (item) {
        return !item.applicable && !item.isNew;
      });

      if (!data.length || notApplicable.length === data.length) {
        return true;
      }

      if (respName === this.$scope.respCfg.expToClient.name && this.$scope[respName].totalWeight === null) {
        return true;
      }

      return this.$scope[respName].totalWeight === 100;
    }

    /**
     * Checks whether unit is 'binary'
     * @param {Object} form
     * @param {Number} index - metric's index
     * @param {Object} config - responsibility type
     * @returns {Boolean}
     * @private
     */
  }, {
    key: '_isBinary',
    value: function _isBinary(form, index, config) {
      var row = this._getRow(form, index, config);

      return row ? this._isBinaryUnit(row.unit.$modelValue) : null;
    }

    /**
     * Checks form for validity
     * @param {Object} form - charter form
     */
  }, {
    key: 'isFormValid',
    value: function isFormValid(form) {
      this.validateForm(form);

      if (!this._isValidWeight(this.$scope.respCfg.ssResp.name) || !this._isValidWeight(this.$scope.respCfg.expToClient.name)) {
        this.$scope.errorMessage = this.errorMessage.invalidWeight;
        form.$valid = false;
      }

      if (form.$error.required) {
        this.$scope.errorMessage = this.errorMessage.required;
      }

      return form && form.$valid;
    }

    /**
     * Validates form for special cases
     * @param {Object} form
     */
  }, {
    key: 'validateForm',
    value: function validateForm(form) {
      if (form) {
        this.validateSection(form, this.$scope.respCfg.ssResp);
        // Temporarely commented for future decision
        //this.validateClientExperience(form);
        this.validateSection(form, this.$scope.respCfg.expToClient);
      }
    }

    /**
     * Validates SS Responsibilities section
     * @param {Object} form
     */
  }, {
    key: 'validateSection',
    value: function validateSection(form, config) {
      var respCfg = config;

      if (!form || !this.$scope.data[respCfg.name]) {
        return null;
      }

      var section = form[respCfg.name];
      var items = this.$scope.data[respCfg.name];

      for (var i = 0, len = items.length; i < len; i++) {
        var row = section[respCfg.fieldName + '-' + i];

        if (!row) {
          continue;
        }

        var targetField = row.target;
        var yellowField = row.yellow;
        var redField = row.red;
        var weightField = row.weight;
        var target = +targetField.$modelValue;
        var yellow = +yellowField.$modelValue;
        var red = +redField.$modelValue;
        var weight = weightField.$modelValue;
        var isRed = this._isValue(redField.$modelValue);
        var isTarget = this._isValue(targetField.$modelValue);
        var isYellow = this._isValue(yellowField.$modelValue);
        var state = isTarget && isRed ? target !== red : true;

        targetField.$setValidity('threshold', state);
        yellowField.$setValidity('yellowThreshold', true);
        redField.$setValidity('threshold', state);
        weightField.$setValidity('zero_weight', items[i].applicable || items[i].isNew ? !(this._isValue(weight) && weight === 0) : true);

        if (!isTarget || this._isBinaryUnit(row.unit.$modelValue)) {
          continue;
        }

        if (!isYellow && !isRed) {
          continue;
        }

        if (!isYellow && isRed) {
          yellowField.$setValidity('yellowThreshold', true);
        } else {
          var valid = isTarget && isRed ? yellow < target && yellow > red || yellow > target && yellow < red : true;

          yellowField.$setValidity('yellowThreshold', isRed ? valid : true);
        }
      }
    }

    /**
     * Validates Client Experience section
     * @param {Object} form
     */
  }, {
    key: 'validateClientExperience',
    value: function validateClientExperience(form) {
      var respCfg = this.$scope.respCfg.clientExp;

      if (!form || !this.$scope.data[respCfg.name]) {
        return null;
      }

      var indexes = [];
      var section = form[respCfg.name];
      var items = this.$scope.data[respCfg.name];

      for (var i = 0, len = items.length; i < len; i++) {
        var row = section[respCfg.fieldName + '-' + i];

        if (!row) {
          continue;
        }

        row.prototype_id.$setValidity('question', true);

        for (var j = i + 1, len2 = items.length; j < len2; j++) {
          if (items[i].prototype_id && items[i].prototype_id === items[j].prototype_id) {
            indexes.push(j);
          }
        }
      }

      for (var i = 0, len = indexes.length; i < len; i++) {
        section[respCfg.fieldName + '-' + indexes[i]].prototype_id.$setValidity('question', false);
      }
    }

    /**
     * Setter for 'submitted' property
     * @param {Boolean} state - true|false
     */
  }, {
    key: 'setSubmitted',
    value: function setSubmitted(state) {
      this.submitted = state;
    }

    /**
     * Getter for 'submitted' property
     */
  }, {
    key: 'getSubmitted',
    value: function getSubmitted() {
      return this.submitted;
    }

    /**
     * Checks deleting permission
     * @param {Object} responsibility
     * @returns {boolean}
     * @private
     */
  }, {
    key: '_canUserDeleteResponsibility',
    value: function _canUserDeleteResponsibility(responsibility) {
      return this.$scope.permissions.canRemoveResponsibility || responsibility && responsibility.isNew;
    }

    /**
     * Checks whether we should show error message
     * @param {Object} form
     * @param {Number} index - row number
     * @param {String} name - field name
     * @param {Object} config
     * @returns {Boolean}
     * @private
     */
  }, {
    key: '_showError',
    value: function _showError(form, index, name, config) {
      if (!form || !config) {
        return null;
      }

      var field = this._getField(form, index, name, config);

      if (!field) {
        return null;
      }

      return field.$invalid;
    }

    /**
     * Returns error message
     * @param {Object} form
     * @param {Number} index - row number
     * @param {String} name - field name
     * @param {Object} config
     * @returns {String}
     * @private
     */
  }, {
    key: '_getErrorMessage',
    value: function _getErrorMessage(form, index, name, config) {
      var error = this.errorMessage;

      if (!form || !config) {
        return '';
      }

      var field = this._getField(form, index, name, config);

      if (!field) {
        return '';
      }

      if (field.$isEmpty(field.$modelValue) && field.$error.required) {
        return error.fieldRequired;
      }

      if (field.$invalid) {
        return config.name === this.$scope.respCfg.clientExp.name ? error.uniqueQuestions : error.invalidValue;
      }

      return '';
    }

    /**
     * Checks whether submitted form is invalid or has some request errors
     * It triggers invalid fields highlighting and error message showing
     * @param {Object} form
     */
  }, {
    key: '_isError',
    value: function _isError(form) {
      var threshold = form.$error.threshold;
      var yellowThreshold = form.$error.yellowThreshold;
      var zeroWeight = form.$error.zero_weight;
      var message = this.errorMessage;

      this.$scope.errorMessageExt = null;

      if (zeroWeight) {
        this.$scope.errorMessage = message.zeroWeight;
      }

      if (threshold && yellowThreshold) {
        this.$scope.errorMessage = message.invalidThreshold;
        this.$scope.errorMessageExt = message.invalidYellowThreshold;
      } else {
        if (threshold) {
          this.$scope.errorMessage = message.invalidThreshold;
        }

        if (yellowThreshold) {
          this.$scope.errorMessage = message.invalidYellowThreshold;
        }
      }

      return this.getSubmitted() && (!this._isValidWeight(this.$scope.respCfg.ssResp.name) || !this._isValidWeight(this.$scope.respCfg.expToClient.name) || threshold || yellowThreshold || zeroWeight || form.$error.required || this.isRequestError);
    }

    /**
     * Handles threshold select change event
     * @param {Object} form
     * @param {Number} index - row number
     * @param {String} name - field name
     * @param {Object} config
     * @private
     */
  }, {
    key: '_onBinaryChange',
    value: function _onBinaryChange(form, index, name, config) {
      var row = this._getRow(form, index, config);

      if (!row) {
        return null;
      }

      if (!this._isValue(row[name].$modelValue)) {
        return null;
      }

      var source = +row[name].$modelValue ^ 1;
      var model = this.$scope.data[config.name][index];

      if (name === 'red') {
        model.best = source;
      }

      if (name === 'target') {
        model.red = source;
      }
    }

    /**
     * Gets permissions from PermissionsService for needed actions
     * @returns {{canRemoveResponsibility: Boolean}} - returns boolean values for needed permissions for this module
     * @private
     */
  }, {
    key: '_getPermissions',
    value: function _getPermissions() {
      var targetDetails = {
        targetId: this.getCharterId(),
        accountId: this.$scope.data.charter.attrs.internal_details.account.id,
        parentId: this.$scope.data.charter.parent_id
      };

      return {
        canRemoveResponsibility: this.Permissions.can('removeResponsibility', targetDetails)
      };
    }

    /**
     * Resets thresholds when you change unit
     * @param {Number} index - row number
     * @param {Object} config
     * @private
     */
  }, {
    key: '_resetThresholds',
    value: function _resetThresholds(index, config, oldItemStr) {
      var model = this.$scope.data[config.name][index];
      // we have to replace whitespace characters to prevent JSON.parse() from crash
      var oldModel = JSON.parse(oldItemStr.replace(/\s/g, ' '));

      if (this._isBinaryUnit(model.unit) || this._isBinaryUnit(oldModel.unit)) {
        model.best = null;
        model.yellow = null;
        model.red = null;
      }
    }

    /**
     * Returns row with nimber === index
     * @param {Object} form
     * @param {Number} index - row number
     * @param {Object} config
     * @private
     */
  }, {
    key: '_getRow',
    value: function _getRow(form, index, config) {
      if (!form || !this.$scope.data[config.name]) {
        return null;
      }

      return form[config.name][config.fieldName + '-' + index];
    }

    /**
     * Returns field of specified row
     * @param {Object} form
     * @param {Number} index - row number
     * @param {String} name - field name
     * @param {Object} config
     * @private
     */
  }, {
    key: '_getField',
    value: function _getField(form, index, name, config) {
      var row = this._getRow(form, index, config);

      return row ? row[name] : null;
    }

    /**
     * Checks whether unit is 'binary'
     * @param {String} unit
     * @returns {boolean}
     * @private
     */
  }, {
    key: '_isBinaryUnit',
    value: function _isBinaryUnit(unit) {
      return unit === 'binary';
    }

    /**
     * Finds metric in registred metrics by id
     * @param {Number} id - metric's id
     * @private
     */
  }, {
    key: '_findMetric',
    value: function _findMetric(id) {
      var metric = this.$scope.registeredMetrics.filter(function (m) {
        return m.id === id;
      });

      return metric && metric[0] || {};
    }

    /**
     * Creates hash object, where key is metric id, value - array of possible answers
     * @param {Object} data - source data (registered metrics with type === experience)
     * @returns {Object}
     * @private
     */
  }, {
    key: '_createAnswersHash',
    value: function _createAnswersHash(data) {
      var result = {};

      if (!data) {
        return result;
      }

      for (var i = 0, len1 = data.length; i < len1; i++) {
        var id = data[i].id;

        result[id] = [];

        if (data[i].answers) {
          for (var j = 0, len2 = data[i].answers.length; j < len2; j++) {
            result[id].push({ key: j + 1, value: data[i].answers[j] });
          }
        }
      }

      return result;
    }

    /**
     * Binds object from $scope.answers to appropriate model.best
     * @private
     */
  }, {
    key: '_bindClientExperienceData',
    value: function _bindClientExperienceData() {
      var _this7 = this;

      if (!this.$scope.data.client_experience || !this.$scope.answers) {
        return null;
      }

      var clientExp = this.$scope.data.client_experience;

      var _loop = function (i, len) {
        var id = clientExp[i].prototype_id;

        if (!id) {
          return 'continue';
        }

        clientExp[i].best = _this7.$scope.answers[id].filter(function (item) {
          return clientExp[i].best ? item.key === clientExp[i].best.key : false;
        })[0];
      };

      for (var i = 0, len = clientExp.length; i < len; i++) {
        var _ret = _loop(i, len);

        if (_ret === 'continue') continue;
      }
    }

    /**
     * Shows warning message
     * @param {Boolean} state - true|false
     * @param {String} message - text of the message
     * @private
     */
  }, {
    key: '_showWarning',
    value: function _showWarning(state) {
      var message = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

      this.$scope.showWarning = state;

      if (message) {
        this.$scope.clientExpWarning = message;
      }
    }

    /**
     * Checks whether the value is not empty
     * @param {String|Number|Null|undefined} value
     * @returns {boolean}
     * @private
     */
  }, {
    key: '_isValue',
    value: function _isValue(value) {
      return value !== null && value !== '' && value !== undefined;
    }

    /**
     * Checks whether selected period has committed status
     * @private
     */
  }, {
    key: '_isCommitted',
    value: function _isCommitted() {
      if (this.alreadyCommitted) {
        return true;
      }

      return this.$scope.selectedPeriod.period ? this.$scope.selectedPeriod.period.status.toLowerCase() === 'committed' : true;
    }

    /**
     * Returns period. In case of view it is the current period(last) and
     * in case of edit - the period with id == periodId from url params
     * @param {Array} data - the list of periods
     * @returns {Object}
     * @private
     */
  }, {
    key: '_getSelectedPeriod',
    value: function _getSelectedPeriod(data) {
      if (!data.length) {
        return null;
      }

      var result = data.filter(function (item) {
        return item.is_default;
      })[0] || data[0];
      var period = this.AppContext.getCharterPeriod();
      var id = period && period.id ? period.id : +this.$state.params.periodId;

      if (id) {
        var newPeriod = data.filter(function (item) {
          return item.id === id;
        })[0];

        result = newPeriod || result;
      }

      return result;
    }

    /**
     * Returns entity and period ids
     * @returns {Object}
     * @private
     */
  }, {
    key: '_getParams',
    value: function _getParams() {
      return { id: this.getCharterId(), periodId: this.getPeriodId(), filter: this.$state.params.filter };
    }

    /**
     * Gets periods from server
     */
  }, {
    key: 'getPeriods',
    value: function getPeriods() {
      var _this8 = this;

      this.PeriodService.getPeriods(this.getCharterId()).then(function (res) {
        _this8.$scope.periods = res.data;
        _this8.$scope.selectedPeriod.period = _this8._getSelectedPeriod(res.data);
      }, function (error) {
        _this8.$scope.isGetRespError = true;
        _this8.$scope.errorMessage = _this8.ErrorService.getError(error);
      });
    }

    /**
     * Returns id of the selected period
     * @returns {String}
     */
  }, {
    key: 'getPeriodId',
    value: function getPeriodId() {
      return this.$scope.selectedPeriod.period && this.$scope.selectedPeriod.period.id;
    }

    /**
     * Checks metric description for changes and proposes some actions
     * @param {Object} form - responsibilities form
     * @param {Number} index - row index
     * @param {String} name - field name
     * @param {Object} config - metric section configuration
     * @returns {null}
     * @private
     */
  }, {
    key: '_isDescriptionChanged',
    value: function _isDescriptionChanged(form, index, name, config) {
      var _this9 = this;

      if (!form || !config) {
        return null;
      }

      var actions = ['backdrop click', 'escape key press'];
      var field = this._getField(form, index, name, config);
      var backupValue = this._getBackupValue(index, name, config);

      if (!field) {
        return null;
      }

      if (backupValue && field.$modelValue !== backupValue) {
        var modalInstance;

        (function () {
          modalInstance = _this9.$modal.open({
            animation: true,
            templateUrl: 'confirm-description.html',
            resolve: {
              data: function data() {
                return { message: _this9.errorMessage.description };
              }
            },
            /*@ngInject*/
            controller: ["$scope", "$uibModalInstance", "data", function controller($scope, $uibModalInstance, data) {
              $scope.data = data;

              $scope.ok = function (options) {
                $uibModalInstance.close(options);
              };

              $scope.cancel = function (options) {
                $uibModalInstance.dismiss(options);
              };
            }]
          });

          var section = _this9.$scope.data[config.name];
          var currentModel = section[index];
          var newModel = angular.copy(currentModel);

          modalInstance.result.then(function (options) {
            if (options && options.hide) {
              currentModel.applicable = !currentModel.applicable;
            }

            currentModel[name] = backupValue;

            newModel.isNew = true;
            newModel.can_delete = null;
            newModel.committed = null;
            newModel.id = null;

            section.push(newModel);
          }, function (options) {
            if (options && (options.revert || actions.indexOf(options) !== -1)) {
              currentModel[name] = backupValue;
            } else {
              backupValue = currentModel[name];
            }
          });
        })();
      }
    }

    /**
     * Retrieves backed up value for a field
     * @param {Number} index - row index
     * @param {String} name - field name
     * @param {Object} config - metric section configuration
     * @returns {*}
     * @private
     */
  }, {
    key: '_getBackupValue',
    value: function _getBackupValue(index, name, config) {
      if (!this._isValue(index) || !name || !config) {
        return null;
      }

      var row = this._backupData[config.name][index];

      return row ? row[name] : null;
    }
  }]);

  return ResponsibilitiesEditCtrl;
})();

exports['default'] = ResponsibilitiesEditCtrl;
module.exports = exports['default'];

},{}],134:[function(require,module,exports){
(function (global){
'use strict';

/**
 * This directives renders ui-select box for selecting metrics.
 *
 * This directive is needed because we have data format transformation and it should be handled
 * somewhere. A responsibility model has numerical prototype_id property and, unfortunatelly, ui-select
 * returns an item from lookup list. So if we have objects in the lookup list then an object will
 * be set to ng-model.
 *
 * This directive takes numerical value, searches for corresponding object in the lookup list, and sets
 * that object as ng-model of ui-select control, and vice-versa.
 *
 * Example:
 * <ad-metric-selector ng-model='resp.prototype_id', lookup-list="registeredMetrics"></ad-metric-selector>
 */

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null);

var _angular2 = _interopRequireDefault(_angular);

require('./views/metric-selector.tpl.html');

var moduleName = 'charter.responsiblities.metric-selector';

var MetricSelector = (function () {
  function MetricSelector($timeout) {
    var _this = this;

    _classCallCheck(this, MetricSelector);

    this.restrict = 'E';
    this.templateUrl = 'metric-selector.tpl.html';
    this.scope = {
      ngModel: '=ngModel',
      lookupList: '=',
      ngDisabled: '='
    };

    this.$timeout = $timeout;
    this.link = function (scope, el) {
      return _this._link(scope, el);
    };
  }

  _createClass(MetricSelector, [{
    key: '_link',
    value: function _link(scope, el) {
      var _this2 = this;

      var inputEl = el.find('input.ui-select-search');

      /**
       * If input field contains incorrect value
       */
      var isIncorrectValue = function isIncorrectValue() {
        return inputEl.val().trim() && (!scope.ngModel || scope.ngModel <= 0);
      };

      el.addClass('ad-metric-selector');

      /**
       * Intermediate model what works with typeahead
       * @type {Object}
       */
      // ui-select does not work with a simple variable on $scope - it's a known issue
      // we have to create an object with property to do it working
      scope.internalModel = { metric: null };
      scope.showNoMatches = false;

      /**
       * When ng-model is updated set internal model to the object from lookup list.
       */
      scope.$watch('ngModel', function (val) {
        return scope.internalModel.metric = _this2.getObjById(val, scope.lookupList || []);
      }, true);

      /**
       * Do the same when lookup list is updated. This could be implemented using one watcher,
       * but such approach would require a deep watch through a collection.
       */
      scope.$watchCollection('lookupList', function (val) {
        return scope.internalModel.metric = _this2.getObjById(scope.ngModel, val || []);
      }, true);

      /**
       * When internal model changes the change should be propagated outside.
       * However we just need to pass ID and not the whole internal model object.
       */
      scope.$watch('internalModel', function (val) {
        return scope.ngModel = (val.metric || {}).id;
      }, true);

      /**
       * Checks whether we should show error message
       */
      scope.showError = function () {
        return !scope.ngModel || scope.ngModel <= 0;
      };

      /**
       * Checks whether we should show error message
       */
      scope.getErrorMessage = function () {
        if (!inputEl.val().trim()) {
          return 'Required';
        }

        if (isIncorrectValue()) {
          return 'Invalid metric';
        }

        return '';
      };

      /**
       * Watches input changes to show 'no matches found'
       */
      scope.$watch(function () {
        return inputEl.val();
      }, function (newVal) {
        // We have to do timeout because the metrics list has not been filtered yet
        _this2.$timeout(function () {
          if (newVal) {
            // it's a hack to say model watcher reset submitted state
            scope.ngModel = -1 * Math.random();
          }

          scope.showNoMatches = newVal && el.find('.ui-select-choices-row').length === 0;
        }, 0);
      }, true);
    }

    /**
     * Get object from given list by given id.
     * @param {Number} id
     * @param {Array} list
     * @returns {Object}
     */
  }, {
    key: 'getObjById',
    value: function getObjById(id, list) {
      return list.filter(function (item) {
        return item.id === id;
      })[0];
    }
  }], [{
    key: 'directiveFactory',
    value: function directiveFactory($timeout) {
      return new MetricSelector($timeout);
    }
  }]);

  return MetricSelector;
})();

_angular2['default'].module(moduleName, ['ui.bootstrap', 'ngSanitize', 'ui.select']).directive('adMetricSelector', MetricSelector.directiveFactory);

exports['default'] = moduleName;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./views/metric-selector.tpl.html":135}],135:[function(require,module,exports){
(function (global){
(typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null).module('src/app/index.js').run(['$templateCache', function($templateCache){$templateCache.put('metric-selector.tpl.html','<ui-select ng-model="internalModel.metric" ng-required="true" reset-search-input="false" ng-disabled="ngDisabled"> <ui-select-match placeholder="{{ $select.search || \'Please select a metric\' }}"> {{ $select.selected.metric_area.toUpperCase() }}: {{ $select.selected.metric_name }} </ui-select-match> <ui-select-choices repeat="item in lookupList | filter:$select.search | orderBy:\'metric_name\'" class="metrics-choices"> <div class="item clearfix"> <div class="name" ng-bind-html="item.metric_name | highlight: $select.search"></div> <div class="category" title="{{ item.metric_area }}" ng-bind-html="item.metric_area | highlight: $select.search"></div> </div> </ui-select-choices> </ui-select> <div class="hidden-message responsibility-error-message" ng-show="showError()">{{ getErrorMessage() }}</div> <div class="no-matches-found" ng-show="showNoMatches">No matches found</div>')}]);
module.exports = 'metric-selector.tpl.html';
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],136:[function(require,module,exports){
(function (global){
"use strict";

/***************

 Trying to transforms $viewValue to Number, if value is not defined than returns Null.
 If value is not a number than return null and set empty string as view value.

 Possible definition:

 <input type="text" transform-to-number/>

 Import and add it to dependency

 angular.module(moduleName, [..., TransformToNumber, ...])

 ***************/

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null);

var _angular2 = _interopRequireDefault(_angular);

var moduleName = 'transform.to.number';

var TransformToNumber = (function () {
  function TransformToNumber() {
    var _this = this;

    _classCallCheck(this, TransformToNumber);

    this.restrict = 'A';
    this.require = 'ngModel';

    this.link = function (scope, el, attrs, ctrl) {
      return _this._link(scope, el, attrs, ctrl);
    };
  }

  _createClass(TransformToNumber, [{
    key: '_link',
    value: function _link(scope, el, attrs, ctrl) {
      if (ctrl) {
        ctrl.$parsers.push(function (value) {
          var val = value;

          if (_angular2['default'].isString(value)) {
            val = val.trim();
          }

          var transformed = +val;

          if (isNaN(transformed)) {
            ctrl.$setViewValue('');
            ctrl.$render();

            return null;
          }

          if (val === null || val === undefined || val === '') {
            return null;
          }

          return transformed;
        });
      }
    }
  }], [{
    key: 'directiveFactory',
    value: function directiveFactory() {
      return new TransformToNumber();
    }
  }]);

  return TransformToNumber;
})();

_angular2['default'].module(moduleName, []).directive('transformToNumber', TransformToNumber.directiveFactory);

exports['default'] = moduleName;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],137:[function(require,module,exports){
(function (global){
'use strict';

/**
 * View and edit charter's responsibilities.
 */

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null);

var _angular2 = _interopRequireDefault(_angular);

require('./views/responsibilities-view.html');

require('./views/responsibilities-edit.html');

var _servicesResponsibilititiesServiceJs = require('./services/responsibilitities.service.js');

var _servicesResponsibilititiesServiceJs2 = _interopRequireDefault(_servicesResponsibilititiesServiceJs);

var _controllersResponsibilitiesControllerJs = require('./controllers/responsibilities.controller.js');

var _controllersResponsibilitiesControllerJs2 = _interopRequireDefault(_controllersResponsibilitiesControllerJs);

var _controllersResponsibilitiesEditControllerJs = require('./controllers/responsibilities.edit.controller.js');

var _controllersResponsibilitiesEditControllerJs2 = _interopRequireDefault(_controllersResponsibilitiesEditControllerJs);

var _componentsMetricRegistryService = require('components/metric-registry-service');

var _componentsMetricRegistryService2 = _interopRequireDefault(_componentsMetricRegistryService);

var _directivesMetricSelector = require('./directives/metric-selector');

var _directivesMetricSelector2 = _interopRequireDefault(_directivesMetricSelector);

var _directivesTransformToNumber = require('./directives/transform-to-number');

var _directivesTransformToNumber2 = _interopRequireDefault(_directivesTransformToNumber);

var _componentsChoiceService = require('components/choice-service');

var _componentsChoiceService2 = _interopRequireDefault(_componentsChoiceService);

var _componentsPeriodService = require('components/period-service');

var _componentsPeriodService2 = _interopRequireDefault(_componentsPeriodService);

var _componentsUrlParamsService = require('components/url-params-service');

var _componentsUrlParamsService2 = _interopRequireDefault(_componentsUrlParamsService);

var _componentsErrorService = require('components/error-service');

var _componentsErrorService2 = _interopRequireDefault(_componentsErrorService);

var moduleName = 'abiliton.charter.responsibilities';

_angular2['default'].module(moduleName, [_servicesResponsibilititiesServiceJs2['default'], _componentsMetricRegistryService2['default'], _directivesMetricSelector2['default'], _directivesTransformToNumber2['default'], _componentsChoiceService2['default'], _componentsPeriodService2['default'], _componentsUrlParamsService2['default'], _componentsErrorService2['default'], 'ui.bootstrap', 'ui.router', 'monospaced.elastic']).controller('ResponsibilitiesCtrl', _controllersResponsibilitiesControllerJs2['default']).controller('ResponsibilitiesEditCtrl', _controllersResponsibilitiesEditControllerJs2['default']).config(function ($stateProvider) {
  $stateProvider.state('charters.charter.responsibilities', {
    url: '/responsibilities/:id?periodId',
    templateUrl: 'responsibilities-view.html',
    controller: 'ResponsibilitiesCtrl'
  }).state('charters.charter.responsibilitiesEdit', {
    data: {
      disableContext: true
    },
    url: '/edit-responsibilities/:id?periodId',
    templateUrl: 'responsibilities-edit.html',
    controller: 'ResponsibilitiesEditCtrl'
  });
});

exports['default'] = moduleName;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./controllers/responsibilities.controller.js":132,"./controllers/responsibilities.edit.controller.js":133,"./directives/metric-selector":134,"./directives/transform-to-number":136,"./services/responsibilitities.service.js":138,"./views/responsibilities-edit.html":139,"./views/responsibilities-view.html":140,"components/choice-service":18,"components/error-service":24,"components/metric-registry-service":33,"components/period-service":39,"components/url-params-service":67}],138:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null);

var _angular2 = _interopRequireDefault(_angular);

var moduleName = 'charter.responsibilities.service';

/*@ngInject*/

var ResponsibilitiesService = (function () {
  ResponsibilitiesService.$inject = ["$resource", "$http"];
  function ResponsibilitiesService($resource, $http) {
    _classCallCheck(this, ResponsibilitiesService);

    this.$resource = $resource;
    this.$http = $http;
  }

  /**
   * Get $resource instance for charter responsibilities.
   *
   * @returns {Object}
   */

  _createClass(ResponsibilitiesService, [{
    key: 'getResource',
    value: function getResource() {
      return this.$resource('/api/charter/:id/period/:periodId/responsibilities', {}, {
        update: { method: 'PUT' }
      });
    }

    /**
     * Delete given responsibility in the given charter.
     *
     * @param charterId
     * @param respId
     * @returns {Promise}
     */
  }, {
    key: 'deleteResponsibility',
    value: function deleteResponsibility(charterId, respId) {
      return this.$http['delete']('/api/charter/' + charterId + '/responsibilities/' + respId);
    }
  }]);

  return ResponsibilitiesService;
})();

_angular2['default'].module(moduleName, []).service('ResponsibilitiesService', ResponsibilitiesService);

exports['default'] = moduleName;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],139:[function(require,module,exports){
(function (global){
(typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null).module('src/app/index.js').run(['$templateCache', function($templateCache){$templateCache.put('responsibilities-edit.html','<div class="panel-wrapper overbackdrop"> <div class="ad-tab ad-tab-large o-hid"> <ul class="nav nav-tabs" role="tablist"> <li class="active"> <a href="">Responsibilities</a> </li> <div class="f-right nav-tabs-controls"> <a href="" ng-if="!isCommitted() && !isGetRespError" ng-click="onSubmit(respsForm)">SAVE</a> <a href="" ng-click="onCancel()"> CANCEL <span class="icon icon-remove-white"></span> </a> </div> </ul> <div class="tab-content charter-resps charter-resps-edit" min-height> <loading-indicator ng-if="!isContentLoaded && !isGetRespError" indicator-size="16px" max-width="120px" display-center="true"></loading-indicator> <form name="respsForm" autocomplete="off" novalidate ng-class="{ \'submitted\': submitted() }" ng-show="isContentLoaded && !isGetRespError"> <div ng-if="!isCommitted()"> <div class="error-message-wrapper" ng-show="isError(respsForm)"> <span class="general-error-message">{{ errorMessage }}.</span> <br> <span class="general-error-message" ng-if="errorMessageExt">{{ errorMessageExt }}.</span> </div> <div class="table-row row period-selector text-right"> <div class="col-xs-12"> <label>Period:&nbsp; <span class="period-name"> <strong>{{ selectedPeriod.period.name }}</strong> </span> </label> </div> </div> <section ng-form="{{ respCfg.ssResp.name }}"> <h2> SoftServe Responsibilities <span ng-show="data[respCfg.ssResp.name].length" class="count"> {{ data[respCfg.ssResp.name].length }} </span> </h2> <div ng-if="data[respCfg.ssResp.name].length" class="view-resps-table"> <div class="table-header row"> <div class="col-xs-3">Metric</div> <div class="col-xs-4">Description (500 chars max)</div> <div class="col-xs-1 text-center">Unit</div> <div class="col-xs-1 text-center">Target</div> <div class="col-xs-2 text-center">Thresholds</div> <div class="col-xs-1">Weight</div> <div class="divider"></div> </div> <div ng-repeat="item in data[respCfg.ssResp.name]" ng-form="{{ respCfg.ssResp.fieldName }}-{{ $index }}" class="table-row row" ng-mouseenter="showActionButton = true" ng-mouseleave="showActionButton = false"> <div class="col-xs-3"> <ad-metric-selector ng-model="item.prototype_id" ng-disabled="isDisabled(item) || item.committed" lookup-list="registeredMetrics"></ad-metric-selector> </div> <div class="col-xs-4">{{ item.showActionButton }} <textarea name="description" maxlength="500" ng-model="item.description" ng-required="!isDisabled(item)" ng-disabled="isDisabled(item)" ng-blur="!item.can_delete && isDescriptionChanged(respsForm, $index, \'description\', respCfg.ssResp)" rows="1" msd-elastic>                 </textarea> <div class="hidden-message responsibility-error-message" ng-show="showError(respsForm, $index, \'description\', respCfg.ssResp)"> {{ getErrorMessage(respsForm, $index, \'description\', respCfg.ssResp) }} </div> </div> <div class="col-xs-1"> <select name="unit" ng-model="item.unit" ng-change="onUnitChange($index, respCfg.ssResp, \'{{ item }}\')" ng-disabled="isDisabled(item) || item.committed" ng-required="true"> <option ng-repeat="unit in units">{{ unit.value }}</option> </select> <div class="hidden-message responsibility-error-message" ng-show="showError(respsForm, $index, \'unit\', respCfg.ssResp)"> {{ getErrorMessage(respsForm, $index, \'unit\', respCfg.ssResp) }} </div> </div> <div class="col-xs-1"> <input name="target" type="text" class="target" ng-if="!isBinary(respsForm, $index, respCfg.ssResp)" ng-required="!isDisabled(item)" ng-pattern="numberPattern" ng-disabled="isDisabled(item)" ng-model="item.best" transform-to-number> <select name="target" class="target" ng-if="isBinary(respsForm, $index, respCfg.ssResp)" ng-change="onBinaryChange(respsForm, $index, \'target\', respCfg.ssResp)" ng-disabled="isDisabled(item)" ng-model="item.best" ng-required="!isDisabled(item)" transform-to-number> <option value="1">Yes</option> <option value="0">No</option> </select> <div class="hidden-message responsibility-error-message" ng-show="showError(respsForm, $index, \'target\', respCfg.ssResp)"> {{ getErrorMessage(respsForm, $index, \'target\', respCfg.ssResp) }} </div> </div> <div class="col-xs-2"> <span class="thr"> <span class="yellow"> <input name="yellow" type="text" ng-disabled="isBinary(respsForm, $index, respCfg.ssResp) || isDisabled(item)" ng-model="item.yellow" ng-pattern="numberPattern" transform-to-number> <div class="hidden-message responsibility-error-message" ng-show="showError(respsForm, $index, \'yellow\', respCfg.ssResp)"> {{ getErrorMessage(respsForm, $index, \'yellow\', respCfg.ssResp) }} </div> </span> <span class="red" ng-if="!isBinary(respsForm, $index, respCfg.ssResp)"> <input name="red" type="text" ng-model="item.red" ng-required="!isDisabled(item) && isValue(item.yellow)" ng-disabled="isDisabled(item)" ng-pattern="numberPattern" transform-to-number> <div class="hidden-message responsibility-error-message" ng-show="showError(respsForm, $index, \'red\', respCfg.ssResp)"> {{ getErrorMessage(respsForm, $index, \'red\', respCfg.ssResp) }} </div> </span> <span class="red" ng-if="isBinary(respsForm, $index, respCfg.ssResp)"> <select name="red" class="red" ng-if="isBinary(respsForm, $index, respCfg.ssResp)" ng-change="onBinaryChange(respsForm, $index, \'red\', respCfg.ssResp)" ng-disabled="isDisabled(item)" ng-model="item.red" transform-to-number> <option value="1">Yes</option> <option value="0">No</option> </select> <div class="hidden-message responsibility-error-message" ng-show="showError(respsForm, $index, \'red\', respCfg.ssResp)"> {{ getErrorMessage(respsForm, $index, \'red\', respCfg.ssResp) }} </div> </span> </span> </div> <div class="col-xs-1"> <span class="weight"> <input name="weight" type="text" maxlength="3" ng-model="item.weight" ng-required="!isDisabled(item)" ng-disabled="isDisabled(item)" transform-to-number> <div class="hidden-message responsibility-error-message" ng-show="showError(respsForm, $index, \'weight\', respCfg.ssResp)"> {{ getErrorMessage(respsForm, $index, \'weight\', respCfg.ssResp) }} </div> </span> <a ng-if="canUserDeleteResponsibility(item) && (item.isNew || item.can_delete)" href="" ng-click="removeResp(item, data[respCfg.ssResp.name])" ng-show="showActionButton" class="remove-resp pull-right"> <span class="icon icon-remove"></span> </a> <a ng-if="canUserDeleteResponsibility(item) && !item.isNew && !item.can_delete" href="" ng-click="triggerResp(item)" ng-show="showActionButton" class="remove-resp pull-right"> <span class="icon ng-class:{ \'icon-start\': !item.applicable, \'icon-pause\': item.applicable }"></span> </a> </div> </div> </div> <div class="table-row row"> <div class="col-xs-2"> <a href="" ng-click="addResp(respsForm)">Add responsibility</a> </div> <div class="col-xs-8"></div> <div class="col-xs-2"> <span class="total-weight-container" ng-show="data[respCfg.ssResp.name].length"> Total: <span class="total-weight-value" ng-show="showTotal(respCfg.ssResp.name)" ng-class="{ \'invalid-weight\': !isValidWeight(respCfg.ssResp.name) }"> {{ calculateWeight(respsForm, respCfg.ssResp) }}% </span> </span> </div> </div> </section> <!--Temporarely hidden for future decision--> <section ng-if="false" ng-form="{{ respCfg.clientExp.name }}"> <h2> Client Experience <span ng-show="data.client_experience.length" class="count"> {{ data.client_experience.length }} </span> </h2> <div ng-if="data[respCfg.clientExp.name].length" class="view-resps-table"> <div class="table-header row"> <div class="col-xs-6">Question</div> <div class="col-xs-6">Target</div> <div class="divider"></div> </div> <div ng-repeat="item in data[respCfg.clientExp.name]" ng-form="{{ respCfg.clientExp.fieldName }}-{{ $index }}" class="table-row row"> <div class="col-xs-6"> <select name="prototype_id" ng-model="item.prototype_id" ng-required="true" ng-change="onQuestionChange(item)" ng-options="question.id as question.metric_name for question in questions | orderBy:\'metric_name\'"> </select> <div class="hidden-message responsibility-error-message" ng-show="showError(respsForm, $index, \'prototype_id\', respCfg.clientExp)"> {{ getErrorMessage(respsForm, $index, \'prototype_id\', respCfg.clientExp) }} </div> </div> <div class="col-xs-6"> <span class="question-target"> <select name="best" ng-model="item.best" ng-required="true" ng-options="answer as answer.value for answer in answers[item.prototype_id] | orderBy:\'value\'"> </select> <div class="hidden-message responsibility-error-message" ng-show="showError(respsForm, $index, \'best\', respCfg.clientExp)"> {{ getErrorMessage(respsForm, $index, \'best\', respCfg.clientExp) }} </div> </span> <a href="" ng-if="canUserDeleteResponsibility(item)" ng-click="removeResp(item, data[respCfg.clientExp.name])" class="remove-resp pull-right"> <span class="icon icon-remove"></span> </a> </div> </div> </div> <div class="table-row row"> <div class="col-xs-2"> <a href="" ng-click="addQuestion(respsForm)">Add question</a> </div> <div class="col-xs-8 warning-container"> <div class="error-message" ng-show="showWarning"> {{ clientExpWarning }} </div> </div> </div> </section> <section ng-form="{{ respCfg.expToClient.name }}"> <h2> Expectations to Client <span ng-show="data[respCfg.expToClient.name].length" class="count"> {{ data[respCfg.expToClient.name].length }} </span> </h2> <div ng-if="data[respCfg.expToClient.name].length" class="view-resps-table"> <div class="table-header row"> <div class="col-xs-3">Expectation (80 chars max)</div> <div class="col-xs-4">Description (500 chars max)</div> <div class="col-xs-1 text-center">Unit</div> <div class="col-xs-1 text-center">Target</div> <div class="col-xs-2 text-center">Thresholds</div> <div class="col-xs-1">Weight</div> <div class="divider"></div> </div> <div ng-repeat="item in data[respCfg.expToClient.name]" ng-form="{{ respCfg.expToClient.fieldName }}-{{ $index }}" ng-mouseenter="showActionButton = true" ng-mouseleave="showActionButton = false" class="table-row row"> <div class="col-xs-3"> <textarea name="expectation" maxlength="80" ng-model="item.metric_name" ng-required="!isDisabled(item)" ng-disabled="isDisabled(item)" rows="1" msd-elastic>                   </textarea> <div class="hidden-message responsibility-error-message" ng-show="showError(respsForm, $index, \'expectation\', respCfg.expToClient)"> {{ getErrorMessage(respsForm, $index, \'expectation\', respCfg.expToClient) }} </div> </div> <div class="col-xs-4"> <textarea name="description" maxlength="500" ng-model="item.description" ng-required="!isDisabled(item)" ng-disabled="isDisabled(item)" ng-blur="!item.can_delete && isDescriptionChanged(respsForm, $index, \'description\', respCfg.expToClient)" rows="1" msd-elastic>                   </textarea> <div class="hidden-message responsibility-error-message" ng-show="showError(respsForm, $index, \'description\', respCfg.expToClient)"> {{ getErrorMessage(respsForm, $index, \'description\', respCfg.expToClient) }} </div> </div> <div class="col-xs-1"> <select name="unit" ng-model="item.unit" ng-required="!isDisabled(item) && isValue(item.best)" ng-disabled="isDisabled(item) || item.committed" ng-change="onUnitChange($index, respCfg.expToClient, \'{{ item }}\')"> <option ng-repeat="unit in units">{{ unit.value }}</option> </select> <div class="hidden-message responsibility-error-message" ng-show="showError(respsForm, $index, \'unit\', respCfg.expToClient)"> {{ getErrorMessage(respsForm, $index, \'unit\', respCfg.expToClient) }} </div> </div> <div class="col-xs-1"> <input name="target" type="text" class="target" ng-if="!isBinary(respsForm, $index, respCfg.expToClient)" ng-pattern="numberPattern" ng-required="!isDisabled(item) && (isValue(item.yellow) || isValue(item.red))" ng-disabled="isDisabled(item)" ng-model="item.best" transform-to-number> <select name="target" class="target" ng-if="isBinary(respsForm, $index, respCfg.expToClient)" ng-change="onBinaryChange(respsForm, $index, \'target\', respCfg.expToClient)" ng-disabled="isDisabled(item)" ng-model="item.best" transform-to-number> <option value="1">Yes</option> <option value="0">No</option> </select> <div class="hidden-message responsibility-error-message" ng-show="showError(respsForm, $index, \'target\', respCfg.expToClient)"> {{ getErrorMessage(respsForm, $index, \'target\', respCfg.expToClient) }} </div> </div> <div class="col-xs-2"> <span class="thr"> <span class="yellow"> <input name="yellow" type="text" ng-disabled="isBinary(respsForm, $index, respCfg.expToClient) || isDisabled(item)" ng-model="item.yellow" ng-pattern="numberPattern" transform-to-number> <div class="hidden-message responsibility-error-message" ng-show="showError(respsForm, $index, \'yellow\', respCfg.expToClient)"> {{ getErrorMessage(respsForm, $index, \'yellow\', respCfg.expToClient) }} </div> </span> <span class="red" ng-if="!isBinary(respsForm, $index, respCfg.expToClient)"> <input name="red" type="text" ng-model="item.red" ng-required="!isDisabled(item) && isValue(item.yellow)" ng-disabled="isDisabled(item)" ng-pattern="numberPattern" transform-to-number> <div class="hidden-message responsibility-error-message" ng-show="showError(respsForm, $index, \'red\', respCfg.expToClient)"> {{ getErrorMessage(respsForm, $index, \'red\', respCfg.expToClient) }} </div> </span> <span class="red" ng-if="isBinary(respsForm, $index, respCfg.expToClient)"> <select name="red" class="red" ng-if="isBinary(respsForm, $index, respCfg.expToClient)" ng-change="onBinaryChange(respsForm, $index, \'red\', respCfg.expToClient)" ng-disabled="isDisabled(item)" ng-model="item.red" transform-to-number> <option value="1">Yes</option> <option value="0">No</option> </select> <div class="hidden-message responsibility-error-message" ng-show="showError(respsForm, $index, \'red\', respCfg.expToClient)"> {{ getErrorMessage(respsForm, $index, \'red\', respCfg.expToClient) }} </div> </span> </span> </div> <div class="col-xs-1"> <span class="weight"> <input name="weight" type="text" maxlength="3" ng-required="!isDisabled(item) && isValue(item.best)" ng-model="item.weight" ng-disabled="isDisabled(item)" transform-to-number> <div class="hidden-message responsibility-error-message" ng-show="showError(respsForm, $index, \'weight\', respCfg.expToClient)"> {{ getErrorMessage(respsForm, $index, \'weight\', respCfg.expToClient) }} </div> </span> <a ng-if="canUserDeleteResponsibility(item) && (item.isNew || item.can_delete)" href="" ng-click="removeResp(item, data[respCfg.expToClient.name])" ng-show="showActionButton" class="remove-resp pull-right"> <span class="icon icon-remove"></span> </a> <a ng-if="canUserDeleteResponsibility(item) && !item.isNew && !item.can_delete" href="" ng-click="triggerResp(item)" ng-show="showActionButton" class="remove-resp pull-right"> <span class="icon ng-class:{ \'icon-start\': !item.applicable, \'icon-pause\': item.applicable }"></span> </a> </div> </div> </div> <div class="table-row row"> <div class="col-xs-2"> <a href="" ng-click="addExpectation(respsForm)">Add expectation</a> </div> <div class="col-xs-8"></div> <div class="col-xs-2"> <span class="total-weight-container" ng-show="data[respCfg.expToClient.name].length"> Total: <span class="total-weight-value" ng-show="showTotal(respCfg.expToClient.name)" ng-class="{ \'invalid-weight\': !isValidWeight(respCfg.expToClient.name) }"> {{ calculateWeight(respsForm, respCfg.expToClient) }}% </span> </span> </div> </div> </section> </div> <div ng-if="isCommitted()" class="charters-summary"> <span class="summary-icon"></span> <div class="charter-message"> <div class="title">This period\'s data has already been committed by:</div> <div class="message"> {{ selectedPeriod.period.committer }} ({{ selectedPeriod.period.committed_date | date:\'MMM d, y h:mm a\' }}) </div> </div> </div> </form> <div ng-if="isGetRespError" class="charters-summary"> <span class="summary-icon"></span> <div class="charter-message"> <div class="title">{{ errorMessage }}</div> </div> </div> </div> </div> </div> <script type="text/ng-template" id="confirm-resp-delete-modal.html"><div class="modal-header">     <h3 class="modal-title">Confirm delete</h3>   </div>   <div class="modal-body">     <p>Do you really want to delete <strong>{{ item.metric_name || \'\' }}</strong>?</p>   </div>   <div class="modal-footer">     <button class="btn btn-primary" type="button" ng-click="ok()">OK</button>     <button class="btn btn-default" type="button" ng-click="cancel()">Cancel</button>   </div></script> <script type="text/ng-template" id="confirm-description.html"><div class="charter-modal">     <div class="modal-header">       <span class="modal-icon ch-glyphicon glyphicon-alert"></span>       <h3 class="modal-title">Warning!</h3>       <button type="button" class="close" ng-click="cancel({ revert: true })">         <span aria-hidden="true">&times;</span></button>     </div>      <div class="modal-body">       <p>{{ data.message }}</p>     </div>      <div class="modal-footer ta-center">       <button class="btn btn-primary" type="button" ng-click="ok({ hide: true })">Create New Metric & Hide Old</button>       <button class="btn btn-default" type="button" ng-click="ok()">Create New Metric & Keep Both</button>       <button class="btn btn-default" type="button" ng-click="cancel()">Apply Changes</button>     </div>   </div></script>')}]);
module.exports = 'responsibilities-edit.html';
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],140:[function(require,module,exports){
(function (global){
(typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null).module('src/app/index.js').run(['$templateCache', function($templateCache){$templateCache.put('responsibilities-view.html','<div class="panel-wrapper overbackdrop"> <div class="ad-tab ad-tab-large o-hid"> <ul class="nav nav-tabs" role="tablist"> <li class=""> <a ng-click="goToBusinessCase()" href="">Business Case</a> </li> <li class="active"> <a href="">Responsibilities</a> </li> <li> <a ng-click="goToCommit()" href="">Commit</a> </li> <div class="f-right nav-tabs-controls"> <a ng-if="permissions.canEditResponsibilities && !isRequestError" href="" ng-click="editAction()">EDIT</a> <a href="" ng-click="setParentState()"> CLOSE <span class="icon icon-remove-white"></span> </a> </div> </ul> <div class="tab-content charter-resps" min-height> <loading-indicator ng-if="!isContentLoaded && !isRequestError" indicator-size="16px" max-width="120px" display-center="true"></loading-indicator> <div ng-if="isContentLoaded && periods.length && !isRequestError" class="table-row row period-selector"> <div class="col-xs-8 text-right"> <div class="committed-by" ng-if="isCommitted()"> <label>Committed by:</label> {{ selectedPeriod.period.committer }} ({{ selectedPeriod.period.committed_date | date:\'MMM d, y h:mm a\' }}) </div> </div> <div class="col-xs-1 text-right"><label>Period</label></div> <div class="col-xs-3 ad-metric-selector"> <ui-select ng-model="selectedPeriod.period" search-enabled="true"> <ui-select-match>{{ $select.selected.name }}</ui-select-match> <ui-select-choices repeat="item in periods | filter:$select.search"> <div class="item-fullwidth clearfix"> <div class="name" ng-bind-html="item.name | highlight: $select.search"></div> <span class="ch-glyphicon glyphicon-ok committed-mark" ng-class="{ \'committed-mark-inverse\': item.id === selectedPeriod.period.id }" ng-if="item.status === \'committed\'"></span> </div> </ui-select-choices> </ui-select> </div> </div> <div ng-if="!isRequestError && isContentAvailable() && isContentLoaded && periods.length"> <section ng-if="data.softserve_responsibilities.length"> <h2>SoftServe Responsibilities <span class="count" ng-if="data.softserve_responsibilities.length > 1"> {{ data.softserve_responsibilities.length }} </span> </h2> <div class="view-resps-table"> <div class="table-header row"> <div class="col-xs-7">Area / Metric / Description</div> <div class="col-xs-2">Target</div> <div class="col-xs-2 text-center">Thresholds</div> <div class="col-xs-1 text-right">Weight</div> <div class="divider"></div> </div> <div ng-repeat="item in data.softserve_responsibilities |               orderBy:[\'metric_area\', \'metric_name\', \'description\']" class="table-row row"> <div class="col-xs-7"> <span class="category">{{ item.metric_area }}</span> <span class="name">{{ item.metric_name }}</span> <p class="description">{{ item.description }}</p> </div> <div class="col-xs-2"> <span class="target"> <span class="value">{{ getThreshold(item, item.best) }}</span> <span class="unit">{{ getUnit(item.unit) }}</span> </span> </div> <div class="col-xs-2 text-center" ng-if="!isBinaryUnit(item.unit) && !isNull(item.yellow)"> <span class="col-xs-6 yellow">{{ item.yellow }}</span> <span class="col-xs-6 red">{{ getThreshold(item, item.red) }}</span> </div> <div class="col-xs-2 text-center" ng-if="isBinaryUnit(item.unit) || isNull(item.yellow)"> <span class="col-xs-12 red">{{ getThreshold(item, item.red) }}</span> </div> <div class="col-xs-1 text-right"> <span class="weight">{{ item.weight }}%</span> </div> <div class="divider"></div> </div> </div> </section> <!--Temporarely hidden for future decision--> <section ng-if="false && data.client_experience.length"> <h2>Client Experience <span class="count" ng-if="data.client_experience.length > 1"> {{ data.client_experience.length }} </span> </h2> <div class="view-resps-table"> <div class="table-header row"> <div class="col-xs-7">Question</div> <div class="col-xs-5">Target</div> <div class="divider"></div> </div> <div ng-repeat="item in data.client_experience" class="table-row row"> <div class="col-xs-7"> <span class="name">{{ item.metric_name }}</span> <p class="description">{{ item.description }}</p> </div> <div class="col-xs-5"> <span class="target">{{ item.best.value }}</span> </div> <div class="divider"></div> </div> </div> </section> <section ng-if="data.expectations_to_client.length"> <h2>Expectations to Client <span class="count" ng-if="data.expectations_to_client.length > 1"> {{ data.expectations_to_client.length }} </span> </h2> <div class="view-resps-table"> <div class="table-header row"> <div class="col-xs-7">Expectation / Description</div> <div class="col-xs-2">Target</div> <div class="col-xs-2 text-center">Thresholds</div> <div class="col-xs-1 text-right">Weight</div> <div class="divider"></div> </div> <div ng-repeat="item in data.expectations_to_client | orderBy:[\'metric_name\', \'description\']" class="table-row row"> <div class="col-xs-7"> <span class="name">{{ item.metric_name }}</span> <p class="description">{{ item.description }}</p> </div> <div class="col-xs-2"> <span class="target"> <span class="value">{{ getThreshold(item, item.best) }}</span> <span class="unit">{{ getUnit(item.unit) }}</span> </span> </div> <div class="col-xs-2 text-center" ng-if="!isBinaryUnit(item.unit) && !isNull(item.yellow)"> <span class="col-xs-6 yellow">{{ item.yellow }}</span> <span class="col-xs-6 red">{{ getThreshold(item, item.red) }}</span> </div> <div class="col-xs-2 text-center" ng-if="isBinaryUnit(item.unit) || isNull(item.yellow)"> <span class="col-xs-12 red">{{ getThreshold(item, item.red) }}</span> </div> <div class="col-xs-1 text-right"> <span class="weight" ng-if="item.weight !== null">{{ item.weight }}%</span> </div> <div class="divider"></div> </div> </div> </section> </div> <div class="c-both"></div> <div ng-if="!isContentAvailable() && isContentLoaded && periods.length && !isRequestError" class="charters-summary"> <span class="summary-icon"></span> <div class="charter-message"> <div class="title">This section is empty</div> <div class="message" ng-if="permissions.canEditResponsibilities"> Go to <a href="" ng-click="editAction()">edit mode</a> to add something </div> </div> </div> <div ng-if="isContentLoaded && !periods.length && !isRequestError" class="charters-summary"> <span class="summary-icon"></span> <div class="charter-message"> <div class="title">There are no periods generated for your charter yet</div> <div class="message" ng-if="permissions.canEditResponsibilities"> Please <a href="">contact</a> administrator to create new period </div> </div> </div> <div ng-if="isRequestError" class="charters-summary"> <span class="summary-icon"></span> <div class="charter-message"> <div class="title">{{ requestErrorMsg }}</div> </div> </div> </div> </div> </div>')}]);
module.exports = 'responsibilities-view.html';
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],141:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var maxHierarchyRootNodesToApplyAllFilter = 10;

/*@ngInject*/

var BaseHierarchyController = (function () {
  BaseHierarchyController.$inject = ["$scope", "$state", "HierarchyService", "AppContext", "PermissionsService", "UrlParams"];
  function BaseHierarchyController($scope, $state, HierarchyService, AppContext, PermissionsService, UrlParams) {
    var _this = this;

    _classCallCheck(this, BaseHierarchyController);

    this.$scope = $scope;
    this.$state = $state;
    this.AppContext = AppContext;
    this.Permissions = PermissionsService;

    this.nodeType = {
      account: 'account',
      unassigned: 'unassigned',
      segment: 'segment',
      line: 'line',
      charter: 'charter'
    };

    $scope.activeFilter = null;
    $scope.isPresentHierarchyLoader = true;

    // Gets alphabet filters
    HierarchyService.getBusinessHierarchyFilters().then(function (res) {
      var filters = res.data;
      var sumOfNodes = 0;
      var activeFilter = null;

      _this.$scope.filters = filters;

      var storedFilter = UrlParams.getParameter('filter');

      if (!storedFilter) {
        for (var key in filters) {
          if (filters.hasOwnProperty(key)) {
            var val = filters[key];

            if (!activeFilter && val) {
              activeFilter = key;
            }

            sumOfNodes += filters[key];
          }
        }

        if (sumOfNodes <= maxHierarchyRootNodesToApplyAllFilter) {
          activeFilter = null;
        }

        _this.$scope.activeFilter = activeFilter ? activeFilter : 'All';
      } else {
        _this.$scope.activeFilter = storedFilter;
        activeFilter = storedFilter === 'All' ? null : storedFilter;
      }

      UrlParams.setParameter('filter', _this.$scope.activeFilter);
      _this.getBusinessHierarchyData(HierarchyService, activeFilter);
    });

    /**
     * Go to parent state when hierarchy view is closed.
     * This may need changes as parent view isn't always appropriate. Let's return to this after UX testing.
     */
    $scope.close = function (e) {
      e.preventDefault();
      $state.go('^');
    };

    /**
     * Collapse/expand a tree node.
     *
     * @param {Object} scope Scope exposed by ui-tree-node
     */
    $scope.toggleCollapse = function (scope) {
      // We need to expand/collapse all child nodes. No need of recursion because we have only one level so far.
      scope.$childNodesScope.childNodes().forEach(function (item) {
        if (scope.collapsed) {
          item.expand();
        } else {
          item.collapse();
        }
      });

      scope.toggle();
    };

    /**
     * Only accounts should be collapsible.
     *
     * @param {Object} node
     */
    $scope.isCollapsible = function (node) {
      return _this.isAccount(node);
    };

    /**
     * If account node is a terminal node then it doesn't have children.
     * Such node should be disabled on UI
     *
     * @param {Object} node
     * @returns {boolean}
     */
    $scope.isDisabled = function (node) {
      return _this.isDisabled(node);
    };

    /**
     * Checks whether user has access to accounts and/or charters
     * @returns {Boolean}
     */
    $scope.isDataAvailable = function () {
      return _this.$scope.hierarchyData && Object.keys(_this.$scope.hierarchyData).length;
    };

    /**
     * Shows status of data fetching
     * @returns {Boolean}
     * @private
     */
    $scope.isDataFetched = function () {
      return _this.hierarchyDataPromise && _this.hierarchyDataPromise.$$state.status === 1;
    };

    $scope.isAccount = function (node) {
      return _this.isAccount(node);
    };
    $scope.isUnassigned = function (node) {
      return _this.isUnassigned(node);
    };
    $scope.isCharter = function (node) {
      return _this.isCharter(node);
    };
    $scope.isSegment = function (node) {
      return _this.isSegment(node);
    };
    $scope.isLine = function (node) {
      return _this.isLine(node);
    };
    $scope.isFilterActive = function (filter) {
      return $scope.activeFilter === filter;
    };

    /**
     * Apply hierarchy filter
     * @param {String} filter
     */
    $scope.applyFilter = function (filter) {
      if ($scope.activeFilter === filter) {
        return null;
      }

      _this.$scope.isPresentHierarchyLoader = true;
      _this.$scope.activeFilter = filter;
      _this.hierarchyDataPromise = null;

      UrlParams.setParameter('filter', filter);
      _this.getBusinessHierarchyData(HierarchyService, filter !== 'All' ? filter : null);
    };
  }

  /**
   * Returns the accounts structure with there businesses and unassigned charters by filter.
   * @param {String} filter
   */

  _createClass(BaseHierarchyController, [{
    key: 'getBusinessHierarchyData',
    value: function getBusinessHierarchyData(hierarchyService, filter) {
      var _this2 = this;

      // This promise acts as a asynchronous cache of data that we receive from server.
      this.hierarchyDataPromise = hierarchyService.getBusinessHierarchyData(filter).then(function (response) {
        _this2.$scope.isPresentHierarchyLoader = false;
        return response.data || [];
      }, function () {
        return _this2.$scope.isPresentHierarchyLoader = false;
      });
    }

    /**
     * If account node is a terminal node then it doesn't have children.
     * Such node should be disabled on UI
     *
     * @param {Object} node
     * @returns {boolean}
     */
  }, {
    key: 'isDisabled',
    value: function isDisabled(node) {
      var isAccount = this.isAccount(node);
      var isUnassigned = this.isUnassigned(node);

      if (!isAccount && !isUnassigned && !this.canView(node)) {
        return true;
      }

      if (isAccount) {
        return !node.selectionInfo.total || !node.children.length;
      }

      if (isUnassigned) {
        return this.isFullyDisabled(node);
      }

      return (this.isSegment(node) || this.isLine(node)) && !this.hasOwner(node);
    }

    /**
     * Account nodes are a bit special that's why we have know that a particular node has type 'account'
     * For example, only account node is collapsible, only account node should propagate checkbox action
     * to its descendants.
     *
     * @param node
     * @returns {boolean}
     */
  }, {
    key: 'isAccount',
    value: function isAccount(node) {
      return node.type === this.nodeType.account;
    }

    /**
     * Checks whether the node has type 'unassigned'. Special node which contains
     * unassigned charters.
     * @param {Object} node
     * @returns {boolean}
     */
  }, {
    key: 'isUnassigned',
    value: function isUnassigned(node) {
      return node.type === this.nodeType.unassigned;
    }

    /**
     * Checks whether the node has type 'charter'. We can not create charter for such type of the node.
     * @param {Object} node
     * @returns {boolean}
     */
  }, {
    key: 'isCharter',
    value: function isCharter(node) {
      return node.type === this.nodeType.charter;
    }

    /**
     * Checks whether the node has type 'segment'
     * @param {Object} node
     * @returns {boolean}
     */
  }, {
    key: 'isSegment',
    value: function isSegment(node) {
      return node.type === this.nodeType.segment;
    }

    /**
     * Checks whether the node has type 'line'
     * @param {Object} node
     * @returns {boolean}
     */
  }, {
    key: 'isLine',
    value: function isLine(node) {
      return node.type === this.nodeType.line;
    }

    /**
     * Check whether item has owner
     * @param {Object} item
     * @returns {Boolean}
     */
  }, {
    key: 'hasOwner',
    value: function hasOwner(item) {
      return !!(item.owner && item.owner.id);
    }

    /**
     * Checks if we can view item
     * @param {Object} node
     * @returns {Boolean}
     */
  }, {
    key: 'canView',
    value: function canView(node) {
      if (this.isCharter(node)) {
        return node.can_view;
      }

      return !!(node.owner && node.owner.can_view);
    }

    /**
     * Checks whether unassigned node's children are disabled
     * @param {Object} node
     * @returns {Boolean}
     */
  }, {
    key: 'isFullyDisabled',
    value: function isFullyDisabled(node) {
      var children = node.children;

      return children.filter(function (child) {
        return !child.can_view;
      }).length === children.length;
    }

    /**
     * Returns root for selected node
     * @param node
     * @returns {*}
     * @private
     */
  }, {
    key: '_getRoot',
    value: function _getRoot(node) {
      var root = node;

      while (root.$parent) {
        root = root.$parent;
      }

      return root;
    }

    /**
     * Adds unassigned charters to business structure
     * @param {Array} data
     * @returns {Array}
     * @private
     */
  }, {
    key: '_prepareResponseData',
    value: function _prepareResponseData(data) {
      for (var i = 0, len = data.length; i < len; i++) {
        var item = data[i];
        var unassigned = item.unassigned_charters;

        if (!unassigned) {
          continue;
        }

        if (!unassigned.length) {
          continue;
        }

        item.children.push({
          id: -item.id,
          name: 'Unassigned',
          type: this.nodeType.unassigned,
          children: [].concat(unassigned)
        });

        item.unassigned_charters = [];
      }

      return data;
    }
  }]);

  return BaseHierarchyController;
})();

exports['default'] = BaseHierarchyController;
module.exports = exports['default'];

},{}],142:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null);

var _angular2 = _interopRequireDefault(_angular);

var ChartersCtrl =
/*@ngInject*/
["$scope", "$state", "$rootScope", "AppContext", "AccountService", function ChartersCtrl($scope, $state, $rootScope, AppContext, AccountService) {
  _classCallCheck(this, ChartersCtrl);

  if (AppContext.isCached('charters')) {
    AppContext.restoreContext('charters');
  } else {
    AppContext.resetContext();
  }

  $scope.browseButtonIsVisible = true;
  $scope.searchpanelisactive = false;

  if (!AppContext.getRouterState('previous')) {
    AppContext.setRouterState('previous', 'charters');
  }

  if (!AppContext.getActiveTabState()) {
    var state = 'charters.analytics';

    if ($state.current.name === state || $state.current.name === 'charters.chartertable') {
      state = $state.current.name;
    }

    AppContext.setActiveTabState(state);
  }

  $rootScope.$on('$stateChangeSuccess', function (ev, to, toParams, from) {
    AppContext.setRouterState('current', to.name);
    AppContext.setRouterState('previous', from.name);
  });

  $scope.setPrevState = function () {
    $state.go(AppContext.getRouterState('previous'));
  };

  // retrieving and storing accounts promise
  AppContext.setPromise('account', _angular2['default'].bind(AccountService, AccountService.getAccounts));
}];

exports['default'] = ChartersCtrl;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],143:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var NavigationCtrl =
/*@ngInject*/
["$scope", "AppContext", "PermissionsService", function NavigationCtrl($scope, AppContext, PermissionsService) {
  _classCallCheck(this, NavigationCtrl);

  $scope.tabsOrder = ['analytics', 'charters'];

  $scope.tabs = {
    analytics: ['charters.analytics'],
    charters: ['charters.chartertable', 'charters.hierarchy']
  };

  if (PermissionsService.can('viewAdministration')) {
    var tabName = 'administration';

    $scope.tabsOrder.push(tabName);
    $scope.tabs[tabName] = ['charters.administration.metrics'];
  }

  /**
   * Stores state of the active tab in application context
   * @param {String} state - active tab state
   */
  $scope.storeState = function (state) {
    AppContext.setActiveTabState(state);
  };

  /**
   * Checks whether set state 'active' to current tab
   * @param {String} tabName -tab's name
   * @returns {boolean}
   */
  $scope.isActive = function (tabName) {
    var state = AppContext.getActiveTabState();

    return $scope.tabs[tabName].indexOf(state) !== -1;
  };
}];

exports['default'] = NavigationCtrl;
module.exports = exports['default'];

},{}],144:[function(require,module,exports){
(function (global){
(typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null).module('src/app/index.js').run(['$templateCache', function($templateCache){$templateCache.put('charters-brand.html','<img src="assets/images/ss-excellence-midnight.png">')}]);
module.exports = 'charters-brand.html';
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],145:[function(require,module,exports){
(function (global){
(typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null).module('src/app/index.js').run(['$templateCache', function($templateCache){$templateCache.put('charters-top-navigation.html','<ul class="nav navbar-nav main-nav"> <li ng-repeat="tab in tabsOrder" ng-class="{ \'active\': isActive(tab) }"> <a ui-sref="{{ tabs[tab][0] }}" ng-click="storeState(tabs[tab][0])" href="#">{{ tab.toUpperCase() }}</a> </li> </ul>')}]);
module.exports = 'charters-top-navigation.html';
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],146:[function(require,module,exports){
(function (global){
(typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null).module('src/app/index.js').run(['$templateCache', function($templateCache){$templateCache.put('charters.tpl.html','<div class="main" ui-view></div>')}]);
module.exports = 'charters.tpl.html';
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],147:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _commonControllersBaseHierarchyController = require('../../common/controllers/base.hierarchy.controller');

var _commonControllersBaseHierarchyController2 = _interopRequireDefault(_commonControllersBaseHierarchyController);

var maxHierarchyRootNodesToApplyAllFilter = 10;

/*@ngInject*/

var HierarchyController = (function (_SimpleHierarchyController) {
  HierarchyController.$inject = ["$scope", "$state", "HierarchyService", "AppContext", "PermissionsService", "AssignService", "UrlParams"];
  _inherits(HierarchyController, _SimpleHierarchyController);

  function HierarchyController($scope, $state, HierarchyService, AppContext, PermissionsService, AssignService, UrlParams) {
    var _this = this;

    _classCallCheck(this, HierarchyController);

    _get(Object.getPrototypeOf(HierarchyController.prototype), 'constructor', this).call(this, $scope, $state, HierarchyService, AppContext, PermissionsService, UrlParams);

    this.AppContext = AppContext;
    this.AssignService = AssignService;
    this.businessCache = {};

    $scope.business = { $model: null };

    if (PermissionsService.isClientRole()) {
      $state.go('charters');
    }

    AppContext.setActiveTabState($state.current.name);

    //Watching for hierarchyDataPromise
    $scope.$watch(function () {
      return _this.hierarchyDataPromise;
    }, function (hierarchyDataPromise) {
      if (hierarchyDataPromise) {
        hierarchyDataPromise.then(function (data) {
          var structure = _this._prepareResponseData(data);

          // At first we need a index of the tree to avoid recursive search each time
          _this.indexedTree = HierarchyService.indexTree(structure, function (item) {
            return item.id;
          }, function (item) {
            return item.children || [];
          });
          $scope.hierarchyData = HierarchyService.alphabetize(structure);

          var keys = Object.keys($scope.hierarchyData);

          $scope.isShowLetter = keys.length > 1;

          keys.forEach(function (key) {
            $scope.hierarchyData[key].forEach(function (item) {
              return _this._getTotal(item);
            });
          });
        });
      }
    });

    /**
     * Navigate to create charter screen.
     * @param {Object} scope Scope exposed by ui-tree-node
     */
    $scope.newSubItem = function (scope) {
      var root = _this._getRoot(scope.$modelValue);

      if (_this.isAccount(root)) {
        $state.params['account_id'] = root.id;
        $state.params['account'] = root.name;
      }

      $state.params['business_id'] = scope.$modelValue.id;
      $state.go('^.charter.create', $state.params);
    };

    /**
     * Checks if it possible to create charter for passed node
     * @param node
     * @returns {Boolean} - Is allowed editing here or not
     */
    $scope.canUserCreateCharter = function (node) {
      var targetInfo = _this.isAccount(node) ? node.id : _this._getNodeInfo(node);

      return _this._canHaveSubItems(node) && _this.Permissions.can('createCharter', targetInfo);
    };

    /**
     * Checks if it possible to edit charter for passed node
     * @param node
     * @returns {Boolean} - Is allowed to create charter here or not
     */
    $scope.canUserEditCharter = function (node) {
      var targetInfo = _this.isAccount(node) ? node.id : _this._getNodeInfo(node);

      return _this.Permissions.can('editCharter', targetInfo);
    };

    /**
     * Gets businesses for particular account
     * @param {Object} node
     * @returns {Array|null}
     */
    $scope.getBusinesses = function (node) {
      var account = _this._getRoot(node);

      return _this.businessCache[account.id];
    };

    $scope.goToCharter = function (node) {
      return _this._goToCharter(_this.hasOwner(node) ? node.owner.id : node.id);
    };
    $scope.goToChartersTable = function () {
      return $state.go('charters.chartertable', $state.params);
    };
    $scope.canCreate = function () {
      return PermissionsService.canAny('createCharter');
    };
    $scope.createCharter = function () {
      return $state.go('charters.charter.create', $state.params);
    };
    $scope.nodeHasChildren = function (node) {
      return _this._nodeHasChildren(node);
    };
    $scope.unAssign = function (node) {
      return _this._unAssign(node);
    };
    $scope.assign = function (node, $model) {
      return _this._assign(node, $model);
    };
  }

  /**
   * Returns true if the node is a program charter or account. Only those types of nodes
   * can have children, so we can show '+' icon near them.
   * @param {Object} node
   * @private
   */

  _createClass(HierarchyController, [{
    key: '_canHaveSubItems',
    value: function _canHaveSubItems(node) {
      return !(this.isUnassigned(node) || this.isCharter(node)) && (this.isAccount(node) || !this.hasOwner(node));
    }

    /**
     * Returns config with node id, its parent and account id.
     * @param {Object} node - node to determine its hierarchy id's
     * @returns {Object}
     * @private
     */
  }, {
    key: '_getNodeInfo',
    value: function _getNodeInfo(node) {
      var root = this._getRoot(node);

      return {
        targetId: node.owner && node.owner.id || node.id,
        accountId: root.id,
        parentId: node.$parent.owner && node.$parent.owner.id || node.$parent.id
      };
    }

    /**
     * Goes to charter Business Case
     * @param {Number} id - charter id
     * @private
     */
  }, {
    key: '_goToCharter',
    value: function _goToCharter(id) {
      this.$state.go('charters.charter.view', { id: id, filter: this.$state.params.filter });
    }

    /**
     * Checks whether node has any children
     * @param {Object} node
     * @returns {Boolean}
     * @private
     */
  }, {
    key: '_nodeHasChildren',
    value: function _nodeHasChildren(node) {
      return !!node.children.length;
    }

    /**
     * Unassign charter and move it to Unassigned section
     * @param {Object} node - business
     * @private
     */
  }, {
    key: '_unAssign',
    value: function _unAssign(node) {
      var _this2 = this;

      if (!this.hasOwner(node)) {
        return null;
      }

      node.showButtons = false;

      this.AssignService.unassign(node.owner.id).then(function () {
        var newOwner = angular.copy(node.owner);
        var account = _this2._getRoot(node);
        var unassigned = _this2.indexedTree['-' + account.id];

        if (!unassigned) {
          unassigned = _this2._createUnassignedNode(account);
        }

        _this2._setBusinessState(node.id, account.id, true);

        node.owner = null;
        newOwner.$parent = unassigned;
        newOwner.parent = null;
        newOwner.parent_id = account.id;
        newOwner.type = _this2.nodeType.charter;
        newOwner.reassigned = true;

        unassigned.children.push(newOwner);
        _this2.AppContext.setPromise('charter', null, true);
      });
    }

    /**
     * Create 'Unassigned' node for account if it does not exist
     * @param {Object} account
     * @private
     */
  }, {
    key: '_createUnassignedNode',
    value: function _createUnassignedNode(account) {
      var children = account.children;
      var unassigned = {
        $parent: account,
        id: -account.id,
        name: 'Unassigned',
        type: this.nodeType.unassigned,
        children: []
      };

      children.push(unassigned);

      return this.indexedTree['-' + account.id] = children[children.length - 1];
    }

    /**
     * Assign charter to business
     * @param {Object} node - charter
     * @param {Object} $model - selected business
     * @private
     */
  }, {
    key: '_assign',
    value: function _assign(node, $model) {
      var _this3 = this;

      if (!$model.id) {
        return null;
      }

      node.showButtons = false;

      this.AssignService.assign(node.id, $model.id).then(function () {
        var account = _this3._getRoot(node);
        var unassigned = _this3.indexedTree['-' + account.id];
        var business = _this3.indexedTree[$model.id];
        var index = unassigned.children.indexOf(node);

        _this3._setBusinessState($model.id, account.id, false);

        business.owner = {
          $parent: business,
          parent: business.id,
          can_view: node.can_view,
          id: node.id,
          name: node.name,
          reassigned: true
        };

        unassigned.children.splice(index, 1);
        _this3.AppContext.setPromise('charter', null, true);
      });
    }

    /**
     * Sets business's free state, true if it does not have the owner and false in another case
     * @param {Number} businessId
     * @param {Number} accountId
     * @param {Boolean} state
     * @private
     */
  }, {
    key: '_setBusinessState',
    value: function _setBusinessState(businessId, accountId, state) {
      var businesses = this.businessCache[accountId];

      for (var i = 0, len = businesses.length; i < len; i++) {
        if (businessId === businesses[i].id) {
          businesses[i].free = state;
          break;
        }
      }
    }

    /**
     * Initializes businesses data
     * @param {Object} data
     * @private
     */
  }, {
    key: '_initBusinesses',
    value: function _initBusinesses(data) {
      var segments = data.children;
      var items = [];

      for (var i = 0, len1 = segments.length; i < len1; i++) {
        var segment = this._getBusinessObject(segments[i]);
        var lines = segments[i].children;

        items.push(segment);

        for (var j = 0, len2 = lines.length; j < len2; j++) {
          var line = this._getBusinessObject(lines[j]);

          items.push(line);
        }
      }

      this.businessCache[data.id] = items;
    }

    /**
     * Creates business object
     * @param {Object} item
     * @returns {Object}
     * @private
     */
  }, {
    key: '_getBusinessObject',
    value: function _getBusinessObject(item) {
      return { id: item.id, name: item.name, free: item.free, type: item.type };
    }

    /**
     * Adds unassigned charters to business structure
     * @param {Array} data
     * @returns {Array}
     * @override
     * @private
     */
  }, {
    key: '_prepareResponseData',
    value: function _prepareResponseData(data) {
      for (var i = 0, len = data.length; i < len; i++) {
        var item = data[i];
        var unassigned = item.unassigned_charters;

        this._initBusinesses(item);

        if (!unassigned) {
          continue;
        }

        if (!unassigned.length) {
          continue;
        }

        item.children.push({
          id: -item.id,
          name: 'Unassigned',
          type: this.nodeType.unassigned,
          children: [].concat(unassigned)
        });

        item.unassigned_charters = [];
      }

      return data;
    }

    /**
     * Calculates the number of charters in node
     * @param {Object} node
     * @private
     */
  }, {
    key: '_getTotal',
    value: function _getTotal(node) {
      var _this4 = this;

      if (!this.isAccount(node)) {
        node.total = 0;
      }

      // Calculate totals for the root node
      var calcNodes = function calcNodes(node) {
        var nodes = node.children || [];
        var total = nodes.filter(function (child) {
          return _this4.hasOwner(child) || _this4.isCharter(child);
        }).length;

        for (var i = 0; i < nodes.length; i++) {
          total += calcNodes(nodes[i]);
        }

        return total;
      };

      node.total = calcNodes(node);
    }
  }]);

  return HierarchyController;
})(_commonControllersBaseHierarchyController2['default']);

exports['default'] = HierarchyController;
module.exports = exports['default'];

},{"../../common/controllers/base.hierarchy.controller":141}],148:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null);

var _angular2 = _interopRequireDefault(_angular);

var _jquery = (typeof window !== "undefined" ? window['$'] : typeof global !== "undefined" ? global['$'] : null);

var _jquery2 = _interopRequireDefault(_jquery);

var moduleName = 'hierarchy.open-on-click';

var OpenOnClick = (function () {
  function OpenOnClick($timeout) {
    var _this = this;

    _classCallCheck(this, OpenOnClick);

    this.restrict = 'A';
    this.$timeout = $timeout;

    this.link = function (scope, element, attrs) {
      return _this._link(scope, element, attrs);
    };
  }

  _createClass(OpenOnClick, [{
    key: '_link',
    value: function _link(scope, element, attrs) {
      var _this2 = this;

      element.bind('click', function () {
        _this2.$timeout(function () {
          return (0, _jquery2['default'])('#' + attrs.openOnClick).find('.ui-select-toggle').click();
        });
      });
    }
  }], [{
    key: 'directiveFactory',
    value: function directiveFactory($timeout) {
      return new OpenOnClick($timeout);
    }
  }]);

  return OpenOnClick;
})();

_angular2['default'].module(moduleName, []).directive('openOnClick', OpenOnClick.directiveFactory);

exports['default'] = moduleName;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],149:[function(require,module,exports){
(function (global){
'use strict';

/**
 * This module displays hierarchy of accounts and charters.
 * Selected charters appear in application context.
 *
 * Leverages angular-ui-tree widget - https://github.com/angular-ui-tree/angular-ui-tree
 */

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null);

var _angular2 = _interopRequireDefault(_angular);

require('./views/hierarchy.html');

require('./views/hierarchy.filter.html');

var _componentsHierarchyService = require('components/hierarchy-service');

var _componentsHierarchyService2 = _interopRequireDefault(_componentsHierarchyService);

var _servicesAssignService = require('./services/assign.service');

var _servicesAssignService2 = _interopRequireDefault(_servicesAssignService);

var _controllersHierarchy = require('./controllers/hierarchy');

var _controllersHierarchy2 = _interopRequireDefault(_controllersHierarchy);

var _componentsTreeControl = require('components/tree-control');

var _componentsTreeControl2 = _interopRequireDefault(_componentsTreeControl);

var _componentsAppContextService = require('components/app-context-service');

var _componentsAppContextService2 = _interopRequireDefault(_componentsAppContextService);

var _componentsFullHeightTab = require('components/full-height/tab');

var _componentsFullHeightTab2 = _interopRequireDefault(_componentsFullHeightTab);

var _componentsMinHeight = require('components/min-height');

var _componentsMinHeight2 = _interopRequireDefault(_componentsMinHeight);

var _directivesOpenOnClick = require('./directives/open-on-click');

var _directivesOpenOnClick2 = _interopRequireDefault(_directivesOpenOnClick);

var _componentsUrlParamsService = require('components/url-params-service');

var _componentsUrlParamsService2 = _interopRequireDefault(_componentsUrlParamsService);

var moduleName = 'charters.hierarchy';

_angular2['default'].module(moduleName, [_componentsHierarchyService2['default'], _servicesAssignService2['default'], _componentsTreeControl2['default'], _directivesOpenOnClick2['default'], _componentsAppContextService2['default'], _componentsFullHeightTab2['default'], _componentsMinHeight2['default'], _componentsUrlParamsService2['default'], 'ui.router', 'ui.tree']).controller('HierarchyCtrl', _controllersHierarchy2['default']).config(function ($stateProvider) {
  $stateProvider.state('charters.hierarchy', {
    url: '/hierarchy',
    reloadOnSearch: false,
    data: {
      isPresentRemoveButton: true
    },
    views: {
      '': {
        templateUrl: 'hierarchy.html',
        controller: 'HierarchyCtrl'
      },
      'context@': {
        templateUrl: 'hierarchy.filter.html',
        controller: function controller() {}
      }
    },
    onExit: function onExit(AppContext) {
      AppContext.storeContext('charters');
    }
  });
});

exports['default'] = moduleName;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./controllers/hierarchy":147,"./directives/open-on-click":148,"./services/assign.service":150,"./views/hierarchy.filter.html":151,"./views/hierarchy.html":152,"components/app-context-service":12,"components/full-height/tab":26,"components/hierarchy-service":27,"components/min-height":34,"components/tree-control":59,"components/url-params-service":67}],150:[function(require,module,exports){
(function (global){
"use strict";

/***************

 This service responsible for quick charter assign/unassign to some business

 ***************/

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null);

var _angular2 = _interopRequireDefault(_angular);

var moduleName = 'assign.service';

/*@ngInject*/

var AssignService = (function () {
  AssignService.$inject = ["$http"];
  function AssignService($http) {
    _classCallCheck(this, AssignService);

    this.$http = $http;
  }

  /**
   * Makes call to assign charter
   * @param {Number} charterId
   * @param {Number} businessId
   * @returns {Object} promise
   */

  _createClass(AssignService, [{
    key: 'assign',
    value: function assign(charterId, businessId) {
      return this.$http.post('/api/charter/' + charterId + '/assign-to/' + businessId);
    }

    /**
     * Makes call to unassign charter
     * @param {Number} charterId
     * @returns {Object} promise
     */
  }, {
    key: 'unassign',
    value: function unassign(charterId) {
      return this.$http.post('/api/charter/' + charterId + '/unassign');
    }
  }]);

  return AssignService;
})();

_angular2['default'].module(moduleName, []).service('AssignService', AssignService);

exports['default'] = moduleName;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],151:[function(require,module,exports){
(function (global){
(typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null).module('src/app/index.js').run(['$templateCache', function($templateCache){$templateCache.put('hierarchy.filter.html','<fieldset ng-disabled="true"> <div class="panel-wrapper charter-filter"> <div class="panel-name"> <div class="f-left">Filter</div> <a href="" class="f-right" ng-click="resetFilter()">RESET</a> </div> <div class="panel panel-default"> <div class="panel-body"> <div class="charter-info-list row"> <div class="charter-info-list-item"> <div class="col-xs-4"> <label class="charter-label">Status</label> </div> <div class="col-xs-8"> <select class="d-block fullwidth" ng-model="filter.status" ng-options="item as item.name for item in data.status"> </select> </div> </div> </div> <div class="divider"></div> <div class="charter-info-list row"> <div class="charter-info-list-item"> <div class="col-xs-4"> <label class="charter-label">Account</label> </div> <div class="col-xs-8"> <select class="d-block fullwidth" ng-model="filter.account" ng-options="item as item.name for item in data.account"> </select> </div> </div> <div class="charter-info-list-item"> <div class="col-xs-4"> <label class="charter-label">Unit</label> </div> <div class="col-xs-8"> <select class="d-block fullwidth" ng-model="filter.unit" ng-options="item as item.name for item in data.unit"> </select> </div> </div> <div class="charter-info-list-item"> <div class="col-xs-4"> <label class="charter-label">Vertical</label> </div> <div class="col-xs-8"> <select class="d-block fullwidth" ng-model="filter.vertical" ng-options="item as item.name for item in data.vertical"> </select> </div> </div> </div> <div class="divider"></div> <div class="charter-info-list row"> <div class="charter-info-list-item"> <div class="col-xs-4"> <label class="charter-label">Client Partner</label> </div> <div class="col-xs-8"> <input class="d-block fullwidth" type="text" placeholder="Enter name, min 2 symbols" ng-trim="true" ng-model="filter.clientPartner"> </div> </div> <div class="charter-info-list-item"> <div class="col-xs-4"> <label class="charter-label">Manager</label> </div> <div class="col-xs-8"> <input class="d-block fullwidth" type="text" placeholder="Enter name, min 2 symbols" ng-trim="true" ng-model="filter.manager"> </div> </div> </div> <div class="divider"></div> <div class="charter-info-list row"> <div class="charter-info-list-item"> <input id="expired" class="ad-filter-checkbox" type="checkbox" ng-model="filter.expired"> <label class="col-xs-6 cb-charter-label" for="expired">Expired only</label> </div> <div class="charter-info-list-item"> <input id="overdue" class="ad-filter-checkbox" type="checkbox" ng-model="filter.overdue"> <label class="col-xs-6 cb-charter-label" for="overdue">Overdue only</label> </div> </div> </div> </div> </div> </fieldset>')}]);
module.exports = 'hierarchy.filter.html';
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],152:[function(require,module,exports){
(function (global){
(typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null).module('src/app/index.js').run(['$templateCache', function($templateCache){$templateCache.put('hierarchy.html','<div class="panel-wrapper hierarchy-container" ng-full-height-tab> <div class="ad-tab ad-tab-large o-hid"> <ul class="nav nav-tabs" role="tablist"> <li> <a href="" ng-click="goToChartersTable()">Register</a> </li> <li class="active"> <a href="">Hierarchy</a> </li> <div class="f-right panel-name visible"> <a ad-tree-control="expandAll" tree-root-selector=".ad-treeview-wrapper" href="">EXPAND ALL</a> <a ad-tree-control="collapseAll" tree-root-selector=".ad-treeview-wrapper" href="">COLLAPSE ALL</a> <a href="" ng-click="createCharter()" ng-if="canCreate()">CREATE CHARTER</a> </div> </ul> <div class="tab-content" min-height> <loading-indicator ng-if="isPresentHierarchyLoader" indicator-size="16px" max-width="120px" display-center="true"></loading-indicator> <div class="hierarchy-filters" ng-if="filters"> <ul class="panel-heading-controls"> <li ng-class="{ active: isFilterActive(\'All\') }"> <a ng-click="applyFilter(\'All\')">All</a> </li> <li ng-repeat="(key, value) in filters" ng-class="{ \'active\': isFilterActive(key), \'disabled\': !value }" ng-if="key !== \'#\'"> <a ng-click="applyFilter(key)" ng-show="value">{{ key | uppercase }}</a> <a class="disabled" ng-hide="value">{{ key | uppercase }}</a> </li> </ul> </div> <div ng-if="!isDataAvailable()" class="no-data-container" ng-hide="isPresentHierarchyLoader"> <div class="message" ng-show="isDataFetched()">You have no Accounts and Charters available</div> </div> <div ng-repeat="(letter, letterBlock) in hierarchyData" class="alphabetic" ng-hide="isPresentHierarchyLoader"> <div class="alphabetic-header" ng-if="isShowLetter"> {{ letter | uppercase }} </div> <div class="alphabetic-content"> <div class="row"> <div class="col-xs-12"> <div ui-tree data-drag-enabled="false" class="ad-treeview-wrapper"> <ol ui-tree-nodes ng-model="letterBlock" class="ad-treeview"> <li ng-repeat="node in letterBlock" ui-tree-node collapsed="true" ng-include="\'parent_nodes_renderer.html\'"></li> </ol> </div> </div> </div> </div> </div> </div> </div> </div> <!-- Nested node templates --> <!-- Template for parent nodes --> <script type="text/ng-template" id="parent_nodes_renderer.html"><div class="tree-node">     <i ng-if="!isCollapsible(node) || !nodeHasChildren(node)" class="tree-icon empty"></i>     <i class="tree-icon"        ng-if="isCollapsible(node) && nodeHasChildren(node)"        ng-class="{ \'collapsed\': collapsed, \'expanded\': !collapsed }"        ng-click="toggleCollapse(this)"></i>     <div class="d-inline-block tree-node-content"          ng-init="node.showButtons = false;"          ng-mouseenter="node.showButtons = true"          ng-mouseleave="node.showButtons = false"          ng-class="{ \'highlighted-node\': !isAccount(node) && !isUnassigned(node) }">        <span class="textContents link-charter"             ng-if="!isCharter(node)"             ng-class="{ \'account\': isAccount(node), \'unassigned\': isUnassigned(node) }">{{ node.name }}</span>        <span ng-if="isCharter(node)"             class="textContents link-charter"             ng-class="{ \'reassigned\': node.reassigned }">Charter: <strong>{{ node.name }}</strong></span>        <span ng-if="node.owner.id" class="link"></span>        <span ng-if="node.owner.id"            class="textContents link-charter"            ng-class="{ \'reassigned\': node.owner.reassigned }">Charter: <strong>{{ node.owner.name }}</strong></span>        <span ng-if="node.owner.id || isCharter(node)" class="link-info" ng-show="node.showButtons">         <a href="" class="charter-info" ng-click="goToCharter(node)">           <span class="icon icon-info"></span>         </a>       </span>        <div ng-if="canUserEditCharter(node) && node.owner.id" class="link-unassign" ng-show="node.showButtons">         <a href="" ng-click="unAssign(node)">Unassign</a>       </div>        <div class="link-unassign"            ng-if="canUserEditCharter(node) && isCharter(node)"            ng-show="getBusinesses(node).length > 0 && node.showButtons">         <a href=""            open-on-click="{{ node.id }}">Assign<span class="ch-glyphicon glyphicon-triangle-bottom tree-triangle"></span>         </a>       </div>        <i ng-if="canUserCreateCharter(node)"          ng-class="{ \'hidden\': collapsed && nodeHasChildren(node) }"          class="treeview-add icon icon-add"          title="Create Charter"          ng-click="newSubItem(this)"></i>        <span ng-if="node.total && collapsed" class="total-info">         {{ node.total }}       </span>        <i ng-if="!node.owner.id && !isCharter(node) && !canUserCreateCharter(node)" class="tree-icon fake"></i>     </div>      <ui-select id="{{ node.id }}" class="business-selector"                ng-if="canUserEditCharter(node) && isCharter(node)"                ng-model="business.$model"                on-select="assign(node, $model)"                on-remove="console.log(\'REMOVE\')"                search-enabled="true">       <ui-select-match style="display:none;">{{ $select.selected.name }}</ui-select-match>       <ui-select-choices repeat="item in getBusinesses(node) | filter:$select.search"                          ui-disable-choice="item.id && !item.free">         <div class="item clearfix">           <div class="name"                ng-class="{ \'hard-fullwidth\': item.free, \'f-bold\': isSegment(item), \'line\': !isSegment(item) }"                title="{{ item.name }}" ng-bind-html="item.name | highlight: $select.search"></div>           <div ng-show="item.id" class="occupied" ng-bind-html="item.free ? \'\' : \'In Use\'"></div>         </div>       </ui-select-choices>     </ui-select>   </div>     <ol ui-tree-nodes ng-model="node.children" ng-class="{ hidden: collapsed }">     <li ng-repeat="node in node.children"         ui-tree-node         ng-include="\'parent_nodes_renderer.html\'"></li>   </ol></script>')}]);
module.exports = 'hierarchy.html';
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],153:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

require('./common/views/charters.tpl.html');

require('./common/views/charters-brand.html');

require('./common/views/charters-top-navigation.html');

var _modulesContext = require('modules/context');

var _modulesContext2 = _interopRequireDefault(_modulesContext);

var _summary = require('./summary');

var _summary2 = _interopRequireDefault(_summary);

var _simpleHierarchy = require('./simple-hierarchy');

var _simpleHierarchy2 = _interopRequireDefault(_simpleHierarchy);

var _hierarchy = require('./hierarchy');

var _hierarchy2 = _interopRequireDefault(_hierarchy);

var _commonControllersChartersController = require('./common/controllers/charters.controller');

var _commonControllersChartersController2 = _interopRequireDefault(_commonControllersChartersController);

var _commonControllersNavigationController = require('./common/controllers/navigation.controller');

var _commonControllersNavigationController2 = _interopRequireDefault(_commonControllersNavigationController);

var _charter = require('./charter');

var _charter2 = _interopRequireDefault(_charter);

var _componentsAppContextService = require('components/app-context-service');

var _componentsAppContextService2 = _interopRequireDefault(_componentsAppContextService);

var _analytics = require('./analytics');

var _analytics2 = _interopRequireDefault(_analytics);

var _componentsEntitiesService = require('components/entities-service');

var _componentsEntitiesService2 = _interopRequireDefault(_componentsEntitiesService);

var _componentsAccountService = require('components/account-service');

var _componentsAccountService2 = _interopRequireDefault(_componentsAccountService);

var _charterTable = require('./charter-table');

var _charterTable2 = _interopRequireDefault(_charterTable);

var moduleName = 'abiliton.charters';

angular.module(moduleName, [_modulesContext2['default'], _summary2['default'], _simpleHierarchy2['default'], _charter2['default'], _componentsAppContextService2['default'], _analytics2['default'], _componentsEntitiesService2['default'], _componentsAccountService2['default'], _charterTable2['default'], _hierarchy2['default'], 'ui.router', 'roles']).config(["$stateProvider", function ($stateProvider) {
  $stateProvider.state('charters', {
    url: '/charters?period&selectedEntities&uncheckedEntities&filter',
    redirectTo: 'charters.analytics',
    data: {
      type: 'charter',
      isPresentSearchInfo: true,
      isPresentSearchBrowse: true,
      isPresentAlarmIcon: true
    },
    views: {
      content: {
        templateUrl: 'charters.tpl.html',
        controller: _commonControllersChartersController2['default']
      },
      context: {
        templateUrl: 'context.html',
        controller: 'ContextCtrl'
      },
      brand: {
        templateUrl: "charters-brand.html"
      },
      "top-navigation": {
        templateUrl: "charters-top-navigation.html",
        controller: _commonControllersNavigationController2['default']
      }
    }
  });
}]);

exports['default'] = moduleName;
module.exports = exports['default'];

},{"./analytics":95,"./charter":131,"./charter-table":100,"./common/controllers/charters.controller":142,"./common/controllers/navigation.controller":143,"./common/views/charters-brand.html":144,"./common/views/charters-top-navigation.html":145,"./common/views/charters.tpl.html":146,"./hierarchy":149,"./simple-hierarchy":155,"./summary":158,"components/account-service":11,"components/app-context-service":12,"components/entities-service":23,"modules/context":164}],154:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _commonControllersBaseHierarchyController = require('../../common/controllers/base.hierarchy.controller');

var _commonControllersBaseHierarchyController2 = _interopRequireDefault(_commonControllersBaseHierarchyController);

/*@ngInject*/

var SimpleHierarchyController = (function (_BaseHierarchy) {
  SimpleHierarchyController.$inject = ["$scope", "$state", "HierarchyService", "AppContext", "EntitiesService", "PermissionsService", "UrlParams"];
  _inherits(SimpleHierarchyController, _BaseHierarchy);

  function SimpleHierarchyController($scope, $state, HierarchyService, AppContext, EntitiesService, PermissionsService, UrlParams) {
    var _this = this;

    _classCallCheck(this, SimpleHierarchyController);

    _get(Object.getPrototypeOf(SimpleHierarchyController.prototype), 'constructor', this).call(this, $scope, $state, HierarchyService, AppContext, PermissionsService, UrlParams);

    this.EntitiesService = EntitiesService;

    if (PermissionsService.isClientRole()) {
      $state.go('charters');
    }

    var initData = function initData() {
      _this.hierarchyDataPromise.then(function (data) {
        // Get all items from AppContext
        // This gives an array of objects:
        // {
        //   id: {String}, // Entity id
        //   isInList: {True},
        //   isChecked: {Boolean}
        // }
        var contextEntities = _this.EntitiesService.deSerializeContext(AppContext.getSelectedEntities(), AppContext.getUncheckedEntities());

        // Sync hierarchy tree with current context

        // At first we need a index of the tree to avoid recursive search each time
        var structure = _this._prepareResponseData(data);

        _this.indexedTree = HierarchyService.indexTree(structure, function (item) {
          return item.id;
        }, function (item) {
          return item.children || [];
        });

        // Uncheck all
        // It's enough to uncheck only root nodes and such action is propagated to all descendants.
        structure.forEach(function (item) {
          return _this.setChecked(item, false);
        });

        // Check nodes which are in current context
        for (var i = 0; i < contextEntities.length; i++) {
          // Some entities may be present in the context, but not in the hieararchy. This a rare case,
          // but let's be safe and check if the object with specified id exists in the hierarchy tree.
          var ent = _this.indexedTree[contextEntities[i].id];

          if (ent) {
            _this.setChecked(_this.indexedTree[contextEntities[i].id], true);

            if (ent.parent) {
              _this.setChecked(_this.indexedTree[ent.parent], true);
            }
          }
        }

        $scope.hierarchyData = HierarchyService.alphabetize(structure);
        $scope.isShowLetter = Object.keys($scope.hierarchyData).length > 1;
      });
    };

    $scope.$watch(function () {
      return _this.hierarchyDataPromise;
    }, function (newVal) {
      return newVal && initData();
    });

    var unWatchContext = $scope.$watch(function () {
      return AppContext.getContext();
    }, function () {
      // We need this to synchronize request to hierarchy API and changes in AppContext.
      // It doesn't make sense to do anything if haven't received yet data from the server.
      if (!_this.hierarchyDataPromise) {
        return;
      }

      initData();
    }, true);

    $scope.nodeHasChildren = function (node) {
      return _this._nodeHasChildren(node);
    };

    /**
     * Toggle node status when the node is clicked.
     *
     * @param {Object} node
     */
    $scope.toggleCheck = function (node) {
      _this.toggleCheck(node);
      // We may watch tree data and propagate changes to the application context. Such approach require
      // "deep" watch and may have performance issues in future. We know when user changes something
      // in the hierarchy tree and can propagate changes only at those cases.
      _this.updateContext();
    };

    /**
     * Only account node can be partially checked. This happens if some of its descendants, but not all,
     * are not checked.
     *
     * @param {Object} node
     * @returns {boolean}
     */
    $scope.isPartlySelected = function (node) {
      var selInfo = node.selectionInfo;

      if (_this.isUnassigned(node)) {
        var enabled = node.children.filter(function (child) {
          return child.can_view;
        }).length;
        var checked = node.children.filter(function (child) {
          return child.checked;
        }).length;

        return node.children.length && checked && enabled !== checked;
      }

      return _this.isAccount(node) && selInfo.selected && selInfo.selected !== selInfo.enabled;
    };

    /**
     * Kill watchers!
     */
    $scope.$on('destroy', function () {
      unWatchContext();
    });
  }

  /**
   * Check/uncheck a node and update its parent and children.
   * Is invoked on click.
   *
   * @param {Object} node Current node
   */

  _createClass(SimpleHierarchyController, [{
    key: 'toggleCheck',
    value: function toggleCheck(node) {
      this.setChecked(node, !node.checked);
    }

    /**
     * Check tree node. if the node has type 'account', then check also children.
     *
     * @param {Object} node
     * @param {Boolean} checked
     */
  }, {
    key: 'setChecked',
    value: function setChecked(node, checked) {
      if (this.isAccount(node) || this.isUnassigned(node) || this.canView(node)) {
        node.checked = checked;
      }

      this.updateOthers(node);
    }

    /**
     * Update nodes related to current one.
     *
     * @param node
     */
  }, {
    key: 'updateOthers',
    value: function updateOthers(node) {
      if ((this.isAccount(node) || this.isUnassigned(node)) && node.children) {
        this.propagateCheckFromParent(node.children, node.checked);
      }

      this.recalcSelection(node);
    }

    /**
     * Recursively calculates number of all descendants and number of selected ones.
     * This calculation occurs only for root nodes and result is stored in 'selectionInfo' property.
     *
     * @param {Object} node
     */
  }, {
    key: 'recalcSelection',
    value: function recalcSelection(node) {
      var _this2 = this;

      var root = this._getRoot(node);

      // Calculate selection for the root node
      var calcNodes = function calcNodes(node, isRoot) {
        var nodes = node.children || [];
        var total = nodes.filter(function (child) {
          return _this2.hasOwner(child) || _this2.isCharter(child);
        }).length;
        var enabled = nodes.filter(function (child) {
          return _this2.canView(child);
        }).length;
        var result = { total: total, selected: 0, enabled: enabled };

        for (var i = 0; i < nodes.length; i++) {
          var r = calcNodes(nodes[i]);

          result.total += r.total;
          result.enabled += r.enabled;
          result.selected += r.selected;
        }

        if (_this2.isUnassigned(node)) {
          node.checked = _this2.isFullySelected(node);
        }

        // We don't care about root node status
        result.selected += node.checked && !isRoot && !_this2.isUnassigned(node) ? 1 : 0;

        return result;
      };

      root.selectionInfo = calcNodes(root, true);

      // Set root checked property to true if all descendants are checked.
      root.checked = this.isFullySelected(root);
    }

    /**
     * If all descendants of account node are checked then root should be checked as well.
     *
     * @param {Object} node
     * @returns {boolean}
     */
  }, {
    key: 'isFullySelected',
    value: function isFullySelected(node) {
      var selInfo = node.selectionInfo;

      if (this.isUnassigned(node)) {
        var enabled = node.children.filter(function (child) {
          return child.can_view;
        }).length;
        var checked = node.children.filter(function (child) {
          return child.checked;
        }).length;

        return enabled && checked && enabled === checked;
      }

      return this.isAccount(node) && selInfo.selected && selInfo.selected === selInfo.enabled;
    }

    /**
     * Recursively update all descendants.
     *
     * @param {Array} nodes
     * @param {Boolean} status
     */
  }, {
    key: 'propagateCheckFromParent',
    value: function propagateCheckFromParent(nodes, status) {
      for (var i = 0; i < nodes.length; ++i) {
        var node = nodes[i];

        if (!this.isDisabled(node)) {
          node.checked = status;
        }

        if (node.children) {
          this.propagateCheckFromParent(node.children, status);
        }
      }
    }

    /**
     * Update application context with current selection.
     */
  }, {
    key: 'updateContext',
    value: function updateContext() {
      var _this3 = this;

      var result = [];
      var uncheckedInContext = this.AppContext.getUncheckedEntities();

      var context = {
        checked: this.AppContext.getSelectedEntities(),
        unchecked: uncheckedInContext
      };

      var _loop = function (k) {
        var item = _this3.indexedTree[k];

        if (!_this3.isAccount(item) && !_this3.isUnassigned(item)) {
          if (result.filter(function (i) {
            return i.id === item.id;
          }).length) {
            return 'continue';
          }

          var obj = undefined;

          if (_this3.isCharter(item)) {
            obj = item;
          } else {
            if (_this3.hasOwner(item)) {
              obj = item.owner;
            }
          }

          if (obj && obj.id) {
            result.push({
              id: obj.id,
              isChecked: uncheckedInContext.indexOf(obj.id) === -1,
              isInList: item.checked
            });
          }
        }
      };

      for (var k in this.indexedTree) {
        var _ret = _loop(k);

        if (_ret === 'continue') continue;
      }

      /**
       * Delete charter id from context
       * @param {String} which - (checked|unchecked)
       * @param {Number} id - charter id
       * @private
       */
      var _deleteFromContext = function _deleteFromContext(which, id) {
        var index = context[which].indexOf(id);

        if (index !== -1) {
          context[which].splice(index, 1);
        }
      };

      //Updating current context
      for (var i = 0, len = result.length; i < len; i++) {
        var item = result[i];

        if (item.isChecked && item.isInList) {
          if (context.checked.indexOf(item.id) === -1) {
            context.checked.push(item.id);
            _deleteFromContext('unchecked', item.id);
          }
        } else {
          if (!item.isInList) {
            _deleteFromContext('checked', item.id);
            _deleteFromContext('unchecked', item.id);
          }
        }
      }

      this.AppContext.setSelectedEntities(context);
    }

    /**
     * Checks whether node has any children
     * @param {Object} node
     * @returns {Boolean}
     * @private
     */
  }, {
    key: '_nodeHasChildren',
    value: function _nodeHasChildren(node) {
      return !!(node.selectionInfo.total || node.children.length);
    }
  }]);

  return SimpleHierarchyController;
})(_commonControllersBaseHierarchyController2['default']);

exports['default'] = SimpleHierarchyController;
module.exports = exports['default'];

},{"../../common/controllers/base.hierarchy.controller":141}],155:[function(require,module,exports){
(function (global){
'use strict';

/**
 * This module displays hierarchy of accounts and charters.
 * Selected charters appear in application context.
 *
 * Leverages angular-ui-tree widget - https://github.com/angular-ui-tree/angular-ui-tree
 */

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null);

var _angular2 = _interopRequireDefault(_angular);

require('./views/simple-hierarchy.html');

var _modulesSimpleContext = require('modules/simple-context');

var _modulesSimpleContext2 = _interopRequireDefault(_modulesSimpleContext);

var _componentsHierarchyService = require('components/hierarchy-service');

var _componentsHierarchyService2 = _interopRequireDefault(_componentsHierarchyService);

var _controllersSimpleHierarchy = require('./controllers/simple-hierarchy');

var _controllersSimpleHierarchy2 = _interopRequireDefault(_controllersSimpleHierarchy);

var _componentsTreeControl = require('components/tree-control');

var _componentsTreeControl2 = _interopRequireDefault(_componentsTreeControl);

var _componentsAppContextService = require('components/app-context-service');

var _componentsAppContextService2 = _interopRequireDefault(_componentsAppContextService);

var _componentsEntitiesService = require('components/entities-service');

var _componentsEntitiesService2 = _interopRequireDefault(_componentsEntitiesService);

var _componentsFullHeightTab = require('components/full-height/tab');

var _componentsFullHeightTab2 = _interopRequireDefault(_componentsFullHeightTab);

var _componentsMinHeight = require('components/min-height');

var _componentsMinHeight2 = _interopRequireDefault(_componentsMinHeight);

var _componentsUrlParamsService = require('components/url-params-service');

var _componentsUrlParamsService2 = _interopRequireDefault(_componentsUrlParamsService);

var moduleName = 'charters.simplehierarchy';

_angular2['default'].module(moduleName, [_componentsHierarchyService2['default'], _componentsTreeControl2['default'], _componentsAppContextService2['default'], _componentsEntitiesService2['default'], _modulesSimpleContext2['default'], _componentsFullHeightTab2['default'], _componentsMinHeight2['default'], _componentsUrlParamsService2['default'], 'ui.router', 'ui.tree']).controller('SimpleHierarchyCtrl', _controllersSimpleHierarchy2['default']).config(function ($stateProvider) {
  $stateProvider.state('charters.simplehierarchy', {
    url: '/simple-hierarchy',
    reloadOnSearch: false,
    data: {
      isPresentRemoveButton: true
    },
    views: {
      '': {
        templateUrl: 'simple-hierarchy.html',
        controller: 'SimpleHierarchyCtrl'
      },
      'context@': {
        templateUrl: 'simple.context.html',
        controller: 'SimpleContextCtrl'
      }
    },
    onExit: function onExit(AppContext) {
      AppContext.storeContext('charters');
    }
  });
});

exports['default'] = moduleName;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./controllers/simple-hierarchy":154,"./views/simple-hierarchy.html":156,"components/app-context-service":12,"components/entities-service":23,"components/full-height/tab":26,"components/hierarchy-service":27,"components/min-height":34,"components/tree-control":59,"components/url-params-service":67,"modules/simple-context":186}],156:[function(require,module,exports){
(function (global){
(typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null).module('src/app/index.js').run(['$templateCache', function($templateCache){$templateCache.put('simple-hierarchy.html','<div class="panel-wrapper overbackdrop hierarchy-container" ng-full-height-tab> <div class="ad-tab ad-tab-large o-hid"> <ul class="nav nav-tabs" role="tablist"> <li class="active"> <a href="">Accounts & Charters</a> </li> <div class="f-right nav-tabs-controls"> <a ad-tree-control="expandAll" tree-root-selector=".ad-treeview-wrapper" href="#">EXPAND ALL</a> <a ad-tree-control="collapseAll" tree-root-selector=".ad-treeview-wrapper" href="#">COLLAPSE ALL</a> <a href="" ng-click="close($event)"> CLOSE <span class="icon icon-remove-white"></span> </a> </div> </ul> <div class="tab-content" min-height> <loading-indicator ng-if="isPresentHierarchyLoader" indicator-size="16px" max-width="120px" display-center="true"></loading-indicator> <div class="hierarchy-filters" ng-if="filters"> <ul class="panel-heading-controls"> <li ng-class="{ active: isFilterActive(\'All\') }"> <a ng-click="applyFilter(\'All\')">All</a> </li> <li ng-repeat="(key, value) in filters" ng-class="{ active: isFilterActive(key), \'disabled\': !value }" ng-if="key !== \'#\'"> <a ng-click="applyFilter(key)" ng-show="value">{{ key | uppercase }}</a> <a class="disabled" ng-hide="value">{{ key | uppercase }}</a> </li> </ul> </div> <div ng-if="!isDataAvailable()" class="no-data-container" ng-hide="isPresentHierarchyLoader"> <div class="message" ng-show="isDataFetched()">You have no Accounts and Charters available</div> </div> <div ng-repeat="(letter,letterBlock) in hierarchyData" class="alphabetic" ng-hide="isPresentHierarchyLoader"> <div class="alphabetic-header" ng-if="isShowLetter"> {{ letter | uppercase }} </div> <div class="alphabetic-content"> <div class="row"> <div class="col-xs-12"> <div ui-tree data-drag-enabled="false" class="ad-treeview-wrapper"> <ol ui-tree-nodes ng-model="letterBlock" class="ad-treeview"> <li ng-repeat="node in letterBlock" ui-tree-node collapsed="true" ng-include="\'parent_nodes_renderer.html\'"></li> </ol> </div> </div> </div> </div> </div> </div> </div> </div> <!-- Nested node templates --> <!-- Template for parent nodes --> <script type="text/ng-template" id="parent_nodes_renderer.html"><div class="tree-node tree-node-content">     <i ng-if="!isCollapsible(node) || !nodeHasChildren(node)" class="tree-icon empty"></i>     <i class="tree-icon"        ng-if="isCollapsible(node) && nodeHasChildren(node)"        ng-class="{ \'collapsed\': collapsed, \'expanded\': !collapsed }"        ng-click="toggleCollapse(this)"></i>     <i class="tree-icon-checked"        ng-class="{ \'unchecked\': !node.checked, \'checked\': node.checked, \'partly-checked\': isPartlySelected(node), \'disabled\': isDisabled(node) }"        ng-click="!isDisabled(node) && toggleCheck(node)"></i>     <span class="textContents"           ng-if="!isCharter(node)"           ng-class="{ \'account\': isAccount(node), \'unassigned\': isUnassigned(node) }">{{ node.name }}</span>     <span ng-if="isCharter(node)" class="textContents">Charter: <strong>{{ node.name }}</strong></span>      <div ng-if="node.owner.id" class="link"></div>     <div ng-if="node.owner.id" class="link-charter">Charter: <strong>{{ node.owner.name }}</strong></div>     <span ng-if="node.selectionInfo.total" class="selection-info">         <span class="sel">{{ node.selectionInfo.selected }}</span>&nbsp;/&nbsp;<span>{{ node.selectionInfo.total }}</span>     </span>   </div>   <ol ui-tree-nodes ng-model="node.children" ng-class="{ hidden: collapsed }">     <li ng-repeat="node in node.children"         ui-tree-node         ng-include="\'parent_nodes_renderer.html\'"></li>   </ol></script>')}]);
module.exports = 'simple-hierarchy.html';
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],157:[function(require,module,exports){
'use strict';

/*@ngInject*/
Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var CharterSummaryCtrl = (function () {
  function CharterSummaryCtrl($scope, $state, $timeout, AppContext) {
    var _this = this;

    _classCallCheck(this, CharterSummaryCtrl);

    this.$scope = $scope;
    this.$state = $state;
    this.appContext = AppContext;
    this.context = [];
    this.data = null;

    var timeoutPromise = undefined;
    var delay = 300;

    var unwatchEntitiesStatus = $scope.$watchCollection(function () {
      return AppContext.getEntitiesStatus();
    }, function (newVal) {
      $timeout.cancel(timeoutPromise);
      $scope.isPresentLoader = true;

      if (newVal) {
        timeoutPromise = $timeout(function () {
          $scope.chartersStatus = newVal;
          $scope.chartesCount = AppContext.getAllEntities().length;
          $scope.isPresentLoader = false;
        }, delay);
      }
    });

    var unwatchContextLoadedState = $scope.$watch(function () {
      return AppContext.getContextLoadedState();
    }, function (newVal) {
      return $scope.isContextLoaded = newVal;
    });

    $scope.$on('$destroy', function () {
      unwatchEntitiesStatus();
      unwatchContextLoadedState();
    });

    $scope.isPresentCharters = function () {
      return !!AppContext.getAllEntities().length;
    };
    $scope.go = function (chartersStatus) {
      return _this._go(chartersStatus);
    };
  }

  /**
   * Goes to charters view page
   * @param {String} chartersStatus - charter status (active|inactive|expired)
   * @private
   */

  _createClass(CharterSummaryCtrl, [{
    key: '_go',
    value: function _go(chartersStatus) {
      var statusObj = this.$scope.chartersStatus;

      if (statusObj[chartersStatus]) {
        this.appContext.storeContext('charters');
        this.$state.go('charters.charter.view', {
          id: statusObj[chartersStatus][0],
          selectedEntities: statusObj[chartersStatus].join(',')
        });
      }
    }
  }]);

  return CharterSummaryCtrl;
})();

exports['default'] = CharterSummaryCtrl;
module.exports = exports['default'];

},{}],158:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

require('./views/charter.summary.html');

var _controllersSummaryController = require('./controllers/summary.controller');

var _controllersSummaryController2 = _interopRequireDefault(_controllersSummaryController);

var _componentsEntitiesService = require('components/entities-service');

var _componentsEntitiesService2 = _interopRequireDefault(_componentsEntitiesService);

var _componentsAppContextService = require('components/app-context-service');

var _componentsAppContextService2 = _interopRequireDefault(_componentsAppContextService);

var _componentsLoadingIndicator = require('components/loading-indicator');

var _componentsLoadingIndicator2 = _interopRequireDefault(_componentsLoadingIndicator);

var _componentsMinHeight = require('components/min-height');

var _componentsMinHeight2 = _interopRequireDefault(_componentsMinHeight);

var moduleName = 'abiliton.chartersummary';

angular.module(moduleName, [_componentsEntitiesService2['default'], _componentsAppContextService2['default'], _componentsLoadingIndicator2['default'], _componentsMinHeight2['default'], 'ui.router']).config(["$stateProvider", function ($stateProvider) {
  $stateProvider.state('charters.summary', {
    url: '/summary',
    reloadOnSearch: false,
    templateUrl: 'charter.summary.html',
    controller: _controllersSummaryController2['default'],
    onExit: ["AppContext", function onExit(AppContext) {
      AppContext.storeContext('charters');
    }]
  });
}]);

exports['default'] = moduleName;
module.exports = exports['default'];

},{"./controllers/summary.controller":157,"./views/charter.summary.html":159,"components/app-context-service":12,"components/entities-service":23,"components/loading-indicator":29,"components/min-height":34}],159:[function(require,module,exports){
(function (global){
(typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null).module('src/app/index.js').run(['$templateCache', function($templateCache){$templateCache.put('charter.summary.html','<div class="panel-wrapper"> <div class="panel-name visible"> <div class="f-left">Summary</div> </div> <div class="panel panel-default"> <div class="panel-body" min-height> <loading-indicator ng-if="!isContextLoaded || isPresentLoader" indicator-size="16px" max-width="120px" display-center="true"></loading-indicator> <div class="charters-summary" ng-show="isContextLoaded && !isPresentLoader"> <span class="summary-icon"></span> <!-- message \'No data for analysis\' --> <div class="charter-message" ng-show="isPresentCharters()"> <div class="title">No data for analysis</div> <div class="message"> As we\'re just starting, there is no data for analysis yet. <br> Out of {{ chartesCount }} selected charters, there are <a ng-if="chartersStatus.active.length" ng-click="go(\'active\')">{{ chartersStatus.active.length }} active</a> <span ng-if="!chartersStatus.active.length">0 active</span> , <br> <a ng-if="chartersStatus.inactive.length" ng-click="go(\'inactive\')">{{ chartersStatus.inactive.length }} inactive</a> <span ng-if="!chartersStatus.inactive.length">0 inactive</span> and <a ng-if="chartersStatus.expired.length" ng-click="go(\'expired\')">{{ chartersStatus.expired.length }} expired</a> <span ng-if="!chartersStatus.expired.length">0 expired</span> . </div> </div> <!-- message \'No charters selected\' --> <div class="charter-message" ng-hide="isPresentCharters()"> <div class="title">No charters selected</div> <div class="message"> To start, please add charter(s) of interest <br> in the context panel on the left. </div> </div> </div> </div> </div> </div>')}]);
module.exports = 'charter.summary.html';
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],160:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

require('../charters/common/views/charters.tpl.html');

require('../charters/common/views/charters-brand.html');

require('../charters/common/views/charters-top-navigation.html');

var _modulesContext = require('modules/context');

var _modulesContext2 = _interopRequireDefault(_modulesContext);

var _chartersSummary = require('../charters/summary');

var _chartersSummary2 = _interopRequireDefault(_chartersSummary);

var _chartersCommonControllersChartersController = require('../charters/common/controllers/charters.controller');

var _chartersCommonControllersChartersController2 = _interopRequireDefault(_chartersCommonControllersChartersController);

var _chartersCommonControllersNavigationController = require('../charters/common/controllers/navigation.controller');

var _chartersCommonControllersNavigationController2 = _interopRequireDefault(_chartersCommonControllersNavigationController);

var _chartersCharter = require('../charters/charter');

var _chartersCharter2 = _interopRequireDefault(_chartersCharter);

var _componentsAppContextService = require('components/app-context-service');

var _componentsAppContextService2 = _interopRequireDefault(_componentsAppContextService);

var _chartersAnalytics = require('../charters/analytics');

var _chartersAnalytics2 = _interopRequireDefault(_chartersAnalytics);

var _componentsEntitiesService = require('components/entities-service');

var _componentsEntitiesService2 = _interopRequireDefault(_componentsEntitiesService);

var _chartersCharterTable = require('../charters/charter-table');

var _chartersCharterTable2 = _interopRequireDefault(_chartersCharterTable);

var _componentsAccountService = require('components/account-service');

var _componentsAccountService2 = _interopRequireDefault(_componentsAccountService);

var moduleName = 'abiliton.clientCharters';

angular.module(moduleName, [_modulesContext2['default'], _chartersSummary2['default'], _chartersCharter2['default'], _componentsAppContextService2['default'], _chartersAnalytics2['default'], _componentsEntitiesService2['default'], _chartersCharterTable2['default'], _componentsAccountService2['default'], 'ui.router', 'roles']).config(["$stateProvider", function ($stateProvider) {
  $stateProvider.state('charters', {
    url: '/charters?period&selectedEntities&uncheckedEntities',
    redirectTo: 'charters.analytics',
    data: {
      type: 'charter',
      isPresentSearchInfo: true,
      isPresentSearchBrowse: true,
      isPresentAlarmIcon: true
    },
    views: {
      content: {
        templateUrl: 'charters.tpl.html',
        controller: _chartersCommonControllersChartersController2['default']
      },
      context: {
        templateUrl: 'context.html',
        controller: 'ContextCtrl'
      },
      brand: {
        templateUrl: "charters-brand.html"
      },
      "top-navigation": {
        templateUrl: "charters-top-navigation.html",
        controller: _chartersCommonControllersNavigationController2['default']
      }
    }
  });
}]);

exports['default'] = moduleName;
module.exports = exports['default'];

},{"../charters/analytics":95,"../charters/charter":131,"../charters/charter-table":100,"../charters/common/controllers/charters.controller":142,"../charters/common/controllers/navigation.controller":143,"../charters/common/views/charters-brand.html":144,"../charters/common/views/charters-top-navigation.html":145,"../charters/common/views/charters.tpl.html":146,"../charters/summary":158,"components/account-service":11,"components/app-context-service":12,"components/entities-service":23,"modules/context":164}],161:[function(require,module,exports){
(function (global){
(typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null).module('src/app/index.js').run(['$templateCache', function($templateCache){$templateCache.put('pivot-cell-template.html','<div class="ui-grid-cell-value" ng-class="{ \'active\': col.sort.direction }" ng-bind-html="grid.appScope.highlight(COL_FIELD, col.filters[0].term)"></div>')}]);
module.exports = 'pivot-cell-template.html';
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],162:[function(require,module,exports){
(function (global){
(typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null).module('src/app/index.js').run(['$templateCache', function($templateCache){$templateCache.put('pivot-header-cell-template.html','<div role="columnheader" class="{{ col.displayName }}" ng-class="{ \'sortable\': sortable }" ui-grid-one-bind-aria-labelledby-grid="col.uid + \'-header-text \' + col.uid + \'-sortdir-text\'"> <span class="ui-grid-header-cell-label ui-grid-header-title" ng-class="{ \'active\': col.sort.direction }" ui-grid-one-bind-id-grid="col.uid + \'-header-text\'"> {{ col.displayName }} </span> <span role="button" tabindex="0" class="ui-grid-cell-contents ui-grid-sort" col-index="renderIndex" ng-show="!col.colDef.hideHeaderControls" title="TOOLTIP"> <span ui-grid-one-bind-id-grid="col.uid + \'-sortdir-text\'" ui-grid-visible="col.sort.direction" aria-label="{{ getSortDirectionAriaLabel() }}"> <i class="ui-grid-icon" ng-class="{ \'ui-grid-icon-down-dir\': col.sort.direction == asc, \'ui-grid-icon-up-dir\': col.sort.direction == desc, \'ui-grid-icon-blank\': !col.sort.direction }" aria-hidden="true"> </i> </span> </span> <div ui-grid-filter ng-show="!col.colDef.hideHeaderControls"></div> </div>')}]);
module.exports = 'pivot-header-cell-template.html';
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],163:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var ContextCtrl = (function () {
  /*@ngInject*/

  ContextCtrl.$inject = ["$scope", "$state", "$filter", "AppContext", "EntitiesService", "BackDropService"];
  function ContextCtrl($scope, $state, $filter, AppContext, EntitiesService, BackDropService) {
    var _this = this;

    _classCallCheck(this, ContextCtrl);

    this.entitiesService = EntitiesService;
    this.appContext = AppContext;

    this.$state = $state;
    this.$scope = $scope;
    this.$filter = $filter;

    AppContext.resetContext();

    $scope.config = $state.$current.data;
    $scope.searchPanelIsActive = false;
    $scope.periodSelectionIsActive = false;
    $scope.period = AppContext.getPeriod();
    $scope.searchIsLoaded = false;
    $scope.isSearchReload = false;

    var unWatchPeriod = $scope.$watch('period', function (data) {
      if (data && data.preset && data.startDate && data.endDate) {
        AppContext.setPeriod({
          startDate: data.startDate,
          endDate: data.endDate,
          preset: data.preset
        });
      }
    }, true);

    var unWatchSearchResult = $scope.$watch('searchResult', function (data) {
      if (data) {
        AppContext.setSelectedEntities(EntitiesService.serializeContext(data));
        _this._setEntitiesStatus(AppContext.getAllEntities());
      }
    });

    var unWatchContext = $scope.$watch(function () {
      return AppContext.getContext();
    }, function (data) {
      $scope.searchResult = EntitiesService.deSerializeContext(AppContext.getSelectedEntities(), AppContext.getUncheckedEntities());
      $scope.period = AppContext.getPeriod();
    }, true);

    $scope.infoAction = function (id) {
      return _this.infoAction(id);
    };
    $scope.browseAction = function (id) {
      return _this.browseAction(id);
    };

    AppContext.setPromise($scope.config.type, angular.bind(EntitiesService, EntitiesService.getEntitiesData));

    var unWatchBackDrop = $scope.$watch(function () {
      return BackDropService.getBackDropState();
    }, function (data) {
      if (!data) {
        $scope.searchPanelIsActive = !!$state.$current.data.searchPanelIsActive;
      }
    });

    var watchStateData = $scope.$watch(function () {
      return $state.$current.data.searchPanelIsActive;
    }, function (data) {
      return $scope.searchPanelIsActive = !!data;
    });

    var unWatchSearchPanelIsActive = $scope.$watch('searchPanelIsActive', function () {
      return BackDropService.setBackDropState($scope.searchPanelIsActive);
    });

    var unWatchSearchReload = $scope.$watch('isSearchReload', function (data) {
      if (data) {
        $scope.searchIsLoaded = false;
        $scope.isSearchReload = false;
        _this.appContext.setContextLoadedState(false);
        _this.getEntities();
      }
    });

    $scope.$on('$destroy', function () {
      unWatchPeriod();
      unWatchSearchResult();
      unWatchContext();
      unWatchBackDrop();
      watchStateData();
      unWatchSearchPanelIsActive();
      unWatchSearchReload();
    });

    this.getEntities();
  }

  /**
   * Gets entities
   */

  _createClass(ContextCtrl, [{
    key: 'getEntities',
    value: function getEntities() {
      var _this2 = this;

      var type = this.$scope.config.type;
      var promise = this.appContext.getPromise(type);

      if (!promise) {
        this.appContext.setPromise(type, angular.bind(this.entitiesService, this.entitiesService.getEntitiesData));
      }

      this.$scope.searchError = null;

      this.appContext.getPromise(type).then(function (response) {
        _this2.$scope.searchResult = _this2.entitiesService.deSerializeContext(_this2.appContext.getSelectedEntities(), _this2.appContext.getUncheckedEntities());
        _this2.$scope.searchList = _this2.$filter('orderBy')(response.data, 'name');
        _this2.appContext.setContextLoadedState(true);
      }, function (error) {
        _this2.$scope.searchError = error;
        _this2.$scope.searchIsLoaded = true;
        _this2.appContext.setContextLoadedState(true);
      });
    }

    /**
     * Sets entities with theirs status to context
     * @param {Array} selected - selected entities ids
     * @returns {null}
     * @private
     */
  }, {
    key: '_setEntitiesStatus',
    value: function _setEntitiesStatus(selected) {
      var selectedItems = [];
      var searchList = this.$scope.searchList;

      if (!searchList) {
        return null;
      }

      var searchListLen = searchList.length;
      var selectedLen = selected.length;

      if (selectedLen) {
        for (var i = 0; i < selectedLen; i++) {
          for (var j = 0; j < searchListLen; j++) {
            if (searchList[j].id === selected[i]) {
              selectedItems.push(searchList[j]);
              break;
            }
          }
        }
      }

      this.appContext.setEntitiesStatus(this.entitiesService.getEntitiesStatus(selectedLen ? selectedItems : searchList));
    }

    /**
     * Shows info page
     * @param {id} id - entity id
     */
  }, {
    key: 'infoAction',
    value: function infoAction(id) {
      this.$scope.searchPanelIsActive = true;
      this.$state.go('charters.charter.view', { id: id });
    }

    /**
     * Shows browse page
     */
  }, {
    key: 'browseAction',
    value: function browseAction() {
      this.$state.go('charters.simplehierarchy', this.$state.params);
      this.$scope.searchPanelIsActive = true;
    }
  }]);

  return ContextCtrl;
})();

exports['default'] = ContextCtrl;
module.exports = exports['default'];

},{}],164:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

require('./views/context.html');

var _componentsSearch = require('components/search');

var _componentsSearch2 = _interopRequireDefault(_componentsSearch);

var _componentsPeriodSelection = require('components/period-selection');

var _componentsPeriodSelection2 = _interopRequireDefault(_componentsPeriodSelection);

var _componentsEntitiesService = require('components/entities-service');

var _componentsEntitiesService2 = _interopRequireDefault(_componentsEntitiesService);

var _controllersContextController = require('./controllers/context.controller');

var _controllersContextController2 = _interopRequireDefault(_controllersContextController);

var _componentsAppContextService = require('components/app-context-service');

var _componentsAppContextService2 = _interopRequireDefault(_componentsAppContextService);

var _componentsBackDropService = require('components/back-drop-service');

var _componentsBackDropService2 = _interopRequireDefault(_componentsBackDropService);

var _componentsQuarterSelectionIndex = require('components/quarter-selection/index');

var _componentsQuarterSelectionIndex2 = _interopRequireDefault(_componentsQuarterSelectionIndex);

var moduleName = 'abiliton.context';

angular.module(moduleName, [_componentsPeriodSelection2['default'], _componentsEntitiesService2['default'], _componentsAppContextService2['default'], _componentsSearch2['default'], _componentsBackDropService2['default'], _componentsQuarterSelectionIndex2['default'], 'ui.router', 'ui.bootstrap']).controller('ContextCtrl', _controllersContextController2['default']);

exports['default'] = moduleName;
module.exports = exports['default'];

},{"./controllers/context.controller":163,"./views/context.html":165,"components/app-context-service":12,"components/back-drop-service":13,"components/entities-service":23,"components/period-selection":37,"components/quarter-selection/index":43,"components/search":50}],165:[function(require,module,exports){
(function (global){
(typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null).module('src/app/index.js').run(['$templateCache', function($templateCache){$templateCache.put('context.html','<ad-period-selection period="period" is-hidden="searchPanelIsActive" is-active="periodSelectionIsActive" ng-if="config.type === \'team\'"></ad-period-selection> <quarter-selection period="period" is-active="periodSelectionIsActive" is-hidden="searchPanelIsActive" ng-if="config.type === \'charter\'"></quarter-selection> <ad-search data="searchList" result="searchResult" search-panel-is-active="searchPanelIsActive" config="config" info-action="infoAction(id)" browse-action="browseAction()" error="searchError" search-loading="searchIsLoaded" reload="isSearchReload" is-need-resize="periodSelectionIsActive"></ad-search>')}]);
module.exports = 'context.html';
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],166:[function(require,module,exports){
'use strict';

/*@ngInject*/
Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var IndexCtrl = (function () {
  function IndexCtrl($scope, $timeout, AbilitonDashboardService, AppContext, id) {
    _classCallCheck(this, IndexCtrl);

    this.scope = $scope;
    this.$timeout = $timeout;
    this.Service = AbilitonDashboardService;
    this.appContext = AppContext;
    this.appInitialized = false;
    this.trendLegend = null;

    $scope.trendDataIsLoaded = false;
    $scope.spiderDataIsLoaded = false;

    this.metric = {
      id: id,
      defaultCollor: '#b3b3b3',
      spiderConfig: {
        metric_ids: '',
        def_team_ids: '',
        entity_ids: '',
        on_date: null,
        type: ['composite']
      }
    };

    this.initializeMetricStructure();
  }

  _createClass(IndexCtrl, [{
    key: 'getTrendConfig',
    value: function getTrendConfig() {
      var period = this.appContext.getPeriod();

      return {
        force_plain_values: 'true',
        metric_ids: this.getMetricIds(true).map(function (value) {
          return value.id;
        }).join(),
        entity_ids: this.appContext.getSelectedEntities().join() || '',
        start_date: period.startDate.getTime(),
        end_date: period.endDate.getTime()
      };
    }
  }, {
    key: 'initializeMetricStructure',
    value: function initializeMetricStructure() {
      var _this = this;

      this.Service.getMetricStructure({
        id: this.metric.id,
        recurse: false,
        includeRoot: true
      }).then(function (res) {
        _this.trendLegend = _this.createLegendData(res.data.metrics.composite);
        _this.scope.structure = res.data;
        _this.scope.components = _this.getMetricIds();
        _this.metric.spiderConfig.metric_ids = _this.getMetricIds(true);
        _this.appInitialized = true;
        _this.initializeHandlers();
      });
    }
  }, {
    key: 'initializeHandlers',
    value: function initializeHandlers() {
      var _this2 = this;

      var timeoutPromise = undefined;
      var delay = 300;

      var unwatch = this.scope.$watch(function () {
        return _this2.appContext.getContext();
      }, function (data) {

        _this2.scope.trendDataIsLoaded = false;
        _this2.scope.spiderDataIsLoaded = false;

        if (_this2.appInitialized && data && data.selectedEntities && data.selectedEntities.length) {
          _this2.$timeout.cancel(timeoutPromise);

          timeoutPromise = _this2.$timeout(function () {
            return _this2.initializeData();
          }, delay);
        } else {
          _this2.setSpiderData({
            data: {
              values: {}
            }
          });
          _this2.setTrendData({ data: [] });
        }
      }, true);

      this.scope.$on("$destroy", function () {
        return unwatch();
      });
    }
  }, {
    key: 'initializeData',
    value: function initializeData() {
      var _this3 = this;

      var config = this.metric.spiderConfig;
      var period = this.appContext.getPeriod();

      if (!period.startDate && !period.endDate) {
        return null;
      }

      config.entity_ids = this.appContext.getSelectedEntities().join() || config.def_team_ids;
      config.on_date = this.appContext.getPeriod().endDate.getTime();

      this.Service.getSpiderData(config).then(function (res) {
        return _this3.setSpiderData(res.data);
      });

      this.Service.getMetricData(this.getTrendConfig()).then(function (res) {
        return _this3.setTrendData(res.data);
      });
    }

    /**
     * Prepares data object for Spider chart
     * @param {Object} data - data from "/metrics-on-date" API
     *    Data example:
     *      {
     *        "index_thresholds": { "yellow": 0.8, "red": 0.6 },
     *        "data": {
     *          "on_date": 1438300800000,
     *          "values": {
     *            "48": 0.926635884361832,
     *            "52": 0.6103929238269915,
     *            "44": 0.597565459341647
     *          }
     *        }
     *      }
     * @returns {Object}
     */
  }, {
    key: 'setSpiderData',
    value: function setSpiderData(res) {
      var average = undefined;
      var values = {};
      var resValues = res.data.values;

      for (var key in resValues) {
        if (resValues.hasOwnProperty(key)) {
          if (this.metric.id === +key) {
            average = resValues[key];

            continue;
          }

          values[key] = resValues[key];
        }
      }

      this.scope.spiderData = {
        on_date: res.data.on_date,
        average: average,
        values: values,
        index_thresholds: res.index_thresholds
      };

      this.scope.spiderDataIsLoaded = true;
    }
  }, {
    key: 'createLegendData',
    value: function createLegendData(childMetrics) {
      var _this4 = this;

      var legend = {};

      angular.forEach(childMetrics, function (value) {
        legend[value.id] = {
          color: value.color ? '#' + value.color : _this4.metric.defaultCollor,
          name: value.name
        };
      });

      return legend;
    }
  }, {
    key: 'getMetricIds',
    value: function getMetricIds(withMainMatric) {
      var _this5 = this;

      var ids = [];

      angular.forEach(this.metric.spiderConfig.type, function (type) {
        _this5.scope.structure.metrics[type].map(function (metric) {
          if (metric.id !== +_this5.metric.id || withMainMatric) {
            ids.push({ id: metric.id, name: metric.name });
          }
        });
      });

      return ids;
    }

    /**
     * Prepares data object for Trend Index chart
     * @param {Object} data - data from "/metrics" API
     *    Data example:
     *      {
     *        "index_thresholds": { "yellow": 0.8, "red": 0.6 },
     *        "limit_values": {
     *          "Index": { "max": 0.926635884361832, "min": 0.5402230665804234 }
     *        },
     *        "data_availability": {
     *          "48": "available",
     *          "52": "available",
     *          "44": "available"
     *        },
     *        "data": [{
     *          "date": 1430438400000,
     *          "values": { "48": null, "44": 0.833333333333333, "52": 0.826418439716312 }
     *        }, {
     *          "date": 1430611200000,
     *          "values": { "48": null, "44": 0.833333333333333, "52": 0.826418439716312 }
     *        }]
     *      }
     * @returns {Object}
     */
  }, {
    key: 'setTrendData',
    value: function setTrendData(data) {
      var _isDataAvalible = function _isDataAvalible(availability) {
        var dataExists = false;

        if (availability) {
          for (var key in availability) {
            if (availability.hasOwnProperty(key) && availability[key] === 'available') {
              dataExists = true;
              break;
            }
          }
        }

        return dataExists;
      };

      this.scope.trendData = {
        id: this.metric.id,
        legend: this.trendLegend,
        dataExists: _isDataAvalible(data.data_availability),
        metrics: data.data,
        index_thresholds: data.index_thresholds
      };

      this.scope.trendDataIsLoaded = true;
    }
  }, {
    key: '_isDifferentTeams',
    value: function _isDifferentTeams(newTeams, oldTeams) {
      return newTeams.length > 0 || oldTeams.length > 0 || newTeams.length !== oldTeams.length;
    }
  }, {
    key: '_userHasNoTeams',
    value: function _userHasNoTeams() {
      var state = this.appContext.getEntitiesAvailability();

      return angular.isDefined(state) && !state;
    }
  }, {
    key: '_teamsAreCleared',
    value: function _teamsAreCleared(teams) {
      return teams.length === 0 && this.appContext.getEntitiesAvailability();
    }
  }]);

  return IndexCtrl;
})();

exports['default'] = IndexCtrl;
module.exports = exports['default'];

},{}],167:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var MetricsAnalysisCtrl = (function () {
  function MetricsAnalysisCtrl($scope, $timeout, AbilitonDashboardService, AppContext, id) {
    _classCallCheck(this, MetricsAnalysisCtrl);

    this.$timeout = $timeout;
    this.appContext = AppContext;
    this.appInitialized = false;

    $scope.metricAnalisisDataIsLoaded = false;

    this.metric = {
      id: id,
      config: {
        metric_ids: null,
        def_team_ids: '',
        entity_ids: null,
        start_date: null,
        end_date: null,
        type: ['source', 'calculated', 'KPI'],
        state: {
          available: 'available',
          notAvailable: 'not_available',
          notApplicable: 'not_applicable'
        }
      }
    };
    this.customPreset = { id: 'custom', type: null, checked: [], legacyId: null };

    this.scope = $scope;
    this.Service = AbilitonDashboardService;

    this.initializeMetricStructure();
  }

  /*init () {
    let unwatch = this.scope.$watch(
      () => this.appContext.getSelectedEntities(),
      (newTeams, oldTeams) => {
        if (this._isDifferentTeams(newTeams, oldTeams) || this._userHasNoTeams() || this._teamsAreCleared(newTeams)) {
          this.initializeMetricStructure();
           unwatch();
        }
      },
      true
    );
  }*/

  _createClass(MetricsAnalysisCtrl, [{
    key: 'initializeMetricStructure',
    value: function initializeMetricStructure() {
      var _this = this;

      this.Service.getMetricStructure({ id: this.metric.id }).then(function (res) {
        _this.scope.structure = res.data;
        _this.metric.config.metric_ids = _this.getMetricIds().join();

        _this.initializeHandlers();
        _this.appInitialized = true;
      });
    }
  }, {
    key: 'initializeData',
    value: function initializeData() {
      var _this2 = this;

      var scope = this.scope;
      var config = this.metric.config;
      var period = this.appContext.getPeriod();

      if (!period.startDate && !period.endDate) {
        return null;
      }

      scope.chartData = null;

      config.start_date = period.startDate.getTime();
      config.end_date = period.endDate.getTime();
      config.entity_ids = this.appContext.getSelectedEntities().join() || config.def_team_ids;

      this.Service.getMetricData(config).then(function (res) {
        var preset = scope.selectedPreset || scope.structure.kpi_presets[0];

        scope.data = res.data;

        _this2.initializePreset(preset);
      });
    }
  }, {
    key: 'initializePreset',
    value: function initializePreset(preset) {
      var scope = this.scope;

      scope.selectedPreset = angular.copy(preset);
      scope.metrics = this.getMetrics();
      scope.selectedScale = this.getScale();
      scope.chartData = {
        units: scope.data.limit_values,
        values: scope.data.data,
        kpi_thresholds: scope.data.kpi_thresholds,
        data_availability: scope.data.data_availability,
        multiple_teams: this._isMultipleTeams()
      };

      this.scope.metricAnalisisDataIsLoaded = true;
    }
  }, {
    key: 'initializeHandlers',
    value: function initializeHandlers() {
      var _this3 = this;

      var scope = this.scope;

      scope.triggerMetric = function ($event, id, metricType) {
        return _this3._triggerMetric($event, id, metricType);
      };
      scope.triggerScale = function ($event, id) {
        return _this3._triggerScale(id);
      };
      scope.triggerPreset = function (id) {
        return _this3._triggerPreset(id);
      };
      scope.isSelected = function (id) {
        return _this3._isSelected(id);
      };
      scope.isDisabled = function (id) {
        return _this3._isDisabled(id);
      };
      scope.isPresent = function (id) {
        return _this3._isPresent(id);
      };
      scope.isKpiDisabled = function (id) {
        return !_this3._isAvailable(id);
      };
      scope.isDataAvailable = function () {
        return _this3._isDataAvailable();
      };

      var timeoutPromise = undefined;
      var delay = 300;

      var unwatch = scope.$watch(function () {
        return _this3.appContext.getContext();
      }, function (data) {
        _this3.scope.metricAnalisisDataIsLoaded = false;

        if (_this3.appInitialized && data && data.selectedEntities && data.selectedEntities.length) {
          _this3.$timeout.cancel(timeoutPromise);

          timeoutPromise = _this3.$timeout(function () {
            return _this3.initializeData();
          }, delay);
        } else {
          _this3._setNoData();
        }
      }, true);

      scope.$on("$destroy", function () {
        return unwatch();
      });
    }

    /**
     *  Sets empty data to Metrics Analysis chart if no teams selected
     */
  }, {
    key: '_setNoData',
    value: function _setNoData() {
      this.scope.selectedPreset = angular.copy(this.scope.selectedPreset || this.scope.structure.kpi_presets[0]);

      this.scope.metrics = this.getMetrics();
      this.scope.selectedScale = this.getScale();

      this.scope.data = {};
      this.scope.chartData = {
        units: {},
        values: [],
        data_availability: {},
        multiple_teams: false
      };

      this.scope.metricAnalisisDataIsLoaded = true;
    }
  }, {
    key: 'getMetric',
    value: function getMetric(params) {
      if (!params) {
        return null;
      }

      var source = params.data[params.metricType];
      var result = null;

      for (var i = 0, len = source.length; i < len; i++) {
        if (source[i].id === params.id) {
          result = source[i];
          break;
        }
      }

      return result;
    }
  }, {
    key: 'getMetrics',
    value: function getMetrics() {
      var checked = this.scope.selectedPreset.checked;
      var structure = this.scope.structure;
      var metrics = {
        source: angular.copy(structure.metrics.source),
        calculated: angular.copy(structure.metrics.calculated),
        KPI: angular.copy(structure.metrics.KPI)
      };

      for (var i = 0, len = checked.length; i < len; i++) {
        var metric = this.getMetric({
          id: checked[i].id,
          metricType: checked[i].type,
          data: metrics
        });

        metric.visible = true;
      }

      return metrics;
    }
  }, {
    key: 'getMetricIds',
    value: function getMetricIds() {
      var _this4 = this;

      var ids = [];

      angular.forEach(this.metric.config.type, function (type) {
        ids = ids.concat(_this4.scope.structure.metrics[type].map(function (metric) {
          return metric.id;
        }));
      });

      return ids;
    }
  }, {
    key: 'changeVisibility',
    value: function changeVisibility(params) {
      if (!params) {
        return null;
      }

      this.scope.metrics = angular.copy(params.data);
      params.data = this.scope.metrics;

      var metric = this.getMetric(params);

      metric.visible = params.visible;
    }
  }, {
    key: 'getScale',
    value: function getScale() {
      var metricType = this.scope.selectedPreset.type;
      var metrics = this.scope.metrics[metricType];
      var id = this.scope.selectedPreset.legacyId || this.scope.selectedPreset.id;

      for (var i = 0, len = metrics.length; i < len; i++) {
        if (metrics[i].id === id) {
          return metrics[i].unit;
        }
      }

      return '';
    }
  }, {
    key: 'setCustomPreset',
    value: function setCustomPreset(id, metricType, checked) {
      var selectedPreset = this.scope.selectedPreset;
      var customPreset = this.customPreset;

      customPreset.checked = angular.copy(selectedPreset.checked);
      customPreset.legacyId = selectedPreset.legacyId || selectedPreset.id;
      customPreset.type = selectedPreset.type;

      if (checked) {
        customPreset.checked.push({ id: id, type: metricType });
      } else {
        for (var i = 0, len = customPreset.checked.length; i < len; i++) {
          if (customPreset.checked[i].id === id) {
            customPreset.checked.splice(i, 1);

            break;
          }
        }
      }

      this.scope.selectedPreset = customPreset;
    }
  }, {
    key: '_triggerScale',
    value: function _triggerScale(id) {
      if (!id) {
        return null;
      }

      var units = this.scope.structure.units;

      for (var i = 0, len = units.length; i < len; i++) {
        if (units[i] === id) {
          this.scope.selectedScale = units[i];

          return null;
        }
      }
    }
  }, {
    key: '_triggerMetric',
    value: function _triggerMetric($event, id, metricType) {
      if (!id) {
        return null;
      }

      var checked = $event.currentTarget.checked;

      this.changeVisibility({
        id: id,
        visible: checked,
        metricType: metricType,
        data: this.scope.metrics
      });

      this.setCustomPreset(id, metricType, checked);
    }
  }, {
    key: '_isSelected',
    value: function _isSelected(id) {
      if (this.scope.selectedPreset) {
        return this.scope.selectedPreset.id === id;
      }

      return null;
    }
  }, {
    key: '_triggerPreset',
    value: function _triggerPreset(id) {
      var presets = this.scope.structure.kpi_presets;

      for (var i = 0, len = presets.length; i < len; i++) {
        if (presets[i].id === id) {
          this.initializePreset(presets[i]);
          break;
        }
      }

      return null;
    }
  }, {
    key: '_isDisabled',
    value: function _isDisabled(id) {
      if (id) {
        return this._isMultipleTeams() || !this._isAvailable(id);
      }

      return this._isMultipleTeams();
    }
  }, {
    key: '_isPresent',
    value: function _isPresent(id) {
      if (this.scope.chartData) {
        return this._hasUnit(id);
      }

      return false;
    }
  }, {
    key: '_hasUnit',
    value: function _hasUnit(id) {
      return this.scope.chartData.units && this.scope.chartData.units[id] !== undefined;
    }
  }, {
    key: '_isAvailable',
    value: function _isAvailable(id) {
      if (this.scope.data && this.scope.data.data_availability) {
        return this.scope.data.data_availability[id] === this.metric.config.state.available;
      }

      return false;
    }
  }, {
    key: '_isMultipleTeams',
    value: function _isMultipleTeams() {
      return this.metric.config.team_ids && this.metric.config.team_ids.split(',').length > 1;
    }
  }, {
    key: '_isDataAvailable',
    value: function _isDataAvailable() {
      var availability = this.scope.data.data_availability;

      for (var id in availability) {
        if (availability.hasOwnProperty(id)) {
          if (this._isAvailable(id)) {
            return true;
          }
        }
      }

      return false;
    }
  }, {
    key: '_isDifferentTeams',
    value: function _isDifferentTeams(newTeams, oldTeams) {
      return newTeams.length > 0 || oldTeams.length > 0 || newTeams.length !== oldTeams.length;
    }
  }, {
    key: '_userHasNoTeams',
    value: function _userHasNoTeams() {
      var state = this.appContext.getEntitiesAvailability();

      return angular.isDefined(state) && !state;
    }
  }, {
    key: '_teamsAreCleared',
    value: function _teamsAreCleared(teams) {
      return teams.length === 0 && this.appContext.getEntitiesAvailability();
    }
  }]);

  return MetricsAnalysisCtrl;
})();

exports['default'] = MetricsAnalysisCtrl;
module.exports = exports['default'];

},{}],168:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var moduleName = 'ad.service';

var AbilitonDashboardService = (function () {
  function AbilitonDashboardService($http) {
    _classCallCheck(this, AbilitonDashboardService);

    this.$http = $http;
  }

  _createClass(AbilitonDashboardService, [{
    key: 'getMetricStructure',
    value: function getMetricStructure(config) {
      if (!config) {
        return null;
      }

      return this.$http.get('/api/metric-structure', {
        params: {
          metric: config.id,
          recurse: config.recurse === undefined ? true : config.recurse,
          'include-root': config.includeRoot || false
        }
      });
    }
  }, {
    key: 'getMetricData',
    value: function getMetricData(config) {
      if (!config) {
        return null;
      }

      return this.$http.get('/api/metrics', {
        params: {
          metric_ids: config.metric_ids,
          entity_ids: config.entity_ids,
          start_date: config.start_date,
          end_date: config.end_date,
          force_plain_values: config.force_plain_values || false
        }
      });
    }
  }, {
    key: 'getSpiderData',
    value: function getSpiderData(config) {
      if (!config) {
        return null;
      }

      var ids = config.metric_ids.map(function (metric) {
        return metric.id;
      });

      return this.$http.get('/api/metrics-on-date', {
        params: {
          metric_ids: ids.join(),
          entity_ids: config.entity_ids,
          on_date: config.on_date
        }
      });
    }
  }], [{
    key: 'serviceFactory',
    value: function serviceFactory($http) {
      return new AbilitonDashboardService($http);
    }
  }]);

  return AbilitonDashboardService;
})();

AbilitonDashboardService.serviceFactory.$inject = ['$http'];

angular.module(moduleName, []).factory('AbilitonDashboardService', AbilitonDashboardService.serviceFactory);

exports['default'] = moduleName;
module.exports = exports['default'];

},{}],169:[function(require,module,exports){
(function (global){
(typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null).module('src/app/index.js').run(['$templateCache', function($templateCache){$templateCache.put('metrics-analysis.html','<ul class="panel-heading-controls"> <li ng-class="{ \'active\': isSelected(preset.id) }" ng-repeat="preset in structure.kpi_presets"> <a ng-click="triggerPreset(preset.id)">{{ preset.name }}</a> </li> <li ng-class="{ \'active\': isSelected(\'custom\') }"> <a>Custom</a> </li> </ul> <div class="barchart-controls"> <div class="barchart-wrapper" ng-show="metricAnalisisDataIsLoaded"> <metric-analysis data="chartData" scale="selectedScale" metrics="metrics"> </div> <!-- Chart loading Incicator --> <div class="ad-loading ad-loading-lg ad-loading-metricsanalysis" ng-hide="metricAnalisisDataIsLoaded"> <div class="loading-img"></div> </div> <!-- END Chart loading Incicator --> <div class="col-xs-3" ng-show="metricAnalisisDataIsLoaded"> <h4> Source Metrics </h4> <div ng-repeat="metric in metrics.source" ng-mouseleave="isOpen = false"> <span uib-popover-template="\'metrics-analysis-popover.html\'" popover-placement="right" popover-is-open="isOpen" popover-append-to-body="false"> <input type="checkbox" class="ad-checkbox" id="metric-{{ metric.id }}" ng-checked="metric.visible" ng-disabled="isDisabled(metric.id)" ng-click="triggerMetric($event, metric.id, \'source\')"> <label for="metric-{{ metric.id }}"> <span ng-mouseover="isOpen = false" class="barchart-indicator color opacity50" style="background-color: #{{ metric.color }}"></span> <span class="clickablePopover" ng-mouseover="isOpen = true"> {{ metric.name }} </span> </label> </span> </div> <div ng-hide="metrics.source.length"> <label>No metrics</label> </div> </div> <div class="col-xs-3" ng-show="metricAnalisisDataIsLoaded"> <h4> Derived Metrics </h4> <div ng-repeat="metric in metrics.calculated" ng-mouseleave="isOpen = false"> <span uib-popover-template="\'metrics-analysis-popover.html\'" popover-placement="right" popover-is-open="isOpen" popover-append-to-body="false"> <input type="checkbox" class="ad-checkbox" id="metric-{{ metric.id }}" ng-checked="metric.visible" ng-disabled="isDisabled(metric.id)" ng-click="triggerMetric($event, metric.id, \'calculated\')"> <label for="metric-{{ metric.id }}"> <span ng-mouseover="isOpen = false" class="barchart-indicator marker marker-striped marker-{{ metric.marker }}-striped" style="background-color: #{{ metric.color }}"></span> <span ng-mouseover="isOpen = true"> {{ metric.name }} </span> </label> </span> </div> <div ng-hide="metrics.calculated.length"> <label>No metrics</label> </div> </div> <div class="col-xs-3" ng-show="metricAnalisisDataIsLoaded"> <h4> KPI </h4> <div ng-repeat="metric in metrics.KPI" ng-mouseleave="isOpen = false"> <span uib-popover-template="\'metrics-analysis-popover.html\'" popover-placement="right" popover-is-open="isOpen" popover-append-to-body="false"> <input type="checkbox" class="ad-checkbox" id="metric-{{ metric.id }}" ng-checked="metric.visible" ng-disabled="isKpiDisabled(metric.id)" ng-click="triggerMetric($event, metric.id, \'KPI\')"> <label for="metric-{{ metric.id }}"> <span ng-mouseover="isOpen = false" class="barchart-indicator marker marker-solid marker-{{ metric.marker }}-solid" style="background-color: #{{ metric.color }}"></span> <span ng-mouseover="isOpen = true"> {{ metric.name }} </span> </label> </span> </div> <div ng-hide="metrics.KPI.length"> <label>No metrics</label> </div> </div> <div class="col-xs-3" ng-show="metricAnalisisDataIsLoaded"> <h4> Vertical Scale </h4> <div ng-repeat="unit in structure.units | orderBy"> <input type="radio" class="ad-radio" id="{{ unit }}" name="verticalScale" ng-checked="unit === selectedScale" ng-disabled="!isPresent(unit) || !isDataAvailable()" ng-click="triggerScale($event, unit)"> <label for="{{ unit }}"> <span class="barchart-indicator"></span> {{ unit }} </label> </div> </div> </div> <!-- Popover template --> <script type="text/ng-template" id="metrics-analysis-popover.html"><a href="{{ metric.doc_url }}" target="_blank">{{ metric.hint }}</a></script>')}]);
module.exports = 'metrics-analysis.html';
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],170:[function(require,module,exports){
'use strict';

/*@ngInject*/
Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var DashboardCtrl = (function () {
  function DashboardCtrl($scope, $timeout, DashboardService, AppContext) {
    var _this = this;

    _classCallCheck(this, DashboardCtrl);

    this.scope = $scope;
    this.$timeout = $timeout;
    this.dashboardService = DashboardService;
    this.appContext = AppContext;

    this.data = [{
      order: 1,
      id: 44,
      name: 'Productivity'
    }, {
      order: 2,
      id: 48,
      name: 'Quality'
    }, {
      order: 3,
      id: 52,
      name: 'Predictability'
    }];

    this.scope.thresholds = {
      red: 0.6,
      yellow: 0.8
    };

    this.cfg = {
      listViewLength: 6,
      viewInTop: 3,
      viewInBottom: 3
    };

    this.scope.chartConfig = { thresholds: 'index' };

    $scope.selectTeam = function (id) {
      return _this._selectTeam(id);
    };

    $scope.$watch(function () {
      return _this.appContext.getContextLoadedState();
    }, function (data) {
      return data && _this.initializeHandlers();
    });
  }

  _createClass(DashboardCtrl, [{
    key: 'getMetricConfig',
    value: function getMetricConfig() {
      var period = this.appContext.getPeriod();

      return {
        force_plain_values: true,
        metric_ids: '44,48,52',
        entity_ids: this.appContext.getSelectedEntities().join() || '',
        start_date: period.startDate.getTime(),
        end_date: period.endDate.getTime()
      };
    }
  }, {
    key: 'getContributorsConfig',
    value: function getContributorsConfig() {
      return {
        metric_ids: '44,48,52',
        entity_ids: this.appContext.getSelectedEntities().join() || '',
        on_date: this.appContext.getPeriod().endDate.getTime()
      };
    }
  }, {
    key: 'setLoadingFlagsTo',
    value: function setLoadingFlagsTo(state) {
      this.scope.doughnutDataIsLoaded = state;
      this.scope.contributorsDataIsLoaded = state;
      this.scope.indexTrendDataIsLoaded = state;
    }
  }, {
    key: 'initializeHandlers',
    value: function initializeHandlers() {
      var _this2 = this;

      var timeoutPromise = undefined;
      var delay = 300;

      var unwatch = this.scope.$watch(function () {
        return _this2.appContext.getContext();
      }, function (data) {
        _this2.setLoadingFlagsTo(false);

        if (data && _this2._isPresentTeams()) {
          _this2.$timeout.cancel(timeoutPromise);

          timeoutPromise = _this2.$timeout(function () {
            _this2.initializeData();
          }, delay);
        } else {
          _this2.setLoadingFlagsTo(true);

          _this2.setTrendNoData();
          _this2.setDoughnutNoData();
          _this2.setContributorsNoData();
        }
      }, true);

      this.scope.$on("$destroy", function () {
        return unwatch();
      });
    }
  }, {
    key: 'initializeData',
    value: function initializeData() {
      var _this3 = this;

      var period = this.appContext.getPeriod();

      if (!period.startDate && !period.endDate) {
        return null;
      }

      this.dashboardService.getMetricOnDateData(this.getContributorsConfig()).then(function (res) {
        _this3.scope.doughnutDataIsLoaded = true;

        _this3.setDoughnutData(res.data);
      }, function (error) {
        return _this3.scope.doughnutDataIsLoaded = true;
      });

      this.dashboardService.getContributorsData(this.getContributorsConfig()).then(function (res) {
        _this3.scope.contributorsDataIsLoaded = true;

        _this3.setContributorsData(res.data);
      }, function (error) {
        return _this3.scope.contributorsDataIsLoaded = true;
      });

      this.dashboardService.getMetricData(this.getMetricConfig()).then(function (res) {
        _this3.scope.indexTrendDataIsLoaded = true;

        _this3.setIndexTrendData(res.data);
      }, function (error) {
        return _this3.scope.indexTrendDataIsLoaded = true;
      });
    }

    /**
     * Prepares data for Doughnut charts
     * @param {Object} res - data from "/metrics-on-date" API
     *    Data example:
     *      {
     *        "index_thresholds": { "yellow": 0.8, "red": 0.6 },
     *        "data": {
     *          "on_date": 1438300800000,
     *          "values": {
     *            "48": 0.926635884361832,
     *            "52": 0.6103929238269915,
     *            "44": 0.597565459341647
     *          }
     *        }
     *      }
     * @returns {null}
     */
  }, {
    key: 'setDoughnutData',
    value: function setDoughnutData(res) {
      var values = res.data.values;

      if (!values && values !== 0) {
        this.setDoughnutNoData();

        return null;
      }

      this.data.forEach(function (obj) {
        return obj.doughnut = { value: values[obj.id], thresholds: res.index_thresholds };
      });
    }

    /**
     * Prepares data object for Small Trend Index chart
     * @param {Object} trendData - data from "/metrics" API
     *    Data example:
     *      {
     *        "index_thresholds": { "yellow": 0.8, "red": 0.6 },
     *        "limit_values": {
     *          "Index": { "max": 0.926635884361832, "min": 0.5402230665804234 }
     *        },
     *        "data_availability": {
     *          "48": "available",
     *          "52": "available",
     *          "44": "available"
     *        },
     *        "data": [{
     *          "date": 1430438400000,
     *          "values": { "48": null, "44": 0.833333333333333, "52": 0.826418439716312 }
     *        }, {
     *          "date": 1430611200000,
     *          "values": { "48": null, "44": 0.833333333333333, "52": 0.826418439716312 }
     *        }]
     *      }
     * @returns {Object}
     */
  }, {
    key: 'setIndexTrendData',
    value: function setIndexTrendData(trendData) {
      if (!trendData) {
        this.setTrendNoData();

        return null;
      }

      this.data.forEach(function (obj) {
        obj.indexTrend = {
          data: [],
          index_thresholds: trendData.index_thresholds
        };

        if (trendData.data_availability.hasOwnProperty(obj.id) && trendData.data_availability[obj.id] === 'available') {
          trendData.data.forEach(function (dataObj) {
            obj.indexTrend.data.push({
              date: dataObj.date,
              index: dataObj.values[obj.id]
            });
          });
        }
      });
    }
  }, {
    key: 'setDoughnutNoData',
    value: function setDoughnutNoData() {
      this.data.forEach(function (obj) {
        obj.doughnut = { value: null };
      });
    }
  }, {
    key: 'setTrendNoData',
    value: function setTrendNoData() {
      this.data.forEach(function (obj) {
        obj.indexTrend = {
          data: [],
          index_thresholds: {}
        };
      });
    }

    /**
     * Prepares data object for Contributors widget
     * @param {Object} contributors - data from "/index-contributors" API
     *    Data example:
     *      {
     *        "48": [
     *          { "value": 0.853271768723664, "name": "Abiliton Dashboard Development" },
     *          { "value": 1.0, "name": "TM" }
     *        ],
     *        "52": [
     *          { "value": 0.609674736542872, "name": "Abiliton Dashboard Development" },
     *          { "value": 0.611111111111111, "name": "TMD" }
     *        ],
     *        "44": [
     *          { "value": 0.597565459341647, "name": "Abiliton Dashboard Development" }
     *        ]
     *      }
     * @returns {null}
     */
  }, {
    key: 'setContributorsData',
    value: function setContributorsData(contributors) {
      this.data.forEach(function (obj) {
        if (contributors.data.hasOwnProperty(obj.id)) {
          obj.contributors = contributors.data[obj.id] || [];
        }
      });

      this.contributorsThresholds = contributors.index_thresholds || this.scope.thresholds;
    }
  }, {
    key: 'setContributorsNoData',
    value: function setContributorsNoData() {
      this.data.forEach(function (obj) {
        return obj.contributors = [];
      });
    }
  }, {
    key: '_isDifferentTeams',
    value: function _isDifferentTeams(newTeams, oldTeams) {
      return newTeams.length > 0 || oldTeams.length > 0 || newTeams.length !== oldTeams.length;
    }
  }, {
    key: '_userHasNoTeams',
    value: function _userHasNoTeams() {
      var state = this.appContext.getEntitiesAvailability();

      return angular.isDefined(state) && !state;
    }
  }, {
    key: '_teamsAreCleared',
    value: function _teamsAreCleared(teams) {
      return teams.length === 0 && this.appContext.getEntitiesAvailability();
    }

    /**
     * Selects Team by clicking on Contributors
     * @param {Number} id - entity id
     * @returns {null}
     * @private
     */
  }, {
    key: '_selectTeam',
    value: function _selectTeam(id) {
      if (!id) {
        return null;
      }

      var teams = this.appContext.getAllEntities();
      var index = teams.indexOf(id);

      if (index === -1) {
        return null;
      }

      teams.splice(index, 1);

      this.appContext.setSelectedEntities({
        checked: [id],
        unchecked: teams
      });
    }

    /**
     * Checks whether there are teams in the context
     * @returns {Boolean}
     * @private
     */
  }, {
    key: '_isPresentTeams',
    value: function _isPresentTeams() {
      return !!this.appContext.getAllEntities().length && this.appContext.getContextLoadedState();
    }
  }]);

  return DashboardCtrl;
})();

exports['default'] = DashboardCtrl;
module.exports = exports['default'];

},{}],171:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

require('./views/dashboard.html');

var _controllersDashboardController = require('./controllers/dashboard.controller');

var _controllersDashboardController2 = _interopRequireDefault(_controllersDashboardController);

var _componentsDoughnut = require('components/doughnut');

var _componentsDoughnut2 = _interopRequireDefault(_componentsDoughnut);

var _servicesDashboardService = require('./services/dashboard.service');

var _servicesDashboardService2 = _interopRequireDefault(_servicesDashboardService);

var _componentsIndexTrend = require('components/index-trend');

var _componentsIndexTrend2 = _interopRequireDefault(_componentsIndexTrend);

var _componentsContributors = require('components/contributors');

var _componentsContributors2 = _interopRequireDefault(_componentsContributors);

var moduleName = 'abiliton.healthcheck.healthcheckBoard';

angular.module(moduleName, [_servicesDashboardService2['default'], _componentsDoughnut2['default'], _componentsIndexTrend2['default'], _componentsContributors2['default'], 'ui.router', 'ui.bootstrap']).controller('DashboardCtrl', _controllersDashboardController2['default']).config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
  $stateProvider.state('sdlc.summary', {
    url: '/summary',
    reloadOnSearch: false,
    templateUrl: 'dashboard.html',
    controller: 'DashboardCtrl',
    controllerAs: 'dashboardCtrl'
  });
}]);

exports['default'] = moduleName;
module.exports = exports['default'];

},{"./controllers/dashboard.controller":170,"./services/dashboard.service":172,"./views/dashboard.html":173,"components/contributors":20,"components/doughnut":22,"components/index-trend":28}],172:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var moduleName = 'dashboard.service';

var DashboardService = (function () {
  function DashboardService($http) {
    _classCallCheck(this, DashboardService);

    this.$http = $http;
  }

  _createClass(DashboardService, [{
    key: 'getMetricData',
    value: function getMetricData(config) {
      if (!config) {
        return null;
      }

      return this.$http.get('/api/metrics', {
        params: {
          metric_ids: config.metric_ids,
          entity_ids: config.entity_ids,
          start_date: config.start_date,
          end_date: config.end_date,
          force_plain_values: config.force_plain_values || false
        }
      });
    }
  }, {
    key: 'getContributorsData',
    value: function getContributorsData(config) {
      if (!config) {
        return null;
      }

      return this.$http.get('/api/index-contributors', {
        params: {
          metric_ids: config.metric_ids,
          entity_ids: config.entity_ids,
          on_date: config.on_date
        }
      });
    }
  }, {
    key: 'getMetricOnDateData',
    value: function getMetricOnDateData(config) {
      if (!config) {
        return null;
      }

      return this.$http.get('/api/metrics-on-date', {
        params: {
          metric_ids: config.metric_ids,
          entity_ids: config.entity_ids,
          on_date: config.on_date
        }
      });
    }
  }], [{
    key: 'serviceFactory',
    value: function serviceFactory($http) {
      return new DashboardService($http);
    }
  }]);

  return DashboardService;
})();

DashboardService.serviceFactory.$inject = ['$http'];

angular.module(moduleName, []).factory('DashboardService', DashboardService.serviceFactory);

exports['default'] = moduleName;
module.exports = exports['default'];

},{}],173:[function(require,module,exports){
(function (global){
(typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null).module('src/app/index.js').run(['$templateCache', function($templateCache){$templateCache.put('dashboard.html','<div class="col-xs-4 panel-column" ng-repeat="item in dashboardCtrl.data"> <h2 class="ta-center">{{ item.name }}</h2> <div class="doughnut-container"> <a href="" ui-sref="{{ tabConfig[$index + 1].sref }}"> <div doughnut="item.doughnut" doughnut-height="200" config="chartConfig" ng-show="doughnutDataIsLoaded"></div> </a> <div class="ad-loading ad-loading-doughnut" ng-hide="doughnutDataIsLoaded"> <div class="loading-img"></div> </div> <div index-trend="item.indexTrend" config="chartConfig" ng-show="indexTrendDataIsLoaded"></div> <div class="ad-loading ad-loading-indextrend" ng-hide="indexTrendDataIsLoaded"> <div class="loading-img"></div> </div> </div> <div class="contributors-wrapper" ng-show="contributorsDataIsLoaded"> <h3 class="ta-center">Contributors</h3> <contributors data="item.contributors" contributors-type="\'teams\'" contributors-order="\'value\'" thresholds="dashboardCtrl.contributorsThresholds" contributors-item-action="selectTeam(id)"></contributors> </div> <div class="ad-loading ad-loading-contributors" ng-hide="contributorsDataIsLoaded"> <div class="loading-img"></div> </div> </div>')}]);
module.exports = 'dashboard.html';
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],174:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _healthcheckBoard = require('./healthcheckBoard');

var _healthcheckBoard2 = _interopRequireDefault(_healthcheckBoard);

var _predictability = require('./predictability');

var _predictability2 = _interopRequireDefault(_predictability);

var _productivity = require('./productivity');

var _productivity2 = _interopRequireDefault(_productivity);

var _quality = require('./quality');

var _quality2 = _interopRequireDefault(_quality);

var moduleName = 'abiliton.healthcheck';

angular.module(moduleName, [_healthcheckBoard2['default'], _predictability2['default'], _productivity2['default'], _quality2['default']]);

exports['default'] = moduleName;
module.exports = exports['default'];

},{"./healthcheckBoard":171,"./predictability":175,"./productivity":177,"./quality":179}],175:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

require('./views/predictability.html');

require('../common/views/metrics-analysis.html');

var _commonServicesAdService = require('../common/services/ad.service');

var _commonServicesAdService2 = _interopRequireDefault(_commonServicesAdService);

var _commonControllersIndexController = require('../common/controllers/index.controller');

var _commonControllersIndexController2 = _interopRequireDefault(_commonControllersIndexController);

var _componentsSpider = require('components/spider');

var _componentsSpider2 = _interopRequireDefault(_componentsSpider);

var _commonControllersMetricsAnalysisController = require('../common/controllers/metrics-analysis.controller');

var _commonControllersMetricsAnalysisController2 = _interopRequireDefault(_commonControllersMetricsAnalysisController);

var _componentsMetricAnalysis = require('components/metric-analysis');

var _componentsMetricAnalysis2 = _interopRequireDefault(_componentsMetricAnalysis);

var _componentsTrend = require('components/trend');

var _componentsTrend2 = _interopRequireDefault(_componentsTrend);

var _componentsAppContextService = require('components/app-context-service');

var _componentsAppContextService2 = _interopRequireDefault(_componentsAppContextService);

var moduleName = 'abiliton.healthcheck.predictability';

angular.module(moduleName, [_componentsSpider2['default'], _componentsMetricAnalysis2['default'], _commonServicesAdService2['default'], _componentsTrend2['default'], _componentsAppContextService2['default'], 'ui.router', 'ui.bootstrap']).constant('PredictabilityId', 52).constant('PredictabilityQualityId', 55).constant('PredictabilityVelocityId', 54).constant('PredictabilityScopeId', 53).controller('PredictabilityCtrl', ['$scope', '$timeout', 'AbilitonDashboardService', 'AppContext', 'PredictabilityId', _commonControllersIndexController2['default']]).controller('PredictabilityQualityCtrl', ['$scope', '$timeout', 'AbilitonDashboardService', 'AppContext', 'PredictabilityQualityId', _commonControllersMetricsAnalysisController2['default']]).controller('PredictabilityScopeCtrl', ['$scope', '$timeout', 'AbilitonDashboardService', 'AppContext', 'PredictabilityScopeId', _commonControllersMetricsAnalysisController2['default']]).controller('PredictabilityVelocityCtrl', ['$scope', '$timeout', 'AbilitonDashboardService', 'AppContext', 'PredictabilityVelocityId', _commonControllersMetricsAnalysisController2['default']]).config(["$stateProvider", function ($stateProvider) {
  $stateProvider.state('sdlc.predictability', {
    url: '/predictability',
    reloadOnSearch: false,
    redirectTo: 'sdlc.predictability.scope',
    templateUrl: 'predictability.html',
    controller: 'PredictabilityCtrl'
  }).state('sdlc.predictability.quality', {
    url: '/quality',
    reloadOnSearch: false,
    views: {
      'quality': {
        templateUrl: 'metrics-analysis.html',
        controller: 'PredictabilityQualityCtrl'
      }
    }
  }).state('sdlc.predictability.scope', {
    url: '/scope',
    reloadOnSearch: false,
    views: {
      'scope': {
        templateUrl: 'metrics-analysis.html',
        controller: 'PredictabilityScopeCtrl'
      }
    }
  }).state('sdlc.predictability.velocity', {
    url: '/velocity',
    reloadOnSearch: false,
    views: {
      'velocity': {
        templateUrl: 'metrics-analysis.html',
        controller: 'PredictabilityVelocityCtrl'
      }
    }
  });
}]);

exports['default'] = moduleName;
module.exports = exports['default'];

},{"../common/controllers/index.controller":166,"../common/controllers/metrics-analysis.controller":167,"../common/services/ad.service":168,"../common/views/metrics-analysis.html":169,"./views/predictability.html":176,"components/app-context-service":12,"components/metric-analysis":32,"components/spider":55,"components/trend":63}],176:[function(require,module,exports){
(function (global){
(typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null).module('src/app/index.js').run(['$templateCache', function($templateCache){$templateCache.put('predictability.html','<div class="productivity-wrapper"> <div class="trend-container"> <trend data="trendData" class="trend-chart-wrapper" ng-show="trendDataIsLoaded"></trend> <div class="ad-loading ad-loading-trendchart" ng-hide="trendDataIsLoaded"> <div class="loading-img"></div> </div> </div> <div class="spider-container"> <div class="spider-chart-wrapper" ng-show="spiderDataIsLoaded"> <spider data="spiderData" components="components"></spider> </div> <div class="ad-loading ad-loading-spiderchart" ng-hide="spiderDataIsLoaded"> <div class="loading-img"></div> </div> </div> </div> <uib-tabset class="ad-tab ad-tab-medium"> <uib-tab ng-init="_scope = (\'sdlc.predictability.scope\' | includedByState)" ui-sref="sdlc.predictability.scope" heading="Scope" active="_scope"> <div ui-view="scope"></div> </uib-tab> <uib-tab ng-init="_velocity = (\'sdlc.predictability.velocity\' | includedByState)" ui-sref="sdlc.predictability.velocity" heading="Velocity" active="_velocity"> <div ui-view="velocity"></div> </uib-tab> <uib-tab ng-init="_quality = (\'sdlc.predictability.quality\' | includedByState)" ui-sref="sdlc.predictability.quality" heading="Quality" active="_quality"> <div ui-view="quality"></div> </uib-tab> <div class="nav-tabs-controls f-right hidden"> <input type="checkbox" id="showProdutcivityIndex" class="ad-checkbox"> <label for="showProdutcivityIndex"> Show Productivity Index </label> </div> </uib-tabset>')}]);
module.exports = 'predictability.html';
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],177:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

require('./views/productivity.html');

require('../common/views/metrics-analysis.html');

var _commonServicesAdService = require('../common/services/ad.service');

var _commonServicesAdService2 = _interopRequireDefault(_commonServicesAdService);

var _commonControllersIndexController = require('../common/controllers/index.controller');

var _commonControllersIndexController2 = _interopRequireDefault(_commonControllersIndexController);

var _componentsSpider = require('components/spider');

var _componentsSpider2 = _interopRequireDefault(_componentsSpider);

var _commonControllersMetricsAnalysisController = require('../common/controllers/metrics-analysis.controller');

var _commonControllersMetricsAnalysisController2 = _interopRequireDefault(_commonControllersMetricsAnalysisController);

var _componentsMetricAnalysis = require('components/metric-analysis');

var _componentsMetricAnalysis2 = _interopRequireDefault(_componentsMetricAnalysis);

var _componentsTrend = require('components/trend');

var _componentsTrend2 = _interopRequireDefault(_componentsTrend);

var _componentsAppContextService = require('components/app-context-service');

var _componentsAppContextService2 = _interopRequireDefault(_componentsAppContextService);

var moduleName = 'abiliton.healthcheck.productivity';

angular.module(moduleName, [_componentsSpider2['default'], _componentsMetricAnalysis2['default'], _commonServicesAdService2['default'], _componentsTrend2['default'], _componentsAppContextService2['default'], 'ui.router']).constant('ProductivityId', 44).constant('ProductivityVelocityId', 45).constant('ProductivityEfficiencyId', 46).constant('ProductivityReworkId', 47).controller('ProductivityCtrl', ['$scope', '$timeout', 'AbilitonDashboardService', 'AppContext', 'ProductivityId', _commonControllersIndexController2['default']]).controller('ProductivityVelocityCtrl', ['$scope', '$timeout', 'AbilitonDashboardService', 'AppContext', 'ProductivityVelocityId', _commonControllersMetricsAnalysisController2['default']]).controller('ProductivityEfficiencyCtrl', ['$scope', '$timeout', 'AbilitonDashboardService', 'AppContext', 'ProductivityEfficiencyId', _commonControllersMetricsAnalysisController2['default']]).controller('ProductivityReworkCtrl', ['$scope', '$timeout', 'AbilitonDashboardService', 'AppContext', 'ProductivityReworkId', _commonControllersMetricsAnalysisController2['default']]).config(['$stateProvider', function ($stateProvider) {
  $stateProvider.state('sdlc.productivity', {
    url: '/productivity',
    reloadOnSearch: false,
    redirectTo: 'sdlc.productivity.velocity',
    templateUrl: 'productivity.html',
    controller: 'ProductivityCtrl'
  }).state('sdlc.productivity.velocity', {
    url: '/velocity',
    reloadOnSearch: false,
    views: {
      'velocity': {
        templateUrl: 'metrics-analysis.html',
        controller: 'ProductivityVelocityCtrl'
      }
    }
  }).state('sdlc.productivity.efficiency', {
    url: '/efficiency',
    reloadOnSearch: false,
    views: {
      'efficiency': {
        templateUrl: 'metrics-analysis.html',
        controller: 'ProductivityEfficiencyCtrl'
      }
    }
  }).state('sdlc.productivity.rework', {
    url: '/rework',
    reloadOnSearch: false,
    views: {
      'rework': {
        templateUrl: 'metrics-analysis.html',
        controller: 'ProductivityReworkCtrl'
      }
    }
  });
}]);

exports['default'] = moduleName;
module.exports = exports['default'];

},{"../common/controllers/index.controller":166,"../common/controllers/metrics-analysis.controller":167,"../common/services/ad.service":168,"../common/views/metrics-analysis.html":169,"./views/productivity.html":178,"components/app-context-service":12,"components/metric-analysis":32,"components/spider":55,"components/trend":63}],178:[function(require,module,exports){
(function (global){
(typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null).module('src/app/index.js').run(['$templateCache', function($templateCache){$templateCache.put('productivity.html','<div class="productivity-wrapper"> <div class="trend-container"> <trend data="trendData" class="trend-chart-wrapper" ng-show="trendDataIsLoaded"></trend> <div class="ad-loading ad-loading-trendchart" ng-hide="trendDataIsLoaded"> <div class="loading-img"></div> </div> </div> <div class="spider-container"> <div class="spider-chart-wrapper" ng-show="spiderDataIsLoaded"> <spider data="spiderData" components="components"></spider> </div> <div class="ad-loading ad-loading-spiderchart" ng-hide="spiderDataIsLoaded"> <div class="loading-img"></div> </div> </div> </div> <uib-tabset class="ad-tab ad-tab-medium"> <uib-tab ng-init="_velocity = (\'sdlc.productivity.velocity\' | includedByState)" ui-sref="sdlc.productivity.velocity" heading="Velocity" active="_velocity"> <div ui-view="velocity"></div> </uib-tab> <uib-tab ng-init="_efficiency = (\'sdlc.productivity.efficiency\' | includedByState)" ui-sref="sdlc.productivity.efficiency" heading="Efficiency" active="_efficiency"> <div ui-view="efficiency"></div> </uib-tab> <uib-tab ng-init="_rework = (\'sdlc.productivity.rework\' | includedByState)" ui-sref="sdlc.productivity.rework" heading="Rework" active="_rework"> <div ui-view="rework"></div> </uib-tab> <div class="nav-tabs-controls f-right hidden"> <input type="checkbox" id="showProdutcivityIndex" class="ad-checkbox"> <label for="showProdutcivityIndex"> Show Productivity Index </label> </div> </uib-tabset>')}]);
module.exports = 'productivity.html';
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],179:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

require('./views/quality.html');

require('../common/views/metrics-analysis.html');

var _commonServicesAdService = require('../common/services/ad.service');

var _commonServicesAdService2 = _interopRequireDefault(_commonServicesAdService);

var _commonControllersIndexController = require('../common/controllers/index.controller');

var _commonControllersIndexController2 = _interopRequireDefault(_commonControllersIndexController);

var _componentsSpider = require('components/spider');

var _componentsSpider2 = _interopRequireDefault(_componentsSpider);

var _commonControllersMetricsAnalysisController = require('../common/controllers/metrics-analysis.controller');

var _commonControllersMetricsAnalysisController2 = _interopRequireDefault(_commonControllersMetricsAnalysisController);

var _componentsMetricAnalysis = require('components/metric-analysis');

var _componentsMetricAnalysis2 = _interopRequireDefault(_componentsMetricAnalysis);

var _componentsTrend = require('components/trend');

var _componentsTrend2 = _interopRequireDefault(_componentsTrend);

var _componentsAppContextService = require('components/app-context-service');

var _componentsAppContextService2 = _interopRequireDefault(_componentsAppContextService);

var moduleName = 'abiliton.healthcheck.quality';

angular.module(moduleName, [_componentsSpider2['default'], _componentsMetricAnalysis2['default'], _commonServicesAdService2['default'], _componentsTrend2['default'], _componentsAppContextService2['default'], 'ui.router', 'ui.bootstrap']).constant('QualityId', 48).constant('QualityDebtId', 49).constant('QualityCodingId', 50).constant('QualityTestingId', 51).controller('QualityCtrl', ['$scope', '$timeout', 'AbilitonDashboardService', 'AppContext', 'QualityId', _commonControllersIndexController2['default']]).controller('QualityDebtCtrl', ['$scope', '$timeout', 'AbilitonDashboardService', 'AppContext', 'QualityDebtId', _commonControllersMetricsAnalysisController2['default']]).controller('QualityCodingCtrl', ['$scope', '$timeout', 'AbilitonDashboardService', 'AppContext', 'QualityCodingId', _commonControllersMetricsAnalysisController2['default']]).controller('QualityTestingCtrl', ['$scope', '$timeout', 'AbilitonDashboardService', 'AppContext', 'QualityTestingId', _commonControllersMetricsAnalysisController2['default']]).config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/quality');
  $stateProvider.state('sdlc.quality', {
    url: '/quality',
    reloadOnSearch: false,
    redirectTo: 'sdlc.quality.coding',
    templateUrl: 'quality.html',
    controller: 'QualityCtrl'
  }).state('sdlc.quality.debt', {
    url: '/debt',
    reloadOnSearch: false,
    views: {
      'debt': {
        templateUrl: 'metrics-analysis.html',
        controller: 'QualityDebtCtrl'
      }
    }
  }).state('sdlc.quality.coding', {
    url: '/coding',
    reloadOnSearch: false,
    views: {
      'coding': {
        templateUrl: 'metrics-analysis.html',
        controller: 'QualityCodingCtrl'
      }
    }
  }).state('sdlc.quality.testing', {
    url: '/testing',
    reloadOnSearch: false,
    views: {
      'testing': {
        templateUrl: 'metrics-analysis.html',
        controller: 'QualityTestingCtrl'
      }
    }
  });
}]);

exports['default'] = moduleName;
module.exports = exports['default'];

},{"../common/controllers/index.controller":166,"../common/controllers/metrics-analysis.controller":167,"../common/services/ad.service":168,"../common/views/metrics-analysis.html":169,"./views/quality.html":180,"components/app-context-service":12,"components/metric-analysis":32,"components/spider":55,"components/trend":63}],180:[function(require,module,exports){
(function (global){
(typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null).module('src/app/index.js').run(['$templateCache', function($templateCache){$templateCache.put('quality.html','<div class="productivity-wrapper"> <div class="trend-container"> <trend data="trendData" class="trend-chart-wrapper" ng-show="trendDataIsLoaded"></trend> <div class="ad-loading ad-loading-trendchart" ng-hide="trendDataIsLoaded"> <div class="loading-img"></div> </div> </div> <div class="spider-container"> <div class="spider-chart-wrapper" ng-show="spiderDataIsLoaded"> <spider data="spiderData" components="components"></spider> </div> <div class="ad-loading ad-loading-spiderchart" ng-hide="spiderDataIsLoaded"> <div class="loading-img"></div> </div> </div> </div> <uib-tabset class="ad-tab ad-tab-medium"> <uib-tab ng-init="_coding = (\'sdlc.quality.coding\' | includedByState)" ui-sref="sdlc.quality.coding" heading="Coding" active="_coding"> <div ui-view="coding"></div> </uib-tab> <uib-tab ng-init="_testing = (\'sdlc.quality.testing\' | includedByState)" ui-sref="sdlc.quality.testing" heading="Testing" active="_testing"> <div ui-view="testing"></div> </uib-tab> <uib-tab ng-init="_debt = (\'sdlc.quality.debt\' | includedByState)" ui-sref="sdlc.quality.debt" heading="Debt" active="_debt"> <div ui-view="debt"></div> </uib-tab> <div class="nav-tabs-controls f-right hidden"> <input type="checkbox" id="showProdutcivityIndex" class="ad-checkbox"> <label for="showProdutcivityIndex"> Show Productivity Index </label> </div> </uib-tabset>')}]);
module.exports = 'quality.html';
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],181:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var SdlcCtrl =
/*@ngInject*/
["$scope", "$state", "$rootScope", "AppContext", "BrowserService", "EntitiesService", function SdlcCtrl($scope, $state, $rootScope, AppContext, BrowserService, EntitiesService) {
  _classCallCheck(this, SdlcCtrl);

  $scope.tabConfig = [{
    text: 'Summary',
    sref: 'sdlc.summary'
  }, {
    text: 'Productivity',
    sref: 'sdlc.productivity'
  }, {
    text: 'Quality',
    sref: 'sdlc.quality'
  }, {
    text: 'Predictability',
    sref: 'sdlc.predictability'
  }];

  if (AppContext.isCached('sdlc')) {
    AppContext.restoreContext('sdlc');
  } else {
    AppContext.resetContext();
  }

  $scope.browseButtonIsVisible = true;
  $scope.searchpanelisactive = false;

  $rootScope.$on('$stateChangeSuccess', function (ev, to, toParams, from) {
    AppContext.setRouterState('current', to.name);
    AppContext.setRouterState('previous', from.name);
  });

  $scope.setPrevState = function () {
    $state.go(AppContext.getRouterState('previous'));
  };

  $scope.isSafari = function () {
    return BrowserService.isSafari();
  };
}];

exports['default'] = SdlcCtrl;
module.exports = exports['default'];

},{}],182:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

require('./views/sdlc-main-view.html');

require('./views/sdlc-brand.html');

var _modulesContext = require('modules/context');

var _modulesContext2 = _interopRequireDefault(_modulesContext);

var _componentsBrowserService = require('components/browser-service');

var _componentsBrowserService2 = _interopRequireDefault(_componentsBrowserService);

var _controllersSdlcController = require('./controllers/sdlc.controller');

var _controllersSdlcController2 = _interopRequireDefault(_controllersSdlcController);

var _componentsAppContextService = require('components/app-context-service');

var _componentsAppContextService2 = _interopRequireDefault(_componentsAppContextService);

var _modulesHealthcheck = require('modules/healthcheck');

var _modulesHealthcheck2 = _interopRequireDefault(_modulesHealthcheck);

var _componentsMinHeight = require('components/min-height');

var _componentsMinHeight2 = _interopRequireDefault(_componentsMinHeight);

var _componentsEntitiesService = require('components/entities-service');

var _componentsEntitiesService2 = _interopRequireDefault(_componentsEntitiesService);

var moduleName = 'abiliton.sdlc';

angular.module(moduleName, [_modulesContext2['default'], _componentsAppContextService2['default'], _modulesHealthcheck2['default'], _componentsMinHeight2['default'], _componentsBrowserService2['default'], _componentsEntitiesService2['default'], 'ui.router', 'ui.bootstrap']).config(["$stateProvider", function ($stateProvider) {
  $stateProvider.state('sdlc', {
    url: '/sdlc?period&selectedEntities&uncheckedEntities',
    redirectTo: 'sdlc.summary',
    data: {
      type: 'team'
    },
    reloadOnSearch: false,
    views: {
      content: {
        templateUrl: 'sdlc-main-view.html',
        controller: _controllersSdlcController2['default']
      },
      context: {
        templateUrl: 'context.html', // TODO: hardcoded value
        controller: 'ContextCtrl' // TODO: hardcoded value
      },
      brand: {
        templateUrl: "sdlc-brand.html"
      }
    },
    onExit: ["AppContext", function onExit(AppContext) {
      AppContext.storeContext('sdlc');
      AppContext.setActiveTabState();
    }]
  });
}]);

exports['default'] = moduleName;
module.exports = exports['default'];

},{"./controllers/sdlc.controller":181,"./views/sdlc-brand.html":183,"./views/sdlc-main-view.html":184,"components/app-context-service":12,"components/browser-service":14,"components/entities-service":23,"components/min-height":34,"modules/context":164,"modules/healthcheck":174}],183:[function(require,module,exports){
(function (global){
(typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null).module('src/app/index.js').run(['$templateCache', function($templateCache){$templateCache.put('sdlc-brand.html','<img src="assets/images/abiliton-sdlc-midnight.png">')}]);
module.exports = 'sdlc-brand.html';
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],184:[function(require,module,exports){
(function (global){
(typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null).module('src/app/index.js').run(['$templateCache', function($templateCache){$templateCache.put('sdlc-main-view.html','<div class="main" ng-class="{ \'safari-browser\': isSafari() }"> <div class="panel-wrapper"> <div class="ad-tab ad-tab-large o-hid"> <ul class="nav nav-tabs" role="tablist"> <li ng-repeat="tab in tabConfig" ui-sref-active="active"> <a ui-sref="{{ tab.sref }}" href="">{{ tab.text }}</a> </li> </ul> <div class="tab-content" ui-view min-height></div> </div> </div> </div>')}]);
module.exports = 'sdlc-main-view.html';
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],185:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _angular = (typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null);

var _angular2 = _interopRequireDefault(_angular);

/*@ngInject*/

var SimpleContextCtrl = (function () {
  SimpleContextCtrl.$inject = ["$scope", "$state", "$filter", "AppContext", "EntitiesService", "BackDropService", "ContextStateService"];
  function SimpleContextCtrl($scope, $state, $filter, AppContext, EntitiesService, BackDropService, ContextStateService) {
    var _this = this;

    _classCallCheck(this, SimpleContextCtrl);

    AppContext.resetContext();
    BackDropService.setBackDropState(true);

    this.appContext = AppContext;
    this.entitiesService = EntitiesService;
    this.ContextStateService = ContextStateService;

    this.$filter = $filter;
    this.$state = $state;
    this.$scope = $scope;
    this.data = [];

    $scope.fullEntitiesList = [];
    $scope.expiredEntities = [];
    $scope.config = $state.$current.data;
    $scope.entitiesAreLoaded = false;

    AppContext.setPromise($scope.config.type, _angular2['default'].bind(EntitiesService, EntitiesService.getEntitiesData));

    //Watch for active entity Id
    var unwatchEntityId = $scope.$watch(function () {
      return $state.params.id;
    }, function (data) {
      return $scope.activeEntityId = data;
    });

    //Watch for entities in app context
    var unwatchFullContext = $scope.$watchCollection(function () {
      return AppContext.getAllEntities();
    }, function (data) {
      if (data) {
        var deSerializeContext = EntitiesService.deSerializeContext(AppContext.getSelectedEntities(), AppContext.getUncheckedEntities());

        $scope.contextList = _this._getContext(_this.data, deSerializeContext);
      }
    });

    $scope.$on('$stateChangeSuccess', function () {
      $scope.config = $state.current.data;
    });

    //Watch for reloading context
    var unwatchReloadContext = $scope.$watch(function () {
      return ContextStateService.getContextState();
    }, function (data) {
      if (data) {
        _this.$scope.contextList = [];
        _this.$scope.entitiesAreLoaded = false;

        _this._loadContext();
        ContextStateService.setContextState(false);
      }
    });

    this._loadContext();

    $scope.infoAction = function (id) {
      return _this._infoAction(id);
    };
    $scope.removeAction = function (item) {
      return _this._removeAction(item);
    };

    $scope.$on('$destroy', function () {
      BackDropService.setBackDropState(false);
      unwatchFullContext();
      unwatchEntityId();
      unwatchReloadContext();
    });
  }

  /**
   * Makes api call to entities service
   * @returns
   * @private
   */

  _createClass(SimpleContextCtrl, [{
    key: '_loadContext',
    value: function _loadContext() {
      var _this2 = this;

      var type = this.$scope.config.type;
      var promise = this.appContext.getPromise(type);

      if (!promise) {
        this.appContext.setPromise(type, _angular2['default'].bind(this.entitiesService, this.entitiesService.getEntitiesData));
        this.ContextStateService.setContextState(true);
      }

      this.appContext.getPromise(type).then(function (response) {
        var deSerializeContext = _this2.entitiesService.deSerializeContext(_this2.appContext.getSelectedEntities(), _this2.appContext.getUncheckedEntities());
        _this2.data = _this2.$filter('orderBy')(response.data, 'name');
        _this2.$scope.fullEntitiesList = _this2.data;

        _this2.appContext.setEntitiesStatus(_this2.entitiesService.getEntitiesStatus(_this2.data));
        _this2.$scope.expiredEntities = _this2._getContext(response.data, _this2.appContext.getEntitiesStatus().expired);
        _this2.$scope.contextList = _this2._getContext(response.data, deSerializeContext);

        _this2.$scope.entitiesAreLoaded = true;
      });
    }

    /**
     * Gets context data
     * @param {Array} entities - entities from request
     * @param {Array} contextEntities - entities from AppContext service
     * @returns {Array}
     * @private
     */
  }, {
    key: '_getContext',
    value: function _getContext(entities, contextEntities) {
      var result = [];
      var entitiesLen = entities.length;
      var idsLen = contextEntities.length;

      if (entitiesLen && idsLen) {
        for (var i = 0; i < idsLen; i++) {
          for (var j = 0; j < entitiesLen; j++) {
            if (entities[j].id === (contextEntities[i].id || contextEntities[i])) {
              result.push(_angular2['default'].extend(entities[j], contextEntities[i]));
              break;
            }
          }
        }
      }

      return result;
    }

    /**
     * Shows info page
     * @param {id} id - entity id
     * @returns
     * @private
     */
  }, {
    key: '_infoAction',
    value: function _infoAction(id) {
      this.$state.go('charters.charter.view', { id: id });
    }

    /**
     * Removes context item from context collection
     * @param {Object} item - context collection item
     * @returns
     * @private
     */
  }, {
    key: '_removeAction',
    value: function _removeAction(item) {
      var index = this.$scope.contextList.indexOf(item);

      if (index !== -1) {
        var data = _angular2['default'].copy(this.$scope.contextList);

        data.splice(index, 1);
        this.appContext.setSelectedEntities(this.entitiesService.serializeContext(data));
      }
    }
  }]);

  return SimpleContextCtrl;
})();

exports['default'] = SimpleContextCtrl;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],186:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

require('./views/simple.context.html');

var _componentsSimpleContextList = require('components/simple-context-list');

var _componentsSimpleContextList2 = _interopRequireDefault(_componentsSimpleContextList);

var _componentsEntitiesService = require('components/entities-service');

var _componentsEntitiesService2 = _interopRequireDefault(_componentsEntitiesService);

var _controllersSimpleContextController = require('./controllers/simple.context.controller');

var _controllersSimpleContextController2 = _interopRequireDefault(_controllersSimpleContextController);

var _componentsAppContextService = require('components/app-context-service');

var _componentsAppContextService2 = _interopRequireDefault(_componentsAppContextService);

var _componentsBackDropService = require('components/back-drop-service');

var _componentsBackDropService2 = _interopRequireDefault(_componentsBackDropService);

var _componentsContextStateService = require('components/context-state-service');

var _componentsContextStateService2 = _interopRequireDefault(_componentsContextStateService);

var moduleName = 'abiliton.simple.context';

angular.module(moduleName, [_componentsSimpleContextList2['default'], _componentsEntitiesService2['default'], _componentsAppContextService2['default'], _componentsBackDropService2['default'], _componentsContextStateService2['default'], 'ui.router', 'ui.bootstrap']).controller('SimpleContextCtrl', _controllersSimpleContextController2['default']);

exports['default'] = moduleName;
module.exports = exports['default'];

},{"./controllers/simple.context.controller":185,"./views/simple.context.html":187,"components/app-context-service":12,"components/back-drop-service":13,"components/context-state-service":19,"components/entities-service":23,"components/simple-context-list":53}],187:[function(require,module,exports){
(function (global){
(typeof window !== "undefined" ? window['angular'] : typeof global !== "undefined" ? global['angular'] : null).module('src/app/index.js').run(['$templateCache', function($templateCache){$templateCache.put('simple.context.html','<simple-context data="contextList" active-item="activeEntityId" config="config" info-action="infoAction(id)" click-action="infoAction(id)" loading="entitiesAreLoaded" remove-action="removeAction(item)" full-entities-list="fullEntitiesList" expired-entities="expiredEntities"> </simple-context>')}]);
module.exports = 'simple.context.html';
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[7]);

//# sourceMappingURL=index.js.map
