import { renderCountries } from "./dom-utils.js"
const API_URL = 'https://restcountries.com/v3.1/all'
const moon = document.querySelector('span i')
let countries = []
let filterCountries = []
let region = ''
let inputSearch = ''
console.log(window.location);
if(window.location.search.includes('?country=')){
    console.log('jestesm')
}
else{
fetch(API_URL)
            .then((res)=> res.json())
            .then((country) =>{
            countries =  country.map((elem,idx) => {
                const {capital,population,name:{common:country},region,flags:{png:flag}} = elem           
                // console.log(capital,population,country,region,flag);
                return {
                    capital,
                    population,
                    country,
                    region,
                    flag
                }
            })
            renderCountries(countries)
            }
            )
moon.addEventListener('click', () => {
    
    document.body.classList.toggle('dark-theme')
   
})
document.querySelector('#query').addEventListener('input',(e) => {
    inputSearch = e.target.value.toLowerCase().trim()
    // filterCountries = countries.filter((item) => item.country.toLowerCase().includes(inputSearch))
    // renderCountries(filterCountries)
    filterDataAndRender()
    
})

document.querySelector('#region').addEventListener('change',(e) =>{
    region = e.target.value
//    filterCountries =  countries.filter((item) => item.region === region)
//     renderCountries(filterCountries)
filterDataAndRender()
})
const filterDataAndRender = () => {
  
    const filterCountries = countries.filter(country => {
        return country.country.toLowerCase()
        .includes(inputSearch) && (!region || country.region === region)
    })
    renderCountries(filterCountries)
}
}
