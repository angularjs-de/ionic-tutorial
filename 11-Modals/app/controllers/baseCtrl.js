angular
    .module('pizzaApp')
    .controller('BaseCtrl', [
        '$scope',
        '$ionicModal',
        function ($scope, $ionicModal) {
            $ionicModal.fromTemplateUrl('app/templates/aboutModal.html', {
                scope: $scope
            }).then(function (modal) {
                $scope.aboutModal = modal;
            });
        }
    ]);
