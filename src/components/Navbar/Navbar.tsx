import React from 'react'
import NavLogo from './NavLogo/NavLogo'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKeyboard, faCrown, faCircleInfo, faGear, faUser, faBell, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
type Props = {
    
}

const Navbar = (props: Props) => {
    const navigation = useNavigate();
    const handleAboutButtonClick = (page: string) => {
        navigation(`/${page}`);
    }

  return (
    <div className='Nav__outer'>
        <div className='Nav__container'>
            <div className='Nav__left'>
                <div className='Nav__logo'>
                    <NavLogo />
                </div>
                <div className='Nav__button'>
                    <div className='Nav__icon' onClick={() => handleAboutButtonClick('')}>
                        <FontAwesomeIcon icon={faKeyboard} />
                    </div>
                    <div className='Nav__icon'>
                        <FontAwesomeIcon icon={faCrown} />
                    </div>
                    <div className='Nav__icon' onClick={() => handleAboutButtonClick('about')}>
                        <FontAwesomeIcon icon={faCircleInfo} />
                    </div>
                    <div className='Nav__icon' onClick={() => handleAboutButtonClick('settings')}>
                        <FontAwesomeIcon icon={faGear} />
                    </div>
                </div>
            </div>
            <div className='Nav__right'>
                <div className='Nav__right__button'></div>
                <div className='Nav__button'>
                    <div className='Nav__icon' onClick={() => handleAboutButtonClick('account')}>
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                    <div className='Nav__icon'>
                        <FontAwesomeIcon icon={faBell} />
                    </div>
                    <div className='Nav__icon'>
                        <FontAwesomeIcon icon={faRightFromBracket} />
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Navbar