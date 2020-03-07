import React from "react"
import Link from "./Link"
import moment from "moment"

export default function DogCard({ data }) {

    const tempLangData = {
        sex: {
            en: {
                M: 'Male',
                F: 'Female'
            }
        }
    }

    moment.relativeTimeRounding(Math.floor)
    
  return (
    <div class="col-lg-6 col-xl-4">
      <div class="card dog ani text-dark my-2">
        <img
          class="card-img-top"
          src={data.image}
          alt="Card image cap"
        />
        <div class="time-in-care position-absolute bg-light-trans rounded" style={{
            top: '.25rem',
            left: '.25rem'
        }}>
          <span class="small p-1">
            <span class="font-weight-bold">{moment(data.date_entered).toNow(true)}</span> in care
          </span>
        </div>
        <div class="card-body bg-primary text-light">
          <h3 class="card-title text-center font-weight-bold">{data.name}</h3>
        </div>

        <div class="card-body p-0">
          <table class="table table-sm table-light table-striped text-dark text-center small mb-0">
            <thead>
              <tr>
                <th>Age</th>
                <th>Sex</th>
                <th>Breed</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{
                    moment(data.dob).toNow(true)}</td>
                <td>{tempLangData.sex.en[data.sex]}</td>
                <td>{data.breed}</td>
              </tr>
            </tbody>
          </table>
          <Link
            to={`dogs/${data.slug}`}
            classes="btn btn-lg btn-block btn-success stretched-link"
          >
            <i class="mr-4 fas fa-info-circle"></i>Find out more!
          </Link>
        </div>
      </div>
    </div>
  )
}
