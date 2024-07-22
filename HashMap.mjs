import LinkedList from "./LinkedList.mjs";

class HashMap {
  buckets;
  capacity;
  loadFactor;
  constructor() {
    this.buckets = [];
    this.capacity = 16;
    this.loadFactor = 0.75;
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

    if (this.buckets[bucketIndex] === undefined) {
      const list = new LinkedList();
      list.append(key, value);
      this.buckets[bucketIndex] = list;
    } else {
      this.buckets[bucketIndex].append(key, value);
    }
  }
  get(key) {
    const bucketIndex = this.hash(key) % this.capacity;

    if (bucketIndex < 0 || bucketIndex >= this.capacity) {
      throw new Error("Trying to access index out of bound");
    }

    const listPos = this.buckets[bucketIndex].findKey(key);
    const value = this.buckets[bucketIndex].at(listPos).value;

    return value;
  }
  has(key) {}
  remove(key) {}
  length() {}
  clear() {}
  keys() {}
  values() {}
  entries() {
    const list = [];
    for (let i = 0; i < this.capacity; i++) {
      if (this.buckets[i] !== undefined) {
        list.push(this.buckets[i].toArray());
      }
    }

    return list;
  }
}

export default HashMap;
