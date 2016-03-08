angular
    .module('pizzaApp')
    .service('pizzaService', [
        '$http',
        '$q',
        function ($http, $q) {
            this.getPizzas = function () {
                return $http.get('assets/pizza.json').then(function (res) {
                    return res.data;
                });
            };
        }
    ]);
