import React from 'react'
import heart from '../assets/heart.png'
import whitetick from '../assets/whiteTick.png'
import dumble from '../assets/dumbell.png'
import crown from '../assets/crown.png'
const Plans = () => {
    return (
        <>
            <div className='plans' id='plans'>
                <div className="blure plans-blure-1"></div>
                <div className="blure plans-blure-2"></div>
                <div className="plans-heading">
                    <h1 className='stroke-style'>Ready to Start</h1>
                    <h1>Your Journey</h1>
                    <h1 className='stroke-style'>now withus</h1>
                </div>
            </div>


            <div className="cards">

                <div className="card-1">
                    <img src={heart} alt="" />
                    <small>basic plan</small>
                    <p>$ 25</p>

                    <div className="instruction">
                        <div className="small-instruction">
                            <img src={whitetick} alt="" /> <span>2 hours of excercises</span>
                        </div>

                        <div className="small-instruction">
                            <img src={whitetick} alt="" /> <span>Free consultaion to coaches</span>
                        </div>


                        <div className="small-instruction">
                            <img src={whitetick} alt="" /> <span>Access to The Community</span>
                        </div>

                        {/* <a href="">See more benefits</a> */}

                    </div>

                    <button>Join Now</button>
                </div>


                <div className="card-2">
                    <img src={crown} alt="" />
                    <small>premimum plan</small>
                    <p>$ 30</p>

                    <div className="better-plan">
                        <div className="better-plan-instruction">
                            <img src={whitetick} alt="" />
                            <span>5 hour of excercises</span>
                        </div>

                        <div className="better-plan-instruction">
                            <img src={whitetick} alt="" />
                            <span>Free consultaion of Coaches</span>
                        </div>


                        <div className="better-plan-instruction">
                            <img src={whitetick} alt="" />
                            <span>Accessto minibar</span>
                        </div>
                        {/* <a href="">See more benefits</a> */}
                    </div>
                    <button>Join Now</button>
                </div>


                <div className="card-1">
                    <img src={dumble} alt="" />
                    <small>pro plan</small>
                    <p>$ 45</p>

                    <div className="instruction">
                        <div className="small-instruction">
                            <img src={whitetick} alt="" /> <span>8 hours of excercises</span>
                        </div>

                        <div className="small-instruction">
                            <img src={whitetick} alt="" /> <span>Consultation of Private Coach</span>
                        </div>


                        <div className="small-instruction">
                            <img src={whitetick} alt="" /> <span>Free Fitness Merchandises</span>
                        </div>

                        {/* <a href="">See more benefits</a> */}

                    </div>

                    <button>Join Now</button>
                </div>
            </div>


        </>
    )
}

export default Plans
