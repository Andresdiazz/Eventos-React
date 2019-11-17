import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import firebaseConfig from "../config/firebaseConfig";
import { AuthContext } from "../config/auth";

import { Link } from 'react-router-dom';

import { ContainerLogin } from '../components/container';
import { Input } from '../components/input';
import { Boton } from '../components/boton';

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await firebaseConfig
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/home");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/home" />;
  }

  return (
    <div>

      <form onSubmit={handleLogin}>
      <ContainerLogin left gris>
        <h1 style={{ color: "#DA9928", margin: "10px 0 20px" }}>
          Iniciar Sesión
        </h1>

        
        <div style={{ width: "70%" }}>
            <Input
              space
              type="mail"
              placeholder="Email"
              name="email"
            />
            <Input
              space
              type="password"
              placeholder="Contraseña"
              name="password"
            />
          
        </div>
          <Boton style={{ marginTop: "10px" }} type="submit">
            Iniciar Sesión
          </Boton>
          
      </ContainerLogin>
      <ContainerLogin right azul>
        <h1>¡Hola!</h1>
        <p style={{ padding: "3% 20%", textAlign: "center", fontSize: "20px" }}>
          ¿Aun no te has registrado?
          <br />
          Comienza a descubrir y crear los mejores eventos que tenemos para ti
        </p>
        <Link to="/signup">
          <Boton>Registrarse</Boton>
        </Link>
      </ContainerLogin>
      </form>
    </div>
  );
};

export default withRouter(Login);
/*import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Components
import { ContainerLogin } from '../components/container';
import { Input } from '../components/input';
import { Boton } from '../components/boton';


export class login extends Component {

state = { form: {
    Email: '',
    Contraseña: ''
}
    
}

handleClick = e => {
    console.log( 
        "Button was click"
     );
};

handleChange = e => {
    console.log({ 
       name: e.target.name,
        value: e.target.value,
     });

    this.setState({
        [e.target.name]: e.target.value,
    })
};

handleSubmit = e => {
    e.preventDefault();
    console.log('Form was submitted');
    console.log(this.state);
    };
    render() {
        return (
            <div>
                <div>
                    <ContainerLogin left gris>
                        <h1 style={{color: "#DA9928", margin: "10px 0 20px"}}>Iniciar Sesión</h1>
                        <div style={{width: "70%"}}>
                            <form onSubmit={this.handleSubmit}>
                                <Input space type="mail" placeholder="Email" value={this.state.Email} onChange={this.onChange} />
                                <Input space type="password" placeholder="Contraseña" value={this.state.Contraseña} onChange={this.onChange} />
                            </form>
                        </div>
                        <Link to=""><Boton style={{marginTop: "10px"}} onClick={this.handleClick}>Iniciar Sesión</Boton></Link>
                    </ContainerLogin>
                    <ContainerLogin right azul>
                        <h1>¡Hola!</h1>
                        <p style={{padding: "3% 20%", textAlign: "center", fontSize: "20px"}}>¿Aun no te has registrado?<br />Comienza a descubrir y crear los mejores eventos que tenemos para ti</p>
                        <Link to="/signup"><Boton>Registrarse</Boton></Link>
                    </ContainerLogin>
                </div>
            </div>
        )
    }
}

export default login*/
