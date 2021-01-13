import React,{useContext, useState} from 'react';
import {IngredientsContext} from "../components/ingredientsProvider";


const Pizza = () => {
  const value = useContext(IngredientsContext)
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100px',
          margin:'50px'
        }}
      >
        <h1>Pizza</h1>
        <br/>
      
        
        
      </div>
    );
      
  }
export default Pizza;