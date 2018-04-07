const fs = require('fs');
const colors = require('colors');


let crearArchivo = (base, limite) => {

  return new Promise( (resolve, reject) => {
    
    if ( !Number(base) ) {
      reject(`${base} no es un numero`);
      return;
    } else if ( !Number(limite) ) {
      reject(`${limite} no es un numero`);
      return;
    }

    let data = '';
    
    for ( let i = 1; i <= limite; i++ ) {
      data += `${base} * ${i} = ${base * i}\n`;
    }
    
    fs.writeFile(`archivos/tabla-${base}-al-${limite}.txt`, data, (err) => {
      if (err) reject('Error: ', err);
      else resolve(`tabla-${base}-al-${limite}.txt`.green);
    });

  });
}

let listarTabla = (base, limite) => {

  return new Promise((resolve, reject) => {

    if ( !Number(base) ) {
      reject(`${base} no es un numero`);
      return;
    } else if ( !Number(limite) ) {
      reject(`${limite} no es un numero`);
      return;
    }

    console.log('----------------------'.gray);
    console.log(`------- tabla del ${base} -------`.cyan);
    console.log('----------------------'.gray);

    for ( let i = 1; i <= limite; i++) {
      resolve(console.log(`${base} * ${i} = ${base * i}`));
    }

  });
}

module.exports = {
  crearArchivo,
  listarTabla
}
