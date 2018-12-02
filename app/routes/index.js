import Route from '@ember/routing/route';

export default Route.extend({
	model() {
		return this.store.findAll('business');
	},
	title: 'Search Results',
	actions: {
		loading(transition, originRoute) {
			let controller = this.controllerFor('index');
				controller.set('currentlyLoading', true);
				transition.promise.finally(function() {
					controller.set('currentlyLoading', false);
				});
		},
		error(error) {
			this.notifier.error(error);
			return true;
		}
	}
});
