var React = require('react');
import {browserHistory} from 'react-router';

var Rejected = React.createClass({
   getInitialState: function() {
      return {
         state: true
      };
   },
   render: function() {
      return (
            <div>
               <span>rejected</span>
            </div>
      );
   }
});

module.exports = Rejected;
