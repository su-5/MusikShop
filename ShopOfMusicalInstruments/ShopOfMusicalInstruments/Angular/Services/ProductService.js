(function () {
    "use strict";

    function ProductService($cookies, $http, $rootScope, $q) {
        this.getListProduct = function () {
            var deferred = $q.defer();
            $http.get('api/Product')
                .then(function (response) {
                    deferred.resolve(response.data);
                }).catch(function onError(response) {
                    deferred.reject(response.data);
                });
            return deferred.promise;
        };
    };

    angular
        .module("Web.Services")
        .service("ProductService", ["$cookies", "$http", "$rootScope", "$q", ProductService]);

})(); 