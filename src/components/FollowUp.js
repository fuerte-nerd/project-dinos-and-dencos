import React from "react"
import Link from "./Link"
import PageShare from "./PageShare"

export default function FollowUp() {
  return (
    <div class="dog-follow-up container rounded py-3 my-4 text-center">
      <h3 class="font-weight-bold">Can you help Rafael?</h3>
      <div class="row">
        <div class="col">
          <Link
            page="adopt"
            classes="btn btn-block btn-light font-weight-bold py-4"
          >
            <i class="d-block display-4 fas fa-paw"></i>Adopt
            <span class="d-block font-weight-normal small">
              Find out more about the adoption process
            </span>
          </Link>
        </div>
        <div class="col">
          <a
            href="/foster"
            class="btn btn-block btn-light font-weight-bold py-4"
          >
            <i class="d-block display-4 fas fa-bone"></i>Foster
            <span class="d-block font-weight-normal small">
              Find out more about the fostering process
            </span>
          </a>
        </div>
      </div>
      <p class="lead pt-4">
        If you can't adopt or foster but still want to help, you can! Please
        help us to spread the word about Rafael by using the buttons below...
      </p>
      <PageShare />
      <a href="/the-dogs" class="btn btn-primary mt-4 font-weight-bold p-3">
        <i class="mr-3 fas fa-dog"></i>Back to the dogs!
      </a>
    </div>
  )
}
