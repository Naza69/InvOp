import {check , sleep } from "k6";
import http from "k6/http";

//Configuracion de las opciones de pruebas
export let options = {
    
    stages: [
        {duration : '1m', target : 500},
        {duration : '1m', target : 500},
        {duration : '30s', target : 50}
    ],
    thresholds : {
        http_req_duration : ['p(95) < 500'], //El 95% debe tardar menos de 500 ms
    }
};

export default function(){
    const pokemon = 'pikachu';
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`; //Url en donde va a buscar pikachu

    let res = http.get(url); 

    check(res, {
        'status is 200' : (r) => r.status === 200,
    });

    sleep(1);
};