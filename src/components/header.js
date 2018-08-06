import React from 'react'
import Link from 'gatsby-link'
import { styles } from '../styles.js'
import styled from 'styled-components'

const HeaderDiv = styled.div`
  height: 100vh;
  position: relative;
  overflow-x: hidden;
  display: grid;
  grid-template-columns: auto minmax(auto, 906px) auto;
  grid-template-rows: auto 1fr auto;
  @media only screen and (min-height:568px) {
    grid-template-rows: 2fr 4fr 1fr;
  }
  @media only screen and (min-width: 500px) {
    grid-template-rows: 10fr 1fr 1fr;
  }
`

const Content = styled.div`
  margin-left: 24px;
  margin-right: 24px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  position: relative;
  grid-row: 2 / 3;
  grid-column: 2/3;
  @media only screen and (min-width: 550px) {
    margin-left:88px;
    margin-right: 88px;
  }

  @media only screen and (min-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`
const AllText = styled.div`
  margin-top:0px;
  @media only screen and (min-width: 800px) {
    display: flex;
    flex-direction: row;
    align-items: baseline;
  }
`

const Indicator = styled.div`
  width:100%;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content:center;
`

const IndicatorLine = styled.div`
  background-color: ${styles.colors.blue};
  height: 24px;
  width:2px;
`

const Text = styled.div`
  margin-top: ${props => props.top};
  margin-bottom: ${props => props.bot};
  @media only screen and (min-width: 800px) {
    max-width: 347px;
    margin-right: ${props => props.right};
    margin-top:0px;
  }
`

const Header = ({ siteTitle }, props) => (
<HeaderDiv>
    <Content>
      <h1 style={styles.titleStyles.titleH1}>João Araújo</h1>
      <AllText>
      <Text top={"16px"}bot={"24px"} right={"54px"}>
        <p style={styles.textStyles.textNormal}><span style={styles.textStyles.textBold}>I am a Digital Product Designer</span> from Portugal, currently living in Porto. In the last 2 years had the opportunity to work as a designer for both startups and big companies.</p>
      </Text>
      <Text>
        <p style={styles.textStyles.textNormal}>If you want to know more about my work or discuss how I can bring value to your project, feel free to <a href="#">contact me through my e-mail hi@juauz.com</a></p>
      </Text>
      </AllText>
    </Content>
    <Indicator>
      <IndicatorLine/>
    </Indicator>
</HeaderDiv>
)

export default Header
