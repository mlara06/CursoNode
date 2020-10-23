const fs = require('fs')

let listar = (base, limite) => {
    for (var i = 1; i <= limite; i++) {
        let data = ''
        let producto = i * base
        data += `${ base } x ${ i } = ${ producto}\n`
        console.log(data)
    }
}

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            console.log(err);
            return
        }

        let data = ' '


        for (var i = 1; i <= limite; i++) {
            let producto = i * base
            data += `${ base } x ${ i } = ${ producto}\n`
        }


        fs.writeFile(`./tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)
            else resolve('The file has been saved!')
        })
    })
}


module.exports = {
    crearArchivo,
    listar
}