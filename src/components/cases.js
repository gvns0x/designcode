import React, { Component } from 'react'
import Case from '../components/case'
import styled from 'styled-components'

const CaseStudyContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    @media only screen and (min-width:800px) {
        margin-top: 56px;
    }
`

const CaseStudiesDiv = styled.div`
    margin-left: ${props => props.sideMargin};
    margin-right: ${props => props.sideMargin};
    margin-top: ${props => props.top};
    margin-bottom: ${props => props.bot};
    max-width: 906px;
    display:grid;
    width:100%;
    justify-items:center;
    justify-content:stretch;
    grid-column: 2/3;

    @media only screen and (min-width: 800px) {
        grid-template-columns: minmax(272px, 372px) minmax(272px, 372px);
        grid-column-gap: initial;
        justify-content:space-between;
    }
`




const CaseStudies = (props) => (
    <CaseStudyContainer>
        <CaseStudiesDiv sideMargin={"24px"} top={"24px"} bot={"64px"}>
            <Case image="https://statig3.akamaized.net/bancodeimagens/4j/1n/nj/4j1nnjmn36tchawzindp9errw.jpg" title="Case Study title goes here" description="Case study description goes here"/>

            <Case image="https://statig3.akamaized.net/bancodeimagens/4j/1n/nj/4j1nnjmn36tchawzindp9errw.jpg" title="Case Study title goes here" description="Case study description goes here"/>

            <Case image="https://statig3.akamaized.net/bancodeimagens/4j/1n/nj/4j1nnjmn36tchawzindp9errw.jpg" title="Case Study title goes here" description="Case study description goes here"/>
        </CaseStudiesDiv>
    </CaseStudyContainer>
)

export default CaseStudies
