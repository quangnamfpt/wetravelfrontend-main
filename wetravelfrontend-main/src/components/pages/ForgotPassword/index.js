import './ForgotPassword.scss'
import { HiOutlineMail } from 'react-icons/hi'
import { useState, memo } from 'react'
import { vietnamese, english } from '../../Languages/ForgotPassword'

function ForgotPassword({ languageSelected }) {
    let languageList = (languageSelected === 'EN' ? english : vietnamese)

    const [emailForgot, setEmailForgot] = useState('');
    const [warning, setWarning] = useState('');

    const handleClickNextForgotPassword = () => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailForgot)) {
            document.getElementById('forgot-password-form').submit();
        }
        else {
            setWarning('Định dạng email không hợp lệ!')
        }
    }

    return (
        <div className='location'>
            <form id='forgot-password-form' className="forgot-container">
                <h2 className="title-forgot text-forgot">{languageList[0]}</h2>
                <div className='message-forgot text-forgot'>{languageList[1]}</div>
                <div>
                    <HiOutlineMail className='icon-email' />
                    <div className='input-tag'>
                        <div className="field-forgot-password">
                            <input value={emailForgot} onChange={(e) => setEmailForgot(e.target.value)} type="text" required autocomplete="off" id="text" />
                            <label for="text" title="Email" data-title="Email"></label>
                        </div>
                    </div>
                </div>
                <div className='warning-forgot-password'>{warning}</div>
                <label onClick={handleClickNextForgotPassword} className='btn-submit'>{languageList[4]}</label>
            </form>
        </div>
    )
}

export default memo(ForgotPassword)