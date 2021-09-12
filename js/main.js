function fetchData() {
  fetch('http://hp-api.herokuapp.com/api/characters')
    .then(response => response.json())
    .then(allData => {
      const html = allData
        .map(person => {
          return `
              <div class ='person'>
              <p class="imagePerson"><img src="${person.image}" alt="" width="150" height="auto"  /></p>
              <p>Name: ${person.name}</p>
              <p>House: ${person.house}</p>
              <p>Birthday: ${person.dateOfBirth}</p>
               <p>Eyecolour: ${person.eyeColour}</p>
               <p>Patronus: ${person.patronus}</p>

              </div>`
        })
        .join('')
      document
        .querySelector('#mainSection')
        .insertAdjacentHTML('afterbegin', html)
    })
    .catch(error => {
      console.log('ein Fehler beim laden der API ist aufgetreten', error)
    })
}
fetchData()
