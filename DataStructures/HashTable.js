class HashTable {
  constructor(size) {
    // data will instantiate a new array where the info will reside
    this.data = new Array(size);
  }

  // hash funtion that creates the hash table
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      // generate a random key code but make sure it's within
      // the length of the hash table using the modulus(%)
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  // set the new KVP
  set(key, value) {
    let address = this._hash(key);
    // if there is nothing in the area add the new KVP
    if (!this.data[address]) {
      this.data[address] = [];
    }
    // else push on to the existing array if memory space full
    this.data[address].push([key, value]);
    return this.data;
  }

  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    // if the current bucket has something in it
    if (currentBucket) {
      // loop over the items in the bucket until we find the bucket
      // that contains the key and return the data
      for (let i = 0; i < currentBucket.length; i++) {
        // search by the 'key' which in this case is the name of the player
        if (currentBucket[i][0] === key) {
          return `player: ${currentBucket[i][0]}, number: ${currentBucket[i][1]}`;
        }
      }
    }
    return undefined;
  }

  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i][0]) {
        keysArray.push(this.data[i][0]);
      }
    }
    return keysArray;
  }
}

// instantiate a new hash table with a fixed length
const myHashTable = new HashTable(50);

// add items to the table
myHashTable.set('kobe', 24);
myHashTable.set('lebron', 23);
myHashTable.set('harden', 13);
myHashTable.set('durant', 35);
myHashTable.set('jordan', 23);
myHashTable.set('ewing', 33);
myHashTable.set('shaq', 34);
myHashTable.set('garnett', 21);

// retrieve items from the table
myHashTable.get('shaq');
