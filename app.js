const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

// console.log(argv);
let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('Listar');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo.green}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
}

// console.log(module);
// console.log(multiplicar);
// console.log(process.argv);

// let argv2 = process.argv;
// let parametro = argv2[2];
// let base = parametro.split('=')[1];

// console.log('Limite', argv.limite);
// console.log(argv);

// console.log(base);

// let base = 'aaaa';