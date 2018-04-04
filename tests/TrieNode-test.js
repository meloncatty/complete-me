import { expect } from 'chai';
import Node from '../scripts/TrieNode'

describe('TrieNode', () => {
  let node;

  beforeEach(() => {
    node = new Node('conga')
  })

  it('should be a thing', () => {
    expect(node).to.exist
  })

  it('should default completeWord to false', () => {
    expect(node.completeWord).to.equal(false);
  })

  it('should take string and assign it to val prop', () => {
    expect(node.val).to.equal('conga')
  })
})
