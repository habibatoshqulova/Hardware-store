import styled from "styled-components"

function App() {
  return (
    <Wrapper>
      <Aside></Aside>
      <Main></Main>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
width: 100%;
height: 100vh;


`;


const Aside = styled.div`
background-color: red;
`;


const Main = styled.div`
background-color: yellowgreen;
`;
