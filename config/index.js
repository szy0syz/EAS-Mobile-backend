let config = null;

if(process && process.env && process.env.NODE_ENV) {
  config = require('./env/' + process.env.NODE_ENV);
} else {
  config = require('./env/development.js');
}

export default config