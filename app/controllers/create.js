import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		init() {
			this._super(...arguments);
		},
		createBusiness(event) {
			event.preventDefault();
			if (this.name === undefined ||  this.name.trim() === "") {
				this.set('missing-name', 'Please fill out name of business');
				return;
			}else {
				this.set('missing-name', '');
			}
			if (this.address === undefined ||  this.address.trim() === "") {
				this.set('missing-address', 'Please fill out address of business');
				return;
			}else {
				this.set('missing-address', '');
			}
			if (this.phone === undefined ||  this.phone.trim() === "") {
				this.set('missing-phone', 'Please fill out phone number of business');
				return;
			}else {
				this.set('missing-phone', '');
			}
			let business = this.store.createRecord('business', {
				alias: this.alis,
				name: this.name,
				address: this.address,
				phone: this.phone,
				url: this.url,
				photo_url: this.photo_url,
				latitude: this.latitude,
				longitude: this.longitude
			});
			business.save().then(() => {
				this.transitionToRoute('index');
			});
		}
	}
});
