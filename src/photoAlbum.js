import angular from 'angular';
import components from './components';
import services from './services';
// import router from 'angular-ui-router';

const app = angular.module('photoAlbum', [components, services]);

export default app;
