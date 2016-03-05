(function () {
    'use strict';
    
    angular
        .module('yoShapingAngular')
        .directive('productSpecs', productSpecs);
        
    function productSpecs() {
        var directive = {
            restriction: 'A',
            templateUrl: 'app/components/productSpecs/productSpecs.html',
            controller: ProductSpecsController,
            controllerAs: 'vm',
            scope: {},
            bindToController: {
                product: '=forProduct'
            } 
        }
        
        return directive;
        
        /** @ngInject */
        function ProductSpecsController() {
            var vm = this;
            
            return vm;
        }
    }
})();