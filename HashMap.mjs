class HashMap {
  list;
  capacity;
  loadFactor;
  constructor() {
    this.list = [];
    this.capacity = 16;
    this.loadFactor = 0.8;
  }
  hash(key) {
    let hashCode = 0;
      
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode;
  }
  set(key, value) {}
  get(key) {}
  has(key) {}
  remove(key) {}
  length() {}
  clear() {}
  keys() {}
  values() {}
  entries() {}
}