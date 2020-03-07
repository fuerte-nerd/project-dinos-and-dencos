import { SET_LANGUAGE } from "./types"

export const setLanguage = lang => {
  localStorage.setItem("fdr_lang", lang)
  return {
    type: SET_LANGUAGE,
    payload: lang,
  }
}
