var should = chai.should()
describe('function fizzBuzz', function () {
  it('should be divisible by 3 and return Fizz', function () {
    var result = fizzBuzz(12)
    result.should.be.equal('Fizz')
  })
  it('should be divisible by 5 and return Buzz', function () {
    var result = fizzBuzz(10)
    result.should.be.equal('Buzz')
  })
  it('should be divisible by 3, 5 and return FizzBuzz', function () {
    var result = fizzBuzz(30)
    result.should.be.equal('FizzBuzz')
  })
  it('should be indivisible by 3, 5 and return input number', function () {
    var result = fizzBuzz(17)
    result.should.be.equal(17)
  })
})