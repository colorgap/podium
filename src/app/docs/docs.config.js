(function() {
    'use strict';

    angular.module('podium').constant('docsConfig', {
        docs:[{
            id:'gettingStarted',
            docLabel:'Getting Started'
        },{
            id:'config',
            docLabel:'Configuration'
        },{
            id:'colors',
            docLabel:'Colors'
        },{
            id:'aboutUs',
            docLabel:'About Us'
        }],
        template:{
            gettingStarted: 'gettingStarted.html',
            config: 'config.html',
            colors: 'colors.html',
            aboutUs:'aboutus.html'
        }
    });
})();