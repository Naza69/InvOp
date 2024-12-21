
//Ejercicio 1

function pinTest(pin) {
    if (typeof pin == "string"){
        pin = Number(pin)
        if (pin.toString().length === 6 && Number.isInteger(pin) || pin.toString().length === 4 && Number.isInteger(pin)) {
            return true;
        } else return false;
    } else if (pin.toString().length === 6 && Number.isInteger(pin) || pin.toString().length === 4 && Number.isInteger(pin)) {
        return true;
    } else return false;
}

test("testingPinTest", () => {
    let pin1 = 675432
    expect(pinTest(pin1)).toBeTruthy();

    let pin2 = "654789"
    expect(pinTest(pin2)).toBeTruthy()

    let comp11 = "543"
    let comp21 = 765
    let pin3 = comp21.toString()+comp11
    expect(pinTest(pin3)).toBeTruthy()

    let comp12 = "890"
    let comp22 = 723
    let pin4 = Number(comp22.toString()+comp12)
    expect(pinTest(pin4)).toBeTruthy()
    
    let pin5 = "a12345"
    expect(pinTest(pin5)).toBeFalsy()
})

