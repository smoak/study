export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export const lowestCommonAncestor = (root: TreeNode, p: TreeNode, q: TreeNode): TreeNode | null => {
  const stack = [root];
  const parents: Record<number, TreeNode> = {};

  while (!(p.val in parents) || !(q.val in parents)) {
    const node = stack.pop();

    if (!node) {
      break;
    }

    if (node.left) {
      parents[node.left.val] = node;
      stack.push(node.left);
    }

    if (node.right) {
      parents[node.right.val] = node;
      stack.push(node.right);
    }
  }

  const ancestors = new Set<TreeNode>();

  let pValue = p;
  while (pValue) {
    ancestors.add(pValue);
    pValue = parents[pValue.val];
  }

  let qValue = q;
  while (!ancestors.has(qValue)) {
    qValue = parents[qValue.val];
  }

  return qValue;
};
