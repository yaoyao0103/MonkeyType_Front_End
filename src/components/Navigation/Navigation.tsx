import React from 'react'
import NavLogo from './NavLogo/NavLogo'
import './Navigation.css'

type Props = {
    
}

const Navigation = (props: Props) => {
  return (
    <div className='Nav__outer'>
        <div className='Nav__container'>
            <div className='Nav__left'>
                <div className='Nav__logo'>
                    <NavLogo />
                </div>
                <div className='Nav__left__button'>
                    <i className="fa fa-keyboard-o" aria-hidden="true"></i>
                </div>
            </div>
            <div className='Nav__right'>
                <div className='Nav__right__button'></div>
            </div>

        </div>
    </div>
  )
}

export default Navigation