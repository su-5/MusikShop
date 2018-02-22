﻿(function () {
    "use strict";

    // controller class definintion
    var adminController = function ($scope, $rootScope, $uibModal, adminService, countryService, numberstringService) {

        //Modal Window для брендов 
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
                controller: [
                    '$rootScope', '$scope', '$uibModalInstance', function ($rootScope, $scope, $uibModalInstance) {
                        $scope.brand = { Name: "", Description: "" };
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
                        };

                        //запрос на список брендов
                        function getAllBrends() {
                            $rootScope.loadingShow();
                            adminService.getAll().then(function (value) {
                                $scope.listBrends = angular.copy(value);
                                $scope.gridBrands.data = $scope.listBrends;
                            },
                                function (errorObject) {

                                }).finally(function () {
                                    $rootScope.loadingHide();
                                });
                        }

                        $scope.cancel = function () {
                            $uibModalInstance.dismiss({ $value: 'cancel' });
                        };

                        //открытие блока для добавления бренда
                        $scope.openWindowAdd = function (openModel) {
                            $scope.openWindow = openModel;
                        };

                        //добавление бренда
                        $scope.addBrang = function () {

                            adminService.add($scope.brand).then(function (value) {
                                getAllBrends();
                            },
                                function (errorObject) {

                                }).finally(function () {

                                });
                        };
                        getAllBrends();
                    }
                ]
            }).result.then(postClose, postClose);
        };


        //Modal Window для стран

        $scope.openCountry = function () {
            $scope.asideState = {
                open: true
            };

            function postClose() {
                $scope.asideState.open = false;
            }

            $uibModal.open({
                templateUrl: function () {
                    return 'Angular/ModalWindows/ControlCountryModalWindow.html';
                },
                size: 'lg',
                controller: [
                    '$rootScope', '$scope', '$uibModalInstance', function ($rootScope, $scope, $uibModalInstance) {

                        $scope.country = { Name: "", Description: "" };
                        $scope.gridCountries = {
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
                        };

                        //запрос на список стран
                        function getAllCountries() {
                            $rootScope.loadingShow();
                            countryService.getAll().then(function (value) {
                                $scope.listCountry = angular.copy(value);
                                $scope.gridCountries.data = $scope.listCountry;
                            },
                                function (errorObject) {

                                }).finally(function () {
                                    $rootScope.loadingHide();
                                });
                        }

                        $scope.cancel = function () {
                            $uibModalInstance.dismiss({ $value: 'cancel' });
                        };

                        //открытие блока для добавления страны 
                        $scope.openWindowAdd = function (openModel) {
                            $scope.openWindow = openModel;
                        };

                        //добавление страны
                        $scope.addCountry = function () {

                            countryService.add($scope.country).then(function (value) {
                                getAllCountries();
                            },
                                function (errorObject) {

                                }).finally(function () {

                                });
                        };
                        getAllCountries();
                    }
                ]
            }).result.then(postClose, postClose);
        };

        //Modal Window для струн

        $scope.openNumberString = function () {
            $scope.asideState = {
                open: true
            };

            function postClose() {
                $scope.asideState.open = false;
            }

            $uibModal.open({
                templateUrl: function () {
                    return 'Angular/ModalWindows/ControlNumberStringModalWindow.html';
                },
                size: 'lg',
                controller: [
                    '$rootScope', '$scope', '$uibModalInstance', function ($rootScope, $scope, $uibModalInstance) {

                        $scope.numberstring = { Number: "" };
                        $scope.gridNumberStrings = {
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
                                    field: 'Number',
                                    width: '100%',
                                    displayName: 'Номер',
                                    cellTemplate: '<p style="margin-left:15px;" >{{row.entity.Number}}</p>'
                                }
                            ],
                            onRegisterApi: function (gridApi) {
                                $scope.gridApi = gridApi;
                                $scope.gridApi.selection.on.rowSelectionChanged($scope,
                                    function (row) {
                                    });
                            }
                        };

                        //запрос на список струн
                        function getAllNumberStrings() {
                            $rootScope.loadingShow();
                            numberstringService.getAll().then(function (value) {
                                $scope.listNumberString = angular.copy(value);
                                $scope.gridNumberStrings.data = $scope.listNumberString;
                            },
                                function (errorObject) {

                                }).finally(function () {
                                    $rootScope.loadingHide();
                                });
                        }

                        $scope.cancel = function () {
                            $uibModalInstance.dismiss({ $value: 'cancel' });
                        };

                        //открытие блока для добавления струны 
                        $scope.openWindowAdd = function (openModel) {
                            $scope.openWindow = openModel;
                        };

                        //добавление струны
                        $scope.addNumberString = function () {

                            numberstringService.add($scope.numberstring).then(function (value) {
                                getAllNumberStrings();
                            },
                                function (errorObject) {

                                }).finally(function () {

                                });
                        };
                        getAllNumberStrings();
                    }
                ]
            }).result.then(postClose, postClose);
        };


        // register your controller into a dependent module 
        angular
            .module("Web.Controllers")
            .controller("adminController",
            ["$scope", "$rootScope", "$uibModal", "adminService", "countryService", 'numberstringService', adminController]);

    }


});



