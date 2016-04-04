/* jshint node: true */
'use strict';

module.exports = {
    name: 'ember-clusterize',
    included: function(app) {
        this._super.included(app);

        app.import(app.bowerDirectory + '/clusterize/clusterize.css');
        app.import(app.bowerDirectory + '/clusterize/clusterize.js');
        
        app.import('vendor/clusterize-shim/shim.js', {
            type: 'vendor',
            exports: {
                'clusterize': [
                    'default'
                ]
            }
        });
    }
};
