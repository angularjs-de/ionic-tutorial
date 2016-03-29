angular
    .module('pizzaApp')
    .controller('CartCtrl', [
        '$scope',
        'cartService',
        function ($scope, cartService) {
            $scope.cart = cartService.getCart();

            $scope.removeFromCart = function (index) {
                cartService.removeCartItem(index);
            };
        }
    ]);
