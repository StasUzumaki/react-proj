import React from 'react'

export default function Drink({name,image}) {
    return (
        <div>
            <li >
                {name}
                <div>
                    <img src={image} className = "drink-image" alt="png" />
                </div>
            </li>
        </div>
    )
}
