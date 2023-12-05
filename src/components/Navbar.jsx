import { FaBars } from 'react-icons/fa'

function Navbar() {
    return (
        <header className='sticky-top'>
            <nav className='navbar mt-2'>
                <div className='container'>
                    <div className='w-100 px-3 py-2 bg-primary rounded shadow-sm text-center'>
                        <a
                            href='/'
                            className='navbar-brand fs-5 fw-bold text-logo text-light'
                        >
                            DC
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
