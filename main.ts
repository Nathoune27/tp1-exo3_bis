let X = 0
let Y = 0
basic.forever(function () {
    X = randint(0, 4)
    Y = randint(0, 4)
    while (Y < 8) {
        for (let var1 = 0; var1 <= 3; var1++) {
            led.plotBrightness(X, Y, 255)
            led.plotBrightness(X, Y - 1, 170)
            led.plotBrightness(X, Y - 2, 85)
            led.plotBrightness(X, Y - 3, 0)
            Y += 1
            basic.pause(200)
        }
    }
})
