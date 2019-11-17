import React, { Component } from 'react';
import firebase from '../../config/firebaseConfig';
import { Link } from 'react-router-dom';

class Create extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('eventos');
    this.state = {
      title: '',
      description: '',
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { title, description } = this.state;

    this.ref.add({
      title,
      description
    }).then((docRef) => {
      this.setState({
        title: '',
        description: '',
      });
      this.props.history.push("/home")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    const { title, description} = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">AÑADIR EVENTO</h3>
          </div>
          <div class="panel-body">
            <h4>
              <Link to="/home" class="btn btn-outline-info">
                Lista de Eventos
              </Link>
            </h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="title">Title:</label>
                <input
                  type="text"
                  class="form-control"
                  name="title"
                  value={title}
                  onChange={this.onChange}
                  placeholder="Title"
                />
              </div>
              <div class="form-group">
                <label for="description">Description:</label>
                <textArea
                  class="form-control"
                  name="description"
                  onChange={this.onChange}
                  placeholder="Description"
                  cols="80"
                  rows="3"
                >
                  {description}
                </textArea>
              </div>
              <button type="submit" class="btn btn-success">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;