import React from "react";
import logo from "../../assets/images/logo-dio.png";
import { Button } from "../Button/index";
import {
  BuscarInputContainer,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  Wrapper,
} from "./styles";

const Header = () => {
  return (
    <>
      {/*Wrapper = envolve todo o cabeçalho*/}
      <Wrapper>
        {/*container = conteudo do cabeçalho*/}
        <Container>
          <Row>
            <img src={logo} alt="Logo da Dio" />
            <BuscarInputContainer>
              <Input placeholder="Buscar..." />
            </BuscarInputContainer>
            <Menu>Live Code</Menu>
            <Menu>Global</Menu>
          </Row>
          <Row>
            <MenuRight href="#">Home</MenuRight>
            <Button title="Entrar" />
            <Button title="Cadastrar" />
          </Row>
        </Container>
      </Wrapper>
    </>
  );
};

export { Header };
