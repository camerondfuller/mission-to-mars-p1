var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');


import Timer from './countdown-clock.jsx';

var Body = React.createClass({
   render: function() {
      return (

         <div className="body center-child">
            <div className="timer">
               <Timer startMinutes={1} onClick={this.handleClick}/>
            </div>
            <button type="button" className="start-btn" onClick={this.handleClick}>begin evaluation</button>

         </div>

      );
   }
});

module.exports = Body;
