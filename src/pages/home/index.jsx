import { useNavigate } from "react-router-dom";
import BannerImage from "../../assets/images/banner.png";
import { Header } from "../../components/Header/index";
import { Container, TextContent, Title, TitleHightlight } from "./styles";
import { Button } from "../../components/Button";

const Home = () => {
  const navigate = useNavigate();

  const handleClickSingIn = () => {
    navigate("/login");
  };

  return (
    <>
      <Header />
      <Container>
        <div>
          <Title>
            <TitleHightlight>
              Implemente
              <br />
            </TitleHightlight>
            o seu futuro global agora!
          </Title>
          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do
            mundo e encare seu novo desafio profissional, evoluindo em
            comunidade com os melhores experts.
          </TextContent>
          <Button
            title="Começar agora"
            variant="secondary"
            onClick={handleClickSingIn}
          />
        </div>
        <div>
          <img src={BannerImage} alt="Imagem Banner Principal" />
        </div>
      </Container>
    </>
  );
};

export { Home };
