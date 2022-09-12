import React from 'react'

const ContactFrom = () => {
  return (
    <div className='form-container'>
        <form>

            <label htmlFor="name"> Naam
            <input type="text" id="name" name="name" placeholder="jan jansens"/>
            </label>
            <label htmlFor="email">Email
            <input type="text" id="email" name="email" placeholder="jan.jansens@email.be"/>
            </label>
            <label htmlFor="onderwerp">Onderwerp</label>
            <input type="text" id="onderwerp" name='onderwerp' placeholder='(onderwerp)'/>
            <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
            
            <input type="submit" value="Submit"/>

        </form>
    </div>
    )
}

export default ContactFrom