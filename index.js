const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

const Play = require('./src/play.js')
const play = new Play(rl)

play.run()