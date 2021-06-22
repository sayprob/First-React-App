import "./App.css";
// import { Button } from "react-bootstrap";
// import Header from "./components/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import UpdateProduct from "./components/UpdateProduct";
import AddProduct from "./components/AddProduct";
import Protected from "./components/Protected";
import ProductList from "./components/ProductList";
import SearchProduct from "./components/SearchProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>

          <Route path="/add">
            <Protected Cmp={AddProduct} />
          </Route>
          <Route path="/update/:id">
            <Protected Cmp={UpdateProduct} />
          </Route>
          <Route path="/search">
            <Protected Cmp={SearchProduct} />
          </Route>
          <Route path="/">
            <Protected Cmp={ProductList} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
