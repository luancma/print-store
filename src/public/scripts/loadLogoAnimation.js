export const loadAnimation = () => {
  const imgElement = document.querySelector('.image-element')
  const addInitAnimation = () => {
    imgElement.classList.add('showAnimation')
  }
  window.addEventListener('load', addInitAnimation)
}

loadAnimation()
