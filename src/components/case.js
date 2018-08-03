import React from 'react'
import { styles } from '../styles.js'
import styled from 'styled-components'

const CaseStudy = styled.div`
    cursor: pointer;
    width:100%;
    max-width:372px;
    margin-bottom: 32px;

    @media only screen and (min-width:800px) {
        display:block;
        max-width:100%;
        margin-bottom: 56px;
    }
`

const CaseStudyImg = styled.div `
    background: url(${props => props.image});
    background-size: cover;
    background-position: center;
    height:383px;
    max-width:372px;
    width:100%;
`

const Title = styled.h2 `
    ${styles.titleStyles.titleH2}
    margin-top: 8px;
    margin-bottom:8px;
`

const Description = styled.p`
    ${styles.textStyles.textNormal}
    margin-bottom: 0px;
    margin-top:0px;
`

const Case = (props) => (

    <CaseStudy image={props.image}>
        <CaseStudyImg image={props.image}></CaseStudyImg>
            <Title>{props.title}</Title>
            <Description>{props.description}</Description>
    </CaseStudy>
)

export default Case
