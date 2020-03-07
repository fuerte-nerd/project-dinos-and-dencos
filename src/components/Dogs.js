import React from "react"

import DogCard from "./DogCard"

export default function Dogs({data}) {
  
  return (
    <div class="dogs py-4">
      <div class="row">
        {data.map(dog => {
          return <DogCard data={dog} />
        })}
      </div>
    </div>
  )
}
