import React from 'react';

function Pokemon(props) {
    return(
        <div>
            <img src={props.data.sprites.front_default} />
            <p>{props.data.name}</p>
            <p>{props.data.id}</p>
        </div>
);
}

export default Pokemon;