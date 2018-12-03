import Route from '@ember/routing/route';

export default Route.extend({
	model(params) {
		return this.store.findRecord('business', params.id);
	},
	title: function() {
		return 'Location of ' + this.modelFor('map').name
	}
});
