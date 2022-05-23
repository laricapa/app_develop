import {
  Container,
  Flex
} from '@chakra-ui/react'
import ContainerNav from './components/ContainerNav';
import SectionOne from './components/SectionOne';
function App() {
  return (
    <>
      <Container w="full" maxW="100%"  h={100}>
       <ContainerNav />
      </Container>
      <Container maxW="container.lg">
      <SectionOne />
      </Container>
    </>
  );
}

export default App;
