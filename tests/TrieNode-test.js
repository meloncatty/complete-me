import { expect } from 'chai';
import Node from '../scripts/TrieNode'

describe('TrieNode', () => {
  let node;

  beforeEach(() => {
    node = new Node('conga')
  })

  it('should exist', () => {
    expect(node).to.exist
  })

  it('should default completeWord to false', () => {
    expect(node.completeWord).to.equal(false);
  })

  it('should take string and assign it to val prop', () => {
    expect(node.val).to.equal('conga')
  })

  it('should have completeWord property as false when created', () => {
    expect(node.completeWord).to.equal(false)
  })

  it('should have children property as empty object when created', () => {
    expect(node.children).to.deep.equal({})
  })

  // it('should have zero prefixes when created', () => {
  //   expect(node.prefixes).to.equal(0)
  // })
})
