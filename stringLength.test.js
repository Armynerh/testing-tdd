
const stringLength = require('./stringLen');
const reverseString = require('./reverseString');

test("returns string length", ()=>{
    expect(stringLength("cat")).toBe(3);
    expect(()=>stringLength('')).toThrow();
    expect(()=>stringLength('')).toThrow(Error)
})

test("returns a string with reversed characters", () =>{
    expect(reverseString('Cat')).toBe('taC');
})
