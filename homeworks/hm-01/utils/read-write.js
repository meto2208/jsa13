const fs = require('fs');

const read = (fileName) => {
    return new Promise((res, rej) => {
        fs.readFile(fileName, 'utf-8', (err, data) => {
            if (err) {
                return rej(err)
            } else {
                return res(data)
            }
        })
    })
}

const write = (fileName, data) => {
    return new Promise((res, rej) => {
        fs.writeFile(fileName, data, err => {
            if (err) {
                return rej(err)
            }
        })
    })
}


module.exports = {
    read,
    write
}