const fileSystem = require('../utils/read-write');

const main = async () => {
    try {
        const data = await fileSystem.read('../data/country-by-yearly-average-temperature.json');
        const parsedData = JSON.parse(data);
        const yearlyColdestCountry = parsedData.sort((a, b) => a.temperature - b.temperature).slice(0, 1)
        const yearlyColdestCountryString = JSON.stringify(yearlyColdestCountry);
        await fileSystem.write('../output/yearly-coldest-country.json', yearlyColdestCountryString)
    } catch (error) {
        console.log(error);
    }
}

main()