import Question from './Question'

function Collect({ questionsData, setAnswer, number, setNumber }) {
    return (
        <div className='d-flex flex-column align-items-center'>
            <div className='mb-5 text-primary border border-2 border-primary rounded px-2 py-1'>
                <span className='fw-bold'>{number + 1}</span>/
                {questionsData.length}
            </div>
            <Question
                question={questionsData[number].question}
                choices={questionsData[number].choices}
                setNumber={setNumber}
                setAnswer={setAnswer}
            />
        </div>
    )
}

export default Collect
