import React from 'react';
import  {IngredientsContext} from './ingredientsProvider';




const IngredientsDisplayPizza = props => {
    return(
        <div>
            <h1>{props.name}</h1>
            <h2>{props.category}</h2>
            <button>Objednej</button>
           
        </div>
    );


}
export default IngredientsDisplayPizza;

/* <input type="text" name="name" value={name} onChange={updateName}/>*/
/*
<button onClick={props.metoda(props.name) }>Objednej</button>
const addIngredient = e =>{
    e.preventDefault();
    setIngredients(prevIngredients => [...prevIngredients,{name:name, category:category}]);
}*/