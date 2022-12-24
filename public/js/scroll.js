const setupScrooling = () => {
  const container = [...document.querySelectorAll(".movie-container"), document.getElementById('trend')]
  const nextButton = [...document.querySelectorAll(".next-btn"), document.getElementById('next-btn')]
  const previousButton = [...document.querySelectorAll(".pre-btn"), document.getElementById('pre-btn')]

  container.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect()
    let containerWidth = containerDimensions.width

    nextButton[i].addEventListener('click', () => {
      item.scrollLeft += containerWidth
    })

    previousButton[i].addEventListener('click', () => {
      item.scrollLeft -= containerWidth
    })
  })
}