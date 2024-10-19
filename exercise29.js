
// fetchin data from practice file


async function readData() {
    const data = await fetch('./practice.json')
    const readJson = await data.json();
    console.log(readJson)
    
}
console.log("hey here is your data");

readData()
