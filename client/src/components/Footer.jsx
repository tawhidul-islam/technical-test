import {
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
  Pinterest,
  YouTube,
} from "@material-ui/icons";

import {
  Container,
  ContainerItem,
  ContainerItemTitle,
  ContainerItemWrapper,
  ContainerItemLink,
  NavbarBrand,
  BrandText,
} from "../styles/Footer.styles";

const Explore = () => {
  return (
    <Container>
      <ContainerItem>
        <NavbarBrand>
          <BrandText>B</BrandText>
          <BrandText style={{ color: "#0A66C2" }}>||</BrandText>
          <BrandText>C</BrandText>
        </NavbarBrand>
      </ContainerItem>

      <ContainerItem>
        <ContainerItemTitle>General Lookup</ContainerItemTitle>

        <ContainerItemWrapper>
          <ContainerItemLink>Signup</ContainerItemLink>
          <ContainerItemLink>Help Center</ContainerItemLink>
          <ContainerItemLink>About</ContainerItemLink>
          <ContainerItemLink>Press</ContainerItemLink>
          <ContainerItemLink>Blog</ContainerItemLink>
          <ContainerItemLink>Carrers</ContainerItemLink>
          <ContainerItemLink>Developers</ContainerItemLink>
        </ContainerItemWrapper>
      </ContainerItem>

      <ContainerItem>
        <ContainerItemTitle>Social Links</ContainerItemTitle>
        <ContainerItemWrapper>
          <ContainerItemLink>
            <LinkedIn />
          </ContainerItemLink>

          <ContainerItemLink>
            <Twitter />
          </ContainerItemLink>

          <ContainerItemLink>
            <Facebook />
          </ContainerItemLink>

          <ContainerItemLink>
            <Instagram />
          </ContainerItemLink>

          <ContainerItemLink>
            <Pinterest />
          </ContainerItemLink>

          <ContainerItemLink>
            <YouTube />
          </ContainerItemLink>
        </ContainerItemWrapper>
      </ContainerItem>

      <ContainerItem>
        <ContainerItemTitle>Business Solutions</ContainerItemTitle>
        <ContainerItemWrapper>
          <ContainerItemLink>Talent</ContainerItemLink>
          <ContainerItemLink>Marketing</ContainerItemLink>
          <ContainerItemLink>Sales</ContainerItemLink>
          <ContainerItemLink>Learning</ContainerItemLink>
        </ContainerItemWrapper>
      </ContainerItem>
    </Container>
  );
};

export default Explore;
