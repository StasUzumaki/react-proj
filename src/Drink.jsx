import React from 'react'
import './App.css';
export default function Drink({name,image}) {
    return (
        <div>
            <li className="li">
                <p>{name}</p>
                <div>
                    <img src={image} className = "drink-image" alt="png" />
                </div>
            </li>
        </div>
    )
}
