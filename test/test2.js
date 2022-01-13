const expect = require('chai').expect;
// import math file
const math = require('../math');
describe('math.js tests', () => {
    
    describe('math.multiply() Test', () => {
        it('should equal 6', () => {
            const result = math.multiply(2, 3);
            expect(result).to.equal(6);
        });
        it('should equal 12', () => {
            const result = math.multiply(4, 3);
            expect(result).to.equal(12);
        });
    });
});
