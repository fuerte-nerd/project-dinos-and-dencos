import React from "react"

export default function FindUs() {
  return (
    <div class="navbar-social-icons d-lg-none p-3 border-top border-bottom">
      <small class="d-block font-weight-bold mb-2">Find us on...</small>
      <div class="d-flex justify-content-center">
        <a href="#" className="rounded-circle social social-sm social-facebook">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a
          href="#"
          class="btn ml-2 rounded-circle social social-sm social-instagram"
        >
          <i class="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  )
}
