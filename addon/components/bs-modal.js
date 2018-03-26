import Component from '@ember/component';
import layout from '../templates/components/bs-modal';
import { computed } from '@ember/object';
import $ from 'jquery';

export default Component.extend({
  layout,
  classNames: ['modal'],
  attributeBindings: ['tabindex', 'role', 'aria-labelledby', 'aria-hidden', 'data-backdrop', 'data-keyboard'],
  tabindex: '-1',
  'aria-labelledby': computed(function(){
    return `${this.get('elementId')}Title`;
  }),
  'aria-hidden': 'true',
  role: 'dialog',
  autoload: false,
  modalTitle: 'Modal title',
  modalBody: '<p>Modal body text goes here.</p>',
  init(){
    this._super(...arguments);
    if(this.get('autoload')){
      this.set('data-backdrop', 'static');
      this.set('data-keyboard', 'false');
    } else {
      this.set('data-backdrop', 'true');
      this.set('data-keyboard', 'true');
    }
  },
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
  },
  actions: {
    triggerCloseModal() {
      let closeFn = this.get('closeModal');
      if(typeof closeFn == 'function'){
        this.get('closeModal')();
      } else {
        $(`#${this.get('elementId')}`).modal('hide');
      }
    },
  }
});
