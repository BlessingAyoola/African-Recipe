const getElement = (selector) => {
  const element = document.querySelector(selector)

 

const links = getElement('.nav-links')

}

const date = getElement('#date')
const currentYear = new Date().getFullYear()
date.textContent = currentYear
