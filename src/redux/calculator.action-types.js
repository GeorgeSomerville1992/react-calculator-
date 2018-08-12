import KeyMirror from 'keymirror'

const calculatorActionTypes = new KeyMirror({
  ADD: null,
  SUBTRACT: null,
  DIVIDE: null,
  MULTIPLY: null,
  OUTPUT: null,
  CURRENTCOMMAND: null,
  CURRENTCOMMANDVALUE: null,
  CLEARVALUES: null,
})

Object.freeze(calculatorActionTypes)

export default calculatorActionTypes
