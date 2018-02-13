import Component from '@ember/component';
import layout from '../templates/components/bs-modal';
import $ from 'jquery';

export default Component.extend({
  layout,
  classNames: ['modal'],
  tabindex: '-1',
  role: 'dialog',
  autoload: false,
  didInsertElement() {
    this._super(...arguments);
    if(this.get('autoload')){
      $(`#${this.get('elementId')}`).modal('show');
    }
  },
  willDestroyElement() {
    if(this.get('autoload')){
      $(`#${this.get('elementId')}`).modal('hide');
    }
    this._super(...arguments);
  }
});