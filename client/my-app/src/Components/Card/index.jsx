import React from "react";

export default function Card({title , image}){

    return(
        <div>
            <div>
                <h1>{title}</h1>
            </div>

            <div>
                <img src={image}/>
            </div>
        </div>
    )
}