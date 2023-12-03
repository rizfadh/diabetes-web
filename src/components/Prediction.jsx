import { useEffect, useState } from 'react'
import getPrediction from '../api/prediction'
import positive from '../assets/positive.svg'
import negative from '../assets/negative.svg'

function Prediction({ answer }) {
    const [prediction, setPrediction] = useState('')

    useEffect(() => {
        const features = [
            'Age',
            'Gender',
            'Polyuria',
            'Polydipsia',
            'SuddenWeightLoss',
            'Weakness',
            'Polypaghia',
            'GenitalThrush',
            'VisualBlurring',
            'Itching',
            'Irritability',
            'DelayedHealing',
            'PartialParesis',
            'MuscleStiffnes',
            'Alopecia',
            'Obesity',
        ]
        const postData = {}
        features.forEach((feature, index) => {
            postData[feature] = answer[index]
        })

        const getPredictionHandler = async () => {
            const { data, prediction } = await getPrediction(postData)
            console.log(data)
            setPrediction(prediction)
        }

        getPredictionHandler()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (prediction.length === 0)
        return <h2 className='text-primary text-center'>Loading...</h2>

    return (
        <div className='text-center'>
            <h2 className='text-primary'>Hasil Prediksi</h2>
            {prediction === 'Positive' ? (
                <div>
                    <img
                        src={positive}
                        className='img-fluid my-3'
                        alt='positive image'
                        width={300}
                    />
                    <p>
                        Maaf kamu positif terkena diabetes tahap awal
                        <br />
                        <span className='fw-bold'>Saran: </span>
                        konsultasikan lebih lanjut ke tenaga medis yang lebih
                        ahli
                    </p>
                </div>
            ) : (
                <div>
                    <img
                        src={negative}
                        className='img-fluid my-3'
                        alt='positive image'
                        width={300}
                    />
                    <p>
                        Selamat kamu negatif terkena diabetes! pertahankan gaya
                        hidupmu ya
                    </p>
                </div>
            )}
        </div>
    )
}

export default Prediction
