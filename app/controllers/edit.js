import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		editBusiness(event) {
			event.preventDefault();
			let business = this.model;
			business.save().then(() => {	
				this.transitionToRoute('business', business.id);
			});
		}
	}
});
