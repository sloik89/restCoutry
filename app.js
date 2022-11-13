import {renderView} from './view-dashboard.js'
import {viewSingleCountry} from './view-country.js'
let darkTheme = false
const moon = document.querySelector('header i')
if(localStorage.getItem('darkTheme') === 'true'){
    document.body.className = 'dark-theme'
}
moon.addEventListener('click',() => {
    darkTheme = !darkTheme
    localStorage.setItem('darkTheme',darkTheme)
    if(localStorage.getItem('darkTheme') === 'true'){
         document.body.className = 'dark-theme'
    }else{
        document.body.className = ''
    }
})

console.log(window.location);

const local = localStorage.getItem('darkTheme')
console.log(local);
if(window.location.search.includes('?country=')){
    viewSingleCountry(darkTheme)
} else {
    renderView(darkTheme)
}

