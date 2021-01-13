import React,{useState, useContext} from "react";
import {IngredientsContext} from "../components/ingredientsProvider";
import AddIngredient from "../components/addingredient";


const Ingredients = () => {
    
    {
    const [ingredients, setIngredients] = useContext(IngredientsContext);
    return(<div>
       
            
        <h1> Mrdka</h1>
        {ingredients.map(m =>(<p>{m.name}</p>))}
        <AddIngredient/>
        </div>
        );
    }
}
export default Ingredients;