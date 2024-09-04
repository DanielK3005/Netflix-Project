import React from 'react'
import "./styles/Footer.css"
import FacebookIcon from "../resources/facebook_icon.png"
import YoutubeIcon from "../resources/youtube_icon.png"
import TwitterIcon from "../resources/twitter_icon.png"
import instagramIcon from "../resources/instagram_icon.png"

function Footer() {
  return (
    <div className='footer'>
      <div className="footer__icons">
      <a href="https://www.facebook.com/netflixisrael/?brand_redir=475822799216240" target="_blank">
        <img src={FacebookIcon} alt=""  />
    </a>
    <a href="https://www.instagram.com/netflixisrael/" target="_blank">
        <img src={instagramIcon} alt="" />
    </a>
    <a href="https://www.youtube.com/@Netflix" target="_blank">
        <img src={YoutubeIcon} alt="" />
    </a>
    <a href="https://twitter.com/netflix" target="_blank">
        <img src={TwitterIcon} alt="" />
    </a>
      </div>
      <ul>
        <li><a href="https://help.netflix.com/en/node/412" target="_blank">FAQ</a></li>
        <li><a href="https://help.netflix.com/en" target="_blank">Help Center</a></li>
        <li><a href="https://media.netflix.com/en/" target="_blank">Media Center</a></li>
        <li><a href="https://jobs.netflix.com/" target="_blank">Jobs</a></li>
        <li><a href="https://help.netflix.com/en/node/134094" target="_blank">Corporate Information</a></li>
        <li><a href="https://help.netflix.com/legal/termsofuse" target="_blank">Terms of Use</a></li>
        <li><a href="https://help.netflix.com/legal/privacy" target="_blank">Privacy</a></li>
        <li><a href="https://help.netflix.com/en/contactus" target="_blank">Contact US</a></li>
      </ul>
      <p className='footer__copyright'>© 1997-2023 Netflix, Inc. All rights reserved.</p>
    </div>
  )
}

export default Footer;
