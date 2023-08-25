import React from 'react'
import PropTypes from 'prop-types'

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        onClick={() => {
          props.onDelete(props.id)
        }}
      >
        DELETE
      </button>
    </div>
  )
}

Note.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
}

export default Note
