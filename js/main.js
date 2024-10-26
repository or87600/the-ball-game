'use strict'

function onBallClick(elBall) {
    const currWidth = parseInt(window.getComputedStyle(elBall).width)
    const randSize = getRandomIntInclusive(20, 50)
    var newDiameter = currWidth + randSize
    
    if (newDiameter > 400) {
        newDiameter = 100
    }
    
    elBall.style.width = newDiameter + 'px'
    elBall.style.height = newDiameter + 'px'
    elBall.innerText = newDiameter
}
