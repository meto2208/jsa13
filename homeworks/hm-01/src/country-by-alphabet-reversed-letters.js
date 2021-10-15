const fileSystem = require('../utils/read-write');

const main = async () => {
    try {
        const data = await fileSystem.read('../data/country-by-name.json');
        const parsedData = JSON.parse(data)
        const reversedData = parsedData.map((el) => {
            return {
                country: el.country.split("").reverse().join("")
            }


        })
        const reversedDataString = JSON.stringify(reversedData)
        await fileSystem.write('../output/country-by-alphabet-reversed-letters.json', reversedDataString)
    } catch (err) {
        console.log(err);
    }
}

main()