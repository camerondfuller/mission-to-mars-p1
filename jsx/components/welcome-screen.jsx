var React = require('react');
import {browserHistory} from 'react-router';

var WelcomeScreen = React.createClass({
   takeTest: function() {
      browserHistory.push('/evaluation');
   },
   render: function() {
      return (
         React.createElement(
            'div',
            {className:'body center-child'},
            React.createElement(
               'button',
               { className: 'start-btn', onClick: this.takeTest },
               'Click if you want to go to MARS!!!'
            )
         )
      );
   }
});

module.exports = WelcomeScreen;
