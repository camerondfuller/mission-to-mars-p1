var React = require('react');
import {browserHistory} from 'react-router';

var Success = React.createClass({
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
               <span className="success">success!!!</span>
            </div>
      );
   }
});

module.exports = Success;
