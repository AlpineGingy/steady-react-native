import login from './login.js'
import assert from 'assert';

it('Should login the user',async () => {
    
    let tokenResponse = await login();
    const tokenStatus = tokenResponse.status;
    const token = await tokenResponse.text();
    console.log('Status', tokenStatus);
    console.log('Token', token);
    console.log(JSON.stringify(tokenResponse));

    assert.equal(tokenStatus, 200);
});