var React = require('react');
import {browserHistory} from 'react-router';

import Timer from './countdown-clock.jsx';


var questionList = {
   questions:{
      1     :{
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

var Body = React.createClass({

   getInitialState: function() {
      return {
         currentQuestion: 1,
         rightAnswers: 0,
         inputHidden: true
      };
   },
   hidden: function(isHidden) {
      if(this.state.inputHidden === isHidden) {
         return "hidden"
      } else {
         return ""
      }
   },
   componentDidUpdate:function() {
      if(this.state.rightAnswers === 3) {
         browserHistory.push('/success');
      };
      if(this.state.currentQuestion > 3 && this.state.rightAnswers != 3) {
         browserHistory.push('/rejected');
      };
   },
   handleClick: function() {
      this.setState({ inputHidden:false });
   },
   handleSubmit: function(event) {
      event.preventDefault();
      this.setState({currentQuestion: this.state.currentQuestion + 1});
   },
   onMatchAnswer: function(event) {
      if(this.refs.userInput.value.toLowerCase() === questionList.questions[this.state.currentQuestion].answer.toLowerCase()) {
         event.preventDefault();
         this.setState({rightAnswers: this.state.rightAnswers + 1});
      };
      this.handleSubmit(event);
      this.refs.userInput.value='';
   },
   render: function() {
      return (
         <div className="body mars center-child">

            <div className={"timer "+this.hidden(true)}>
               <Timer   startMinutes={1}
                        startHandler={!this.state.inputHidden}/>
            </div>

            <button  type="button"
                     className={'start-btn '+this.hidden(false)}
                     onClick={this.handleClick}>
                     begin evaluation
            </button>
{/*This section renders the question box with dynamic answers*/}
            <div className={'question-box'+this.hidden(true)}>

               <div>
                  <div className={this.hidden(true)}>
                     question
                     {questionList.questions[this.state.currentQuestion].number}
                  </div>
                  <div className={this.hidden(true)}>
                     {questionList.questions[this.state.currentQuestion].text}
                  </div>
               </div>

               {!this.state.inputHidden &&
                  <form name="questionForm" onSubmit={this.onMatchAnswer}>
                     <input
                        name="text-area"
                        autoFocus={true}
                        ref="userInput"
                        type="text"
                        placeholder="Your Answer">
                     </input>
                  </form>
               }
            </div>
         </div>
      );
   },
});

module.exports = Body;
