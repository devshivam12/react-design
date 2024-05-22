import React from 'react'

const join = () => {
    return (
        <div className='join'>

            <div className="left-j">
                <hr />
                <div><span className='stroke-style'>ready to</span>
                    <span> level up </span>
                </div>

                <div>
                    <span>your body</span>
                    <span className='stroke-style'> with us ?</span>
                </div>
            </div>

            <div className="right-j">
                <div className="join-from">
                    <input type="email" placeholder='Enter your Email address here ... ' />

                    <button>Join Now</button>
                </div>
            </div>
        </div>
    )
}

export default join
