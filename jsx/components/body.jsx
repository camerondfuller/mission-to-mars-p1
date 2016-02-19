var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');


import Timer from './countdown-clock.jsx';

var Body = React.createClass({
   getInitialState: function() {
      return {
         started: false
      };
   },
   hidden: function(shouldHide) {
      if(this.state.started !== shouldHide) {
         return "hidden"
      } else {
         return ""
      }
   },
   handleClick: function() {
      this.setState({ started: true });
   },

   render: function() {
      return (

         <div className="body center-child">
            <div className={"timer "+this.hidden(true)}>
               <Timer startMinutes={1} startHandler={this.state.started} />
            </div>
            <button type="button" className={'start-btn '+this.hidden(false)} onClick={this.handleClick}>begin evaluation</button>

         </div>

      );
   }
});

module.exports = Body;
