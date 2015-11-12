(function () {
    'use strict';

    angular
        .module('app', ['ngRoute'])
        .config(config)
    config.$inject = ['$routeProvider'];
    function config($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'MainController',
                templateUrl: 'main/main.view.html',
                controllerAs: 'vm'
            })
            .when('/main', {
                controller: 'MainController',
                templateUrl: 'main/main.view.html',
                controllerAs: 'vm'
            })
            .otherwise({ redirectTo: '/main' });
    }
})();