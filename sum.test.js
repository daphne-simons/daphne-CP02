const sum = require('./sum')

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

// test('adds 1 + 2, equals 3', () => {
//   // ARRANGE
//   const num = (1, 2)
//   const expected = 3
//   // ACT
//   const actual = sum.sum(num)
//   // ASSERT
//   expect(actual).toBe(expected)
// })
