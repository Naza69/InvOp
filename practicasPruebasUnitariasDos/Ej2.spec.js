function colorFilter(color) {
    colorSelection = ["azul", "rojo", "verde", "violeta", "amarillo", "negro", "blanco"];
    let res = ""

    if (typeof color !== "string"){
        return "El paramentro no es un string"
    } else {
        if (colorSelection.includes(color.toLowerCase())){
            for(let i = 0; i < colorSelection.length; i++){
                if(colorSelection[i].toLowerCase() === color.toLowerCase()){
                    res = colorSelection[i].toLowerCase()
                }
            }
        } else {
            return "El color pasado no esta en la lista"
        }
        return "Es el color: " + res
    }

}

test("White", () => {
    expect(colorFilter("blanco")).toBe("Es el color: blanco")
})