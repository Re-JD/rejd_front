import React, { Component } from 'react';
import styled from 'styled-components';
import Title from '../list/title';
import Description from '../list/discription';

class Card extends Component {
    render () {
        return (
            <div>
           <Cardwrapper>
             <Titles>제목</Titles>
             <Descriptions>블라블라블라 내용</Descriptions>  
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
const Titles = styled.div`
    font-size:20px;
`
const Descriptions = styled.div`
    font-size:13px;
`
export default Card;