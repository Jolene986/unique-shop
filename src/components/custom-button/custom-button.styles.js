import styled, {css} from 'styled-components'

const baseButtonStyles = css`
background-color: black;
color: #e2e2e2;
border: 1px solid transparent;
&:hover {
  background-color: #e2e2e2;
  color: black;
  border: 1px solid black;
}
`
export const buttonStyles =css`
display: flex;
justify-content: center;
min-width: 165px;
width: auto;
height: 50px;
letter-spacing: 0.5px;
line-height: 50px;
padding: 0 35px 0 35px;
font-size: 15px;
text-transform: uppercase;
font-family: 'Raleway', sans-serif;
font-weight: 600;
outline:none;
cursor: pointer;
transition: all 0.4s ease-out;`

export const invertedButtonStyles = css`
background-color: black;
color: #e2e2e2;
border: 1px solid #e2e2e2;
 &:hover {
  background-color: #e2e2e2;
  color: black;
  border: 1px solid black;
}`
const googleButtonStyles= css`  
background-color: #DB4437;
background-color: #b98b3d;
color: white;
border:none;
font-size: 12px;
 &:hover {
background-color: #f1c271;
color: black;
}`

const getButtonStyles = props=> {
  if(props.isGoogleButton) {
    return googleButtonStyles
  }
  return props.inverted ? invertedButtonStyles : baseButtonStyles
}
export const StyledCustomButton = styled.button`
${buttonStyles}
${getButtonStyles}
`