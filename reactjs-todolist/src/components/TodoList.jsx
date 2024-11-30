import TodoCard from "./TodoCard";

export default function TodoList(props) {

    const { todos } = props;

    return (
        <ul className="main">
            {todos.map((item, itemIndex) => (
                <TodoCard key={itemIndex} index={itemIndex} {...props}>
                    <p>{item}</p>
                </TodoCard>
            ))}
        </ul>
    );
}