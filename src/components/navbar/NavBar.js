
import BoticaLogo from "../../img/botica.png"; 

import CartWidget from "../CartWidget/CartWidget";

import 'bulma/css/bulma.min.css'; 
const NavBar = () =>{
    return ( 
    <nav>
        <div className="columns is-centered">
        <img src={BoticaLogo} className="column is-half"></img>
        <h2 class="is-half">Botica Bosque</h2>

        
        </div>
        <div className="hero">
        <div clasName="hero-body">
            <button>Cosmetica natural</button>
            <button>Preparados herbales</button>
            <button>Quienes somos</button>
            <button>Talleres y actividades</button>
            <button>E-books</button>

            <CartWidget></CartWidget>


        </div>
        </div>

    </nav>
    )
}

export default NavBar