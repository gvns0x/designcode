import React, { Component } from 'react'
import Case from '../components/case'
import styled from 'styled-components'

const CaseStudyContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    margin-top:136px;
`

const CaseStudiesDiv = styled.div`
    margin-left: 24px;
    margin-right: 24px;
    margin-bottom: 136px;
    max-width: 906px;
    display:grid;
    width:100%;
    justify-items:center;
    justify-content:stretch;
    grid-column: 2/3;

    @media only screen and (min-width:550px) {
        ${'' /* margin-left: 88px;
        margin-right: 88px; */}
    }

    @media only screen and (min-width: 800px) {
        grid-template-columns: minmax(272px, 372px) minmax(272px, 372px);
        grid-column-gap: initial;
        justify-content:space-between;
    }
`

const CaseStudies = (props) => (
    <CaseStudyContainer>
        <CaseStudiesDiv>
            <Case image="https://statig3.akamaized.net/bancodeimagens/4j/1n/nj/4j1nnjmn36tchawzindp9errw.jpg" title="Case Study title goes here" description="Case study description goes here"/>

            <Case image="https://images.pexels.com/photos/68147/waterfall-thac-dray-nur-buon-me-thuot-daklak-68147.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" title="Case Study title goes here" description="Case study description goes here"/>

            <Case image="https://statig3.akamaized.net/bancodeimagens/4j/1n/nj/4j1nnjmn36tchawzindp9errw.jpg" title="Case Study title goes here" description="Case study description goes here"/>
        </CaseStudiesDiv>
    </CaseStudyContainer>
)

export default CaseStudies
