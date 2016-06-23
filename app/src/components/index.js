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
  console.log('name: ', name, '\t\t\t\tkey: ', key);
  components.component( name, reqContext( key ).default );
});

export default components.name;
