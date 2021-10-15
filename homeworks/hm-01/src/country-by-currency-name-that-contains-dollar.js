const fileSystem = require('./../utils/read-write');

const main = async () => {
    try {
        const data = await fileSystem.read('./../source/country-by-currency-name.json');
        const parsedData = JSON.parse(data);
        const filteredData = parsedData.filter((el) => {
            if (el.currency_name !== null) {
                return el.currency_name.toLowerCase().includes('dollar')
            }
        })
        const filteredDataString = JSON.stringify(filteredData)
        await fileSystem.write('./../output/country-by-currency-name-that-contains-dollar.json', filteredDataString)
    } catch (error) {
        console.log(error);
    }
}

main()