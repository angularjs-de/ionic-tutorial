angular
    .module('pizzaApp')
    .controller('OrderCtrl', [
        '$scope',
        '$timeout',
        'cartService',
        'pizzaService',
        function ($scope, $timeout, cartService, pizzaService) {
            $scope.loading = true;

            pizzaService
                .getPizzas()
                .then(function (result) {
                    $scope.pizzas = result;
                }, function () {
                    // error case
                })
                .finally(function () {
                    $timeout(function () {
                        $scope.loading = false;
                    }, 2000);
                });

            $scope.addToCart = function (pizza) {
                cartService.addCartItem(pizza);
            };
        }
    ]);
