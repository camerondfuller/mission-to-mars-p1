var React = require('react');
var ReactDOM = require('react-dom');

var Body = React.createClass({
   render:function() {
      return (
         <div className=".body">

         </div>
      );
   }
});

ReactDOM.render(<Body />, document.querySelector('#mountnode'));
