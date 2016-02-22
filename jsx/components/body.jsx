var React = require('react');
import {browserHistory} from 'react-router';

import Timer from './countdown-clock.jsx';

var userInput = '';

var Body = React.createClass({

   getInitialState: function() {
      return {
         started: false,
         currentQuestion: 1,
         rightAnswers: 0,
         wrongAnswers: 0,
         userAnswer: '',
         value: ''
      };
   },
   hidden: function(notHidden) {
      if(this.state.started !== notHidden) {
         return "hidden"
      } else {
         return ""
      }
   },
   componentDidUpdate:function() {
      if(this.state.rightAnswers === 3) {
         browserHistory.push('/success');
      };
      if(this.state.wrongAnswers === 3) {
         browserHistory.push('/rejected');
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
   onMatchAnswer: function(event) {
      if(this.state.userAnswer === questionList.questions[this.state.currentQuestion].answer) {
         event.preventDefault();
         this.setState({rightAnswers: this.state.rightAnswers + 1});
      } else {
         this.setState({wrongAnswers: this.state.wrongAnswers + 1});
      };
      this.handleSubmit(event);
      this.refs.reset.value='';

   },
   onTimeFinished(){
      browserHistory.push('/rejected');
   },
   render: function() {
      return (
         <div className="body mars center-child">
            <div className={"timer "+this.hidden(true)}>
               <Timer   startMinutes={1}
                        startHandler={this.state.started}
                        onTimeFinished={this.onTimeFinished}/>
            </div>
            <button  type="button"
                     className={'start-btn '+this.hidden(false)}
                     onClick={this.handleClick}>begin evaluation
            </button>

            <div className={'question-box'+this.hidden(true)}>

               {this.renderQuestion()}
               
               <form onSubmit={this.onMatchAnswer}>
                  <input   className={this.hidden(true)}
                           ref="reset"
                           type="text"
                           placeholder="Your Answer"
                           onChange={this.updateUserAnswer}>
                  </input>
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
         answer:"red",
         number:"1"
      },
      2:{
         text:"What is the third planet from the sun?",
         answer:"earth",
         number:"2"

      },
      3:{
         text:"Who is the greatest?",
         answer:"cameron",
         number:"3"
      },
      4:{
         text:"",
         answer:"",
         number:4
      }
   }
};

module.exports = Body;
