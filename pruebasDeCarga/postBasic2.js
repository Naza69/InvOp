import http from 'k6/http'
import {sleep} from 'k6'

export const options = {
    vus: 1,
    duration: "10s"
    

}

export default function() {

    const payload = JSON.stringify({

        name: "GolpeadorDeMujeres"


    }) 

    const headers = { 'Content-Type': 'aplication/json' }

    http.post('https://pokeapi.co/api/v2/pokemon/0', payload, {headers} )

}

const res = fetch("https://pokeapi.co/api/v2/pokemon/0")



