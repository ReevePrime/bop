import "./App.css";
import Header from "./components/Header/Header";
import { Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Store from "./components/Store/Store";
import Coffees from "./components/Coffees/Coffees";

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/store">
        <Store />
      </Route>
      <Route path="/coffees">
        <Coffees />
      </Route>
    </div>
  );
}

export default App;
