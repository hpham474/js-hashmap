class Node {
    value;
    nextNode;
    constructor() {
        this.value = null;
        this.nextNode = null;
    }
    get value () {
        return this.value;
    }
    get nextNode () {
        return this.nextNode;
    }
    set value (val) {
        this.value = val;
    }
    set nextNode (node) {
        this.nextNode = node;
    }
}

export default Node;