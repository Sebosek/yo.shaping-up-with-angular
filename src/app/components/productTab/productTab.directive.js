(function () {
    'use strict';
    
    angular
        .module('yoShapingAngular')
        .directive('productTab', productTab);
        
    function productTab() {
        var directive = {
            restriction: 'E',
            template: '<div ng-show="selected" ng-transclude=""></div>',
            transclude: true,
            scope: {
                title: '@'
            },
            require: "^productTabgroup",
            link: productTabLink
        }
        
        return directive;
        
        function productTabLink(scope, element, attrs, ctrl) {
            ctrl.addTab(scope);
        }
    }
     
})();