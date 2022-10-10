import { useState, memo, useCallback, useRef } from 'react'
import Login from '../../pages/Login'
import ForgotPassword from '../../pages/ForgotPassword';
import { Link } from 'react-router-dom'
import { FaRegHandshake, FaRegBell } from "react-icons/fa";
import { BiTrip, BiHistory } from 'react-icons/bi'
import VietNamFlag from '../../images/vietnam.png'
import AutraliaFlag from '../../images/australia.png'
import { AiOutlineCaretDown, AiOutlineLogout, AiOutlineUser } from "react-icons/ai";
import { MdOutlineForum } from "react-icons/md";
import 'react-dropdown/style.css';
import './Header.css';
import { vietnamese, english } from '../../Languages/Header'

function Header({ languageSelected, setLanguageSelected }) {
    const [showLogin, setShowLogin] = useState(false);
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [language, setLanguage] = useState(languageSelected);

    const [email, setEmail] = useState(sessionStorage.getItem('email'))

    let languageList = (languageSelected === 'EN' ? english : vietnamese)

    const handleForgotPassword = useCallback(() => {
        setShowForgotPassword(true);
    }, [])

    const handleSelectLanguage = () => {
        const text = document.getElementById('select-language-option').textContent;
        document.cookie = `languageSelected=${text}`;
        setLanguageSelected(text)
        setLanguage(text);
        const detail = document.getElementById('select-language');
        detail.removeAttribute("open");
    };

    const handleCLickLogout = () => {
        sessionStorage.removeItem("email");
        setEmail(null)
    }

    return (<div className='container'><header className='header-main'>
        <label className='inner'>
            <img src='https://lambanner.com/wp-content/uploads/2020/04/MNT-DESIGN-10-MEO-THIET-KE-LOGO-1130x570.jpg' className='logo' />
            <div className='text-logo'>WeTravel</div>
        </label>
        <nav className='nav-link'>
            <Link to='/' className='link' ><BiTrip className='icon-image' /><label>Tour</label></Link>
            <Link to='/' className='link' ><MdOutlineForum className='icon-image' /><label>{languageList[0]}</label></Link>
            <Link to='/register-partner' className='link'><FaRegHandshake className='icon-image' /> {languageList[1]}</Link>
            <Link to='/' className='link' ><FaRegBell className='icon-image' /> {languageList[2]}</Link>
            <details id='select-language'>
                <summary className='select-language'><img src={language === 'EN' ? AutraliaFlag : VietNamFlag} className='icon-image' />{language} <AiOutlineCaretDown className='icon-image' /></summary>
                <label className='label-select-language' onClick={handleSelectLanguage}>
                    <img src={language === 'EN' ? VietNamFlag : AutraliaFlag} className='icon-image' />
                    <label id='select-language-option'>{language !== 'EN' ? 'EN' : 'VI'}</label>
                </label>
            </details>
            {email === null ? <>
                <Link to='#' className='link login' onClick={() => setShowLogin(true)}>{languageList[3]}</Link>
                <Link to='/register' className='link register' >{languageList[4]}</Link>
            </> :
                <details className='link'>  
                    <summary className='d-flex'>{email} <AiOutlineCaretDown /></summary>
                    <div className='dropdown-profile-item'>
                        <div>My Account</div>
                        <Link to='/' className='item-dropdown-profile'><AiOutlineUser className='icon-image icon-dropdown-profile' /> Edit Profile</Link>
                        <Link to='/' className='item-dropdown-profile'><BiHistory className='icon-image icon-dropdown-profile' /> History Booking</Link>
                        <Link onClick={handleCLickLogout} to='/' className='item-dropdown-profile'><AiOutlineLogout className='icon-image icon-dropdown-profile' /> Logout</Link>
                    </div>
                </details>
            }

        </nav>
    </header>
        {(showLogin || showForgotPassword) && <div className='popup'>
            <div className='bg-popup' onClick={() => {
                setShowForgotPassword(false)
                setShowLogin(false)
            }} />
            {showForgotPassword ? <ForgotPassword languageSelected={languageSelected} /> :
                <Login languageSelected={languageSelected} handleForgotPassword={handleForgotPassword} />}
        </div>}
    </div>)
}

export default memo(Header)