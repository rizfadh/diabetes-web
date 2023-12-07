function Question({ question, choices, setNumber, setAnswer }) {
    const handleClick = (answer) => {
        setAnswer((prev) => [...prev, answer])
        setNumber((prev) => prev + 1)
    }

    return (
        <div className='w-100 text-center'>
            <p>{question}</p>
            {choices === null ? (
                <form
                    className='d-grid gap-2 d-md-flex'
                    onSubmit={(e) => {
                        e.preventDefault()
                        const input = e.target.elements[0]
                        handleClick(Number(input.value))
                        input.value = ''
                    }}
                >
                    <input
                        type='number'
                        inputMode='numeric'
                        className='form-control'
                        name='input'
                        id='input'
                        required
                    />
                    <button type='submit' className='btn btn-primary'>
                        Submit
                    </button>
                </form>
            ) : (
                <div className='d-grid gap-2 d-md-block'>
                    {choices.map((choice) => (
                        <button
                            key={Math.random()}
                            type='button'
                            className='btn btn-primary mx-md-1'
                            style={{ minWidth: '80px' }}
                            onClick={() => handleClick(choice.value)}
                        >
                            {choice.text}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Question
