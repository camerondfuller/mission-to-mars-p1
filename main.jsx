var React = require('react');
var ReactDOM = require('react-dom');

var Body = React.createClass({

   getInitialState: function () {
      return {
         timerStarted: false
      }
   },

   showTimer: function() {
      // press the button and the button disappears as the timer appears and starts counting down. Then run timerEnds().
      return
   },

   timerEnds: function() {
      // the countdown timer disappears and the original button reappears.
      return
   },

   render: function() {
      return (
         <div className="body container">
            <button type="button" className="start-btn" onClick={this.showTimer}>begin evaluation</button>
            <div className="timer"><Timer startMinutes={1} /></div>
         </div>

      );
   }
});
var Timer = React.createClass({

   getInitialState: function(){
      var seconds = this.getSeconds();

      return {
         secondsElapsed: seconds
      };
   },
   getSeconds: function() {
      if(this.props.startMinutes >= 1) {
         return this.props.startMinutes*60
      } else {
         return 60
      }
   },
   secondsLeft: function(){
      return Math.floor(this.state.secondsElapsed%60)
   },
   stopTimer: function(){
      clearInterval(this.interval);
   },
   tick: function(){
      this.setState({secondsElapsed: this.state.secondsElapsed - 1});
      if(this.state.secondsElapsed === 0){
         this.stopTimer();
      }
   },
   minutesLeft: function() {
      return  Math.floor(this.state.secondsElapsed/60)
   },
   start:function (){
      this.interval = setInterval(this.tick, 1000);
   },
   displayZero: function() {
      if(this.state.secondsElapsed < 10) {
         return '0'
      } else {
         return
      }
   },
   componentDidMount: function(){
      setTimeout(this.start, 0);
   },

   render: function(){
      return ( <div><span>{this.minutesLeft()}</span>:<span>{this.displayZero}</span><span>{this.secondsLeft()}</span></div>);
   }

});

ReactDOM.render(<Body />, document.querySelector('#mountnode'));
