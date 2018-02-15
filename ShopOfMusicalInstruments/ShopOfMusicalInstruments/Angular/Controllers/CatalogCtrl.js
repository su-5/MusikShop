(function () {
    "use strict";

    // controller class definintion
    var catalogController = function ($scope, $rootScope) {
       
    };

    // register your controller into a dependent module 
    angular
        .module("Web.Controllers")
        .controller("catalogController", ["$scope", "$rootScope", catalogController]);

})();