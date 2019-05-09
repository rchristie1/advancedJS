//Object spread operator
const players = {
  lebron: 23,
  harden: 13,
  kobe: 8,
  durant: 35
};

const { kobe, ...rest } = players;

console.log(kobe, rest);



// Finally block
/* try {
    
} catch (error) {
    
}finally {

} */
