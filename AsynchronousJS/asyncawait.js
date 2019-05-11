async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  console.log(data);
}

// with a function declartion and destructuring
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]
const getData = async function() {
  try {
    const [users, posts, albums] = await Promise.all(
      urls.map(url => fetch(url).then(res => res.json()))
    );
    console.log('users', users)
    console.log('posts', posts)
    console.log('albums', albums)
  } catch (err) {
    console.log(err);
  }
};
