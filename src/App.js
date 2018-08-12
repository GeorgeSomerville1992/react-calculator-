import React, { Component } from 'react';
import { connect } from 'react-redux'
import logo from './logo.svg';
import './App.css';
import Circle from './components/circle.js'
import './components/circle/circle.css'
import './components/button-row/button-row.css'
import ButtonRow from './components/button-row/button-row.js'
import { add, output, multiply, divide, subtract, currentCommand, currentCommandValue, clearValues } from './redux/calculator-actions.js'

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
    this.props.dispatch(currentCommand({currentCommand: command}))
  }

  determineCommand = (command, value) => () => {
    console.log('ermingin command ===>')
    console.log(command, value)
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
    const { currentValue, currentCommandValue } = this.props
    const { dispatch } = this.props
    dispatch(subtract({currentValue, currentCommandValue}))
  }

  divideNumber = number => {
    const { currentValue, currentCommandValue } = this.props
    const { dispatch } = this.props
    // const newValue = Number(this.state.currentValue) / Number(this.state.currentCommandValue)
    dispatch(divide({currentValue, currentCommandValue}))
    // this.outputAnswer(newValue)
  }

  multiplyNumber = number => {
    const { currentValue, currentCommandValue } = this.props
    const { dispatch } = this.props
    dispatch(multiply({currentValue, currentCommandValue}))
  }

  addNumber = number => {
    const { currentValue, currentCommandValue } = this.props
    const { dispatch } = this.props
    dispatch(add({currentValue, currentCommandValue}))
  }

  outputCommandValueNumber = number => {
    const { currentCommandValue } = this.props

    if (currentCommandValue === 0) {
      this.outputCommandValue(number)
    } else {
      const displayNumber = "" + number + currentCommandValue
      this.outputCommandValue(displayNumber)
    }
  }

  inputNumber = number => () => {
    const { currentValue, currentCommand } = this.props

    if (currentCommand) {
      this.outputCommandValueNumber(number)
      return
    }

    if (currentValue === 0) {
      this.outputNumber(number)
    } else {
      const displayNumber = "" + number + this.props.currentValue
      this.outputNumber(displayNumber)
    }
  }

  outputNumber = number => {
    this.props.dispatch(output({currentValue: number}))
  }

  outputCommandValue = number => {
    this.props.dispatch(currentCommandValue({currentCommandValue: number}))
  }

  clearNumbers = () => {
    this.props.dispatch(clearValues())
  }

  render() {
    const { currentValue, currentCommand } = this.props
    console.log('currentCommand', currentCommand)
    console.log('rendering again because my state has changed', this.props)

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
                {currentValue}
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

const mapStateToProps = state => {
  console.log('hellow state', state)
  console.log('state.caculator reducer', state.calculatorReducer)

  return {
    currentValue: state.calculatorReducer.currentValue,
    currentCommandValue: state.calculatorReducer.currentCommandValue,
    currentCommand: state.calculatorReducer.currentCommand,
  }
}

const mapActionsToProps = dispatch => ({
  dispatch,
})

export default connect(mapStateToProps, mapActionsToProps)(App)
