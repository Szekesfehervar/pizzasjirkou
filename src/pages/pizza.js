import React,{useContext, useState} from 'react';
import {IngredientsContext} from "../components/ingredientsProvider";
import IngredientsDisplay from "../components/ingredientsDisplayPizza";


const Pizza = () => {
  const [ingredients, setIngredients] = useContext(IngredientsContext);
  const [pizzaing, setPizzaIng] = useState("");
    return (
      <div>
        <h1>Pizza</h1>
          {ingredients.map(m =>(<IngredientsDisplay name={m.name} category={m.category}></IngredientsDisplay>))}
          
        
        
      </div>
    );
      
  }
export default Pizza;