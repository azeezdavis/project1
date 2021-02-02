const API_key = '025c343eb90aee11b7d5fa6b6fcb74f5' ;
const url = 'https://api.themoviedb.org/3/search/movie?api_key=025c343eb90aee11b7d5fa6b6fcb74f5&query=furious'

//select elements from the DOM

let buttonEl = document.querySelector('#search')
let inputEl = document.querySelector('#inputValue')

buttonEl.onclick = function(event) {
    event.preventDefault();
    const value = inputEl.value;

    let newUrl = url + '&jquery=' + value;

    fetch(newUrl)
    .then((res) => res.json())
    .then((data)=> {
        console.log('Data :', data);
    })
    .catch((error) => {
        console.log('Error :',error);
    });
    console.log('value :', value);
}