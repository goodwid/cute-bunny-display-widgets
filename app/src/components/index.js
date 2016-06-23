import angular from 'angular';
import app from './app/app';
import imageSelector from './imageSelector/imageSelector';
import text from './text/text';
import thumb from './thumb/thumb';
import full from './full/full';
import newBunny from './newBunny/newBunny';

const components = angular.module('components', [])
  .component('app',app)
  .component('imageSelector',imageSelector)
  .component('text',text)
  .component('thumb', thumb)
  .component('full', full)
  .component('newBunny', newBunny);

export default components.name;
