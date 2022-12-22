const setupScrooling = () => {
  const container = [...document.querySelectorAll(".movie-container")]
  const nextButton = [...document.querySelectorAll(".next-btn")]
  const previousButton = [...document.querySelectorAll(".pre-btn")]

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