import React, { useState } from 'react'
import { Text } from './Text'
import { Counter } from './Counter'
import { TodoList } from './Todolist'
import { AddTodo } from './AddTodoItem'
import './index.css'

const initialTodos: Array<Todo> = [{ text: 'Learn HTML CSS', complete: true }, { text: 'Learn JS basics', complete: false }]
function App() {

  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = selectedTodo => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo, complete: !todo.complete
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  const addTodo: AddTodo = (newTodo) => {
    newTodo.trim() !== '' && setTodos([...todos, { text: newTodo, complete: false }])
  }

  return (
    <div>
      <Text content={{ Title: 'React Typescript TODO App', subTitle: 'using Hooks' }}/>

      <Counter>
        {(count, setCount) => (
          <div className="counter-div">
            <label>Counter : </label>
            <br />
            <button onClick={() => count >0 && setCount(count - 1) }> - </button>
            <div> {count}  </div>
            <button onClick={() => setCount(count + 1)}> + </button>
          </div>
        )}
      </Counter>

      <React.Fragment>
        <TodoList todos={todos} toggleTodo={toggleTodo} />
        <AddTodo addTodo={addTodo} />
      </React.Fragment>

    </div>
  );
}

export default App;
