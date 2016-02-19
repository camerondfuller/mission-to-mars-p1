var React = require('react');
var history = require('history');

var WelcomeScreen = React.createClass({
   takeTest: function() {
      this.prop.history.push('/evaluation');
   },
   render: function() {
      return (
         React.createElement(
            'div',
            {className:'body center-child'},
            // <div className="body center-child">
            //    <button type="button" className="start-btn">Take Test</button>
            // </div>
            React.createElement(
               'button',
               { className: 'start-btn', onClick: this.takeTest },
               'Take test'
            )
         )
      );
   }
});

module.exports = WelcomeScreen;
