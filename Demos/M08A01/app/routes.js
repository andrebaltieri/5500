(function(){
    'use strict';

    angular.module('app').config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'HomeController',
                controllerAs: 'vm',
                templateUrl: 'app/views/index.html'
            })
            .when('/login', {
                controller: 'HomeController',
                controllerAs: 'vm',
                templateUrl: 'app/views/login.html'
            })
            .when('/restrita', {
                controller: 'HomeController',
                controllerAs: 'vm',
                templateUrl: 'app/views/restrita.html',
                authorize: true
            })
            .otherwise({
                controller: 'HomeController',
                controllerAs: 'vm',
                templateUrl: 'app/views/404.html'
            });
    });
})();
