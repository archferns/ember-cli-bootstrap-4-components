import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    backToParentRoute(){
      this.transitionToRoute('modal');
    }
  }
});
