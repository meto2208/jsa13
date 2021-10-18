const fileSystem = require('../utils/read-write');




const main = async () => {
    try {
        const countryName = await fileSystem.read('../data/country-by-name.json');
        const countryNameParsed = JSON.parse(countryName);
        const filterSpecificCountry = countryNameParsed.find((el) => el.country.toLowerCase() === "north macedonia");


        const countryCapCity = await fileSystem.read('../data/country-by-capital-city.json');
        const countryCapCityParsed = JSON.parse(countryCapCity);
        const findCapitalCity = countryCapCityParsed.find((el) => el.city !== null && el.city.toLowerCase() === "skopje");

        const religionInMac = await fileSystem.read('../data/country-by-religion.json');
        const religionInMacParsed = JSON.parse(religionInMac);
        const findReligionInMac = religionInMacParsed.find((el) => el.country.toLowerCase() === "macedonia");

        const governmentType = await fileSystem.read('../data/country-by-government-type.json');
        const governmentTypeParsed = JSON.parse(governmentType);
        const findGovTypeInMac = governmentTypeParsed.find(el => el.country.toLowerCase() === "north macedonia");

        const currency = await fileSystem.read('../data/country-by-currency-name.json');
        const currencyParsed = JSON.parse(currency);
        const currencyInMac = currencyParsed.find(el => el.country.toLowerCase() === "north macedonia");

        const population = await fileSystem.read('../data/country-by-population.json');
        const populationParsed = JSON.parse(population);
        const populationInMkd = populationParsed.find(el => el.country.toLowerCase() === "north macedonia");

        const macedonia = [
            {
                country: filterSpecificCountry.country.replace('North', "").trim(),
                capitol: findCapitalCity.city,
                religion: findReligionInMac.religion,
                government_type: findGovTypeInMac.government,
                currency: currencyInMac.currency_name,
                population: populationInMkd.population
            }
        ]

        const macedoniaString = JSON.stringify(macedonia)
        await fileSystem.write('../output/macedonia.json', macedoniaString)

    } catch (error) {
        console.log(error);
    }
}

main();