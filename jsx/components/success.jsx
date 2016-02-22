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
               <div className="success">success!!!</div>
               <i className="fa fa-space-shuttle takeoff"></i>
            </div>
      );
   }
});

module.exports = Success;
