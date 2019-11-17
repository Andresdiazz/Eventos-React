import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebaseConfig from '../config/firebaseConfig';
import 'bootstrap/dist/css/bootstrap.css'
import '../components/styles/List.css'
import Navbar from '../components/Navbar'
import {BotonAsistir} from '../components/botonAsistir'

class Home extends Component {
  constructor(props) {
    super(props);
    this.ref = firebaseConfig.firestore().collection('eventos');
    this.unsubscribe = null;
    this.state = {
      eventos: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const eventos = [];
    querySnapshot.forEach((doc) => {
      const { title, description} = doc.data();
      eventos.push({
        key: doc.id,
        doc, // DocumentSnapshot
        title,
        description,
      });
    });
    this.setState({
      eventos
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }


  render() {
    return (
      <div className="container">
        <Navbar />
        <div className="panel panel-default">
          <div className="panel-heading row">
            <div className="col" style={{paddingTop: "10px", align: "right"}}>
            
            </div>
          </div>
          <div className="panel-body">
            <h4>
              <Link to="/create"><button className="btn btn-outline-info">AÑADIR UN EVENTO</button></Link>
            </h4>
              <div className="BadgesList">
                <ul className="list-unstyled">
                  {this.state.eventos.map(eventos =>{
                    return(
                      <li>
                        <div className="BadgesListItem">
                          <div className="row">
                            <div className="col-6">
                            <Link className="EventName" to={`/show/${eventos.key}`}>{eventos.title}</Link>
                            </div>
                            <div className="col-5">
                            {eventos.description}
                            </div>
                            <div>
                              <BotonAsistir>Asistiré</BotonAsistir>
                            </div>
                          </div>
                        </div>
                      </li>
                    )
                    })}
                </ul>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;