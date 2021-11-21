import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Productslist from "./component/Productslist";
import Addproduct from "./component/Addproduct";
import Editproduct from "./component/Editproduct";

function App() {
  return (
    <Router>
    <div className="container">
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
        <Switch>
          <Route exact path="/">
           <Productslist/>
          </Route>
          <Route  path="/add">
           <Addproduct/>
          </Route>
          <Route path="/edit/:id">
            <Editproduct/>
          </Route>
        </Switch>
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
