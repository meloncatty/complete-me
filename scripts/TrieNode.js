export default class TrieNode {
  constructor(letter = null) {
    this.val = letter
    this.children = {} //key-value pairs of letters
    this.completeWord = false
    this.next = null
  }
}
