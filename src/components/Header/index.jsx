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
  UserPicture,
  Wrapper,
} from "./styles";

const Header = ({ autenticado }) => {
  return (
    <>
      {/*Wrapper = envolve todo o cabeçalho*/}
      <Wrapper>
        {/*container = conteudo do cabeçalho*/}
        <Container>
          <Row>
            <img src={logo} alt="Logo da Dio" />
            {autenticado ? (
              <>
                <BuscarInputContainer>
                  <Input placeholder="Buscar..." />
                </BuscarInputContainer>
                <Menu>Live Code</Menu>
                <Menu>Global</Menu>
              </>
            ) : null}
          </Row>
          <Row>
            {autenticado ? (
              <>
                <UserPicture src="https://avatars.githubusercontent.com/u/55846912?s=400&u=e7a72698071dc70b088143c1c8e0f4aed8cb6263&v=4" />
              </>
            ) : (
              <>
                <MenuRight href="#">Home</MenuRight>
                <Button title="Entrar" />
                <Button title="Cadastrar" />
              </>
            )}
          </Row>
        </Container>
      </Wrapper>
    </>
  );
};

export { Header };
