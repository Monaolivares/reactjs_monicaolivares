import NavBar from "./components/navbar/NavBar"; 
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";
import {BrowserRouter, Routes, Route} from "react-router-dom"; 
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"; 
import "./App.css"; 
function App() {
    return (
    <div className="App has-background-light">
        <BrowserRouter>
                <NavBar/>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
                <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
                <Route path="*" element={<h1>404 NOT FOUND</h1>}/>

        <ItemCount initial={1} stock={10} onAdd={quantity => console.log("Cantidad agregada:", quantity)}/>
            </Routes>
        </BrowserRouter>
    </div>
    )
}


export default App 