import { useState, memo } from 'react'
import { Link } from 'react-router-dom'
import './RegisterPassword.scss'
import { FiLock } from 'react-icons/fi'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { vietnamese, english } from '../../Languages/RegisterPassword'

function RegisterPassword({ languageSelected, handleNextScreen, role }) {
    let languageList = (languageSelected === 'EN' ? english : vietnamese)

    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordRepeat, setShowPasswordRepeat] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [warning, setWarning] = useState('');

    const handleCheckPasswordRegister = () => {
        if (password.length < 6) {
            setWarning(languageList[4])
        }
        else if (password !== passwordRepeat) {
            setWarning(languageList[5])
        }
        else {
            handleNextScreen()
        }
    }

    const handleOnInputPassword = (text) => {
        if (role == 2) {
            localStorage.setItem('passwordPartner', password)
        }
        setPassword(text)
    }

    return (<div className='container form-register-info'>
        <div className='title-register-info'>{languageList[0]}</div>
        <div>
            <FiLock className='icon-inner-lock' />
            <div class="field-register-info">
                <input onChange={(e) => handleOnInputPassword(e.target.value)} type={showPassword ? 'text' : 'password'} required id="password" />
                <label htmlFor="password" title={languageList[1]} data-title={languageList[1]}></label>
            </div>
            {showPassword ? <AiOutlineEyeInvisible className='icon-inner-show-password ' onClick={() => setShowPassword(false)} />
                : <AiOutlineEye onClick={() => setShowPassword(true)} className='icon-inner-show-password ' />}
        </div>
        <div>
            <FiLock className='icon-inner-lock' />
            <div className="field-register-info">
                <input onChange={(e) => setPasswordRepeat(e.target.value)} type={showPasswordRepeat ? 'text' : 'password'} required id="password-repeat" />
                <label htmlFor="password-repeat" title={languageList[2]} data-title={languageList[2]}></label>
            </div>
            {showPasswordRepeat ? <AiOutlineEyeInvisible className='icon-inner-show-password ' onClick={() => setShowPasswordRepeat(false)} />
                : <AiOutlineEye onClick={() => setShowPasswordRepeat(true)} className='icon-inner-show-password ' />}
        </div>
        <div className='warning-register-password'>{warning}</div>
        {role == 1 ?
            <button onClick={handleCheckPasswordRegister} className='text-decoration-none btn-next-register-info'>{languageList[3]} <HiOutlineArrowNarrowRight className='space-left' /></button>
            : <Link to='/register-profile-partner' className='text-decoration-none btn-next-register-info'>{languageList[3]} <HiOutlineArrowNarrowRight className='space-left' /></Link>}
    </div>)
}

export default memo(RegisterPassword)