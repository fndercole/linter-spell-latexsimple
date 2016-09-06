'use babel'

export default {
  provideGrammar () {
    return [{
      grammarScopes: ['text.tex.latex'],
      checkedScopes: {
        'text.tex.latex': true,
        'meta.class.latex': false,
        'meta.require.include.latex': false,
        'meta.verbatim.inline.latex': false,
        'meta.verbatim.multiline.latex': false,
        'inline.math.latex': false,
        'display.math.latex': false,
        'support.type.latex': false,
        'support.function.latex': false,
        'support.function.section.latex': false,
        'support.function.environment.latex': false,
        'constant.character.escape.latex': false,
        'entity.name.class.latex': false,
        'entity.name.environment.latex': false,
        'constant.numeric.latex': false,
        'constant.keyword.unit.latex': false,
        'comment.inline.latex': false,
        'variable.parameter.function.latex': false
      }
    }]
  },
}
