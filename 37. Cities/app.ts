function describe_city(city: string, country: string = "Pakistan"){
    console.log(`${city} is in ${country}.`);
}

describe_city("Karachi")
describe_city("London", "England")
describe_city("New york", "USA")