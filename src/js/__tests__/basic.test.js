import getHealth from '../basic.js';

test('Юнит должен быть здоров', () => {
  const unit = { name: 'маг', health: 100 };
  expect(getHealth(unit)).toBe('healthy');
});

test('Юнит должен быть здоров', () => {
  const unit = { name: 'маг', health: 90 };
  expect(getHealth(unit)).toBe('healthy');
});

test('Юнит должен быть здоров', () => {
  const unit = { name: 'лучник', health: 50 };
  expect(getHealth(unit)).toBe('wounded');
});

test('Юнит должен быть ранен', () => {
  const unit = { name: 'мечник', health: 29 };
  expect(getHealth(unit)).toBe('wounded');
});

test('Юнит должен быть ранен', () => {
  const unit = { name: 'лучник', health: 15 };
  expect(getHealth(unit)).toBe('wounded');
});

test('Юнит должен быть в критическом состоянии', () => {
  const unit = { name: 'лучник', health: 2 };
  expect(getHealth(unit)).toBe('critical');
});

test('Юнит не должен иметь такой уровень здоровья', () => {
  const unit = { name: 'лучник', health: 108 };
  expect(getHealth(unit)).toBe(null);
});

test('Юнит не должен иметь такой уровень здоровья', () => {
  const unit = { name: 'лучник', health: -2 };
  expect(getHealth(unit)).toBe(null);
});
