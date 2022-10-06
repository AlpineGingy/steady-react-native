const {hello} = require('./hello.js')

it('Should print hello', () => {

    const helloResponse = hello();
    expect(helloResponse).toBe('hello');

});