import angular from 'angular';
import app from './app/app';
import text from './text/text';


const components = angular.module('components', [])
  .component('app',app)
  .component('text',text);



export default components.name;
