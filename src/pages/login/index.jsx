import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { MdEmail, MdLock } from "react-icons/md";
import { Header } from "../../components/Header/";
import { Input } from "../../components/Input/";
import { Button } from "../../components/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../../services/api";
import {
  Column,
  Container,
  CriarText,
  EsqueciText,
  Row,
  SubtitleLogin,
  Title,
  TitleLogin,
  Wrapper,
} from "./styles";

const schema = yup
  .object({
    email: yup
      .string()
      .email("email não é válido")
      .required("Campo Obrigatório"),
    password: yup
      .string()
      .min(3, "minimo 3 caracteres")
      .required("Campo Obrigatório"),
  })
  .required();

const Login = () => {
  const navigation = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ resolver: yupResolver(schema), mode: "onChange" });

  const onSubmit = async (formData) => {
    try {
      const { data } = await api.get(
        `users?email=${formData.email}&senha=${formData.password}`
      );
      if (data.length === 1) {
        navigation("/feed");
      } else {
        alert("Não encontrado");
      }
      console.log("retorno api", data);
    } catch (error) {
      alert("Error: ", error);
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu Cadastro</TitleLogin>
            <SubtitleLogin>Faça seu Login e Make the change.</SubtitleLogin>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
              <Input
                name="email"
                errorMessage={errors?.email?.message}
                control={control}
                placeholder="E-mail"
                leftIcon={<MdEmail />}
              />
              <Input
                name="password"
                errorMessage={errors?.password?.message}
                control={control}
                placeholder="Senha"
                type="password"
                leftIcon={<MdLock />}
              />
              <Button title={"Entrar"} variant="secondary" type="submit" />
            </form>
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText>Criar Conta</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Login };
