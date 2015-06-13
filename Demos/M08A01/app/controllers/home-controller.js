(function(){
    'use strict';

    angular.module('app').controller('HomeController', HomeController);

    HomeController.$inject = ['$rootScope'];

    function HomeController($rootScope){
        var vm = this;
        vm.title = 'Testando';

        activate();

        function activate(){
            // Inicializador
        }
    }
})();