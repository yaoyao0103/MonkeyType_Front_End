import React, { useEffect, useState, useRef } from 'react'
import './TypeBlock.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas, faRotateRight } from '@fortawesome/free-solid-svg-icons'
import Popup from '../Popup/Popup'
import axios from 'axios'

type Props = {}

const TypeBlock = (props: Props) => {
    const buttonRef = useRef<HTMLDivElement>(null);

    const [words, setWords] = useState<string[]>([]);
    const [sequenceWords, setSequenceWords] = useState<string>("");
    const [language, setLanguage] = useState<string>("english");
    const [allLanguages, setAllLanguages] = useState<string[]>([]);
    const [isPopup, setIsPopup] = useState<boolean>(false);
    const [show, setShow] = useState<boolean>(false);

    useEffect( () => {
        const list = require('../../static/_list.json');
        setAllLanguages(list);
        setShow(true);
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

    useEffect(() => {
        setSequenceWords(words.join(" "));
    }, [words])

    // useEffect(() => {
    //     if(!show){
    //         shuffleArray();
    //         console.log(show);
    //         setShow(true);
    //     }
    // }, [show])

    const handleOnSelectLanguage = (selectedLanguage: string) => {
        setLanguage(selectedLanguage);
    }

    const shuffleArray = () => {
        const new_words: string[] = [...words];
        for (let i = new_words.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          // Swap array[i] and array[j]
          [new_words[i], new_words[j]] = [new_words[j], new_words[i]];
        }
        setWords(new_words);
      }


    const restart = () => {
        setShow(false);
        setTimeout(() => {
            shuffleArray();
            setShow(true);
        }, 100);
    }


    return (
        <div className='typeBlock__layout'>
            <div className={`typeBlock__container ${show? "":"hidden"}`}>
                <div className='typeBlock__language' onMouseUp={() => setIsPopup(true)} ref={buttonRef}>
                    <div><FontAwesomeIcon icon={faEarthAmericas} /></div>
                    <div className='text'>{language}</div>
                </div>
                <div className='typeBlock__type'>
                    <div className='typeBlock__words'>{sequenceWords}</div>
                </div>
                <div className='typeBlock__restart' onClick={restart}>
                    <div><FontAwesomeIcon icon={faRotateRight} /></div>
                </div>
            </div>
            {isPopup&& <Popup isPopup={isPopup} allLanguages={allLanguages} onClose={() => setIsPopup(false)} onSelect={handleOnSelectLanguage}/>}
        </div>
    )
}

export default TypeBlock