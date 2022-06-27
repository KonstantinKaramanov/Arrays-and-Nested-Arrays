function towns(list) {
    // iterate input
    // parse each element
    // store result

    const result = {};

    for (const town of list) {
        const tokens = town.split(' <-> ');
        const name = tokens[0];
        let population = Number(tokens[1]);

        if (result[name] != undefined) {
            population += result[name];
        }
        result[name] = population;
    }

    //print result
    
    for (let [name, population] of Object.entries(result)) {
        console.log(`${name} : ${population}`);
    }
}

towns(['Sofia <-> 1200000', 'Montana <-> 20000', 'New York <-> 10000000', 'Washington <-> 2345000', 'Las Vegas <-> 1000000']);
towns(['Istanbul <-> 100000', 'Honk Kong <-> 2100004', 'Jerusalem <-> 2352344', 'Mexico City <-> 23401925', 'Istanbul <-> 1000']);
