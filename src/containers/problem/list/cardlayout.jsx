import React, { Component } from 'react';
import styled from 'styled-components';
import Title from '../list/title';
import Description from '../list/discription';

class Card extends Component {
    render () {
        return (
            <div>
           <Cardwrapper>
             <Title name="제목제목"/>
             <Description name="내용블라블라블라"/>
            </Cardwrapper>    
             </div> 
        );
    }
}

const Cardwrapper = styled.div`
    width: 250px;
    height: 100px;
    background-color:#2EFEF7;
    border: 1px solid black;
    flex:comlumn;
`
export default Card;