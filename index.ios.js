/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var MovieListScreen = require('./MovieListScreen');

var {
  AppRegistry
} = React;

var movieFilmz = React.createClass({


  render: function() {
    return(<MovieListScreen />)
  },


});

AppRegistry.registerComponent('movieFilmz', () => movieFilmz);
