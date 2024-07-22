class Node {
  key;
  value;
  nextNode;
  constructor() {
    this.key = null;
    this.value = null;
    this.nextNode = null;
  }
  get key() {
    return this.key;
  }
  get value() {
    return this.value;
  }
  get nextNode() {
    return this.nextNode;
  }
  set key(key) {
    this.key = key;
  }
  set value(val) {
    this.value = val;
  }
  set nextNode(node) {
    this.nextNode = node;
  }
}

export default Node;
