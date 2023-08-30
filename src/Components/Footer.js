import { Link } from 'react-router-dom';
import './Footer.css';
import React from 'react'

function Footer() {
  return (
    <div className='footer'>
      <div className="top">
        <div >
            <h1>Trippy</h1>
            <p>Choose Your Favourite Destination</p>
        </div>
        <div >

           <Link to='/'>
            <i className='fa-brands fa-facebook-square'></i>
           </Link>
           <Link to='/'>
            <i className='fa-brands fa-instagram-square'></i>
           </Link>
           <Link to='/'>
            <i className='fa-brands fa-behance-square'></i>
           </Link>
           <Link to='/'>
            <i className='fa-brands fa-twitter-square'></i>
           </Link>
           
        </div>
      </div>
      <div className="bottom">
        <div>
            <h4>Project</h4>
            <Link to='/'>Changelog</Link>
            <Link to='/'>Status</Link>
            <Link to='/'>License</Link>
            <Link to='/'>All Versions</Link>
        </div>

        <div>
            <h4>Community</h4>
            <Link to='/'>Github</Link>
            <Link to='/'>Issues</Link>
            <Link to='/'>Project</Link>
            <Link to='/'>Twitter</Link>
        </div>

        <div>
            <h4>Help</h4>
            <Link to='/'>Support</Link>
            <Link to='/'>Troubleshooting</Link>
            <Link to='/'>Contact Us</Link>
            
        </div>

        <div>
            <h4>Others</h4>
            <Link to='/'>Terms of Service</Link>
            <Link to='/'>Privacy Policy</Link>
            <Link to='/'>License</Link>
            
        </div>


      </div>
    </div>
  )
}

export default Footer
