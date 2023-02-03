import { useCallback, useEffect, useRef, useState } from "react";
import { createGlobalStyle } from "styled-components";
// import { Reset } from "styled-reset";
import reset from "styled-reset";
import { v4 as uuidv4 } from "uuid";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";



const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    background: #e9ecef;
  }
`;

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '수업 교안 작성하기',
      checked: true
    },
    {
      id: 2,
      text: '시험 채점하기',
      checked: true
    },
    {
      id: 3,
      text: '단계별 실습 예제 만들기',
      checked: false
    }
  ]);

  useEffect(() => {
    const dbTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(dbTodos);
  }, []);

  const nextId = useRef(4);
  const handleInsert = useCallback((text) => {
    const todo = {
      id: uuidv4(),
      text,
      checked: false
    };
    setTodos(todos.concat(todo));
    nextId.current += 1;
    localStorage.setItem('todos', JSON.stringify(todos.concat(todo)));
  }, [todos]);

  const handleRemove = useCallback((id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    localStorage.setItem('todos', JSON.stringify(todos.filter((todo) => todo.id !== id)));
  }, [todos]);

  const handleToggle = useCallback((id) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    ));

    localStorage.setItem('todos', JSON.stringify(todos.map((todo) =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    )));
  }, [todos]);

  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoInsert onInsert={handleInsert} />
        <TodoList todos={todos} onRemove={handleRemove} onToggle={handleToggle} />
      </TodoTemplate>
    </>
  );
}

export default App;

// 패키지 설치
// npm install styled-components styled-reset react-icons

// react-icons: 리액트에서 다양한 아이콘을 쓸 수 있는 라이브러리
// SVG 형태의 아이콘을 리액트 컴포넌트처럼 쉽게 사용
// 커스텀은 props 또는 CSS 스타일로 변경 가능


// HTML 웹 스토리지란?
// 웹 스토리지를 사용하면 웹 앱이 사용자의 브라우저 내에 로컬로 데이터를 저장할 수 있음
// 웹 스토리지는 도메인 당 사용 가능
// 같은 도메인의 모든 페이지는 동일한 데이터를 저장하고 액세스함

// 웹 스토리지 객체
// 웹 스토리지는 데이터를 저장하기 위한 두 가지 객체를 제공
// window.localStorage - 만료 날짜 없이 데이터를 저장
// window.sessionStorage - 한 세션에 대한 데이터 저장(브라우저 탭을 닫으면 데이터가 손실됨)