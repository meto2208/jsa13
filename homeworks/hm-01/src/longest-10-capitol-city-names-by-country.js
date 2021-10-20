const fileSystem = require('../utils/read-write');
const fs = require('fs')

const getArrayLongestCapitolCities = (arr) => {

    const lengthOfCharInString = arr.map((el) => {
        if (el.city !== null) {
            return el.city.split(' ').join('').length
        }
    })
    const sortNumsDescAndPickTenthNum = lengthOfCharInString.sort((a, b) => b - a).slice(9, 10)
    console.log(lengthOfCharInString);
    const filteredArray = arr.filter((el) => {
        if (el.city !== null) {
            const removingSpaces = el.city.split(' ').join(' ');
            if (removingSpaces.length > sortNumsDescAndPickTenthNum[0]) {
                return {
                    country: el.country,
                    city: el.city
                }
            }
        }
    })
    return filteredArray
}


const main = async () => {
    try {
        const data = await fileSystem.read('../data/country-by-capital-city.json');
        const parsedData = JSON.parse(data)
        const filteredData = await getArrayLongestCapitolCities(parsedData);
        const filteredDataSortAndPickLongestTenNames = filteredData.sort((a, b) => b.city.length - a.city.length).slice(0, 10);
        const filteredDataSortAndPickLongestTenNamesString = JSON.stringify(filteredDataSortAndPickLongestTenNames);
        await fileSystem.write('../output/longest-10-capitol-city-names.json', filteredDataSortAndPickLongestTenNamesString);

    } catch (error) {
        console.log(error);
    }
}

main()
