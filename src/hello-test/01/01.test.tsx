import {mult, splitString, sum} from "./01";

let a: number;
let b: number;
let c: number;

beforeEach(() => {
    a = 1
    b = 2
    c = 3
})

test('sum should be correct', () => {
    //action
    const result1 = sum(a, b);
    const result2 = sum(b, c);

    //expect result
    expect(result1).toBe(3);
    expect(result2).toBe(5);

})


test('mult should be correct', () => {

    const result1 = mult(a, b);
    const result2 = mult(b, c);

    expect(result1).toBe(2);
    expect(result2).toBe(6);
})

test('check splitString', () => {
    const str = splitString('Hello, my friend!');
    const str1 = splitString('JS - the best  programming language.');

    expect(str.length).toBe(3)
    expect(str[0]).toBe('hello')
    expect(str[1]).toBe('my')
    expect(str[2]).toBe('friend')

    expect(str1.length).toBe(5)
    expect(str1[0]).toBe('js')
    expect(str1[1]).toBe('the')
    expect(str1[2]).toBe('best')
    expect(str1[3]).toBe('programming')
    expect(str1[4]).toBe('language')
})