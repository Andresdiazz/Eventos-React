import React from 'react';
import {Link} from 'react-router-dom'
import firebaseConfig from '../config/firebaseConfig';

import '../components/styles/Navbar.css'

class Navbar extends React.Component{
    render(){
        return (
          <div className="Navbar">
            <div className="container-fluid row">
              <div className="col-11">
                <Link className="Navbar__brand" to="/home">
                  <span className="font-weight.light">ListaDe</span>
                  <span className="font-weight-bold"> Eventos</span>
                </Link>
              </div>
              <div className="col-1">
                <Link to="/">
                  <button onClick={() => firebaseConfig.auth().signOut()}>
                    Sign out
                  </button>
                </Link>
              </div>
            </div>
          </div>
        );
    }
}

export default Navbar;