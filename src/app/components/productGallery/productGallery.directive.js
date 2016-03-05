/// <reference path="../../../../bower_components/angular/angular.js" />

(function () {
    'use strict';
    
    angular
        .module('yoShapingAngular')
        .directive('productGallery', productGallery);
        
    function productGallery() {
        var directive = {
            restriction: 'E',
            templateUrl: 'app/components/productGallery/productGallery.html',
            controller: ProductGalleryController,
            controllerAs: 'vm',
            scope: {},
            bindToController: {
                product: '=forProduct'
            }
        };
        
        return directive;
        
        /** @ngInject */
        function ProductGalleryController() {
            var vm = this;
            vm.current = 0;
            vm.setCurrent = setCurrent;
            
            activate();
            
            function activate() {
                // hello
            }
            
            function setCurrent(i) {
                vm.current = i || 0;
            }
        }
    }
    
})();