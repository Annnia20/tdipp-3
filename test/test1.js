const expect = require('chai').expect;
// import math file
const math = require('../math');
describe('math.js tests', () => {
    describe('math.add() Test', () => {
        it('should equal 10', () => {
            const result = math.add(6, 4);
            expect(result).to.equal(10);
        });
        it('should equal 6', () => {
            const result = math.add(4, 2);
            expect(result).to.equal(6);
        });
    });

});
