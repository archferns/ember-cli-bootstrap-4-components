import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bs-modal', 'Integration | Component | bs modal', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{bs-modal}}`);

  assert.equal(this.$('.modal-title').text().trim(), 'Modal title');

  // Template block usage:
  this.render(hbs`
    {{#bs-modal}}
      template block text
    {{/bs-modal}}
  `);

  assert.equal(this.$('.modal-content').text().trim(), 'template block text');
});
