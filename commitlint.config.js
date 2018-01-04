module.exports = {
    rules: {
        'body-leading-blank': [2, 'always'],
        'header-max-length': [2, 'always', 50],
        'subject-case': [2, 'always', 'sentence-case'],
        'subject-empty': [2, 'never'],
        'subject-full-stop': [2, 'never', '.'],
        'type-empty': [2, 'never'],
        'type-enum': [2, 'always', [
            'build',
            'fix',
            'feat',
            'docs',
            'style',
            'refactor',
            'test',
            'revert'
        ]]
    }
};
