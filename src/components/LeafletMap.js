import React from "react"

import Helmet from "react-helmet"
import { Map, Marker, TileLayer } from "react-leaflet"
import { Icon } from "leaflet"
import logoPin from "../images/logopin.png"

export default function LeafletMap() {
  const icon = new Icon({
    iconUrl: logoPin,
    iconSize: [40, 79],
    iconAnchor: [20, 79],
  })
  return typeof window !== "undefined" ? (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
          integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
          crossorigin=""
        />
      </Helmet>
      <Map
        center={[28.609654, -13.92936]}
        zoom={16}
        style={{
          height: "20rem",
          width: "100%",
        }}
        className="rounded"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[28.609654, -13.92936]} icon={icon} />
      </Map>
    </>
  ) : null
}
