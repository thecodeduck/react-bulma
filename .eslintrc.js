
module.exports = {
 parser: 'babel-eslint',
 extends: 'airbnb',

 rules: {
		'arrow-parens': [ 'off' ],
		"comma-dangle": ["warn", {
			"arrays": "always-multiline",
			"objects": "always-multiline",
			"imports": "always-multiline",
			"exports": "always-multiline",
			"functions": "never",
		}],
	 	'class-methods-use-this': 'off',
    "import/no-extraneous-dependencies": [
     "error", {"devDependencies": true, "optionalDependencies": false, "peerDependencies": false}
    ],
		'import/no-named-default' : 'off',
    "import/no-useless-path-segments": 'off',
    'indent':[ 'warn', 'tab' ],
		'max-len': 'warn',
		'no-else-return': 'off',
		'no-param-reassign': 'warn',
		'no-shadow': 'warn',
    'no-tabs': 'off',
		'no-unused-vars': 'warn',
		'operator-linebreak': 'off',
		'quotes': 'warn',
		'quote-props': 'warn',
		'react/destructuring-assignment': 'warn',
		'react/forbid-prop-types': 'warn',
		'react/no-unused-prop-types': 'warn',
		'react/jsx-curly-brace-presence': 'warn',
		'react/jsx-indent': [ 'warn', 'tab' ],
		'react/jsx-indent-props': [ 'warn', 'tab' ],
		'react/jsx-one-expression-per-line': 'off',
		'react/jsx-boolean-value': 'warn',
		'react/no-multi-comp': 'off',
		'react/no-unused-state': 'warn',
    'react/prefer-stateless-function': 'off',
		'react/prop-types': 'warn',
 }

};
