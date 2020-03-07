import React from "react"
import Helmet from "react-helmet"

import logo from "../images/logo.png"

import LeafletMap from "./LeafletMap"

export default function Footer(props) {
  return props.show ? (
    <footer class="bg-dark py-3">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 text-center text-lg-left pb-3 pb-lg-0">
            <img src={logo} width="150" alt="FDR Logo" />
            <p class=" pt-3 pb-0 pb-lg-3">
              <span class="d-block font-weight-bold">
                Fuerteventura Dog Rescue
              </span>
              <span class="d-block">Calle Juan Cabrera Méndez</span>
              <span class="d-block">La Oliva</span>
              <span class="d-block">36540</span>
              <span class="d-block">Fuerteventura</span>
            </p>

            <div class="pt-2 py-lg-0">
              <a href="mailto:info@fuerteventuradogrescue.org">
                <i class="fas fa-envelope d-block d-lg-inline-block"></i>
                <span class="ml-3">info@pfuerteventuradogrescue.org</span>
              </a>
            </div>
          </div>
          <div class="col-lg-6">
            <Helmet>
              <link
                rel="stylesheet"
                href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
                integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
                crossorigin=""
              />
            </Helmet>
            <LeafletMap />
          </div>
        </div>
        <small class="text-center d-block mt-4">
          Registered Charity in the Canary Islands since April 2013
        </small>
        <small class="text-center d-block">G1/S1/19399-13/F</small>
        <small class="text-center d-block text-muted mt-1">
          Website by <a href="mailto:fuertenerd@gmail.com">Fuertenerd</a>
        </small>
      </div>
    </footer>
  ) : null
}
