import { MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from "react-icons/md";
import styled, { css } from "styled-components";

const TodoListItemWrapper = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;

  &:nth-child(even) {
    background: #f8f9fa;
  }

  & + & {
    border-top: 1px solid #dee2e6;
  }
`;

const Checkbox = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;

  svg {
    font-size: 1.5rem;
    color: ${props => props.checked && '#22b8cf'}
  }
`;

const Text = styled.div`
  margin-left: 0.5rem;
  flex: 1;
  
  ${props => props.checked &&
    css`
      color: #adb5bd;
      text-decoration: line-through;
    `}
`;

const Remove = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #ff6b6b;
  cursor: pointer;
  &:hover {
    color: #ff8787;
  }
`;

function TodoListItem({ todo, onRemove, onToggle }) {
  const { id, text, checked } = todo;

  return (  
    <TodoListItemWrapper>
      <Checkbox checked={checked} onClick={() => { onToggle(id); }}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
      </Checkbox>
      <Text checked={checked}>{text}</Text>
      <Remove onClick={() => { onRemove(id); }}>
        <MdRemoveCircleOutline />
      </Remove>
    </TodoListItemWrapper>
  );
}

export default TodoListItem;