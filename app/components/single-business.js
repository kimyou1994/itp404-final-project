import Component from '@ember/component';

export default Component.extend({
	actions: {
		star(business) {
			business.set('saved', !business.saved);
		}
	}
});
