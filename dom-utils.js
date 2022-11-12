
const createCountryElement = (country) => {
   
    const {capital, country:nameCountry, flag,population,region} = country
    const countryElement = document.createElement('li')
    countryElement.className = 'card'
  
    countryElement.innerHTML = `
    <a href="?country=${nameCountry}">
     <img src="${flag}" />
     <h2 class="country__name">
        ${nameCountry}
     </h2>
     <div class="country__info"> 
        <p> Population:<span>${population} </span> </p>
        <p> Region:<span>${region} </span> </p>
        <p> Capitol:<span>${capital} </span> </p>
     </div>
     </a>
    `
    return countryElement

}
const createListElement = (countries) => {
    const listElement = document.createElement('ul')
    listElement.className = 'countries__wrapper'
    countries.forEach((country) => {
        listElement.appendChild(createCountryElement(country))
    })
    return listElement

}

export const renderCountries = (countries) => {
    const rootElement = document.querySelector('#root')
    const ul = rootElement.querySelector('.countries__wrapper')
      ul && ul.remove()
     console.log(ul);
    rootElement.appendChild(createListElement(countries))
   
}