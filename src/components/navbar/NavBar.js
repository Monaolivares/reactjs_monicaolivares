
import BoticaLogo from "../../img/botica.png"; 

import CartWidget from "../CartWidget/CartWidget";

import 'bulma/css/bulma.min.css'; 
const NavBar = () =>{
    return ( 
    <nav className="has-background-light">
        <div>
       <figure >
       <img src={BoticaLogo}></img>
       </figure>
        <h2 class="is-size-4 has-text-centered has-text-weight-bold is-family-monospace">Botica Bosque</h2>
        </div>

        <div className="columns">
            
            <div className="column">
            <button className="button is-primary is-light"><a src="">Cosmetica natural</a></button>
            </div>
            
            <div className="column">
            <button className="button is-primary is-light"><a src="">Preparados herbales</a></button>
            </div>
         
            <div className="column">
                <button className="column button is-primary is-light"><a src="">Quienes somos</a></button>
            </div>
            <div className="column">
                <button className="button is-primary is-light"><a src="">Talleres y actividades</a></button>
            </div>
       
            <div className="column ">
            <button className="button is-primary is-light"><a src="">E-books</a></button>
            </div>

            <CartWidget/>


        
        </div>

    </nav>
    )
}

export default NavBar