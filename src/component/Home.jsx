import React from 'react'
import Header from '../component/Header'
import Heart from '../assets/heart.png'
import hero from '../assets/hero_image.png'
import img_back from '../assets/hero_image_back.png'
import calories from '../assets/calories.png'

import { motion } from 'framer-motion'

function Home() {

    const transition = { type: 'spring', duration: 3 }
    return (
        <div className='home' id='home'>

            <div className="blure blure-hero"></div>

            {/* ----------left bar             */}

            <div className="left-bar">
                <Header />

                <div className="best-ad">
                    <motion.div
                        initial={{ left: '230px' }}
                        whileInView={{ left: '8px' }}
                        transition={{ ...transition, type: 'tween' }}
                    ></motion.div>
                    <span>THE BEST FITNESS CLUB IN THE TOWN</span>
                </div>

                <div className="slogan">
                    <div ><span className="stroke-style">shape</span> <span>your</span>
                    </div>

                    <div><span>ideal body</span></div>
                </div>

                <div className="short-slogan">
                    <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
                </div>

                <div className="progress">
                    <div className="progress-1">
                        <span>+ 140</span>
                        <p>expert coaches</p>
                    </div>

                    <div className="progress-1">
                        <span>+ 978</span>
                        <p>member joined</p>
                    </div>

                    <div className="progress-1">
                        <span>+ 50</span>
                        <p>fitness programs</p>
                    </div>

                </div>
                <motion.div
                    initial={{ right: "37rem" }}
                    whileInView={{ right: "28rem" }}
                    transition={transition}
                    className="calories">
                    <img src={calories} alt="" />
                    <div className="clories-text">
                        <span>Caloriers Burned</span>
                        <p>220kcal</p>
                    </div>
                </motion.div>

                <div className="buttons">

                    <button className='btn'>Get Started</button>

                    <button className='btn-1'>Learn More</button>

                </div>

            </div>

            {/* ----------right bar             */}


            <div className="right-bar">

                <button className='btn-2'>Join
                    Now</button>

                <motion.div
                    initial={{ right: '-1rem' }}
                    whileInView={{ right: '4rem' }}
                    transition={transition}
                    className="bpm">
                        
                    <img src={Heart} alt="" />
                    <br />
                    <span>Heart Rate</span>
                    <p>116 bpm</p>
                </motion.div>

                <img src={hero} alt="" className='hero-img' />

                <motion.img
                    initial={{ right: "11rem" }}
                    whileInView={{ right: "20rem" }}
                    transition={transition}
                    src={img_back} alt="" className='hero-img-back' />


            </div>

        </div>
    )
}

export default Home
