import React from "react"

import Layout from "../components/layout"
import Spacer from "../components/ContentSpacer"
import PageShare from "../components/PageShare"
import PhotoGallery from "../components/PhotoGallery"
import FollowUp from "../components/FollowUp"

import img from "../images/rafael-profile.jpg"

export default function Dog() {
  return (
    <Layout showFooter={true}>
      <Spacer />
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-lg-6">
            <img
              src={img}
              alt="Rafael"
              className="w-100 rounded border animated delay-1s fadeIn"
            />
          </div>
          <div className="col-lg-6">
            <div className="card bg-light animated my-3 my-lg-0 shadow fadeIn delay-1s fast">
              <div className="card-body p-0">
                <h1 className="card-title bg-primary py-3 font-weight-bold text-light text-center mb-0 rounded-top">
                  Rafael
                </h1>
                <table className="table table-light table-striped text-dark mb-0 table-bordered table-sm small">
                  <tbody>
                    <tr>
                      <th>Age</th>
                      <td class="text-center">1 year</td>
                    </tr>
                    <tr>
                      <th>Sex</th>
                      <td class="text-center">Male</td>
                    </tr>
                    <tr>
                      <th>Breed</th>
                      <td class="text-center">Bardino</td>
                    </tr>
                    <tr>
                      <th>Size</th>
                      <td class="text-center">Medium</td>
                    </tr>
                    <tr>
                      <th>Location</th>
                      <td class="text-center">The shelter</td>
                    </tr>
                    <tr>
                      <th>Time in care</th>
                      <td class="text-center">13 days</td>
                    </tr>
                    <tr>
                      <th>Dog-friendly?</th>
                      <td class="text-center">Yes</td>
                    </tr>
                    <tr>
                      <th>Cat-friendly?</th>
                      <td class="text-center">Yes</td>
                    </tr>
                    <tr>
                      <th>Family-friendly?</th>
                      <td class="text-center">Yes</td>
                    </tr>
                    <tr>
                      <th>
                        Licence required?{" "}
                        <small class="font-italic">(What is this?)</small>
                      </th>
                      <td class="text-center">No</td>
                    </tr>
                    <tr>
                      <th>
                        Sterilised?{" "}
                        <small class="font-italic">(More info)</small>
                      </th>
                      <td class="text-center">No</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="p-2 mt-3 animated fadeIn delay-1s">
          <div className="text-center">
            <div className="mb-2">
              <p className="font-weight-bold mb-0">Share</p>
              <p>
                <small>
                  Please help us to find a home for Rafael by sharing this page
                  with your friends! Thank you
                </small>
              </p>
            </div>
            <PageShare />
          </div>
        </div>
      </div>
      <div className="bg-light text-dark py-5 my-4 shadow">
        <div className="container">
          <p className="lead text-center font-weight-bold mb-0">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
            asperiores quae reiciendis fuga atque et sed?
          </p>
        </div>
      </div>
      <div className="container">
          <div className="dog-description py-3 text-justify">
              <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt velit consequatur voluptate, libero, magni doloribus minima temporibus modi quae tempore quo beatae possimus! Ut laudantium quae tempora obcaecati. Atque consectetur laboriosam aliquam repudiandae. Necessitatibus ipsam laudantium, corporis esse perspiciatis rem. Tempore, maiores sit. Earum fugit aspernatur veritatis dolorum placeat magnam, iusto, provident consequatur veniam laudantium blanditiis perferendis, quidem doloremque aperiam sapiente. Rem officiis inventore quis minus est vero aut praesentium?
              </p>
          </div>
          <PhotoGallery />
          <FollowUp />
      </div>
    </Layout>
  )
}
