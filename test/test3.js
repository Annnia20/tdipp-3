const expect = require('chai').expect;
// import math file
const math = require('../math');
describe('math.js tests', () => {
    
    describe('math.divide() Test', () => {
        it('should equal 5', () => {
            const result = math.divide(10, 2);
            expect(result).to.equal(5);
        });
        it('should equal 4', () => {
            const result = math.divide(24, 6);
            expect(result).to.equal(4);
        });
    });
});
