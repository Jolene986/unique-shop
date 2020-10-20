import React from 'react'
import styled from 'styled-components'

import SignIn from '../../components/sign-in/sign-in'
import SignUp from '../../components/sign-up/sign-up'

const PageContainer = styled.div`
width: 100%;
margin:0 auto;
padding-top: 2em;
 display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
background-image:url('https://www.hollidayjewelry.com/images/homepage/banner.jpg');
background-size: cover;
background-repeat: no-repeat;
height: 100vh`

const SignInAndSignUp = () => {
  return (
    <PageContainer>
    <SignIn />
    <SignUp/>
    </PageContainer>
  )
}

export default SignInAndSignUp
