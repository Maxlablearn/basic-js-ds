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
    if (this.has(data)) {return}
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
                                              //console.log('currentNode is - ',currentNode);
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }

  find(data) {
    let currentNode = this.rootNode;
                                        //console.log('--- data --- :', data);
    while (currentNode) {
                                                  //console.log('--- current --- :', currentNode);
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
            
    if (!this.has(data)) return;

               //search node and preNode
    while (currentNode) {

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
    
                // remove for node with no children
    if (currentNode.left === null && currentNode.right === null) {
      if (currentNode !== this.rootNode) {
        preCurrentNode[lastSide] = null;
      }
      currentNode = null;
      return
    } else {

                // remove for node with 1 children
      if (currentNode.left === null || currentNode.right === null) {
        if (currentNode.right === null) {
          if (currentNode !== this.rootNode) {
            preCurrentNode.left = currentNode.left;
          } else {
            this.rootNode = currentNode.left;
          }
          
        } else {
          if (currentNode !== this.rootNode) {
            preCurrentNode.right = currentNode.right;
          } else {
            this.rootNode = currentNode.right;
          }
        }
        return
      }
    }

                  // remove node with 2 children
    let replacingNode = currentNode.right;
    let repLastSide = 'right';
    let preReplacingNode = currentNode;

    while (replacingNode) {

      if (replacingNode.left === null) {
        
        if (currentNode === this.rootNode) {

          this.rootNode = replacingNode;
          preReplacingNode.left = replacingNode.right;
          this.rootNode.left = currentNode.left;
          this.rootNode.right = currentNode.right;
                                                                        
        } else {

          if (currentNode !== preReplacingNode) {
            preReplacingNode.left = replacingNode.right;
          }

          replacingNode.left = null;
          if (currentNode !== preReplacingNode) {
            replacingNode.right = preReplacingNode;
          } 
          preCurrentNode[lastSide] = replacingNode;
          replacingNode.left = currentNode.left;

          
        }

        return;
        
      } else {
        
        preReplacingNode = replacingNode;
        replacingNode = replacingNode.left;
        repLastSide = 'left'
      }
    }
  }

  min() {
    let currentNode = this.rootNode;

    while (currentNode) {
      if (currentNode.left === null) {
        return currentNode.data;
      }
      currentNode = currentNode.left;
    }
  }

  max() {
    let currentNode = this.rootNode;
    while (currentNode) {
      if (currentNode.right === null) {
        return currentNode.data;
      }
      currentNode = currentNode.right;
    }
  }
}
// [50,25,75,12,35,64,100,4,20,29,45,54,69,90,120,16,31,55,80]

module.exports = {
  BinarySearchTree
};