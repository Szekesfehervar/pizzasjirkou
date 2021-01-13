import React,{useContext, useState} from 'react';
import {IngredientsContext} from "../components/ingredientsProvider";
import IngredientsDisplayPizza from "../components/ingredientsDisplayPizza";
import IngredientsDisplay from "../components/ingredientsDisplay";


const Pizza = () => {
  const [ingredients, setIngredients] = useContext(IngredientsContext);
  const [pizzaIng, setPizzaIng] = useState([]);
  const AddIng = (props) => {
    setPizzaIng(pizzaIng => [...pizzaIng,{name:props.name, category:props.category}]);
  }
    return (
      <div>
        <h1>Pizza</h1>
          {ingredients.map(m =>(<IngredientsDisplayPizza name={m.name} category={m.category} AddIng={AddIng}></IngredientsDisplayPizza>))}
          <h1>Píča zkurvenb rakovina petr je farejaer</h1>
          {pizzaIng.map(m =>(<IngredientsDisplay name={m.name} category={m.category}></IngredientsDisplay>))}
        
        
      </div>
    );
      
  }
export default Pizza;