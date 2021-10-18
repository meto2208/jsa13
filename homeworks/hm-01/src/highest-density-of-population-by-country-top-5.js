const fileSystem = require('../utils/read-write');

const main = async () => {
    try {
        const countryByDensity = await fileSystem.read('../data/country-by-population-density.json');
        const countryByDensityParsed = JSON.parse(countryByDensity);
        const filterData = countryByDensityParsed.sort((a, b) => b.density - a.density).slice(0, 5)
        const filteredDataString = JSON.stringify(filterData);
        await fileSystem.write('../output/highest-density-of-population-by-country-top-5.json', filteredDataString)
    } catch (e) {
        console.log(e);
    }
}

main();