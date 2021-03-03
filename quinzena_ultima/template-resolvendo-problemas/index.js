console.log("Hello, world!")

// const homer = {
//     name: "homer Simpson",
//     phrase: "me da Duff"
// }

// console.log(homer["name"]); //acessando homer.name

const tangAges = [18, 21, 30, 44, 18, 21]

function getAgeStatistic(ages) {
    const statistics = {}
    for (let age of ages){
        if (statistics[age] === undefined){
            statistics[age] = 1
        }else{
            statistics[age] += 1
        }
    }
    return statistics
}

console.log(getAgeStatistic(tangAges));