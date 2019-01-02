const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    console.log('=========================='.green);
    console.log(`tabla de ${base}`.green);
    console.log('=========================='.green);
    let data = '';
    for (let i = 0; i <= limite; i++) {
        data += `${base} * ${i} = ${base*i}\n`;
    }
    console.log(data);
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        let nombreArchivo = `tabla-${base}-${limite}.txt`
        let data = ''

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor introducido ${limite} no es un numero`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/${nombreArchivo}`, data, (err) => {
            if (err) reject(err);
            else resolve(nombreArchivo);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}