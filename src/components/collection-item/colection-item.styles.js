import styled from 'styled-components';
import {Link} from 'react-router-dom'
import CustomButton from '../custom-button/custom-button';
import {buttonStyles,invertedButtonStyles} from '../custom-button/custom-button.styles'
import {ReactComponent as QuickView} from '../../assets/zoom.svg'


export const StyledCollectionItem = styled.div`
width: 22vw;
display: flex;
flex-direction: column;
height: 350px;
align-items: center;
position: relative;

&:hover {
  .image {
    box-shadow: 9px -3px 16px rgba(0,0,0,0.17);
  }
  button,a {
    opacity: 0.85;
    display: flex;
  }
  svg{
    opacity: 1;
    display: block;
  }
}`

export const StyledAddToCartButton = styled(CustomButton)`
width: 80%;
opacity: 0.6;
position: absolute;
top:225px;
display: none;
transition: all 0.6s ease-out;
font-size: 13px;`

StyledAddToCartButton.displayName = 'AddToCartButton.displayName';

export const StyledQuickView = styled(QuickView)` 
 position: absolute;
top:125px;
display: none;
opacity: 0;
transition: all 0.6s ease-out;
transform-origin: 50% 50%;
fill:rgba(0,0,0,0.75);
cursor: pointer;
&:hover {
  transform: scale(1.2);
}`

StyledQuickView.dispalyName='QuickView'

export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  box-shadow: 4px 1px 16px rgba(0,0,0,0.14);
   transition: all 0.6s ease-out;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

BackgroundImage.displayName = 'BackgroundImage';

export const StyledCollectionFooter = styled.div`
width: 99%;
height: 5%;
display: flex;
justify-content: space-between;
font-size: 18px;`

 StyledCollectionFooter.displayName = 'CollectionFooter'

 export const StyledPrice = styled.div` 
 width: 20%;`
 StyledPrice.displayName = 'Price'
 export const StyledName = styled.div`
 width: 80%;
 margin-bottom: 15px;`
StyledName.displayName='Name'


export const StyledLink = styled(Link)`
${buttonStyles}
${invertedButtonStyles}
width: 80%;
opacity: 0.6;
position: absolute;
top:225px;
display: none;
transition: all 0.6s ease-out;
font-size: 13px;`