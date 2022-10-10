import { useState, memo } from 'react'
import { HiOutlineMail } from 'react-icons/hi'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { FiLock } from 'react-icons/fi'
import './ChangePassword.scss'
import axios from 'axios'

function ChangePassword() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let email = urlParams.get('email')



    if(sessionStorage.getItem('email') != null){
        console.log(sessionStorage.getItem('email'))
        email = sessionStorage.getItem('email')
    }


    const [password, setPassword] = useState('')
    const [passwordRepeat, setPasswordRepeat] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [showPasswordRepeat, setShowPasswordRepeat] = useState(false)
    const [warning, setWarning] = useState('')

    const handleClickResetPassword = async() => {
        if (password.length < 6) {
            setWarning('Mật khẩu cần có độ dài lớn hơn 5 ký tự')
        }
        else if (password != passwordRepeat) {
            setWarning('Mật khẩu và mật khẩu nhập lại không khớp!')
        }
        else {
            //Sẽ thay đổi
            let changePasswordInfor = {
                email : email,
                password: password, 
            }
            
            //call api from server
            await axios.post('http://localhost:8081/wetravel/change/password', changePasswordInfor).then((result) => {
    
                window.location.replace('/');
                
    
            })
            .catch((error) => {
    
                console.log(error);
            })


            
        }
    }

    const handleChangeInput = (input) => {
        {input.id.includes('repeat') ? setPasswordRepeat(input.value) : setPassword(input.value) }
        const label = document.getElementById(`${input.id}-label`);
        if (input.value !== '') {
            label.style.bottom = '-8px'
            label.style.color = '#4874E8'
            input.style.borderBottom = 'solid 1px #4874E8'
        }
        else {
            label.style.bottom = '-30px'
            label.style.color = 'gray'
            input.style.borderBottom = 'solid 1px #ccc'
        }
    }

    return (<form className='container change-password-container'>
        <h1 className='title-change-password'>Enter new password to access your account</h1>
        <div className='component-change-password'>
            <HiOutlineMail className='icon-mail-change-password' />
            <label className='email-change-password'>{email}</label>
            <input type='hidden' name='email' value={email} />
        </div>
        <div className='component-change-password'>
            <FiLock className='icon-lock-change-password' />
            <label htmlFor='newpassword' className='label-change-password' id='newpassword-label'>New password</label>
            <input value={password}
                onChange={(e) => handleChangeInput(e.target)}
                type={showPassword ? 'text' : 'password'}
                id='newpassword'
                name='newpassword'
                className='input-change-password' />
            {showPassword ? <AiOutlineEyeInvisible className='icon-show-change-password' onClick={() => setShowPassword(false)} /> : <AiOutlineEye className='icon-show-change-password' onClick={() => setShowPassword(true)} />}
        </div>
        <div className='component-change-password'>
            <FiLock className='icon-lock-change-password' />
            <label htmlFor='repeat-newpassword' className='label-change-password' id='repeat-newpassword-label'>Repeat your password</label>
            <input
                type={showPasswordRepeat ? 'text' : 'password'}
                value={passwordRepeat}
                onChange={(e) => handleChangeInput(e.target)}
                id='repeat-newpassword'
                className='input-change-password' />
            {showPasswordRepeat ? <AiOutlineEyeInvisible className='icon-show-change-password' onClick={() => setShowPasswordRepeat(false)} /> : <AiOutlineEye className='icon-show-change-password' onClick={() => setShowPasswordRepeat(true)} />}
        </div>
        <label className='warning-change-password'>{warning}</label>
        <label onClick={handleClickResetPassword} className='btn-reset-password'>Reset password</label>
    </form>)
}

export default memo(ChangePassword)