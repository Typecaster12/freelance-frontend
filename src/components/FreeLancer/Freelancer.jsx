import './Freelancer.css';

const Freelancer = () => {
    return (
        <section className='free-section'>
            <h1 className='main-heading'>Become a Freelance.</h1>

            <div className="free-container">
                <div className="free-heading">
                    <h1 className='free-h1'>Work With <strong> Us!</strong></h1>
                    <p>You bring the skill. We will make earning easy.</p>
                </div>

                <button className="free-btn">Join Us</button>
            </div>

            {/* how it works section */}
            <section className='how-container'>
                <h2>How it Works?</h2>

                <div className="info">
                    <div className="info1">
                        <div className="info-icon">
                            <i className='bx bx-globe'></i>
                        </div>

                        <div className="info1-headings">
                            <h1>1. Join Us</h1>
                            <p>Sign up for free, and offer your work to our global audience.</p>
                        </div>
                    </div>

                    <div className="info1 info2">
                        <div className="info-icon">
                            <i className='bx bx-mail-send'></i>
                        </div>

                        <div className="info1-headings">
                            <h1>2. Deliver great work</h1>
                            <p>Get notified when you get an order and use our system to discuss details with customers.</p>
                        </div>
                    </div>

                    <div className="info1 info3">
                        <div className="info-icon">
                            <i className='bx bx-money-withdraw'></i>
                        </div>

                        <div className="info1-headings">
                            <h1>3. Get paid</h1>
                            <p>Get paid on time, every time. Payment is available for withdrawal as soon as it clears.</p>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Freelancer;
