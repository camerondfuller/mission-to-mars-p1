var React = require('react');
var ReactDOM = require('react-dom');

var Body = React.creatClass({
   render:function() {
      return <div><p>Hello World</p></div>
   }
});





ReactDOM.render(<Body />, document.querySelector('.mountnode'));
