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
  set(key, value) {
    const bucketIndex = this.hash(key) % this.capacity;

    if (bucketIndex < 0 || bucketIndex >= this.capacity) {
      throw new Error("Trying to access index out of bound");
    }

    // TODO: RESIZE HASHMAP IF NECESSARY

    this.buckets[bucketIndex].append(key, value);
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
  keys() {}
  values() {}
  entries() {
    let list = [];
    for (let i = 0; i < this.capacity; i++) {
      if (this.buckets[i].toArray().length !== 0) {
        list = list.concat(this.buckets[i].toArray());
      }
    }

    return list;
  }
}

export default HashMap;
