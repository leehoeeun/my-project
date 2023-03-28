import { createGlobalStyle } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './pages/Header';

const GlobalStyle = createGlobalStyle`
  /* 글로벌(공통) 스타일 */
  body {
    box-sizing: border-box;
  }
  #root {
    text-align: center;
  }
  * {
    box-sizing: inherit;
  }
  .inner {
    margin: 0 auto;
  }
  .cursor-pointer {
    cursor: pointer;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Header />} />
        {/* <Route index element={<Main />}/> */}
        {/* <Route path='/detail' element={<Product />}/> */}
        {/* <Route path='/cart' element={<Cart />} /> */}
        <Route path='*' element={<div>페이지가 존재하지 않습니다.</div>} />
      </Routes>
    </>
  );
}

export default App;
