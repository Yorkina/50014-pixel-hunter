import assert from 'assert';
import stats from './stats';


describe('#stats()', function () {
  it('Should throw an error if data is not found', function () {
    assert.throws(() => stats());
  });
});
