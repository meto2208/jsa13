const fileSystem = require('../utils/read-write');

const main = async () => {
    try {
        const data = await fileSystem.read('../data/country-by-government-type.json');
        const parsedData = JSON.parse(data);
        const filteredData = parsedData.filter((el) => {
            if (el.country[1] === "l" && el.government === "Republic") {
                return el
            }
        })
        const filteredDataString = JSON.stringify(filteredData);
        await fileSystem.write('../output/country-by-goverment-type-with-second-letter-n-and-gov-type-republic.json', filteredDataString)
    } catch (err) {
        console.log(err);
    }
}
main()