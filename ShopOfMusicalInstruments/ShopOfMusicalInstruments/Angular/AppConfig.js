(function () {
    "use strict";

    angular
        .module("Web")
        .config(["$stateProvider", "$urlRouterProvider", "$locationProvider", function ($stateProvider, $urlRouterProvider, $locationProvider) {
            // Index
            $stateProvider.state("mainPage/Catalog", {
                url: "/catalog",
                templateUrl: "Angular/Views/Catalog.html",
                controller: "CatalogController"
            });

            $urlRouterProvider.otherwise("/Catalog");
        }]);
})();