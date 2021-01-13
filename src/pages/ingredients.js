import React,{useState, useContext} from "react";
import {IngredientsContext} from "../components/ingredientsProvider";
import AddIngredient from "../components/addingredient";
import IngredientsDisplay from "../components/ingredientsDisplay";


const Ingredients = () => {
    
    {
    const [ingredients, setIngredients] = useContext(IngredientsContext);
    return(<div>
       
            
        <h1> Mrdka</h1>
        {ingredients.map(m =>(<IngredientsDisplay name={m.name} category={m.category}></IngredientsDisplay>))}
        <AddIngredient/>
        </div>
        );
    }
}
export default Ingredients;