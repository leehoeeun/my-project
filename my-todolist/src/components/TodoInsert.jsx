import styled from "styled-components";
import { MdAdd as AddIcon } from "react-icons/md";
import { useState } from "react";


const TodoInsertWrapper = styled.form`
  display: flex;
  background: #495057;
`;

const StyledInput = styled.input`
  background: none;
  outline: none;
  border: none;
  padding: 0.5rem;
  line-height: 1.5;
  color: white;
  flex: 1;

  &::placeholder {
    color: #dee2e6;
  }
`;

const StyledButton = styled.button`
  border: none;
  background: #868e96;
  color: white;
  padding: 0 1rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

function TodoInsert({ onInsert }) {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    onInsert(value);
    setValue(''); 
    e.preventDefault();
  };
  console.log(value);

  return (  
    <TodoInsertWrapper onSubmit={handleSubmit}>
      <StyledInput 
        type="text" 
        placeholder="할 일을 입력하세요." 
        value={value}
        onChange={handleChange}
      />
      <StyledButton type="submit">
        <AddIcon />
      </StyledButton>
    </TodoInsertWrapper>
  );
}

export default TodoInsert;