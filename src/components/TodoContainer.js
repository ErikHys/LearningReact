import React from "react"
class TodoContainer extends React.Component {

    state = {
        todos: [
            {
                id: 1,
                title: "Setup development environment",
                completed: true
            },
            {
                id: 2,
                title: "Development website and add content",
                completed: false
            },
            {
            id: 3,
            title: "Deploy to live server",
            completed: false
            }
        ]
    };

    render() {
        return (
            <div>
                {this.state.todos.map(todo => (
                    <li>
                        {todo.title}
                    </li>
                ))}
            </div>
        );
    }
}
export default TodoContainer