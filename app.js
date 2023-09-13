

let countryName = [
    {
        name:'america'
    },
    {
        name:'ambania'
    },
    {
        name:'russia'
    },
    {
        name:'romania'
    },
    {
        name:'turkey'
    },
    {
        name:'thailand'
    },
    {
        name:'taiwan'
    },
    {
        name:'tasania'
    },
    
]

const inputValue = document.getElementById('input-values')

console.log(inputValue)
const formContainer = document.getElementsByClassName('form-container')[0];

inputValue.addEventListener('input',searchedTheWord)


function searchedTheWord(){

    removeAutocompleteDropDown()
let theword = inputValue.value

if(theword.length == 0) return
let filteredNames = []

 countryName.forEach((country)=>{

    if(country.name.substr(0,theword.length) === theword) {
        filteredNames.push(country.name)
    }
    
})

createElementsFn(filteredNames)
}

function createElementsFn(list){

    const ul = document.createElement('ul')

    ul.className = 'ul-list'

    list.forEach((names)=>{

        const li = document.createElement('li')
        const btn = document.createElement('button')

        btn.innerHTML = names;

        li.appendChild(btn)
        ul.appendChild(li)
    })

    formContainer.appendChild(ul)
}

function removeAutocompleteDropDown(){
const ul = document.querySelector('.ul-list')

if(ul){
    ul.remove();
}
}