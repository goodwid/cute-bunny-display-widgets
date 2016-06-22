import angular from 'angular';
import app from './app/app';



const components = angular.module('components', [])
  .component('app',app);



export default components.name;
