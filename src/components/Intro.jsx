import healthImg from '../assets/health.svg'

function Intro({ setBegin }) {
    return (
        <div className='row row-cols-1 row-cols-md-2'>
            <div className='col order-md-last'>
                <img src={healthImg} className='img-fluid' alt='health image' />
            </div>
            <div className='col order-md-first'>
                <div className='d-flex align-items-center h-100 mt-3 mt-md-0'>
                    <div>
                        <h1 className='text-center text-md-start text-primary display-3'>
                            <span className='text-logo'>DC!</span>{' '}
                            (DiabetCheck!)
                        </h1>
                        <p className='text-justify'>
                            Cek kemungkinan terkena diabetes tahap awal disini!
                            menggunakan algoritma machine learning decision tree
                            CART dengan akurasi sebesar 97%
                        </p>
                        <div className='d-flex justify-content-center justify-content-md-start mt-3'>
                            <button
                                onClick={() => setBegin(true)}
                                className='btn btn-primary px-4'
                            >
                                Mulai
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro
