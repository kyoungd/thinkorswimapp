import React from 'react'
// Import Img
import small1 from '../../../assets/img/small-icon/1.png'
import small2 from '../../../assets/img/small-icon/2.png'
import small3 from '../../../assets/img/small-icon/3.png'
import AboutImg from '../../../assets/img/about/2.png'

const AboutTwo = () => {
    return (
        <>
            {/* About Two Area Start */}
            <section id="about-area-two" className="bg-color">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="animation-img animation-img-one">
                                <img alt="" src={AboutImg} />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="right-side-about">
                                <h2>Check Our Awesome Features Here</h2>
                                <div className="right-area-about-list">
                                    <div className="media">
                                        <img alt="" className="mr-3" src={small1} />
                                        <div className="media-body">
                                            <h3 className="mt-0">Save Your Time</h3>
                                            <p>
                                                Use our scanners or allow us to build you a custom scanner.  It will save you
                                                countless hours of searching and staring at the chart looking.
                                    </p>
                                        </div>
                                    </div>
                                    <div className="media  media wow fadeInUp " data-wow-duration="2.0s " data-wow-delay=".2s ">
                                        <img alt="" className="mr-3 " src={small2} />
                                        <div className="media-body ">
                                            <h3 className="mt-0 ">Find more winners</h3>
                                            <p>
                                                Allow our solution to find the winning setup just in time to take advantage
                                                of the development.  Market changes rapidly but we help you to be quicker.
                                    </p>
                                        </div>
                                    </div>
                                    <div className="media  media wow fadeInUp" data-wow-duration="2.0s" data-wow-delay=".3s">
                                        <img alt="" className="mr-3" src={small3} />
                                        <div className="media-body">
                                            <h3 className="mt-0">Make more money</h3>
                                            <p>
                                                At the end of the day, it is all about winning.  With our solution, you can
                                                find setups that you are looking for automatically and win more trades.
                                    </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* About Two Area End */}
        </>
    )
}

export default AboutTwo
