import { TreeNode, lowestCommonAncestor } from './lowestCommonAncestor';

describe('#lowestCommonAncestor', () => {
  describe('example 1', () => {
    const node5 = new TreeNode(5, new TreeNode(6), new TreeNode(2, new TreeNode(7), new TreeNode(4)));
    const node1 = new TreeNode(1, new TreeNode(0), new TreeNode(8));
    const root = new TreeNode(3, node5, node1);

    it('returns as expected', () => {
      expect(lowestCommonAncestor(root, node5, node1)).toBe(root);
    });
  });

  describe('example 2', () => {
    const node6 = new TreeNode(6);
    const node7 = new TreeNode(7);
    const node4 = new TreeNode(4);
    const node8 = new TreeNode(8);
    const node2 = new TreeNode(2, node7, node4);
    const node5 = new TreeNode(5, node6, node2);
    const node0 = new TreeNode(0);
    const node1 = new TreeNode(1, node0, node8);
    const root = new TreeNode(3, node5, node1);

    it('returns as expected', () => {
      expect(lowestCommonAncestor(root, node5, node4)).toBe(node5);
    });
  });
});
