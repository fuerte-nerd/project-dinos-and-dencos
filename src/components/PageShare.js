import React from "react"

export default function PageShare(props) {
  return (
    <div className="post-social">
      <a href="http://www.facebook.com" className="button facebook mr-2">
        <span className="icon">
          <i className="fab fa-facebook-f"></i>
        </span>
      </a>
      <a href="http://twitter.com" className="button twitter mr-2">
        <span className="icon">
          <i className="fab fa-twitter"></i>
        </span>
      </a>
      <a href="http://www.whatsapp.com" className="button whatsapp">
        <span className="icon">
          <i className="fab fa-whatsapp"></i>
        </span>
      </a>
    </div>
  )
}
