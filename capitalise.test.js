const capitalise = require('./capitalise');

test('capitalise the first letter of astring', () => {
  expect(capitalise('hello')).toBe('Hello');
  expect(capitalise('world')).toBe('World');
  expect(capitalise('')).toBe('');
  expect(capitalise('  people')).toBe('  people');
});
