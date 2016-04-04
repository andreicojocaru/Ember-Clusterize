import Ember from 'ember';
import layout from '../templates/components/ember-clusterize';
import Clusterize from 'clusterize';

export default Ember.Component.extend({
    layout,
    data: null,
    clusterizeObject: null,
    didInsertElement() {
        console.info("Initializing Clusterize.js...");

        var cObject = new Clusterize({
            rows: this.get('data'),
            scrollElem: this.$().find('.clusterize-scroll')[0],
            contentElem: this.$().find('.clusterize-content')[0],
        });

        this.set('clusterizeObject', cObject);
    },
    willDestroyElement: function() {
        console.info("Destroying Clusterize.js...");
        this.get('clusterizeObject').destroy();
    }
});