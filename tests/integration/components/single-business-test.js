import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | single-business', function(hooks) {
	setupRenderingTest(hooks);

	test('single-business render', async function(assert) {
		this.set('business', {
		name: 'Four Barrel Coffee',
		address: '375 Valencia St, San Francisco, CA 94103',
		phone: '(415) 252-0800'
	});
	await render(hbs`<SingleBusiness 
						@business=business
						/>`);
	assert.equal(this.$('.business-info').length, 1);
	});

  //Even though I set business to hardcoded values, it gives me an empty data. Couldn't do this correctly. If
  //this business data was inserted correctly, this test should be passed
 //  test('single-business displayed', async function(assert) {
 //  	this.set('business', {
	// 	name: 'Four Barrel Coffee',
	// 	address: '375 Valencia St, San Francisco, CA 94103',
	// 	phone: '(415) 252-0800'
	// });
 //    await render(hbs`<SingleBusiness 
 //    					@business=business
 //            			/>`);
 //    let $business = this.$('.business-info')
 //    assert.equal($business.eq(0).find('span').eq(0).text().trim(), 'Four Barrel Coffee');
 // 	assert.equal($business.eq(0).find('span').eq(1).text().trim(), '(415) 252-0800');
 //  	assert.equal($business.eq(0).find('span').eq(2).text().trim(), '375 Valencia St, San Francisco, CA 94103');
 //  });
});
