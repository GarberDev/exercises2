class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  // minDepth method
  minDepth() {
    const minDepthRecursive = (node) => {
      if (!node) return 0;
      if (!node.left && !node.right) return 1;
      if (!node.left) return minDepthRecursive(node.right) + 1;
      if (!node.right) return minDepthRecursive(node.left) + 1;
      return (
        Math.min(minDepthRecursive(node.left), minDepthRecursive(node.right)) +
        1
      );
    };
    return minDepthRecursive(this.root);
  }

  // maxDepth method
  maxDepth() {
    const maxDepthRecursive = (node) => {
      if (!node) return 0;
      return (
        1 +
        Math.max(maxDepthRecursive(node.left), maxDepthRecursive(node.right))
      );
    };
    return maxDepthRecursive(this.root);
  }

  // maxSum method
  maxSum() {
    let maxSum = Number.MIN_SAFE_INTEGER;

    const maxSumRecursive = (node) => {
      if (!node) return 0;
      const left = Math.max(maxSumRecursive(node.left), 0);
      const right = Math.max(maxSumRecursive(node.right), 0);
      maxSum = Math.max(maxSum, node.val + left + right);
      return node.val + Math.max(left, right);
    };

    maxSumRecursive(this.root);
    return maxSum === Number.MIN_SAFE_INTEGER ? 0 : maxSum;
  }

  // nextLarger method
  nextLarger(lowerBound) {
    let result = null;

    const nextLargerRecursive = (node) => {
      if (!node) return;
      if (node.val > lowerBound && (result === null || node.val < result)) {
        result = node.val;
      }
      nextLargerRecursive(node.left);
      nextLargerRecursive(node.right);
    };

    nextLargerRecursive(this.root);
    return result;
  }

  // Placeholder for further study methods
  areCousins(node1, node2) {}
  static serialize() {}
  static deserialize() {}
  lowestCommonAncestor(node1, node2) {}
}

module.exports = { BinaryTree, BinaryTreeNode };
