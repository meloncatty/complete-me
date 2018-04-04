import Trie from '../scripts/Trie'

import { expect } from 'chai';


describe('Trie', () => {

  describe('insert', () => {
    let tree = new Trie()
    it('should be able to add a node to the Tree', () => {
      tree.insert('car');
      tree.insert('candy');

      expect(tree.root.children.C.val).to.equal('C');
    });

  })
});
