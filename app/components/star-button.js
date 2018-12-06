import Component from '@ember/component';
import { timeout } from 'ember-concurrency';

export default Component.extend({
	tag: 'button',
	attributeBindings: ['isPending:disabled'],
	isPending: false,
	init() {
		this._super(...arguments); //spread operator
		this.set('buttonText', this.defaultText);
	},
	actions: {
		click() {
			this.onClick(!this.saved);
			this.set('isPending', true);
			this.set('buttonText', this.pendingText);
			timeout(1000).then(() => {
				this.set('isPending', false);
				this.set('buttonText', this.defaultText);
			});
		}
	}
});
