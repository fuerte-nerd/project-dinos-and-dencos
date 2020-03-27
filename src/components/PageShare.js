import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookF,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons"
export default function PageShare(props) {
  return (
    <div className="post-social">
      <a href="http://www.facebook.com" className="button facebook mr-2">
        <span className="icon">
          <FontAwesomeIcon icon={faFacebookF} />
        </span>
      </a>
      <a href="http://twitter.com" className="button twitter mr-2">
        <span className="icon">
          <FontAwesomeIcon icon={faTwitter} />
        </span>
      </a>
      <a href="http://www.whatsapp.com" className="button whatsapp">
        <span className="icon">
          <FontAwesomeIcon icon={faWhatsapp} />
        </span>
      </a>
    </div>
  )
}
