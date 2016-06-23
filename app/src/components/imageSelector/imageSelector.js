import template from './imageSelector.html';

export default {
  template,
  controllerAs: 'imageSelector',
  bindings: {
    image: '=',
    view: '='
  },
  controller: function() {
    this.view = 'text';
  }
};
