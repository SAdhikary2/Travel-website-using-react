import './contactForm.css'
import React from 'react'

function contacrForm() {
  return (
    <div className='form-container'>
    <h1>Send message to us</h1>
    <form action="#">
        <input placeholder='Name' />
        <input placeholder='Email' />
        <input placeholder='Subject' />
        <textarea placeholder='message'  cols="30" rows="4"></textarea>
        <button>Send message</button>
    </form>
      
    </div>
  )
}

export default contacrForm
