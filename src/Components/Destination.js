import React from 'react'
import './Destination.css'
import DestinationData from './DestinationData'
import Mountain1 from "../assets/1.jpg"
import Mountain2 from "../assets/2.jpg"
import Mountain3 from "../assets/5.jpg"
import Mountain4 from "../assets/8.jpg"


function Destination() {
  return (
    <div className='destination'>
    <h1>Popular Destinations</h1>
    <p>Tours give oppotrunity to explore different people and religion.</p>
      <DestinationData
      className='first-des'
        heading="Taal Volcano, Batangas"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis harum eos ipsum enim amet soluta nobis nemo deserunt corporis facere eius dolores nulla obcaecati repellat perferendis nihil aut, a ab non. Necessitatibus, numquam. Excepturi, officia! Totam deserunt aliquid maiores incidunt atque beatae, architecto neque vitae ad officiis fugiat natus nesciunt!"
        img1= {Mountain1}
        img2={Mountain2}
      />


<DestinationData
        className='first-des-reverse'
        heading="Mt. Daguldul, Batangas"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis harum eos ipsum enim amet soluta nobis nemo deserunt corporis facere eius dolores nulla obcaecati repellat perferendis nihil aut, a ab non. Necessitatibus, numquam. Excepturi, officia! Totam deserunt aliquid maiores incidunt atque beatae, architecto neque vitae ad officiis fugiat natus nesciunt!
      "
        img1= {Mountain3}
        img2={Mountain4}
      />



    </div>
  ) 
}

export default Destination
