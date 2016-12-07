import assert from 'assert';
import header from './header';


describe('#header()', function () {
  it('Should throw an error if lives < 0', function () {
    assert.throws(() => header(-1));
  });
  it('Should throw an error if lives > 3', function () {
    assert.throws(() => header(4));
  });
  it('Should throw an error if data is not found', function () {
    assert.throws(() => header());
  });
});
