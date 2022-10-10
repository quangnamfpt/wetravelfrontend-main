import React, { memo, useState, useEffect } from 'react'
import './Register.scss'
import Login from '../../pages/Login'
import ForgotPassword from '../../pages/ForgotPassword';
import Camping from '../../images/camping.png'
import Hiring from '../../images/hiring3.png'
import { HiOutlineMail, HiOutlineArrowNarrowRight } from 'react-icons/hi'
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom'
import { vietnamese, english } from '../../Languages/Register';


function Register({ languageSelected, role }) {
    let languageList = (languageSelected === 'EN' ? english : vietnamese)

    const [emailRegister, setEmailRegister] = useState('');
    const [showLogin, setShowLogin] = useState(false);
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [warning, setWarning] = useState('');
    const [agree, setAgree] = useState(false);

    const handleClickNext = () => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailRegister) && agree) {
            window.location.replace(`/checkmail?email=${emailRegister}&role=${role}`);
        }
        else if (!agree) {
            setWarning(languageList[7])
        }
        else {
            setWarning(languageList[5])
        }
    }

    return (
        <div className='signup-container'>
            <div className='input-group container'>
                <form className='cn'>
                    <input type='hidden' name='role' value={role} />
                    <div className='content-input container'>
                        <div className='text-box-email container'>
                            <HiOutlineMail className='email-icon' />
                            <div className="field input-mail">
                                <input name='email' value={emailRegister} className='input-mail' onChange={(e) => setEmailRegister(e.target.value)} type="text" required id="text" />
                                <label htmlFor="text" title="Email" data-title="Email"></label>
                            </div>
                        </div>
                        <div className='warning-register'>{warning}</div>
                        <div className='checkbox-remember'>
                            <Checkbox
                                onChange={() => setAgree(!agree)}
                                id='remember'
                                sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }} />
                            <label className='text-term'>{languageList[0]} <Link to='/' className='text-dark'>{languageList[1]}</Link></label>
                        </div>
                        <div className='group-submit'>
                            <label onClick={handleClickNext} className='btn-next-register text-decoration-none'>{languageList[2]} <HiOutlineArrowNarrowRight className='space-left' /></label>
                            <div className='ask-to-login'>
                                <div className='d-block text-center'>{languageList[3]}</div>
                                <div className='d-block text-decoration-none text text-center text-blue' onClick={() => setShowLogin(true)}>{languageList[4]}</div>
                            </div>
                        </div>
                    </div>
                </form>
                <img className='image-register' src={role == 1 ? Camping : Hiring} />
            </div>

            {(showLogin || showForgotPassword) && <div className='popup'>
                <div className='bg-popup' onClick={() => {
                    setShowForgotPassword(false)
                    setShowLogin(false)
                }} />
                {showForgotPassword ? <ForgotPassword languageSelected={languageSelected} /> :
                    <Login languageSelected={languageSelected} handleForgotPassword={setShowForgotPassword} />}
            </div>}
        </div>
    )
}


export default memo(Register)
