function calculateFrigorias(height, width, largeness){

    if( (height == Number || width == Number || largeness == Number) ){

        return "Los datos numericos no han sido especificados"

    } else if(height == undefined || width == undefined || largeness == undefined){

        return "Falta alguno de los parametros"

    } else if( (isNaN(height) || isNaN(width) || isNaN(largeness)) ){

        return "Los datos ingresados (O alguno de ellos) no son numericos"

    } else {
        let volume = height*width*largeness
        return volume*50
    }
}

test("Gaga", () => {
    expect(calculateFrigorias()).toBe("Falta alguno de los parametros")
})

test("Basico", () => {
    
    expect(calculateFrigorias("Buenas", "hola", "Que onda")).toBe("Los datos ingresados (O alguno de ellos) no son numericos")
    expect(calculateFrigorias("Buenas", 2, "Si")).toBe("Los datos ingresados (O alguno de ellos) no son numericos")
})

test("Moderado", () => {
    
    expect(calculateFrigorias(1, 2)).toBe("Falta alguno de los parametros")
    expect(calculateFrigorias(1, 1, 1)).toBe(50)
})

test("Intrincado", () => {

    expect(calculateFrigorias(Number("123"), 1, 1)).toBe(123*50)
    expect(calculateFrigorias(Number, Number, Number)).toBe("Los datos numericos no han sido especificados")
})

test("Complejo", () => {

    let comp1 = "1."
    let comp2 = "2"
    let param = comp1 + comp2
    expect(calculateFrigorias(param, 1, 1)).toBe((1.2*1*1) * 50)
})

