import './estilos.css';
import NavbarBurguer from './assets/NavbarBurguer';
import Destacados from './assets/Destacados';
import Cupones from './assets/Cupones';
import PromosApp from './assets/PromosApp';
import Footer from './assets/Footer';
import { NavBar } from './components/NavBar/NavBar';
import {ItemListContainers} from './ItemListContainers';
import CartWidget from './components/CartWidget/CartWidget';


function App() {
  return (
    <div className='container-fluid fondo_amarillo App'>
      <NavBar/>
      <CartWidget/>
      <NavbarBurguer />
      <hr />
      <ItemListContainers  greeting= 'BienvenidosFerlusw'/>
      <Destacados/>
      <Cupones/>
      <PromosApp/>
      <Footer/>
    </div>
  );
}

export default App;




