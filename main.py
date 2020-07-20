Lum = [255, 170, 85]
X: List[number] = []
for var1 in range(5):
    X.append(0)
while True:
    for Y in range(5):
        var2 = 0
        while var2 <= X[Y]:
            if var2 <= 4:
                led.plot_brightness(Y, X[Y] - var2, Lum[var2])
            else:
                led.plot_brightness(Y, X[Y] - var2, 0)
            var2 += 1
        if X[Y] <= 7:
            X[Y] = X[Y] + 1
        elif randint(0, 101) > 80:
            X[Y] = 0
    basic.pause(200)