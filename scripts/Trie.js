import TrieNode from './TrieNode'
import fs from 'fs'

class Trie {
  constructor() {
    this.root = new TrieNode()
    this.wordCount = 0
  }

  insert(word) {
     let currNode = this.root
     const upperCase = [...word.toUpperCase()]
     for(const letter of upperCase) {
       if (!currNode.children[letter]) {
         currNode.children[letter] = new TrieNode(upperCase[letter])
       }
       currNode = currNode.children[letter]
     }
     if (!currNode.completeWord) {
       currNode.completeWord = true;
       this.count()
     }
  }

  count() {
    this.wordCount++
    return this.wordCount
  }

  findWord(word) {
    let currNode = this.root
    const upperCase = word.toUpperCase()
    for (let i = 0; i < upperCase.length; i++) {
      if (currNode.children[upperCase[i]]) {
        currNode = currNode.children[upperCase[i]]
      } else {
        return false
      }
    }
    return true
  }

  suggest(word) {
    let currNode = this.root
    const suggestArray = []
    currNode = this.mapWord(word)
    const findSuggestion = (searchWord, currNode) => {
      if (currNode.completeWord) {
        let suggestion = {
          word: searchWord,
          rating: currNode.rating
        }
        suggestArray.push(suggestion)
      }

      if (currNode.children) {
        const childrenKeys = Object.keys(currNode.children)
        childrenKeys.forEach(key => {
          let nextNode = currNode.children[key]
          let prefix = searchWord + key
          findSuggestion(prefix, nextNode)
        })
      }
    }

    findSuggestion(word, currNode)
    const sortSuggestions = suggestArray
                              .sort((w1, w2) => w2.rating - w1.rating)
                              .map(word => word.word)
    return sortSuggestions
  }

  mapWord(word) {
    let currNode = this.root
    for (const letter of word)
      if (currNode.children[letter])
        currNode = currNode.children[letter]

    return currNode
  }

  select(word) {
    let currNode = this.root
    const selectWord = word.toUpperCase()
    for (const letter of selectWord)
      if (currNode.children[letter])
        currNode = currNode.children[letter]
    currNode.rating++
  }

  populate(...array) {
    const text = "/usr/share/dict/words"
    const dictionary = fs.readFileSync(text).toString().trim().split('\n')
    for (let word of dictionary)
      this.insert(word)
    this.count()
  }
}

module.exports = Trie
