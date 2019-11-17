import React, { Component } from 'react';
import firebase from '../../config/firebaseConfig';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from '../Navbar';
import Comment from '../Comments'
import '../styles/List.css'

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      eventos: {},
      key: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('eventos').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          eventos: doc.data(),
          key: doc.id,
          isLoading: false
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  delete(id){
    firebase.firestore().collection('eventos').doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
      this.props.history.push("/home")
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }

  render() {
    return (
      <div class="container">
        <div style={{paddingBottom:"10px"}}>
        <Navbar />
        </div>
        
        <div style={{padding:"10px", alignItems: "right"}}>
          <h4>
            <Link to="/home" className="btn btn-outline-info">
              Lista de Eventos
            </Link>
          </h4>
        </div>

        <div
          class="panel panel-default BadgesListItem row"
          style={{ paddingTop: "20px" }}
        >
          <div class="panel-heading col-2" style={{ paddingTop: "20px" }}>
            <h3 class="panel-title">{this.state.eventos.title}</h3>
          </div>
          <div class="panel-body col-10">
            <dl>
              <dt>Description:</dt>
              <dd>{this.state.eventos.description}</dd>
            </dl>
            <Link to={`/edit/${this.state.key}`} class="btn btn-outline-success">
              Edit
            </Link>
            &nbsp;
            <button
              onClick={this.delete.bind(this, this.state.key)}
              class="btn btn-outline-danger"
            >
              Delete
            </button>
          </div>
        </div>
        <div style={{paddingTop: "20px",}}>
        <Comment />
        </div>
        
      </div>
    );
  }
}

export default Show;