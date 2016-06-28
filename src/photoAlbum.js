import angular from 'angular';
import components from './components';
import services from './services';

const app = angular.module('photoAlbum', [components, services]);

export default app;
