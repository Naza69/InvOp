const { default: expect } = require("expect")

function returnWaterInLitters(timeOfTraining) {
    if(typeof timeOfTraining == "string" && !isNaN(timeOfTraining)) {
        timeOfTraining = Number(timeOfTraining)

        return Math.trunc(timeOfTraining/2)
    } else if (typeof timeOfTraining == "number") {
        return Math.trunc(timeOfTraining/2)
    } else if (typeof timeOfTraining == "string" && isNaN(timeOfTraining)) {
        return "El valor ingresado no es numerico"
    }
}

test("testingReturnWater", () => {
    let time1 = "6"
    expect(returnWaterInLitters(time1)).toBe(3)

    let time2 = "6.7"
    expect(returnWaterInLitters(time2)).toBe(3)

    let time3 = "6.07"
    expect(returnWaterInLitters(time3)).toBe(3)

    let time4 = "a"
    expect(returnWaterInLitters(time4)).toBe("El valor ingresado no es numerico")

    let comp1 = "6."
    let comp2 = "07"
    let time5 = comp1+comp2
    expect(returnWaterInLitters(time5)).toBe(3)
})
