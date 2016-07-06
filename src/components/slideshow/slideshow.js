import template from './slideshow.html';
import styles from './slideshow.scss';

export default {
  template,
  controllerAs: 'slideshow',
  bindings: {
    data: '<' //,
    // image: '<'
  },
  controller
};

controller.$inject=['$state'];

function controller ($state) {
  // this.uiOnParamsChanged = (params) => {
  //   this.view = params.view;
  //   this.image = params.image;
  //   console.log('slideshow params change: ', this.view);
  // };

  this.index = 0;

  this.prev = function() {
    if (--this.index < 0) this.index = this.data.length -1;
  };
  this.next = function() {
    if (++this.index > this.data.length -1) this.index = 0;
  };
  this.styles = styles;
  this.test = function() {
    console.log($state);
    // $state.go($state.current.name, {view: 'slideshow', image: 9302989840978});

  };
}
