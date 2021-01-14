import React,{useContext, useState} from 'react';
import {IngredientsContext} from "../components/ingredientsProvider";
import IngredientsDisplayPizza from "../components/ingredientsDisplayPizza";
import IngredientsDisplay from "../components/ingredientsDisplay";


const Pizza = () => {
  const [ingredients, setIngredients] = useContext(IngredientsContext);
  const [pizzaIng, setPizzaIng] = useState([]);
  const AddIng = (props) => {
    if(pizzaIng.length <4){
    setPizzaIng(pizzaIng => [...pizzaIng,{name:props.name, category:props.category}]);}
    
  }
    return (
      <div>
        <h1>Pizza</h1>       
          {ingredients.map(m =>(<IngredientsDisplayPizza name={m.name} category={m.category}  AddIng={AddIng}></IngredientsDisplayPizza>))}   
          <br/>    
          <h1>Your ingredients</h1>
          {pizzaIng.map(m =>(<IngredientsDisplay name={m.name} category={m.category}></IngredientsDisplay>))}
        
        
      </div>
    );
  
  }
export default Pizza;

/*category={m.category}*/