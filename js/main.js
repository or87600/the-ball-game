'use strict'

function onBallClick(elBall) {
    const currWidth = parseInt(window.getComputedStyle(elBall).width)
    var newDiameter = currWidth + 50
    
    if (newDiameter > 400) {
        newDiameter = 100
    }
    
    elBall.style.width = newDiameter + 'px'
    elBall.style.height = newDiameter + 'px'
    elBall.innerText = newDiameter
}
