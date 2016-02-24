(function() {
  'use strict';

  angular
    .module('yoShapingAngular')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
