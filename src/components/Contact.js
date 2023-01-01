import React from 'react'

export default function Contact() {
    return (
        <>
                <div className='contact-head'>
                    <h1>Contact Us</h1>
                </div>
            <div className='contact-main'>
                <div className='map'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15787.875631587067!2d77.5784028439097!3d12.966571258642336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16775069abf7%3A0xe138768bb2a0df8a!2sUB%20City!5e0!3m2!1sen!2sin!4v1671033799780!5m2!1sen!2sin" width="400" height="300" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className='contact-form'>
                    <div className='name-email'>
                        <div className="form-floating neobj">
                            <input type="email" className="form-control ne" id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput">Name</label>
                        </div>
                        <div className="form-floating neobj">
                            <input type="email" className="form-control ne" id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                    </div>
                    <div className='comments'>
                        <div className="form-floating my-3">
                        <input type="email" className="form-control ne" id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput">Subject</label>
                        </div>
                        <div className="form-floating my-3">
                            <textarea className="form-control comments" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                            <label htmlFor="floatingTextarea">Message</label>
                        </div>
                        <button className='btn btn-dark my-4'>Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}
