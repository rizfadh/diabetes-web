import { SiBootstrap, SiFastapi, SiReact } from 'react-icons/si'

function Footer() {
    return (
        <footer className='mt-5'>
            <div className='container'>
                <p className='text-center'>
                    Built with{' '}
                    <span className='fs-4 text-primary'>
                        <SiReact /> <SiFastapi /> <SiBootstrap />
                    </span>{' '}
                    by{' '}
                    <a
                        className='text-primary text-decoration-none'
                        href='https://rizky.website'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Muhammad Rizky Fadhillah
                    </a>{' '}
                    2023
                </p>
            </div>
        </footer>
    )
}

export default Footer
