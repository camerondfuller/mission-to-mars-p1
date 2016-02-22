
var React = require('react');
import {browserHistory} from 'react-router';


var Timer = React.createClass({

   getInitialState: function(){
      var seconds = this.getSeconds();

      return {
         secondsElapsed: seconds,
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
   start:function (){
      if(!this.interval) {
         this.interval = setInterval(this._decrementByOne, 1000);
      }
   },
   displayZero: function() {
      if(this.state.secondsElapsed === 60 || this.state.secondsElapsed < 10) {
         return '0';
      } else {
         return ;
      }
   },
   componentWillUpdate: function(prevProps, prevState) {
      if(this.state.secondsElapsed === 0) {
         this.props.onTimeFinished();
      }
   },
   componentWillReceiveProps: function(nextProps){
      if (nextProps.startHandler === true) {
         this.start();
      };
   },
   render: function(){
      return   (
         <div>
            <span>{this.minutesLeft()}</span>:<span>{this.displayZero()}</span><span >{this.secondsLeft()}</span>
         </div>
      );
   }

});

module.exports = Timer;
