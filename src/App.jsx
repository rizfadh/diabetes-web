import Footer from './components/Footer'
import Content from './components/Content'
import Navbar from './components/Navbar'

function App() {
    return (
        <div className='d-flex flex-column justify-content-between min-vh-100'>
            <Navbar />
            <main className='container'>
                <div className='px-5'>
                    <Content />
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default App
