const fileSystem = require('../utils/read-write');

const main = async () => {
    try {
        const governmentType = await fileSystem.read('../data/country-by-government-type.json');
        const governmentTypeParsed = JSON.parse(governmentType);
        const filterRepublicType = governmentTypeParsed.filter(el => el.government !== null && el.government.toLowerCase().includes('republic'));

        const concatCountries = filterRepublicType.map(el => `Republic of ${el.country}`)
        const concatCountriesString = JSON.stringify(concatCountries);
        // console.log(concatCountriesString);
        await fileSystem.write('../output/filter-republic-gov-type-and-concat-in-country-by-name-data.json', concatCountriesString)

    } catch (e) {
        console.log(e);
    }
}

main();