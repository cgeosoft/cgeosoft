var dateFormat = require('dateformat');

module.exports = function (d, format) {
    return dateFormat(d, format || 'default');
}