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
                    by Muhammad Rizky Fadhillah 2023
                </p>
            </div>
        </footer>
    )
}

export default Footer
