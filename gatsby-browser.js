export { default as wrapRootElement } from "./src/state/reduxWrapper"
require("typeface-comfortaa")
require("typeface-spartan")

export const onClientEntry = () => {
  window.onload = () => {
    console.log("we are ready to rock")
  }
}

// export const onClientEntry = () => {
//     // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
//     if (!(`IntersectionObserver` in window)) {
//       require(`intersection-observer`)
//       console.log(`# IntersectionObserver is polyfilled!`)
//     }
//   }
