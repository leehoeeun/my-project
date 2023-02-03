import styled from "styled-components";
import TodoListItem from "./TodoListItem";

const TodoListWrapper = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
`;

function TodoList({ todos, onRemove, onToggle }) {
  return (  
    <TodoListWrapper>
      {todos.map((todo) => 
        <TodoListItem key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle} />
      )}
    </TodoListWrapper>
  );
}

export default TodoList;