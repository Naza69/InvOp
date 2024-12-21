const { default: expect } = require("expect")

//Ejercicio 2
function returnVolume(diameter, height) {
    if((typeof diameter == "string" && typeof height == "string") && (!isNaN(diameter) && !isNaN(height))) {
        diameter = Number(diameter)
        height = Number(height)

        if(diameter == 0 || height == 0){
            return "No se puede calcular el volumen con valores nulos"
        } else {
            return Math.trunc(Math.PI*height*(diameter/2))
        }
    } else if ((typeof diameter == "string" || typeof height == "string") && (!isNaN(diameter) && !isNaN(height))){
        diameter = Number(diameter)
        height = Number(height)

        if(diameter == 0 || height == 0){
            return "No se puede calcular el volumen con valores nulos"
        } else {
            return Math.trunc(Math.PI*height*(diameter/2))
        }
    } else if ((typeof diameter == "string" && typeof height == "string") && (isNaN(diameter) || isNaN(height))){
        return "Uno de o los valores ingresados no son/es numerico/s"

    } else if ((typeof diameter == "number" && typeof height == "number")) {

        if(diameter == 0 || height == 0){
            return "No se puede calcular el volumen con valores nulos"
        } else {
            return Math.trunc(Math.PI*height*(diameter/2))
        }
    }
}

test("testingReturnVolume", () => {
    let diameter1 = "6"
    let height1 = "7"
    expect(returnVolume(diameter1, height1)).toBe(65)

    let diameter2 = 6
    let height2 = 7
    expect(returnVolume(diameter2, height2)).toBe(65)

    let diameter3 = "6"
    let height3 = 7
    expect(returnVolume(diameter3, height3)).toBe(65)

    let diameter4 = "a"
    let height4 = "b"
    expect(returnVolume(diameter4, height4)).toBe("Uno de o los valores ingresados no son/es numerico/s")
    
    let diameter5 = 6.0
    let height5 = 7.0
    expect(returnVolume(diameter5, height5)).toBe(65)
})

