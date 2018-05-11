'use strict';

var React = require('react/addons');

// CSS
require('normalize.css');
require('../styles/main.css');

var imageDatas = require('../data/imageDatas.json');
var imageUrls = (function() {
  var imageUrls = [];
  for(var i = 0; i < imageDatas.length; i++) {
    imageUrls[i] = {
      url: require('../images/' + imageDatas[i].fileName)
    };
  }
  return imageUrls;
})();

var GalleryByReactApp = React.createClass({
  render: function() {
    return (
      <selection className="stage">
        <selection className="img-sec">
        </selection>
        <nav calssName="controller_nav">
        </nav>
      </selection>
    );
  }
});
React.render(<GalleryByReactApp />, document.getElementById('content')); // jshint ignore:line

module.exports = GalleryByReactApp;
