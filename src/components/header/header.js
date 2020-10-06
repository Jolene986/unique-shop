import React from 'react'
import './header.styles.scss'
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/logo.svg'
import CartIcon from '../../components/cart-icon/cart-icon'
import CartDropdown from '../card-dropdown/card-dropdown'
import {auth} from '../../firebase/firebase.utils'
//REDUX
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';



const Header = ({currentUser,hidden}) => {
 
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/contact'>
        CONTACT
      </Link>
      {
        currentUser? (<div className='option' onClick={()=> auth.signOut()}>SIGN OUT</div>):(<Link className='option' to='/signin'>SIGN IN</Link>)
      }
      <CartIcon/>
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden:selectCartHidden
  })

export default connect(mapStateToProps)(Header)
