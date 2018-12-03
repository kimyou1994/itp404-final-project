import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		init() {
			this._super(...arguments);
		},
		editBusiness(event) {
			event.preventDefault();
			if (this.model.name === undefined ||  this.model.name.trim() === "") {
				this.set('missing-name', 'Please fill out name of business');
				return;
			}else {
				this.set('missing-name', '');
			}
			if (this.model.address === undefined ||  this.model.address.trim() === "") {
				this.set('missing-address', 'Please fill out address of business');
				return;
			}else {
				this.set('missing-address', '');
			}
			if (this.model.phone === undefined ||  this.model.phone.trim() === "") {
				this.set('missing-phone', 'Please fill out phone number of business');
				return;
			}else {
				this.set('missing-phone', '');
			}
			let business = this.model;
			business.save().then(() => {	
				this.transitionToRoute('business', business.id);
			});
		}
	}
});
