import React from 'react';
import styled from 'styled-components';

const Discription = (props) => {
    return (
        <Text>{props.title}</Text>
    )
}

const Text = styled.h1`
    font-size: 13px;
`;


export default Discription ;