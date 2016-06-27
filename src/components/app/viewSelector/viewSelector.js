import template from './viewSelector.html';

export default {
  template,
  controllerAs: 'viewSelector',
  bindings: {
    data: '<'
  },
  controller: function() {
    this.view = 'tile';
  }
};
