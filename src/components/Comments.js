import React from 'react'

class Comments extends React.Component{
    render(){
        return(
            <div>
                <div class="form-group">
                <label for="description">Escribe un comentario:</label>
                <textArea
                  class="form-control"
                  name="description"
                  onChange={this.onChange}
                  placeholder="Comentario"
                  cols="80"
                  rows="3"
                >
                </textArea>
              </div>
              <button type="submit" class="btn btn-success">
                Submit
              </button>
            </div>
        )
    }

}

export default Comments;