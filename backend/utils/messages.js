// const moment = require('moment');


// function formatMessage(username, text) {
//     return {
//         username, 
//         text,
//         time: moment().format('h:mn a')
//     }
// }

// module.exports = formatMessage;

const moment = require('moment');

function formatMessage(username, text) {
  return {
    username,
    text,
    time: moment().format('h:mm a')
  };
}

module.exports = formatMessage;
