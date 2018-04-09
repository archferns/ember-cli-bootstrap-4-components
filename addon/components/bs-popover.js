import Component from '@ember/component';
import layout from '../templates/components/bs-popover';
import $ from 'jquery';

export default Component.extend({
  layout,
  tagName: 'button',
  attributeBindings: ['type', 'data-animation', 'data-container', 'data-content', 'data-delay', 'data-html', 'data-placement', 'data-selector', 'data-template', 'data-title', 'data-trigger', 'data-offset', 'data-fallbackPlacement', 'data-boundary'],
  type: 'button',
  'data-animation': 'true',
  'data-container': 'body',
  'data-content': 'Please add your content as data-content',
  'data-delay': 0,
  'data-html': false,
  'data-placement': 'right',
  'data-selector': false,
  'data-template': '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
  'data-title': '',
  'data-trigger': 'click',
  'data-offset': 0,
  'data-fallbackPlacement': 'flip',
  'data-boundary': 'scrollParent',
  didInsertElement() {
    this._super(...arguments);
    $(`#${this.get('elementId')}`).popover();
  },
});
