(function () {
    'use strict';
    
    angular
        .module('yoShapingAngular')
        .directive('productDescription', productDescription);
        
    function productDescription() {
        var directive = {
            restriction: 'E',
            templateUrl: 'app/components/productDescription/productDescription.html'
        };
        
        return directive;
    }
    
})();