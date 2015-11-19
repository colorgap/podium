(function() {
  'use strict';

  angular
    .module('podium', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ui.router', 'ui.bootstrap']);

})();

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
(function() {
  'use strict';

  angular
    .module('podium')
    .run(['$log',function($log) {
    $log.debug('runBlock end');
  }]);
})();

(function() {
    'use strict';

    angular.module('podium').constant('docsConfig', {
        docs:[{
            id:'quickStart',
            docLabel:'Quick Start'
        },{
            id:'introduction',
            docLabel:'Introduction'
        },{
            id:'gettingStarted',
            docLabel:'Getting Started'
        }],
        template:{
            gettingStarted: 'gettingStarted.html'
        }
    });
})();
(function() {
    'use strict';

    angular.module('podium').controller('leftNavCtrl', ['$scope','docsConfig',function($scope,docsConfig){
        $scope.leftNavList = docsConfig.docs;
    }]);
})();