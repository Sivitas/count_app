'use strict';

var appName = 'countApp';

// angular.module(appName, [])
angular.module(appName, ['ngRoute', 'ui.bootstrap'])
    .config(function($routeProvider) {
        $routeProvider.when('/List', { templateUrl: 'views/list.html', controller: 'ListCtrl' })
            .otherwise({ redirectTo: '/List'});
    });