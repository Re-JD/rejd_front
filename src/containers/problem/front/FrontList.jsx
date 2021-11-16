import React, { Component } from 'react';
import styled from 'styled-components';
import Cards from '../list/cardlayout';
import Header from 'components/base/Header';
class FrontList extends Component {
    render () {
        return (
            <div>
            <Header/>
            <FrontWrapper>
                <Cards/>
                <Cards/>
                <Cards/>
            </FrontWrapper>    
            </div>
        );
    }
}

const FrontWrapper =styled.div`
    width: 1200px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
   
`
export default FrontList;