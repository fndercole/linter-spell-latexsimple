'use babel'

describe('The spell-simple provider for Atom Linter', () => {
  const grammar = require('../lib/main').provideGrammar()[0]

  beforeEach(() => {
    waitsForPromise(() => {
      return atom.packages.activatePackage('spell-simple')
    })
  })
})
