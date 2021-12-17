let APIURL = '';

switch (window.location.hostname) {
    case 'localhost' || '127.0.0.1':
        APIURL = 'http://localhost:3333';
        break;
        
    case 'abk-health-is-wealth-client.herokuapp.com':
        APIURL = 'https://abk-health-is-wealth.herokuapp.com/';
        break
}

export default APIURL;
