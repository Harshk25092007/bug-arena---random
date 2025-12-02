// Random Algorithm - bug will turn a random number of degrees every 5 seconds or when it bumps into a wall.
hourOfAi.every(5000, function () {
    hourOfAi.turnBy(randint(-360, 180))
})
hourOfAi.onBumpWall(function () {
    hourOfAi.turnBy(randint(-360, 180))
})
