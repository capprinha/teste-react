import { useState } from "react";

function App() {
  return (
    <div className="container">
      <form>
        <label htmlFor="nomeUsuario">Nome:</label>
        <input type="text" id="nomeUsuario" />

        <label htmlFor="email">E-mail:</label>
        <input type="email" id="email" />

        <label htmlFor="senha">Senha:</label>
        <input type="password" id="senha" />
        <button type="submit">Confinar</button>
        <button type="submit">Limpar</button>
        <p></p>
      </form>
    </div>
  );
}
export default App;
