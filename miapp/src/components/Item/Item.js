import React from "react";
import './Item.css'

const Item= ({prod})=>{
    return  (
        <div className="card">
        <div className="title">
            <h2 className="nombreProd">{prod.nombre}</h2>
        </div>ç
        <div>
            <img src={prod.img} alt={prod.nombre} className='imgProd'/>
        </div>
        <div className="containerDescrip">
            <p className="descripProd">{prod.description}</p>
            <p className="precioProd">${prod.precio}</p>
            
            <button className="buttonProd">Ver Descripcion</button>

    </div>
</div>
    )
}
export default Item