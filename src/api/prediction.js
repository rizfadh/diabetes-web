const getPrediction = async (data) => {
    try {
        const response = await fetch('https://diabetes-restapi.vercel.app', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })

        return await response.json()
    } catch (error) {
        console.log(error)
    }
}

export default getPrediction
