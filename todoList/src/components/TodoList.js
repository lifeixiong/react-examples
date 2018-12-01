import React from 'react'
import PropTypes from 'prop-types';
import Todo from './Todo'

const TodoList = ({ todos, onTodoClick }) => (
    <ul>
        {todos.map(todo =>
            <Todo key={todo.id}
                {...todo}
                onClick={() => onTodoClick(todo.id)}>)}>
                </Todo>)}
    </ul >
)

TodoList.PropTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.is

    }).isRequired).isRequired,
    onTodoClick: PropTypes.func.isRequired
}

export default TodoList