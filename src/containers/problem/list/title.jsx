import React from 'react';
import styled from 'styled-components';

const Title = (props) => {
    return (
        <Text>{props.title}</Text>
    )
}

const Text = styled.h1`
    font-size: 20px;
`;


export default Title;