const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const dropdown = document.getElementById('breed-dropdown')


function fetchPic() {
    fetch(imgUrl)
    .then(function(resp) {
        return resp.json()
    })
    .then(function(json) {
        dogPics(json.message)        
    })
  }

function dogPics(imgArray) {
const container = document.getElementById('dog-image-container')
imgArray.forEach(image => {
    const img = document.createElement('img')
    img.src = image
    img.style = "max-width: 22%"
    container.appendChild(img)
})
}

//challenge 2

function dogBreeds() {
    fetch(breedUrl)
    .then(function(resp) {
        return resp.json()
    })
    .then(function(json) {
        breedList(json.message)
    })
}

function breedList(list) {
    for (const key in list) {
        const ul = document.getElementById('dog-breeds')
        const li = document.createElement('li')
        li.innerHTML = key
        ul.appendChild(li)
    }
    
    changeColor()
}

// change color

function changeColor() {
    const listElements = document.getElementsByTagName('li');
    for (let i = 0; i < listElements.length; i++) {
        listElements[i].addEventListener('click', function(event) {
            listElements[i].style.color = "red"
        })
    }
}

function sortedDogBreeds() {
    fetch(breedUrl)
    .then(function(resp) {
        return resp.json()
    })
    .then(function(json) {
        sortedBreedList(json.message)
    })
}

function sortedBreedList(list) {

    for (const key in list) {
        if (key.startsWith(dropdown.value)) {
            const ul = document.getElementById('dog-breeds')
            const li = document.createElement('li')
            li.innerHTML = key
            ul.appendChild(li)
        }
    }
    changeColor()
}

function sortByLetter() {
    dropdown.addEventListener('change', function() {
        const ul = document.getElementById('dog-breeds')
        ul.innerText = ""
        sortedDogBreeds()
    })
}

  document.addEventListener('DOMContentLoaded', function() {
    fetchPic()
    dogBreeds()
    sortByLetter()
  })



