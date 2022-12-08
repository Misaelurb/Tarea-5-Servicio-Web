const express = required('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const rutas = (enrutador)=>{
    enrutador.get('/Listado', (peticion, respuesta)=>{
        respuesta.json(
            [
            {    
                "nombre": "Raydelto",
                "apellido": "Hernández",
                "telefono": "809-555-2222"
            },
            {
                "nombre": "Joel",
                "apellido": "Pineda",
                "telefono": "8297218282"
            },
            {
                "nombre": "Prueba",
                "apellido": "Loraads",
                "telefono": "809-988-1231"
            },
            {
                "nombre": "Volmido",
                "apellido": "Yoronga",
                "telefono": "555-666-7777"
            },
            {
                "nombre": "Juancito",
                "apellido": "Aracena",
                "telefono": "555-666-7777"
            },
            {
                "nombre": "momentoPLD",
                "apellido": "momentoPLD",
                "telefono": "33333333"
            },
            {
                "nombre": "jhjh",
                "apellido": "jhjh",
                "telefono": "23"
            },
            {
                "nombre": "Joel",
                "apellido": "pineda",
                "telefono": "8297217971"
            },
            {
                "nombre": "Un saludo para Juanal",
                "apellido": "De parte de Joel",
                "telefono": ""
            },
            {
                "nombre": "Un saludo para Juanal",
                "apellido": "De parte de Joel",
                "telefono": "8290328121"
            },
            {
                "nombre": "",
                "apellido": "",
                "telefono": ""
            },
            {
                "nombre": "Samuel",
                "apellido": "Reyes",
                "telefono": "8090000000"
            },
            {
                "nombre": "Saul",
                "apellido": "Jimenez",
                "telefono": "83374737437"
            },
            {
                "nombre": "Luis",
                "apellido": "Abinader",
                "telefono": "747374384"
            },
            {
                "nombre": "Elnesto",
                "apellido": "Pineda",
                "telefono": "747348384"
            },
            {
                "nombre": "Juan",
                "apellido": "Garcia",
                "telefono": "8096889058"
            },
            {
                "nombre": "Maribel",
                "apellido": "Beltre",
                "telefono": "7483923923"
            },
            {
                "nombre": "Un saludo Para Shae, Gilbert, Alan Concepcion",
                "apellido": "De parte de Joel",
                "telefono": "8090000000"
            },
            {
                "nombre": "Un saludo Para Keyrol Marcelino, Hon, y Decri",
                "apellido": "De parte de Joel",
                "telefono": "83374737437"
            },
            {
                "nombre": "Yatzary",
                "apellido": "Santana",
                "telefono": "38483"
            },
            {
                "nombre": "Carlos Daniel",
                "apellido": "Soriano Rosa",
                "telefono": "809-848-4182"
            },
            {
                "nombre": "Carmen",
                "apellido": "Mazara",
                "telefono": "2456"
            },
            {
                "nombre": "Carmen",
                "apellido": "Mazara",
                "telefono": "234"
            },
            {
                "nombre": "Carlos Daniel",
                "apellido": "Soriano Rosa",
                "telefono": "809-484-4182"
            },
            {
                "nombre": "Antonio",
                "apellido": "Felix",
                "telefono": "8090000000"
            },
            {
                "nombre": "angela",
                "apellido": "luisa",
                "telefono": "8294563258"
            },
            {
                "nombre": "Un saludo para la masima, para el capotillero",
                "apellido": "Un saludo para el papa de esto Juan, lo mas d",
                "telefono": "8097897789"
            },
            {
                "nombre": "fufurufo",
                "apellido": "De fufurufa",
                "telefono": "1520"
            },
            {
            "nombre": "Ella no te ama",
            "apellido": "Te quedaras solo si no te pones a buscar otra",
            "telefono": "7372328"
            },
            {
                "nombre": "dkks",
                "apellido": "dsk",
                "telefono": "344"
            },
            {
                "nombre": "dkd",
                "apellido": "ekdk",
                "telefono": "303"
            },
            {
                "nombre": "zz",
                "apellido": "s",
                "telefono": "s"
            },
            {
                "nombre": "lidia",
                "apellido": "lala",
                "telefono": "8096583214"
            }
        ]
        )
    });
}

rutas(app);

app.listen(8080);