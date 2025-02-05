import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="login-box">
      <div className="login-key">
        <i className="fa fa-key" aria-hidden="true"></i>
      </div>
      <div className="login-title">PAINEL ADMIN</div>
      <form className="login-form">
        <div className="form-group">
          <label>NOME DE USUÁRIO</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>SENHA</label>
          <input type="password" className="form-control" />
        </div>
        <button type="submit" className="btn-outline-primary">CONECTE-SE</button>
      </form>
    </div>
  );
}

export default Login;
