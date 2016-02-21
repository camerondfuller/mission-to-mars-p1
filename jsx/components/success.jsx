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
               <div><i className="fa fa-space-shuttle takeoff"></i><i className="fa fa-fire fire fire2 takeoff"></i></div>
               <div className="success">success!!!</div>
            </div>
      );
   }
});

module.exports = Success;
