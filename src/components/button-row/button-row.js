import React from 'react'
import PropTypes from 'prop-types'

function ButtonRow(props) {
  return <div className='ButtonRow'>{props.children}</div>
}

ButtonRow.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

ButtonRow.defaultProps = {
  className: '',
}

export default ButtonRow
