class Nim {
    constructor(pile1 = [["X"], ["X"], ["X"], ["X"], ["X"], ["X"], ["X"], ["X"], ["X"], ["X"]], pile2 = [["X"], ["X"], ["X"], ["X"], ["X"], ["X"], ["X"], ["X"], ["X"], ["X"]]){
        this.pile1 = pile1;
        this.pile2 = pile2;
    }

    remove(pile, tokens){

        if(pile === 1){
            this.pile1.length -= tokens;
            return this.pile1; 
        } 
        if(pile === 2){
            this.pile2.length -= tokens;
            return this.pile2;
        }
    }
}

module.exports = Nim;
