const Nim = require("../src/nim.js")

describe("unit tests", function(){
    
    it("can remove tokens from pile 1", function(){
        let nim = new Nim();
        let result = nim.remove(1, 3)
        expect(result).toEqual([["X"], ["X"], ["X"], ["X"], ["X"], ["X"], ["X"]])
    })

    it("can remove tokens from pile 2", function(){
        let nim = new Nim();
        let result = nim.remove(1, 6)
        expect(result).toEqual([["X"], ["X"], ["X"], ["X"]])
    })

    it("cannot remove from pile that doesn't eXist", function(){
        let nim = new Nim();
        let result = nim.remove(3, 2)
        expect(result).toEqual('Invalid pile')
    })
})