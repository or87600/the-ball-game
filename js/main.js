'use strict'

function onBallClick(elBall) {
    const currWidth = parseInt(window.getComputedStyle(elBall).width)
    const newDiameter = currWidth + 50

    elBall.style.width = newDiameter + 'px'
    elBall.style.height = newDiameter + 'px'
    elBall.innerText = newDiameter
}
