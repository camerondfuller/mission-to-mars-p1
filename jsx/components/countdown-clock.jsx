
var React = require('react');
import {browserHistory} from 'react-router';


var Timer = React.createClass({

   getInitialState: function(){
      return {
         secondsElapsed: this.getSeconds(),
      };
   },
   getSeconds: function() {
      if(this.props.startMinutes >= 1) {
         return this.props.startMinutes*60;
      } else {
         return 60;
      }
   },
   minutesLeft: function() {
      return  Math.floor(this.state.secondsElapsed/60);
   },
   secondsLeft: function(){
      return Math.floor(this.state.secondsElapsed%60);
   },
   componentWillUnmount: function(){
      clearInterval(this.interval);
   },
   _decrementByOne: function(){
      this.setState({secondsElapsed: this.state.secondsElapsed - 1});
      if(this.state.secondsElapsed === 0){
         this.componentWillUnmount();
      }
   },
   start: function(){
      if(!this.interval) {
         this.interval = setInterval(this._decrementByOne, 1000);
      }
   },
   displayZero: function() {
      if(this.state.secondsElapsed%60 === 0 || this.state.secondsElapsed < 10) {
         return '0';
      } else {
         return ;
      }
   },
   onTimerFinishedOut: function() {
      if(this.state.secondsElapsed === 0) {
         browserHistory.push('/rejected');
      }
   },
   componentWillReceiveProps: function(newProps){
      if (newProps.startHandler === true) {
         this.start();
      };
   },
   render: function(){
      return   (
         <div>
            <span>{this.minutesLeft()}</span>:<span>{this.displayZero()}</span><span >{this.secondsLeft()}</span>
            {this.onTimerFinishedOut()}
         </div>
      );
   }

});

module.exports = Timer;
