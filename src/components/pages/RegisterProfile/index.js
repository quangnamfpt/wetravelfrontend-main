import { memo, useCallback , useState } from 'react'
import City from '../../Data/city.json'
import './RegisterProfile.scss'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';


function RegisterProfile({ role, passwordMain }) {


    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const email = urlParams.get('email');

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthDate, setBirstDate] = useState('');
    const [gender, setGender] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [isPrivate, setIsPrivate] = useState(0);

    



    const handleRegisterClicked = async() => {
        let registerInfor = {
            email : email,
            password: passwordMain, 
            roleId: role,           
            firstName: firstName,
            lastName: lastName,
            gender: gender,
            birthDate: birthDate, 
            address: address,                  
            cityId: city,
            isPrivate: isPrivate,
            phone: phone
        }
        
        console.log(registerInfor);
        //call api from server
        await axios.post('http://localhost:8081/wetravel/register/customer', registerInfor).then((result) => {

            const functionThatReturnPromise = () => new Promise(resolve => setTimeout(resolve, 2000));
            toast.promise(
                functionThatReturnPromise,
                {
                    
                    pending: 'Chờ tí...',
                    success: 'Xong rồi, cút cmm đê...',
                    error: 'Lỗi cmnr, mạng như l...'
                }
            )
            setTimeout(window.location.replace("/"), 4000)
            

        })
        .catch((error) => {

            console.log(error);
        })
    
        //check api if exit
   
 }






    // const handleInputText = useCallback((input, first, second) => {
    //     const label = document.getElementById(input.id + '-label');

    //     if (input.value !== '') {
    //         label.style.bottom = `${first}px`
    //         label.style.color = '#0d6efd'
    //         input.style.borderBottom = 'solid 1px #0d6efd'
    //     }
    //     else {
    //         label.style.bottom = `${second}px`
    //         label.style.color = 'gray'
    //         input.style.borderBottom = 'solid 1px #ccc'
    //     }
    // }, [])

    // const handleInputPhone = useCallback((input) => {
    //     const label = document.getElementById('phone-number-label');

    //     if (input.value !== '') {
    //         label.style.top = '-25px'
    //         label.style.color = '#0d6efd'
    //         input.style.borderBottom = 'solid 1px #0d6efd'
    //     }
    //     else {
    //         label.style.top = '-3px'
    //         label.style.color = 'gray'
    //         input.style.borderBottom = 'solid 1px #ccc'
    //     }
    // }, [])

    // const handleChangeColor = useCallback(((input) => {
    //     console.log(input.value)
    //     const label = document.getElementById(input.id + '-label');
    //     if (label && input.value !== '') { label.style.color = '#0d6efd' }
    //     else if (label && input.value === '') { label.style.color = 'gray' }
    //     if (input.value !== '') { input.style.borderBottom = 'solid 1px #0d6efd' }
    //     else { input.style.borderBottom = 'solid 1px #ccc' }
    // }), [])



    return (<div className='content-register-profile'>
        <h1 className='title-register'>Sign up</h1>
        <form className='container'>
            
            <div className='d-flex group-input'>
                <div>
                    <input name='firstName' type='text' className='input-text' id='first-name' onChange={(e) => setFirstName(e.target.value)} />
                    <label className='label-text' htmlFor='first-name' id='first-name-label'>First name</label>
                </div>
                <div>
                    <input name='lastName' type='text' className='input-text' id='last-name' onChange={(e) => setLastName(e.target.value)} />
                    <label className='label-text' htmlFor='last-name' id='last-name-label'>Last name</label>
                </div>
            </div>
            <div className='d-flex group-input'>
                <div>
                    <label className='label-date' htmlFor='birthdate' id='birthdate-label'>Birthdate</label>
                    <input name='birthdate' className='input-date' type='date' id='birthdate' onChange={(e) => setBirstDate(e.target.value)} />
                </div>
                <div>
                    <select name='gender' className='input-gender' onChange={(e) => setGender(e.target.value)}>
                        <option value=''>Gender</option>
                        <option value='Male'>Male</option>
                        <option value='Female'>Female</option>
                        <option value='Other'>Other</option>
                    </select>
                </div>
            </div>
            <div className='d-flex group-input'>
                <div>
                    <input name='phone' type='text' className='input-text input-phone' id='phone-number' onChange={(e) => setPhone(e.target.value)} />
                    <label className='label-phone' htmlFor='phone-number' id='phone-number-label'>Phone</label>
                </div>
                <div>
                    <select name='city' className='input-city' onChange={(e) => setCity(e.target.value)}>
                        <option value=''>City</option>
                        {City.map((city) => (<option value={city.name}>{city.name}</option>))}
                    </select>
                </div>
            </div>
            <div>
                <label className='label-address' htmlFor='address' id='address-label'>Address</label>
                <input name='address' type='text' className='input-text input-address' id='address' onChange={(e) => setAddress(e.target.value)} />
            </div>
            <label className='button-register' onClick={handleRegisterClicked}>Register</label>
        </form>
    </div>)
}

export default memo(RegisterProfile)