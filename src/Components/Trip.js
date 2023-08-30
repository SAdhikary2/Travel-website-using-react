import React from 'react'
import './Trip.css'
import TripData from './TripData'
import Trip1 from '../assets/3.jpg'
import Trip2 from '../assets/4.jpg'
import Trip3 from '../assets/6.jpg'

function Trip() {
  return (
    <div className='trip'>
      <h1>Recent Trips</h1>
      <p>You can Discover unique destinations using Google Maps.</p>
      <div className="tripcard">
        <TripData
            image={Trip1}
            heading='Trip in Paris'
            text=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores enim itaque, aperiam consectetur sed cumque impedit aspernatur reiciendis temporibus accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, harum.'
        />

<TripData
            image={Trip2}
            heading='Trip in Malaysia'
            text=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores enim itaque, aperiam consectetur sed cumque impedit aspernatur reiciendis temporibus accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, harum.'
        />

<TripData
            image={Trip3}
            heading='Trip in France'
            text=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores enim itaque, aperiam consectetur sed cumque impedit aspernatur reiciendis temporibus accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, harum.'
        />

       
      </div>
    </div>
  )
}

export default Trip
