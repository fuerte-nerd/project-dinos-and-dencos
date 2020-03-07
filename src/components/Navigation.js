import React, { useState, useEffect, useRef } from "react"
import { TransitionPortal } from "gatsby-plugin-transition-link"
import { toggleNav, setNavState } from "../state/actions"
import Link from "./Link"

import { connect } from "react-redux"

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap"

import LanguageModal from "./LanguageModal"

import logo from "../images/logo.png"

function Navigation(props) {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    props.dispatch(toggleNav())
  }

  useEffect(() => {
    setIsOpen(props.navIsOpen)
  }, [props.navIsOpen])

  useEffect(() => {
    props.dispatch(setNavState(false))
  }, [])

  const [responsiveClasses, setResponsiveClasses] = useState({
    nav: "",
    navBrand: "",
    collapse: "",
    navBrandLogo: "",
    togglerIcon: "",
    navLink: "",
  })

  useEffect(() => {
    const checkWindowState = () => {
      let newData = Object.assign({}, responsiveClasses)
      if (window.scrollY > 0) {
        newData = {
          nav: "bg-white navbar-light shadow py-1",
          navBrand: "nav-shrink p-0",
          collapse: "text-dark small",
          navBrandLogo: "nav-shrink",
          togglerIcon: "",
          navLink: "text-dark ",
        }
        if (window.innerWidth < 992) {
          newData.collapse = "small p-2 text-center"
        }
      } else {
        newData = {
          nav: "bg-transparent navbar-dark",
          navBrand: "pt-2",
          collapse: "text-light",
          navBrandLogo: "",
          togglerIcon: "navbar-toggler-icon-zero",
          navLink: "",
        }
        if (window.innerWidth < 992) {
          newData.collapse = "bg-dark small p-2 text-center"
        }
      }

      setResponsiveClasses(newData)
    }
    window.addEventListener("scroll", checkWindowState)
    window.addEventListener("resize", checkWindowState)
    checkWindowState()

    return () => {
      window.removeEventListener("scroll", checkWindowState)
      window.removeEventListener("resize", checkWindowState)
    }
  }, [])

  return (
    <div>
      <Navbar expand="lg" fixed="top" className={`${responsiveClasses.nav}`}>
        <Link to="/" classes={`${responsiveClasses.navBrand} navbar-brand`}>
          <img
            src={logo}
            alt="FDR logo"
            style={{
              width: "4rem",
            }}
            className={`${responsiveClasses.navBrandLogo} ani`}
          />
        </Link>
        <NavbarToggler
          onClick={toggle}
          className={`bg-primary ani ${responsiveClasses.togglerIcon}`}
        />
        <Collapse isOpen={isOpen} navbar>
          <Nav className={`ani ${responsiveClasses.collapse} ml-auto`} navbar>
            <NavItem>
              <Link to="/" classes="nav-link">
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link to="the-dogs" classes="nav-link">
                The Dogs
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/articles" classes="nav-link">
                Articles
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/about" classes="nav-link">
                About
              </Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Help us
              </DropdownToggle>
              <DropdownMenu right>
                <Link
                  to="/adopt"
                  classes="dropdown-item d-flex justify-content-between align-items-center"
                >
                  <span>Adopt</span>
                  <i class="fas fa-paw" />
                </Link>
                <Link
                  to="/foster"
                  classes="dropdown-item d-flex justify-content-between align-items-center"
                >
                  <span>Foster</span>
                  <i class="fas fa-bone"></i>
                </Link>
                <Link
                  to="/donate"
                  classes="dropdown-item d-flex justify-content-between align-items-center"
                >
                  <span>Donate</span>
                  <i class="fas fa-donate"></i>
                </Link>

                <Link
                  to="/volunteer"
                  classes="dropdown-item d-flex justify-content-between align-items-center"
                >
                  <span>Volunteer</span>
                  <i class="fas fa-hands-helping"></i>
                </Link>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <Link to="/contact" classes="nav-link">
                Contact
              </Link>
            </NavItem>
            <div
              className={`${responsiveClasses.navLink} d-lg-none p-3 border-top border-bottom`}
            >
              <small className="d-block font-weight-bold mb-2">
                Find us on...
              </small>
              <div class="d-flex justify-content-center">
                <a
                  href="#"
                  class="btn rounded-circle social social-sm social-facebook"
                >
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
            <small
              className={`${responsiveClasses.navLink} d-block d-lg-none mt-3 font-weight-bold`}
            >
              Change language
            </small>
            <li className="nav-item mt-lg-0 d-flex align-items-center justify-content-center">
              <LanguageModal />
            </li>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

const mapStateToProps = state => ({
  lang: state.language.lang,
  navIsOpen: state.navigation.navIsOpen,
})

export default connect(mapStateToProps)(Navigation)
