import React from 'react'
import { SocialIcon } from 'react-social-icons';

export default function footer() {
  return (
    <>
      <div className='footer'>
        <ul>
          <li className='footer-list'>
          <SocialIcon className='list-item' url="https://www.linkedin.com/in/apoorv-tripathi-19b132178/" style={{ height: 40, width: 40 }}/>
          <SocialIcon className='list-item' url="https://github.com/apoorvtripathi1999" style={{ height: 40, width: 40 }} />
          <SocialIcon className='list-item' url="https://www.instagram.com/_the___wanderer/" style={{ height: 40, width: 40 }} />
          <SocialIcon className='list-item' url="https://web.whatsapp.com/" style={{ height: 40, width: 40 }} />
          </li>
        </ul>
      </div>
    </>
  )
}
