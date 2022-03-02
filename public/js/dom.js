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
        image.src = data.data.phone_images[0]
        container.appendChild(image)
        inputValue.value = '';
        
        const name = document.createElement('span')
        name.innerText = data.data.phone_name;
        // name.style.backgroundColor = 'black'
        container.appendChild(name)
        

        
        const os = document.createElement('span')
        os.innerText = data.data.os;
        // os.style.backgroundColor= 'black'
        container.appendChild(os)
        
        const dimension = document.createElement('span')
        dimension.innerText = data.data.dimension;
        // dimension.style.backgroundColor = 'black'
        container.appendChild(dimension)

        const release_date = document.createElement('span')
        release_date.innerText = data.data.release_date;
        // release_date.style.backgroundColor = 'black'
        container.appendChild(release_date)

        const storage = document.createElement('span')
        storage.innerText = data.data.storage;
        // storage.style.backgroundColor = 'black'
        container.appendChild(storage)

    })


})