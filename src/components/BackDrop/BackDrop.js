import React from 'react';
import './BackDrop.css';

const BackDrop = ({ click }) => {
    return (
        <>
          <div className="backdrop" onClick={click}/>   
        </>
    )
}

export default BackDrop
