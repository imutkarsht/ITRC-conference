import React from 'react'

const ContactUs = () => {
  return (
    <div id='contact' className='flex container md:gap-4 gap-0 flex-wrap md:flex-nowrap items-center bg-gray-700 text-white md:justify-center'>
        <div className='flex flex-col m-4'>
            <h2 className='text-xl font-semibold uppercase text-white pt-4 pb-8 underline underline-offset-8 decoration-orange-200'>Useful Links</h2>
            <ul>
                <li>Link1</li>
                <li>Link2</li>
                <li>Link3</li>
                <li>Link4</li>
            </ul>
        </div>
        <div className='container flex flex-col m-4'>
            <h2 className='text-xl font-semibold uppercase text-white pt-4 pb-8 underline underline-offset-8 decoration-orange-200'>Contact Us</h2>
            <ul>
                <li>1. CONFERENCE CHAIR & CONVENOR</li>
                <li>2. FOR PUBLICATION RELATED QUERY</li>
                <li>3. FOR REGISTRATION RELATED QUERY</li>
                <li>4. FOR FINANCE RELATED QUERY</li>
            </ul>
        </div>
    </div>
  )
}

export default ContactUs