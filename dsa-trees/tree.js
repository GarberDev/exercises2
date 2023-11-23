/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */
  sumValues() {
    const sumValuesRecursive = (node) => {
      if (!node) return 0;
      let sum = node.val;
      for (const child of node.children) {
        sum += sumValuesRecursive(child);
      }
      return sum;
    };
    return sumValuesRecursive(this.root);
  }

  /** countEvens(): count all of the nodes in the tree with even values. */
  countEvens() {
    const countEvensRecursive = (node) => {
      if (!node) return 0;
      let count = node.val % 2 === 0 ? 1 : 0;
      for (const child of node.children) {
        count += countEvensRecursive(child);
      }
      return count;
    };
    return countEvensRecursive(this.root);
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */
  numGreater(lowerBound) {
    const numGreaterRecursive = (node) => {
      if (!node) return 0;
      let count = node.val > lowerBound ? 1 : 0;
      for (const child of node.children) {
        count += numGreaterRecursive(child);
      }
      return count;
    };
    return numGreaterRecursive(this.root);
  }
}

module.exports = { Tree, TreeNode };
