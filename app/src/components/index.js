import angular from 'angular';
import camelcase from 'camelcase';
import path from 'path';

const reqContext = require.context(
    './',
    true,
    /.js$/
);

const components = angular.module( 'components', [] );

reqContext.keys().forEach( key => {
  if (key.startsWith('./index')) return;
  const name = camelcase( path.basename( key, '.js' ) );

  components.component( name, reqContext( key ).default );
});

export default components.name;
