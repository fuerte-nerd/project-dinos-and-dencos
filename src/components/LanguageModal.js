/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { connect } from "react-redux"
import { toggleLanguageModal } from "../state/actions"
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap"

import LanguageOption from "./LanguageOption"

const LanguageModal = props => {
  const toggle = () => {
    props.dispatch(toggleLanguageModal())
  }

  const query = useStaticQuery(graphql`
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
    }
  `)

  const {
    change_language_text,
  } = query.dictionary.childMarkdownRemark.frontmatter

  return (
    <div>
      <Button
        color={props.btnColor}
        outline
        className="py-1 px-3 mt-2 mt-lg-0 flag-icon-selected ani"
        style={{
          fontSize: ".6rem",
          marginBottom: ".1rem",
        }}
        onClick={toggle}
      >
        {props.lang.toUpperCase()}
      </Button>
      <Modal
        isOpen={props.langModalIsOpen}
        toggle={toggle}
        className="text-dark"
      >
        <ModalHeader toggle={toggle}>
          {change_language_text[props.lang]}
        </ModalHeader>
        <ModalBody>
          <LanguageOption language="Español" flag="es" lang="es" />
          <LanguageOption language="English" flag="gb" lang="en" />
          <LanguageOption language="Deutsch" flag="de" lang="de" />
          <LanguageOption language="Italiano" flag="it" lang="it" />
          <LanguageOption language="Français" flag="fr" lang="fr" />
        </ModalBody>
      </Modal>
    </div>
  )
}
const mapStateToProps = state => ({
  lang: state.language.lang,
  flag: state.language.flag,
  langModalIsOpen: state.language.langModalIsOpen,
})

export default connect(mapStateToProps)(LanguageModal)
