import Controller from '@ember/controller';
import window from 'ember-window-mock';

export default Controller.extend({
	actions: {
		init() {
			this._super(...arguments);
		},
		star(newValue) {
			this.set('saved', newValue);
			this.set('model.saved', newValue);
		},
		deleteBusiness(model) {
			let confirmed = window.confirm('Are you sure you want to delete this business?');
			if (confirmed) {
				model.destroyRecord();
				this.transitionToRoute('index');
			}
		}
	}
});
