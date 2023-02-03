import styled from "styled-components";

const TodoTemplateWrapper = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 6rem;
  border-radius: 4px;
  overflow: hidden;

  .app-title {
    background: #22b8cf;
    color: white;
    height: 4rem;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .content {
    background: white;
  }
`;

function TodoTemplate(props) {
  const { children } = props;
  console.log(children);

  return (  
    <TodoTemplateWrapper>
      <div className="app-title">일정관리</div>
      <div className="content">{children}</div>
    </TodoTemplateWrapper>
  );
}

export default TodoTemplate;