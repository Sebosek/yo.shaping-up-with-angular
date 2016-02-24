(function() {
  'use strict';

  angular
    .module('yoShapingAngular')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/store/store.html',
        controller: 'StoreController',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
  
})();
