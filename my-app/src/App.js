import logo from './logo.svg';
import './App.css';

function App() {
  const eComerce="Vanilla Store"
  return (
    <body>   
      <header>
       <nav>
        <ul>
          <li>inicio</li>
          <li>nosotros</li>
          <li>tienda</li>
          <li>contacto</li>
        </ul>
       </nav>
      </header>
      <h1>{eComerce}</h1>
      <section>
        <article>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </article>
      </section>
      </body>
  );
}

export default App;
