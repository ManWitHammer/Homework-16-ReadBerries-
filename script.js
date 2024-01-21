const getData = url =>
    new Promise((resolve, reject) =>
        fetch(url)
            .then(response => response.json())
            .then(json => resolve(json))
            .catch(error => reject(error))
    )

const container = document.querySelector('.container')

getData('http://localhost:3000/PRODUCTS')
    .then(data => {
        data.forEach(element => {
            if (element.name.length > 30) {
                element.name = element.name.slice(0, 30) + '...'
            }
            console.log(element.name.length)
            container.insertAdjacentHTML(
                'beforeend',
                `
                <div class="user">
                    <div class="picture">
                        <img src="${element.picture}">
                    </div>
                    <p class="cost">${(element.cost - element.cost*0.25).toFixed(2)}ㅤ<span style="text-decoration: line-through;">${element.cost}</span></p>
                    <p class="producer">${element.publisher}/<span>${element.name}</span></p>
                    <p class="producer"><span>${element.quantity}</span> в наличии</p>
                </div>
                `
            )
        })
    })
    .catch(err => console.log(err))