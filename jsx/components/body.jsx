var React = require('react');

import Timer from './countdown-clock.jsx';

var Body = React.createClass({
   render: function() {
      return (
         <div className="body center-child">
            <div className="timer">
               <Timer startMinutes={1} />
            </div>
            <button type="button" className="start-btn" onClick={this.showTimer}>begin evaluation</button>

         </div>

      );
   }
});

module.exports = Body;
