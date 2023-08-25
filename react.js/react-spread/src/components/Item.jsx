import React from 'react'
import PropTypes from 'prop-types';

const Item = props => {
  return <li>{props.todoItem}</li>
}

Item.propTypes = {
  todoItem: PropTypes.string
}

export default Item
