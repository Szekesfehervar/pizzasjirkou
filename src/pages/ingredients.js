import React,{useState, useContext} from "react";
import {IngredientsContext} from "../components/ingredientsProvider";
import AddIngredient from "../components/addingredient";
import IngredientsDisplay from "../components/ingredientsDisplay";


const Ingredients = () => {
    
    {
    const [ingredients, setIngredients] = useContext(IngredientsContext);
    return(<div>
       
            
        <h1> Ingredients</h1>
        {ingredients.map(m =>(<IngredientsDisplay name={m.name} category={m.category}></IngredientsDisplay>))}
        
        <h2>Add ingredient</h2>
        <AddIngredient/>
        </div>
        );
    }
}
export default Ingredients;