const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootNode = null;
  }


  root() {
    return this.rootNode;
  }


  add(data) {
    const newNode = new Node(data);
    if (!this.rootNode) {
      this.rootNode = newNode;
      return;
    }
    let currentNode = this.rootNode;

    while (currentNode) {
      if (newNode.data < currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      }
    }
  }


  has(data) {
    let currentNode = this.rootNode;
    while (currentNode) {
      if (currentNode.data === data) {return true}
      if (currentNode.data > data) {
        console.log('currentNode is - ',currentNode);
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }

  find(data) {
    let currentNode = this.rootNode;
                                        console.log('--- data --- :', data);
    while (currentNode) {
                                                  console.log('--- current --- :', currentNode);
      if (currentNode.data === data) {return currentNode}
      if (currentNode.data > data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return null;
  }

  remove(data) {
    let currentNode = this.rootNode;
    let preCurrentNode = null;
    let lastSide = null
                                                  console.log('currentNode -', currentNode);
    while (currentNode) {
                                                    console.log('--- current --- :', currentNode);
      if (currentNode.data === data) {break}
      if (currentNode.data > data) {
        preCurrentNode = currentNode;
        lastSide = 'left';
        currentNode = currentNode.left;
      } else {
        preCurrentNode = currentNode;
        lastSide = 'right';
        currentNode = currentNode.right;
      }
    }
    
    if (currentNode.left === null && currentNode.right === null) {
      preCurrentNode[lastSide] = null;
      currentNode = null;
    } else {
      if (currentNode.left === null || currentNode.right === null) {
        if (currentNode.right === null) {
          preCurrentNode.left = currentNode.left;
        } else {
          preCurrentNode.right = currentNode.right;
        }
      }
    }
  }

  min() {
  
  }

  max() {
  
  }
}

module.exports = {
  BinarySearchTree
};