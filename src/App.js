import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import ManageInventory from "./components/MangeInventory/ManageInventory";
import NotFound from "./components/Notfound/NotFound";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Review from "./components/Review/Review";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
           <Route path="/shop">
           <Shop/>
           </Route>
           <Route path='/review'> 
           <Review/>
           </Route>
           <Route path='/manage'>
          <ManageInventory/>
           </Route>
           <Route path='/product/:productKey'>
             <ProductDetail/>
           </Route>
          <Route exact path='/'> 
            <Shop/>
          </Route>
          <Route path='*' >
         <NotFound/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
