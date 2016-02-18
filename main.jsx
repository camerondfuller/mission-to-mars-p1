var React = require('react');
var ReactDOM = require('react-dom');

var Body = React.createClass({


   render: function() {
      return (
         <div className="body container">
            <button type="button" className="start-btn" ref="begin-button">begin evaluation</button>
         </div>

      );
   }
});

ReactDOM.render(<Body />, document.querySelector('#mountnode'));
