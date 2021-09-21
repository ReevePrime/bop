import "./App.css";
import Header from "./components/Header/Header";
import { Route, useLocation } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Store from "./components/Store/Store";
import Coffees from "./components/Coffees/Coffees";
import { TransitionGroup, CSSTransition } from 'react-transition-group';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Header />
      <TransitionGroup>
        <CSSTransition
          timeout={250}
          classNames="fade"
          key={location.key}>
        <>
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
        </>
      </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;
