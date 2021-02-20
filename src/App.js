// import logo from './logo.svg';
import './App.css';
import { Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar.jsx";
import Cards from "./Components/Cards/Cards.jsx";
import Details from "./Components/Details/Details";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
     <Route exact path='/' component={NavBar} ></Route>
     <Route exact path='/' component={Cards} ></Route>
     <Route path='/details' component={Details} ></Route>
     <Route path ='/' component={Footer} ></Route>
    </div>
  );
}
export default App;
