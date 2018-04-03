import { expect } from 'chai';
import Node from '../scripts/TrieNode'

describe('TrieNode', () => {
  let node;

  beforeEach(() => {
    node = new Node('pizza')
  })

  it('should be a thing', () => {
    expect(node).to.exist
  })

  it('should default next to null', () => {
    expect(node.next).to.equal(null);
    // expect(node.prev).to.equal(null);
  })

  it('should take value and assign it to val prop', () => {
    expect(node.val).to.equal('pizza')
  })
})
