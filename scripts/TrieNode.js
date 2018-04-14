class TrieNode {
  constructor(word = null) {
    this.val = word
    this.children = {}
    this.completeWord = false
  }
}

module.exports = TrieNode
