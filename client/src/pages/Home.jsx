import { Container, MainContent } from "../styles/Home.styles";
import LeftBar from "../components/LeftBar";

const Home = () => {
  const localStorageData = JSON.parse(localStorage.getItem("profile"));

  return (
    <Container>
      {localStorageData.user && (
        <>
          <LeftBar />
          <MainContent>This is home</MainContent>
        </>
      )}
    </Container>
  );
};

export default Home;
