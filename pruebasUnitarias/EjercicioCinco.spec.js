//Ejercicio 5
function withdrawal(moveP1, moveP2){

    let options = ["TIJERAS", "TIJERA", "PIEDRAS", "PIEDRA", "PAPELES", "PAPEL"]

    if (moveP1.toUpperCase() == moveP2.toUpperCase()) {
        return "Empate!"
    } else if ((moveP1.toUpperCase() == "TIJERA" || moveP1.toUpperCase() == "TIJERAS") && (moveP2.toUpperCase() == "PIEDRA" || moveP2.toUpperCase() == "PIEDRAS")){
        return "Jugador 2 gana!"
    } else if ((moveP1.toUpperCase() == "TIJERA" || moveP1.toUpperCase() == "TIJERAS") && (moveP2.toUpperCase() == "PAPELES" || moveP2.toUpperCase() == "PAPEL")){
        return "Jugador 1 gana!"
    } else if ((moveP1.toUpperCase() == "PIEDRA" || moveP1.toUpperCase() == "PIEDRAS") && (moveP2.toUpperCase() == "PAPEL" || moveP2.toUpperCase() == "PAPELES")){
        return "Jugador 2 gana!"
    } else if ((moveP1.toUpperCase() == "PIEDRA" || moveP1.toUpperCase() == "PIEDRAS") && (moveP2.toUpperCase() == "TIJERA" || moveP2.toUpperCase() == "TIJERAS")){
        return "Jugador 1 gana!"
    } else if ((moveP1.toUpperCase() == "PAPEL" || moveP1.toUpperCase() == "PAPELES") && (moveP2.toUpperCase() == "TIJERA" || moveP2.toUpperCase() == "TIJERAS")){
        return "Jugador 2 gana!"   
    } else if ((moveP1.toUpperCase() == "PAPEL" || moveP1.toUpperCase() == "PAPELES") && (moveP2.toUpperCase() == "PIEDRA" || moveP2.toUpperCase() == "PIEDRAS")){
        return "Jugador 1 gana!"
    } else if ((!typeof moveP1 == "string" || !typeof moveP2 == "string") || (options.includes(moveP1.toUpperCase()) || options.includes(moveP2.toUpperCase()))){
        return "Una o las entradas ingresadas no son cadenas, o no estan/esta dentro de las opciones de juego disponibles. O de plano estan mal escritas/ingresadas."
    }   
}

test("testingWithdrawal", () => {
    let movep11 = "tijeras"
    let movep21 = "papeles"
    expect(withdrawal(movep11, movep21)).toBe("Jugador 1 gana!")

    let movep12 = "tIJerAS"
    let movep22 = "paPElES"
    expect(withdrawal(movep12, movep22)).toBe("Jugador 1 gana!")

    let movep13 = "tijeras"
    let movep23 = "pie"+"dra"
    expect(withdrawal(movep13, movep23)).toBe("Jugador 2 gana!")

    let movep14 = "tije"
    let movep24 = "piedras"
    expect(withdrawal(movep14, movep24)).toBe("Una o las entradas ingresadas no son cadenas, o no estan/esta dentro de las opciones de juego disponibles. O de plano estan mal escritas/ingresadas.")

    let move15 = "tijeras"
    let move25 = "tijeras"
    expect(withdrawal(move15, move25)).toBe("Empate!")
    
})