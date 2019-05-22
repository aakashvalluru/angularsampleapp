angular.module("myApp", [])
    .controller("myfirstController", ['$scope', function ($scope) {

        console.log("This is form controller");
        $scope.hello = "hello world";

    }]);