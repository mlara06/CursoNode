const argv = require('./config/yargs').argv




const { crearArchivo, listar } = require('./multiplicar/multiplicar')
    //const fs = require('express')//paquete que se instala, no son nativos
    //const fs = require('./fs')//nosotros escribimos en algun lado del proyecto

let comando = argv._[0]

switch (comando) {

    case 'listar':
        listar(argv.base, argv.limite)
        break

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e))
        break

    default:
        console.log('comando no reconocido');

}
//let argv2 = process.argv

//console.log(argv.base)

/*fs.writeFile(`tabla${base}.txt`, data, (err) => {
    if (err) throw (err)
    console.log('The file has been saved!')
})*/

/*
let escalera = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let resultado = escalera.map */

//console.log(process.argv);



/*
let parametro = argv[2]
let base = parametro.split('=')[1]



crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(e => console.log(e))*/