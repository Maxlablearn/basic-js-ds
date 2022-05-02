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
                                                    //console.log('currentNode -', currentNode);
    while (currentNode) {
                                                    //console.log('--- current --- :', currentNode);
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
      if (currentNode !== this.rootNode) {
        preCurrentNode[lastSide] = null;
      }
      currentNode = null;
      return
    } else {

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

    let replasingNode = currentNode.right;
    let preReplasingNode = currentNode;

    while (replasingNode) {

      if (replasingNode.left === null) {
        
        console.log('----first part-------');
        console.log('currentNode -', currentNode);  

        
        if (currentNode === this.rootNode) {

          console.log('currentNode -', currentNode);                                            
          console.log('---change rootNode--- preRep -', preReplasingNode,'  rep - ',replasingNode,'  last side - ',lastSide);

          this.rootNode = replasingNode;
          preReplasingNode.left = replasingNode.right;
          this.rootNode.left = currentNode.left;
          this.rootNode.right = currentNode.right;
                                                                        
        } else {

          console.log('currentNode -', currentNode);  
          console.log('last side - ', lastSide, '   preCurrentNode -', preCurrentNode, '   replasingNode -', replasingNode);

          replasingNode.left = currentNode.left;
          preCurrentNode[lastSide] = replasingNode;
          preReplasingNode.left = replasingNode.right;
          

          //preReplasingNode.left = null; 
          
        }



        return;
        
        
      } else {
                                                                          console.log('-----second part------  preRep -', preReplasingNode,'  rep - ',replasingNode);
        preReplasingNode = replasingNode;
        replasingNode = replasingNode.left;
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

module.exports = {
  BinarySearchTree
};