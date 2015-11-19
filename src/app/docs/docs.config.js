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