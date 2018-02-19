(function () {
    "use strict";

    // controller class definintion
    var adminController = function ($scope, $rootScope, $uibModal, adminService) {
        //запрос на список брендов
        $rootScope.loadingShow();
        var listBrends = [];
        adminService.getAll().then(function (value) {
            listBrends = angular.copy(value);
        }, function (errorObject) {

        }).finally(function () {
            $rootScope.loadingHide();
        });

        //Modal Window
        $scope.openList = function () {
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

                    $scope.gridBrands = {
                        enableColumnResizing: true,
                        showGridFooter: true,
                        enableHorizontalScrollbar: 0,
                        enableVerticalScrollbar: 1,
                        enableColumnMenus: false,
                        showColumnFooter: false,
                        enableFiltering: false,
                        gridColumnFooterHeight: 20,
                        enableRowSelection: true,
                        enableRowHeaderSelection: false,
                        noUnselect: false,
                        multiSelect: false,
                        rowHeight: 22,
                        columnDefs: [
                            {
                                field: 'Name',
                                width: '50%',
                                displayName: 'Название',
                                cellTemplate: '<p style="margin-left:15px;">{{row.entity.Name}}</p>'
                            },
                            {
                                field: 'Description',
                                width: '50%',
                                displayName: 'Описание',
                                cellTemplate: '<p style="margin-left:15px;" >{{row.entity.Description}}</p>'
                            }
                        ],
                        onRegisterApi: function (gridApi) {
                            $scope.gridApi = gridApi;
                            $scope.gridApi.selection.on.rowSelectionChanged($scope,
                                function (row) {
                                });
                        }
                    }

                    $scope.cancel = function () {
                        $uibModalInstance.dismiss({ $value: 'cancel' });
                    };

                    $scope.gridBrands.data = listBrends;
                }]
            }).result.then(postClose, postClose);
        }



    };

    // register your controller into a dependent module 
    angular
        .module("Web.Controllers")
        .controller("adminController", ["$scope", "$rootScope", "$uibModal", "adminService", adminController]);

})();