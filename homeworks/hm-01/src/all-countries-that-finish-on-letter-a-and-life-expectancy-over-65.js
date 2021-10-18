const fileSystem = require('../utils/read-write');

const main = async () => {
    try {
        const data = await fileSystem.read('../data/country-by-life-expectancy.json');
        const parsedData = JSON.parse(data);
        const filteredDataByLastLetterAndLifeExpectancy = parsedData.filter(el => el.country.charAt(el.country.length - 1) === "a" && el.expectancy > 65);
        const filteredDataByLastLetterAndLifeExpectancyString = JSON.stringify(filteredDataByLastLetterAndLifeExpectancy);
        await fileSystem.write('../output/all-countries-that-finish-on-letter-a-and-life-exp-over-65.json', filteredDataByLastLetterAndLifeExpectancyString)

        console.log(filteredDataByLastLetter);
    } catch (error) {
        console.log(error);
    }
}

main()