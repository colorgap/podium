(function() {
  'use strict';

  angular
    .module('podium')
    .run(['$log',function($log) {
    $log.debug('runBlock end');
  }]);
})();
