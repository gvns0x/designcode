const fontFamily = 'Playfair Display, serif';
const fontSize = '16px';
const dark = '#181A27';
const lineHeight = "32px";
const fontWeight = "bold";
const italic = "italic";
const blue = "#162BF4";

const titleFont = 'Open Sans Condensed, sans-serif';
const h1Size = '30px';
const h2Size = '18px';

export const styles = {
    colors: {
        dark: dark,
        blue: blue
    },
    textStyles: {
        textNormal: {
            fontFamily: fontFamily,
            fontSize: fontSize,
            color: dark,
            lineHeight: lineHeight
        },
        textBold: {
            fontFamily: fontFamily,
            fontSize: fontSize,
            color: dark,
            lineHeight: lineHeight,
            fontWeight: fontWeight   
        },
        textLink: {
            fontFamily: fontFamily,
            fontSize: fontSize,
            color: blue,
            lineHeight: lineHeight,
            fontWeight: fontWeight,
            fontStyle: italic 
        }
    },
    titleStyles: {
        titleH1: {
            fontFamily: titleFont,
            fontSize: h1Size,
            color: dark,
            fontWeight: fontWeight,
            margin: 0
        },
        titleH2: {
            fontFamily: titleFont,
            fontSize: h2Size,
            color: dark
        }
    }
};
