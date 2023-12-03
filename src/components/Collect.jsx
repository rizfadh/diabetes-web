import { useState } from 'react'
import Question from './Question'

function Collect({ questionsData, setAnswer, number, setNumber }) {
    return (
        <div>
            <Question
                number={number}
                question={questionsData[number].question}
                choices={questionsData[number].choices}
                setNumber={setNumber}
                setAnswer={setAnswer}
            />
        </div>
    )
}

export default Collect
