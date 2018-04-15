import { expect } from 'chai';
import Node from '../scripts/TrieNode'

describe('TrieNode', () => {
  let node;

  it('should have prop val that defaults to null', () => {
    let current = new Node()
    expect(current.val).to.equal(null)
  })

  it('should have prop children that defaults to empty object', () => {
    let current = new Node()
    expect(current.children).to.deep.equal({})
  })

  it('should have prop completeWord that defaults to false', () => {
    let current = new Node()
    expect(current.completeWord).to.be.false
  })

  beforeEach(() => {
    node = new Node('conga')
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
})
