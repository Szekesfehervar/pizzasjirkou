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
import Home from './pages/home';
import Error404 from "./pages/error404"

class App extends React.Component{
    render(){
      return(<div>
      
    <Router>
      <Navbar/>  
        
        <IngredientsProvider>
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path='/order/pizza' component={PizzaPage} />
        <Route path='/order/calzone' component={Calzone} />
        <Route path='/ingredients' component={Ingredinets} />
        <Route component={Error404}/>
        </Switch>  
        </IngredientsProvider> 
        
              
    </Router>
    
    
    
    </div>)
}
}

export default App;