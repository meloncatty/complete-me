import Trie from '../scripts/Trie'
import TrieNode from '../scripts/TrieNode'
import { expect } from 'chai';


describe('Trie', () => {
  it('should instantiate a new trie', () => {
    let trie = new Trie()

    expect(trie).to.be.an.instanceof(Trie)
  })

  it('should have root property default to new TrieNode', () => {
    let trie = new Trie()

    expect(trie.root).to.be.an.instanceof(TrieNode)
  })

  it('should have wordCount property default to 0', () => {
    let trie = new Trie()

    expect(trie.wordCount).to.equal(0)
  })

  describe('insert', () => {
    it('should insert a new word', ()=> {
      let trie = new Trie()
      trie.insert('pals')

      expect(trie.findWord('pals')).to.equal(true)
    })
  })

  describe('findWord', () => {
    it('should return true if word is found', () => {
      let trie = new Trie()
      trie.insert('shells')

      expect(trie.findWord('shells')).to.equal(true)
    })

    it('should retrun false if word does not exist', () =>{
      let trie = new Trie()
      trie.insert('ghost')

      expect(trie.findWord('just')).to.equal(false)
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

  describe('populate', () => {
    it('should populate trie and be able to count large data', () => {
      let trie = new Trie()
      trie.populate()

      expect(trie.wordCount).to.equal(234372)
    })

    it('should suggest words correctly with large data', ()=> {
      let trie = new Trie()
      trie.populate()

      expect(trie.suggest('ZEST')).to.deep.equal([ 'ZEST', 'ZESTFUL', 'ZESTFULLY', 'ZESTFULNESS', 'ZESTY' ])
    })

    it('should not insert word if it already exists', ()=> {
      let trie = new Trie()
      trie.populate()
      trie.insert('ZEST')

      expect(trie.wordCount).to.equal(234372)
    })
  })

  describe('select', () => {

    it('should increase word rating when selected', ()=> {
      let trie = new Trie()

      trie.insert('less')
      trie.select('less')

      expect(trie.root.children.L.children.E.children.S.children.S.rating).to.equal(1)
    })
  })
});
