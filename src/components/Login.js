import React from 'react' 
import {useNavigate} from "react-router-dom";
import useAuth from "../helpers/useAuth";
import config from "../helpers/config.json"; 



const Login = () =>{
  const{setAuth} = useAuth(); 
  let navigate = useNavigate(); 
  const changeButtonState = (button, enabled) => { 
    if (enabled){
      button.disabled = false; 
      button.innerHTML = "<i className='fa fa-sing-in'></i>Acceder";
    }else{
      button.disabled = true; 
      button.innerHTML = "<i className='fa fa-spin f-spinner'></i>Accediendo....";
    }
  };  
  const showMessage = (visible, message) => {
    const messageBox = document.querySelector(".alert");
    const reasonBox = document.querySelector("#reason");
    if (visible){
      reasonBox.innerHTML = message;
      messageBox.classList.remove("d-none")
    }else{
      reasonBox.innerHTML = "";
      message.classList.add("d-none")
    }
  }  
  const logger = async (event) =>{
    event.preventDefault();
    const button = document.querySelector("button");
    changeButtonState(button, false);
  
    var {username, pass} = document.forms[0];
    const user = username.value; 
    const password = pass.value; 
    if (user.length === 0 || password.length === 0){
      showMessage(true, "Debecompletar todos los campos");
      changeButtonState(button, true); 
      return;
    }
    const requestOptions = {
      method: 'POST', 
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({nickname: user, password: password, operatorId: config.operatorId})
    }; 
    fetch(config.apiURL+"Login", requestOptions).then((response) => {
      switch(response.status){
        case 403: 
          showMessage(true, "Acceso prohibido"); 
          changeButtonState(button, true); 
          break; 
        case 404: 
          showMessage(true, "Nombre de usuario o clave incorrectos"); 
          changeButtonState(button, true); 
          break;
          default:
            //   
      } 
    return response.json();
    }).then((result) => {
      if(!result.data[0].activo){
        showMessage(true, "El usuario está inactivo");
        changeButtonState(button, true); 
        return; 
      }
      
      try {
        const infoData = result.data[0]; 
        const infoUser = JSON.stringify(infoData); 
        showMessage(false, ""); 
        changeButtonState(button, true); 
        localStorage.setItem("user", infoUser); 
        const roles = [infoData['level']];
        /*setAuth({user, password, roles});*/ 
        navigate('/sales'); 
      } catch (error) {
        console.log(error);  
      }
    }).catch((_error) => {
    //
    }) 
  }
  return (
    <div className="login-box center offset-5" >
      <div className="login-logo">
        <p className="login-box-msg"><b>Cloud</b>Sales
        </p></div>
      <div className="card">
        <div className="card-body login-card-body">
          <p className="login-box-msg">Autentíquese para iniciar seción
          </p>
          <form  onSubmit={logger}>
            <div className="input-group mb-3">
              <input type="text" id="username" name="username" className="form-control" placeholder="Email" />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-envelope" />
                </div>
              </div>
            </div>
            <div className="input-group mb-3">
              <input type="password" id='pass' name='pass' className="form-control" placeholder="Password" />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock" />
                </div>
              </div>
            </div>  
            
            <div className="alert alert-danger text-center d-none" role="alert">
              <strong>Error!</strong>
              <p id="reason" />
            </div>
            <div className="row">
              <div className="col-12 text-center">
                <button className="btn btn-primary"><i className="fa fa-sing-in" /> Acceder</button>
              </div> 
            </div>
          </form></div>
      </div>
    </div>
        )
 
  
  }  
  export default Login;