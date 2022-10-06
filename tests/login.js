const fetch = require('node-fetch');

const login = async ()=>{
    const tokenResponse = await fetch('https://dev.stedi.me/login',{
        method: 'POST',
        body:JSON.stringify({
          userName: "andruw.sorensen@gmail.com",
          password:"P@ssw0rd"
        })

})
};

export {login};