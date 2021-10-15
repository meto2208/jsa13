const fileSystem = require('../utils/read-write');

const main = async () => {
    try {
        const data = await fileSystem.read('../data/country-by-independence-date.json');
        const parsedData = JSON.parse(data);
        const filteredData = parsedData.filter((el) => {
            return (el.independence > 1800 && el.independence < 1930)
        })
        const filteredDataDesc = filteredData.sort((a, b) => b.independence - a.independence)
        const filteredDataDescString = JSON.stringify(filteredDataDesc)
        await fileSystem.write('../output/country-by-independence-date-between-1800-and-1930-sorted-desc.json', filteredDataDescString)
    } catch (error) {
        console.log(error);
    }
}

main()