import hello from './hello.js'
import assert from 'assert';

it('Should print hello', () => {

    const helloResponse = hello();
    assert.equal(helloResponse, 'hello');

});