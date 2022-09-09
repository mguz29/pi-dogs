import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import landingPage from "./components/Landing/landingPage";
import Home from "./components/Home/Home";
import Detail from "./components/Detail/Detail";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={landingPage} />
          <Route path="/Home" component={Home} />
          <Route path="/Dogs/:id" component={Detail} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
