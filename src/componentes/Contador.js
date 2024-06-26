import React from "react";
import '../hojas-de-estilo/Contador.css'

function Contador({numClics, flash}){
    return (
        <div className={`contador ${flash ? 'flash' : ''}`}>
            {numClics}
        </div>
    );
}

export default Contador;