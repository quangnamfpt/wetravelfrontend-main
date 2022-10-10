import { memo } from 'react'
import './Footer.css'
import { RiFacebookCircleLine } from 'react-icons/ri'
import { vietnamese, english } from '../../Languages/Footer'

function Footer({ languageSelected }) {
    let languageList = (languageSelected === 'EN' ? english : vietnamese)

    return (<div className='footer'>
        <div className='container content-footer'>
            <div className='item-footer'>
                <h1>WeTravel</h1>
            </div>
            <div className='item-footer'>
                <h4>{languageList[0]}</h4>
                <h4 className='m-bottom-100'>{languageList[1]}</h4>
                <h4>{languageList[2]}</h4>
                <div className='d-flex'>
                    <RiFacebookCircleLine className='contact-logo' />
                    <a href='https://www.facebook.com/WeTravel-106482858895630/' className='contact-link'>Facebook</a>
                </div>
            </div>
            <div className='item-footer'>
            </div>
        </div>
        <div className='copyright'>{languageList[3]}</div>
    </div>)
}

export default memo(Footer)