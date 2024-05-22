import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import Bars from '../assets/bars.png'
import { Link } from 'react-scroll'
function Header() {

  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpend, setmenuOpend] = useState(false);


  return (
    <div className='header'>
      <img src={Logo} alt="" className='logo' />

      {menuOpend === false && mobile === true ? (

        <div
          style={{
            background: 'var(--appColor)',
            padding: '0.8rem',
            borderRadius: '10px',

          }}

          onClick={() => setmenuOpend(true)}>
          <img src={Bars} alt="" style={{ width: '1.5rem', height: '1.5rem'}} />
        </div>

      ) : (

        <div className="header-bar">
          <ul>

            <li><Link onClick={() => setmenuOpend(false)}
              to='home'
              span={true}
              smooth={true}>Home</Link></li>

            <li><Link to='program' span={true} smooth={true} onClick={() => setmenuOpend(false)}>Program</Link></li>

            <li> <Link to='whyUs' span={true} smooth={true} onClick={() => setmenuOpend(false)}>Why Us</Link></li>
            <li> <Link to='plans' smooth={true} span={true} onClick={() => setmenuOpend(false)}>Plans</Link></li>

            <li><Link to='testimonial' smooth={true} span={true} onClick={() => setmenuOpend(false)}>Testimonials</Link></li>
          </ul>
        </div>
      )
      }

    </div>
  )
}

export default Header
