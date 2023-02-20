import React, {useState, useEffect} from 'react';
import logo from '../../assets/images/ic-white-logo.svg';
import { ImSearch } from 'react-icons/im';
import {MdOutlineArrowDropDown} from 'react-icons/md';

function Header() {

    const [stickyClass, setStickyClass] = useState('navbar');

    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);

        return () => {
            window.removeEventListener('scroll', stickNavbar);
        };
    }, []);

    const stickNavbar = () => {
        if (window !== undefined) {
          let windowHeight = window.scrollY;
          windowHeight > 50 ? setStickyClass('navbar-scroll') : setStickyClass('navbar');
        }
      };
    
    return (
        <div className={`${stickyClass}`} >
            <div>
                <img src={logo} className='white-logo' />
                <div className={stickyClass === 'navbar-scroll' ? 'nav-menu-scroll' : 'nav-menu'}>
                    <span>Consult Doctor</span>
                    <span>Choose a Doctor</span>
                    <span>More <MdOutlineArrowDropDown /></span>
                    <span><ImSearch  /></span>
                </div>
            </div>
            <div>
                <span>
                    Login / Signup
                </span>
                {stickyClass === 'navbar-scroll' && <button className='free-consult'>Free Consultation</button>}
            </div>
        </div>
    )
}

export default Header