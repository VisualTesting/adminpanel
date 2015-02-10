'use strict';

angular.module('webdrivercssAdminpanelApp').controller('MainCtrl', function ($scope, branches, $routeParams) {

    $scope.branches = branches;
    $scope.project = $routeParams.id;
    $scope.noReposFound = Object.keys($scope.branches).length === 0;

    $scope.diffs = [];
    // $scope.shots = [];
    $scope.api = document.location.protocol + '//' + document.location.hostname + ':' + document.location.port + '/api/';

    if($routeParams.branchName && branches[$routeParams.branchName]) {
        $scope.dir   = $routeParams.branchName;
        // $scope.diffs = repositories[$routeParams.id].diffs;
        // $scope.shots = repositories[$routeParams.id].images;
    }

    // angular.forEach($scope.diffs, function(diff) {
    //     $scope.shots.splice($scope.shots.indexOf(diff.replace(/diff/,'regression')),1);
    //     $scope.shots.splice($scope.shots.indexOf(diff.replace(/diff/,'baseline')),1);
    // });

});
