(function(){
    'use strict';

    angular.module('app').controller('ProductController', function($scope, $routeParams){
        $scope.title = 'Detalhes do produto ' + $routeParams.id;
    });
})();