import './ForgotPassword.scss'
import { HiOutlineMail } from 'react-icons/hi'
import { useState, memo } from 'react'
import { vietnamese, english } from '../../Languages/ForgotPassword'
import axios from 'axios'

function ForgotPassword({ languageSelected }) {
    let languageList = (languageSelected === 'EN' ? english : vietnamese)

    const [emailForgot, setEmailForgot] = useState('');
    const [warning, setWarning] = useState('');

    const handleClickNextForgotPassword = async() => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailForgot)) {
            //document.getElementById('forgot-password-form').submit();

            let email = emailForgot
            
            await axios.post('http://localhost:8081/wetravel/reset/password', null, {
                params: {
                    email
                }
            }).then(res => {
               //da gui dc email
               // co the sang trang thong bao check mail
               setWarning('Hay xac minh email cua ban')
               
            }).catch(err => {
                setWarning('Email khong ton tai')
            })


        }
        else {
            setWarning('Định dạng email không hợp lệ!')
        }
    }

    return (
        <div className='location'>
            <div id='forgot-password-form' className="forgot-container">
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
            </div>
        </div>
    )
}

export default memo(ForgotPassword)