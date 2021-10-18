const fileSystem = require('../utils/read-write');

const main = async () => {
    try {
        const data = await fileSystem.read('../data/country-by-languages.json');
        const parsedData = JSON.parse(data);
        // console.log(parsedData)

        const filteredData = parsedData.map((el) => el.languages);
        for (let i = 0; i < filteredData.length; i++) {
            for (let j = 0; j < filteredData[i].length; j++) {

                console.log(filteredData[i][j]);



            }


        }

    } catch (err) {
        console.log(err);
    }
}

main()