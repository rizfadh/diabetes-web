import { useState } from 'react'
import Intro from './Intro'
import Collect from './Collect'
import questionsData from '../assets/questionsData'
import Prediction from './Prediction'

function Content() {
    const [begin, setBegin] = useState(false)
    const [number, setNumber] = useState(0)
    const [answer, setAnswer] = useState([])

    if (begin) {
        if (number <= questionsData.length - 1) {
            return (
                <Collect
                    questionsData={questionsData}
                    setAnswer={setAnswer}
                    number={number}
                    setNumber={setNumber}
                />
            )
        }
        return <Prediction answer={answer} />
    }
    return <Intro setBegin={setBegin} />
}

export default Content
