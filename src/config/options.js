const dotenv = require("dotenv").config();

//Yargs

const argumentos = process.argv.slice(2);
const Yargs = require("yargs/yargs")(argumentos);

const args = Yargs
    .default({
        m: "FORK",
        p: 8080
    })
    .alias({
        p:"port",
        m:"modo"
    })
    .argv;


const options = {
    server: {
        PORT: args.port,
        MODO: args.modo
    },
    mongoDB: {
        url:process.env.MONGO_URL,
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    },
    filesystem: {
        productsPath:"DB/"
    }
    
}

module.exports = { options }