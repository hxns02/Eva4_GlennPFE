import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <div>
  <form action> 
    <div className="container mt-6">
      <div className="row justify-content-center align-items-center"> 
        <div className="col-6">
          <div>
            <label htmlFor>Usuario</label>
            <input type="text" className="form-control" placeholder="Usuario" />
          </div>
          <div>
            <label htmlFor>Contraseña</label>
            <input type="password" className="form-control" placeholder="Contraseña" />
          </div>
          <div>
            <input type="submit" className="form-control btn btn-success" defaultValue="Acceder" />
          </div> 
          <div className="alert alert-danger d-none ">
            Los datos ingresados son incorrectos
          </div>
        </div>
      </div>
    </div>
  </form>
</div>

    )
  }
}
