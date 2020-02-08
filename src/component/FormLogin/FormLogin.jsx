import React, { useState, useEffect } from "react";
import "./FormLogin.css";

function FormLogin({ onSubmit }) {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setUserEmail("");
    setPassword("");
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    console.log()

    await onSubmit({
      userEmail,
      password
    });

    setUserEmail("");
    setPassword("");
  }

  return (
    <form className="form-login" onSubmit={handleSubmit}>
      <div className="input-block">
        <label htmlFor="userEmail">E-mail do Usuário</label>
        <input
          name="userEmail"
          id="userEmail"
          required
          value={userEmail}
          onChange={e => setUserEmail(e.target.value)}
        />
      </div>
      <div className="input-block">
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          name="password"
          id="password"
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default FormLogin;
