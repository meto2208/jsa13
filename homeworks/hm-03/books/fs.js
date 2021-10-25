const fs = require('fs');

const read = (fileName) => {
    return new Promise((res, rej) => {
        fs.readFile(fileName, (err, data) => {

            if (err) {
                return rej(err)
            } else {
                data = JSON.parse(data);
                return res(data)
            };
        });
    });
};

const write = (fileName, data) => {
    const dataString = JSON.stringify(data);
    return new Promise((res, rej) => {
        fs.writeFile(fileName, dataString, err => {

            if (err) {
                return rej(err)
            } else {
                return res()
            }
        });
    });
};

module.exports = {
    read,
    write
}