import { module, test } from 'qunit';
import { visit, currentURL, fillIn, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import window, { reset } from 'ember-window-mock';

module('Acceptance | businesses', function(hooks) {
	setupApplicationTest(hooks);
	setupMirage(hooks);
	hooks.afterEach(function() {
		reset();
	});
	
	test('visiting main page', async function(assert) {
		await visit('/');

		assert.equal(currentURL(), '/');
	});

	test('main page has two businesses', async function(assert) {
		server.createList('business', 2);
		await visit('/');
		assert.dom('[data-test="business"]').exists({ count: 2 });
	});
	test('deleting a single business information', async function(assert) {
		server.createList('business', 2);
		window.confirm = () => true;
		await visit('/businesses/1');
		await click('[data-test="business-delete"]');
		assert.dom('[data-test="business"]').exists({ count: 1 });
		assert.equal(currentURL(), '/');
	}); 
	test('viewing business information inside business page', async function(assert) {
		server.create('business', {
			name: 'Four Barrel Coffee',
			address: '375 Valencia St, San Francisco, CA 94103',
			phone: '(415) 252-0800'
		});
		await visit('/businesses/1');
		assert.dom('[data-test="business-name"]').hasText('Four Barrel Coffee');
		assert.dom('[data-test="business-address"]').hasText('375 Valencia St, San Francisco, CA 94103');
		assert.dom('[data-test="business-phone"]').hasText('(415) 252-0800');
	});
	test('creating a business model', async function(assert) {
		await visit('/businesses/create');
		await fillIn('#name', 'Sushi');
		await fillIn('#address', '11111 NE Whatever');
		await fillIn('#phone', '(213) 333-3333');
		await click('[data-test="create-submit"]');
		assert.dom('[data-test="business"]').exists({ count: 1 });
		assert.equal(currentURL(), '/');
	});
	test('editing existing business', async function(assert) {
		server.create('business', {
			name: 'Four Barrel Coffee',
			address: '375 Valencia St, San Francisco, CA 94103',
			phone: '(415) 252-0800'
		});
		await visit('/businesses/1');
		await click('[data-test="business-edit"]');
		await visit('/businesses/1/edit');
		await fillIn('#name', 'Sushi');
		await fillIn('#address', '11111 NE Whatever');
		await fillIn('#phone', '(213) 333-3333');
		await visit('/businesses/1');
		assert.dom('[data-test="business-name"]').hasText('Sushi');
		assert.dom('[data-test="business-address"]').hasText('11111 NE Whatever');
		assert.dom('[data-test="business-phone"]').hasText('(213) 333-3333');
		assert.equal(currentURL(), '/businesses/1');
	});
});
