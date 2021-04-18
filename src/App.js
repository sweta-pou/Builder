import React from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './container/BurgerBuilder/BurgerBuilder';
import Checkout from './container/Checkout/Checkout';
import Orders from './container/Orders/Orders';
import {Route,Switch} from 'react-router-dom';

function App() {
  console.log("APP.js");
  return (
    
    <div >
      <Layout>
         <Switch>
          <Route path="/checkout" component={Checkout}/>
          <Route path="/orders" component={Orders} />
          <Route path="/"    component={BurgerBuilder}/>
         </Switch>
       </Layout>
    </div>
 );
}

export default App;
