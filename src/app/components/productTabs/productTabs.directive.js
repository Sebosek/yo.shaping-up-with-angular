(function () {
    'use strict';

    angular
        .module('yoShapingAngular')
        .directive('productTabs', productTabs);

    function productTabs() {
        var directive = {
            restriction: 'E',
            templateUrl: 'app/components/productTabs/productTabs.html',
            controller: ProcuctTabsController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function ProcuctTabsController() {
            var vm = this;
            vm.tab = 1;
            vm.isSet = isSet;
            vm.setTab = setTab;

            function isSet(t) {
                return vm.tab === t;
            }

            function setTab(a) {
                this.tab = a || 0;
            }
        }
    }
})();