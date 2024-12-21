//Ejercicio 4

const { default: expect } = require("expect")

function centuryInDozen(year) {
    if (typeof year == "string" && !isNaN(year)) {
        year = Number(year)

        return Math.trunc(year/100)+1

    } else if (typeof year == "string" && isNaN(year)) {
        return "El valor ingresado no es numerico"
    } else if (typeof year == "number") {
        return Math.trunc(year/100)+1
    }
}

test("testingDozenParseCentury", () => {
    let year1 = "1990"
    expect(centuryInDozen(year1)).toBe(20)
    
    let comp11 = "19"
    let comp21 = 90
    let year2 = comp11+comp21.toString()
    expect(centuryInDozen(year2)).toBe(20)

    let comp12 = "19"
    let comp22 = 90
    let year3 = Number(comp12+comp22.toString())
    expect(centuryInDozen(year3)).toBe(20)

    let year4 = 1990.7
    expect(centuryInDozen(year4)).toBe(20)

    let comp13 = "19"
    let comp23 = 90.7
    let year5 = comp13+comp23.toString()
    expect(centuryInDozen(year5)).toBe(20)
    
})

