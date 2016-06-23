import template from './app.html';

export default {
  template,
  controllerAs: 'app',
  controller() {
    this.data = [{
      title: 'Cutest Bunny Ever',
      description: 'This is the cutest damn bunny in all of creation.  Other things attempting to be cute tremble with terror at the cuteness of the bunny displayed here today.',
      url: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg'
    }];
  }
};
