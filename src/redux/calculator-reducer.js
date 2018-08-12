import calculatorActionTypes from './calculator.action-types.js'

export function createInitialState() {
  return {
    currentValue: 0,
    currentCommandValue: 0,
    currentCommand: null,
  }
}

function calculatorReducer(state = createInitialState(), action) {
  let newValue
  switch (action.type) {
    case 'ADD':
      newValue = Number(action.payload.currentValue) + Number(action.payload.currentCommandValue)
      return {
        currentValue: newValue,
        currentCommand: null
      }

    case 'SUBTRACT':
      newValue = Number(action.payload.currentValue) - Number(action.payload.currentCommandValue)
      return {
        currentValue: newValue,
        currentCommand: null,
        currentCommandValue: 0,
      }
    case 'DIVIDE':
      newValue = Number(action.payload.currentValue) / Number(action.payload.currentCommandValue)
      return {
        currentValue: newValue,
        currentCommand: null,
      }
    case 'MULTIPLY':
      newValue = Number(action.payload.currentValue) * Number(action.payload.currentCommandValue)
      return {
        currentValue: newValue,
        currentCommand: null,
      }
    case 'OUTPUT':
      state.currentValue = action.payload.currentValue
      return {
        currentValue: action.payload.currentValue,
        currentCommandValue: state.currentCommandValue,
        currentValue: state.currentValue,
      }
    case 'CURRENTCOMMAND':
      state.currentCommand = action.payload.currentCommand
      return {
        currentCommand: action.payload.currentCommand,
        currentCommandValue: state.currentCommandValue,
        currentValue: state.currentValue,
      }
    case 'CURRENTCOMMANDVALUE':
      state.currentCommandValue = action.payload.currentCommandValue
      return {
        currentCommandValue: state.currentCommandValue,
        currentCommand: state.currentCommand,
        currentValue: state.currentValue,
      }
    case 'CLEARVALUES':
      return {
        currentValue: 0,
        currentCommandValue: 0,
        currentCommand: null,
      }
    default:
      console.log('giring', state)
      return state
  }
}

export default calculatorReducer
