import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';

function App() {

  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={"Hola bienvenido a la tienda virtual del club"}/>
    </>
  );
}

export default App;
