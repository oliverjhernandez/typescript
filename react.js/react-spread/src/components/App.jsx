import React, { useState } from 'react'
import ToDoItem from './todoItem'

function App() {
  const [inputText, setInputText] = useState('')
  const [items, setItems] = useState([])

  const handleChange = event => {
    const newValue = event.target.value
    setInputText(newValue)
  }

  const addItem = () => {
    setItems(prevValues => {
      return [...prevValues, inputText]
    })
    setInputText('')
  }

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter((elem, i) => {
        return i !== id
      })
    })
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          onChange={handleChange}
          type="text"
          name="listInput"
          value={inputText}
        />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem, i) => (
            <ToDoItem
              text={todoItem}
              onChecked={deleteItem}
              key={i}
              id={i}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
