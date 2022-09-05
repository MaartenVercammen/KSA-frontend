import React from 'react'

const ContactFrom = () => {
  return (
    <div>
        <form>

            <label htmlFor="name"> Name</label>
            <input type="text" id="name" name="name" placeholder="Your name.."/>

            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" placeholder="Your email.."/>

            <label htmlFor="subject">Subject</label>
            <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

            <input type="submit" value="Submit"/>

        </form>
    </div>
    )
}

export default ContactFrom