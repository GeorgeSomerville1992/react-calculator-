// syntax for a action
// we can clook at action creators as well..

// simple export functions

import calculatorActionTypes from './calculator.action-types'

export function add(payload) {
  return {
    type: calculatorActionTypes.ADD,
    payload
  }
}

export function subtract(payload) {
  return { type: calculatorActionTypes.SUBTRACT, payload }
}

export function multiply(payload) {
  return { type: calculatorActionTypes.MULTIPLY, payload }
}

export function divide(payload) {
  return { type: calculatorActionTypes.DIVIDE, payload }
}

export function output(payload) {
  return { type: calculatorActionTypes.OUTPUT, payload }
}

export function currentCommandValue(payload) {
  return { type: calculatorActionTypes.CURRENTCOMMANDVALUE, payload }
}

export function currentCommand(payload) {
  return { type: calculatorActionTypes.CURRENTCOMMAND, payload }
}

export function clearValues(payload) {
  return { type: calculatorActionTypes.CLEARVALUES, payload }
}
