import logo from './logo.svg';
import './funciones.js';
import './App.css';

function App() {
  return (

   
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>V1</div>
        <form class="form1" action="../php/loggin.php" id="formulario" method="post">

          <section class="bloqueinput">
            <input class="inputemail" type="email" placeholder="EMAIL" name="email" id="email" />
          </section>

          <section class="bloqueinput">
            <input class="inputcontraseña" type="password" placeholder="CONTRASENA" name="pasword" id="pasword" />
          </section>
          <input class="boton" type="submit" name="enviar" value="INICIAR SESION"></input>
        </form>
      </header>
    </div>
  );
}

export default App;
