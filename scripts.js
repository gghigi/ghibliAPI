const app = document.getElementById('root')

const logo = document.createElement('img')
logo.src = 'ghibli_logo_gold.png'

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)

var request = new XMLHttpRequest()
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
    data.forEach((movie) => {
      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      const h1 = document.createElement('h1')
      h1.textContent = movie.title 

      const p = document.createElement('p')
      movie.description = movie.description.substring(0, 300)
      p.textContent = `${movie.description}...`

      const h5 = document.createElement('h5')
      h5.textContent = movie.director

      const h6 = document.createElement('h6')
      h6.textContent = movie.release_date	


      container.appendChild(card)
      card.appendChild(h1)
      card.appendChild(p)
      card.appendChild(h5)
      card.appendChild(h6)
    })
  } else {
    const errorMessage = document.createElement('p')
    errorMessage.textContent = `Gah, it's not working!`
    app.appendChild(errorMessage)
  }
}

request.send()



