import React from "react";
import { Header } from "../../components/Header/index";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";

import { Container, Column, Title, TitleHighlight } from "./styles";

const Feed = () => {
  return (
    <>
      <Header autenticado={true} />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
          <UserInfo
            nome={"Jefferson"}
            image={
              "https://avatars.githubusercontent.com/u/55846912?s=400&u=e7a72698071dc70b088143c1c8e0f4aed8cb6263&v=4"
            }
            percentual={80}
          />
          <UserInfo
            nome={"Junior"}
            image={
              "https://avatars.githubusercontent.com/u/55846912?s=400&u=e7a72698071dc70b088143c1c8e0f4aed8cb6263&v=4"
            }
            percentual={70}
          />
          <UserInfo
            nome={"Siqueira"}
            image={
              "https://avatars.githubusercontent.com/u/55846912?s=400&u=e7a72698071dc70b088143c1c8e0f4aed8cb6263&v=4"
            }
            percentual={60}
          />
          <UserInfo
            nome={"De"}
            image={
              "https://avatars.githubusercontent.com/u/55846912?s=400&u=e7a72698071dc70b088143c1c8e0f4aed8cb6263&v=4"
            }
            percentual={50}
          />
          <UserInfo
            nome={"Moraes"}
            image={
              "https://avatars.githubusercontent.com/u/55846912?s=400&u=e7a72698071dc70b088143c1c8e0f4aed8cb6263&v=4"
            }
            percentual={40}
          />
        </Column>
      </Container>
    </>
  );
};

export { Feed };
