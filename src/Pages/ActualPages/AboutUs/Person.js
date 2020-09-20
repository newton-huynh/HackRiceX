import React from 'react';
import styled from 'styled-components';
import {Image} from 'rebass';

function Person(props) {
    return (
        <div>
            <Image src={props.image} variant='avatar' />
            <h2>{props.name}</h2>
            <p>{props.bio}</p>
        </div>
    )

}

export default Person