import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import './Popup.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

type Props = {
    isPopup: boolean
    allLanguages: string[]
    onSelect: (language: string) => void
    onClose: () => void
}

const Popup = (props: Props) => {
    const [filteredLangauge, setFilteredLangauge] = useState<string[]>([]);
    const [searchText, setSearchText] = useState<string>("");
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if(popupRef.current && ! popupRef.current.contains(event.target as Node)){
                props.onClose();
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
    },[]);
    
    useEffect(() => {
        if(props.allLanguages.length > 0) setFilteredLangauge(props.allLanguages);
    },[props.allLanguages]);

    const popupRef = useRef<HTMLDivElement>(null);

    const handleInputOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value);
        setFilteredLangauge(props.allLanguages.filter(language => language.includes(searchText)));
    }

    const handleOnClickLanguage = (language: string) => {
        props.onSelect(language);
        props.onClose();
    }

    return (
        <div className='popup__layout' >
            <div className='popup__container' ref={popupRef}>
                <div className='popup__search'>
                    <div className='icon'><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
                    <div className='input'><input value={searchText} onChange={handleInputOnChange}/></div>
                </div>
                <div className='popup__items'>
                    {filteredLangauge.map((language, index) => (
                        <div key={index} className='popup__item' onClick={() => handleOnClickLanguage(language)}>{language}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Popup