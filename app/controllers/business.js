import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
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
