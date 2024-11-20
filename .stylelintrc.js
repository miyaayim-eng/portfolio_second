/**
 * stylelint Configuration
 */
module.exports = {
  extends: 'stylelint-config-recommended-scss',
  rules: {
    // ルールを無視してセレクタの特異性が降順にならないようにチェックしません
    'no-descending-specificity': null,
    // ルールを無視して重複するセレクタをチェックしません
    'no-duplicate-selectors': null,
  },
};
