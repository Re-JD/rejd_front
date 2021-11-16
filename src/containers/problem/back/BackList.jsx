import React, { Component } from 'react';
import styled from 'styled-components';
import Cards from '../list/cardlayout';
import Header from 'components/base/Header';


class BackList extends Component {
    render () {
        return (
            <div>
            <Header/>
            <BackWrapper>
                <Cards/>
                <Cards/>
                <Cards/>
            </BackWrapper>
            </div>
        );
    }
}

const BackWrapper =styled.div`
    width: 1200px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
   `

export default BackList;