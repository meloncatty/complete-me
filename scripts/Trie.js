import TrieNode from './TrieNode'

export default class Trie {
  constructor() {
    this.root = new TrieNode()
    this.wordCount = 0
  }

  insert(word) {
     let currNode = this.root
     const upperLetter = word.toUpperCase()
     for(let letter of upperLetter) {
       if(!currNode.children[letter]) {
         currNode.children[letter] = new TrieNode(upperLetter[letter])
       }
       currNode = currNode.children[letter]
     }
     if(!currNode.completeWord) {
       currNode.completeWord = true;
       this.count()
     }
  }

  find(word) {
    let currNode = this.root
    const upperLetter = word.toUpperCase()
    for(let letter of upperLetter) {
      if(currNode.children[letter]) {
        currNode = currNode.children[letter]
      } else {
        return false
      }
    }
    return true
  }

  deleteWord(word) {

  }

  suggest(word) {
    let currNode = this.root
    const suggestArray = []

    currNode = this.mapWord(word)

    const findSuggestion = (searchWord, currNode) => {
      if(currNode.completeWord) {
        suggestArray.push(searchWord)
      }

      if(currNode.children) {
        const childrenKeys = Object.keys(currNode.children)
        childrenKeys.forEach(key => {
          let nextNode = currNode.children[key]
          let prefix = searchWord + key
          console.log(prefix)
          findSuggestion(prefix, nextNode)
        })
      }
    }

    findSuggestion('', currNode)
    return suggestArray
  }

  mapWord(word) {
    let currNode = this.root

    for (let letter of word)
      if (currNode.children[letter])
        currNode = currNode.children[letter]

    return currNode
  }

  count() {
    this.wordCount++
    return this.wordCount
  }
}
