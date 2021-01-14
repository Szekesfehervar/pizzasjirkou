import React,{useState, createContext} from "react";
import Ingredinets from "../pages/ingredients";
import Pizza from "../pages/pizza";
import Calzone from "../pages/calzone"

export const IngredientsContext = createContext();


export const IngredientsProvider = props => {
    const[ingredients, setingredients] = useState([
        {
            name:"Pork chop",
            category:"meat",
            id:1
        },
        {
            name:"Tomatoes",
            category:"vegetables",
            id:2
        },
        {
            name:"Not an ananas",
            category:"fruit",
            id:3
        }
    ]);
    return(
        <IngredientsContext.Provider value={[ingredients, setingredients]}>
                   {props.children}
        </IngredientsContext.Provider>
    )
}