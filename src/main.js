import angular from 'angular';
import app from './photoAlbum';
import './scss/main.scss';

app.value( 'apiUrl', 'http://localhost:9000/api');

angular.bootstrap(document, [app.name]);
