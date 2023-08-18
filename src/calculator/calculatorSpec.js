const { add } = require('./calculator.js');

describe('add function', () => {
  it('should add two numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('should add negative numbers correctly', () => {
    expect(add(-5, -3)).toBe(-8);
  });

  it('should add zero correctly', () => {
    expect(add(10, 0)).toBe(10);
  });

  it('should add two numbers correctly', () => {
    expect(add(2, 7)).toBe(9);
  });

  it('should add two numbers correctly', () => {
    expect(add(2, 5)).toBe(7);
  });

  it('should add two numbers correctly', () => {
    expect(add(1, 2)).toBe(3);
  });
});
