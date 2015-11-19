(function() {
  'use strict';
  angular.module('podium')
    .config(['$stateProvider', '$urlRouterProvider','docsConfig',function ($stateProvider, $urlRouterProvider,docsConfig) {
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'dist/partials/home/index.html'
        })
        .state('docs', {
          url: '/:pageId',
          templateUrl: function($stateParams){
            return 'dist/partials/docs/' + docsConfig.template[$stateParams.pageId];
          }
        });

      $urlRouterProvider.otherwise('/');
  }]);
})();