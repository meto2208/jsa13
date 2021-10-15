const func = require('../utils/read-write');


const main = async () => {
    try {
        const data = await func.read('./../data/data.json');
        const dataJSON = JSON.parse(data);
        const filteredStudents = dataJSON.filter(d => d.prosek > 7.5)
        const dataString = JSON.stringify(filteredStudents)
        await func.write('./../new_data/filtered_studens.json', dataString)
    } catch (error) {
        console.log(error);
    }
}

main()