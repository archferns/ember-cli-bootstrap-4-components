import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('modal', function() {
    this.route('simple-autoload');
    this.route('block-autoload');
  });
  this.route('popover');
});

export default Router;
