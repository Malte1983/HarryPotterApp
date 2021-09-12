// get API from URL / fetch

function fetchExample() {
  fetch('http://hp-api.herokuapp.com/api/characters')
    .then(response => response.json())
    .then(allData => {
      const other = allData[8]
      const snape = allData[7]
      allData.forEach(character => {
        generateCard(
          character.name,
          character.image,
          character.gender,
          character.hairColour,
          character.eyeColour,
          character.actor,
          character.alive,
          character.eyeColour
        )
      })
      // console.log(snape)
      // generateCard(snape.name, snape.image, snape.gender, snape.hairColour)
      // generateCard2(other.name, other.image, other.gender, other.hairColour)
    })
    .catch(error => {
      console.log('ein Fehler beim laden der API ist aufgetreten', error)
    })
}

// initialize the fetch-function

function init() {
  fetchExample()
}
init()

// render the Cards
function generateCard(name, img, gender, hair) {
  const cardSection = document.createElement('section')
  cardSection.classList.add('card__section')
  document.getElementById('mainSection').appendChild(cardSection)

  const titleName = document.createElement('h2')
  titleName.classList.add('card__name')
  cardSection.appendChild(titleName)
  titleName.innerText = name

  const potraitImage = document.createElement('img')
  potraitImage.classList.add('card__portrait')
  cardSection.appendChild(potraitImage)
  potraitImage.setAttribute('src', img)
  potraitImage.setAttribute('width', 280)

  const tableData = document.createElement('table')
  tableData.classList.add('card__table')
  cardSection.appendChild(tableData)

  const tableMain = document.createElement('tr')
  tableData.appendChild(tableMain)

  const tableHead1 = document.createElement('th')
  tableHead1.classList.add('card__tablehead')
  tableMain.appendChild(tableHead1)
  tableHead1.textContent = 'Gender'

  const tableHead2 = document.createElement('th')
  tableHead2.classList.add('card__tablehead')
  tableMain.appendChild(tableHead2)
  tableHead2.textContent = 'Haircolour'

  const tableMain2 = document.createElement('tr')
  tableData.appendChild(tableMain2)

  const tableItem1 = document.createElement('td')
  tableMain2.appendChild(tableItem1)
  tableItem1.innerText = gender

  const tableItem2 = document.createElement('td')
  tableMain2.appendChild(tableItem2)
  tableItem2.innerText = hair
}

// render the Cards
function generateCard2(name, img, gender, hair) {
  const cardSection = document.createElement('section')
  cardSection.classList.add('card__section')
  document.getElementById('mainSection2').appendChild(cardSection)

  const titleName = document.createElement('h2')
  titleName.classList.add('card__name')
  cardSection.appendChild(titleName)
  titleName.innerText = name

  const potraitImage = document.createElement('img')
  potraitImage.classList.add('card__portrait')
  cardSection.appendChild(potraitImage)
  potraitImage.setAttribute('src', img)
  potraitImage.setAttribute('width', 280)

  const tableData = document.createElement('table')
  tableData.classList.add('card__table')
  cardSection.appendChild(tableData)

  const tableMain = document.createElement('tr')
  tableData.appendChild(tableMain)

  const tableHead1 = document.createElement('th')
  tableHead1.classList.add('card__tablehead')
  tableMain.appendChild(tableHead1)
  tableHead1.textContent = 'Gender'

  const tableHead2 = document.createElement('th')
  tableHead2.classList.add('card__tablehead')
  tableMain.appendChild(tableHead2)
  tableHead2.textContent = 'Haircolour'

  const tableMain2 = document.createElement('tr')
  tableData.appendChild(tableMain2)

  const tableItem1 = document.createElement('td')
  tableMain2.appendChild(tableItem1)
  tableItem1.innerText = gender

  const tableItem2 = document.createElement('td')
  tableMain2.appendChild(tableItem2)
  tableItem2.innerText = hair
}
