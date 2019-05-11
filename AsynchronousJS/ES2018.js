//Object spread operator
const players = {
  lebron: 23,
  harden: 13,
  kobe: 8,
  durant: 35
};

const { kobe, ...rest } = players;

console.log(kobe, rest);


//For await of
const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function() {
  const arrOfPromises = urls.map(url => fetch(url)) //create an array of fetch promises of the requests
  for await(let req of arrOfPromises) {
    const data = await req.json();
    console.log(data);
  }
}

getData();


// Finally block
/* try {
    
} catch (error) {
    
}finally {

} */
