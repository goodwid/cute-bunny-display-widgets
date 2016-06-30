import angular from 'angular';
import app from './photoAlbum';
import './scss/main.scss';
import routes from './routes';

app.config(routes);

app.value( 'apiUrl', 'http://localhost:9000/api');

angular.bootstrap(document, [app.name]);
