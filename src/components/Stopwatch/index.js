import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    minutes: 0,
    seconds: 0,
    isStopwatchRunning: false,
  }

  onClickStart = () => {
    const {isStopwatchRunning} = this.state

    if (!isStopwatchRunning) {
      this.state.isStopwatchRunning = true
      this.timerId = setInterval(this.tick, 1000)
    }
  }

  tick = () => {
    const {minutes, seconds} = this.state

    this.setState({
      minutes: seconds === 59 ? minutes + 1 : minutes,
      seconds: seconds === 59 ? 0 : seconds + 1,
      isStopwatchRunning: true,
    })
  }

  onClickStop = () => {
    clearInterval(this.timerId)
    this.setState({
      isStopwatchRunning: false,
    })
  }

  onClickReset = () => {
    clearInterval(this.timerId)
    this.setState({
      minutes: 0,
      seconds: 0,
      isStopwatchRunning: false,
    })
  }

  render() {
    const {minutes, seconds} = this.state

    const minutesText = minutes < 10 ? `0${minutes}` : minutes
    const secondsText = seconds < 10 ? `0${seconds}` : seconds

    return (
      <div className="bg-container">
        <div className="stopwatch-container">
          <h1 className="stopwatch-heading">Stopwatch</h1>
          <div className="stopwatch-card">
            <div className="stopwatch-image-para-card">
              <img
                className="stopwatch-image"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p className="timer-paragraph">Timer</p>
            </div>
            <h1 className="stopwatch-count">
              {minutesText}:{secondsText}
            </h1>
            <div className="buttons-container">
              <button
                className="button start-button"
                type="button"
                onClick={this.onClickStart}
              >
                Start
              </button>
              <button
                className="button stop-button"
                type="button"
                onClick={this.onClickStop}
              >
                Stop
              </button>
              <button
                className="button reset-button"
                type="button"
                onClick={this.onClickReset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
