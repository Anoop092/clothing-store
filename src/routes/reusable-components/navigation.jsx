import React from 'react'
import { Outlet,Link } from 'react-router-dom'
import './navigation.scss'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'

const NavigationBar = () => {
  return (
    <>
        <div className='navigation'>
            <Link className='logo-container' to='/'>
            <CrwnLogo className="logo" />
            </Link>
           
           <div className='nav-links-container'>
               <Link className='nav-link' to={'/shop'}>
                Shop
               </Link>
               <Link className='nav-link' to={'/sign-up'}>
                Sign Up
               </Link>
           </div>
        </div>
        <Outlet />
        
        

    </>
  )
}

export default NavigationBar