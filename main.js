// Wardrobe Exercise

/*

const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
}

wardrobe.material = "Cedar"

console.log(wardrobe)

//Empire State Building

const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}

console.log(empireStateBuilding.stories, empireStateBuilding.height, empireStateBuilding.squareFeet, empireStateBuilding.eastWestLength, empireStateBuilding.northSouthLength)
console.log(empireStateBuilding["address"])
console.log(empireStateBuilding["constructionDate"])
console.log(empireStateBuilding["owner"])
console.log(empireStateBuilding["architect"])

*/

//Nashville Software School

const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Mark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}

console.log(nashvilleSoftwareSchool.instructors.partTime)
console.log(nashvilleSoftwareSchool.instructors.fullTime)
console.log(nashvilleSoftwareSchool.instructors.fullTime[4], nashvilleSoftwareSchool.instructors.partTime[0])