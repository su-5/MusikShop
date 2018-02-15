(function () {
    "use strict";

    angular
        .module("Web")
        .config(["$stateProvider", "$urlRouterProvider", "$locationProvider", function ($stateProvider, $urlRouterProvider) {
            // Index
            $stateProvider.state("mainPage/Catalog", {
                url: "/catalog",
                templateUrl: "Angular/Views/Catalog.html",
                controller: "catalogController"
            });

            $urlRouterProvider.otherwise("/catalog");
        }]);
})();