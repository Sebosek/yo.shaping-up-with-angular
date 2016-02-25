(function () {
    'use strict';

    angular
        .module('yoShapingAngular')
        .controller('StoreController', StoreController);
    
    /** @ngInject */
    function StoreController(/*$http*/) {
        var vm = this;
        vm.products = [];

        activate();

        function activate() {
            getProducts();
        }

        function getProducts() {
            // $http.get('./store-products.json').success(function (data) {
            //     vm.products = data;
            // });
            vm.products = [
                {
                    "name": "Azurite",
                    "description": "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
                    "shine": 8,
                    "price": 110.50,
                    "rarity": 7,
                    "color": "#CCC",
                    "faces": 14,
                    "images": [
                        "assets/images/gem-02.gif",
                        "assets/images/gem-05.gif",
                        "assets/images/gem-09.gif"
                    ],
                    "reviews": [
                        {
                            stars: 3,
                            body: "Hello",
                            author: "john@doe.loc"
                        }
                    ]
                },
                {
                    "name": "Bloodstone",
                    "description": "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
                    "shine": 9,
                    "price": 22.90,
                    "rarity": 6,
                    "color": "#EEE",
                    "faces": 12,
                    "images": [
                        "assets/images/gem-01.gif",
                        "assets/images/gem-03.gif",
                        "assets/images/gem-04.gif"
                    ],
                    "reviews": []
                },
                {
                    "name": "Zircon",
                    "description": "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
                    "shine": 70,
                    "price": 1100,
                    "rarity": 2,
                    "color": "#000",
                    "faces": 6,
                    "images": [
                        "assets/images/gem-06.gif",
                        "assets/images/gem-07.gif",
                        "assets/images/gem-08.gif"
                    ],
                    "reviews": []
                }
            ];
        }
    }
})();
