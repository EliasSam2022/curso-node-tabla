/* // hacer la tabla del 5 en javascrip
console.clear();
console.log('=============');
console.log('Tabla del 5');
console.log('=============');
const j = 5;
for(i = 1;i<=10;i++){
    console.log(`${j} x ${i} = ${j * i}`);
       
} */






/* 
//grabar la tabla de multiplicar del 5 en un archivo de texto que este en la misma dirección del app.js.
//Se actualiza el código:
// hacer la tabla del 5 en javascrip
//Se hace uso de module.export() que indica que la función a exportar. Ahora ir a app.js para
//poder hacer uso de este archivo.


const {crearArchivo} = require('./helper/multiplicar')
console.clear();
const j = 3;
crearArchivo(j);

const fs = require('fs'); // se importa la libreria para poder hacer yso del file system
console.clear();
console.log('=============');
console.log('Tabla del ',j);
console.log('=============');

let salida = '';
for(i = 1;i<=10;i++){
    salida += `${j} x ${i} = ${j * i}\n`; //la salida se concatena y se da un salto de linea.
       
}
console.log(salida);

//el file system para grabar un archivo. en el primer parametro
//si no se pone el path, se graba en la direccion donde esta ejecutando.
//segundo parametro son los datos. y el tercero es un callback que recibe el error si algo sale mal.


// fs.writeFile('tabla-del-5.txt' , salida, (err) =>{
//     if(err) throw err;
//     console.log('Tabla-del-5 creado');
// })



//Si quisiera la tabla del 3 o 4 etc, podría cambiar solamente la variable j, pero el nombre
//seguiría tabla del 5. Entonces actualizamos un poco la salida.
fs.writeFile('tabla-del-${j}.txt' , salida, (err) =>{
        if(err) throw err;
        console.log(`Tabla-del ${j} creado`);
    })
    
 */









//tratamiento de errores

//Se actualiza el código:
// hacer la tabla del 5 en javascrip
//Se hace uso de module.export() que indica que la función a exportar. Ahora ir a app.js para
//poder hacer uso de este archivo.



/* const {crearArchivo} = require('./helper/multiplicar')
console.clear();
const j = 6;
crearArchivo(j)
.then( nombreArchivo => console.log(nombreArchivo, 'creado'))
.catch( err => console.log(err));

const fs = require('fs'); // se importa la libreria para poder hacer yso del file system
console.clear();
console.log('=============');
console.log('Tabla del ',j);
console.log('=============');

let salida = '';
for(i = 1;i<=10;i++){
    salida += `${j} x ${i} = ${j * i}\n`; //la salida se concatena y se da un salto de linea.
       
}
console.log(salida);
 */


//el file system para grabar un archivo. en el primer parametro
//si no se pone el path, se graba en la direccion donde esta ejecutando.
//segundo parametro son los datos. y el tercero es un callback que recibe el error si algo sale mal.


// fs.writeFile('tabla-del-5.txt' , salida, (err) =>{
//     if(err) throw err;
//     console.log('Tabla-del-5 creado');
// })



//Si quisiera la tabla del 3 o 4 etc, podría cambiar solamente la variable j, pero el nombre
//seguiría tabla del 5. Entonces actualizamos un poco la salida.
// fs.writeFile(`tabla-del-${j}.txt` , salida, (err) =>{
//         if(err) throw err;
//         console.log(`Tabla-del ${j} creado`);
//     })
    













/* //Recibir parámetros por línea de comandos


// hacer la tabla del 5 en javascrip
const {crearArchivo} = require('./helper/multiplicar');
const argv = require('yargs').argv;
console.clear();

console.log(process.argv);
console.log(argv);
console.log('j  de yargs', argv.j);

//const [ , ,arg3='j= 5'] = process.argv; // estamos tomando el tercer argumento.
//const[ , j ]= arg3.split('='); //separa el string por el caracter =
//console.log(j);
//const j = 20;

// crearArchivo(j)
// .then( nombreArchivo => console.log(nombreArchivo, 'creado'))
// .catch( err => console.log(err)); */












/* //Configuracion de yargs
//que envie un mensaje para que se ingrese una base en numero
//para mostrar o no la tabla de multiplicacion
// hacer la tabla del 5 en javascrip

const { option } = require('yargs');
const {crearArchivo} = require('./helper/multiplicar');
const argv = require('yargs')
.option('b', {
             alias: 'base',
             type: 'number',
    demandOption: true
             })  
    .check((argv, options ) => {
                            if(isNaN(argv.b)){
                                throw 'La base debe ser un Numero'
                            }
        
        return true;
        
                         })
        .option('l', {
                                alias: 'listar',
                                type: 'boolean',
                                default: false
            
                             })
              .argv;

console.clear();

//console.log(process.argv);
console.log(argv);
//console.log('base  de yargs', argv.b);

//const [ , ,arg3='j= 5'] = process.argv; // estamos tomando el tercer argumento.
//const[ , j ]= arg3.split('='); //separa el string por el caracter =
//console.log(j);
//const j = 20;


crearArchivo(argv.b)
.then( nombreArchivo => console.log(nombreArchivo, 'creado'))
.catch( err => console.log(err));
 */











/* //yargs independientes

//Configuracion de yargs
//que envie un mensaje para que se ingrese una base en numero
//para mostrar o no la tabla de multiplicacion
// hacer la tabla del 5 en javascrip

const { option } = require('yargs');
const {crearArchivo} = require('./helper/multiplicar');
const argv = require('./carpeta/yargs');

console.clear();

//console.log(process.argv);
console.log(argv);
//console.log('base  de yargs', argv.b);

//const [ , ,arg3='j= 5'] = process.argv; // estamos tomando el tercer argumento.
//const[ , j ]= arg3.split('='); //separa el string por el caracter =
//console.log(j);
//const j = 20;


crearArchivo(argv.b)
.then( nombreArchivo => console.log(nombreArchivo, 'creado'))
.catch( err => console.log(err));

 */














//importando colores

//yargs independientes

//Configuracion de yargs
//que envie un mensaje para que se ingrese una base en numero
//para mostrar o no la tabla de multiplicacion
// hacer la tabla del 5 en javascrip

const { option } = require('yargs');
const {crearArchivo} = require('./helper/multiplicar');
const colors = require('colors');
const argv = require('./carpeta/yargs');

console.clear();

//console.log(process.argv);
//console.log(argv);
//console.log('base  de yargs', argv.b);

//const [ , ,arg3='j= 5'] = process.argv; // estamos tomando el tercer argumento.
//const[ , j ]= arg3.split('='); //separa el string por el caracter =
//console.log(j);
//const j = 20;


crearArchivo(argv.b,argv.l,argv.h)
.then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
.catch( err => console.log(err));

