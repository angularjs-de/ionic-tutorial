angular
    .module('pizzaApp', ['ionic'])
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider
                .otherwise('/order');

            $stateProvider
                .state('base', {
                    url: '/',
                    abstract: true,
                    views: {
                        'base': {
                            templateUrl: 'app/templates/base.html'
                        }
                    }
                })
                .state('base.order', {
                    url: 'order',
                    templateUrl: 'app/templates/order.html',
                    controller: 'OrderCtrl'
                })
                .state('base.cart', {
                    url: 'cart',
                    templateUrl: 'app/templates/cart.html',
                    controller: 'CartCtrl'
                })
                .state('base.detail', {
                    url: 'pizza/:id',
                    templateUrl: 'app/templates/detail.html',
                    controller: 'DetailCtrl'
                })
                .state('about', {
                    parent: 'base',
                    url: 'about',
                    templateUrl: 'app/templates/about.html'
                });
        }
    ]);
