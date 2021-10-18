const fileSystem = require('../utils/read-write');

const main = async () => {
    try {
        const data = await fileSystem.read('../data/country-by-languages.json');
        const parsedData = JSON.parse(data);
        // console.log(parsedData)

        const filteredData = parsedData.map((el) => el.languages)
        console.log(filteredData);

        // const filtering = filteredData.map(el => el.map(e => e.languages))
        // console.log(filtering);
        // for (let i = 0; i < filteredData.length; i++) {
        // for (let j = 0; j < filteredData[i].length; j++) {
        // var save = filteredData[i][j]
        // newArray.push(filteredData[i][j])
        // console.log(newArray);
        // if(filteredData[i][j] === )
        // console.log(typeof (filteredData[i][j]));
        // console.log(newArray);


        // }
        // console.log(filteredData[i]);

        // }

    } catch (err) {
        console.log(err);
    }
}

main()