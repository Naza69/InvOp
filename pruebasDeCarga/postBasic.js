import http from 'k6/http';
import {sleep} from 'k6'

export const options = {
    vus: 12,
    duration: "30s" 
}

export default function() {
    const payload = JSON.stringify({
        name: "Naza",
        job: "Tester"
    })



    const headers = { 'Content-Type': "aplication/json" };

    http.post("https://jsonplaceholder.typicode.com/users/1/posts", payload, { headers })
    sleep(1)

    
}