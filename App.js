import React from 'react'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from"react-router-dom" 
import Product from './Component/Product';
import './Style.css';


function App(){
  return (
    <div key={Product.id}>
      <Product /> 
    {/* <Router>
      <div>
      <Switch>
      <Route path="/product/:id">
        <Product /> 
      </Route>
        </Switch>
        </div>
    </Router> */}
    </div>
  )
}


export default App;