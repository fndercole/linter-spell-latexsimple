'use babel'

export default {
  provideGrammar () {
    return [{
      grammarScopes: ['text.tex.latex'],
      findLanguageTags: textEditor => { return ['en-US'] },
      checkedScopes: {
        'text.tex.latex': true
      },
      filterRanges: (textEditor, ranges) => {
        return {
          ranges: ranges,
          ignoredRanges: []
        }
      }
    }]
  },

  activate () {
    require('atom-package-deps').install('spell-simple')
      .then(() => {
        console.log('All dependencies installed, good to go')
      })
  },

  deactivate () {
  }
}
