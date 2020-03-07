import React from "react"

import tempImage from "../images/rafael-profile.jpg"


export default function PhotoGallery() {
  return (
    <div class="dog-gallery bg-primary p-3 rounded shadow-sm">
      <h3 class="font-weight-bold">Photos</h3>
      <div class="row dog-gallery-gallery">
        <div class="col-sm-6 col-md-4 col-lg-3">
          <a href="#">
            <img
              src={tempImage}
              alt=""
              class="w-100 rounded img-thumbnail bg-light my-2 dog-image"
            />
          </a>
        </div>
        <div class="col-sm-6 col-md-4 col-lg-3">
          <a href="#">
            <img
              src={tempImage}
              alt=""
              class="w-100 rounded img-thumbnail bg-light my-2 dog-image"
            />
          </a>
        </div>
        <div class="col-sm-6 col-md-4 col-lg-3">
          <a href="#">
            <img
              src={tempImage}
              alt=""
              class="w-100 rounded img-thumbnail bg-light my-2 dog-image"
            />
          </a>
        </div>
        <div class="col-sm-6 col-md-4 col-lg-3">
          <a href="#">
            <img
              src={tempImage}
              alt=""
              class="w-100 rounded img-thumbnail bg-light my-2 dog-image"
            />
          </a>
        </div>
      </div>
      <div class="text-center small">Video available on request</div>
    </div>
  )
}
