(function () {
    "use strict";

    angular
        .module("Web")
        .config(["$stateProvider", "$urlRouterProvider", "$locationProvider", function ($stateProvider, $urlRouterProvider, $locationProvider) {
            // Index
            $stateProvider.state("mainPage/catalog", {
                url: "/catalog",
                templateUrl: "Angular/Views/Catalog.html",
                controller: "catalogController"
            });

            $urlRouterProvider.otherwise("/catalog");
        }]);
})();