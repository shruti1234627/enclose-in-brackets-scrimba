function encloseInBrackets(str) {
   // const solution1 = '(' + str + ')';
    
   // return solution1;

   const solution2 = `(${str})`;
    
    
    return solution2;

    //const solution3 = '('.concat(str, ')');
    
    // return solution3;
}




/**
* Test Suite 
*/
describe('encloseInBrackets()', () => {
    it('adds () around a string', () => {
        // arrange
        const str = "Yo";
        
        // act
        const result = encloseInBrackets(str);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe('(Yo)');
    });
});