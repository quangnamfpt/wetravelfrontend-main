import { useState } from 'react'
import Home from '../components/pages/Home';
import Register from '../components/pages/Register';
import VerifyEmail from '../components/pages/VerifyEmail';
import RegisterInfomationLayout from '../components/Layout/RegisterInfomationLayout';
import RegisterInformation from '../components/pages/RegisterInformation';
import RegisterProfilePartner from '../components/pages/RegisterProfilePartner';
import ChangePassword from '../components/pages/ChangePassword';
import CreateService from '../components/pages/CreateService';
import PartnerHome from '../components/pages/PartnerHome';
import Hiring from '../components/images/hiring.png';
import Camping1 from '../components/images/camping1.png';

const publicRoute = [
    { path: '/', component: Home },
    { path: '/register', component: Register, layout: null, role: 3 },
    { path: '/register-partner', component: Register, layout: null, role: 2 },
    { path: '/checkmail', component: VerifyEmail, layout: null },
    { path: '/register-information-customer', component: RegisterInformation, layout: RegisterInfomationLayout, image: Camping1, role: 3 },
    { path: '/register-information-partner', component: RegisterInformation, layout: RegisterInfomationLayout, image: Hiring, role: 2 },
    { path: '/register-profile-partner', role:2, component: RegisterProfilePartner },
    { path: '/change-password', component: ChangePassword, layout: RegisterInfomationLayout, changePassword: true},
    { path: '/partner/create-service', component: CreateService },
    { path: '/partner', component: PartnerHome }
]

const privateRoute = [

]

export { publicRoute, privateRoute }