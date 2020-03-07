import { SET_LANGUAGE, TOGGLE_LANGUAGE_MODAL } from "./types"

export const setLanguage = lang => {
  localStorage.setItem("fdr_lang", lang)
  return {
    type: SET_LANGUAGE,
    payload: lang,
  }
}

export const toggleLanguageModal = ()=>({
  type: TOGGLE_LANGUAGE_MODAL,
})