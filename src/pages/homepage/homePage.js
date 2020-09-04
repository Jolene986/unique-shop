import React from 'react'
import './homePage.styles.scss'
import Directory from '../../components/directory/directory'
require('dotenv').config({ path: '/' })

const HomePage = () => {
  
  return (
    <div className='homepage'>
    <Directory/>
    </div>
  )
}

export default HomePage
