import { FaBars } from 'react-icons/fa'

function Navbar() {
    return (
        <header>
            <nav className='navbar mt-2'>
                <div className='container'>
                    <div className='w-100 px-3 py-2 bg-primary rounded shadow-sm text-center'>
                        <span className='fs-5 fw-bold text-logo text-light'>
                            DC!
                        </span>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
