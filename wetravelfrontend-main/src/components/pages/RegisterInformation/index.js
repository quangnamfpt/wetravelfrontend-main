import { useState, useCallback, memo } from 'react'
import RegisterPassword from '../RegisterPassword'
import RegisterProfile from '../RegisterProfile'

function RegisterInformation({ languageSelected, role }) {
    const [nextScreen, setNextScreen] = useState(false)

    const handleNextScreen = useCallback(() => {
        setNextScreen(true)
    })

    return (<>
        {nextScreen ? <RegisterProfile languageSelected={languageSelected} /> :
            <RegisterPassword languageSelected={languageSelected} handleNextScreen={handleNextScreen} role={role} />}
    </>)
}

export default memo(RegisterInformation)