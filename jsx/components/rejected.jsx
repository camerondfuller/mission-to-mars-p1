var React = require('react');
import {browserHistory} from 'react-router';

var Rejected = React.createClass({
   getInitialState: function() {
      return {
         state: true
      };
   },
   componentDidMount: function() {
      setTimeout(function() {
         browserHistory.push('/welcome')}, 5000)
   },
   render: function() {
      return (
            <div className="body mars center-child">
               <span className="rejected">rejected!!!</span>
            </div>
      );
   }
});

module.exports = Rejected;
