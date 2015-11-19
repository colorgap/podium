(function() {
    'use strict';

    angular.module('podium').controller('leftNavCtrl', ['$scope','docsConfig',function($scope,docsConfig){
        $scope.leftNavList = docsConfig.docs;
    }]);
})();