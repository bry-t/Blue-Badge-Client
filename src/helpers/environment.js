let APIURL = '';

switch (window.location.hostname) {
    case 'localhost' || '127.0.0.1':
        APIURL = 'http://localhost:3333';
        break;
        
    case 'health-is-wealth-client.herokuapp.com':
        APIURL = 'https://health-is-wealth-client.herokuapp.com/';
        break
}

export default APIURL;
