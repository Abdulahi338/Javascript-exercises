
// fetchin data from practice file

async function readData() {
    const data = await fetch('./practice.jsone')
    const readJson = await data.json();
    console.log(re)
    
}