 // eslint-disable-next-line
import React from "react";
// This file contains the Card component
const Card = (props) => {
    // we can also destructure the props parameter to avoid writing props.name,props.email etc in our jsx
    // what is done below can be done directly in the () where props is in the area above
    const {name,email,id} = props;  
    return(
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <div>
                <img alt={`${name}'s pic`} src={`https://robohash.org/api/${id}?200x200`}></img>
            </div>
            <h1>{name}</h1>
            <p>{email}</p>
        </div>
    )
}

export default Card;