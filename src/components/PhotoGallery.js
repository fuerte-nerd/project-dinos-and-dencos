import React from "react"
import Img from "gatsby-image"

import tempImage from "../images/rafael-profile.jpg"


export default function PhotoGallery(props) {
  return (
    <div class="dog-gallery bg-primary p-3 rounded shadow-sm">
      <h3 class="font-weight-bold">Photos</h3>
      <div class="row dog-gallery-gallery">
      {props.pics.map((i)=>{
        return (
            <div class="col-sm-6 col-md-4 col-lg-3">
          <a href={i.node.original.src}>
          <Img fluid={i.node.fluid} className="w-100 rounded img-thumbnail bg-light my-2 dog-image" />
            
          </a>
        </div>
          )
      })}
       
      </div>
      <div class="text-center small">Video available on request</div>
    </div>
  )
}
