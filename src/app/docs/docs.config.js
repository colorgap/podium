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
            id:'styles',
            docLabel:'Styling'
        },{
            id:'aboutUs',
            docLabel:'About Us'
        }],
        template:{
            gettingStarted: 'gettingStarted.html',
            config: 'config.html',
            styles: 'styles.html',
            aboutUs:'aboutus.html'
        }
    });
})();