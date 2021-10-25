import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'
import styled from 'styled-components'
import { ButtonContainer } from './styled/Button'
//CLASS BASED COMPONENT
export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className='navbar navbar-expand-sm navbar-dark px-sm-2 px-lg-7'>
        {/*https://www.iconfinder.com/icons/1243689/call_phone_icon Creative
        Commons (Attribution 3.0 Unported);
        https://www.iconfinder.com/Makoto_msk*/}
        <Link to='/' className='mx-5'>
          <img src={logo} alt='navbar-brand' />
        </Link>
        <ul className='navbar-nav align-items-center'>
          <li className='nav-item'></li>
          <Link to='/' className='nav-link'>
            Products
          </Link>
        </ul>
        <Link to='/cart' className='ms-auto'>
          <ButtonContainer>
            <span className='mx-2'>
              <i className='fas fa-cart-plus'></i>
            </span>
            my cart
          </ButtonContainer>
        </Link>
      </NavWrapper>
    )
  }
}
const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize !important;
  }
`
