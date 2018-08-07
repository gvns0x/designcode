import React from 'react'
import { styles } from '../styles.js'
import styled from 'styled-components'
import './case.css'

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

    <div className="Case" image={props.image}>
        <div className="Case-img"></div>
        <Title>{props.title}</Title>
        <Description>{props.description}</Description>
    </div>
)

export default Case
