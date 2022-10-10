import { useState, useCallback, memo } from 'react'
import RegisterPassword from '../RegisterPassword'
import RegisterProfile from '../RegisterProfile'

function RegisterInformation({ languageSelected, role }) {
    const [nextScreen, setNextScreen] = useState(false)
    const [passwordMain, setPasswordMain] = useState('')

    const handleNextScreen = useCallback(() => {
        setNextScreen(true)
    })

    return (<>
        {nextScreen ? <RegisterProfile passwordMain={passwordMain} role={role} languageSelected={languageSelected} /> :
            <RegisterPassword languageSelected={languageSelected} setPasswordMain={setPasswordMain} handleNextScreen={handleNextScreen} role={role} />}
    </>)
}

export default memo(RegisterInformation)