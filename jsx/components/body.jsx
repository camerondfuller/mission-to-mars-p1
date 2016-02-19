var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');


import Timer from './countdown-clock.jsx';

var Body = React.createClass({
   getInitialState: function() {
      return {
         started: false
      };
   },
   showIfStarted: function() {
      if(this.state.started === false) {
         return "timer hidden"
      } else {
         return "timer"
      }
   },
   handleClick: function() {
      this.setState({ started: true });
   },

   render: function() {
      return (

         <div className="body center-child">
            <div className={this.showIfStarted()}>
               <Timer startMinutes={1} />
            </div>
            <button type="button" className="start-btn" onClick={this.handleClick}>begin evaluation</button>

         </div>

      );
   }
});

module.exports = Body;
