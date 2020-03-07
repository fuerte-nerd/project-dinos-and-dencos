import {
  SET_LANGUAGE,
  TOGGLE_LANGUAGE_MODAL,
  TOGGLE_NAV,
  SET_NAV_STATE,
} from "./types"

export const setLanguage = lang => {
  localStorage.setItem("fdr_lang", lang)
  return {
    type: SET_LANGUAGE,
    payload: lang,
  }
}

export const toggleNav = () => ({
  type: TOGGLE_NAV,
})

export const setNavState = (state) => ({
  type: SET_NAV_STATE,
  payload: state
})

export const toggleLanguageModal = () => ({
  type: TOGGLE_LANGUAGE_MODAL,
})
