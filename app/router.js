import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('business', {path: '/businesses/:id'});
  this.route('map', {path: 'map/:id'});
  this.route('saved');
  this.route('create', { path: '/businesses/create'});
  this.route('edit', { path: '/businesses/:id/edit' });
});

export default Router;
