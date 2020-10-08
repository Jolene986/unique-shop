import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/logo.svg'


export const HeaderContainer = styled.div`
 height: 70px;
width: 100%;
display: flex;
justify-content: space-between;
margin-bottom: 15px;
position: relative;`

export const LogoContainer = styled(Link)` 
height: 100%;
width: 90px;
padding: 25px;`
export const StyledLogo = styled(Logo)`
 position: absolute;
top:-50%;
left:0%;`

export const OptionsContainer = styled.div`
width: 50%;
height: 100%;
display: flex;
align-items: center;
justify-content: flex-end;`

export const OptionLink = styled(Link)`
padding: 10px 15px;
cursor: pointer;`
