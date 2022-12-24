
fetch(trending_movies_http + new URLSearchParams({
  api_key: api_key
}))
.then(res => res.json())
.then( data => {
  data.results.forEach(data => {
    fetchTrend(data.backdrop_path, data.title)
  });
  console.log(data.results[0].title)
});

const fetchTrend = (backdrop_path, title) => {
  fetch(trending_movies_http + new URLSearchParams({
    api_key: api_key,
  }))
  .then(res => res.json())
  .then(data => {
    makeTrend(backdrop_path, title)
  })
  .catch(err => console.log(err))
}

const makeTrend = (backdrop_path, title) => {
  const id = 'trend'
  const trend = document.getElementById(id)

    trend.innerHTML += `
    
      <div class="movie-list movie">
        <img src="${img_url}${backdrop_path}" alt="poster">
        <p class="movie-title"> ${title} </p>
      </div>
    

    `
}
