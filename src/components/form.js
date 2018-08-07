import React from 'react'
import styled from 'styled-components'
import '../styles.js'
import { styles } from '../styles.js';

const iconSize = "32px"

const FormContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    @media only screen and (min-width:800px) {
        margin-bottom:130px;
    }
`

const FormDiv = styled.div`
    margin-left: 24px;
    margin-right: 24px;
    margin-top: 0px;
    margin-bottom: 48px;
    display:grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
    max-width:906px;

    @media only screen and (min-width:550px) {
        margin-left: 88px;
        margin-right: 88px;
    }

    @media only screen and (min-width:800px) {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        grid-column-gap: 8%;
    }
`

const FormContent = styled.div`
    display:flex;
    flex-direction:column;
    margin-bottom:24px;
    align-self:start;

    @media only screen and (min-width:800px) {
        margin-bottom:0px;
        grid-row: 1/2;
    }
`

const FormFields = styled.div`
    margin-bottom:48px;

    @media only screen and (min-width:800px) {
        margin-bottom:0px;
        grid-row: 1/3;
    }
`

const FormSocial = styled.div`
`

const FormSocialIcons = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    justify-items:center;
    margin-top:48px;

    @media only screen and (min-width:800px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
        margin-top:32px;
        grid-row: 2/3;
        justify-items:start;
        max-width: 200px;
    }
`

const FormSocialIconsBehance = styled.div`
    grid-column: 2/3;
    @media only screen and (min-width:800px) {
        grid-column:1/2;
    }
`

const FormSocialIconsDribbble = styled.div`
    grid-column: 3/4;
    @media only screen and (min-width:800px) {
        grid-column:2/3;
    }
`

const FormSocialIconsMedium = styled.div`
    grid-column: 4/5;
    @media only screen and (min-width:800px) {
        grid-column:3/4;
    }
`

const FormSocialIconsFacebook = styled.div`
    grid-column: 5/6;
    @media only screen and (min-width:800px) {
        grid-column:4/5;
    }
`

const Form = (props) => (
    <FormContainer>
        <FormDiv>
            <FormContent>
                <h1 style={styles.titleStyles.titleH1}>Let's work together</h1>
                <p style={styles.textStyles.textNormal}>I’d love to hear more about your project and how I can help. Tell me more about it — I’ll be in touch as soon as possible.</p>
            </FormContent>
            <FormFields>
                <form className="Form" action="https://formspree.io/your@email.com"
                method="POST">
                    <Form-block>
                        <h3 className="Form-label" style={styles.titleStyles.titleLabel}>Your name</h3>
                        <input className="Form-name Form-field" type="text" name="name" placeholder="Your name"/>
                    </Form-block>
                    <Form-block>
                    <h3 className="Form-label" style={styles.titleStyles.titleLabel}>Your e-mail</h3>
                    <input className="Form-email Form-field" type="email" name="_replyto" 
                    placeholder="Your e-mail"
                    />
                    </Form-block>
                    <Form-block>
                    <h3 className="Form-label" style={styles.titleStyles.titleLabel}>How can I help?</h3>
                    <textarea name="message" className="Form-message Form-field" placeholder="Your message" id="msg-field"/>
                    </Form-block>
                    <input className="Form-button" disabled type="submit" value="Send message" />
                </form>
            </FormFields>
            <FormSocial>
                <p style={styles.textStyles.textNormal}>You can also <a href="#" style={styles.textStyles.textLink}>send me an e-mail to hi@juauz.com</a> or find me on the web.</p>
                <FormSocialIcons>
                    <FormSocialIconsBehance>
                    <a href="#" alt="behance link" className="Form-social">
                        <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} viewBox="0 0 24 24"><path d="M18.003 12.333h-3.018c.289-1.977 2.902-1.715 3.018 0zm-9.742.667h-2.261v2.01h2.228c2.036 0 1.911-2.01.033-2.01zm-.08-4h-2.181v2h2.389c1.673 0 1.938-2-.208-2zm15.819-9v24h-24v-24h24zm-10 8h5v-1h-5v1zm-3.552 3.618c1.907-.974 1.837-4.55-1.813-4.604h-4.635v9.978h4.311c4.522 0 4.445-4.534 2.137-5.374zm9.487.602c-.274-1.763-1.529-2.95-3.583-2.95-2.095 0-3.352 1.34-3.352 3.947 0 2.631 1.368 3.783 3.417 3.783 2.048 0 3.106-1.135 3.4-2h-2.112c-.737.855-2.893.521-2.767-1.353h5.059c.01-.634-.011-1.089-.062-1.427z"/></svg>
                        </a>
                    </FormSocialIconsBehance>
                    <FormSocialIconsDribbble>
                        <a href="#" alt="dribble link" className="Form-social">
                        <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} viewBox="0 0 24 24"><path d="M11.376 9.698c-1.621.477-3.554.722-5.79.737.462-1.891 1.735-3.462 3.432-4.325.888 1.162 1.674 2.359 2.358 3.588zm1.104 2.204c-.143-.32-.291-.638-.447-.955-1.854.583-4.068.878-6.633.882l-.009.171c0 1.604.576 3.077 1.531 4.223 1.448-2.173 3.305-3.616 5.558-4.321zm3.549-5.129c-1.117-.862-2.512-1.382-4.029-1.382-.56 0-1.102.078-1.621.21.874 1.174 1.648 2.384 2.326 3.625 1.412-.598 2.52-1.417 3.324-2.453zm7.971-6.773v24h-24v-24h24zm-4 12c0-4.418-3.582-8-8-8s-8 3.582-8 8 3.582 8 8 8 8-3.582 8-8zm-12.056 5.207c1.792 1.399 4.195 1.816 6.427.955-.289-1.7-.744-3.36-1.362-4.973-2.077.619-3.753 1.959-5.065 4.018zm5.4-6.749c.18.371.348.745.511 1.12 1.439-.248 3.018-.233 4.735.049-.083-1.478-.648-2.827-1.547-3.89-.922 1.149-2.16 2.055-3.699 2.721zm1.044 2.437c.56 1.496.988 3.03 1.28 4.598 1.5-1.005 2.561-2.61 2.853-4.467-1.506-.261-2.882-.307-4.133-.131z"/></svg>
                        </a>
                    </FormSocialIconsDribbble>
                    <FormSocialIconsMedium>
                    <a href="#" alt="medium link" className="Form-social">
                    <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} viewBox="0 0 24 24" fill-rule="evenodd" clip-rule="evenodd"><path d="M24 24h-24v-24h24v24zm-4.03-5.649v-.269l-1.247-1.224c-.11-.084-.165-.222-.142-.359v-8.998c-.023-.137.032-.275.142-.359l1.277-1.224v-.269h-4.422l-3.152 7.863-3.586-7.863h-4.638v.269l1.494 1.799c.146.133.221.327.201.523v7.072c.044.255-.037.516-.216.702l-1.681 2.038v.269h4.766v-.269l-1.681-2.038c-.181-.186-.266-.445-.232-.702v-6.116l4.183 9.125h.486l3.593-9.125v7.273c0 .194 0 .232-.127.359l-1.292 1.254v.269h6.274z"/></svg>
                        </a>
                    </FormSocialIconsMedium>
                    <FormSocialIconsFacebook>
                    <a href="#" alt="facebook link" className="Form-social">
                        <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} viewBox="0 0 24 24"><path d="M0 0v24h24v-24h-24zm16 7h-1.923c-.616 0-1.077.252-1.077.889v1.111h3l-.239 3h-2.761v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z"/></svg>
                    </a>
                    </FormSocialIconsFacebook>
                </FormSocialIcons>
            </FormSocial>
        </FormDiv>
    </FormContainer>
)

export default Form
