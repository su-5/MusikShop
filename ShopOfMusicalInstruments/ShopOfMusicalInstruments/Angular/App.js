﻿(function () {
    "use strict";

    angular.module("Web.Services", []);
    angular.module("Web.Controllers", []);
    angular.module("Web.Externals", ["ui.router", "ngCookies","ngTouch", "ngAnimate", "integralui"]);

    var app = angular.module("Web", ["Web.Services", "Web.Externals", "Web.Controllers", "ui.bootstrap"]);

    app.run(["$rootScope", "$location", "$http", "$state", "$stateParams", "$sce", "loadingService",
        function ($rootScope, $location, $http, $state, $stateParams, $sce, loadingService) {
            //$rootScope.loadingShow = function () {
            //    $rootScope.loadingIsShow = loadingService.show(); // loading
            //};

           // $rootScope.loadingHide = function () {
               // $rootScope.loadingIsShow = loadingService.hide();
         //   };
        }
    ]);

})();