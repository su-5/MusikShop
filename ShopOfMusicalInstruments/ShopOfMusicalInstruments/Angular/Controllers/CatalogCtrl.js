(function () {
    "use strict";

    // controller class definintion
    var catalogController = function ($scope, $rootScope, ProductService) {
        ProductService.getListProduct().then(function (value) {
            debugger;
         //   $rootScope.loadingShow();
            $scope.result = angular.copy(value);
        }, function (errorObject) {

        }).finally(function () {
          //  $rootScope.loadingHide();
        });
    };

    // register your controller into a dependent module 
    angular
        .module("Web.Controllers")
        .controller("catalogController", ["$scope", "$rootScope","ProductService", catalogController]);

})();