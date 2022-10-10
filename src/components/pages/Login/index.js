import React, { memo, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Login.scss'
import { HiOutlineMail } from 'react-icons/hi'
import { FiLock } from 'react-icons/fi'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import Checkbox from '@mui/material/Checkbox';
import { vietnamese, english } from '../../Languages/Login'
import { info } from 'sass'
import axios from 'axios'



function Login({ languageSelected, handleForgotPassword }) {

    let languageList = (languageSelected === 'EN' ? english : vietnamese)

    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState('');
    const [warning, setWarning] = useState('');
    const [rememberMe, setRememberMe] = useState(false);




    const handleClickLogin = async () => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) && password !== '') {
            //console.log(password);
            if (rememberMe) {
                document.cookie = `email="${email}"`;
                document.cookie = `password="${password}"`;
            }


            //create data to request server
            let account = {
                email: email,
                password: password
            }

            //call api from server
            await axios.post('http://localhost:8081/wetravel/login', account)

                .then((result) => {
                    sessionStorage.setItem('email', email);
                    window.location.reload(false);
                })
                .catch((error) => {
                    console.log(account)
                    setWarning(languageList[5])
                    console.log(error);
                })
        }
        else if (email === '' || password === '') {
            setWarning(languageList[10])
        }
    }

    return (
        <div className='location'>
            <h2 className='title-login'>{languageList[0]}</h2>
            <div className='warning-input'></div>
            <div id='login-form' action='http://localhost:8081/wetravel/login' method='POST'>
                <div>
                    <HiOutlineMail className='icon-inner' />
                    <div className='input-tag'>
                        <div className="field-login">
                            <input name='email' value={email} onChange={(e) => setEmail(e.target.value)} type="text" required id="text" />
                            <label htmlFor="text" title={languageList[1]} data-title={languageList[1]}></label>
                        </div>
                    </div>
                </div>

                <div>
                    <FiLock className='icon-inner' />
                    {showPassword ? <AiOutlineEyeInvisible className='icon-inner icon-show-password' onClick={() => setShowPassword(false)} />
                        : <AiOutlineEye className='icon-inner icon-show-password' onClick={() => setShowPassword(true)} />}
                    <div className='input-tag'>
                        <div className="field-login">
                            <input name='password' value={password} onChange={(e) => setPassword(e.target.value)} type={showPassword ? 'text' : 'password'} required id="password" />
                            <label htmlFor="password" title={languageList[2]} data-title={languageList[2]}></label>
                        </div>
                    </div>
                </div>

                <div className='warning-login'>{warning}</div>

                <div className='remember-forgot'>
                    <div className='checkbox-remember'>
                        <Checkbox
                            onChange={() => setRememberMe(!rememberMe)}
                            id='remember'
                            sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }} />
                        <label>{languageList[3]}</label>
                    </div>

                    <div onClick={handleForgotPassword} className='forgot-link'>{languageList[4]}</div>
                </div>



                <div className='login-register'>
                    <label onClick={handleClickLogin} className='btn-login'>{languageList[7]}</label>
                    <div className='ask-to-register'>
                        <div className='question-no-account'>{languageList[8]}</div>
                        <Link to='/register?role=1' className='register-link'>{languageList[9]}</Link>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default memo(Login)