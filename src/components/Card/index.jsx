import React from "react";
import { FiThumbsUp } from "react-icons/fi";
import {
  CardContainer,
  Content,
  HasInfo,
  ImageBackground,
  PostInfo,
  UserInfo,
  UserPicture,
} from "./styles";

const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src="https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_1280.jpg" />
      <Content>
        <UserInfo>
          <UserPicture src="https://avatars.githubusercontent.com/u/55846912?s=400&u=e7a72698071dc70b088143c1c8e0f4aed8cb6263&v=4" />
          <div>
            <h4>Jefferson Moraes</h4>
            <p>Há 7 minutos</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso de HTML e CSS</h4>
          <p>
            Projeto feito com o curso de Html e css no bootcamp dio do Global
            avanade...<strong>Saiba mais</strong>
          </p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #JavaScript</h4>
          <p>
            <FiThumbsUp /> 16
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  );
};

export { Card };
