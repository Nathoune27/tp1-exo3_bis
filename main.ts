let Lum: number[] = []
let X = 0
let Y = 0
basic.forever(function () {
    Lum = [255, 170, 85, 0]
    X = randint(0, 4)
    Y = randint(0, 4)
    while (Y < 8) {
        for (let I = 0; I <= 3; I++) {
            led.plotBrightness(X, Y - I, Lum[I])
        }
        Y += 1
        basic.pause(200)
    }
})
