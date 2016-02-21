var React = require('react');
import {browserHistory} from 'react-router';

import Timer from './countdown-clock.jsx';

var userInput = '';

var Body = React.createClass({

   getInitialState: function() {
      return {
         started: false,
         currentQuestion: 1,
         answerCount: 0,
         userAnswer: ''
      };
   },
   hidden: function(notHidden) {
      if(this.state.started !== notHidden) {
         return "hidden"
      } else {
         return ""
      }
   },
   handleClick: function() {
      this.setState({ started: true });
   },
   handleSubmit: function(event) {
      event.preventDefault();
      this.setState({currentQuestion: this.state.currentQuestion + 1});
   },
   updateUserAnswer: function(e) {
      this.setState({userAnswer: e.target.value});
   },
   renderQuestion: function() {
      return (
         <div>
            <div className={this.hidden(true)}>question {questionList.questions[this.state.currentQuestion].number}</div>
            <div className={this.hidden(true)}>{questionList.questions[this.state.currentQuestion].text}</div>
         </div>
      )
   },
   matchAnswer: function(event) {
      if(this.state.userAnswer == questionList.questions[this.state.currentQuestion].answer) {
      event.preventDefault();
         this.setState({answerCount: this.state.answerCount + 1});
      }
   },
   render: function() {
      return (
         <div className="body mars center-child">
            <div className={"timer "+this.hidden(true)}>
               <Timer startMinutes={1} startHandler={this.state.started} />
            </div>
            <button type="button" className={'start-btn '+this.hidden(false)} onClick={this.handleClick}>begin evaluation</button>

            <div className={'question-box'+this.hidden(true)}>
               {this.renderQuestion()}
               <form onSubmit={this.handleSubmit}>
                  <input className={this.hidden(true)} type="text" placeholder="Your Answer" onChange={this.updateUserInputState}></input>
               </form>
            </div>
         </div>
      );
   },
});

var questionList = {
   questions:{
      1:{
         text: "What is your favorite color?",
         answer:"Red",
         number:"1"
      },
      2:{
         text:"What is the third planet from the sun?",
         answer:"Earth",
         number:"2"

      },
      3:{
         text:"Who is the greatest?",
         answer:"Cameron",
         number:"3"
      }
   }
};

module.exports = Body;
