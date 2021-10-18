const fileSystem = require('../utils/read-write');

const main = async () => {
    try {
        const data = await fileSystem.read('../data/country-by-calling-code.json');
        const parsedData = JSON.parse(data);
        const addPlusSignBeforeCode = parsedData.map((el) => {
            const countryCallingCode = {
                country: el.country,
                code: `+${el.calling_code}`
            }

            return countryCallingCode
        })
        const addPlusSignBeforeCodeString = JSON.stringify(addPlusSignBeforeCode);
        await fileSystem.write('../output/country-calling-code-with-plus-sign-before-code.json', addPlusSignBeforeCodeString);


    } catch (e) {
        console.log(e);
    }
}

main();