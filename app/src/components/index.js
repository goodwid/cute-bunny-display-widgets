import angular from 'angular';
import app from './app/app';
import text from './text/text';
import thumb from './thumb/thumb';


const components = angular.module('components', [])
  .component('app',app)
  .component('text',text)
  .component('thumb', thumb);



export default components.name;
