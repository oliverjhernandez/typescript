import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CreateArea = props => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleTitleChange = event => {
    const newValue = event.target.value
    setTitle(newValue)
  }

  const handleContentChange = event => {
    const newValue = event.target.value
    setContent(newValue)
  }

  const handleSubmit = event => {
    event.preventDefault()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleTitleChange}
          name="title"
          placeholder="Title"
          value={title}
        />
        <textarea
          onChange={handleContentChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={content}
        />
        <button
          onClick={() => {
            props.onNew({ title: title, content: content }, 'hello')
            setTitle('')
            setContent('')
          }}
        >
          Add
        </button>
      </form>
    </div>
  )
}

CreateArea.propTypes = {
  onNew: PropTypes.func.isRequired
}

export default CreateArea
