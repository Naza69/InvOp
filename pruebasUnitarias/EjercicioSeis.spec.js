//Ejercicio 6

function validateAddress(address) {
    const requiredFields = [
        { field: 'street', type: 'string' },
        { field: 'number', type: 'number' },
        { field: 'zip_code', type: 'number' },
        { field: 'city', type: 'string' },
        { field: 'province', type: 'string' }
    ];

    for (const field of requiredFields) {
        if (!(field.field in address) || typeof address[field.field] !== field.type) {
            return false;
        }
    }

    if ('floor_apartment' in address && typeof address.floor_apartment !== 'string') {
        return false;
    }
    
    if ('town' in address && typeof address.town !== 'string') {
        return false;
    }

    return true;
}


const { default: expect } = require("expect");

test("validateAddress", () => {
    let validAddress1 = {
        "street": "Salta",
        "number": 359,
        "floor_apartment": "D3",
        "zip_code": 5500,
        "town": "",
        "city": "Mendoza",
        "province": "Mendoza"
    };
    expect(validateAddress(validAddress1)).toBeTruthy();

    let validAddress2 = {
        "street": "Rivadavia",
        "number": 1024,
        "zip_code": 5000,
        "city": "Córdoba",
        "province": "Córdoba"
    };
    expect(validateAddress(validAddress2)).toBeTruthy();

    let invalidAddress1 = {
        "street": "Mitre",
        "number": "359",  
        "zip_code": 5500,
        "city": "Mendoza",
        "province": "Mendoza"
    };
    expect(validateAddress(invalidAddress1)).toBeFalsy();

    let invalidAddress2 = {
        "street": "Belgrano",
        "zip_code": 5400,  
        "city": "San Juan",
        "province": "San Juan"
    };
    expect(validateAddress(invalidAddress2)).toBeFalsy();

    let invalidAddress3 = {
        "street": "Independencia",
        "number": 256,
        "floor_apartment": 5,  
        "zip_code": 3000,
        "city": "Santa Fe",
        "province": "Santa Fe"
    };
    expect(validateAddress(invalidAddress3)).toBeFalsy();
});
