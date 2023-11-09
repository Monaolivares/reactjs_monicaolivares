
import BoticaLogo from "../../img/botica.png"; 

import CartWidget from "../CartWidget/CartWidget";

import 'bulma/css/bulma.min.css'; 
const NavBar = () =>{
    return ( 
    <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
        <a src=""><img src={BoticaLogo}></img></a>
        <h2 class="is-size-4 has-text-centered has-text-weight-bold is-family-monospace">Botica Bosque</h2>
        

        
        </div>
        <div>
        <div clasName="navbar-brand">
            <div className="navbar-item has-dropdown is-hoverable"> 
                <button className="navbar-item"><a>Cosmetica natural</a></button>
                <button className="navbar-item"><a>Preparados herbales</a></button>
            </div>
            <hr class="navbar-divider"></hr>
            <button className="navbar-item"><a>Quienes somos</a></button>
            <hr class="navbar-divider"></hr>
            <button className="navbar-item"><a>Talleres y actividades</a></button>
            <hr class="navbar-divider"></hr>
            <button className="navbar-item"><a>E-books</a></button>

            <CartWidget></CartWidget>


        </div>
        </div>

    </nav>
    )
}

export default NavBar