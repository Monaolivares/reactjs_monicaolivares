import NavBar from "./components/navbar/NavBar"; 
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
    return (
    <div className="App has-background-light">
        <NavBar></NavBar>
        
        <ItemListContainer greeting={'Hooolaaaaaaaaa'}></ItemListContainer>

    </div>
    )
}


export default App