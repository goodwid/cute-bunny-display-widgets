// import angular from 'angular';
// import app from './app/app';
// import imageSelector from './imageSelector/imageSelector';
// import text from './text/text';
// import thumb from './thumb/thumb';
// import full from './full/full';
// import newBunny from './newBunny/newBunny';
//
// const components = angular.module('components', [])
//   .component('app',app)
//   .component('imageSelector',imageSelector)
//   .component('text',text)
//   .component('thumb', thumb)
//   .component('full', full)
//   .component('newBunny', newBunny);
//
// export default components.name;


import angular from 'angular';
import camelcase from 'camelcase';
import path from 'path';

const reqContext = require.context(
    './',
    true,
    /[^index].js$/
);

const components = angular.module( 'components', [] );

reqContext.keys().forEach( key => {
  const name = camelcase( path.basename( key, '.js' ) );
  components.component( name, reqContext( key ).default );
});

export default components.name;
