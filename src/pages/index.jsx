import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { RecipeCard } from '../components/RecipeCard';

const response = await fetch('http://localhost:4000/api/recepty');
const data = await response.json();
const recepty = data.result;
console.log(recepty);
const nazevReceptu = recepty.nazev;

document.querySelector('#root').innerHTML = render(
  <div className="container">
    <header>
      <div className="logo"></div>
      <h1>Webová aplikace</h1>
    </header>
    <main></main>
    <footer>
      <p>Czechitas, Digitální akademie: Web</p>
    </footer>
  </div>,
);
