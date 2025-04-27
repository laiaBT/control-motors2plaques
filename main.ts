radio.onReceivedNumber(function (receivedNumber) {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # # . # #
        . # # # .
        `)
    if (receivedNumber == 1) {
        microshield.MotorRun(microshield.Motors.M1, -70)
        microshield.MotorRun(microshield.Motors.M4, -70)
    } else if (receivedNumber == 2) {
        microshield.MotorStop(microshield.Motors.M1)
        microshield.MotorStop(microshield.Motors.M4)
    } else if (receivedNumber == 3) {
        microshield.MotorRun(microshield.Motors.M1, 0)
        microshield.MotorRun(microshield.Motors.M4, -70)
    } else if (receivedNumber == 4) {
        microshield.MotorRun(microshield.Motors.M1, -70)
        microshield.MotorRun(microshield.Motors.M4, 0)
    } else if (receivedNumber == 5) {
        microshield.MotorRun(microshield.Motors.M1, 70)
        microshield.MotorRun(microshield.Motors.M4, 70)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(2)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(4)
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(3)
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(5)
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
})
radio.setGroup(1)
microshield.MotorRun(microshield.Motors.M1, 0)
microshield.MotorRun(microshield.Motors.M4, 0)
