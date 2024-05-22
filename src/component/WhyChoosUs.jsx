import React from 'react'
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import image4 from '../assets/image4.png'
import tick from '../assets/tick.png'
import brand1 from '../assets/nike.png'
import brand2 from '../assets/adidas.png'
import brand3 from '../assets/nb.png'
const Whychoosus = () => {
  return (
    <div className='why-us' id='whyUs'>
      <div className="left-side">

        <img src={image1} alt="" />

        <div>
          <img src={image2} alt="" className='image2' />
          <div className="small-img">
            <img src={image3} alt="" />
            <img src={image4} alt="" />
          </div>
        </div>

      </div>
      <div className="right-side">
        <p>some reasons</p>

        <div className="why-us-heading">
          <h1 className='stroke-style'>why</h1>
          <h1 className='second-h1'>choose us?</h1>
        </div>
        <div className="expertis">
          <ul><li><img src={tick} alt="" />over 140+ expert coachs</li></ul>
          <ul><li><img src={tick} alt="" />rain smarter and faster than before</li></ul>
          <ul><li><img src={tick} alt="" />1 free program for new member</li></ul>
          <ul><li><img src={tick} alt="" />reliable partners</li></ul>
        </div>


        <div className="brands">
          <small>our prtners</small>

          <div className="partner-img">
            <img src={brand1} alt="" />
            <img src={brand2} alt="" />
            <img src={brand3} alt="" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Whychoosus
