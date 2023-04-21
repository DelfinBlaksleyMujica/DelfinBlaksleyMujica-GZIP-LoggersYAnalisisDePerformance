//Autocannon 

const autocannon = require("autocannon");
const { PassThrough } = require("stream");
//Funcion para correr el analisis de performance
function run(url) {
    const buf = []
    const outputStream = new PassThrough()
    //Formato
    const inst = autocannon({
        url,
        connections:100,
        duration: 20
    });
    //Voy recibiendo la informacion de la performance
    autocannon.track( inst , { outputStream });

    //Creo un grafico con los datos que recibi de la simulacion
    outputStream.on( "data" , data => buf.push( data ))
    inst.on( "done" , () => {
        process.stdout.write(Buffer.concat(buf))
    })
}


console.log('Running all benchmarks in parallel');

run("http://localhost:8080/info-bloq");
run("http://localhost:8080/info-nobloq");