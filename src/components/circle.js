import React from 'react'
import PropTypes from 'prop-types'

function Circle(props) {
  return (
    <div onClick={props.onClick} className={`circle ${props.className}`}>
      <span className="circleText">{props.children}</span>
    </div>
  )
}

Circle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

Circle.defaultProps = {
  className: '',
}

export default Circle
