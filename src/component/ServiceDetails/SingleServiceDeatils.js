import React from 'react'
import img from '../../assets/img/project-details/2.png'

const SingleServiceDeatils = () => {
    return (
        <>
            <section id="service-details" className="py100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="service-details-img">
                                <img alt="" src={img} />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="service-detail-text">
                                <div className="left-side-title">
                                    <h2 className="pt10">Proven scanners to find stocks before they move</h2>
                                    <p>Momentum scanners - </p>
                                    <p>Low Float Stock Scanner - </p>
                                    <p>Halt Indicator - </p>
                                    <p>Earnings - </p>
                                    <p>Moving Averages/Crossovers - </p>
                                    <p>Relative Volume - </p>
                                    <p>Opening Range Breakout (ORB) - </p>
                                    <p>Reversals - </p>
                                    <p>RSI - </p>
                                    <p>VWAP Multi Time Frame Indicator - </p>
                                    <p>Unusual Volume Scanner - </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SingleServiceDeatils
