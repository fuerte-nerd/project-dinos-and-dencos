/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from "react"
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap"
import { connect } from "react-redux"

import LanguageOption from "./LanguageOption"

const LanguageModal = props => {
  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)
  return (
    <div>
      <Button
        className="py-0 px-1 mb-1 bg-transparent border-0 flag-icon-selected ani"
        onClick={toggle}
      >
        <span class={`flag-icon flag-icon-selected flag-icon-${props.lang}`}></span>
      </Button>
      <Modal isOpen={modal} toggle={toggle} className="text-dark">
        <ModalHeader toggle={toggle}>Change language</ModalHeader>
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
  lang: state.language.lang
})

export default connect(mapStateToProps)(LanguageModal)
