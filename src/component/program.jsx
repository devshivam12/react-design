import React from 'react'
import {programsData} from '../data/programsData'
import RightArrow from '../assets/rightArrow.png'
const program = () => {
  return (
    <>
    <div className='program'>
        <div>
            <h1 className="stroke-style">explore our</h1>
        </div>

        <div>
            <h1>programs</h1>
        </div>

        <div>
            <h1 className="stroke-style">to shape you</h1>
        </div>
    </div>

    <div className="program-categories">
        {programsData.map((program) => (
          <div className="category">
            {program.image}
            <p>{program.heading}</p>
            <small>{program.details}</small>
            <div className="join-now"><span>Join Now <img src={RightArrow} alt="" /></span> </div>
          </div>
        ))}
    </div>


    </>
  )
}

export default program
