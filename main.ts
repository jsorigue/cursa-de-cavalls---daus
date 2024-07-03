// Programa incial
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . # # # .
        # . . . #
        . . # # .
        . . . . .
        . . # . .
        `)
    basic.pause(500)
    basic.showNumber(randint(1, 6))
})
