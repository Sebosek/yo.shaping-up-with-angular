(function () {
    'use strict';
    
    angular
        .module('yoShapingAngular')
        .directive('productSpecs', productSpecs);
        
    function productSpecs() {
        var directive = {
            restriction: 'A',
            templateUrl: 'app/components/productSpecs/productSpecs.html',
            bindToController: true
        }
        
        return directive;
    }
})();