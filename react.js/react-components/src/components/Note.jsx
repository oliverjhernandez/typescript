import React from 'react'
import PropTypes from 'prop-types'

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button>DELETE</button>
    </div>
  )
}

Note.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string
}

export default Note
