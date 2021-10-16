const fileSystem = require('../utils/read-write');

const main = async () => {
    try {
        const data = await fileSystem.read('../data/country-by-religion.json');
        const parsedData = JSON.parse(data);

        const uniqueReligion = [
            ...new Map(parsedData.map((item) => [item["religion"], item.religion])).values(),
        ]
        const uniqueReligionString = JSON.stringify(uniqueReligion)
        await fileSystem.write('../output/all-religions-represented-in-data.json', uniqueReligionString)
    } catch (error) {
        console.log(error);
    }
};

main();

