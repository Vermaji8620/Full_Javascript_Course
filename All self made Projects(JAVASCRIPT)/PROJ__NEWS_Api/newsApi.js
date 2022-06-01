console.log("data")
fetcher = () => {

  fetch(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=100cb9d378fc437d990f16bfc22c9232`).then((response) => {
    let responsee = response.json()
    return responsee//jo kuch v net se fetch kiya jata, usko hm js language me, (.json) me convert krke use krte hai
  }).then((data) => {
    let articlee = data.articles
    let html = ""
    for (individualdata in articlee) {
      // console.log(articlee[individualdata])
      html +=  `<hr><strong>heading:</strong> ${articlee[individualdata]["title"]} <br>
                <strong>url:</strong><a href=${articlee[individualdata]["content"]}> ${articlee[individualdata]["url"]} </a><hr>`
    }
    (document.getElementById('taker')).innerHTML = html
  })
}

document.getElementById('btn').addEventListener('click', (e) => {
  console.log("data fetching on process")
  fetcher()
  console.log("data fetched successfully")
  // e.preventDefault()
})

