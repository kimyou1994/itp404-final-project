import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | star-button', function(hooks) {
  setupRenderingTest(hooks);

  test('the star is solid when saved is true', async function(assert) {
    this.set('saved', true);
    // Template block usage:
    await render(hbs` <StarButton class="star" 
                        @saved={{saved}} 
                         />`);
    assert.dom('[data-test="star-test"]').hasClass('glyphicon-star');
  });
  test('the star is empty when saved is false', async function(assert) {
    this.set('saved', false);
    // Template block usage:
    await render(hbs` <StarButton class="star" 
                        @saved={{saved}} 
                         />`);
    assert.dom('[data-test="star-test"]').hasClass('glyphicon-star-empty');
  });
});
