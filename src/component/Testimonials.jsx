import React, { useState } from 'react'
import { teatimonialsData, testimonialsData } from '../data/testimonialsData'
import leftarrow from '../assets/leftArrow.png'
import righttarrow from '../assets/rightArrow.png'
import { motion } from 'framer-motion'
const Testimonials = () => {

    const transition = { type: 'spring', duration: 3 }

    const [selected, setSelected] = useState(0);

    const tlength = testimonialsData.length;
    return (
        <div className='testimonial' id='testimonial'>
            <div className="left-t">
                <span>Testimonials</span>
                <span className='stroke-style'>What they</span>
                <span>say about us</span>
                <motion.span
                    key={selected}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={transition}
                >{testimonialsData[selected].review}</motion.span>

                <span>
                    <span style={{ color: 'var(--orange)' }}>{testimonialsData[selected].name}</span> {" "}
                    - {testimonialsData[selected].status}
                </span>
            </div>


            <div className="right-t">
                <motion.div
                    initial={{ left: '6rem' }}
                    whileInView={{ left: '13rem' }}
                    transition={transition}
                ></motion.div>
                <motion.div
                    initial={{ right: '-1rem' }}
                    whileInView={{ right: '6rem' }}
                    transition={transition}
                ></motion.div>


                <motion.img
                    key={selected}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={transition}

                    src={testimonialsData[selected].image} alt="" />

                <div className="arrow">
                    <img onClick={() => {
                        selected === 0
                            ? setSelected(tlength - 1)
                            : setSelected((prev) => prev - 1);
                    }}
                        src={leftarrow} alt="" />
                    <img onClick={() => {
                        selected === tlength - 1
                            ? setSelected(0)
                            : setSelected((prev) => prev + 1);
                    }} src={righttarrow} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Testimonials
