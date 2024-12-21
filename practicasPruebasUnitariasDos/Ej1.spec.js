function countLetters(string) {
    let count = 0;
    if (typeof string !== 'string') {
        return "El parametro no es un string"
        // console.log("El parametro no es un string")
    } else if(string.length > 0) {
        for (let i = 0; i < string.length; i++) {
            count++;
        }
    } else {
        return "El string esta vacio"
    }

    return count;
}

test("Normal", () => {
    expect(countLetters("hola")).toBe(4)
    expect(countLetters(1)).toBe("El parametro no es un string")
    expect(countLetters("")).toBe("El string esta vacio")
})


