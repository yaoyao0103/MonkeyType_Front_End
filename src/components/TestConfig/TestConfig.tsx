import React, {useState} from 'react'
import './TestConfig.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt, faHashtag, faClock, faA, faQuoteLeft, faMountain, faWrench, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'


type Props = {}

const TestConfig = (props: Props) => {
    const [punctuationActiveButton, setPunctuationActiveButton] = useState<boolean>(false);
    const [numbersActiveButton, setNumbersActiveButton] = useState<boolean>(false);
    const [timeActiveButton, setTimeActiveButton] = useState<String>("10");
    const [modeActiveButton, setModeActiveButton] = useState<String>("time");
    return (
        <div className='testConfig__layout'>
            <div className='testConfig__container'>
                <div className={`testConfig__item left__wider ${punctuationActiveButton === true? "active" : ""}`} onClick={() => setPunctuationActiveButton(!punctuationActiveButton)}>
                    <div><FontAwesomeIcon icon={faAt} /></div>
                    <div className='text'>punctuation</div>
                </div>
                <div className={`testConfig__item right__wider ${numbersActiveButton === true? "active" : ""}`} onClick={() => setNumbersActiveButton(!numbersActiveButton)}>
                    <div><FontAwesomeIcon icon={faHashtag} /></div>
                    <div className='text'>numbers</div>
                </div>
                <div className='spacer'></div>
                <div className={`testConfig__item left__wider ${modeActiveButton === "time"? "active" : ""}`} onClick={() => setModeActiveButton("time")}>
                    <div><FontAwesomeIcon icon={faClock} /></div>
                    <div className='text'>time</div>
                </div>
                <div className={`testConfig__item equal__wide ${modeActiveButton === "words"? "active" : ""}`} onClick={() => setModeActiveButton("words")}>
                    <div><FontAwesomeIcon icon={faA} /></div>
                    <div className='text'>words</div>
                </div>
                <div className={`testConfig__item equal__wide ${modeActiveButton === "quote"? "active" : ""}`} onClick={() => setModeActiveButton("quote")}>
                    <div><FontAwesomeIcon icon={faQuoteLeft} /></div>
                    <div className='text'>quote</div>
                </div>
                <div className={`testConfig__item equal__wide ${modeActiveButton === "zen"? "active" : ""}`} onClick={() => setModeActiveButton("zen")}>
                    <div><FontAwesomeIcon icon={faMountain} /></div>
                    <div className='text'>zen</div>
                </div>
                <div className={`testConfig__item right__wider ${modeActiveButton === "custom"? "active" : ""}`} onClick={() => setModeActiveButton("custom")}>
                    <div><FontAwesomeIcon icon={faWrench} /></div>
                    <div className='text'>custom</div>
                </div>
                <div className='spacer'></div>
                <div className={`testConfig__item left__wider ${timeActiveButton === "10"? "active" : ""}`} onClick={() => setTimeActiveButton("10")}>15</div>
                <div className={`testConfig__item equal__wide ${timeActiveButton === "30"? "active" : ""}`} onClick={() => setTimeActiveButton("30")}>30</div>
                <div className={`testConfig__item equal__wide ${timeActiveButton === "60"? "active" : ""}`} onClick={() => setTimeActiveButton("60")}>60</div>
                <div className={`testConfig__item equal__wide ${timeActiveButton === "120"? "active" : ""}`} onClick={() => setTimeActiveButton("120")}>120</div>
                <div className={`testConfig__item right__wider ${timeActiveButton === "custom"? "active" : ""}`} onClick={() => setTimeActiveButton("custom")}>
                    <div><FontAwesomeIcon icon={faScrewdriverWrench} /></div>
                </div>
            </div>
        </div>
    )
}

export default TestConfig