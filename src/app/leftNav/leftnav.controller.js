(function() {
    'use strict';

    angular.module('podium').controller('leftNavCtrl', ['$scope','docsConfig',function($scope,docsConfig){
        $scope.leftNavList = docsConfig.docs;

        $scope.toggleLeftNav = function(){
            $scope.toggle = !$scope.toggle;
        };
    }]);
})();