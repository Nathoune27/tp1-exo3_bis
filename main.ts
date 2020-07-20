let Lum = [255, 170, 85]
let X: number[] = []
for (let var1 = 0; var1 <= 4; var1++) {
    X.push(0)
}
while (true) {
    for (let Y = 0; Y <= 4; Y++) {
        for (let var2 = 0; var2 <= X[Y]; var2++) {
            led.plotBrightness(Y, X[Y] - var2, Lum[var2])
        }
        if (X[Y] <= 7) {
            X[Y] = X[Y] + 1
        } else if (randint(0, 101) > 80) {
            X[Y] = 0
        }
    }
    basic.pause(200)
}
