import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CreateArea = props => {
  const [note, setNote] = useState({
    title: '',
    content: ''
  })

  const handleChange = event => {
    const {name, value} = event.target
    setNote(prevValue => {
      return {
        ...prevValue,
        [name]: value
      }
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
  }

  return (
    <div>
      <form className="create-note" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button
          onClick={() => {
            props.onNew({ title: note.title, content: note.content }, 'hello')
            setNote({ title: '', content: '' })
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
