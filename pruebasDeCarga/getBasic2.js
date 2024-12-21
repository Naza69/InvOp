import http from "k6/http"
import { sleep } from "k6"

export const options = {

    vus: 150,
    
    duration: '1m'



}

export default function() {
    http.get("https://pokeapi.co/api/v2/pokemon/charmander")

    sleep(1)
}