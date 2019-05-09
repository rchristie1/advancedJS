
// Real World Example
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url => 
   fetch(url).then(res => res.json())
)).then(results => {
  console.log(results[0])
  console.log(results[1])
  console.log(results[2])
})
// Real world Example End

// Custom promises
const promise = new Promise((resolve, reject) => {
  if(true){
    resolve('Worked');
  } else {
    reject ('Failed');
  }
})

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'Promise 1 found')
})
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'Promise 2 found')
})
const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 5000, 'Promise 3 found')
})

Promise.all([promise, promise2, promise3, promise4])
  .then(values => {
    console.log(values);
  })

  // Custom Promise End
