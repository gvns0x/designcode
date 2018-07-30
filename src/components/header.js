import React from 'react'
import Link from 'gatsby-link'
import { styles } from '../styles.js'

const Header = ({ siteTitle }) => (
  <div>
    <h1 style={styles.titleStyles.titleH1}>João Araújo</h1>
    <p style={styles.textStyles.textNormal}><span style={styles.textStyles.textBold}>I'm a Digital Product Designer</span> from Portugal, currently living in Porto. In the last 2 years had the opportunity to work as a designer for both startups and big companies.</p>
    <p style={styles.textStyles.textNormal}>If you want to know more about my work or discuss how I can bring value to your project, feel free to <a href="#" style={styles.textStyles.textLink}>contact me through my e-mail hi@juauz.com</a></p>
  </div>
)

export default Header
