import records from './Records.js';

// let collectionCopy = JSON.parse(JSON.stringify(records));

console.log(records); //check records before the update

//call the update function that accepts 3 arguments
function updateRoster(id, prop, value) {
    // if(value === ''){
    //     delete records[id][prop]
    // } 
    // if its a roster update then push the new value into the array else update the object value 
    if (prop !== "currentRoster") {
        records[id][prop] = value;
    } else {
        records[id][prop].push(value);
    }
}

updateRoster(10, "currentRoster", {firstName: "raymond", lastName: "felton", number: 99, position: "G"}) // Add Player to OKC
updateRoster(6, "city", "San Francisco") // Changed the city for GSW
console.log(records);
