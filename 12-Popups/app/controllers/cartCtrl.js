angular
    .module('pizzaApp')
    .controller('CartCtrl', [
        '$scope',
        '$ionicPopup',
        'cartService',
        function ($scope, $ionicPopup, cartService) {
            $scope.$on('$ionicView.beforeEnter', function () {
                $scope.cart = cartService.getCart();
            });

            $scope.$on('$ionicView.enter', function () {
                if (!$scope.cart.length) {
                    $ionicPopup.alert({
                        title: '<b>Dein Warenkorb ist leer!</b>',
                        template: 'Füge zuerst Produkte aus Unserem Angebot zu Deinem Warenkorb hinzu.'
                    });
                }
            });

            $scope.removeFromCart = function (index) {
                cartService.removeCartItem(index);
            };
        }
    ]);
