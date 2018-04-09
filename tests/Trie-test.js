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

  describe('find', () => {
    it('should find a word', () => {
      let trie = new Trie()

      trie.insert('buckaroo')
      trie.insert('bonzai')

      expect(trie.find('buckaroo')).to.equal(true)
    })
  })

  describe('suggest', () => {
    it('should suggest a word based on a prefix', () => {
      let trie = new Trie()

      trie.insert('bat')
      trie.insert('bath')
      trie.insert('bathmat')
      trie.insert('bathing')
      trie.suggest('ba')
      console.log(JSON.stringify(trie, null, 4))
      expect(trie.suggest('ba')).to.deep.equal(['bat', 'bath', 'bathmat', 'bathing'])
    })
  })
});
