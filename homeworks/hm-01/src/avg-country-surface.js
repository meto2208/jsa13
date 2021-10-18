const fileSystem = require('../utils/read-write');

const main = async () => {
    try {
        const data = await fileSystem.read('../data/country-by-surface-area.json');
        const parsedData = JSON.parse(data);
        const avgSurface = parsedData.reduce((acc, val, i, arr) => {
            return (acc + val.area) / arr.length
        }, 0);
        const returnObj = {
            avgSurfByCountry: avgSurface
        }
        const returnObjString = JSON.stringify(returnObj)

        await fileSystem.write('../output/avg-country-surface.json', returnObjString)
    } catch (error) {
        console.log(error);
    }
}

main();