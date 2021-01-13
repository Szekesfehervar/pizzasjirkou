import logo from './logo.svg';
import './App.css';
import Navbar from "./components/index.js"
import PizzaPage from "./pages/pizza"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Calzone from './pages/calzone.js';
import React from 'react';
import Ingredinets from './pages/ingredients';
import {IngredientsProvider} from "./components/ingredientsProvider";

class App extends React.Component{
    render(){
      return(<div>
      
    <Router>
      <Navbar/>  
        <Switch>
        <IngredientsProvider>
        <Route path='/order/pizza' component={PizzaPage} />
        <Route path='/order/calzone' component={Calzone} />
        <Route path='/ingredients' component={Ingredinets} />
        </IngredientsProvider> 
        </Switch>        
    </Router>
    
    
    
    </div>)
}
}

export default App;