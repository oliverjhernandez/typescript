import React from 'react'
import PropTypes from 'prop-types';

const createNote = details => {
  return (
    <Note
      key={details.key}
      title={details.title}
      content={details.content}
    />
  )
}

const Note = props => {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  )
}

Note.propTypes = {
  title : PropTypes.string,
  content : PropTypes.string
}

export default createNote
