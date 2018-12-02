import Route from '@ember/routing/route';

export default Route.extend({
	model() {
		return this.store.findAll('business');
	},
	title: function() {
		return 'Saved Businesses'
	}
});
