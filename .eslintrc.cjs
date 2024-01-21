module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react/jsx-runtime', 'plugin:react-hooks/recommended'],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
	settings: {
		react: { version: '18.2' },
		'import/resolver': {
			alias: {
                map: [['@', path.resolve(__dirname, './src')]],
			},
		},
	},
	plugins: ['react-refresh'],
	rules: {
		'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
	},
}
