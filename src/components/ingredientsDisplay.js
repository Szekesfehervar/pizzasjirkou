import React from 'react';
import  {IngredientsContext} from './ingredientsProvider';



const IngredientsDisplay = props => {
    return(
        <div>
            <h1>{props.name}</h1>
            <h2>{props.category}</h2>
            
        </div>
    );


}
export default IngredientsDisplay;