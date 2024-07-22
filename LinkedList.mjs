import Node from "./Node.mjs";

class LinkedList {
  list;
  constructor() {
    this.list = null;
  }
  append(key, value) {
    const node = new Node();
    node.key = key;
    node.value = value;

    if (this.list === null) {
      this.list = node;
    } else {
      let current = this.list;
      while (current.nextNode !== null) {
        current = current.nextNode;
      }
      current.nextNode = node;
    }
  }
  prepend(key, value) {
    const node = new Node();
    node.key = key;
    node.value = value;

    if (this.list === null) {
      this.list = node;
    } else {
      node.nextNode = this.list;
      this.list = node;
    }
  }
  size() {
    let size = 0;
    if (this.list === null) {
      return size;
    } else {
      let current = this.list;
      while (current !== null) {
        current = current.nextNode;
        size++;
      }
    }
    return size;
  }
  head() {
    return this.list;
  }
  tail() {
    let current = this.list;
    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    return current;
  }
  at(index) {
    if (index < 0 || index > this.size()) {
      return null;
    }
    let pos = 0;
    let current = this.list;
    while (current !== null && pos < index) {
      current = current.nextNode;
      pos++;
    }
    return current;
  }
  pop() {
    let current = this.list;
    while (current.nextNode.nextNode !== null) {
      current = current.nextNode;
    }
    current.nextNode = null;
  }
  contains(value) {
    let current = this.list;
    while (current !== null) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }
  find(value) {
    let current = this.list;
    let pos = 0;
    while (current !== null) {
      if (current.value === value) {
        return pos;
      }
      pos++;
      current = current.nextNode;
    }
    return null;
  }
  findKey(key) {
    let current = this.list;
    let pos = 0;
    while (current !== null) {
      if (current.key === key) {
        return pos;
      }
      pos++;
      current = current.nextNode;
    }
    return null;
  }
  insertAt(value, index) {
    if (index === 0) {
      this.prepend(value);
      return;
    }
    if (index === this.size()) {
      this.append(value);
      return;
    }

    const node = new Node();
    node.value = value;
    let current = this.list;
    let pos = 0;
    while (current.nextNode !== null) {
      if (pos === index - 1) {
        node.nextNode = current.nextNode;
        current.nextNode = node;
      }
      pos++;
      current = current.nextNode;
    }
  }
  removeAt(index) {
    if (this.size() === 0) {
      return;
    }
    if (index === 0) {
      this.list = this.list.nextNode;
      return;
    }
    if (index === this.size()) {
      this.pop();
      return;
    }

    let current = this.list;
    let pos = 0;
    while (current.nextNode !== null) {
      if (pos === index - 1) {
        current.nextNode = current.nextNode.nextNode;
      }
      pos++;
      current = current.nextNode;
    }
  }
  toArray() {
    const array = [];
    let current = this.list;
    while (current !== null) {
      const pair = [current.key, current.value];

      array.push(pair);
      current = current.nextNode;
    }

    return array;
  }
  toString() {
    let current = this.list;
    let string = "";
    while (current !== null) {
      string += `( Key: ${current.key} Value: ${current.value} ) -> `;
      current = current.nextNode;
    }
    string += "null ";
    return string;
  }
}

export default LinkedList;
