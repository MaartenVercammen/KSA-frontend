import React from 'react'

const ContactFrom = () => {
  return (
    <div className='form-container'>
        <form>

            <label htmlFor="name"> Name
            <input type="text" id="name" name="name" placeholder="Your name.."/>
            </label>
            <label htmlFor="email">Email
            <input type="text" id="email" name="email" placeholder="Your email.."/>
            </label>
            <label htmlFor="subject">Subject</label>
            <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
            
            <input type="submit" value="Submit"/>

        </form>
    </div>
    )
}

export default ContactFrom