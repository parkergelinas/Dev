import styled from "styled-components";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Works from "./components/Works";
import Test from "./components/Test";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  return (
    <Container>
      <Hero />
      <Works />
      <Contact />
      <Test />
    </Container>
  );
}

export default App;
