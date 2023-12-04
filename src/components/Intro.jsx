import { SiGooglecolab } from 'react-icons/si'
import healthImg from '../assets/health.svg'
import { FaGithub, FaRobot, FaUniversity } from 'react-icons/fa'
import information from '../assets/information'
import Info from './Info'

function Intro({ setBegin }) {
    return (
        <>
            <div className='row row-cols-1 row-cols-md-2 mt-5'>
                <div className='col order-md-last'>
                    <img
                        src={healthImg}
                        className='img-fluid px-3'
                        alt='health image'
                    />
                </div>
                <div className='col order-md-first'>
                    <div className='d-flex align-items-center h-100 mt-3 mt-md-0'>
                        <div>
                            <h1 className='text-center text-md-start text-primary display-3'>
                                <span className='text-logo'>DC!</span>{' '}
                                (DiabetCheck!)
                            </h1>
                            <p className='text-justify'>
                                Cek kemungkinan terkena diabetes tahap awal
                                disini! menggunakan algoritma machine learning
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
            <div className='mt-5'>
                <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 g-2'>
                    {information.map((info) => (
                        <Info
                            key={info.link}
                            Icon={info.Icon}
                            text={info.text}
                            link={info.link}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Intro
