import {
  Container,
  IntroLeft,
  Image,
  IntroRight,
  IntroTitle,
  IntroDesc,
} from "../styles/Intro.styles";
import baner from "../img/baner.png";

const Intro = () => {
  return (
    <Container>
      <IntroLeft>
        <Image src={baner} />
      </IntroLeft>
      <IntroRight>
        <IntroTitle>Millions of user &amp; making Interaction</IntroTitle>
        <IntroDesc>An online platform that connects the world's user</IntroDesc>
      </IntroRight>
    </Container>
  );
};

export default Intro;
