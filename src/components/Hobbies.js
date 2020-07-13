import React from 'react'

function Hobbies(props){
    return(
        <div>
            <h2>my hobbies is...</h2>
            <h3>{props.hobby}</h3>

            <img alt = " " src = {props.img}/>

            <p> {props.details} </p>
        </div>
    )
}

export default Hobbies;