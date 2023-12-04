function Info({ Icon, text, link }) {
    return (
        <div className='col'>
            <div className='d-flex flex-column justify-content-between rounded text-center border border-primary h-100 p-2 bg-primary text-light shadow-sm position-relative'>
                <p className='display-5'>
                    <Icon />
                </p>
                <p>{text}. Dapat dilihat disini</p>
                <a
                    href={link}
                    target='_blank'
                    className='stretched-link'
                    rel='noopener noreferrer'
                />
            </div>
        </div>
    )
}

export default Info
