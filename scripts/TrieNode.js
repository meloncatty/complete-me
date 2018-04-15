class TrieNode {
  constructor(word = null) {
    this.val = word
    this.children = {}
    this.completeWord = false
    this.rating = 0
  }
}

module.exports = TrieNode
