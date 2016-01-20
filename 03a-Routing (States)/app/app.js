angular
    .module('pizzaApp', ['ionic'])
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider
                .otherwise('/order');

            $stateProvider
                .state('order', {
                    url: '/order',
                    templateUrl: 'app/templates/order.html',
                    controller: 'OrderCtrl'
                })
                .state('about', {
                    url: '/about',
                    templateUrl: 'app/templates/about.html'
                });
        }
    ]);
