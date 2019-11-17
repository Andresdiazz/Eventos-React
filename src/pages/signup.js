import React, { useCallback } from "react";
import { withRouter } from "react-router";
import firebaseConfig from "../config/firebaseConfig";

import { Link } from 'react-router-dom';

import { Boton } from '../components/boton';
import { ContainerLogin } from '../components/container';
import { Input } from '../components/input';

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await firebaseConfig
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/home");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <div>
      <form onSubmit={handleSignUp}>
        <div>
          <ContainerLogin right gris>
            <h1 style={{ color: "#DA9928", margin: "10px 0 20px" }}>
              Registrate
            </h1>
            <div style={{ width: "70%" }}>
              <Input space type="email" name="email" placeholder="Email" />
              <Input
                space
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>

            <Boton style={{ marginTop: "10px" }} type="submit">Registrarse</Boton>
          
        </ContainerLogin>
        <ContainerLogin left azul>
          <h1>¡Hola!</h1>
          <p
            style={{
              padding: "3% 20%",
              textAlign: "center",
              fontSize: "20px"
            }}
          >
            ¿Ya tienes una cuenta?
            <br />
            Accede a ella y descubre los eventos que tenemos para ti
          </p>
          <Link to="/">
            <Boton>Iniciar Sesión</Boton>
          </Link>
        </ContainerLogin>
      </div>
      </form>
    </div>
  );
};

export default withRouter(SignUp);

/*import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom'
import firebaseConfig from '../config/firebaseConfig'

// Components
import { ContainerLogin } from '../components/container';
import { Input } from '../components/input';
import { Boton } from '../components/boton';
import { async } from '@firebase/util';

const signup = ({history}) => {
    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try{
            await firebaseConfig
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
            history.push("/home");
        } catch (error) {
            alert(error);
        }
    }, [history]);

    return (
      <div>
        <div>
          <ContainerLogin right gris>
            <h1 style={{ color: "#DA9928", margin: "10px 0 20px" }}>
              Registrate
            </h1>
            <form onSubmit={handleSignUp}>
              <div style={{ width: "70%" }}>
                <div style={{ display: "flex" }}>
                  <Input
                    space
                    type="text"
                    style={{ marginRight: "10px" }}
                    placeholder="Nombre"
                  />
                  <Input
                    space
                    type="text"
                    style={{ marginLeft: "10px" }}
                    placeholder="Apellidos"
                  />
                </div>
                <Input space type="text" placeholder="Nombre de Usuario" />
                <Input space type="email" name="email" placeholder="Email" />
                <Input
                  space
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <Input space type="password" placeholder="Confirmar Password" />
              </div>
              
                <Boton style={{ marginTop: "10px" }}>Registrarse</Boton>
              
            </form>
          </ContainerLogin>
          <ContainerLogin left azul>
            <h1>¡Hola!</h1>
            <p
              style={{
                padding: "3% 20%",
                textAlign: "center",
                fontSize: "20px"
              }}
            >
              ¿Ya tienes una cuenta?
              <br />
              Accede a ella y descubre los eventos que tenemos para ti
            </p>
            <Link to="/">
              <Boton>Iniciar Sesión</Boton>
            </Link>
          </ContainerLogin>
        </div>
      </div>
    );
}


export default withRouter (signup)*/
