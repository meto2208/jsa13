const fs = require('fs');

const read = (fileName) => {
    return new Promise((res, rej) => {
        fs.readFile(fileName, 'utf-8', (err, data) => {
            if (err) {
                return rej(err)
            } else {
                const parsedData = JSON.parse(data)
                return res(parsedData)
            }
        })
    })
}

const write = (fileName, data) => {
    return new Promise((res, rej) => {
        const dataString = JSON.stringify(data)
        fs.writeFile(fileName, dataString, err => {
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