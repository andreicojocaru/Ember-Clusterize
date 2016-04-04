/*jshint node:true*/
module.exports = {
    description: 'ember-clusterize',
    normalizeEntityName: function() {}, // no-op since we're just adding dependencies
    afterInstall: function(options) {
        return this.addBowerPackageToProject('clusterize');
    }
};
