var app = angular.module('goodLuck', []);
app.controller('displayCtrl', function($scope) {
    $scope.inputs = [];
    $scope.test = function() {
        console.log("Hello World!");
    }
})