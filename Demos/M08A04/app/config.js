(function(){
    'use strict';

    angular.module('app').run(function($rootScope, $location){
        $rootScope.isAuthenticated = false;

        $rootScope.$on("$routeChangeStart", function(event, next, current) {
            if (next.authorize && !$rootScope.isAuthenticated) {
                $location.path("/login");
            }
        });
    });
})();
