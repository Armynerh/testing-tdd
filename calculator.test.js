const Calculator = require('./calculator'); 
describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });


  describe('add', () => {
    test('add two positive numbers', () => {
      expect(calculator.add(2, 3)).toBe(5);
      expect(calculator.add(-5, -3)).toBe(-8);
      expect(calculator.add(2, -3)).toBe(-1);
      
    });
  });

  describe('subtract', () => {
    test('subtract number', () => {
      expect(calculator.subtract(8, 3)).toBe(5);
      expect(calculator.subtract(5, -3)).toBe(8);
      expect(calculator.subtract(-5, -3)).toBe(-2);
    });
  });


  describe('divide', () => {
    test('divide  number by number', () => {
      expect(calculator.divide(10, 2)).toBe(5);
      expect(calculator.divide(-10, 2)).toBe(-5);
      expect(() => {
        calculator.divide(10, 0);
      }).toThrow('Cannot divide by zero.');
    });
  });

  describe('multiply', () => {
    test('multiply two numbers', () => {
      expect(calculator.multiply(2, 3)).toBe(6);
      expect(calculator.multiply(5, -3)).toBe(-15);
      expect(calculator.multiply(-5, -3)).toBe(15);
    }); 
  });
});
