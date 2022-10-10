import { memo } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import City from '../../Data/city.json'
import './RegisterProfilePartner.scss'

function RegisterProfilePartner() {
    const passwordPartner = localStorage.getItem('passwordPartner')

    const functionThatReturnPromise = () => new Promise(resolve => setTimeout(resolve, 2000));
    const notify = () => toast.promise(
        functionThatReturnPromise,
        {
            pending: 'Chờ tí...',
            success: 'Xong rồi, cút cmm đê...',
            error: 'Lỗi cmnr, mạng như l...'
        }
    )

    const handleBlur = (input) => {
        if (input.value != '') {
            input.style.border = 'solid 1px #4874E8'
        }
        else {
            input.style.border = 'solid 1px #D9D9D9'
        }
    }

    const handleFocus = (input) => {
        input.style.border = 'solid 1px #4874E8'
    }

    return (<><form className="form-input-all-profile-partner">
        <div className="container">
            <input type='hidden' value={passwordPartner} name="passwordPartner" />
            <div className="container input-profile-company-form">
                <label className="ml-20 title-form-input">Company</label>
                <div className="d-flex line-input">
                    <div className="mlr-50 ">
                        <label htmlFor="companyName" className="d-block">Name<span className="requird-star">*</span></label>
                        <input onFocus={(e) => handleFocus(e.target)} 
                        onBlur={(e) => handleBlur(e.target)} 
                        id='companyName' name='companyName' className="input-inline" type='text' />
                    </div>
                    <div className="mlr-50">
                        <label htmlFor="companyAbbreviation" className="d-block">Abbreviation</label>
                        <input onFocus={(e) => handleFocus(e.target)}
                            onBlur={(e) => handleBlur(e.target)}
                            id='companyAbbreviation'
                            name='companyAbbreviation' className="input-inline" type='text' />
                    </div>
                </div>
                <div className="d-flex line-input">
                    <div className="mlr-50 ">
                        <label htmlFor="companyEmail" className="d-block">Email<span className="requird-star">*</span></label>
                        <input onFocus={(e) => handleFocus(e.target)}
                            onBlur={(e) => handleBlur(e.target)}
                            id='companyEmail'
                            name='companyEmail' className="input-inline" type='text' />
                    </div>
                    <div className="mlr-50">
                        <label htmlFor="companyPhone" className="d-block">Phone<span className="requird-star">*</span></label>
                        <input onFocus={(e) => handleFocus(e.target)}
                            onBlur={(e) => handleBlur(e.target)}
                            id='companyPhone'
                            name='companyPhone' className="input-inline" type='text' />
                    </div>
                </div>
                <div className="d-flex line-input">
                    <div className="mlr-50 ">
                        <label htmlFor="companyCity" className="d-block">City<span className="requird-star">*</span></label>
                        <select
                            onFocus={(e) => handleFocus(e.target)}
                            onBlur={(e) => handleBlur(e.target)}
                            id='companyCity'
                            name='companyCity' className="input-inline">
                            {City.map((item) => <option value={item.name}>{item.name}</option>)}
                        </select>
                    </div>
                    <div className="mlr-50">
                        <label htmlFor="companyAddress" className="d-block">Address<span className="requird-star">*</span></label>
                        <input onFocus={(e) => handleFocus(e.target)}
                            onBlur={(e) => handleBlur(e.target)}
                            id='companyAddress'
                            name='companyAddress' className="input-inline" type='text' />
                    </div>
                </div>
                <div className="d-flex line-input">
                    <div className="mlr-50 input-alone">
                        <label htmlFor="companyWebsite" className="d-block">Website</label>
                        <input onFocus={(e) => handleFocus(e.target)}
                            onBlur={(e) => handleBlur(e.target)}
                            id='companyWebsite'
                            name='companyWebsite' className="input-inline" type='text' />
                    </div>
                </div>
                <div className="d-flex line-input">
                    <div className="mlr-50 ">
                        <label htmlFor="companyFax" className="d-block">Fax</label>
                        <input onFocus={(e) => handleFocus(e.target)}
                            onBlur={(e) => handleBlur(e.target)}
                            id='companyFax'
                            name='companyFax' className="input-inline" type='text' />
                    </div>
                    <div className="mlr-50">
                        <label htmlFor="companyTaxCode" className="d-block">Tax code<span className="requird-star">*</span></label>
                        <input onFocus={(e) => handleFocus(e.target)}
                            onBlur={(e) => handleBlur(e.target)}
                            id='companyTaxCode'
                            name='companyTaxCode' className="input-inline" type='text' />
                    </div>
                </div>
                <div className="d-flex line-input">
                    <div className="mlr-50 input-alone">
                        <label htmlFor="companyBusinessRegistration" className="d-block">Business Registration<span className="requird-star">*</span></label>
                        <input onFocus={(e) => handleFocus(e.target)}
                            onBlur={(e) => handleBlur(e.target)}
                            id='companyBusinessRegistration'
                            name='companyBusinessRegistration' className="input-inline" type='text' />
                    </div>
                </div>
                <div className="d-flex line-input">
                    <div className="mlr-50 ">
                        <label htmlFor="companyRegistrationDate" className="d-block">Registration date<span className="requird-star">*</span></label>
                        <input onFocus={(e) => handleFocus(e.target)}
                            onBlur={(e) => handleBlur(e.target)}
                            id='companyRegistrationDate'
                            name='companyRegistrationDate' className="input-inline" type='date' />
                    </div>
                    <div className="mlr-50">
                        <label htmlFor="companyFoundingDate" className="d-block">Founding date<span className="requird-star">*</span></label>
                        <input onFocus={(e) => handleFocus(e.target)}
                            onBlur={(e) => handleBlur(e.target)}
                            id='companyFoundingDate' name='companyFoundingDate' className="input-inline" type='date' />
                    </div>
                </div>
            </div>

            <div className="container input-profile-company-form mt-20">
                <label className="ml-20 title-form-input">Contact</label>
                <div className="d-flex line-input">
                    <div className="mlr-50 ">
                        <label htmlFor="contactFirstName" className="d-block">First name<span className="requird-star">*</span></label>
                        <input onFocus={(e) => handleFocus(e.target)} onBlur={(e) => handleBlur(e.target)} id='contactFirstName' name='contactFirstName' className="input-inline" type='text' />
                    </div>
                    <div className="mlr-50">
                        <label htmlFor="contactLastName" className="d-block">Last name<span className="requird-star">*</span></label>
                        <input onFocus={(e) => handleFocus(e.target)} onBlur={(e) => handleBlur(e.target)} id='contactLastName' name='contactLastName' className="input-inline" type='text' />
                    </div>
                </div>
                <div className="d-flex line-input line-4-item">
                    <div className="mlr-50 d-flex form-2-on-4-left">
                        <div className="mlr-25">
                            <label htmlFor="contactGender" className="d-block">Gender</label>
                            <select onFocus={(e) => handleFocus(e.target)} onBlur={(e) => handleBlur(e.target)} id='contactGender' name='contactGender' className="input-inline input-4-item">
                                <option value='1'>Male</option>
                                <option value='2'>Female</option>
                                <option value='3'>Other</option>
                            </select>
                        </div>
                        <div className="mlr-25 lenght-birthdate-input-information-partner">
                            <label htmlFor="contactBirthdate" className="d-block">Birthdate</label>
                            <input onFocus={(e) => handleFocus(e.target)} onBlur={(e) => handleBlur(e.target)} id='contactBirthdate' name='contactBirthdate' className="input-inline input-4-item" type='date' />
                        </div>
                    </div>
                    <div className="mlr-50 form-2-on-4-right">
                        <label htmlFor="contactEmail" className="d-block">Email<span className="requird-star">*</span></label>
                        <input onFocus={(e) => handleFocus(e.target)} onBlur={(e) => handleBlur(e.target)} id='contactEmail' name='contactEmail' className="input-inline" type='text' />
                    </div>
                </div>
                <div className="d-flex line-input">
                    <div className="mlr-50 ">
                        <label htmlFor="contactCity" className="d-block">City</label>
                        <select
                            onFocus={(e) => handleFocus(e.target)}
                            onBlur={(e) => handleBlur(e.target)}
                            id='contactCity'
                            name='contactCity' className="input-inline">
                            {City.map((item) => <option value={item.name}>{item.name}</option>)}
                        </select>
                    </div>
                    <div className="mlr-50">
                        <label htmlFor="contactPhone" className="d-block">Phone<span className="requird-star">*</span></label>
                        <input onFocus={(e) => handleFocus(e.target)}
                            onBlur={(e) => handleBlur(e.target)}
                            id='contactPhone'
                            name='contactPhone' className="input-inline" type='text' />
                    </div>
                </div>
                <div className="d-flex line-input">
                    <div className="mlr-50 ">
                        <label htmlFor="contactAddress" className="d-block">Address</label>
                        <input onFocus={(e) => handleFocus(e.target)}
                            onBlur={(e) => handleBlur(e.target)}
                            id='contactAddress'
                            name='contactAddress' className="input-inline" type='text' />
                    </div>
                    <div className="mlr-50">
                        <label htmlFor="contactPosition" className="d-block">Position</label>
                        <input onFocus={(e) => handleFocus(e.target)}
                            onBlur={(e) => handleBlur(e.target)}
                            id='contactPosition'
                            name='contactPosition' className="input-inline" type='text' />
                    </div>
                </div>
                <div className="d-flex line-input line-4-item">
                    <div className="mlr-50 d-flex form-2-on-4-left">
                        <div className="mlr-25">
                            <label htmlFor="contactDateOfIssue" className="d-block">Date of issue</label>
                            <input onFocus={(e) => handleFocus(e.target)} onBlur={(e) => handleBlur(e.target)} id='contactDateOfIssue' name='contactDateOfIssue' className="input-inline input-4-item" type='date' />
                        </div>
                        <div className="mlr-25">
                            <label htmlFor="contactPlaceOfIssue" className="d-block">Place of issue</label>
                            <input onFocus={(e) => handleFocus(e.target)} onBlur={(e) => handleBlur(e.target)} id='contactPlaceOfIssue' name='contactPlaceOfIssue' className="input-inline input-4-item" type='date' />
                        </div>
                    </div>
                    <div className="mlr-50 form-2-on-4-right">
                        <label htmlFor="contactDepartment" className="d-block">Department</label>
                        <input onFocus={(e) => handleFocus(e.target)} onBlur={(e) => handleBlur(e.target)} id='contactEmail' name='contactEmail' className="input-inline" type='text' />
                    </div>
                </div>
                <div className="d-flex line-input">
                    <div className="mlr-50 input-alone">
                        <label htmlFor="contactIDCardNumber" className="d-block">ID card number</label>
                        <input onFocus={(e) => handleFocus(e.target)}
                            onBlur={(e) => handleBlur(e.target)}
                            id='contactIDCardNumber'
                            name='contactIDCardNumber' className="input-inline" type='text' />
                    </div>
                </div>
            </div>
            <label onClick={notify} className="btn-submit-profile-partner">Submit</label>
        </div>
    </form>
        <ToastContainer />
    </>)
}

export default memo(RegisterProfilePartner)