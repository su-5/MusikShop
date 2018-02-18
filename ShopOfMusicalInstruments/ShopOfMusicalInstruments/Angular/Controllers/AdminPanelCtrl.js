(function () {
    "use strict";

    // controller class definintion
    var adminController = function ($scope, $rootScope, $uibModal) {
        debugger;
        //ProductService.getListProduct().then(function (value) {
        //    $rootScope.loadingShow();
        //    $scope.result = angular.copy(value);
        //}, function (errorObject) {

        //}).finally(function () {
        //    $rootScope.loadingHide();
        //});
        //Modal Window
        $scope.openList = function() {
            $scope.asideState = {
                open: true
            };

            function postClose() {
                $scope.asideState.open = false;
            }
            $uibModal.open({
                templateUrl: function () {
                    return 'Angular/ModalWindows/ControlBrendModalMindow.html';
                },
                size: 'lg',
                controller: ['$rootScope', '$scope', '$uibModalInstance', function ($rootScope, $scope, $uibModalInstance) {
                    $scope.test = "rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr";
                }]
            }).result.then(postClose, postClose);
        }
           

        
    };

    // register your controller into a dependent module 
    angular
        .module("Web.Controllers")
        .controller("adminController", ["$scope", "$rootScope","$uibModal", adminController]);

})();