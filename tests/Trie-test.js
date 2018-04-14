import Trie from '../scripts/Trie'
import { expect } from 'chai';


describe('Trie', () => {

  describe('insert', () => {
    let trie = new Trie()
    it('should be able to add a node to the Trie', () => {
      trie.insert('car');
      trie.insert('candy');

      // expect(trie.root.children.[0].val).to.equal()
    })
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

  describe('findWord', () => {
    it('should find a word', () => {
      let trie = new Trie()

      trie.insert('buckaroo')
      trie.insert('bonzai')

      expect(trie.findWord('buckaroo')).to.equal(true)
    })
  })

  describe('suggest', () => {
    it('should suggest a word based on a prefix', () => {
      let trie = new Trie()

      trie.insert('bat')
      trie.insert('bath')
      trie.insert('bathmat')
      trie.insert('bathing')

      expect(trie.suggest('BA')).to.deep.equal(['BAT', 'BATH', 'BATHMAT', 'BATHING'])
    })
  })

  describe('createDictionary', () => {
    it('should be able to count large data', () => {
      let trie = new Trie()
      trie.createDictionary()

      expect(trie.wordCount).to.equal(234372)
    })

    it('should suggest words correctly with large data', ()=> {
      let trie = new Trie()
      trie.createDictionary()

      expect(trie.suggest('ZEST')).to.deep.equal([ 'ZEST', 'ZESTFUL', 'ZESTFULLY', 'ZESTFULNESS', 'ZESTY' ])
    })
  })
});
