import sum from '../src/app/utils/sum';

describe('*TEST for the function (sum)', ()=> {
    test('(1 + 2 is 3), and should return a number', () => {
        expect(sum(1,2)).toBe(3);
    })
    
    test('(1 + (-2) is -1)', () => {
        expect(sum(1,-2)).toBe(-1);
    })

    test('(-1 + -2 is -3)', () => {
        expect(sum(-1,-2)).toBe(-3);
    })
})