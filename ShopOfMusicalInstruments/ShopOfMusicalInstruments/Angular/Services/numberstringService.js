(function () {
    "use strict";

    function numberstringService($cookies, $http, $rootScope, $q) {
        this.getAll = function () {
            var deferred = $q.defer();
            $http.get('api/NumberStrings')
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
        .service("numberstringService", ["$cookies", "$http", "$rootScope", "$q", numberstringService]);

})(); 