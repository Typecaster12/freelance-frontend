import './Services.css';

const Services = () => {
    return (
        <div className="service-container">

            {/* headings */}
            <div className="intro-heading">
                <h1>Popular Services</h1>
                <p>What we offer.</p>
            </div>

            {/* cards section */}
            <div className="cards">

                <div className="row1">
                    {/* card1  */}
                    <div className="card">
                        <div className="icon">
                            <i className='bx bx-layout'></i>
                        </div>

                        <div className="role">
                            <p className='card1-role'>Web Designer</p>
                        </div>

                        <p>view more <span className="span-icon"><i className='bx bx-right-arrow-alt'></i></span></p>
                    </div>


                    {/* card2  */}
                    <div className="card">
                        <div className="icon">
                            <i className='bx bx-code'></i>
                        </div>

                        <div className="role">
                            <p className='card2-role'>UI/UX Designer</p>
                        </div>

                        <p>view more <span className="span-icon"><i className='bx bx-right-arrow-alt'></i></span></p>
                    </div>


                    {/* card3 */}
                    <div className="card">
                        <div className="icon">
                            <i className='bx bxs-book-content'></i>
                        </div>

                        <div className="role">
                            <p>Content Writting</p>
                        </div>

                        <p className='card3-role'>view more <span className="span-icon"><i className='bx bx-right-arrow-alt'></i></span> </p>
                    </div>
                </div>


                <div className="row2">
                    {/* card4  */}
                    <div className="card">
                        <div className="icon">
                            <i className='bx bxl-sketch'></i>
                        </div>

                        <div className="role">
                            <p className='card1-role'>Logo Designing</p>
                        </div>

                        <p>view more <span className="span-icon"><i className='bx bx-right-arrow-alt'></i></span></p>
                    </div>


                    {/* card5  */}
                    <div className="card">
                        <div className="icon">
                            <i className='bx bx-code'></i>
                        </div>

                        <div className="role">
                            <p className='card2-role'>Backend Dev</p>
                        </div>

                        <p>view more <span className="span-icon"><i className='bx bx-right-arrow-alt'></i></span></p>
                    </div>


                    {/* card6 */}
                    <div className="card">
                        <div className="icon">
                            <i className='bx bxl-android'></i>
                        </div>

                        <div className="role">
                            <p>App Dev</p>
                        </div>

                        <p className='card3-role'>view more <span className="span-icon"><i className='bx bx-right-arrow-alt'></i></span> </p>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Services;
