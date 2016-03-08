angular
    .module('pizzaApp')
    .controller('OrderCtrl', [
        '$scope',
        '$timeout',
        'cartService',
        'pizzaService',
        function ($scope, $timeout, cartService, pizzaService) {

            function loadPizzas(refresh) {
                if (!refresh) {
                    $scope.loading = true;
                }
                return pizzaService
                    .getPizzas()
                    .then(function (result) {
                        $scope.pizzas = result;
                    }, function () {
                        // error case
                    })
                    .finally(function () {
                        // show the spinner a little bit longer
                        $timeout(function () {
                            $scope.loading = false;
                        }, 2000);
                    });
            }
            loadPizzas();

            $scope.refresh = function () {
                loadPizzas(true)
                    .finally(function () {
                        $scope.$broadcast('scroll.refreshComplete');
                    });
            };

            $scope.addToCart = function (pizza) {
                cartService.addCartItem(pizza);
            };
        }
    ]);
