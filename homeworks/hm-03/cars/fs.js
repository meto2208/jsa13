const fs = require('fs');

const read = (fileName) => {
    return new Promise((res, rej) => {
        fs.readFile(fileName, (err, data) => {
            const dataParse = JSON.parse(data)
            if (err) {
                return rej(err)
            }
            return res(dataParse)
        })
    })
}

const write = (fileName, data) => {
    return new Promise((res, rej) => {
        const dataString = JSON.stringify(data)
        fs.writeFile(fileName, dataString, err => {
            if (err) return rej(err);
            return res()
        })
    })
}

module.exports = {
    read,
    write
}