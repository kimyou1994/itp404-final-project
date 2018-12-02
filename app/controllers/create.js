import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		createBusiness(event) {
			event.preventDefault();
			if (this.name === undefined || this.address === undefined || this.name.trim() === "" || this.address.trim() === "") {
				this.set('message', 'Please fill out all required fields');
				return;
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
				this.transitionToRoute('business', business.id);
			},() => {
				this.set('message', 'Error: Unable to save!');
			});
		}
	}
});
