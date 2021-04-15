const os = require("os");
const Nim = require("./nim.js");
const {table} = require("table");

class Play {
    constructor(display){
        this.display = display;
    }

    run(){
        process.stdout.write(`Welcome to 2-pile Nim! Type ? for instructions on how to play :)${os.EOL}`);
        this.display.setPrompt('> ');
        this.display.prompt();

        this.display.on("line", (line) => {
			const command = line.trim();
			const args = command.split(" ");
            if(command === "?"){
                process.stdout.write(this.helpMessage());
            } else if(command === "S" || command === "R"){
                this.nim = new Nim();
                console.log(table(this.nim.pile1) + table(this.nim.pile2));
            } else if (command === "C") {
				this.display.close();
            } else if(command[0] === "1"){
                let output = this.nim.remove(1, Number(args[1]));
                if(output.length === 0 && this.nim.pile2.length !== 0){
                    console.log(table(this.nim.pile2));
                } else if (output.length === 0 && this.nim.pile2.length === 0){
                    console.log("You won!");
                } else if (output.length !== 0 && this.nim.pile2.length === 0){
                    console.log(table(output));
                } else {
                    console.log(table(output) + table(this.nim.pile2));
                }
            } else if(command[0] === "2"){
                let output = this.nim.remove(2, Number(args[1]))
                if(output.length === 0 && this.nim.pile1.length !== 0){
                    console.log(table(this.nim.pile1));
                } else if (output.length === 0 && this.nim.pile1.length === 0){
                    console.log("You won!");
                } else if (output.length !== 0 && this.nim.pile1.length === 0){
                    console.log(table(output));
                } else {
                    console.log(table(this.nim.pile1) + table(output));
                }          
            } else {
                process.stdout.write(`unrecognised command :(${os.EOL}`);
            }
            this.display.prompt();
        })

        this.display.on("close", () => {
			process.stdout.write(`Thanks for playing, goodbye! :)${os.EOL}`);
			process.exit(0);
		});
    }

    helpMessage(){ // write description of how to play nim 
        return `
            How to play: The rules are simple, players take it in turns to remove at least one token from a pile of their choice. 
            The player to remove the last token(s) wins! These are the available commands:
            S - Start game with 2 piles of 10 tokens each.
            1 x - Remove x tokens from pile 1.
            2 x - Remove x tokens from pile 2.
            R - Restart game.
            C - Terminate the session.
            `
    }
}

module.exports = Play;