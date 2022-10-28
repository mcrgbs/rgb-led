let blue = 0
let green = 0
let red = 0
let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
basic.forever(function () {
    red = 0
    green = 0
    blue = 255
    for (let index = 0; index < 255; index++) {
        red += 1
        blue += -1
        strip.showColor(neopixel.rgb(red, green, blue))
        basic.pause(1)
    }
    for (let index = 0; index < 255; index++) {
        green += 1
        red += -1
        strip.showColor(neopixel.rgb(red, green, blue))
        basic.pause(1)
    }
    for (let index = 0; index < 255; index++) {
        blue += 1
        green += -1
        strip.showColor(neopixel.rgb(red, green, blue))
        basic.pause(1)
    }
})
