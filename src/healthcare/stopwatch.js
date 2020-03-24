import React, { Component } from "react";
import "./stopwatch.scss";
class Stopwatch extends Component {
    state = {
        timerOn: false,
        timerStart: 0,
        timerTime: 0
      };
      stopTimer = () => {
        this.setState({ timerOn: false });
        clearInterval(this.timer);
        if(this.state.timerTime>10000){
            this.props.showCard("pass");
        }else{
            this.props.showCard("fail");
        }       
      };
      resetTimer = () => {
        this.setState({
          timerStart: 0,
          timerTime: 0
        });
      };
      startTimer = () => {
        this.setState({
          timerOn: true,
          timerTime: this.state.timerTime,
          timerStart: Date.now() - this.state.timerTime
        });
        this.timer = setInterval(() => {
          this.setState({
            timerTime: Date.now() - this.state.timerStart
          });
        }, 10);
      };
  render() {
    const { timerTime } = this.state;
    let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
    let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);
    return (
      <div className="Stopwatch col-xs-12">
        <div className="Stopwatch-display">
            {minutes} : {seconds} : {centiseconds}
        </div>
        {this.state.timerOn === false && this.state.timerTime === 0 && (
  <button onClick={this.startTimer}>Start</button>
)}
{this.state.timerOn === true && (
  <button onClick={this.stopTimer}>Stop</button>
)}
{this.state.timerOn === false && this.state.timerTime > 0 && (
  <button onClick={this.startTimer}>Resume</button>
)}
{this.state.timerOn === false && this.state.timerTime > 0 && (
  <button onClick={this.resetTimer}>Reset</button>
)}
      </div>
    );
  }
}
export default Stopwatch;