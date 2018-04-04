import Trie from '../scripts/Trie'

import { expect } from 'chai';


describe('Trie', () => {

  describe('insert', () => {
    let trie = new Trie()
    it('should be able to add a node to the Trie', () => {
      trie.insert('car');
      trie.insert('candy');

      expect(trie.root.children.C.val).to.equal('C');
    });
  })

  describe('count', () => {
    it('should increase count when new word is added', () => {
      let trie = new Trie()
      trie.insert('burger')
      trie.insert('burden')
      trie.insert('burst')
      trie.insert('atom')
      trie.insert('zebra')

      expect(trie.wordCount).to.equal(5)
    })

    it('should not increase count when dupe word is added', () => {
      let trie = new Trie()
      trie.insert('daft')
      trie.insert('daunting')
      trie.insert('daft')

      expect(trie.wordCount).to.equal(2)
    })
  })
});
