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
    return new Promise((res, rej) => {
        const fileNameString = JSON.stringify(data)
        fs.writeFile(fileName, fileNameString, err => {
            if (err) {
                return rej(err)
            }
            return res()
        })
    });
};


module.exports = {
    read,
    write
}