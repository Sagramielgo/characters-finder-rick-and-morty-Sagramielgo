import sum from './TestFunction';

test('Test if 1 +1 = 2', () => {
  const a = 1;
  const b = 1;
  const result = sum(a, b);
  expect(result).toBe(2);
});

test('Test null', () => {
  const result = sum(null, null);
  expect(result).toBeUndefined();
});

test('Test undefined and number', () => {
  const result = sum(undefined, 17);
  expect(result).toBeUndefined();
});
test('Test empty and number', () => {
  const result = sum('', 17);
  expect(result).toBeUndefined();
});
test('Test text', () => {
  const result = sum('Marcjanna', 'Sagra');
  expect(result).toBeUndefined();
});
test('Test text and number', () => {
  const result = sum('Marcjanna', 7);
  expect(result).toBeUndefined();
});
