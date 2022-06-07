const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let fighters = {
    'goku': {
        'age': 37,
        'birthName': 'Kakarot',
        'birthdate': 'April 16', 
        'birthLocation': 'Planet Vegeta',
        'height': "5'9",
        'specialAttacks': 'Kamehameha, Dragon Fist, Spirit Bomb, Solar Flare, Destructo Disc'
        'transformations': 'Kaiyoken, Super Saiyan, Super Saiyan 2, Super Saiyan 3, Super Saiyan 4, Super Saiyan God, Super Saiyan Blue, Ultra Instinct'
        'Race': 'Saiyan',
        'Death Counter': '3',
        'children': 2
    },
    'vegeta':{
        'age': 48,
        'birthName': 'Kakarot',
        'birthdate': 'November 12', 
        'birthLocation': 'Planet Vegeta',
        'height': "5'5",
        'specialAttacks': 'Galick Gun, Final Flash, Super Energy Wave Volley, Final Explosion, Final Shine Attack'
        'transformations': 'Kaiyoken, Super Saiyan, Super Saiyan 2, Super Saiyan 3, Super Saiyan 4, Super Saiyan God, Super Saiyan Blue, Ultra Instinct'
        'Race': 'Saiyan',
        'Death Counter': '2',
        'children': 1
    },
    'unknown':{
        'age': 37,
        'birthName': 'None',
        'birthdate': 'None', 
        'birthLocation': 'None',
        'height': "0",
        'specialAttacks': 'None'
        'transformations': ' None'
        'Race': 'None',
        'Death Counter': '0',
        'children': 0
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const fighterName = request.params.name.toLowerCase()
    if(fighters[fighterName]){
        response.json(rappers[fighterName])
    }else{
        response.json(rappers['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})