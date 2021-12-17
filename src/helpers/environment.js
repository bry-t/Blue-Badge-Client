let APIURL = '';

switch (window.location.hostname) {
    case 'localhost' || '127.0.0.1':
        APIURL = 'http://localhost:3333';
        break;
        
    case 'https://git.heroku.com/health-is-wealth-client.git':
        APIURL = 'https://health-is-wealth-client.herokuapp.com/';
        break
}

export default APIURL;
