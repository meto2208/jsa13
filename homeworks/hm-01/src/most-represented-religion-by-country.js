const fileSystem = require('./../utils/read-write');

const main = async () => {
    try {
        const data = await fileSystem.read('../data/country-by-religion.json');
        const parsedData = JSON.parse(data);
        // console.log(parsedData);
        // const unique = [... new Map(parsedData.map((el) => [el['Christianity'], el]).values(),]
        let uniqueObjArray = [
            ...new Map(parsedData.map((item) => [item["religion"], item])).values(),
        ]
        console.log(uniqueObjArray);
    } catch (error) {
        console.log(error);
    }
};

main();

