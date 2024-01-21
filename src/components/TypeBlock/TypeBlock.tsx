import React, { useEffect, useState, useRef } from 'react'
import './TypeBlock.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'
import Popup from '../Popup/Popup'
import axios from 'axios'

type Props = {}

const TypeBlock = (props: Props) => {
    const buttonRef = useRef<HTMLDivElement>(null);

    const [words, setWords] = useState<string[]>([]);
    const [language, setLanguage] = useState<string>("english");
    const [allLanguages, setAllLanguages] = useState<string[]>([]);
    const [isPopup, setIsPopup] = useState<boolean>(false);
    useEffect( () => {
        const list = require('../../static/_list.json');
        setAllLanguages(list);
    },[])
    useEffect(() => {
        if(allLanguages.length !== 0) console.log(allLanguages)
    }, [allLanguages])

    useEffect(() => {
        const fetchLanguage = async () => {
            const languageJSON = await require(`../../static/${language}.json`);
            setWords(languageJSON.words);
        }
        fetchLanguage();
    }, [language])

    const handleOnSelectLanguage = (selectedLanguage: string) => {
        setLanguage(selectedLanguage);
    }

    return (
        <div className='typeBlock__layout'>
            <div className='typeBlock__container'>
                <div className='typeBlock__language' onMouseUp={() => setIsPopup(true)} ref={buttonRef}>
                    <div><FontAwesomeIcon icon={faEarthAmericas} /></div>
                    <div className='text'>{language}</div>
                </div>
                <div className='typeBlock__type'></div>
            </div>
            {isPopup&& <Popup isPopup={isPopup} allLanguages={allLanguages} onClose={() => setIsPopup(false)} onSelect={handleOnSelectLanguage}/>}
        </div>
    )
}

export default TypeBlock