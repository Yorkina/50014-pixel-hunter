import assert from 'assert';
import timer from './timer';


describe('#timer()', function () {
  it('Should throw an error if time < 0', function () {
    assert.throws(() => timer(null, -4));
  });
  it('Should throw an error if time > 30', function () {
    assert.throws(() => timer(null, 40));
  });
});
