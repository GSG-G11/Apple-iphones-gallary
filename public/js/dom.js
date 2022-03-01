


const inputSearch = document.querySelector('#form');
const container = document.querySelector('.contentImg')
const inputValue = document.querySelector('#input')



inputSearch.addEventListener('submit', (e)=>{
    e.preventDefault();
    container.textContent = '';
    const search = e.target.querySelector('input').value;
    fetch(`/phone?search=${search}`)
    .then(data => data.json())
    .then(data=> {

        const image = document.createElement('img')
        image.src = data.data.phones[0].image
        container.appendChild(image)
        inputValue.value = '';

        const name = document.createElement('span')
        name.innerText = data.data.phones[0].phone_name;
        container.appendChild(name)
        

        
        // const release_date = document.createElement('span')
        // release_date.innerText = data.data.phones[0].detail.os;
        // console.log(data.data.phones[0].detail);
        // container.appendChild(release_date)


    })



    // .then(data => {const image = document.createElement('img')
    // .then(data => console.log(data))
    //  image.src = data.image
    //  container.appendChild(image)
    //  inputValue.value = '';


    })
    


// inputSearch.addEventListener('submit', (e)=>{
//     e.preventDefault();
//     const search = e.target.querySelector('input').value;
//     fetch(`/phone?search=${search}`)
//     .then(data => data.json())
//     .then(data => {const image = document.createElement('img')
//      image.src = data
//      container.appendChild(image)
//     })
    
// })