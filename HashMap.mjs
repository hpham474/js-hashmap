import LinkedList from "./LinkedList.mjs";

class HashMap {
  buckets;
  capacity;
  loadFactor;
  constructor() {
    this.buckets = [];
    this.capacity = 16;
    this.loadFactor = 0.75;
    for (let i = 0; i < this.capacity; i++) {
      const list = new LinkedList();
      this.buckets[i] = list;
    }
  }
  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode;
  }
  rehash() {
    this.capacity = this.capacity * 2;
    for (let i = this.capacity / 2; i < this.capacity; i++) {
      const list = new LinkedList();
      this.buckets[i] = list;
    }

    const entries = this.entries();
    this.clear();
    for (const entry of entries) {
      this.set(entry[0], entry[1]);
    }
  }
  set(key, value) {
    let bucketIndex = this.hash(key) % this.capacity;

    if (bucketIndex < 0 || bucketIndex >= this.capacity) {
      throw new Error("Trying to access index out of bound");
    }

    if (this.has(key) === true) {
      const listPos = this.buckets[bucketIndex].findKey(key);
      this.buckets[bucketIndex].at(listPos).value = value;
    } else {
      if (this.length() / this.capacity >= this.loadFactor) {
        this.rehash();
        bucketIndex = this.hash(key) % this.capacity;
      }

      this.buckets[bucketIndex].append(key, value);
    }
  }
  get(key) {
    const bucketIndex = this.hash(key) % this.capacity;

    if (bucketIndex < 0 || bucketIndex >= this.capacity) {
      throw new Error("Trying to access index out of bound");
    }

    const listPos = this.buckets[bucketIndex].findKey(key);

    if (listPos === null) {
      return null;
    }

    const value = this.buckets[bucketIndex].at(listPos).value;

    return value;
  }
  has(key) {
    const bucketIndex = this.hash(key) % this.capacity;

    if (bucketIndex < 0 || bucketIndex >= this.capacity) {
      throw new Error("Trying to access index out of bound");
    }

    const listPos = this.buckets[bucketIndex].findKey(key);

    if (listPos === null) {
      return false;
    }
    return true;
  }
  remove(key) {
    const bucketIndex = this.hash(key) % this.capacity;

    if (bucketIndex < 0 || bucketIndex >= this.capacity) {
      throw new Error("Trying to access index out of bound");
    }

    const listPos = this.buckets[bucketIndex].findKey(key);

    if (listPos === null) {
      return false;
    }
    this.buckets[bucketIndex].removeAt(listPos);

    return true;
  }
  length() {
    return this.entries().length;
  }
  clear() {
    for (let i = 0; i < this.capacity; i++) {
      const list = new LinkedList();
      this.buckets[i] = list;
    }
  }
  keys() {
    let list = [];
    for (let i = 0; i < this.capacity; i++) {
      if (this.buckets[i].toArray().length !== 0) {
        list = list.concat(this.buckets[i].toKeyArray());
      }
    }

    return list;
  }
  values() {
    let list = [];
    for (let i = 0; i < this.capacity; i++) {
      if (this.buckets[i].toArray().length !== 0) {
        list = list.concat(this.buckets[i].toValueArray());
      }
    }

    return list;
  }
  entries() {
    let list = [];
    for (let i = 0; i < this.capacity; i++) {
      if (this.buckets[i].toArray().length !== 0) {
        list = list.concat(this.buckets[i].toArray());
      }
    }

    return list;
  }
  print() {
    for (let i = 0; i < this.capacity; i++) {
      console.log(`${i}: ${this.buckets[i].toString()}`);
    }
  }
}

export default HashMap;
