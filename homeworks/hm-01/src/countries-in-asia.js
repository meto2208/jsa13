const fileSystem = require('../utils/read-write');

const main = async () => {
    try {
        const data = await fileSystem.read('../data/country-by-continent.json');
        const parsedData = JSON.parse(data);
        const filteredData = parsedData.filter(el => el.continent === "Asia");
        const filteredDataString = JSON.stringify(filteredData);
        await fileSystem.write('../output/countries-in-asia.json', filteredDataString);
        console.log(filteredData);
    } catch (error) {
        console.log(error);
    }
}

main();