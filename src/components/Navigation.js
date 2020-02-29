import React, { useState } from "react"
import { Link } from "gatsby"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap"

import logo from "../images/logo.png"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <Navbar
        color="transparent"
        dark
        expand="lg"
        fixed="top"
        className="animated fadeInDown faster"
      >
        <NavbarBrand href="/">
          <img
            src={logo}
            alt="FDR logo"
            style={{
              width: "4rem",
            }}
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to="/" className="nav-link">Home</Link>
            </NavItem>
            <NavItem>
            <Link to="/the-dogs" className="nav-link">The Dogs</Link>
            </NavItem>
            <NavItem>
            <Link to="/articles" className="nav-link">Articles</Link>
            </NavItem>
            <NavItem>
            <Link to="/about" className="nav-link">About</Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Help us
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}
