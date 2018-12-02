import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		init() {
			this._super(...arguments);
		},
		star(business, id, newValue) {
			business.set('saved', newValue);
		}
	}
});
