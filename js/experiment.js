experimentModule = angular.module('experimentModule', ['ngRoute'])

.controller('experimentCtrl', function($scope, $routeParams) {
    $scope.experiment = $routeParams.experiment;
})

