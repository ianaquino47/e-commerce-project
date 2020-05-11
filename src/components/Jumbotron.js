import React from 'react'
import { Jumbotron as Jumbo, Container } from 'react-bootstrap'
import styled from 'styled-components';
import shoeImage from '../assets/sneakers.png'

const Styles = styled.div`
    .jumbotron {
        background: url(${shoeImage}) no-repeat fixed bottom;
        background-size: cover;
        color: #ccc ;
        height: 200px;
        position: relative;
        z-index: -2
    }

    .overlay {
        background-color: #000;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1
    }
`;

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbotron">
            <div className="overlay"></div>
            <Container>
                <h1>Welcome</h1>
                <p>Lorem Impsum.</p>
            </Container>
        </Jumbo>
    </Styles>
)