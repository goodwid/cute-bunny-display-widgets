import angular from 'angular';
import app from './photoAlbum';
import './scss/main.scss';
import routes from './routes';
import http from './http';
import auth from './auth';

app.config(http);
app.config(routes);
app.run(auth);
app.value( 'apiUrl', 'http://localhost:9000/api');

angular.bootstrap(document, [app.name]);
