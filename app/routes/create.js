import Route from '@ember/routing/route';

export default Route.extend({
	setupController(controller, model) {
		this._super(controller, model);
		controller.set('alias', '');
		controller.set('name', '');
		controller.set('is_opened', true);
		controller.set('address', '');
		controller.set('phone', '');
		controller.set('url','');
		controller.set('photo_url', '');
		controller.set('latitude', '');
		controller.set('logitude', '');
		controller.set('saved',false);
	},
	title: function() {
		return 'Upload new business'
	}
});
