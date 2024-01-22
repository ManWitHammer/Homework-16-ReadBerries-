const startTimer = (element) => {

    let allSec = 86400
  
    const updateTimer = () => {
      const hours = Math.floor(allSec / 3600)
      const minutes = Math.floor((allSec % 3600) / 60)
      const seconds = allSec % 60
  
      const formattedTime = `${hours}:${minutes}:${seconds}`
  
      element.innerText = 'Акция закончится через '+formattedTime
  
      if(allSec > 0) {
        allSec--
        setTimeout(updateTimer, 1000)
      }
    }
    
    updateTimer()
  }

  export default startTimer