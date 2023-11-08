import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/index";

const Home = () => {
  return (
    <>
      <div>Home</div>
      <Button title="Teste 1" />
      <Button variant="secondary" title="Teste 2" />
      <Link to="/login">Login</Link>
    </>
  );
};

export { Home };
