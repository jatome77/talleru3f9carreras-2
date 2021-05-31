function GrafCarril (Cols: number, Rows: number) {
    while (Fila < 5) {
        basic.clearScreen()
        led.plot(CarrAct, Fila)
        basic.pause(500)
        if (Fila == 4) {
            Fila = -1
        }
        Fila += 1
    }
}
input.onButtonPressed(Button.A, function () {
    if (CarrAct == 4) {
        CarrAct = 3
        Sw = 1
    }
    if (CarrAct >= 1 && CarrAct < 4) {
        if (Sw == 0) {
            CarrAct += -1
        }
        Sw = 0
        Fila += -1
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Star")
    for (let index = 0; index < 2; index++) {
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.SmallHeart)
        basic.clearScreen()
    }
    GrafCarril(CarrAct, Fila)
})
input.onButtonPressed(Button.B, function () {
    if (CarrAct == 0) {
        CarrAct = 1
        Sw = 1
    }
    if (CarrAct >= 1 && CarrAct < 4) {
        if (Sw == 0) {
            CarrAct += 1
        }
        Sw = 0
        Fila += -1
    }
})
let Sw = 0
let CarrAct = 0
let Fila = 0
Fila = 0
let Columna = 0
CarrAct = 2
Sw = 0
