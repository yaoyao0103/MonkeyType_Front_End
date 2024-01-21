import React, { useState } from 'react'

type Props = {}

const SwitchLanguage = (props: Props) => {
    const [language, setLanguage] = useState<String>();
    const onClickSwitchLanguageButton = () => {
        
    }

    return (
        <div onClick={onClickSwitchLanguageButton}>SwitchLanguage</div>
    )
}

export default SwitchLanguage