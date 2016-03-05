(function () {
    'use strict';
    
    angular
        .module('yoShapingAngular')
        .directive('productDescription', productDescription);
        
    function productDescription() {
        var directive = {
            restriction: 'E',
            templateUrl: 'app/components/productDescription/productDescription.html',
            scope: {},
            controller: ProductDescriptionController,
            controllerAs: 'vm',
            bindToController: {
                product: '=forProduct',
                setted: '=isSet'
            } 
        };
        
        return directive;
        
        /** @ngInject */
        function ProductDescriptionController() {
            var vm = this;
            
            return vm;
        }
    }
    
})();