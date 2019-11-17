import React from 'react'

import firebase from '../config/firebaseConfig';


class Comments extends React.Component {
  constructor() {
    super();
    this.ref = firebase.firestore().collection("eventos");
    this.state = {
      comentarios: ''
    };
  }
  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  onSubmit = e => {
    e.preventDefault();

    const { comentarios } = this.state;

    this.ref
      .add({
        comentarios
      })
      .then(docRef => {
        this.setState({
          comentarios: ''
        });
        this.props.history.push("/home");
      })
      .catch(error => {
        console.error("Error adding document: ", error);
      });
  };

  render() {
    const { comentarios} = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div class="form-group">
            <label for="description">Escribe un comentario:</label>
            <textArea
              class="form-control"
              name="comentarios"
              onChange={this.onChange}
              placeholder="Comentario"
              cols="80"
              rows="3"
            >
                {comentarios}
            </textArea>
          </div>
          <button type="submit" class="btn btn-success">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Comments;