(function () {
    'use strict';

    angular
        .module('yoShapingAngular')
        .directive('productReviews', productReviews);

    function productReviews() {
        var directive = {
            restriction: 'E',
            templateUrl: 'app/components/productReviews/productReviews.html',
            controller: ProductReviewsController,
            controllerAs: 'vm',
            scope: {},
            bindToController: {
                product: '=forProduct'
            }
        }

        return directive;
        
        /** @ngInject */
        function ProductReviewsController() {
            var vm = this;
            vm.review = {};
            vm.addReview = addReview;
            
            function addReview(product) {
                product.reviews.push(vm.review);
                vm.review = {};
            }
        }
    }
})();