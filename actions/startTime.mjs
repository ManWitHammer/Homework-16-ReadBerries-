const startTimer = (block, data, container) => {

  let allSec = 15

  const updateTimer = () => {
    const hours = Math.floor(allSec / 3600)
    const minutes = Math.floor((allSec % 3600) / 60)
    const seconds = allSec % 60

    const formattedTime = `${hours}:${minutes}:${seconds}`

    block.innerText = 'Акция закончится через ' + formattedTime

    if(allSec > 0) {
      allSec--
      setTimeout(updateTimer, 1000)
    }
    else if (allSec <= 0) {
      container.innerHTML = '';
      data.forEach(element => {
          container.insertAdjacentHTML(
              'beforeend',
              `
              <div class="user">
                  <div class="picture">
                      <img src="${element.picture}">
                      <div class="timer"></div>
                  </div>
                  <p class="cost">${element.cost}</p>
                  <p class="producer">${element.publisher}/<span>${element.name}</span></p>
                  <p class="producer"><span>${element.quantity}</span> в наличии</p>
              </div>
              `
          )
      })
      block.innerText = 'Акция закончена'
    }
  }
  
  updateTimer()
}
  export default startTimer