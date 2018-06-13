import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Set state for when they press the numbers
// Set state for when they pres the functions

// split into serveral components
// styled components

class App extends Component {
  constructor() {
    super()

    this.state = {
      currentValue: 0,
      currentCommandValue: 0,
      currentCommand: null,
    }
  }

  outputAnswer = answer => {
    this.setState({
      currentValue: answer,
      currentCommandValue: 0,
      currentCommand: null,
    })
  }

  setCommand = command => () => {

    this.setState({
      currentCommand: command
    })
  }

  determineCommand = (command, value) => () => {
    switch (command) {
      case 'Add':
        this.addNumber(value)
        break;
      case 'Multiply':
        this.multiplyNumber(value)
        break;
      case 'Divide':
        this.divideNumber(value)
        break;
      case 'Subtract':
        this.subTractNumber(value)
      default:
        console.log('invalid function');
    }
  }

  subTractNumber = number => {
    const { currentValue, currentCommandValue } = this.state
    const newValue = Number(this.state.currentValue) - Number(this.state.currentCommandValue)

    this.outputAnswer(newValue)
  }

  divideNumber = number => {
    const { currentValue, currentCommandValue } = this.state
    const newValue = Number(this.state.currentValue) / Number(this.state.currentCommandValue)

    this.outputAnswer(newValue)
  }

  multiplyNumber = number => {
    const { currentValue, currentCommandValue } = this.state
    const newValue = Number(this.state.currentValue) * Number(this.state.currentCommandValue)

    this.outputAnswer(newValue)
  }

  addNumber = number => {
    const { currentValue, currentCommandValue } = this.state
    const newValue = Number(currentValue) + Number(currentCommandValue)

    this.outputAnswer(newValue)
  }

  outputCommandValueNumber = number => {
    const { currentCommandValue } = this.state
    if (currentCommandValue === 0) {
      this.outputCommandValueState(number)
    } else {
      const displayNumber = "" + number + currentCommandValue
      this.outputCommandValueState(displayNumber)
    }
  }

  inputNumber = number => () => {
    const { currentValue, currentCommand } = this.state
    if (currentCommand) {
      this.outputCommandValueNumber(number)
      return
    }

    if (currentValue === 0) {
      this.outputNumber(number)
    } else {
      const displayNumber = "" + number + this.state.currentValue
      this.outputNumber(displayNumber)
    }
  }

  outputNumber = number => {
    this.setState({
      currentValue: number
    })
  }

  outputCommandValueState = number => {
    this.setState({
      currentCommandValue: number
    })
  }

  clearNumbers = () => {
    this.setState({
      currentValue: 0,
      currentCommandValue: 0,
      currentCommand: null,
    })
  }

  render() {
    const { currentValue, currentCommand } = this.state
    console.log('currentCommand', currentCommand)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Calculator</h1>
        </header>
        <div className="AppContainer">
          <div className="CalculatorContainer">
            <div className="InputRow">
              <span className="InputScreen">
                {this.state.currentValue}
              </span>
            </div>
            <div className="ButtonsRow">
              <div className="circle" onClick={this.clearNumbers}>
                <span className="circleText"> AC </span>
              </div>
              <div className="circle">
                <span className="circleText"> nill </span>
              </div>
              <div className="circle">
                <span className="circleText"> % </span>
              </div>

              <div className={currentCommand === 'Divide' ? 'circle active' : 'circle'} onClick={this.setCommand('Divide')}>
                <span className="circleText"> / </span>
              </div>
            </div>

            <div className="ButtonsRow">
              <div className="circle" onClick={this.inputNumber(7)}>
                <span className="circleText"> 7 </span>
              </div>
              <div className="circle" onClick={this.inputNumber(8)}>
                <span className="circleText"> 8 </span>
              </div>
              <div className="circle" onClick={this.inputNumber(9)}>
                <span className="circleText"> 9 </span>
              </div>
              <div className={currentCommand === 'Multiply' ? 'circle active' : 'circle'} onClick={this.setCommand('Multiply')}>
                <span className='circleText'> X </span>
              </div>
            </div>

            <div className="ButtonsRow">
              <div className="circle" onClick={this.inputNumber(4)}>
                <span className="circleText"> 4 </span>
              </div>
              <div className="circle" onClick={this.inputNumber(5)}>
                <span className="circleText"> 5 </span>
              </div>
              <div className="circle" onClick={this.inputNumber(6)}>
                <span className="circleText"> 6 </span>
              </div>
              <div className={currentCommand === 'Subtract' ? 'circle active' : 'circle'} onClick={this.setCommand('Subtract')}>
                <span className="circleText" > - </span>
              </div>
            </div>

            <div className="ButtonsRow">
              <div className="circle" onClick={this.inputNumber(1)}>
                <span className="circleText"> 1 </span>
              </div>
              <div className="circle" onClick={this.inputNumber(2)}>
                <span className="circleText"> 2 </span>
              </div>
              <div className="circle" onClick={this.inputNumber(3)}>
                <span className="circleText"> 3 </span>
              </div>
              <div className={currentCommand === 'Add' ? 'circle active' : 'circle'} onClick={this.setCommand('Add')}>
                <span className="circleText"> + </span>
              </div>
            </div>

            <div className="ButtonsRow">
              <div className="circle ZeroCircle" onClick={this.inputNumber(0)}>
                <span className="circleText"> 0 </span>
              </div>
              <div className="circle">
                <span className="circleText"> . </span>
              </div>
              <div className="circle" onClick={this.determineCommand(currentCommand)}>
                <span className="circleText"> = </span>
              </div>
            </div>

            <p className="App-intro">
              This is my Calculator
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
