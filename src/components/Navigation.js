import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { useStaticQuery, graphql } from "gatsby"
import { toggleNav, setNavState } from "../state/actions"
import Link from "./Link"

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
  const data = useStaticQuery(graphql`
    query {
      dictionary: file(name: { eq: "dictionary" }) {
        childMarkdownRemark {
          frontmatter {
            change_language_text {
              en
              fr
              de
              it
              es
            }
          }
        }
      }
      social_media: file(
        name: { eq: "social_media" }
        sourceInstanceName: { eq: "content" }
      ) {
        childMarkdownRemark {
          frontmatter {
            facebook_username
            instagram_username
            find_us_text {
              en
              es
              de
              it
              fr
            }
          }
        }
      }
      language_selector: file(
        name: { eq: "language_selector" }
        sourceInstanceName: { eq: "content" }
      ) {
        childMarkdownRemark {
          frontmatter {
            change_language_text {
              en
              es
              de
              it
              fr
            }
          }
        }
      }
      labels: file(
        name: { eq: "labels" }
        sourceInstanceName: { eq: "content" }
      ) {
        childMarkdownRemark {
          frontmatter {
            home {
              en
              es
              de
              it
              fr
            }
            the_dogs {
              en
              es
              de
              it
              fr
            }
            articles {
              en
              es
              de
              it
              fr
            }
            about {
              en
              es
              de
              it
              fr
            }
            help_us {
              en
              es
              de
              it
              fr
            }
            adopt {
              en
              es
              de
              it
              fr
            }
            foster {
              en
              es
              de
              it
              fr
            }
            donate {
              en
              es
              de
              it
              fr
            }
            volunteer {
              en
              es
              de
              it
              fr
            }
            contact {
              en
              es
              de
              it
              fr
            }
          }
        }
      }
    }
  `)

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    props.dispatch(toggleNav())
  }

  useEffect(() => {
    setIsOpen(props.navIsOpen)
  }, [props.navIsOpen])

  useEffect(() => {
    props.dispatch(setNavState(false))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [responsiveClasses, setResponsiveClasses] = useState({
    nav: "",
    navBrand: "",
    collapse: "",
    navBrandLogo: "",
    togglerIcon: "",
    navLink: "",
    dropdown: "",
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
          dropdown: "small",
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
          newData.dropdown = "small"
        }
      }

      setResponsiveClasses(newData)
    }
    window.addEventListener("scroll", checkWindowState)
    window.addEventListener("resize", checkWindowState)
    checkWindowState()

    props.dispatch(setNavState(false))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => {
      window.removeEventListener("scroll", checkWindowState)
      window.removeEventListener("resize", checkWindowState)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const {
    home,
    the_dogs,
    articles,
    about,
    help_us,
    adopt,
    foster,
    donate,
    volunteer,
    contact,
  } = data.labels.childMarkdownRemark.frontmatter

  const {
    find_us_text,
    facebook_username,
    instagram_username,
  } = data.social_media.childMarkdownRemark.frontmatter

  const {
    change_language_text,
  } = data.dictionary.childMarkdownRemark.frontmatter
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
                {home[props.lang]}
              </Link>
            </NavItem>
            <NavItem>
              <Link to="the-dogs" classes="nav-link">
                {the_dogs[props.lang]}
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/articles" classes="nav-link">
                {articles[props.lang]}
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/about" classes="nav-link">
                {about[props.lang]}
              </Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                {help_us[props.lang]}
              </DropdownToggle>
              <DropdownMenu right>
                <Link
                  to="/adopt"
                  classes={`${responsiveClasses.dropdown} dropdown-item d-flex justify-content-between align-items-center`}
                >
                  <span>{adopt[props.lang]}</span>
                  <i class="fas fa-paw" />
                </Link>
                <Link
                  to="/foster"
                  classes={`${responsiveClasses.dropdown} dropdown-item d-flex justify-content-between align-items-center`}
                >
                  <span>{foster[props.lang]}</span>
                  <i class="fas fa-bone"></i>
                </Link>
                <Link
                  to="/donate"
                  classes={`${responsiveClasses.dropdown} dropdown-item d-flex justify-content-between align-items-center`}
                >
                  <span>{donate[props.lang]}</span>
                  <i class="fas fa-donate"></i>
                </Link>

                <Link
                  to="/volunteer"
                  classes={`${responsiveClasses.dropdown} dropdown-item d-flex justify-content-between align-items-center`}
                >
                  <span>{volunteer[props.lang]}</span>
                  <i class="fas fa-hands-helping"></i>
                </Link>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <Link to="/contact" classes="nav-link">
                {contact[props.lang]}
              </Link>
            </NavItem>
            <div
              className={`${responsiveClasses.navLink} d-lg-none p-3 border-top border-bottom`}
            >
              <small className="d-block font-weight-bold mb-2">
                {find_us_text[props.lang]}
              </small>
              <div class="d-flex justify-content-center">
                <a
                  href={`https://www.facebook.com/${facebook_username}`}
                  className="btn rounded-circle social social-sm social-facebook"
                >
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a
                  href={`https://www.instagram.com/${instagram_username}`}
                  color={null}
                  class="ml-2 btn rounded-circle social social-sm social-instagram"
                >
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            <small
              className={`${responsiveClasses.navLink} d-block d-lg-none mt-3 font-weight-bold`}
            >
              {change_language_text[props.lang]}
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
