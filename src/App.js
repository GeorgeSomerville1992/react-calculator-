import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Circle from './components/circle.js'
import './components/circle/circle.css'
import './components/buttonRow/button-row.css'
import ButtonRow from './components/button-row/button-row.js'


// Set state for when they press the numbers
// Set state for when they pres the functions

// split into serveral components
// styled components

// how to we create code snipits

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
            <ButtonRow>
              <Circle onClick={this.clearNumbers}> AC </Circle>
              <Circle onClick={this.clearNumbers}> Nill </Circle>
              <Circle onClick={this.clearNumbers}> % </Circle>
              <Circle className={currentCommand === 'Divide' ? 'active' : ''} onClick={this.setCommand('Divide')}> / </Circle>
            </ButtonRow>

            <ButtonRow>
              <Circle onClick={this.inputNumber(7)}> 7 </Circle>
              <Circle onClick={this.inputNumber(8)}> 8 </Circle>
              <Circle onClick={this.inputNumber(9)}> 9 </Circle>
              <Circle className={currentCommand === 'Multiply' ? 'active' : ''} onClick={this.setCommand('Multiply')}> X </Circle>
            </ButtonRow>

            <ButtonRow>
              <Circle onClick={this.inputNumber(4)}> 4 </Circle>
              <Circle onClick={this.inputNumber(5)}> 5 </Circle>
              <Circle onClick={this.inputNumber(6)}> 6 </Circle>
              <Circle className={currentCommand === 'Subtract' ? 'active' : ''} onClick={this.setCommand('Subtract')}> - </Circle>
            </ButtonRow>

            <ButtonRow>
              <Circle onClick={this.inputNumber(1)}> 1 </Circle>
              <Circle onClick={this.inputNumber(2)}> 2 </Circle>
              <Circle onClick={this.inputNumber(3)}> 3 </Circle>
              <Circle className={currentCommand === 'Add' ? 'active' : ''} onClick={this.setCommand('Add')}> + </Circle>
            </ButtonRow>

            <ButtonRow>
              <Circle onClick={this.inputNumber(0)} className='ZeroCircle'> 0 </Circle>
              <Circle onClick={this.inputNumber(0)}> . </Circle>
              <Circle onClick={this.determineCommand(currentCommand)}> = </Circle>
            </ButtonRow>

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
