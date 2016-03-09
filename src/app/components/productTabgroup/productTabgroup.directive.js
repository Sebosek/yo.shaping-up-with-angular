(function() {
    'use strict';

    angular
        .module('yoShapingAngular')
        .directive('productTabgroup', productTabgroup);

    function productTabgroup() {
        var directive = {
            restriction: 'E',
            transclude: true,
            templateUrl: 'app/components/productTabgroup/productTabgroup.html',
            controller: productTabgroupController,
            controllerAs: 'vm'
        }

        return directive;

        /** @ngInject */
        function productTabgroupController() {
            var vm = this;
            vm.tabs = [];
            vm.addTab = addTab;
            vm.select = select;
            return vm;
            
            function addTab(tab) {
                if (vm.tabs.length === 0) {
                    tab.selected = true;
                }
                vm.tabs.push(tab);
                //console.log(tab);
            }
            
            function select(tab) {
                angular.forEach(vm.tabs, function (item) {
                    item.selected = angular.equals(tab, item);
                });
            }
        }
    }
})();