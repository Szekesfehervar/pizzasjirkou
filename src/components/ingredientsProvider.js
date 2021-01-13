import React,{useState, createContext} from "react";
import Ingredinets from "../pages/ingredients";
import Pizza from "../pages/pizza";
import Calzone from "../pages/calzone"

export const IngredientsContext = createContext();


export const IngredientsProvider = props => {
    const[ingredients, setingredients] = useState([
        {
            name:"Vepřové maso",
            category:"maso",
            id:1
        },
        {
            name:"Kuřecí maso",
            category:"maso",
            id:2
        },
        {
            name:"Hovězí maso",
            category:"maso",
            id:3
        }
    ]);
    return(
        <IngredientsContext.Provider value={[ingredients, setingredients]}>
                   {props.children}
        </IngredientsContext.Provider>
    )
}