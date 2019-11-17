import React, { Component } from 'react';
import firebase from '../../config/firebaseConfig';
import { Link } from 'react-router-dom';
class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key: '',
      title: '',
      description: '',
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('eventos').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const eventos = doc.data();
        this.setState({
          key: doc.id,
          title: eventos.title,
          description: eventos.description
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState({eventos:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { title, description} = this.state;

    const updateRef = firebase.firestore().collection('eventos').doc(this.state.key);
    updateRef.set({
      title,
      description,
    }).then((docRef) => {
      this.setState({
        key: '',
        title: '',
        description: '',
      });
      this.props.history.push("/show/"+this.props.match.params.id)
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Editar Evento
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to={`/show/${this.state.key}`} class="btn btn-primary">Lista de Eventos</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="title">Title:</label>
                <input type="text" class="form-control" name="title" value={this.state.title} onChange={this.onChange} placeholder="Title" />
              </div>
              <div class="form-group">
                <label for="description">Description:</label>
                <input type="text" class="form-control" name="description" value={this.state.description} onChange={this.onChange} placeholder="Description" />
              </div>
              <button type="submit" class="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Edit;