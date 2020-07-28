import React,{useState,ChangeEvent, FormEvent} from 'react';

interface AddTodoItemProps{
    addTodo:AddTodo
}
export const AddTodo:React.FC <AddTodoItemProps>= ({addTodo}) =>{
    const [newTodo,setNewTodo] = useState<string>('')

    const handleChange = (e : ChangeEvent<HTMLInputElement>) =>{
      setNewTodo(e.target.value)
    }

    const handleSubmit = (e : FormEvent<HTMLButtonElement>) =>{
        e.preventDefault()
        addTodo(newTodo);
        setNewTodo('')
    }
    return (<form className="add-todo-form">
        <input type="text" value={newTodo} onChange={handleChange} />
        <button type="submit" onClick={handleSubmit}>Add Todo Item</button>
    </form>)
}