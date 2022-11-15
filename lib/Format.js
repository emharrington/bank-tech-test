const moment = require('moment');

class Format {
    date = (date) => moment(date).format("DD/MM/YYYY");
}

module.exports = Format;